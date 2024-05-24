import {DataError} from "../../../core/domain/DataError.ts";
import {Customer} from "../../../domain/entities/Customer.ts";


export interface ICustomerState {
    customer: Array<Customer>;
    customerSaved?: Boolean,
    customerName: string,
    lastname: string,
    phone: string,
    email: string,
    error?: string,
    serverError?: DataError,
    successStatus: boolean,
}