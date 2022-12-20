export interface IRestService<T>
{
  getItems(): Promise<Array<T>>;

  getItem(id: number): T;

  addItem(item: T): void;

  updateItem(item: T): void;

  deleteItem(id: number): void;
}
