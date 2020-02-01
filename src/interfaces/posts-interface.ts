import { IUser } from './user-interface';

export interface IPosts {
    userId: number;
    id: number;
    title: string;
    body: string;
    user: IUser;
}