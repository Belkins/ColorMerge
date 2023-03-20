class Scoreboard {
  constructor() {
    this.scores = this.loadScores() || [];
  }

  loadScores() {
    const scoresJSON = localStorage.getItem('colorMergeScores');
    return scoresJSON ? JSON.parse(scoresJSON) : [];
  }

  saveScores() {
    const scoresJSON = JSON.stringify(this.scores);
    localStorage.setItem('colorMergeScores', scoresJSON);
  }

  addScore(user, score) {
    const currentDate = new Date().toDateString();
    const entry = { date: currentDate, user, score };
    this.scores.push(entry);
    this.scores.sort((a, b) => b.score - a.score);
    this.saveScores();
  }

  getDailyScores() {
    const currentDate = new Date().toDateString();
    return this.scores.filter((entry) => entry.date === currentDate);
  }

  displayDailyScores() {
    const dailyScores = this.getDailyScores();
    const scoreList = document.getElementById('scoreList');

    scoreList.innerHTML = '';

    dailyScores.forEach((scoreEntry) => {
      const listItem = document.createElement('li');
      listItem.textContent = `${scoreEntry.user}: ${scoreEntry.score}`;
      scoreList.appendChild(listItem);
    });
  }
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = Scoreboard;
}
