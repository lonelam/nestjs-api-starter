import { UserData } from './user.interface';

declare global {
  namespace Express {
    export interface Request {
      user: UserData;
    }
  }
}
