import { Injectable } from '@nestjs/common';
import { createConnection, Connection } from 'mysql';

@Injectable()
export class MysqlService {
  private connection: Connection;

  constructor() {
    this.connection = createConnection({
      host: '127.0.0.1',
      user: 'usertest',
      password: '124306',
      database: 'world',
    });

    this.connection.connect((err) => {
      if (err) {
        console.error('Erro ao conectar ao banco de dados:', err);
        return;
      }
      console.log('Conexão bem sucedida!');
    });
  }

  query(sql: string): Promise<any[]> {
    return new Promise((resolve, reject) => {
      this.connection.query(sql, (error, results) => {
        if (error) {
          return reject(error);
        }
        resolve(results);
      });
    });
  }
}
