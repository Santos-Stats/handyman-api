interface Match {
    fixture: Fixture;
    league: League;
    teams: {
      home: Team;
      away: Team;
    };
    goals: HomeAway;
    score: Score;
}