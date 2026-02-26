const players = [
  { name: "Messi", years: 18, salary: 100 },
  { name: "Ronaldo", years: 20, salary: 95 },
  { name: "Neymar", years: 12, salary: 90 },
  { name: "Mbappe", years: 7, salary: 85 },
  { name: "Haaland", years: 5, salary: 80 },
  { name: "Modric", years: 22, salary: 70 },
  { name: "Benzema", years: 19, salary: 75 }
];

function analyzeSalary(minYears, teamPlayers) {
    let filtered = [];
    for (let i = 0; i < teamPlayers.length; i++) {
        if (teamPlayers[i].years >= minYears) {
            filtered.push(teamPlayers[i]);
        }
    }

    if (filtered.length === 0) {
        return {
            totalsalary: 0,
            highestPaid: null,
            lowestPaid: null
        };
    }

    let total = 0;
    for (let i = 0; i < filtered.length; i++) {
        total += filtered[i].salary;
    }

    let highest = filtered[0];
    let lowest = filtered[0];
    for (let i = 1; i < filtered.length; i++) {
        if (filtered[i].salary > highest.salary) {
            highest = filtered[i];
        }
        if (filtered[i].salary < lowest.salary) {
            lowest = filtered[i];
        }
    }

    return {
        totalsalary: total,
        highestPaid: highest,
        lowestPaid: lowest
    };
}