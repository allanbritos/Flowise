// constant
export const gridSpacing = 3
export const drawerWidth = 260
export const appDrawerWidth = 320
export const maxScroll = 100000
//export const baseURL = process.env.NODE_ENV === 'production' ? window.location.origin : window.location.origin.replace(':8080', ':3000')
export const baseURL =
    process.env.NODE_ENV === 'development'
        ? window.location.origin.replace(`:${process.env.PORT}`, `:8080${process.env.PUBLIC_URL}`)
        : `${window.location.origin}${process.env.PUBLIC_URL}`

export const uiBaseURL = window.location.origin
export const FLOWISE_CREDENTIAL_ID = 'FLOWISE_CREDENTIAL_ID'
export const REDACTED_CREDENTIAL_VALUE = '_FLOWISE_BLANK_07167752-1a71-43b1-bf8f-4f32252165db'
export const urlPrefix = `${process.env.PUBLIC_URL}`
