
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SpeakerEntity } from './Speaker.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SpeakerService {

    constructor(
        @InjectRepository(SpeakerEntity) private readonly speakerRepository : Repository<SpeakerEntity>
    ){}

    async createSpeaker(speakerData : any) {
        const speaker = this.speakerRepository.create({
            title : speakerData.title,
            fullName : speakerData.fullName,
        });

        return await this.speakerRepository.save(speaker);
    }


    async deleteSpeaker(id : number){
        const speakerIsFound = await this.speakerRepository.findOne({where : {id }})
        if(!speakerIsFound){
            throw new HttpException("no speaker found !", HttpStatus.BAD_REQUEST);
        }
        return await this.speakerRepository.remove(speakerIsFound);
    }

    async getAllSpeakers(){
        return await this.speakerRepository.find();
    }

    async getOneSpeaker(id : number){
        return await this.speakerRepository.findOne({where : {id}});
    }
    

    
}
