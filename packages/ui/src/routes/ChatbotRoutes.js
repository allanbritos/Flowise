import { lazy } from 'react'
import config from '../config'

// project imports
import Loadable from 'ui-component/loading/Loadable'
import MinimalLayout from 'layout/MinimalLayout'

// canvas routing
const ChatbotFull = Loadable(lazy(() => import('views/chatbot')))

// ==============================|| CANVAS ROUTING ||============================== //

const ChatbotRoutes = {
    path: config.basePath,
    element: <MinimalLayout />,
    children: [
        {
            path: config.basePath + '/chatbot/:id',
            element: <ChatbotFull />
        }
    ]
}

export default ChatbotRoutes
