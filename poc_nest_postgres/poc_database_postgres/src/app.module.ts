import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsernameModule } from './Entity/username.module';
import { Username } from './Entity/username.entity';

@Module({
  imports: [
    UsernameModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'password_poc',
      database: 'test_database_poc',
      entities: [Username],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
