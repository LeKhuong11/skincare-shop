import { useRoutes } from "react-router-dom"
import AboutPage from "../pages/AboutPage/AboutPage"
import ContactPage from "../pages/ContactPage/ContactPage"
import DetailPage from "../pages/DetailPage/DetailPage"
import FAQPage from "../pages/FAQpage/FaqPage"
import HomePage from "../pages/HomePage/HomePage"
import LoginPage from "../pages/LoginPage/LoginPage"
import SearchPage from "../pages/SearchPage/SearchPage"
import ShoppingCartPage from "../pages/ShoppingCartPage/ShoppingCartPage"
import SignUppage from "../pages/SignUpPage/SignUpPage"

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