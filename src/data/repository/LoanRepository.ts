import {BaseRepository} from "../../core/data/BaseRepository.ts";
import CustomAxios from "../../core/utils/CustomAxios.ts";
import {Either} from "../../core/domain/Either.ts";
import {DataError} from "../../core/domain/DataError.ts";
import {ILoanRepository} from "../../domain/repository/ILoanRepository.ts";
import {CustomerMovie} from "../../domain/entities/loan/CustomerMovie.ts";


export class LoanRepository extends BaseRepository implements ILoanRepository  {
    constructor({ axios }: { axios: CustomAxios }) {
        super({axios});
    }


    async storeCustomersMovies(customerMovie: CustomerMovie): Promise<Either<DataError, Boolean>> {
        try {
            const {data} = await this.axios.post(`/store-loan`, customerMovie);
            return Either.right(data);
        } catch (error) {
            return Either.left(this.handleErrors(error));
        }
    }

}