import { CreateDateColumn, Entity, JoinTable, ManyToMany, ManyToOne, OneToOne, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { Game } from "../../games/entities/Game";
import { User } from "./User";

@Entity("orders")
class Order {
  @PrimaryColumn()
  id: string;

  @ManyToOne(() => User, (user) => user.orders)
  user: User;

  @ManyToMany(() => Game, (game) => game.orders)
  @JoinTable()
  games: Game[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export { Order };