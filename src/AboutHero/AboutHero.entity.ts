import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";




@Entity("About")
export class AboutEntity {

    @PrimaryGeneratedColumn()
    id : number;

    @Column("longtext")
    parag1: string;

    @Column("longtext")
    parag2 : string;

    @Column("longtext")
    parag3 : string; 

    @Column("longtext")
    parag4 :  string;
    
}