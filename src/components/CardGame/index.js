import "./style.css";

const CardGame = () => {

  const onClick = (event) => {
    event.preventDefault();
    event.addEventListener("click", console.log("click"))
  }

  return `
    <article class="card-game">
      <img src="images/alura-pixel.png" alt="Logo da Alura"/>
    </article>
  `
}

export default CardGame;