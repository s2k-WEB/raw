/*  Mivel a menű pontok külön oldalakat töltenek be egy div "konténerbe" ajax segítségével és minden oldalnak van 
    egy saját scriptje ezért az oldalak betöltődését késleltetni kell amíg az adott oldal saját scriptje be nem töltődik a 
    szinkronizáció miatt. Máskülönben az XMLHttpRequest kérés a fő szálban asyncronous lesz. Ez csak 
    figyelmeztetést eredményez egyellőre, de jövőben a nem szinkronizált XMLHttp kérések nem lesznek támogatottak
    a legtöbb böngészőben.A jQuery támogatja ezt az eljárást a holdReady() funkcióval.
    További információ: https://api.jquery.com/jquery.holdready/
*/
function loadPageScript(pageurl) {
    $.holdReady(true);
    function releaseHold() { $.holdReady(false); }
    $.getScript(pageurl, releaseHold);
}

$(document).ready(function(){
    let oldalak = [
        ['.logo', "page0"],
        ['#page1', "page1"],
        ['#page2', "page2"],
        ['#page3', "page3"],
        ['#page4', "page4"],
        ['#page5', "page5"],
        ['#page6', "page6"],
        ['#page7', "page7"]
    ];
    for (let i = 0; i < 7; i++) {
        $(oldalak[i][0]).click(function(){
            $("#grid-area-1222").load(`pages/${oldalak[i][1]}.html`);
            loadPageScript(`/scripts/${oldalak[i][1]}.js`);
        });
    }
});

