import { EnvService } from './env.service'; // import environment service


export const EnvServiceFactory = () => {

    const env: any = new EnvService(); // Create env Instance
    // Read environment variables from browser window
    const browserWindow: any = window || {};
    const browserWindowEnv = browserWindow['__env'] || {};

    for (const key in browserWindowEnv) {
        if (browserWindowEnv.hasOwnProperty(key)) {
            env[key] = browserWindow['__env'][key];
        }
    }

    return env;
};

export const EnvServiceProvider = {
    provide: EnvService,
    useFactory: EnvServiceFactory,
    deps: [],
};