import { teams } from "./data/teams.js";
import { selectors } from "./dom/selectors.js";
import { groupTeamsByGroup } from "./services/groupService.js";
import { renderGroupTable } from "./render/renderGroups.js";
import { renderTeams } from "./render/renderTeams.js";

const groupedTeams = groupTeamsByGroup(teams);

window.navigateToDiv = function (selector) {
  const section = document.querySelector(selector);

  if (!section) return;

  section.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
};

function initApp() {
  selectors.startButton.addEventListener("click", () => {
    selectors.allTeamsContainer.innerHTML = renderTeams(teams);
  });

  selectors.groupButton.addEventListener("click", () => {
    selectors.teamsInfoContainer.innerHTML = Object.entries(groupedTeams)
      .map(([groupName, groupTeams]) => renderGroupTable(groupName, groupTeams))
      .join("");
  });
}

initApp();