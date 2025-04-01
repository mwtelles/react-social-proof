import type { NotificationData } from '../types'

/**
 * Replaces placeholders like {name} in a template string
 * with corresponding values from the data object.
 *
 * @param template - A string containing {placeholders}
 * @param data - An object with values to fill the template
 * @returns The interpolated string
 */
export function interpolateTemplate(
    template: string,
    data: NotificationData
): string {
    return template.replace(/\{([^}]+)\}/g, (_, key) => {
        const value = data[key.trim()]
        return value !== undefined ? String(value) : ''
    })
}
