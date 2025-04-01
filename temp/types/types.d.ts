import type { CSSProperties, ReactNode } from 'react';
/**
 * Represents a single notification item.
 * Can contain any fields; it's up to the user to define.
 */
export type NotificationData = Record<string, any>;
/**
 * Available screen positions for the widget container.
 */
export type WidgetPosition = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
/**
 * Available animation types for showing/hiding notifications.
 */
export type WidgetAnimation = 'fade' | 'slide' | 'none';
/**
 * Built-in themes.
 * 'custom' disables all internal theming.
 */
export type WidgetTheme = 'light' | 'dark' | 'custom';
/**
 * Public props for the <SocialProofWidget /> component.
 */
export interface SocialProofWidgetProps {
    data: NotificationData[];
    delay?: number;
    duration?: number;
    loop?: boolean;
    random?: boolean;
    delayBeforeStart?: number;
    position?: WidgetPosition;
    animation?: WidgetAnimation;
    className?: string;
    style?: CSSProperties;
    theme?: WidgetTheme;
    children?: (data: NotificationData, index: number) => ReactNode;
    render?: (data: NotificationData, index: number) => ReactNode;
    template?: string;
    onShow?: (data: NotificationData, index: number) => void;
    onHide?: (data: NotificationData, index: number) => void;
    onEnd?: () => void;
    onLoop?: () => void;
}
/**
 * Internal hook options used by useNotifications.
 */
export interface UseNotificationsOptions {
    data: NotificationData[];
    delay: number;
    duration: number;
    loop?: boolean;
    random?: boolean;
    delayBeforeStart?: number;
    onShow?: (data: NotificationData, index: number) => void;
    onHide?: (data: NotificationData, index: number) => void;
    onEnd?: () => void;
    onLoop?: () => void;
}
