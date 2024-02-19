import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AboutHeroController } from "./AboutHero.controller";
import { AbutHeroService } from "./AboutHero.service";
import { AboutEntity } from "./AboutHero.entity";
import { HeroEntity } from "./HeroEntity.entity";



@Module({
    imports: [TypeOrmModule.forFeature([AboutEntity , HeroEntity])],
    controllers: [AboutHeroController],
    providers: [AbutHeroService],
    exports: []
})
export class AboutHeroModule {
    
    

}