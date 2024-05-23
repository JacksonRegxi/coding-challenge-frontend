import {DataError} from "../../../core/domain/DataError";
import {Movie} from "../../../domain/entities/movie";
import {defineStore} from "pinia";

interface State {
    movies: Array<Movie> | null;
    error?: string,
    serverError?: DataError,
    successStatus: boolean,
}

const movieState = defineStore('MovieState', {
    state: (): State => {
        return {
            movies: null,
            error: undefined,
            serverError: undefined,
            successStatus: false,
        }
    },
    getters: {},
    actions: {}
});

export default movieState;

export type MovieStore = Omit<ReturnType<typeof movieState>, keyof ReturnType<typeof defineStore>>;
