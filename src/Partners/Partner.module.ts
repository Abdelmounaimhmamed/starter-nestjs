import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Partner } from "./Patner.entity";
import { PartnerController } from "./Partner.controller";
import { PartnerService } from "./Partner.service";



@Module({
    imports: [TypeOrmModule.forFeature([Partner])],
    controllers: [PartnerController],
    exports: [],
    providers: [PartnerService]
})
export class PartnerModule {
    

}