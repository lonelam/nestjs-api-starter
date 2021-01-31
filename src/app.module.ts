import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ORM_OPTIONS } from './config';
import { UserModule } from './user/user.module';

@Module({
  imports: [TypeOrmModule.forRoot(ORM_OPTIONS), UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
