export interface IRestService<T>{
  getItems(): Array<T>;
  getItem(id: number): T;

  addItem(item: T): void;

  updateItem(item: T): void;

  deleteItem(id: number): void;
}
