import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Message } from "./Message.entiry";
import { MessageController } from "./message.controller";
import { MessageService } from "./Message.service";




@Module({
    imports: [TypeOrmModule.forFeature([Message])],
    controllers: [MessageController],
    exports: [],
    providers: [MessageService]
})
export  class MessageModule{


}