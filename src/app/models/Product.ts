import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Category } from "./Category";

@Entity("products")
class Product {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column()
  price: number;

  @Column({ name: "announced_in", type: "timestamptz" })
  announcedIn: Date;

  @Column({ name: "photo_uri" })
  photoUri: string;

  @Column({ name: "address_district" })
  addressDistrict: string;

  @ManyToMany(() => Category)
  @JoinTable({ name: "product_categories" })
  categories: Category[];
}

export { Product };
