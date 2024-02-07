import { lazy } from 'react'
import config from '../config'

// project imports
import MainLayout from 'layout/MainLayout'
import Loadable from 'ui-component/loading/Loadable'

// chatflows routing
const Chatflows = Loadable(lazy(() => import('views/chatflows')))

// marketplaces routing
const Marketplaces = Loadable(lazy(() => import('views/marketplaces')))

// apikey routing
const APIKey = Loadable(lazy(() => import('views/apikey')))

// tools routing
const Tools = Loadable(lazy(() => import('views/tools')))

// assistants routing
const Assistants = Loadable(lazy(() => import('views/assistants')))

// credentials routing
const Credentials = Loadable(lazy(() => import('views/credentials')))

// variables routing
const Variables = Loadable(lazy(() => import('views/variables')))

// ==============================|| MAIN ROUTING ||============================== //
console.log({ BASEPATH: config.basePath })
const MainRoutes = {
    path: config.basePath,
    element: <MainLayout />,
    children: [
        {
            path: config.basePath,
            element: <Chatflows />
        },
        {
            path: config.basePath + '/chatflows',
            element: <Chatflows />
        },
        {
            path: config.basePath + '/marketplaces',
            element: <Marketplaces />
        },
        {
            path: config.basePath + '/apikey',
            element: <APIKey />
        },
        {
            path: config.basePath + '/tools',
            element: <Tools />
        },
        {
            path: config.basePath + '/assistants',
            element: <Assistants />
        },
        {
            path: config.basePath + '/credentials',
            element: <Credentials />
        },
        {
            path: config.basePath + '/variables',
            element: <Variables />
        }
    ]
}

export default MainRoutes
