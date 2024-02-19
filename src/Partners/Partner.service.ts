import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Partner } from './Patner.entity';
import { Repository } from "typeorm";




@Injectable()
export class PartnerService  {

    constructor( @InjectRepository(Partner) private readonly partnerRepo : Repository<Partner>){}


    async createPartner(imageUri : string ){
        const partner = this.partnerRepo.create({imageUrl : imageUri});
        return await this.partnerRepo.save(partner); 
    }
    
    async deletePartner(id : number){
        const isBeedaFOund =  await this.partnerRepo.findOne({where : {id}});
        if(!isBeedaFOund){
            throw new HttpException("no partner found dude !!" , HttpStatus.BAD_GATEWAY)
        }
        return await this.partnerRepo.remove(isBeedaFOund);
    }

    async getALlPartner(){
        return await this.partnerRepo.find();
    }
    
}