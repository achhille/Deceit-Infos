





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
          };
      
          let html = "<ul>";
          for (const field in fields) {
            html += `<li><strong>${fields[field]}:</strong> ${ data[field]}</li>`;
          }
          html += "</ul>";
      
          statsElement.innerHTML = html;
        })
        .catch(error => console.error(error));
    });
    