export class Navigate {
    static readonly type = '[Router] Navigate';

    constructor(public path: string, public relativeToCurrentPath?: boolean) {}
}


export class SetPath {
    static readonly type = '[Router] SetPath';

    constructor(public path: string) {}
}


