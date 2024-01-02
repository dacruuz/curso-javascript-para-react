import "./style.css"
import CardGame from "../CardGame";
import PlayerScore from "../PlayerScore";

const MainGame = (amountCards) => {

  const $htmlCardGame = CardGame();
  const $htmlMainGame = $htmlCardGame.repeat(amountCards);

  return `
    <main class="main">
      <section class="players-infor">
        ${PlayerScore("Player 1")}
        <span>vs</span>
        ${PlayerScore("Player 2")}
      </section>
      <section class="cards-group"> 
        ${$htmlMainGame}  
      </section>
    </main>
  `
}

export default MainGame;