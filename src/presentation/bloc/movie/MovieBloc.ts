import router from "../../router";
import {ploc} from "../../../core/Ploc";
import {FetchMoviesUseCase} from "../../../domain/uses-cases/FetchMovies";
import {MovieStore} from "./MovieState";
import {Router} from "vue-router";

export class MovieBloc extends ploc<MovieStore> {

    private fetchMoviesUseCase: FetchMoviesUseCase;

    constructor({
                    store,
                    router,
                    fetchMoviesUseCase
                }: {
        store: MovieStore,
        router: Router,
        fetchMoviesUseCase: FetchMoviesUseCase;
    }) {
        super({ store, router });
        this.fetchMoviesUseCase = fetchMoviesUseCase;
    }

    fetchMovies = async (): Promise<void> => {
        const failureOrSuccess = await this.fetchMoviesUseCase.execute();
        failureOrSuccess.fold(
            (error) => {
                this.store.error = this.handleErrors(error);
            }, (data) => {
                this.store.movies = data
            });
    }
}