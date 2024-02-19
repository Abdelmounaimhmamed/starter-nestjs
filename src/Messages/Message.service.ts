import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Message } from "./Message.entiry";
import { Repository } from "typeorm";



@Injectable()
export class MessageService {
    
    constructor(
        @InjectRepository(Message) private readonly messagerepo : Repository<Message>
    ){}


    async saveFile(file : Express.Multer.File , data : any){
        const written = this.messagerepo.create({
            firstName : data.firstName , 
            lastName : data.lastName ,
            email : data.email ,
            phone : data.phone ,
            fileName : file.filename , 
            filePath : file.path
        });
        console.log(written);
        return this.messagerepo.save(written);
    }


    async getAllMessages(){
        return await this.messagerepo.find({});
    }

    async deleteMessage(id : number) {
        const isFound = await this.messagerepo.findOne({where : {id}});
        if(!isFound){
            throw new HttpException("nothing has been found !",HttpStatus.BAD_REQUEST);
        }
        return await this.messagerepo.remove(isFound);
    }
}