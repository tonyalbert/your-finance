import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { signInDto } from './dto/signInDto';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}
        
    @Post('/login')
    signIn(@Body() signInDto: signInDto) {
        const token = this.authService.signIn(signInDto.email, signInDto.password);
        
        if(!token) {
            return {
                message: 'Invalid credentials'
            }
        }

        return token
    }

}
