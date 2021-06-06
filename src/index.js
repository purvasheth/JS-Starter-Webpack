import App from "./App";
import Logo from "./logo.svg";
import "./App.css"

const root = document.getElementById("root");

root.innerHTML = `
<div class="container">
<img src="${Logo}" alt="build icon"/> 
<h1>Webpack starter to help optimize your vanillaJS projects</h1>
<p> Write your whole code in JS and use template strings, without touching the HTML </p>
<p> Below is the example where we are importing a function from another file and using it here (kind of like an component). The name "Purva" is a parameter </p>
${App({ name: "Purva" })}
<h3>Some other features</h3>
<ul>
<li>production mode with <strong>minified files</strong></li>
<li>Use ES6 Syntax without worrying about browser support as <strong>babel</strong> is pre-configured</li>
<li>Import <strong>CSS files into JS</strong> files directly. </li>
<li>Import Images into JS files. The above build icon is an example of same.</li>
<li><strong>Inline asset management</strong> for smaller sized assets (i.e they are added in the main JS file)</li>
<li>Loadash is configured and a separate file is generated for its code. ( example of <strong>code-spliting</strong> for vendor code) </li>
<li><strong>Caching</strong> is done by adding content-hash as part of file name. So only files whose contents change get a new hash, i.e a new name.</li>
</ul>
</div>
`;
