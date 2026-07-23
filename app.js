import { HomePage } from "./pages/home.js";

const home = new HomePage().render();

const app = document.getElementById("app");
app.innerHTML = home;