import { createContext, useContext } from "react"
import Check from "../src/assets/check.svg"
import Error from "../src/assets/alert.svg"
import { toast } from 'react-toastify'
import * as apiClient from "../api/api.js"
import { useQuery } from 'react-query'
const AppContext = createContext(undefined);

export const AppContextProvider = ({ children }) => {

    const { isLoggedIn } = useQuery('validateToken', apiClient.validateToken, {
        retry: false
    });

    return (
        <AppContext.Provider value={
            {
                showToast: ({message, type}) => {
                    if(type == 'SUCCESS'){
                        toast.success(message, {
                            icon: () =>  <img src={Check}/>,
                            className: 'toast-success'
                        });
                      }
                      else if(type == 'ERROR'){
                        toast.error(message, {
                            icon: () => <img src={Error} />,
                            className: 'toast-error'
                        });
                      }
                },
                isLoggedIn: isLoggedIn
            }
        }>
            { children }
        </AppContext.Provider>
    )
}

export const useAppContext = () => {
    const context = useContext(AppContext);
    return context;
}