import React from 'react'
import { useNotifications } from '../hooks/useNotifications'
import { positionStyles } from '../constants/positions'
import { interpolateTemplate } from '../utils/interpolateTemplate'
import type { SocialProofWidgetProps } from '../types'
import '../styles/animations.css'

export const SocialProofWidget: React.FC<SocialProofWidgetProps> = ({
    data,
    delay = 6000,
    duration = 4000,
    loop = true,
    random = false,
    delayBeforeStart = 0,

    position = 'bottom-left',
    animation = 'fade',
    className = '',
    style,
    theme = 'light',

    children,
    render,
    template,

    onShow,
    onHide,
    onLoop,
    onEnd,
}) => {
    const { currentItem, currentIndex, visible } = useNotifications({
        data,
        delay,
        duration,
        loop,
        random,
        delayBeforeStart,
        onShow,
        onHide,
        onEnd,
        onLoop,
    })

    if (!currentItem) return null

    const containerStyle = {
        ...positionStyles[position],
        ...style,
    }

    const animationClass = visible
        ? `rsp-${animation}-in`
        : `rsp-${animation}-out`

    const themeClass = `rsp-theme-${theme}`

    const baseClass = `rsp-notification ${themeClass} ${animationClass} ${className}`

    const content = (() => {
        if (typeof children === 'function') return children(currentItem, currentIndex!)
        if (typeof render === 'function') return render(currentItem, currentIndex!)
        if (template) return <span>{interpolateTemplate(template, currentItem)}</span>
        return (
            <div>
                <strong>{currentItem.name}</strong> from <em>{currentItem.location}</em>{' '}
                {currentItem.action} {currentItem.item}
            </div>
        )
    })()

    return (
        <div className={baseClass} style={containerStyle}>
            {content}
        </div>
    )
}
