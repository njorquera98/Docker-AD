"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("../users/users.service");
const bcryptjs = require("bcryptjs");
const jwt_1 = require("@nestjs/jwt");
let AuthService = class AuthService {
    constructor(usersService, jwtService) {
        this.usersService = usersService;
        this.jwtService = jwtService;
    }
    async register({ username, name, email, password }) {
        const user = await this.usersService.findOneByUsername(username);
        if (user) {
            throw new common_1.BadRequestException("Usuario ya registrado");
        }
        const correo = await this.usersService.findOneByEmail(email);
        if (correo) {
            throw new common_1.BadRequestException("Email ya registrado");
        }
        return await this.usersService.create({
            username,
            name,
            email,
            password: await bcryptjs.hash(password, 10)
        });
    }
    async login({ username, password }) {
        const user = await this.usersService.findOneByUsername(username);
        if (!user) {
            throw new common_1.UnauthorizedException("Username invalido");
        }
        const isPasswordValid = await bcryptjs.compare(password, user.password);
        if (!isPasswordValid) {
            throw new common_1.UnauthorizedException("Password invalida");
        }
        const payload = { username: user.username };
        const token = await this.jwtService.signAsync(payload);
        return { token, username };
    }
    async reset({ email }) {
        const correo = await this.usersService.findOneByEmail(email);
        if (!correo) {
            throw new common_1.NotFoundException("Correo no encontrado");
        }
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [users_service_1.UsersService,
        jwt_1.JwtService])
], AuthService);
//# sourceMappingURL=auth.service.js.map