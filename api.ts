// Vem as informações gerais das partidas da liga determinada
// fixture = id, referee, date
//      venue = id, name, city
//      status = long 
// league = id, name, logo, season, round
// teams
//      home = id, name, logo, winner
//      away = id, name, logo, winner
// goals = home, away
// score = halftime, fulltime, extratime, penalty

const matches = {
    method: 'GET',
    url: 'https://api-football-v1.p.rapidapi.com/v3/fixtures',
    params: {
      league: '475',
      season: '2023',
      team: '128',
      from: '2023-01-01',
      to: '2024-01-01'
    },
    headers: {
      'X-RapidAPI-Key': 'ccfeb70f2bmsha202a97ba8a8cedp187fb6jsnf2316e949629',
      'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
    }
  };
/*
  response [0, 1] =
    team = id, name, logo
    AllStatics = type, value
*/
  const fixtureStatics = {
    method: 'GET',
    url: 'https://api-football-v1.p.rapidapi.com/v3/fixtures/statistics',
    params: {fixture: '973803'},
    headers: {
      'X-RapidAPI-Key': 'ccfeb70f2bmsha202a97ba8a8cedp187fb6jsnf2316e949629',
      'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
    }
  };

  const playerstatisticsbyfixture = {
    method: 'GET',
    url: 'https://api-football-v1.p.rapidapi.com/v3/fixtures/players',
    params: {fixture: '973803'},
    headers: {
      'X-RapidAPI-Key': 'ccfeb70f2bmsha202a97ba8a8cedp187fb6jsnf2316e949629',
      'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
    }
  };