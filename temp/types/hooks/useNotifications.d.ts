import type { NotificationData, UseNotificationsOptions } from '../types';
export declare function useNotifications({ data, delay, duration, loop, random, delayBeforeStart, onShow, onHide, onEnd, onLoop, }: UseNotificationsOptions): {
    currentIndex: number | null;
    currentItem: NotificationData | null;
    visible: boolean;
};
