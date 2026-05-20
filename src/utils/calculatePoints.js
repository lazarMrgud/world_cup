export function resetTeamStats(team) {
  team.info.P = 0;
  team.info.W = 0;
  team.info.D = 0;
  team.info.L = 0;
  team.info.GF = 0;
  team.info.GA = 0;
  team.info.GD = 0;
  team.info.Pts = 0;
}

export function addMatchResult(homeTeam, awayTeam, homeGoals, awayGoals) {
  homeTeam.info.P += 1;
  awayTeam.info.P += 1;

  homeTeam.info.GF += homeGoals;
  homeTeam.info.GA += awayGoals;
  homeTeam.info.GD = homeTeam.info.GF - homeTeam.info.GA;

  awayTeam.info.GF += awayGoals;
  awayTeam.info.GA += homeGoals;
  awayTeam.info.GD = awayTeam.info.GF - awayTeam.info.GA;

  if (homeGoals > awayGoals) {
    homeTeam.info.W += 1;
    awayTeam.info.L += 1;
    homeTeam.info.Pts += 3;
  } else if (homeGoals < awayGoals) {
    awayTeam.info.W += 1;
    homeTeam.info.L += 1;
    awayTeam.info.Pts += 3;
  } else {
    homeTeam.info.D += 1;
    awayTeam.info.D += 1;
    homeTeam.info.Pts += 1;
    awayTeam.info.Pts += 1;
  }
}