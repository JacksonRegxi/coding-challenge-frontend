import {Either} from "../../../core/domain/Either.ts";
import {DataError} from "../../../core/domain/DataError.ts";
import {ILoanRepository} from "../../repository/ILoanRepository.ts";
import {CustomerMovie} from "../../entities/loan/CustomerMovie.ts";

export class StoreLoanUseCase {
    private loanRepository: ILoanRepository;

    constructor({ loanRepository }: { loanRepository: ILoanRepository; }) {
        this.loanRepository = loanRepository;
    }

    execute(customerMovie: CustomerMovie): Promise<Either<DataError, Boolean>> {
        return this.loanRepository.storeCustomersMovies(customerMovie);
    }
}