import {Either} from "../../core/domain/Either";
import {DataError} from "../../core/domain/DataError";
import {Movie} from "../entities/movie";


export interface IMoviesRepository {
    fetchMovies(): Promise<Either<DataError, Array<Movie>>>;
}