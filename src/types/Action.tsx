export interface Action<T> {
    type: string;
    payload?: T[] | T;
}
