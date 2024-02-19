
import { Module } from '@nestjs/common';
import { SpeakerController } from './speakercontroller.controller';
import { SpeakerService } from './speaker.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SpeakerEntity } from './Speaker.entity';

@Module({
    imports: [TypeOrmModule.forFeature([SpeakerEntity])],
    controllers: [SpeakerController],
    providers: [SpeakerService],
})
export class SpeakerModule {
    
}
