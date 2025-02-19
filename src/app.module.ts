/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AssetsModule } from './assets/assets.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forRoot('mongodb://root:root@localhost:27018/nest?authSource=admin&directConnection=true'), AssetsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
