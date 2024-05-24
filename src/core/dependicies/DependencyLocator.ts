import CustomAxios from "../utils/CustomAxios";
import {useRouter} from "vue-router";
import {MovieRepository} from "../../data/repository/MovieRepository.ts";
import {FetchMoviesUseCase} from "../../domain/uses-cases/FetchMovies.ts";
import {MovieBloc} from "../../presentation/bloc/movie/MovieBloc.ts";
import movieState, {MovieStore} from "../../presentation/bloc/movie/MovieState";

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
    return new MovieBloc({
        store: store,
        router,
        fetchMoviesUseCase
    });
}

export const dependencyLocator = {
    provideMoviePloc
}