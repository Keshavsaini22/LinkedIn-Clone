export const getHeader = (token) => ({
    headers: {
        'Authorization': `Bearer ${token}`
    }
})