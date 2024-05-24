import {Router} from "vue-router";
import {Ploc} from "../../../core/Ploc.ts";
import {CustomerStore} from "./CustomerState.ts";
import {FetchCustomersUseCase} from "../../../domain/uses-cases/customer/FetchCustomers.ts";
import {StoreCustomerUseCase} from "../../../domain/uses-cases/customer/StoreCustomer.ts";
import {Customer} from "../../../domain/entities/Customer.ts";

export class CustomerBloc extends Ploc<CustomerStore> {

    private fetchCustomersUseCase: FetchCustomersUseCase;
    private storeCustomerUseCase: StoreCustomerUseCase;

    constructor({
                    store,
                    router,
                    fetchCustomersUseCase,
                    storeCustomerUseCase
                }: {
        store: CustomerStore,
        router: Router,
        fetchCustomersUseCase: FetchCustomersUseCase,
        storeCustomerUseCase: StoreCustomerUseCase
    }) {
        super({ store, router });
        this.fetchCustomersUseCase = fetchCustomersUseCase;
        this.storeCustomerUseCase = storeCustomerUseCase
    }

    fetchCustomers = async (): Promise<void> => {
        const failureOrSuccess = await this.fetchCustomersUseCase.execute();
        failureOrSuccess.fold(
            (error) => {
                this.store.error = this.handleErrors(error);
            }, (data) => {
                console.log(data);
                this.store.customer = data
            });
    }

    storeCustomer = async (customer: Customer): Promise<void> => {
        const failureOrSuccess = await this.storeCustomerUseCase.execute(customer);
        failureOrSuccess.fold(
            (error) => {
                this.store.error = this.handleErrors(error);
            }, (data) => {
                console.log(data);
                this.store.customerSaved = data
            });
    }
}