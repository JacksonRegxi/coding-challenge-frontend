import {Either} from "../../core/domain/Either.ts";
import {DataError} from "../../core/domain/DataError.ts";
import {CustomerMovie} from "../entities/loan/CustomerMovie.ts";

export interface ILoanRepository {
    storeCustomersMovies(customerMovie: CustomerMovie): Promise<Either<DataError, Boolean>>;
}