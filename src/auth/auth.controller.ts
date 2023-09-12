import { Body, Controller, Post, Get, UseGuards, Request } from '@nestjs/common';
import { AuthService } from './auth.service';
import { signInDto } from './dto/signInDto';
import { AuthGuard } from './auth.guard';	
import { Public } from 'src/auth/SetMetadata';

@Public()
@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}
        
    @Post('login')
    signIn(@Body() signInDto: signInDto) {
        const token = this.authService.signIn(signInDto.email, signInDto.password);
        
        if(!token) {
            return {
                message: 'Invalid credentials'
            }
        }

        return token
    }

    @Get('profile')
    getProfile(@Request() req) {
      return "Rota protegida";
    }

}
