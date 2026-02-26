const players = [
    { name: "Messi", position: "Forward", age: 36, goals: 25, assists: 15, matches: 34, yellowCards: 2 },
    { name: "Ronaldo", position: "Forward", age: 39, goals: 30, assists: 10, matches: 38, yellowCards: 4 },
    { name: "Neymar", position: "Forward", age: 32, goals: 18, assists: 20, matches: 32, yellowCards: 3 },
    { name: "De Bruyne", position: "Midfielder", age: 33, goals: 8, assists: 25, matches: 35, yellowCards: 1 },
    { name: "Kante", position: "Midfielder", age: 33, goals: 2, assists: 5, matches: 36, yellowCards: 0 },
    { name: "Van Dijk", position: "Defender", age: 33, goals: 5, assists: 3, matches: 33, yellowCards: 2 },
    { name: "Alisson", position: "Goalkeeper", age: 31, goals: 0, assists: 1, matches: 37, yellowCards: 0 }
];

function generateRankingReport(minMatches, players) {
    let filteredPlayers = [];
    for (let i = 0; i < players.length; i++) {
        if (players[i].matches >= minMatches) {
            filteredPlayers.push(players[i]);
        }
    }

    let playersWithScores = [];
    for (let i = 0; i < filteredPlayers.length; i++) {
        let p = filteredPlayers[i];
        
        let perf = (p.goals + p.assists) / p.matches;
        perf = Math.round(perf * 100) / 100;
        
        let eff = perf - (p.yellowCards / p.matches) * 10;
        
        let newPlayer = {
            name: p.name,
            position: p.position,
            age: p.age,
            goals: p.goals,
            assists: p.assists,
            matches: p.matches,
            yellowCards: p.yellowCards,
            performanceScore: perf,
            efficiencyScore: eff
        };
        playersWithScores.push(newPlayer);
    }

    for (let i = 0; i < playersWithScores.length - 1; i++) {
        for (let j = i + 1; j < playersWithScores.length; j++) {
            let a = playersWithScores[i];
            let b = playersWithScores[j];
            let swap = false;

            if (a.efficiencyScore < b.efficiencyScore) {
                swap = true;
            } else if (a.efficiencyScore === b.efficiencyScore) {
                if (a.performanceScore < b.performanceScore) {
                    swap = true;
                } else if (a.performanceScore === b.performanceScore) {
                    if (a.goals < b.goals) {
                        swap = true;
                    }
                }
            }

            if (swap) {
                let temp = playersWithScores[i];
                playersWithScores[i] = playersWithScores[j];
                playersWithScores[j] = temp;
            }
        }
    }

    return playersWithScores;
}