import { Dispatch, ReactNode, SetStateAction } from "react";
import { IProduct } from ".";

export interface IProviderProps {
  children: ReactNode;
}

export interface IValueProps {
  isModal: boolean;
  setIsModal: Dispatch<SetStateAction<boolean>>;
  sidebar: boolean;
  setSidebar: Dispatch<SetStateAction<boolean>>;
}
