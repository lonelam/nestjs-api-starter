import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const SECRET = 'secret-key';
export const ORM_OPTIONS: TypeOrmModuleOptions = {
  type: 'postgres',
  host: '127.0.0.1',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'postgres',
  //   entities: ['dist/**/*.entity{.ts,.js}'],
  //   synchronize: true,
  autoLoadEntities: true,
};
