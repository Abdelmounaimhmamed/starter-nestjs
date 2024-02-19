import { Column, Entity , PrimaryGeneratedColumn } from "typeorm";



@Entity("PartnerTable")
export class Partner {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    imageUrl : string;

}