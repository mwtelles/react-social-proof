export type UseNotificationsOptions = {
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
