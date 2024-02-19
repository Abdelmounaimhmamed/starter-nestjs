import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";




@Entity("About")
export class HeroEntity {

    @PrimaryGeneratedColumn()
    id : number;


    @Column({default : ""})
    firstTitle: string;

    @Column({default : ""})
    secondTitle: string;

    @Column({default : ""})
    fullAbstractSubmission: string;

    @Column({default : ""})
    fullSubmissionSubmission: string;

    @Column({default : ""})
    authorNotification : string ;

    @Column({default : ""})
    cameraReadyDate : string ;

    @Column({default : ""})
    comferenceDate : string ;

}