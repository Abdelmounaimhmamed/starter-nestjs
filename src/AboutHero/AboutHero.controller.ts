import { Body, Controller, Get, Post } from "@nestjs/common";
import { AbutHeroService } from "./AboutHero.service";


@Controller()
export class AboutHeroController {

    constructor( 
        private readonly aboutHeroService : AbutHeroService
    ){}

    @Get("getHeroSection")
    async getHeroSection(){
        return await this.aboutHeroService.getHeroSection();
    }
    
    @Get("getAbout")
    async getAboutSection(){
        return await this.aboutHeroService.getAboutSection();
    }

    @Post("updateHeroSection")
    async updateHeroSection(@Body() data : any){
        console.log(data);
        return await this.aboutHeroService.updateHeroSection(data);
    }

    @Post("/updateAboutSection")
    async updateAboutSection(@Body() data : any){
        console.log(data);
        return await this.aboutHeroService.updateAboutSection(data);
    }a 
}