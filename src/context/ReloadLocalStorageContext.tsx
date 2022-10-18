import React, { useEffect, useState, createContext } from "react";

interface propsContext {
  ReloadLocalStorage: number;
  setReloadLocalStorage: React.Dispatch<React.SetStateAction<number>>;
}
export const ReloadLocalStorageContext = createContext<propsContext>({
  ReloadLocalStorage: 0,
  setReloadLocalStorage: () => {
    /*nothing*/
  },
});
interface props {
  Reload: number;
  setReload: React.Dispatch<React.SetStateAction<number>>;
  children: React.ReactNode;
}
const ReloadContext = ({ children, Reload, setReload }: props) => {
  return (
    <ReloadLocalStorageContext.Provider value={{ ReloadLocalStorage: Reload, setReloadLocalStorage: setReload }}>
      {children}
    </ReloadLocalStorageContext.Provider>
  );
};

export default ReloadContext;
