import {createRouter, createWebHistory} from "vue-router";
import MoviesPage from "../components/core/movie/MoviesPage.vue";
import NewMovieForm from "../components/core/movie/NewMovieForm.vue";
import NewCustomerForm from "../components/core/customer/NewCustomerForm.vue";
import LoanForm from "../components/core/loan/LoanForm.vue";
import ReturnMovieForm from "../components/core/movie/ReturnMovieForm.vue";
import CustomerPage from "../components/core/customer/CustomerPage.vue";
import NotFound from "../components/core/NotFound.vue";

const router = createRouter({
    end: undefined, sensitive: undefined, strict: undefined,
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Movies Page',
            component: MoviesPage
        },
        {
            path: '/movie-form',
            name: 'Add New Movies Page',
            component: NewMovieForm
        },
        {
            path: '/customer-form',
            name: 'Add New Customer',
            component: NewCustomerForm
        },
        {
            path: '/loan-form',
            name: 'Loan Form',
            component: LoanForm
        },
        {
            path: '/return-movie-form',
            name: 'Return Movie Form',
            component: ReturnMovieForm
        },
        {
            path: '/customers',
            name: 'Customers',
            component: CustomerPage
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'NotFound',
            component: NotFound
        }
    ]
})

export default router;