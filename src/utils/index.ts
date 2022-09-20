import { Exclude } from "class-transformer";

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