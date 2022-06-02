import React, {createContext, useContext, useEffect, useState} from 'react';
import {Magic} from "@magic-sdk/react-native";

const MagicContext = createContext();

export const MagicContextProvider = ({children}) => {
    const [magic, setMagic] = useState({});

    useEffect(() => {
        if (Object.keys(magic).length === 0) {
            setMagic(new Magic(process.env.MAGIC_API_KEY));
        }
    }, [magic]);

    return (
        <MagicContext.Provider
            value={{
                magic
            }}
        >
            {children}
        </MagicContext.Provider>
    )
}

export const useMagicContext = () => useContext(MagicContext)