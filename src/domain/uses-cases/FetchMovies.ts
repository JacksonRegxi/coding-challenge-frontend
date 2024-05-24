import {IMoviesRepository} from "../repository/IMoviesRepository";
import {Either} from "../../core/domain/Either";
import {DataError} from "../../core/domain/DataError";
import {Movie} from "../entities/movie";

export class FetchMoviesUseCase {
    private moviesRepository: IMoviesRepository;

    constructor({ moviesRepository }: { moviesRepository: IMoviesRepository; }) {
        this.moviesRepository = moviesRepository;
    }

    execute(): Promise<Either<DataError, Array<Movie>>> {
        return this.moviesRepository.fetchMovies();
    }
}