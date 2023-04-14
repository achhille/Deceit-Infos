const submitBtn1 = document.getElementById("submitBtn1");
const submitBtn2 = document.getElementById("submitBtn2");

submitBtn1.addEventListener("click", function() {
  fetchAndRenderStats("playerId1", "stats1");
});

submitBtn2.addEventListener("click", function() {
  fetchAndRenderStats("playerId2", "stats2");
});

function fetchAndRenderStats(playerIdInputId, statsListId) {
  const playerId = document.getElementById(playerIdInputId).value;
  const url = `https://live.deceit.gg/stats?userId=${playerId}`;
  fetch(url)
    .then(response => response.json())
    .then(data => {
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
        let value = data[field];
        if (field === "character") {
          value = characterNames[value];
        }
        html += `<li><strong>${fields[field]}:</strong> ${value}</li>`;
      }
      

      document.getElementById(statsListId).innerHTML = html;
      
      const stats1 = document.getElementById("stats1");
      const stats2 = document.getElementById("stats2");

      if (stats1.innerHTML !== "" && stats2.innerHTML !== "") {
        // Compare the two stats lists and update the values accordingly
        const stats1Items = stats1.getElementsByTagName("li");
        const stats2Items = stats2.getElementsByTagName("li");
        for (let i = 0; i < stats1Items.length; i++) {
          const stat1 = stats1Items[i].innerText.split(":")[1].trim();
          const stat2 = stats2Items[i].innerText.split(":")[1].trim();
          if (stat1 > stat2) {
            stats1Items[i].classList.add("higher");
            stats2Items[i].classList.add("lower");
          } else if (stat1 < stat2) {
            stats1Items[i].classList.add("lower");
            stats2Items[i].classList.add("higher");
          } else {
            stats1Items[i].classList.add("equal");
            stats2Items[i].classList.add("equal");
          }
        }
      }
    })
    .catch(error => console.error(error));
}
