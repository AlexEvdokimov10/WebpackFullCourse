import {createRoot} from 'react-dom/client'
import App from './components/App'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {LazyAbout} from "./components/pages/about/About.lazy";
import {Suspense} from "react";
import { Shop } from './components/pages/shop';


const root = document.getElementById('root')

if (!root) {
    throw new Error('root not found')
}

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,

        children: [
            {
                path: '/about',
                element: (
                    <Suspense fallback={'loading...'}>
                        <LazyAbout/>
                    </Suspense>
                    
                )
            },
            {
                path: '/shop',
                element: (
                    <Suspense fallback={'loading...'}>
                        <Shop></Shop>
                    </Suspense>
                )
            }
        ]
    },
]);

createRoot(root).render(
    <RouterProvider router={router}/>
);

