import { createContext, useContext, useMemo} from 'react';
import { useCookies } from 'react-cookie'
import axios from 'axios';

//create context
const AuthContext = createContext()

//create context provider
export const UserProvider = ({children}) => {
    //create cookies
    const [cookies, setCookies, removeCookie] = useCookies();

    //login function
    const login = async (formData) => {
        try {
            //make call to backend
            let res = await axios({
                method: 'POST',
                url: 'http://localhost:3000/api/auth',
                data: formData
            })

            setCookies('token', res.data.token)
        } catch(err) {
            console.error(err)
        }
    };

    //signup function
    const signUp = async (formData) => {
        try {
            let res = await axios({
                method: 'POST',
                url: 'http://localhost:3000/api/users',
                data: fromData
            })

            setCookies('token', res.data.token)
        } catch (err) {
            console.error(err)
        }
    }

//logout function
    const logout = () => {
       ['token'].forEach((obj) => removeCookie(obj))
    }

    const value = useMemo(() => ({
        cookies, 
        login, 
        logout, 
        signUp,
    }), [cookies]
    );


    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

//invoke usecontext in a function so in other components you don't have to import both useContext and the context itself. You only importuseAuth.
export const useAuth = () => {
    return useContext(authContext)
}