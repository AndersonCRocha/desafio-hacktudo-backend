import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("categories")
class Category {

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;
  
  @Column()
  slug: string;
  
  @Column({ name: "icon_uri" })
  iconUri: string;

}

export { Category }