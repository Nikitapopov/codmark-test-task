import { Entity, Column, ManyToMany, PrimaryColumn } from "typeorm";
import { User } from "../../user/entity/user.entity";

@Entity()
export class Role {

    @PrimaryColumn("uuid")
    id: string;

    @Column("varchar", { length: 255, unique: true })
    name: string;

    @ManyToMany(type => User, user => user.roles, {
        cascade: ["insert", "update"]
    })
    users: User[];

}
