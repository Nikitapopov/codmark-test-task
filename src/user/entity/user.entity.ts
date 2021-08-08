import { Entity, Column, ManyToMany, JoinTable, PrimaryColumn } from "typeorm";
import { Role } from "../../role/entity/role.entity";

@Entity()
export class User {

    @PrimaryColumn("uuid")
    id: string;

    @Column("varchar", { length: 255, unique: true })
    login: string;

    @Column("varchar", { length: 255 })
    password: string;

    @Column("varchar", { length: 255 })
    name: string;

    @ManyToMany(type => Role, role => role.users, {
        cascade: ["insert", "update"]
    })
    @JoinTable()
    roles: Role[];

}
