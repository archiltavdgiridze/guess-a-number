const targetNumber = Math.floor(Math.random() * 20) + 1;
let mcdeloba = 0;

function startGuessingGame() {
  while (true) {
    let userGuess = parseInt(prompt("გამოიცანი რიცხვი (1-დან 20-მდე)"));

    if (!isNaN(userGuess) && userGuess >= 1 && userGuess <= 20) {
      mcdeloba++;

      if (userGuess === targetNumber) {
        document.write(
          `<p>გილოცავთ, თქვენი ჩაწერილი რიცხვი ${targetNumber}, არის სწორი. თქვენ ამისთვის დაგჭირდათ ${mcdeloba} მცდელობა</p>`
        );
        break;
      } else {
        let minishneba =
          userGuess < targetNumber
            ? "უფრო დიდი რიცხვი სცადე"
            : "უფრო პატარა რიცხვი სცადე";
        alert(`${minishneba}`);
      }
    } else {
      alert("გთხოვთ შეიყვანოთ რიცხვი 1-დან 20-მდე");
    }
  }
}


startGuessingGame()