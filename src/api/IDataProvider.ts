export default interface IDataProvider<T> {
    retrieve(): Promise<T>;
}