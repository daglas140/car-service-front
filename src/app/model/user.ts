import { Role } from '.';

export interface User {
    id: number;
    userName: string;
    email: string;
    persId: string;
    createdDate: Date;
    role: Role;
    token?: string;
}
