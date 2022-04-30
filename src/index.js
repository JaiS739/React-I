import {navbar} from '../components/navbar.js';
console.log("navbar",navbar);

import '../styles/navbar.css';

let navbar_div = document.getElementById("navbar");

navbar_div.innerHTML=navbar();