export const createNotification = (content) => {
    return {
        type: 'NEW_NOTIFICATION',
        data: {
            message: content
        },
    }
}
export const clearNotification = () => {
    return {
        type: 'CLEAR_NOTIFICATION',
        data: {
            message: ''
        },
    }
}
