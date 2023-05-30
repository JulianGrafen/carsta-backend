import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'customers' })
export class CustomerEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  kennzeichen: string;

  @Column()
  email: string;

  @Column()
  artikelnummer: string;

  @Column()
  status: string;
}
