import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Region {
  @Field(() => Int)
  id: number;

  @Field()
  uuid: string;
  
  @Field()
  name: string;
}