import { UsersService } from 'src/users/users.service';
import { LoginDto } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';
import { ResetDto } from './dto/reset.dto';
export declare class AuthService {
    private readonly usersService;
    private readonly jwtService;
    constructor(usersService: UsersService, jwtService: JwtService);
    register({ username, name, email, password }: {
        username: any;
        name: any;
        email: any;
        password: any;
    }): Promise<import("../users/dto/create-user.dto").CreateUserDto & import("../users/entities/user.entity").User>;
    login({ username, password }: LoginDto): Promise<{
        token: string;
        username: string;
    }>;
    reset({ email }: ResetDto): Promise<void>;
}
