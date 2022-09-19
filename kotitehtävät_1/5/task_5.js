"use strict";

/*
5. (Silmukat) Kurssin lopputyössä peto-saalis-systeemiä tarkastellaan olio-ohjelmoinnin avulla.
Tässä tehtävässä käytämme petojen ja saaliiden lukumäärän kehityksen määrittämiseen
matemaattista mallia, Lotkan-Volterran yhtälöä (lähde: Wikipedia)
missä x ja y ovat saalis- ja petoeläinten määrät ja α ,β ,δ ,γ ovat vakioita. Näiden ns.
differentiaaliyhtälöiden avulla voidaan määrittää nämä määrät kaikille tuleville ajanhetkille, kun
määrät ovat tiedossa alkuhetkelle t = 0. Approksimoidaan yhtälöä käyttäen Eulerin menetelmää,
jolloin voimme määrittää eläinten määrät x ja y hetkellä t+Δt ( Δt on valitsemamme aikaaskelen
pituus), kun vastaavat määrät hetkellä t ovat tunnetut:

x(t+delta_t) ≈ x(t) + delta_t*(alpha*x(t) – beta*x(t)*y(t))
y(t+delta_t) ≈ y(t) + delta_t*(delta*x(t)*y(t) – gamma*y(t))

Määritä yo. kaavoja käyttämällä saaliseläinten x ja petoeläinten y määrät hetkinä 0, 0.1, 0.2, …, 20,
kun molemmat ovat alussa 1 sekä parametreilla on arvot alpha = 2/3, beta = 1/3 ja gamma = delta =
1. Käytä aika-askelen pituutena delta_t = 0.001.

Huom: Kurssilla ei ole vielä käyty läpi tietorakenteiden käyttämistä eikä tulosten
visualisointiinkaan ole esitetty keinoja. Siksi riittää, että tulostat konsoliin ajanhetket sekä saalis- ja
petoeläinten määrät (console.log(t, x, y)). Huomaa, että määrät tulostetaan vain ajanhetkille t = 0,
0.1, 0.2, …, vaikka ne lasketaan myös hetkille 0.001, 0.002, 0.003, ...

Huom 2: Vaikka yllä olevat kaavat näyttäisivätkin vierailta, tehtävän ratkaiseminen on varsin
suoraviivaista. Koska emme ole esitelleet vielä tietorakenteita, voit käyttää yksinkertaisia
lukuarvoisia muuttujia x ja y eläinten määrille (ei ole tarpeen välittää merkinnöistä x(t),
x(t+delta_t), käytämme molemmista symbolia x). Näin tehtäessä ohjelmassa on kulloinkin tiedossa
eläinten määrät vain yhdelle (viimeksi käsitellylle) ajanhetkelle. Tämä riittää, jos tulostat eläinten
määrät konsoliin heti niiden laskemisen jälkeen.
*/
let t = 0;
let alpha = 2/3;
let beta = 1/3;
let delta = 1;
let gamma = delta;
let delta_t = 0.001;
let x_t = 1;
let x = x_t;
let y = 1;
let counter = 0;
 for (t; t <= 20.1; t += delta_t){
    x_t = x;
    x = x_t + delta_t * (alpha * x_t - beta * x_t * y);
    y = y + delta_t * (delta * x_t * y - gamma * y);
    counter ++;

    if(!((counter-1) % 100)){
        if(t < 1){
            console.log(t.toPrecision(2) , x.toPrecision(4), y.toPrecision(4)); 
        }
        if(t >= 1 && t < 10){
            console.log(t.toPrecision(3), x.toPrecision(4), y.toPrecision(4));
        }
        if(t >=10){
            console.log(t.toPrecision(4), x.toPrecision(4), y.toPrecision(4));
        }
    }   
}

