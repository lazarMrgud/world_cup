// src/services/worldCupService.js

import { teams } from "../data/teams.js";
import { matches } from "../data/matches.js";
import { calculateStandings } from "../utils/calculateStandings.js";

export function getTeamsByGroup(groupName) {
  return teams.filter((team) => team.group === groupName);
}

export function getMatchesByGroup(groupName) {
  return matches.filter((match) => match.group === groupName);
}

export function getStandingsByGroup(groupName) {
  const groupTeams = getTeamsByGroup(groupName);
  const groupMatches = getMatchesByGroup(groupName);

  return calculateStandings(groupTeams, groupMatches);
}