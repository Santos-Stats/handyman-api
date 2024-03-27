import { Resolver, Query, Args, ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Venue {
  @Field()
  name: string;
}