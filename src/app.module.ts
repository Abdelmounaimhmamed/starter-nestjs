import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdminModule } from './admin/admin.module';
import { Admin } from './admin/admin.entity';

@Module({
  imports: [AdminModule ,TypeOrmModule.forRoot({
    host: "mysql-153287f1-mounaimhmamed-437b.a.aivencloud.com",
    type: "mysql",
    port: 10303,
    username: "avnadmin",
    password: "AVNS_3VihUQQBetJQy_cqL05",
    database: "nestjsShared",
    entities: [Admin],
    synchronize: true
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  
}
