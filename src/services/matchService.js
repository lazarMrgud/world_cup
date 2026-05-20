export function generateGroupMatches(groupedTeams) {
  const rounds = {
    round1: [],
    round2: [],
    round3: []
  };

  Object.entries(groupedTeams).forEach(([groupName, teams]) => {
    if (teams.length !== 4) return;

    const [team1, team2, team3, team4] = teams;

    rounds.round1.push(
      createMatch(groupName, team1, team2, 1),
      createMatch(groupName, team3, team4, 1)
    );

    rounds.round2.push(
      createMatch(groupName, team1, team3, 2),
      createMatch(groupName, team2, team4, 2)
    );

    rounds.round3.push(
      createMatch(groupName, team1, team4, 3),
      createMatch(groupName, team2, team3, 3)
    );
  });

  return rounds;
}

function createMatch(groupName, homeTeam, awayTeam, round) {
  return {
    id: `${groupName}-${round}-${homeTeam.id}-${awayTeam.id}`,
    group: groupName,
    round,
    homeTeam,
    awayTeam,
    homeGoals: getRandomGoals(),
    awayGoals: getRandomGoals()
  };
}

function getRandomGoals() {
  return Math.floor(Math.random() * 5);
}