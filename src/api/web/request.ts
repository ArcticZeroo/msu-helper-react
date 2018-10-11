import * as request from 'request';
import IJsonSerializable from "../JsonSerializable";

export default async function restRequest<T = any>(uri: string) : Promise<T> {
    return new Promise<T>((resolve: (value: any) => void, reject: (err: Error) => void) => {
        request({ uri, rejectUnauthorized: false, json: true },
            (err, res, body) => {
                if (err) {
                    if (res && res.statusCode.toString()[0] !== '2') {
                        reject(new Error(`(${res.statusCode}) ${err}`));
                    } else {
                        reject(err);
                    }
                    return;
                }

                if (!res) {
                    reject(new Error('Response is empty.'));
                    return;
                }

                if (res.statusCode.toString()[0] !== '2') {
                    reject(new Error(res.statusCode.toString()));
                    return;
                }

                if (!body || body == null) {
                    reject(new Error('Body is empty.'));
                    return;
                }

                resolve(body as T);
            });
    });
}

export async function restRequestAndSerialize<T>(uri: string, serializable: IJsonSerializable<T>): Promise<T> {
    try {
        const result: any = await restRequest(uri);

        return serializable.fromJson(result);
    } catch (e) {
        throw e;
    }
}