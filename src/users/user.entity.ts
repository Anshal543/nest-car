import { IsEmail } from 'class-validator';
import { Entity, Column, PrimaryGeneratedColumn, Unique, AfterInsert, AfterUpdate, AfterRemove } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  @Unique(['email'])
  @IsEmail()
  email: string;
  @Column()
  password: string;

  @AfterInsert()
  logInsert(){
    console.log('Inserted user with id', this.id);
  }

  @AfterUpdate()
  logUpdate(){
    console.log('Updated user with id', this.id);
  }

  @AfterRemove()
  logRemove(){
    console.log('Removed user with id', this.id);
  }
}
