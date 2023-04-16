import { Dispatch, ReactNode, SetStateAction } from "react";

export interface IProviderProps {
  children: ReactNode;
}

export interface IValueProps {
  isModal: boolean;
  setIsModal: Dispatch<SetStateAction<boolean>>;
}
