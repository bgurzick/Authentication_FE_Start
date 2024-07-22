import { createContext, useContext, useMemo} from 'react';
import { useCookies } from 'react-cookie'
import axios from 'axios';

//create context
const AuthContext = createContext()

//create context provider
export const UserProvider = ({children}) => {
    //create cookies
    return <AuthContext.Provider>
        {children}
    </AuthContext.Provider>;
};
