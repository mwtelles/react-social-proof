import { useEffect, useRef, useState } from 'react'
import type { NotificationData, SocialProofWidgetProps } from '../types'

type UseNotificationsOptions = {
    data: NotificationData[]
    delay: number
    duration: number
    loop?: boolean
    random?: boolean
    delayBeforeStart?: number
    onShow?: (data: NotificationData, index: number) => void
    onHide?: (data: NotificationData, index: number) => void
    onEnd?: () => void
    onLoop?: () => void
}

export function useNotifications({
    data,
    delay,
    duration,
    loop = false,
    random = false,
    delayBeforeStart = 0,
    onShow,
    onHide,
    onEnd,
    onLoop,
}: UseNotificationsOptions) {
    const [currentIndex, setCurrentIndex] = useState<number | null>(null)
    const [visible, setVisible] = useState(false)
    const dataRef = useRef<NotificationData[]>([])

    useEffect(() => {
        if (!data || data.length === 0) return

        const shuffled = random ? [...data].sort(() => Math.random() - 0.5) : [...data]
        dataRef.current = shuffled

        let index = 0

        const start = () => {
            const showNext = () => {
                const currentItem = dataRef.current[index]
                if (!currentItem) {
                    if (loop) {
                        onLoop?.()
                        index = 0
                        showNext()
                        return
                    } else {
                        onEnd?.()
                        return
                    }
                }

                setCurrentIndex(index)
                setVisible(true)
                onShow?.(currentItem, index)

                const hideTimeout = setTimeout(() => {
                    setVisible(false)
                    onHide?.(currentItem, index)

                    index++
                    setTimeout(showNext, delay)
                }, duration)
            }

            showNext()
        }

        const delayTimeout = setTimeout(start, delayBeforeStart)

        return () => {
            clearTimeout(delayTimeout)
        }
    }, [data, delay, duration, loop, random])

    return {
        currentIndex,
        currentItem: currentIndex !== null ? dataRef.current[currentIndex] : null,
        visible,
    }
}
