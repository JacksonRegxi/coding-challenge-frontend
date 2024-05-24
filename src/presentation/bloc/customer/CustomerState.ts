import {createPinia, defineStore, setActivePinia} from "pinia";
import {ICustomerState} from "./ICustomerState.ts";
setActivePinia(createPinia())
const customerState = defineStore('CustomerState', {
    state: (): ICustomerState => {
        return {
            customer: [],
            customerName: "",
            lastname: "",
            phone: "",
            email: "",
            error: undefined,
            customerSaved: undefined,
            serverError: undefined,
            successStatus: false,
        }
    },
    getters: {},
    actions: {

    }
})

export default customerState;

export type CustomerStore = Omit<ReturnType<typeof customerState>, keyof ReturnType<typeof defineStore>>;
