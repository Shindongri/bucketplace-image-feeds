import { IItem } from './components/Card.spec'

export interface IResponse {
  items: IItem[];
  loading: boolean;
  error: string;
}