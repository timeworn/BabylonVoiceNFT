import React, {createContext, useCallback, useContext, useState} from "react";
import * as web3 from "@solana/web3.js";
import {useMagicContext} from "./MagicContext";

const connection = new web3.Connection(process.env.RPC_URL);
const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {

    const [token, setToken] = useState("");
    const [userData, setUserData] = useState({});
    const [isRegisterd, setIsRegistered] = useState(false);
    const [isLoginLoading, setIsLoginLoading] = useState(false);
    const [balance, setBalance] = useState(0);

    const {magic} = useMagicContext();

    const loginWithEmail = useCallback(async (_email, type) => {

        if (!magic && !connection) {
            console.log("login can only be called client side.");
        } else {
            try {
                // if (type === 0) {
                //     setIsLoginLoading(true);
                // }
                const idToken = await magic.auth.loginWithMagicLink({email: _email});
                // type=0: login, type=1: register
                if (type && idToken) {
                    console.log("You are already registered.");
                    setIsRegistered(true);
                    return;
                }

                await magic.user.getMetadata().then((userInfo) => {
                    setUserData(userInfo);
                    const pubKey = new web3.PublicKey(userInfo.publicAddress);
                    getBalance(pubKey)
                });
                setToken(idToken);
                // if(type === 0) {
                //     setIsLoginLoading(false);
                // }
            } catch (e) {
                console.log("Error logging in");
            }
        }
    }, [magic]);

    const getBalance = async (pubKey) => {
        connection.getBalance(pubKey).then((bal) => setBalance(bal / 1000000000))
    }

    const checkIfLoggedIn = useCallback(async () => {
        if (!magic.user) {
            console.log("Checking can only be called when magic is defined.");
        } else {
            const loggedIn = await magic.user.isLoggedIn();
            if (loggedIn) {
                const userInfo = await magic.user.getMetadata();
                setUserData(userInfo);
            } else {
                setUserData(undefined);
                setToken(undefined);
            }
        }
    }, [setUserData])

    const logOut = useCallback(async () => {
        try {
            await magic.user.logout();
            await checkIfLoggedIn();
        } catch (e) {
            console.log("Error logging out")
        }
    }, [magic])

    return (
        <AuthContext.Provider
            value={{
                userData,
                token,
                setToken,
                balance,
                isLoginLoading,
                loginWithEmail,
                logOut
            }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuthContext = () => useContext(AuthContext)
