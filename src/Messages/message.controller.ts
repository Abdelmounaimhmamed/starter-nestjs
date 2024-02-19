import { Body, Controller, Get, Param, Post, UploadedFile, UseInterceptors } from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import { diskStorage } from 'multer';
import { extname } from 'path';
import { MessageService } from "./Message.service";







@Controller()
export class MessageController  {
    constructor(
        private readonly messageService : MessageService
    ){}


    @Post("register")
    @UseInterceptors(FileInterceptor('file', {
        storage: diskStorage({
          destination: './uploads', 
          filename: (req, file, cb) => {
            const randomName = Array(32).fill(null).map(() => (Math.round(Math.random() * 16)).toString(16)).join('');
            return cb(null, `${randomName}${extname(file.originalname)}`);
          },
        }),
      }))
    async saveUploadedData(@UploadedFile("file") file , @Body() data : any ){
        console.log(file);
        return await this.messageService.saveFile(file,data);
    }

    @Get("getAllMessages")
    async geAllMessages(){
        return await this.messageService.getAllMessages();
    }

    @Post("deleteMessage/:id")
    async deleteMessages(@Param("id") id : number ){
      return await this.messageService.deleteMessage(id);
    }

    
}