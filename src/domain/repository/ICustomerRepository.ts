import {Either} from "../../core/domain/Either.ts";
import {DataError} from "../../core/domain/DataError.ts";
import {Customer} from "../entities/Customer.ts";

export interface ICustomerRepository {
    fetchCustomers(): Promise<Either<DataError, Array<Customer>>>;
    postCustomers(customers: Customer): Promise<Either<DataError, Boolean>>;
}