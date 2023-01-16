const log = console.log;

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function Loaded() {
    log("Debug: Body is loaded");
}

function genTable() {
    var table;
    table='<table id="mt">';
    var num1=document.getElementById("InputNum").value;
    for(i=1;i<=num1;i++){
        table+='<tr>';
        for(let num=1;num<=num1;num++){
            table+='<td>'+num*i+'</td>';
        }
        table+='</tr>';
    }
    table+='</table>';
    document.getElementById("thetable").innerHTML = table;
}
