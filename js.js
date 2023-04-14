





const submitBtn = document.getElementById("submitBtn");
submitBtn.addEventListener("click", function() {
  const playerId = document.getElementById("playerId").value;
  const url = `https://live.deceit.gg/stats?userId=${playerId}`;
  fetch(url)
    .then(response => response.json())
    .then(data => {
      const statsElement = document.getElementById("stats");
      const fields = {
        "userId" : "ID",
        "name" : "Pseudo actuel",
        "elo" : "ELO",
        "rank" : "Rank",
        "marks" : "Marks",
        "experience" : "Éxperience",
        "tickets" : "Tickets",
        "level" : "Niveau",
        "prestige" : "Prestige",
        "emblem" : "Emblème utilisé",
        "reputation" : "Réputation",
        "dailyXp" : "XP quotidien",
        "dailyXpRank" : "Rang d'XP quotidien",
        "eloRank" : "Rang d'ELO",
        "repRank" : "Rang de réputation",
        "character" : "Personnage favori",
      };
      
      const characterNames = {
        "0": "Alex",
        "1": "Chang",
        "2": "Lisa",
        "3": "Rachel",
        "4": "Hans",
        "5": "Nina"
      };
  
      let html = "<ul>";
      for (const field in fields) {
        if (field === "character") {
          html += `<li><strong>${fields[field]}:</strong> ${characterNames[data[field]]}</li>`;
        } else {
          html += `<li><strong>${fields[field]}:</strong> ${ data[field]}</li>`;
        }
      }
      html += "</ul>";
  
      statsElement.innerHTML = html;
    })
    .catch(error => console.error(error));
});
