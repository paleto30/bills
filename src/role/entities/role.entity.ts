import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";



@Entity()
export class Role {

    @PrimaryGeneratedColumn('uuid')
    id: string;


    @Column({
        type: 'varchar'
    })
    key: string


    @Column({
        type: 'varchar'
    })
    name: string

    @Column({
        type: 'varchar'
    })
    description: string

    
    @CreateDateColumn({
        type: 'timestamp with local time zone'
    })
    created_at: Date;


    @UpdateDateColumn({
        type: 'timestamp with local time zone'
    })
    update_at: Date;

}
