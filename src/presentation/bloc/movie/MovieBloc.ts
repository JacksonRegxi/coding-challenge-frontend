import {MovieStore} from "./MovieState";
import {Router} from "vue-router";
import {Ploc} from "../../../core/Ploc.ts";
import {FetchMoviesUseCase} from "../../../domain/uses-cases/FetchMovies.ts";

export class MovieBloc extends Ploc<MovieStore> {

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
                console.log(data);
                this.store.movies = data
            });
    }
}