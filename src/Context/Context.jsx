import { createContext } from "react";
import PropTypes from 'prop-types';
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import auth from "../Firebase/Firebase.config";

export const AuthContext = createContext(null)

const googleProvider = new GoogleAuthProvider()

const Context = ({children}) => {

    const googleSignIn = ()=>{
        return signInWithPopup(auth, googleProvider)
    }
    const user = 'uli'

    const authvalue = {
        googleSignIn,
        user
    }

    return (
        <AuthContext.Provider value={authvalue}>
            {children}
        </AuthContext.Provider>
    );
};

Context.propTypes = {
    children : PropTypes.node.isRequired,
}
export default Context;