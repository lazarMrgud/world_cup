export function groupTeamsByGroup(teams) {
  return teams.reduce((groups, team) => {
    if (!groups[team.grupa]) {
      groups[team.grupa] = [];
    }

    groups[team.grupa].push(team);

    return groups;
  }, {});
}

export function getGroupNames(teams) {
  return [...new Set(teams.map((team) => team.grupa))];
}

export function getTeamsFromGroup(teams, groupName) {
  return teams.filter((team) => team.grupa === groupName);
}