import { UserModel } from "../database"
import { User } from "../interfaces/interface";


export const userService = {
    async postUser(entity: object){
        return await UserModel.create(entity)
        },

    async updateUser(id: string, body: object){
        await UserModel.findByIdAndUpdate(id, body);
        const updatedUser = await UserModel.findById(id)
        return updatedUser;
    },

    async deleteUser(id: string){
        return await UserModel.findByIdAndDelete(id)

    }
}

