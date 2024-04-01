import { Module } from '@nestjs/common';
//import { AppController } from './app.controller';
//import { AppService } from './app.service';
import { MysqlService } from './mysql/mysql.service';
import { MysqlController } from './mysql/mysql.controller';

@Module({
  imports: [],
  controllers: [MysqlController],
  providers: [MysqlService],
})
export class AppModule {}
