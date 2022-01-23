import {useDispatch, useSelector} from "react-redux";
import {addCustomerAction, removeCustomerAction} from "./customerReducer";
import {minusStoAction, plusStoAction} from "./stoReducer";
import {fetchCustomers} from "./asyncActions/customers";



function App() {

    const dispatch = useDispatch()
    const cash = useSelector(state => state.cash.cash)
    const customers = useSelector(state => state.customers.customers)
    const sto = useSelector(state => state.sto.sto)

    const addCash = (cash) => {
        dispatch({type:"ADD_CASH", payload: cash})
    }

    const getCash = (cash) => {
        dispatch({type:"GET_CASH", payload: cash})
    }

    const addCustomer = (name) => {
        const customer = {
            name,
            id: Date.now()
        }
        dispatch(addCustomerAction(customer))
    }

    const removeCustomer = (customer) => {
        dispatch(removeCustomerAction(customer.id))
    }

    const plusSto = (sto) => {
        dispatch(plusStoAction(sto))
    }

    const minusSto = (sto) => {
        dispatch(minusStoAction(sto))
    }

    return (
        <div>
            <div>{cash}</div>
            <div><button onClick={()=>addCash(Number(prompt()))}>Добавить кэш</button></div>
            <div><button onClick={()=>getCash(Number(prompt()))}>Отнять кэш</button></div>
            <div><button onClick={ ()=>addCustomer(prompt()) }>Добавить клиента</button></div>
            <div><button onClick={()=>getCash(Number(prompt()))}>Удалить клиента</button></div>
             <div><button onClick={()=>dispatch(fetchCustomers())}>Получить клиентов из базы</button></div>
            <div>
                {customers.length > 0 ?
                    <div>
                        {customers.map(customer =>
                            <div onClick={()=> removeCustomer(customer)}>{customer.name}</div>
                        )}
                    </div>
                    :
                    <div>
                        Клиенты отсутствуют!
                    </div>
                }
            </div>
            <div>
                <div><button onClick={()=>plusSto(prompt())}>Плюс сто!</button></div>
                <div><button onClick={()=>minusSto(prompt())}>Минус сто!</button></div>
                {sto}
            </div>
        </div>
    );
}

export default App;
