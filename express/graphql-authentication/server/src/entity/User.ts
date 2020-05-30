import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";
import { Field, ObjectType } from "type-graphql";

@ObjectType()
@Entity("users")
export class User extends BaseEntity {
    @Field()
    @PrimaryGeneratedColumn()
    id: number;

    @Field()
    @Column("text", { nullable: false })
    username: string;

    @Field()
    @Column("text", { nullable: false })
    email: string;

    @Column("text", { nullable: false })
    password: string;

    @Column("int", { default: 0 })
    tokenVersion: number;
}
