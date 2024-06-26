import {State} from "./IMovieState.ts";
import {createPinia, defineStore, setActivePinia} from "pinia";
setActivePinia(createPinia())
const movieState = defineStore('MovieState', {
    state: (): State => {
        return {
            movies: [],
            title: "",
            available: 0,
            topic: "",
            image: "",
            releaseYear: 0,
            summary: "",
            error: undefined,
            movieSaved: undefined,
            serverError: undefined,
            successStatus: false,
        }
    },
    getters: {},
    actions: {

    }
})

export default movieState;

export type MovieStore = Omit<ReturnType<typeof movieState>, keyof ReturnType<typeof defineStore>>;
