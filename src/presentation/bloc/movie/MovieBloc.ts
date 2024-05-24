import {MovieStore} from "./MovieState";
import {Router} from "vue-router";
import {Ploc} from "../../../core/Ploc.ts";
import {FetchMoviesUseCase} from "../../../domain/uses-cases/FetchMovies.ts";
import {StoreMovieUseCase} from "../../../domain/uses-cases/StoreMovie.ts";
import {Movie} from "../../../domain/entities/movie";

export class MovieBloc extends Ploc<MovieStore> {

    private fetchMoviesUseCase: FetchMoviesUseCase;
    private storeMovieUseCase: StoreMovieUseCase;

    constructor({
                    store,
                    router,
                    fetchMoviesUseCase,
                    storeMovieUseCase
                }: {
        store: MovieStore,
        router: Router,
        fetchMoviesUseCase: FetchMoviesUseCase,
        storeMovieUseCase: StoreMovieUseCase
    }) {
        super({ store, router });
        this.fetchMoviesUseCase = fetchMoviesUseCase;
        this.storeMovieUseCase = storeMovieUseCase
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

    storeMovie = async (movie: Movie): Promise<void> => {
        const failureOrSuccess = await this.storeMovieUseCase.execute(movie);
        failureOrSuccess.fold(
            (error) => {
                this.store.error = this.handleErrors(error);
            }, (data) => {
                console.log(data);
                this.store.movieSaved = data
            });
    }
}