var weight = Array(0, 13, 0.552, 0.828, 4.14, 0.2622, 4.2, 0.195, 0.0455, 0.0621, 0.552, 0.2989, 0.236, 0.0605, 0.0352, 0.1631, 0.06, 0.05, 0.0966, 0.2139, 0.0138);
var value = Array(0, 0, 0, 0, 0, 0, 0, 0.26, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);

function cal(){

    var sum = 0;
    for (index = 1; index <= 20; ++index) sum += value[index] * weight[index];
    document.getElementById("footprintresult").innerHTML = sum.toFixed(2);

    var obj = document.getElementById("telling");
    if(sum >= 9) obj.innerHTML = "<span style = 'color: #f00;'>不好了! 您的碳排放量嚴重超出平均值了！</span>";
    else if(sum > 6.9) obj.innerHTML = "<span style = 'color: #ffd800;'>再加油! 看看能夠如何減少碳排放量吧！</span>";
    else if(sum >= 4.8) obj.innerHTML = "<span style = 'color: #0700fc;'>還不錯! 您的碳排放量在平均值內！</span>";
    else obj.innerHTML = "<span style = 'color: #33d548;'>太棒了! 你是愛護地球的綠色公民！</span>";

    var obj = document.getElementById("caltree");
    var tol = (sum * 365 / 14 + 0.5).toFixed(0);
    obj.innerHTML = "<span style = 'color: #ffd800;'>您一年的排放的CO2需要 " + tol + " 棵綠樹才能夠吸收！</span>";
}

function start(){

    document.getElementById("item7").value = 0.26;
    for(index = 1; index <= 20; ++index) document.getElementById("result" + index).innerHTML = (value[index] * weight[index]).toFixed(2);

    document.getElementById("item" + 1).addEventListener("change", function(){ value[1] = document.getElementById("item" + 1).value; document.getElementById("result" + 1).innerHTML = (value[1] * weight[1]).toFixed(2); cal(); });
    document.getElementById("item" + 2).addEventListener("change", function(){ value[2] = document.getElementById("item" + 2).value; document.getElementById("result" + 2).innerHTML = (value[2] * weight[2]).toFixed(2); cal(); });
    document.getElementById("item" + 3).addEventListener("change", function(){ value[3] = document.getElementById("item" + 3).value; document.getElementById("result" + 3).innerHTML = (value[3] * weight[3]).toFixed(2); cal(); });
    document.getElementById("item" + 4).addEventListener("change", function(){ value[4] = document.getElementById("item" + 4).value; document.getElementById("result" + 4).innerHTML = (value[4] * weight[4]).toFixed(2); cal(); });
    document.getElementById("item" + 5).addEventListener("change", function(){ value[5] = document.getElementById("item" + 5).value; document.getElementById("result" + 5).innerHTML = (value[5] * weight[5]).toFixed(2); cal(); });
    document.getElementById("item" + 6).addEventListener("change", function(){ value[6] = document.getElementById("item" + 6).value; document.getElementById("result" + 6).innerHTML = (value[6] * weight[6]).toFixed(2); cal(); });
    document.getElementById("item" + 7).addEventListener("change", function(){ value[7] = document.getElementById("item" + 7).value; document.getElementById("result" + 7).innerHTML = (value[7] * weight[7]).toFixed(2); cal(); });
    document.getElementById("item" + 8).addEventListener("change", function(){ value[8] = document.getElementById("item" + 8).value; document.getElementById("result" + 8).innerHTML = (value[8] * weight[8]).toFixed(2); cal(); });
    document.getElementById("item" + 9).addEventListener("change", function(){ value[9] = document.getElementById("item" + 9).value; document.getElementById("result" + 9).innerHTML = (value[9] * weight[9]).toFixed(2); cal(); });
    document.getElementById("item" + 10).addEventListener("change", function(){ value[10] = document.getElementById("item" + 10).value; document.getElementById("result" + 10).innerHTML = (value[10] * weight[10]).toFixed(2); cal(); });
    document.getElementById("item" + 11).addEventListener("change", function(){ value[11] = document.getElementById("item" + 11).value; document.getElementById("result" + 11).innerHTML = (value[11] * weight[11]).toFixed(2); cal(); });
    document.getElementById("item" + 12).addEventListener("change", function(){ value[12] = document.getElementById("item" + 12).value; document.getElementById("result" + 12).innerHTML = (value[12] * weight[12]).toFixed(2); cal(); });
    document.getElementById("item" + 13).addEventListener("change", function(){ value[13] = document.getElementById("item" + 13).value; document.getElementById("result" + 13).innerHTML = (value[13] * weight[13]).toFixed(2); cal(); });
    document.getElementById("item" + 14).addEventListener("change", function(){ value[14] = document.getElementById("item" + 14).value; document.getElementById("result" + 14).innerHTML = (value[14] * weight[14]).toFixed(2); cal(); });
    document.getElementById("item" + 15).addEventListener("change", function(){ value[15] = document.getElementById("item" + 15).value; document.getElementById("result" + 15).innerHTML = (value[15] * weight[15]).toFixed(2); cal(); });
    document.getElementById("item" + 16).addEventListener("change", function(){ value[16] = document.getElementById("item" + 16).value; document.getElementById("result" + 16).innerHTML = (value[16] * weight[16]).toFixed(2); cal(); });
    document.getElementById("item" + 17).addEventListener("change", function(){ value[17] = document.getElementById("item" + 17).value; document.getElementById("result" + 17).innerHTML = (value[17] * weight[17]).toFixed(2); cal(); });
    document.getElementById("item" + 18).addEventListener("change", function(){ value[18] = document.getElementById("item" + 18).value; document.getElementById("result" + 18).innerHTML = (value[18] * weight[18]).toFixed(2); cal(); });
    document.getElementById("item" + 19).addEventListener("change", function(){ value[19] = document.getElementById("item" + 19).value; document.getElementById("result" + 19).innerHTML = (value[19] * weight[19]).toFixed(2); cal(); });
    document.getElementById("item" + 20).addEventListener("change", function(){ value[20] = document.getElementById("item" + 20).value; document.getElementById("result" + 20).innerHTML = (value[20] * weight[20]).toFixed(2); cal(); });
}

window.addEventListener("load", start, false);