import { EndpointResponse } from './types/endpointResponse.type';
import { MatchCalendarService } from './match-calendar.service';
import { Resolver, Query, Args } from '@nestjs/graphql';

@Resolver()
export class MatchCalendarResolver {
    constructor(private readonly matchCalendarService: MatchCalendarService) {}

    @Query(() => [EndpointResponse])
    async matchCalendar(@Args('skip') skip: number, @Args('limit') limit: number): Promise<EndpointResponse[]> {
        const response = await this.matchCalendarService.getCalendar(skip, limit);
        return response
    }
}
