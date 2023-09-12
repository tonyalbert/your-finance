import { Injectable, UnauthorizedException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import prisma from 'src/prisma/Prisma';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(private readonly jwtService: JwtService) {}

    async signIn(email: string, password: string) {
        const user = await prisma.user.findUnique({
            where: {
                email
            }
        });

        if (!user) {
            return null; 
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return null; 
        }

        const payload = { sub: user.id, username: user.name, email: user.email };

        const access_token = this.jwtService.sign(payload);

        return {
            access_token,
        };
    }
}
