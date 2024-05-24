import CustomAxios from "../utils/CustomAxios";
import {useRouter} from "vue-router";
import {MovieRepository} from "../../data/repository/MovieRepository.ts";
import {MovieBloc} from "../../presentation/bloc/movie/MovieBloc.ts";
import movieState, {MovieStore} from "../../presentation/bloc/movie/MovieState";
import {StoreMovieUseCase} from "../../domain/uses-cases/movie/StoreMovie.ts";
import {FetchMoviesUseCase} from "../../domain/uses-cases/movie/FetchMovies.ts";
import customerState, {CustomerStore} from "../../presentation/bloc/customer/CustomerState.ts";
import {CustomerRepository} from "../../data/repository/CustomerRepository.ts";
import {FetchCustomersUseCase} from "../../domain/uses-cases/customer/FetchCustomers.ts";
import {StoreCustomerUseCase} from "../../domain/uses-cases/customer/StoreCustomer.ts";
import {CustomerBloc} from "../../presentation/bloc/customer/CustomerBloc.ts";
import loanState, {LoanStore} from "../../presentation/bloc/loan/LoanState.ts";
import {LoanBloc} from "../../presentation/bloc/loan/LoanBloc.ts";
import {LoanRepository} from "../../data/repository/LoanRepository.ts";
import {StoreLoanUseCase} from "../../domain/uses-cases/loan/StoreLoan.ts";
import {FetchAvailableMoviesUseCase} from "../../domain/uses-cases/loan/FetchAvailableMovies.ts";

const provAxiosInstance = () => {
    return new CustomAxios();
}

const provideMoviePloc = (store: MovieStore) => {
    const router = useRouter()
    if (!store) {
        store = movieState();
    }
    const axios = provAxiosInstance();
    const moviesRepository = new MovieRepository({ axios });
    const fetchMoviesUseCase = new FetchMoviesUseCase({moviesRepository});
    const storeMovieUseCase = new StoreMovieUseCase({moviesRepository});
    return new MovieBloc({
        store: store,
        router,
        fetchMoviesUseCase,
        storeMovieUseCase
    });
}

const provideCustomerPloc = (store: CustomerStore) => {
    const router = useRouter()
    if (!store) {
        store = customerState();
    }
    const axios = provAxiosInstance();
    const customerRepository = new CustomerRepository({ axios });
    const fetchCustomersUseCase = new FetchCustomersUseCase({customerRepository: customerRepository});
    const storeCustomerUseCase = new StoreCustomerUseCase({customerRepository: customerRepository});
    return new CustomerBloc({
        store: store,
        router,
        fetchCustomersUseCase,
        storeCustomerUseCase
    });
}

const provideLoanPloc = (store: LoanStore) => {
    const router = useRouter()
    if (!store) {
        store = loanState();
    }
    const axios = provAxiosInstance();
    const loanRepository = new LoanRepository({ axios });
    const storeLoanUseCase = new StoreLoanUseCase({loanRepository: loanRepository});
    const fetchAvailableMoviesUseCase = new FetchAvailableMoviesUseCase({loanRepository: loanRepository});
    return new LoanBloc({
        store: store,
        router,
        storeLoanUseCase,
        fetchAvailableMoviesUseCase
    });
}

export const dependencyLocator = {
    provideMoviePloc,
    provideCustomerPloc,
    provideLoanPloc
}