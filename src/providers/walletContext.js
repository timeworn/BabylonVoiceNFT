import React, {createContext, useContext, useState} from "react";

const WalletContext = createContext();

export const WalletContextProvider = ({children}) => {
    const [isWalletModalVisible, setIsWalletModalVisible] = useState(false);

    return (
        <WalletContext.Provider
            value={{
                isWalletModalVisible,
                setIsWalletModalVisible
            }}>
            {children}
        </WalletContext.Provider>
    );
}

export const useWalletContext = () => useContext(WalletContext)
