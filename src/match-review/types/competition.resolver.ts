import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Competition {
  @Field(() => Int)
  id: number;

  @Field()
  uuid: string;
  
  @Field()
  name: string;
}