import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { IsEmail } from 'class-validator';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 255 })
  @IsEmail()
  email: string;

  @Column({ length: 255 })
  firstName: string;

  @Column({ length: 255 })
  surName: string;

  @Column({ length: 255 })
  role: string;

}
