export function renderGroupTable(groupName, teams) {
  return `
    <div class="containet_of_Grup">
      <button class="name_of_grup_button">${groupName}</button>

      <div class="container_tims_of_grup">
        ${teams
          .map(
            (team) => `
              <div class="container_of_tim">
                <img id="tim_grup_img" src="${team.slika}" alt="${team.ime}">
                <p id="tim_grup_slovo">${team.ime}</p>
              </div>
            `
          )
          .join("")}
      </div>
    </div>
  `;
}