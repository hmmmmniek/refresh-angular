import { Observable, debounceTime, distinctUntilChanged } from "rxjs";

export function withPatience<T>(input: Observable<T>, amountOfPatience?: number): Observable<T> {
    return input.pipe(debounceTime(amountOfPatience || 50), distinctUntilChanged());
}
export function isObject(object: unknown) : boolean {
    return object != null && typeof object === 'object';
}
export function deepEqual(object1: any, object2: any, ignoreProperties?: { [key: string]: boolean }) {
    if (!object1 || !object2) {
        return object1 === object2;
    }

    const keys1 = Object.keys(object1);
    const keys2 = Object.keys(object2);

    if (keys1.length !== keys2.length) {
        return false;
    }

    for (const key of keys1) {
        if (!ignoreProperties?.[key]) {
            const val1 = object1[key];
            const val2 = object2[key];
            const areObjects = isObject(val1) && isObject(val2);
            if (areObjects && val1 instanceof Date && val2 instanceof Date) {
                return val1.getTime() === val2.getTime();
            }
            if ((areObjects && !deepEqual(val1, val2, ignoreProperties)) || (!areObjects && val1 !== val2)) {
                return false;
            }
        }
    }

    return true;
}