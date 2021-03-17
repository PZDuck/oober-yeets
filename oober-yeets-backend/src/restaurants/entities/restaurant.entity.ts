import { Field, ObjectType } from '@nestjs/graphql';
import { IsBoolean, IsOptional, IsString, Length } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity()
export class Restaurant {
  @Field(() => Number)
  @PrimaryGeneratedColumn()
  id: number;

  @Field(() => String)
  @IsString()
  @Column()
  @Length(5, 64)
  name: string;

  @Field(() => Boolean, { defaultValue: false })
  @IsOptional()
  @IsBoolean()
  @Column({ default: false })
  isVegan: boolean;

  @Field(() => String)
  @IsString()
  @Column()
  address: string;
}
