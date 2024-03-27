import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Round {
  @Field(() => Int)
  id: number;
  
  @Field()
  name: string;
}