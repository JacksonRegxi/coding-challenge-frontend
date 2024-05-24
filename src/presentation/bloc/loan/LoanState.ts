import {createPinia, defineStore, setActivePinia} from "pinia";
import {ILoanState} from "./ILoanState.ts";
setActivePinia(createPinia())
const loanState = defineStore('LoanState', {
    state: (): ILoanState => {
        return {
            loanDate: "",
            returnDate: "",
            customerMovies: [],
            customerName: "",
            movieName: "",
            movieId: "",
            customerId: "",
            error: undefined,
            loanSaved: undefined,
            serverError: undefined,
            successStatus: false
        }
    },
    getters: {},
    actions: {

    }
})

export default loanState;

export type LoanStore = Omit<ReturnType<typeof loanState>, keyof ReturnType<typeof defineStore>>;
