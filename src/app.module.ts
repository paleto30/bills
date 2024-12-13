import { Module } from '@nestjs/common';
import { CommonModule } from './common/common.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { envs } from './config';
import { RoleModule } from './role/role.module';
import { RoleModule } from './role/role.module';


@Module({
    imports: [
        CommonModule,

        TypeOrmModule.forRoot({
            type: 'postgres',
            host: envs.db_host,
            database: envs.db_name,
            username: envs.db_username,
            password: envs.db_password,
            poolSize: 120,
            logging: true,
            entities: [],
            synchronize: true,
            autoLoadEntities: true,
        }),

        RoleModule,
    ],
    controllers: [],
    providers: [],
})
export class AppModule { }
