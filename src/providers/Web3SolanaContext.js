import React, {createContext, useContext, useEffect, useState} from "react";
import {useAuthContext} from "./AuthContext";
import * as web3 from "@solana/web3.js";

const Web3SolanaContext = createContext();

export const Web3SolanaContextProvider = ({children}) => {
    const [balance, setBalance] = useState(0);
    const connection = new web3.Connection(process.env.RPC_URL);
    const {userData} = useAuthContext();

    const getBalance = async (pubKey) => {
        connection.getBalance(pubKey).then((bal) => setBalance(bal / 1000000000))
    }
    useEffect(() => {
        if (userData) {
            const pubKey = new web3.PublicKey(userData.publicAddress);
            getBalance(pubKey);
        }
    }, [userData])

    return (
        <Web3SolanaContext.Provider
            value={{
                balance
            }}>
            {children}
        </Web3SolanaContext.Provider>
    );
}

export const useWeb3SolanaContext = () => useContext(Web3SolanaContext)
