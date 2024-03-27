import { Resolver, Query, Args } from '@nestjs/graphql';
import { MatchReviewService } from './match-review.service';
import { EndpointResponse } from './types/endpointResponse.type';

@Resolver()
export class MatchReviewResolver {
    constructor(private readonly matchReviewService: MatchReviewService) { }

    @Query(() => [EndpointResponse])
    async matchReview(@Args('MatchId', { nullable: true }) matchId: number): Promise<EndpointResponse[]> {
        const response = await this.matchReviewService.getMatch(matchId);
        return response
    }
}
