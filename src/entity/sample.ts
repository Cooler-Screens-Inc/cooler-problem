import { Entity } from 'typeorm';
import { StringCol, UuidKey } from './decorators';

@Entity()
export class Sample {
  @UuidKey()
  id!: string;

  @StringCol({ maxLen: 100 })
  message!: string;
}
