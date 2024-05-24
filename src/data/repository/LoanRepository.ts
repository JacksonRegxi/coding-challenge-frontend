import {BaseRepository} from "../../core/data/BaseRepository.ts";
import CustomAxios from "../../core/utils/CustomAxios.ts";
import {Either} from "../../core/domain/Either.ts";
import {DataError} from "../../core/domain/DataError.ts";
import {ILoanRepository} from "../../domain/repository/ILoanRepository.ts";
import {CustomerMovie} from "../../domain/entities/loan/CustomerMovie.ts";
import {Movie} from "../../domain/entities/movie";
import {MovieReturn} from "../../domain/entities/loan/MovieReturn.ts";


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

    async fetchAvailableMoviesOnly(is_available: number): Promise<Either<DataError, Array<Movie>>> {
        try {
            const {data} = await this.axios.post(`/movies-available`, {is_available: is_available});
            return Either.right(data);
        } catch (error) {
            return Either.left(this.handleErrors(error));
        }
    }

    async storeMovieReturn(movieReturn: MovieReturn): Promise<Either<DataError, Boolean>> {
        try {
            const {data} = await this.axios.post(`/movies-return`, movieReturn);
            return Either.right(data);
        } catch (error) {
            return Either.left(this.handleErrors(error));
        }
    }
}