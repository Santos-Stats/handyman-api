import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Team {
  @Field(() => Int)
  id: number;

  @Field()
  uuid: string;
  
  @Field()
  name: string;

  @Field()
  tla_name: string;

  @Field()
  display_name: string;
}