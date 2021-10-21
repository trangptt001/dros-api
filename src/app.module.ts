import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Role } from './entity/role.entity';
import { User } from './entity/user.entity';
import { Vehicle } from './entity/vehicle.entity';
import { AuthModule } from './module/auth/auth.module';
import { UserModule } from './module/user/user.module';
import { ConfigModule } from '@nestjs/config';
import configuration from './config/configuration';
import { UserRole } from './entity/userrole.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3307,
      username: 'root',
      password: '',
      database: 'dros_honda',
      entities: [User, Vehicle, Role, UserRole],
      synchronize: true,
    }),
    AuthModule,
    UserModule,
    ConfigModule.forRoot({
      load: [configuration],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
