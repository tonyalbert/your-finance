import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { DespesaModule } from './despesa/despesa.module';
import { GanhoModule } from './ganho/ganho.module';
import { OrigemModule } from './origem/origem.module';

@Module({
  imports: [UserModule, AuthModule, DespesaModule, GanhoModule, OrigemModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
