import { groupTeamsByGroup } from "./groupService.js";
import { generateGroupMatches } from "./matchService.js";
import { resetTeamStats, addMatchResult } from "../utils/calculatePoints.js";

export function createTournament(randomTeams) {
  const tournamentTeams = randomTeams.map((team) => ({
    ...team,
    info: {
      P: 0,
      W: 0,
      D: 0,
      L: 0,
      GF: 0,
      GA: 0,
      GD: 0,
      Pts: 0
    }
  }));

  const groupedTeams = groupTeamsByGroup(tournamentTeams);
  const rounds = generateGroupMatches(groupedTeams);

  const allMatches = [
    ...rounds.round1,
    ...rounds.round2,
    ...rounds.round3
  ];

  tournamentTeams.forEach(resetTeamStats);

  allMatches.forEach((match) => {
    addMatchResult(
      match.homeTeam,
      match.awayTeam,
      match.homeGoals,
      match.awayGoals
    );
  });

  const finalGroups = groupTeamsByGroup(tournamentTeams);

  const tables = Object.entries(finalGroups).reduce((result, [groupName, teams]) => {
    result[groupName] = sortGroupTable(teams);
    return result;
  }, {});

  return {
    teams: tournamentTeams,
    groupedTeams: finalGroups,
    rounds,
    tables
  };
}

function sortGroupTable(teams) {
  return [...teams].sort((a, b) => {
    return (
      b.info.Pts - a.info.Pts ||
      b.info.GD - a.info.GD ||
      b.info.GF - a.info.GF ||
      a.ime.localeCompare(b.ime)
    );
  });
}