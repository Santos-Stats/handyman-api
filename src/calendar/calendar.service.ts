import { Injectable } from '@nestjs/common';
import { CreateCalendarDto } from './dto/create-calendar.dto';
import { UpdateCalendarDto } from './dto/update-calendar.dto';
import { EndpointResponse } from "../match-calendar/types/endpointResponse.type";
import { getRequest } from "../api-config/requests";
import { url } from "../api-config/urls";
import { hApiFootball } from "../api-config/headers";
import { Match } from "../match-calendar/types/match.type";

@Injectable()
export class CalendarService {
  async findAll(season) {
    const request = await getRequest(url.apiFootball.Matches, hApiFootball, {
      season: season,
      team: '128',
    });

    return request.response.map((match: Match) => {
      return {
        status: match.fixture.status.long,
        league: match.league,
        round: match.league.round,
        stadium: match.fixture.venue,
        date: new Date(match.fixture.timestamp * 1000).toLocaleDateString(
          'pt-BR',
          { timeZone: 'UTC' },
        ),
        homeTeam: match.teams.home,
        awayTeam: match.teams.away,
        refereeName: match.fixture.referee,
        goals: {
          home: match.goals.home,
          away: match.goals.away,
        },
      };
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} calendar`;
  }
}
