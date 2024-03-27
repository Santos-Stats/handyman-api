import { Resolver, Query, Args, ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Statistic {
  @Field()
  type: string;

  @Field()
  value: number;
}