import { Column, CreateDateColumn, Entity, ManyToMany, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { Game } from "./Game";

@Entity('genres')
class Genre {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @ManyToMany(() => Game, (game) => game.genres)
  games: Game[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

}

export { Genre };