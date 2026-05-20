export function sortTeamsByPoints(group) {
  return [...group].sort((a, b) => {
    return (
      b.info.Pts - a.info.Pts ||
      b.info.GD - a.info.GD ||
      b.info.GF - a.info.GF
    );
  });
}

export function sortTournamentTeams(teams) {
  return [...teams].sort((a, b) => {
    return (
      b.info.Pts - a.info.Pts ||
      b.info.GD - a.info.GD ||
      b.info.GF - a.info.GF
    );
  });
}