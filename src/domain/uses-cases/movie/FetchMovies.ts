import {IMoviesRepository} from "../../repository/IMoviesRepository.ts";
import {Either} from "../../../core/domain/Either.ts";
import {DataError} from "../../../core/domain/DataError.ts";
import {Movie} from "../../entities/movie";


export class FetchMoviesUseCase {
    private moviesRepository: IMoviesRepository;

    constructor({ moviesRepository }: { moviesRepository: IMoviesRepository; }) {
        this.moviesRepository = moviesRepository;
    }

    execute(): Promise<Either<DataError, Array<Movie>>> {
        return this.moviesRepository.fetchMovies();
    }
}