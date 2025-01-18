// Konzolra írás
/* console.log("Szia") */

// változók let, var, const
const PI = 3.14
befogo = 12


//fő egyszerű adattípusok - szám(number), szöveg(string), logikai(boolean)
let a = 32
/* console.log(typeof(a)) */

let szoveg  = "Üdvözlet"
/* console.log(typeof(szoveg)) */

let logikai = true
/* console.log(typeof(logikai)) */

/* igazságtáblák ÉS(AND) -- &&, VAGY(OR) -- ||, NEM(NOT) -- !
ÉS - csak akkor igaz, ha minden input igaz
VAGY - csak akkor hamis, ha minden input hamis
*/

/* Számok - operátorok
összeadás +
kivonás -
szorzás *
osztás /
modulo % - maradékot adja vissza
 */

/* Feladat1: mentsd el a születési éved egy szulev változóba. Az eletkor változóban számold ki, idén hány éves vagy és írd ki konzolra */
let szulev = 1920
let eletkor = 2024 - szulev
/* console.log(eletkor)
 */

/* Stringek - konkatenáció + */
 sz1 = "Ma szép napunk "
let sz2 = "lesz."
let uzenet = sz1 + sz2
/* console.log(sz1)
console.log(sz2)
console.log(uzenet)
console.log(sz2+sz1) */

/* Elágazások: if(feltétel) {utasítások} else {utasítások} */
let szam1 = 15
let szam2 = 412
let szam3 = 515
/* if(szam1 > 100) {
    console.log(szam1, "nagyobb, mint 100")
} else {
    console.log(szam1, "kisebb, mint 100.")
}
 */
/* Írjuk ki, hogy a szam2 páros vagy páratlan! */

/* Switch case  - többszörös elágazás: switch(kifejezés) {case x: kód break; case y: kód break; default: kód}  */
/* switch(szam3){
    case 300: console.log("majdnem")
                break;
    case 515: console.log("talált")
        break;
}
 */
/* Legyen egy változó nap, aminek az értéke legyen 5. Adjuk meg 1-7 a case-ket és írjuk ki a napokat hétfő-vasárnap.
 Defaultra írja ki: rossz érték */

 /* léptető vagy számláló ciklus: for(inicializálás;feltétel;növekmény){utasítás/ok} */
/*  for(let i = 100; i >= 20; i--){
   document.write(i, ". ez egy for ciklus<br>")
 }
 */
/* Írjuk ki for ciklussal a 100 és 200 közötti páros számokat! */
/* Számoljuk meg, hány hárommal osztható szám van 500 és 1000 között! A végén írjuk ki! */

/* elöltesztelő ciklus - while: while(feltétel){kód} */

/* ertek1 = 15
while(ertek1 < 50){
    console.log(ertek1)
    ertek1++
}  */

/* hátultesztelő ciklus - do while: do {kód} while(feltétel)  */
/* ertek2 = 65
do {console.log(ertek2)
    ertek2++
} while (ertek2 < 50)

ertek1 = 123
ertek2 = "123" */

//console.log(ertek1 === ertek2)


// Összetett adattípusok
// Tömb

let tomb = [123, "szöveg", true, "körte", 'szöveg2']

/* console.log(tomb[3])

for (let elem of tomb){
    console.log(elem)
} */

// Objektumok

let tanulo = {
    vezetekNev: "Foki",
    keresztNev: "Zoltán",
    szulEv: 1845,
    szulHely: "Balaton",
    ferfi: true
}

/* console.log(tanulo.keresztNev)
console.log(tanulo["szulEv"]) */

// Hozzatok létre egy tömböt, gyümölcsök néven. Írjuk ki egymás alá a 
// weboldalra a tömb elemeit

/* Hozz létre egy objektumot, ami tartalmaz egy szöveget, számot és booleant. 
Írjuk ki  a számhoz tartozó kulcs értékét konzolra */

//Függvények:  function függvény_neve(){kód}

function kiiras(szoveg) {
    console.log(szoveg)
}

/* kiiras() */

function osszeg(a,b){
    vissza = a+b
    return vissza
}



function kulonbseg(a,b) {
    vissza = a-b
    return vissza
}

kiiras((osszeg(123,321)))

// Írjatok függvényt, ami kiszámolja egy téglalap területét!

//Írjatok három függvényt. Az első számolja ki a kör kerületét (2 * r *PI),
// a második a területét ( r * r * PI),
//  a harmadik írja ki az eredményeket. A PI értékét vegyük fel
// globálisan állandóként!

// arrow function (nyílfüggvény): let fnev = (a,b) => {kód}

let szorzat = (a,b) => {
    let szorzas = a * b
    return szorzas
}

console.log("A két szám szorzata: ",szorzat(5,7))

// Nyílfüggvénnyel fűzzünk össze két szöveget és írjuk is ki!

// Elemek elérése

// ID
let elsoSzoveg = document.getElementById("szoveg1")
elsoSzoveg.innerHTML = "Javascriptből írtam!"

elsoSzoveg.style.backgroundColor = "red"

document.getElementById("szoveg2").innerHTML = "Második szöveg"

document.getElementById("szoveg2").style.border = "2px solid blue"

// JS-ből egy h1-es elembe írjunk szöveget!
document.getElementById("szoveg3").innerHTML = "Harmadik szöveg"

document.getElementById("szoveg3").style.backgroundImage = "url(img/tax-g7e3a5b7af_1920.jpg)"

// class

let lista = document.getElementsByClassName("lista1")

for (i=0;i<lista.length;i++){
    lista[i].innerHTML = "lista szöveg" + i
}

for (i=0 ; i<lista.length; i+=2){
    lista[i].style.backgroundColor = "green"
}

for (i=1; i<lista.length; i+=2){
    lista[i].style.backgroundColor = "yellow"

}


lista[lista.length-1].style.color = "red"
// tag neve

let tablazat = document.getElementsByTagName("td")
for (i=0; i<tablazat.length; i++){
    tablazat[i].innerHTML = i + ".tábla oszlop " 
}


// hozzunk létre egy div-et, írjunk bele szöveget és formázzuk meg legalább
// három tulajdonságát!


// esemémyek

// onClick
 function kattintas() {
   let gomb = document.getElementsByTagName("button")
   gomb[0].style.backgroundColor = "blue"
}

function szovegValt() {
    let szoveg3 = document.getElementById("szoveg3")
    szoveg3.innerHTML = "Ide kattintottál"
}

// kattintásra a második szöveg színe legyen zöld
function valt() {
    let kep = document.getElementById("kep")
    console.log(kep.src)
    let utvonal = kep.getAttribute("src")
    console.log(utvonal)        
    if (utvonal === 'img/neven-krcmarek-2Ni0lCRF9bw-unsplash.jpg') {
        kep.src = "img/stock-exchange-gd1cad6218_1920.jpg"}
        else {
            kep.src = "img/neven-krcmarek-2Ni0lCRF9bw-unsplash.jpg"

        }
    }




    function negyzetSzamol() {
        let a = document.getElementById("elem1").value 
        if (a>10 && a<100)
        {document.getElementById("negyzetkiiras").value =  a*a}
        else {
            document.getElementById("negyzetkiiras").value =  "rossz értéket adtál"
        }

        document.getElementById("elem1").value = 0
    }


    // kérjük be egy téglalap két oldalát, és írjuk ki a kerületét és területét
    // ne fogadjunk el 0-tól kisebb számot



    // onclick és ondblclick

  /*   function osszead(a,b) {
      
        document.getElementById("clickkiiras").innerHTML = a +b
    }


    function kivon(a,b) {
        document.getElementById("clickkiiras").innerHTML = a -b
    }
 */

    function osszead() {
        let a = Number(document.getElementById("elsoszam").value) 
        let b = Number(document.getElementById("masodikszam").value )
        document.getElementById("clickkiiras").innerHTML = a +b
    }

    function kivon() {
        let a = Number(document.getElementById("elsoszam").value) 
        let b = Number(document.getElementById("masodikszam").value )
        document.getElementById("clickkiiras").innerHTML = a - b
    }


    // onchange


    function csere() {
        document.getElementById("nev").value = "Ezt mindíg átírom!"
    }


    // onmouseover - onmouseout

    function rahuz() {
        document.getElementById("rahuzgomb").style.backgroundColor = "green"
       // alert("Mit csinálsz?")
    }

    function lehuz() {
        document.getElementById("rahuzgomb").style.backgroundColor = "red"
    }

    // onkeypress
    karakterSzamlalo = 0
    function karakter(){
        karakterSzamlalo++
        document.getElementById("karakterkiir").innerHTML = karakterSzamlalo
    }
