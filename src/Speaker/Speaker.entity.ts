import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";




@Entity()
export class SpeakerEntity {

    @PrimaryGeneratedColumn()
    id : number;
    @Column()
    title : string;

    @Column()
    fullName : string;

    @Column({default : ""})
    speakerWebsite : string ;

    @Column({default : ""})
    speakerLinkedinProfile : string ;

}