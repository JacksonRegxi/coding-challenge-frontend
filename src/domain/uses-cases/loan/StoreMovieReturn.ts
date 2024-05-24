import {Either} from "../../../core/domain/Either.ts";
import {DataError} from "../../../core/domain/DataError.ts";
import {ILoanRepository} from "../../repository/ILoanRepository.ts";
import {MovieReturn} from "../../entities/loan/MovieReturn.ts";


export class StoreMovieReturnUseCase {
    private loanRepository: ILoanRepository;

    constructor({ loanRepository }: { loanRepository: ILoanRepository; }) {
        this.loanRepository = loanRepository;
    }

    execute(movieReturn: MovieReturn): Promise<Either<DataError, Boolean>> {
        return this.loanRepository.storeMovieReturn(movieReturn);
    }
}