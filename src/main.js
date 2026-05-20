import { teams } from "./data/teams.js";
import { selectors } from "./dom/selectors.js";
import { groupTeamsByGroup } from "./services/groupService.js";
import { renderGroupTable } from "./render/renderGroups.js";

const groupedTeams = groupTeamsByGroup(teams);

function initApp() {
  selectors.groupButton.addEventListener("click", () => {
    selectors.teamsInfoContainer.innerHTML = Object.entries(groupedTeams)
      .map(([groupName, groupTeams]) => renderGroupTable(groupName, groupTeams))
      .join("");
  });
}
window.navigateToDiv = function (selector) {
  const section = document.querySelector(selector);

  if (!section) return;

  section.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
};
initApp();