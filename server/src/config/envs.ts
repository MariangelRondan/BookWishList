import 'dotenv/config';
import { get } from "env-var";


export const envs={
    PORT: get('PORT').required().asPortNumber(),
    CONNECTION_STRING: get('CONNECTION_STRING').required().asString(),
    JWT_PUBLIC_KEY: get('JWT_PUBLIC_KEY').required().asString()
}