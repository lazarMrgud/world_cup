export function renderRound(roundTitle, matches) {
  return `
    <section class="round-section">
      <h2>${roundTitle}</h2>

      <div class="round-matches">
        ${matches.map(renderMatch).join("")}
      </div>
    </section>
  `;
}

function renderMatch(match) {
  return `
    <div class="container_grup">
      <div class="container_of_tims">
        <div class="team">
          <img id="tim_grup_img_finale" src="${match.homeTeam.slika}" alt="${match.homeTeam.ime}">
          <p>${match.homeTeam.ime}</p>
        </div>

        <div class="team_container_of_point">
          <p id="tim_grup_of_point">${match.homeGoals}</p>
        </div>

        <span class="vs">VS</span>

        <div class="team_container_of_point">
          <p id="tim_grup_of_point">${match.awayGoals}</p>
        </div>

        <div class="team">
          <img id="tim_grup_img_finale" src="${match.awayTeam.slika}" alt="${match.awayTeam.ime}">
          <p>${match.awayTeam.ime}</p>
        </div>
      </div>
    </div>
  `;
}