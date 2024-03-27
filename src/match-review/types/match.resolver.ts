import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Round } from './round.resolver';
import { Team } from './team.type';
import { Venue } from './venue.resolver';
import { Referee } from './referee.resolver';

@ObjectType()
export class Competition {
    @Field(() => Int)
    id: number;

    @Field()
    uuid: string;

    @Field()
    round: Round;

    @Field()
    date_time_utc: string;

    @Field()
    match_time: string;

    @Field()
    status: string;

    @Field(() => Int)
    fts_A: number;

    @Field(() => Int)
    fts_B: number;

    @Field(() => Int)
    hts_A: number;

    @Field(() => Int)
    hts_B: number;

    @Field(() => Int)
    match_day: number;

    @Field()
    team_A: Team;

    @Field()
    team_B: Team;
    
    @Field()
    venue: Venue;

    @Field(() => Int)
    attendance: number;

    @Field()
    referee: Referee
}