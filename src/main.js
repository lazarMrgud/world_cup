import { teams } from "./data/teams.js";
import { selectors } from "./dom/selectors.js";
import { groupTeamsByGroup } from "./services/groupService.js";
import { renderGroupTable } from "./render/renderGroups.js";
import { renderTeams } from "./render/renderTeams.js";
import { renderRound } from "./render/renderMatches.js";
import { createTournament } from "./services/tournamentService.js";

const GROUP_NAMES = [
  "Agrupa",
  "Bgrupa",
  "Cgrupa",
  "Dgrupa",
  "Egrupa",
  "Fgrupa",
  "Ggrupa",
  "Hgrupa"
];

let currentTournament = null;

function shuffleTeams(teams) {
  return [...teams].sort(() => Math.random() - 0.5);
}

function createRandomGroups(teams) {
  const shuffledTeams = shuffleTeams(teams);

  return shuffledTeams.map((team, index) => {
    const groupIndex = Math.floor(index / 4);

    return {
      ...team,
      grupa: GROUP_NAMES[groupIndex]
    };
  });
}

function renderGroups(tables) {
  selectors.teamsInfoContainer.innerHTML = Object.entries(tables)
    .map(([groupName, groupTeams]) => renderGroupTable(groupName, groupTeams))
    .join("");
}

function renderFirstRound() {
  selectors.teamsInfoContainer.innerHTML = renderRound(
    "Prvo kolo",
    currentTournament.rounds.round1
  );
}

function renderSecondRound() {
  selectors.teamsInfoContainer.innerHTML = renderRound(
    "Drugo kolo",
    currentTournament.rounds.round2
  );
}

function renderThirdRound() {
  selectors.teamsInfoContainer.innerHTML = renderRound(
    "Treće kolo",
    currentTournament.rounds.round3
  );
}

function unlockGroupButtons() {
  selectors.groupButton.classList.remove("disabled");
  selectors.groupButton.classList.add("active");

  selectors.firstRoundButton.classList.remove("disabled");
  selectors.firstRoundButton.classList.add("active");

  selectors.secondRoundButton.classList.remove("disabled");
  selectors.secondRoundButton.classList.add("active");

  selectors.thirdRoundButton.classList.remove("disabled");
  selectors.thirdRoundButton.classList.add("active");
}

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
    const randomTeams = createRandomGroups(teams);

    currentTournament = createTournament(randomTeams);

    selectors.allTeamsContainer.innerHTML = renderTeams(currentTournament.teams);
    renderGroups(currentTournament.tables);
    unlockGroupButtons();
  });

  selectors.groupButton.addEventListener("click", () => {
    if (!currentTournament) return;

    renderGroups(currentTournament.tables);
  });

  selectors.firstRoundButton.addEventListener("click", () => {
    if (!currentTournament) return;

    renderFirstRound();
  });

  selectors.secondRoundButton.addEventListener("click", () => {
    if (!currentTournament) return;

    renderSecondRound();
  });

  selectors.thirdRoundButton.addEventListener("click", () => {
    if (!currentTournament) return;

    renderThirdRound();
  });
}

initApp();
