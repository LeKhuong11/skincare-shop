import { useRoutes } from "react-router-dom"
import AboutPage from "../Pages/AboutPage/AboutPage"
import ContactPage from "../Pages/ContactPage/ContactPage"
import DetailPage from "../Pages/DetailPage/DetailPage"
import FAQPage from "../Pages/FAQpage/FaqPage"
import HomePage from "../Pages/HomePage/HomePage"
import LoginPage from "../Pages/LoginPage/LoginPage"
import SearchPage from "../Pages/SearchPage/SearchPage"
import ShoppingCartPage from "../Pages/ShoppingCartPage/ShoppingCartPage"
import SignUppage from "../Pages/SignUpPage/SignUpPage"

interface IRoutes {
    path: string,
    element: any,
    children?: any[]
}

export function RoutesConfigurations() {
    const element: IRoutes[] = [
        {
            path: '/',
            element: <HomePage />,
        },
        {
            path: 'search',
            element: <SearchPage />
        },
        {
            path: 'shopping-cart',
            element: <ShoppingCartPage />,
        },
        {
            path: 'login',
            element: <LoginPage />,
        },
        {
            path: 'sign-up',
            element: <SignUppage />,
        },
        {
            path: 'about',
            element: <AboutPage />
        },
        {
            path: 'contact',
            element: <ContactPage />
        },
        {
            path: 'faq',
            element: <FAQPage />
        },
        {
            path: 'detail/:id',
            element: <DetailPage />
        }
    ]
    return useRoutes(element)
}