import { BcryptAdapter, Jwt } from "../config";
import { UserModel } from "../database"
import { LoginUserDto, RegisterUserDto } from "../dtos";
import { CustomError } from "../errors/custom.error";


type SignToken = (payload: Object, duration?: string) => Promise<string | null>;

export const formatUser = (user: any) => {
    return {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role
        
    };
}


export const userService = {
    async postUser(newUser: RegisterUserDto) { // Usa tu DTO de registro en lugar de User
        // Buscar si ya existe un usuario con el mismo email
        const existingUser = await UserModel.findOne({ email: newUser.email });
        
        // Si el usuario ya existe, lanzar un error
        if (existingUser) {
            throw CustomError.badRequest('User already exist');
        }

        // Hash de la contraseña
        const hashedPassword =  BcryptAdapter.hash(newUser.password);

        // Crear un nuevo usuario con la contraseña hasheada
        return await UserModel.create({
            name: newUser.name,
            email: newUser.email,
            password: hashedPassword,
           
        });
    },

    async updateUser(id: string, body: object){
        await UserModel.findByIdAndUpdate(id, body);
        const updatedUser = await UserModel.findById(id)
        return updatedUser;
    },

    async deleteUser(id: string){
        return await UserModel.findByIdAndDelete(id)

    },

    async loginUser(loginUserDto: LoginUserDto) {
        const { email, password } = loginUserDto; 

        
        const user = await UserModel.findOne({ email });

        if (!user) {
            throw CustomError.badRequest('User not found');
        }

        // Validar contraseña
        const passwordsMatch = BcryptAdapter.compare(password, user.password);
        if (!passwordsMatch) {
            throw CustomError.badRequest('Incorrect Password');
        }
        
        const token = await Jwt.generateToken({ email: user.email });

        return { token, user };
    },

    async getAllUsers(){
    const users = await UserModel.find();
    return users;
}

}

