import { User as iUser } from "./interface/user.interface";

export class User implements iUser {
  id: number;
  isAdmin: boolean;
}
