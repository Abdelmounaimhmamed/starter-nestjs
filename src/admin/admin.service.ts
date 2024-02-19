import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Admin } from "./admin.entity";
import { Repository } from "typeorm";
import {compare, hash, hashSync} from "bcryptjs";


@Injectable()
export class AdminService {

    constructor(
        @InjectRepository(Admin) private readonly adminrepository : Repository<Admin>
    ){}

    
    async LoginUser(email : string , password : string ){
        const isFound = await this.adminrepository.findOne({where : {email}});
        if(!isFound){
            throw new HttpException("user not found !",HttpStatus.NOT_FOUND);
        }
        const isPasswordMatches = await compare(password , isFound.password);
        if(!isPasswordMatches){
            throw new HttpException("wrond data!",HttpStatus.UNAUTHORIZED);
        }
        return isFound;
    }

    async createSignup(user : Admin) {
        const isFound = await this.adminrepository.findOne({where : {email : user.email}});
        if(isFound){
            throw new HttpException("user already exust on the system !",HttpStatus.BAD_REQUEST); 
        }
        const hashedPassword =  hashSync(user.password , 10);
        const admin =  this.adminrepository.create({
            email : user.email,
            password : hashedPassword
        });
        return this.adminrepository.save(admin);
    }

    async getMe(id : number) {
        const isFound = await this.adminrepository.findOne({where : {id}});
        if(!isFound) {
            throw new HttpException("no user found !" , HttpStatus.BAD_GATEWAY);
        }
        return isFound;
    }

    async updateMe(id : number , data : string) {
        const isKhanaFound = await this.adminrepository.findOne({where : {id}});
        if(!isKhanaFound) {
            throw new HttpException("no khona  has been found ,", HttpStatus.BAD_REQUEST);
        }
        Object.assign(isKhanaFound , data);
        return  await this.adminrepository.save(isKhanaFound);
    }

}

