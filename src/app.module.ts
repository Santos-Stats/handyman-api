import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { MatchesResolver } from './matches/matches.resolver';
import { MatchesService } from './matches/matches.service';
import { Calendar } from './matches/scraping/Calendar';


@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
    }),
  ],
  controllers: [],
  providers: [MatchesResolver, MatchesService, Calendar],
})
export class AppModule {}
