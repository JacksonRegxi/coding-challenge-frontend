import {Either} from "../../core/domain/Either.ts";
import {DataError} from "../../core/domain/DataError.ts";
import {CustomerMovie} from "../entities/loan/CustomerMovie.ts";
import {Movie} from "../entities/movie";
import {MovieReturn} from "../entities/loan/MovieReturn.ts";

export interface ILoanRepository {
    storeCustomersMovies(customerMovie: CustomerMovie): Promise<Either<DataError, Boolean>>;
    fetchAvailableMoviesOnly(is_available: number): Promise<Either<DataError, Array<Movie>>>
    storeMovieReturn(movieReturn: MovieReturn): Promise<Either<DataError, Boolean>>;
}