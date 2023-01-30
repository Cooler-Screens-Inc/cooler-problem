// A module of userful decorators to combine typeorm and class validator

import { IsString, IsUUID, MaxLength } from 'class-validator';
import { Column, PrimaryColumn } from 'typeorm';

export const UuidKey = (): PropertyDecorator =>
  combine(PrimaryColumn({ type: 'uuid' }), IsUUID());

export const StringCol = ({ maxLen }: { maxLen: number }): PropertyDecorator =>
  combine(
    Column({ type: 'varchar', length: maxLen }),
    IsString(),
    MaxLength(maxLen)
  );

function combine(...decorators: PropertyDecorator[]): PropertyDecorator {
  return (target, propertyKey) =>
    decorators.forEach((d) => d(target, propertyKey));
}
