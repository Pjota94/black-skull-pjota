export interface ISuplement {
  name: string;
  id: number;
}

export interface IProductNew {
  name: string;
  price: number;
  id: number;
  image: any;
  amount?: number;
}

export interface IProduct {
  name: string;
  price: number;
  id: number;
  image: any;
  amount?: any;
  item?: any;
}

export interface ITitle {
  name: string;
}

export interface IButton {
  name: string;
}

export interface ICardBlog {
  url: string;
  date: string;
  title: string;
  id: number;
}

export interface ICardObjective {
  objective: string;
  image: string;
}

export interface ICardHighlight {
  title: string;
  image: string;
  buttonName: string;
  spanName: string;
}

export interface IInfosFooter {
  description: string;
  id: number;
}

export interface IInfosTitle {
  title: string;
  array: IInfosFooter[];
}

export interface IDropBoxInfo {
  title: string;
  id: number;
}

export interface IDropBox {
  array: IDropBoxInfo[];
}
