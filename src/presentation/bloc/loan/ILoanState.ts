import {DataError} from "../../../core/domain/DataError.ts";
import {Movie} from "../../../domain/entities/movie";

export interface ILoanState {
    movies: Array<Movie>,
    customerName: string,
    movieName: string,
    customerId: string,
    loanDate: string,
    returnDate: string,
    movieId: string,
    loanSaved?: Boolean,
    error?: string,
    serverError?: DataError,
    successStatus: boolean,
}