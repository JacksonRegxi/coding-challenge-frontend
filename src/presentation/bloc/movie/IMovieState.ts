import {Movie} from "../../../domain/entities/movie";
import {DataError} from "../../../core/domain/DataError.ts";


export interface State {
    movies: Array<Movie>;
    error?: string,
    serverError?: DataError,
    successStatus: boolean,
}