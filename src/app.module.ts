import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Role } from './entity/role.entity';
import { User } from './entity/user.entity';
import { Vehicle } from './entity/vehicle.entity';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'dros_honda',
    entities: [User, Vehicle, Role],
    synchronize: true,
  }), AuthModule, UserModule,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
