import {BaseRepository} from "../../core/data/BaseRepository";
import {IMoviesRepository} from "../../domain/repository/IMoviesRepository";
import CustomAxios from "../../core/utils/CustomAxios";
import {Either} from "../../core/domain/Either";
import {DataError} from "../../core/domain/DataError";
import {Movie} from "../../domain/entities/movie";


export class MovieRepository extends BaseRepository implements IMoviesRepository  {
    constructor({ axios }: { axios: CustomAxios }) {
        super({axios});
    };


    async fetchMovies(): Promise<Either<DataError, Array<Movie>>> {
        try {
            const {data} = await this.axios.get(`/movies`);
            return Either.right(data);
        } catch (error) {
            return Either.left(this.handleErrors(error));
        }
    }
}