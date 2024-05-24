import {ICustomerRepository} from "../../repository/ICustomerRepository.ts";
import {Customer} from "../../entities/Customer.ts";
import {Either} from "../../../core/domain/Either.ts";
import {DataError} from "../../../core/domain/DataError.ts";


export class StoreCustomerUseCase {
    private customerRepository: ICustomerRepository;

    constructor({ customerRepository }: { customerRepository: ICustomerRepository; }) {
        this.customerRepository = customerRepository;
    }

    execute(customer: Customer): Promise<Either<DataError, Boolean>> {
        return this.customerRepository.postCustomers(customer);
    }
}