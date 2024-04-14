import { LoginUserDto, RegisterUserDto } from "../dtos";
import { CustomError } from "../errors/custom.error";
import { formatUser, userService } from "../services"
import { Response, Request } from "express";




    export const newUser = async (req: Request, res: Response)=>{
        try {
            const [error, registerUserDto] = RegisterUserDto.create(req.body);
            if (error || !registerUserDto) {   // Manejar el caso en que registerUserDto sea undefined
                return res.status(400).json({ error });
            }
    
            const user = await userService.postUser(registerUserDto);
            const formattedUser = formatUser(user); // Formatear el usuario
    
            return res.json({
                msg: `Usuario creado exitosamente!`,
                user: formattedUser // Agregar el usuario formateado al mensaje de respuesta
            });
        } catch (error: any) {
            if (error.code === 11000) { // Verificar si el error es de clave duplicada (E11000)
                return res.status(400).json({ error: 'El correo electrónico ya está registrado' });
            } else {
                return res.status(400).json({ error: error.message });
            }
        }
    }

    export const updateUser = async (req: Request, res: Response)=>{
    try {
        const {id}= req.params;
        const data = await userService.updateUser(id, req.body)
        return res.json(data);
    } catch (error:any) {
        res.status(400).json({error: error.message})
    }
    }

    export const deleteUser = async (req: Request, res: Response)=>{
    try {
        const {id}= req.params;
        const data = await userService.deleteUser(id)
        return res.json(data);
    } catch (error:any) {
        res.status(400).json({error: error.message})
    }
    }
    

    export const loginUser= async (req: Request, res: Response)=>{

        const { email, password } = req.body;
        try {
            const [error, loginUserDto] = LoginUserDto.create({ email, password }); // Utiliza el DTO de login para validar los datos
            if (error || !loginUserDto) {
                return res.status(400).json({ error: error || 'Missing login data' }); // Maneja el error o la ausencia de datos de login
            }
    
            const { token } = await userService.loginUser(loginUserDto); // Utiliza el DTO de login en el servicio de usuario
    
            res.json({ token });
        } catch (error: any) {
            if (error instanceof CustomError) {
                res.status(error.statusCode).json({ error: error.message });
            } else {
                res.status(500).json({ error: 'Internal Server Error' });
            }
        }

    }


    export const getAllUsers = async ( req: Request, res: Response) => {

        try{
            const users = await userService.getAllUsers()
            if(users) res.status(200).json(users)
        }catch(error: any){
res.json({error: error.message})
        }

    }
    









