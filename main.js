import "./src/styles/settings/colors.css";
import "./src/styles/generic/reset.css";
import "./src/styles/elements/base.css";

import MainGame from "./src/components/MainGame";

const $root = document.querySelector('#root');

$root.insertAdjacentHTML("beforeend", MainGame(6));