import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { ResetDto } from './dto/reset.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    register(registerDto: RegisterDto): Promise<import("../users/dto/create-user.dto").CreateUserDto & import("../users/entities/user.entity").User>;
    login(loginDto: LoginDto): Promise<{
        token: string;
        username: string;
    }>;
    profile(req: any): any;
    reset(resetdto: ResetDto): Promise<void>;
}
