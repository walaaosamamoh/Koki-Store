import { users } from "../data/data";
import type { User } from "../schemas/loginSchema";

export const getUsers = async ():Promise<User[]>=>{
    return users;
}