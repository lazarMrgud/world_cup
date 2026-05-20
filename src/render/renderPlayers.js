export function renderPlayers(team) {
  return `
    <div class="container-tim-players">
      <div class="tim">
        <img class="img-flag" src="${team.slika}" alt="${team.ime}">
        <p class="p-ime">${team.ime}</p>
      </div>

      ${Object.entries(team.players)
        .map(([position, players]) => {
          return `
            <section class="${position.toLowerCase()}">
              <h2>${position}</h2>

              <div class="container-${position.toLowerCase()}">
                ${players
                  .map(
                    (player) => `
                      <div>
                        <img src="${player.slika}" alt="${player.ime}">
                        <p class="category_players">${player.ime}</p>
                      </div>
                    `
                  )
                  .join("")}
              </div>
            </section>
          `;
        })
        .join("")}
    </div>
  `;
}