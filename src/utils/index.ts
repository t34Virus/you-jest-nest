import { Exclude } from "class-transformer";
import { User as UserEntity} from "src/typeorm/User";
export interface User {
    username: string;
    password: string;
    id: number;
    email: string;
}

const entities = [UserEntity];
export {UserEntity};
export default entities;

export class SerializedUser {
    username: string;

    @Exclude()
    password: string; 

    constructor(partial: Partial<SerializedUser>) {
        Object.assign(this, partial);
    }
}


