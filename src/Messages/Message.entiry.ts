import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";



@Entity("Message")
export class Message {
    @PrimaryGeneratedColumn()
    id: number ;

    @Column()
    firstName : string ;

    @Column()
    lastName : string ;


    @Column()
    email : string ;

    @Column()
    phone : string ;

    @Column()
    filePath : string ;

    @Column()
    fileName : string ;

    @Column()
    country : string ;
    
    @Column()
    etablishment : string ;

    @Column()
    title : string ;

    @Column()
    academic : string ;

    @Column()
    status : string ;

}