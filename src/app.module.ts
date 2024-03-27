import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { MatchReviewService } from './match-review/match-review.service';
import { MatchReviewResolver } from './match-review/match-review.resolver';
import { CalendarModule } from './calendar/calendar.module';


@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
    }),
    CalendarModule,
  ],
  providers: [MatchReviewResolver, MatchReviewService],
})
export class AppModule { }
