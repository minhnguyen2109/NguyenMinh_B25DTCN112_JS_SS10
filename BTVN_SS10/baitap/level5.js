const teamHistory = [
    {
    name: "Messi",
    position: "Forward",
    nationality: "Argentina",
    seasons: {
    "2022-2023": {matches: 34, goals: 21, assists: 14, yellowCards: 3},
    "2023-2024": {matches: 32, goals: 25, assists: 15, yellowCards: 2},
    "2024-2025": {matches: 28, goals: 18, assists: 12, yellowCards: 1}
    },
    name: "Ronaldo",
    position: "Forward",
    nationality: "Portugal",
    seasons: {
    "2022-2023": {matches: 38, goals: 28, assists: 8, yellowCards: 5},
    "2023-2024": {matches: 35, goals: 30, assists: 10, yellowCards: 4},
    "2024-2025": {matches: 30, goals: 22, assists: 9, yellowCards: 3}
    }
    },
    {
    "2022-2023": {matches: 38, goals: 28, assists: 8, yellowCards: 5},
    "2023-2024": {matches: 35, goals: 30, assists: 10, yellowCards: 4},
    "2024-2025": {matches: 30, goals: 22, assists: 9, yellowCards: 3}
    }
];

function generatePlayerSeasonReport(playerName, teamHistory) {
    let player = null;
    for (let i = 0; i < teamHistory.length; i++) {
        if (teamHistory[i].name === playerName) {
            player = teamHistory[i];
            break;
        }
    }

    if (player === null) {
        return "Không tìm thấy cầu thủ " + playerName;
    }

    let totalMatches = 0;
    let totalGoals = 0;
    let totalAssists = 0;
    let totalYellowCards = 0;

    let bestSeason = null;
    let bestSeasonKey = "";
    let bestGoals = -1;
    let bestAssists = -1;

    for (let season in player.seasons) {
        let data = player.seasons[season];

        totalMatches += data.matches;
        totalGoals += data.goals;
        totalAssists += data.assists;
        totalYellowCards += data.yellowCards;

        if (data.goals > bestGoals || (data.goals === bestGoals && data.assists > bestAssists)) {
            bestGoals = data.goals;
            bestAssists = data.assists;
            bestSeasonKey = season;
        }
    }

    let avgGoals = totalMatches > 0 ? totalGoals / totalMatches : 0;
    let avgAssists = totalMatches > 0 ? totalAssists / totalMatches : 0;

    avgGoals = Math.round(avgGoals * 100) / 100;
    avgAssists = Math.round(avgAssists * 100) / 100;

    let report = {
        name: player.name,
        position: player.position,
        nationality: player.nationality,
        careerStats: {
            totalMatches: totalMatches,
            totalGoals: totalGoals,
            totalAssists: totalAssists,
            totalYellowCards: totalYellowCards,
            averageGoalsPerMatch: avgGoals,
            averageAssistsPerMatch: avgAssists,
            bestSeason: {
                season: bestSeasonKey,
                goals: bestGoals,
                assists: bestAssists
            }
        }
    };

    return report;
}