export default interface IJsonSerializable<T> {
   fromJson(json: any): T;
}