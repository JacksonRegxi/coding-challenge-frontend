import {Either} from "../../../core/domain/Either.ts";
import {DataError} from "../../../core/domain/DataError.ts";
import {Movie} from "../../entities/movie";
import {ILoanRepository} from "../../repository/ILoanRepository.ts";


export class FetchAvailableMoviesUseCase {
    private loanRepository: ILoanRepository;

    constructor({ loanRepository }: { loanRepository: ILoanRepository; }) {
        this.loanRepository = loanRepository;
    }

    execute(): Promise<Either<DataError, Array<Movie>>> {
        return this.loanRepository.fetchAvailableMoviesOnly();
    }
}