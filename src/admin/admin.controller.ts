import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { AdminService } from "./admin.service";
import { Admin } from "./admin.entity";


@Controller()
export class AdminController {

    constructor(
        private readonly adminService : AdminService
    ){}

    @Post("/login")
    async loginuser(@Body() userData : Admin){
        console.log(userData);
        return await this.adminService.LoginUser(userData.email , userData.password);
    }

    @Post("createUser")
    async createUser(@Body() userData : Admin){
        return await this.adminService.createSignup(userData);
    }
    @Get("getme/:id")
    async getMe(@Param("id") id: number) {
        return await this.adminService.getMe(id);
    }
    @Post("updateMe/:id")
    async updateMe(@Param("id") id : number , @Body() data : string) {
        return await this.adminService.updateMe(id, data);
    }

}