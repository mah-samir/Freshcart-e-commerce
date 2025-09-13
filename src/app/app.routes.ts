import { Routes } from '@angular/router';
import { AuthLayout } from './core/layouts/auth-layout/auth-layout';
import { BlankLayout } from './core/layouts/blank-layout/blank-layout';
import { Login } from './core/auth/login/login';
import { Register } from './core/auth/register/register';
import { Home } from './features/home/home';
import { Cart } from './features/cart/cart';
import { Products } from './features/products/products';
import { Brands } from './features/brands/brands';
import { Details } from './features/details/details';
import { Chekout } from './features/chekout/chekout';
import { Categories } from './features/categories/categories';
import { Notfound } from './features/notfound/notfound';
import { gAuthGuard } from './core/guards/g-auth-guard';
import { isLoggedGuard } from './core/guards/is-logged-guard';
import { AllOrders } from './features/all-orders/all-orders';
import { ForgetPass } from './core/auth/forget-pass/forget-pass';
import { CategoryDetails } from './features/category-details/category-details';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    {
        path: '', component: AuthLayout, children: [
            { path: 'login', component: Login, title: 'Login Page' }, { path: 'register', component: Register, title: 'Register Page' }, { path: 'forget', component: ForgetPass, title: 'Reset password' }
        ], canActivate: [isLoggedGuard]
    },
    {
        path: '', component: BlankLayout, children: [
            { path: 'home', component: Home, title: 'Home Page' },
            { path: 'cart', component: Cart, title: 'cart Page' },
            { path: 'products', component: Products, title: 'products Page' },
            { path: 'brands', component: Brands, title: 'brands Page' },
            { path: 'details/:slug/:id', component: Details, title: 'details Page' },
            { path: 'checkout/:id', component: Chekout, title: 'checkout Page' },
            { path: 'allOrders', component: AllOrders, title: 'All Orders Page' },
            { path: 'categories', component: Categories, title: 'categories Page' },
            { path: 'categories/:id', component: CategoryDetails },

        ], canActivate: [gAuthGuard]
    },
    { path: "**", component: Notfound, title: 'not found' }
];