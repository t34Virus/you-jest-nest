import { Exclude } from "class-transformer";
import { TypeOrmUser } from "src/typeorm/User";

const entities = [TypeOrmUser];
export { TypeOrmUser };
export default entities;

export interface User {
    username: string;
    password: string;
    id: number;
}

export class SerializedUser {
    username: string;

    @Exclude()
    password: string; 

    constructor(partial: Partial<SerializedUser>) {
        Object.assign(this, partial);
    }
}


