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

export const dependencyLocator = {
    provideMoviePloc,
    provideCustomerPloc
}