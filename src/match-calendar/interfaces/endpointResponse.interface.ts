export interface EndpointResponse {
    status: Status;
    league: string;
    round: string;
    stadium: Venue;
    date: number | null;
    homeTeam: Team;
    awayTeam: Team;
    refereeName: string | null;
    goals: HomeAway;
}