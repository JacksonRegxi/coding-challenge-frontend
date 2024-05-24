import {createRouter, createWebHistory} from "vue-router";
import MoviesPage from "../layouts/movie/MoviesPage.vue";
import NewMovieForm from "../layouts/movie/NewMovieForm.vue";
import NewCustomerForm from "../layouts/customer/NewCustomerForm.vue";
import LoanForm from "../layouts/loan/LoanForm.vue";
import ReturnMovieForm from "../layouts/movie/ReturnMovieForm.vue";
import CustomerPage from "../layouts/customer/CustomerPage.vue";
import NotFound from "../layouts/NotFound.vue";

const router = createRouter({
    end: undefined, sensitive: undefined, strict: undefined,
    history: createWebHistory(),
    routes: [
        {
            path: '/movies',
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