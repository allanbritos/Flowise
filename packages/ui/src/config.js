const config = {
    // basename: only at build time to set, and Don't add '/' at end off BASENAME for breadcrumbs, also Don't put only '/' use blank('') instead,
    basename: '',
    basePath: process.env.PUBLIC_URL || '',
    defaultPath: '/chatflows',
    fontFamily: `'Roboto', sans-serif`,
    borderRadius: 12
}

export default config
