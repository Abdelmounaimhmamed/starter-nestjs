
import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { SpeakerService } from './speaker.service';

@Controller()
export class SpeakerController {

    constructor(
        private readonly speakerService : SpeakerService
    ){}

    @Get("getAllSpeakers")
    async getAllSpeakers(){
        return await this.speakerService.getAllSpeakers();
    }

    @Get("getOneSpeaker/:id")
    async getOneSpeaker(@Param("id") id : number){
        return await this.speakerService.getOneSpeaker(id);
    }

    @Post("createOneSpeaker")
    async createSpeaker(@Body() speakerData  : any){
        return await this.speakerService.createSpeaker(speakerData);
    }   
    @Delete("deleteSpeaker/:id")
    async updateSpeaker(@Param("id") id : number , @Body() speakerData : any){
        
    }
    


}
