import { localhostEnvironment } from './environment';

//declare let ENV_VARS: { [key: string]: string };
//const env = Object.assign(localhostEnvironment, ENV_VARS);
export const environment = {
    //...env
    ...localhostEnvironment
};
