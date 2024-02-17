import { Body, Controller, Post } from "@nestjs/common";
import { AdminService } from "./admin.service";
import { Admin } from "./admin.entity";


@Controller()
export class AdminController {

    constructor(
        private readonly adminService : AdminService
    ){}

    @Post("/login")
    async loginuser(@Body() userData : Admin){
        return await this.adminService.LoginUser(userData.email , userData.password);
    }

    @Post("createUser")
    async createUser(@Body() userData : Admin){
        return await this.adminService.createSignup(userData);
    }
    
}