import { Injectable } from '@nestjs/common';
import { hApiFootball, hSoccerWay } from 'src/api-config/headers';
import { getRequest } from 'src/api-config/requests';
import { url } from 'src/api-config/urls';
import { EndpointResponse } from './types/endpointResponse.type';

@Injectable()
export class MatchReviewService {
    async getMatch(matchId: number): Promise<EndpointResponse[]>{
        const request = await getRequest(url.soccerWay.matchReview, hSoccerWay, {
            competition_id: '26',
            season_id: '21397'
        });
        const matchReview: EndpointResponse[] = request.response.map((match) => {
            return {
              team: {
                id: match.team.id,
                name: match.team.name,
                logo: match.team.logo,
              },
              statistics: match.statistics.map((statistic) => ({
                type: statistic.type,
              })),
            };
        });

        return matchReview;
    }
  
}