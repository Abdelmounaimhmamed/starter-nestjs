import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { AboutEntity } from "./AboutHero.entity";
import { HeroEntity } from "./HeroEntity.entity";
import { Repository } from "typeorm";



@Injectable()
export class  AbutHeroService {

    constructor(
            @InjectRepository(AboutEntity) private readonly aboutRepo : Repository<AboutEntity>,
            @InjectRepository(HeroEntity) private readonly heroRepo : Repository<HeroEntity>
    ){}


    async getHeroSection(){
        return await this.heroRepo.find();
    }

    async updateHeroSection(data : HeroEntity) {
        const isFound = await this.heroRepo.find({}) ;
        Object.assign(isFound[0] , data);
        return await this.heroRepo.save(isFound);
    }


    async getAboutSection(){
        const parag =  await this.aboutRepo.find();
        return  await this.aboutRepo.find();
    }

    async updateAboutSection(someData : AboutEntity){
        const aboutSection = await this.aboutRepo.find({});
        Object.assign(aboutSection[0],someData);
        return await this.aboutRepo.save(aboutSection);
    }

}