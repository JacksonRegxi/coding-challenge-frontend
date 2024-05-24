import {Router} from "vue-router";
import {Ploc} from "../../../core/Ploc.ts";
import {StoreLoanUseCase} from "../../../domain/uses-cases/loan/StoreLoan.ts";
import {LoanStore} from "./LoanState.ts";
import {CustomerMovie} from "../../../domain/entities/loan/CustomerMovie.ts";

export class LoanBloc extends Ploc<LoanStore> {

    private storeLoanUseCase: StoreLoanUseCase;

    constructor({
                    store,
                    router,
                    storeLoanUseCase
                }: {
        store: LoanStore,
        router: Router,
        storeLoanUseCase: StoreLoanUseCase
    }) {
        super({ store, router });
        this.storeLoanUseCase = storeLoanUseCase;
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
}