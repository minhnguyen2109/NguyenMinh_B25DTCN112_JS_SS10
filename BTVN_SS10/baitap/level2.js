const player = {
    name: "De Bruyne",
    position: "Midfielder",
    goals: 8,
    assists: 25,
    matchesPlayed: 35,
};

function addPerformanceScore(player) {
    let rawPerformance = (player.goals + player.assists) / player.matchesPlayed;

    let roundedPerformance = Math.round(rawPerformance * 100) / 100;

    player.performancePerMatch = roundedPerformance;

    if (roundedPerformance >= 1.0) {
        player.isKeyPlayer = true;
    } else {
        player.isKeyPlayer = false;
    }

    console.log(player);
}