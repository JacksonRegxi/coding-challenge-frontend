import {Router} from "vue-router";
import {Ploc} from "../../../core/Ploc.ts";
import {StoreLoanUseCase} from "../../../domain/uses-cases/loan/StoreLoan.ts";
import {LoanStore} from "./LoanState.ts";
import {CustomerMovie} from "../../../domain/entities/loan/CustomerMovie.ts";
import {FetchAvailableMoviesUseCase} from "../../../domain/uses-cases/loan/FetchAvailableMovies.ts";
import {StoreMovieReturnUseCase} from "../../../domain/uses-cases/loan/StoreMovieReturn.ts";
import {MovieReturn} from "../../../domain/entities/loan/MovieReturn.ts";

export class LoanBloc extends Ploc<LoanStore> {

    private storeLoanUseCase: StoreLoanUseCase;
    private fetchAvailableMoviesUseCase: FetchAvailableMoviesUseCase;
    private storeMovieReturnUseCase: StoreMovieReturnUseCase;

    constructor({
                    store,
                    router,
                    storeLoanUseCase,
                    fetchAvailableMoviesUseCase,
                    storeMovieReturnUseCase
                }: {
        store: LoanStore,
        router: Router,
        storeLoanUseCase: StoreLoanUseCase,
        fetchAvailableMoviesUseCase: FetchAvailableMoviesUseCase
        storeMovieReturnUseCase: StoreMovieReturnUseCase
    }) {
        super({ store, router });
        this.storeLoanUseCase = storeLoanUseCase;
        this.fetchAvailableMoviesUseCase = fetchAvailableMoviesUseCase;
        this.storeMovieReturnUseCase = storeMovieReturnUseCase;
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

    fetchAvailableMovies = async (is_available: number): Promise<void> => {
        const failureOrSuccess = await this.fetchAvailableMoviesUseCase.execute(is_available);
        failureOrSuccess.fold(
            (error) => {
                this.store.error = this.handleErrors(error);
            }, (data) => {
                console.log(data);
                this.store.movies = data
            });
    }

    storeMovieReturn = async (movieReturn: MovieReturn): Promise<void> => {
        const failureOrSuccess = await this.storeMovieReturnUseCase.execute(movieReturn);
        failureOrSuccess.fold(
            (error) => {
                this.store.error = this.handleErrors(error);
            }, (data) => {
                console.log(data);
                this.store.returnSuccess = data
            });
    }
}