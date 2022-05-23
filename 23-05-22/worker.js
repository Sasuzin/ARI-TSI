var j = 0;
var n = 1e10;
var p = n/100;

var mensagem = '';

for (var i=0; i<n;i++) {
    if (j++> p) {
        j=0;
        mensagem += "<br/>" + i;
    }
}

mensagem += "<br/>" + "fim";

postMessage("mensagem",mensagem);