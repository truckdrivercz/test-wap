//vytvořte proměnnou kterou nelze měnit
const a = 1;

//vytvořte proměnnou kterou lze měnit
let b = 1;

//vytvořte globální proměnnou
var c = 1;

//vytvořte starou funkci
function d (){}

//vytvořte novou funkci
const e = () => {}

//vytvořte funkci která vrací součet dvou parametrů
const f = (a, b) => a + b;
const g = () => {
    return a + b;
}

//vytvořte pole ktere obsahuje 10 různých hodnot
let pole = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//vypište z pole třetí prvek
console.log(pole[2])

//přepište v poli první prvek
pole[0] = 2

//projeďte pole pomocí funkce map
pole.map((value, index ) => {
    console.log(value)
    console.log(index)
})

//po spuštění stránky zavolá funkci
window.onload = () => {}

//propojte element s id greetings s JavaScriptem
const greetings = document.getElementById("greetings")

//vytvořte funkci foo, funkce by měla brát 2 funkce
const foo = (a, b) => {
    console.log(a)
    console.log(b)
}

//zavolejte funkci foo, funkce bere 2 čísla
foo(1, 2)

//zeptejte se pomocí příkazu jestli podmínka je pravdivá
let isValue = true;
if(isValue){
    //code
}

//zeptejte se pomocí příkazu jestli podmínka je neplatná
if(!isValue){
    //code
}

//exportujte funkci ze souboru
export const myFunction = () => {}

//importujte funkci do jiného souboru
import { myFunction } from "./export.js";

//vytvořte objekt, který bude obsahovat atributy name a age (bez class)
const myObject = {
    name: "Eda",
    age: 18
}

//vytvoře z objektu tyto atributy do konzole
console.log(myObject.name)
console.log(myObject.age)

//vysvětlete rozdíl mezi == a ===

//vysvětlete async a await