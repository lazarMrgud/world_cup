// src/utils/calculateStandings.js

export function calculateStandings(teams, matches) {
  const table = teams.map((team) => ({
    ...team,
    played: 0,
    wins: 0,
    draws: 0,
    losses: 0,
    goalsFor: 0,
    goalsAgainst: 0,
    points: 0
  }));

  matches.forEach((match) => {
    const home = table.find((team) => team.name === match.homeTeam);
    const away = table.find((team) => team.name === match.awayTeam);

    if (!home || !away) return;

    home.played++;
    away.played++;

    home.goalsFor += match.homeScore;
    home.goalsAgainst += match.awayScore;

    away.goalsFor += match.awayScore;
    away.goalsAgainst += match.homeScore;

    if (match.homeScore > match.awayScore) {
      home.wins++;
      away.losses++;
      home.points += 3;
    } else if (match.homeScore < match.awayScore) {
      away.wins++;
      home.losses++;
      away.points += 3;
    } else {
      home.draws++;
      away.draws++;
      home.points++;
      away.points++;
    }
  });

  return table.sort((a, b) => {
    const pointsDifference = b.points - a.points;
    const goalDifference = b.goalsFor - b.goalsAgainst - (a.goalsFor - a.goalsAgainst);

    return pointsDifference || goalDifference || b.goalsFor - a.goalsFor;
  });
}