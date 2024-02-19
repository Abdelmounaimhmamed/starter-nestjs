import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { PartnerService } from "./Partner.service";




@Controller()
export class PartnerController {

    constructor(private readonly partnerService : PartnerService){}


    @Post("createPartner")
    async createPartner(@Body() data : any){
        return  await this.partnerService.createPartner(data.imageUrl);
    }

    @Delete("deletePartner/:id")
    async deletePartner(@Param("id") id : number){
        return await this.partnerService.deletePartner(id);
    }

    @Get("getAllPartners")
    async getAllPartner(){
        return await this.partnerService.getALlPartner();
    }



}