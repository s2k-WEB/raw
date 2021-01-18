/* csv file betöltése javascript "objektumba" */
let CSVarray = [];
$.get( "./data/otos-utf8.csv", function(csv) {
    let lines = csv.split("\n");
    for(let i=0; i < lines.length-1; i++) {
    CSVarray[i] = lines[i].split(";");
    }
});

/*  A ready() esemény késleltetése (sync/async).
    További információ: https://api.jquery.com/jquery.holdready/ */
function loadPageScript(pageurl) {
    $.holdReady(true);
    function releaseHold() { $.holdReady(false); }
    $.getScript(pageurl, releaseHold);
}

/* Az oldal ready() esemény utáni szála. */
$(document).ready(function() {
    for (let i = 0; i < 8; i++) {
        $(`#page${i}`).click(function(){
            $("#grid-area-1222").load(`./pages/page${i}.html`);
            loadPageScript(`./scripts/page${i}.js`);
         });
    }
});
