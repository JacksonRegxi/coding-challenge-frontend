import {Router} from "vue-router";
import {Ploc} from "../../../core/Ploc.ts";
import {StoreLoanUseCase} from "../../../domain/uses-cases/loan/StoreLoan.ts";
import {LoanStore} from "./LoanState.ts";
import {CustomerMovie} from "../../../domain/entities/loan/CustomerMovie.ts";
import {FetchAvailableMoviesUseCase} from "../../../domain/uses-cases/loan/FetchAvailableMovies.ts";

export class LoanBloc extends Ploc<LoanStore> {

    private storeLoanUseCase: StoreLoanUseCase;
    private fetchAvailableMoviesUseCase: FetchAvailableMoviesUseCase;

    constructor({
                    store,
                    router,
                    storeLoanUseCase,
                    fetchAvailableMoviesUseCase
                }: {
        store: LoanStore,
        router: Router,
        storeLoanUseCase: StoreLoanUseCase,
        fetchAvailableMoviesUseCase: FetchAvailableMoviesUseCase
    }) {
        super({ store, router });
        this.storeLoanUseCase = storeLoanUseCase;
        this.fetchAvailableMoviesUseCase = fetchAvailableMoviesUseCase;
    }

    storeCustomersMovies = async (customerMovie: CustomerMovie): Promise<void> => {
        const failureOrSuccess = await this.storeLoanUseCase.execute(customerMovie);
        failureOrSuccess.fold(
            (error) => {
                this.store.error = this.handleErrors(error);
            }, (data) => {
                console.log(data);
                this.store.loanSaved = data
            });
    }

    fetchAvailableMovies = async (): Promise<void> => {
        const failureOrSuccess = await this.fetchAvailableMoviesUseCase.execute();
        failureOrSuccess.fold(
            (error) => {
                this.store.error = this.handleErrors(error);
            }, (data) => {
                console.log(data);
                this.store.movies = data
            });
    }
}