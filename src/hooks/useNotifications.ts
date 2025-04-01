import { useEffect, useRef, useState } from 'react'
import type { NotificationData, UseNotificationsOptions } from '../types'

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
    const indexRef = useRef(0)
    const hideTimerRef = useRef<NodeJS.Timeout | null>(null)
    const nextTimerRef = useRef<NodeJS.Timeout | null>(null)
    const startTimerRef = useRef<NodeJS.Timeout | null>(null)

    // Setup logic
    useEffect(() => {
        if (!data || data.length === 0) return

        // Reset refs
        indexRef.current = 0
        setVisible(false)
        setCurrentIndex(null)

        const list = random ? [...data].sort(() => Math.random() - 0.5) : [...data]
        dataRef.current = list

        const showNext = () => {
            const current = dataRef.current[indexRef.current]

            if (!current) {
                if (loop) {
                    onLoop?.()
                    indexRef.current = 0
                    showNext()
                } else {
                    onEnd?.()
                }
                return
            }

            setCurrentIndex(indexRef.current)
            setVisible(true)
            onShow?.(current, indexRef.current)

            // Schedule hiding
            hideTimerRef.current = setTimeout(() => {
                setVisible(false)
                onHide?.(current, indexRef.current)

                indexRef.current++
                // Schedule next message
                nextTimerRef.current = setTimeout(showNext, delay)
            }, duration)
        }

        // Start after optional delay
        startTimerRef.current = setTimeout(showNext, delayBeforeStart)

        return () => {
            clearTimeout(startTimerRef.current!)
            clearTimeout(hideTimerRef.current!)
            clearTimeout(nextTimerRef.current!)
        }
    }, [data, delay, duration, loop, random, delayBeforeStart])

    return {
        currentIndex,
        currentItem: currentIndex !== null ? dataRef.current[currentIndex] : null,
        visible,
    }
}
