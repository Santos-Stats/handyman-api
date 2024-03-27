import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Team } from './team.type';
import { Statistic } from './statistic.type';

@ObjectType()
export class EndpointResponse {
    @Field(() => Team)
    team: Team

    @Field(() => [Statistic])
    statistics: Statistic[];
}