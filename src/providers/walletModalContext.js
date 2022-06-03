import React, {createContext, useContext, useState} from "react";

const WalletModalContext = createContext();

export const WalletContextProvider = ({children}) => {
    const [isWalletModalVisible, setIsWalletModalVisible] = useState(false);

    return (
        <WalletModalContext.Provider
            value={{
                isWalletModalVisible,
                setIsWalletModalVisible
            }}>
            {children}
        </WalletModalContext.Provider>
    );
}

export const useWalletModalContext = () => useContext(WalletModalContext)
