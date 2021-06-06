import App from "./App";
import Logo from "./logo.svg";

const root = document.getElementById("root");

root.innerHTML = `
<img src="${Logo}" alt="build icon"/> 
<h1>learning webpack today </h1>
${App({ name: "Purva" })}
`;