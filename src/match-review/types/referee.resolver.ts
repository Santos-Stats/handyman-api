import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class Referee {
  @Field()
  name: string;
}