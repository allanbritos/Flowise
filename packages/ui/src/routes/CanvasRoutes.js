import { lazy } from 'react'
import config from '../config'

// project imports
import Loadable from 'ui-component/loading/Loadable'
import MinimalLayout from 'layout/MinimalLayout'

// canvas routing
const Canvas = Loadable(lazy(() => import('views/canvas')))
const MarketplaceCanvas = Loadable(lazy(() => import('views/marketplaces/MarketplaceCanvas')))

// ==============================|| CANVAS ROUTING ||============================== //

const CanvasRoutes = {
    path: config.basePath,
    element: <MinimalLayout />,
    children: [
        {
            path: config.basePath + '/canvas',
            element: <Canvas />
        },
        {
            path: config.basePath + '/canvas/:id',
            element: <Canvas />
        },
        {
            path: config.basePath + '/marketplace/:id',
            element: <MarketplaceCanvas />
        }
    ]
}

export default CanvasRoutes
