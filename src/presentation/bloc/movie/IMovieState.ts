import {Movie} from "../../../domain/entities/movie";
import {DataError} from "../../../core/domain/DataError.ts";


export interface State {
    movies: Array<Movie>;
    movieSaved?: Boolean,
    title: string,
    topic: string,
    image: string,
    summary: string,
    available: number,
    releaseYear: number,
    error?: string,
    serverError?: DataError,
    successStatus: boolean,
}