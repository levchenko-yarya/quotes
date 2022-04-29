import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersService } from './users/users.service';
import { UsersModule } from './users/users.module';
import { getConnectionOptions } from 'typeorm';

@Module({
  imports: [
    /*TypeOrmModule.forRoot({
      type: 'mysql',
      host: '127.0.0.1',
      port: 3307,
      username: 'root',
      password: 'password',
      database: 'test',
      entities: [],
      synchronize: false,
    }),*/
    TypeOrmModule.forRootAsync({
      useFactory: async () =>
        Object.assign(await getConnectionOptions(), {
          autoLoadEntities: true,
        }),
    }),
    AuthModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService, UsersService],
})
export class AppModule {}
