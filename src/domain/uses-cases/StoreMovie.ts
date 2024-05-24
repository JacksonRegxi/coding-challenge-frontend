import {IMoviesRepository} from "../repository/IMoviesRepository.ts";
import {Either} from "../../core/domain/Either.ts";
import {DataError} from "../../core/domain/DataError.ts";
import {Movie} from "../entities/movie";

export class StoreMovieUseCase {
    private moviesRepository: IMoviesRepository;

    constructor({ moviesRepository }: { moviesRepository: IMoviesRepository; }) {
        this.moviesRepository = moviesRepository;
    }

    execute(movie: Movie): Promise<Either<DataError, Boolean>> {
        return this.moviesRepository.postMovie(movie);
    }
}