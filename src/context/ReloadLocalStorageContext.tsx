import React, { createContext } from "react";

interface propsContext {
  ReloadLocalStorage: boolean;
  setReloadLocalStorage: React.Dispatch<React.SetStateAction<boolean>>;
}
export const ReloadLocalStorageContext = createContext<propsContext>({
  ReloadLocalStorage: false,
  setReloadLocalStorage: () => {
    /*nothing*/
  },
});
interface props {
  Reload: boolean;
  setReload: React.Dispatch<React.SetStateAction<boolean>>;
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
