import {BaseRepository} from "../../core/data/BaseRepository.ts";
import {ICustomerRepository} from "../../domain/repository/ICustomerRepository.ts";
import CustomAxios from "../../core/utils/CustomAxios.ts";
import {Either} from "../../core/domain/Either.ts";
import {DataError} from "../../core/domain/DataError.ts";
import {Customer} from "../../domain/entities/Customer.ts";


export class CustomerRepository extends BaseRepository implements ICustomerRepository  {
    constructor({ axios }: { axios: CustomAxios }) {
        super({axios});
    }


    async fetchCustomers(): Promise<Either<DataError, Array<Customer>>> {
        try {
            const {data} = await this.axios.get(`/customers`);
            return Either.right(data);
        } catch (error) {
            return Either.left(this.handleErrors(error));
        }
    }

    async postCustomers(customer: Customer): Promise<Either<DataError, Boolean>> {
        try {
            const {data} = await this.axios.post(`/store-customer`, customer)
            return Either.right(data)
        } catch (error) {
            console.log(`After request: ${error}`)
            return Either.left(this.handleErrors(error))
        }
    }
}