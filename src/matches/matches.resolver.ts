import { MatchesService } from './matches.service';
import { Resolver, Query, Args } from '@nestjs/graphql';

@Resolver()
export class MatchesResolver {
  constructor(private readonly matchesService: MatchesService) {}
  @Query(() => String)
  matches(@Args('skip') skip: number, @Args('limit') limit: number) {
    this.matchesService.getMatches(skip, limit);
  }
}