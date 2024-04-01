import { Controller, Get } from '@nestjs/common';
import { MysqlService } from './mysql.service';

@Controller('data')
export class MysqlController {
  constructor(private readonly mysqlService: MysqlService) {}

  @Get()
  async getData(): Promise<any[]> {
    const results = await this.mysqlService.query('select * from country');
    return results;
  }
}
