import { createContext, useState } from "react";
import { IProviderProps, IValueProps } from "../interfaces/context.interface";

export const AuthMainContext = createContext<IValueProps>({} as IValueProps);

export const MainContext = ({ children }: IProviderProps) => {
  const [isModal, setIsModal] = useState(false);

  return (
    <AuthMainContext.Provider value={{ isModal, setIsModal }}>
      {children}
    </AuthMainContext.Provider>
  );
};
