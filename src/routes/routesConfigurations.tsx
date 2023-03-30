import { useRoutes } from "react-router-dom"
import AboutPage from "../Pages/AboutPage/AboutPage"
import CheckoutPage from "../Pages/CheckoutPage/CheckoutPage"
import ContactPage from "../Pages/ContactPage/ContactPage"
import DashboardPage from "../Pages/DashboardPage/DashboardPage"
import DetailPage from "../Pages/DetailPage/DetailPage"
import FAQPage from "../Pages/FAQpage/FaqPage"
import HomePage from "../Pages/HomePage/HomePage"
import LoginPage from "../Pages/LoginPage/LoginPage"
import ProductPage from "../Pages/ProductsPage/ProductPage"
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
            path: 'products',
            element: <ProductPage />
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
            path: 'products/detail/:id',
            element: <DetailPage />
        },
        {
            path: 'dashboard',
            element: <DashboardPage />
        },
        {
            path: 'checkout',
            element: <CheckoutPage />
        },
    ]
    return useRoutes(element)
}