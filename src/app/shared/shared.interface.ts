export interface ICategory {
  description: string;
  id: string;
  name: string;
}

export interface IRes<T> {
  count: number;
  data: Array<T>;
}

export interface IResponce<T> {
  data: T;
}
