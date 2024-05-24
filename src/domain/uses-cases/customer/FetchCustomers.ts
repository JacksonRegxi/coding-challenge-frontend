import {ICustomerRepository} from "../../repository/ICustomerRepository.ts";
import {Either} from "../../../core/domain/Either.ts";
import {DataError} from "../../../core/domain/DataError.ts";
import {Customer} from "../../entities/Customer.ts";

export class FetchCustomersUseCase {
    private customerRepository: ICustomerRepository;

    constructor({ customerRepository }: { customerRepository: ICustomerRepository; }) {
        this.customerRepository = customerRepository;
    }

    execute(): Promise<Either<DataError, Array<Customer>>> {
        return this.customerRepository.fetchCustomers();
    }
}