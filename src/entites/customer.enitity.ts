import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class CustomerEntity {
  @PrimaryGeneratedColumn()
  name: string;

  @Column()
  kennzeichen: string;

  @Column()
  email: string;

  @Column()
  statu: string;
}
