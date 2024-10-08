import { Body, Controller, Post } from '@nestjs/common';
import { AuthResponseDto } from './auth.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async signIn(
    @Body('email') email: string,
    @Body('password') password: string,
  ): Promise<AuthResponseDto> {
    return await this.authService.signIn(email, password);
  }

  @Post('verify-email')
  async verifyEmail(@Body('code') code: string) {
    return await this.authService.verifyCode(code);
  }

  @Post('request-reset-password')
  async requestResetPassword(@Body('email') email: string): Promise<void> {
    return await this.authService.requestResetPassword(email);
  }
}
