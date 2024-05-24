import {CustomerMovie} from "../../../domain/entities/loan/CustomerMovie.ts";
import {DataError} from "../../../core/domain/DataError.ts";

export interface ILoanState {
    customerMovies: Array<CustomerMovie>,
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