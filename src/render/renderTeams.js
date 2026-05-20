export function renderTeams(teams) {
  return teams
    .map(
      (team) => `
        <div class="team-DIV">
          <img class="team-image" src="${team.slika}" alt="${team.ime}">
          <p class="team-name">${team.ime}</p>
        </div>
      `
    )
    .join("");
}