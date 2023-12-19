import 'dotenv/config'
import settings from './settings';
import pgConfig from './postgres';
process.env.NODE_ENV = process.env.NODE_ENV || 'local';

export default class Config {
    static port = parseInt(process.env.PORT,10);
    
    static getEnv() {
        return process.env.NODE_ENV;
    }

    static getCors() {
        return settings.APP_ACCESS_CONTROL_ALLOW_ORIGIN_REGEX;
    }

    static getDatabaseConfig() {
        return pgConfig[process.env.NODE_ENV];
    }
}

