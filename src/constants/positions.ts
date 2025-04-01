import type { CSSProperties } from 'react'
import type { WidgetPosition } from '../types'

/**
 * CSS position styles for each WidgetPosition value.
 * These styles will be applied directly to the container via inline style.
 */
export const positionStyles: Record<WidgetPosition, CSSProperties> = {
    'top-left': {
        position: 'fixed',
        top: '1rem',
        left: '1rem',
        zIndex: 9999,
    },
    'top-right': {
        position: 'fixed',
        top: '1rem',
        right: '1rem',
        zIndex: 9999,
    },
    'bottom-left': {
        position: 'fixed',
        bottom: '1rem',
        left: '1rem',
        zIndex: 9999,
    },
    'bottom-right': {
        position: 'fixed',
        bottom: '1rem',
        right: '1rem',
        zIndex: 9999,
    },
}
