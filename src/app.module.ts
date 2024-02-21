import { SpeakerModule } from './Speaker/speaker.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdminModule } from './admin/admin.module';
import { Admin } from './admin/admin.entity';
import { AboutHeroModule } from './AboutHero/AboutHero.module';
import { AboutEntity } from './AboutHero/AboutHero.entity';
import { HeroEntity } from './AboutHero/HeroEntity.entity';
import { PartnerModule } from './Partners/Partner.module';
import { Partner } from './Partners/Patner.entity';
import { SpeakerEntity } from './Speaker/Speaker.entity';
import { MessageModule } from './Messages/Message.module';
import { Message } from './Messages/Message.entiry';

@Module({
  imports: [SpeakerModule, MessageModule ,AdminModule, PartnerModule,AboutHeroModule ,TypeOrmModule.forRoot({
    host: "mysql-153287f1-mounaimhmamed-437b.a.aivencloud.com",
    type: "mysql",
    port: 10303,
    username: "avnadmin",
    password: "AVNS_3VihUQQBetJQy_cqL05",
    database: "nestjsShared",
    entities: [Admin,AboutEntity , HeroEntity , SpeakerEntity , Message,Partner , SpeakerEntity],
    synchronize: false
  })],
  controllers: [AppController],
  providers: [ AppService],
})
export class AppModule {
  
}
