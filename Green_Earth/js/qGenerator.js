var totalQ = 41, curQ = 1, maxQ = 5, seconds = 11, timerInterval, good, playerScore = 0, scoreCounting = 0, cheatAnswer = "0", cheatArea;
var Q1 = Array("要節能減碳，最好搭乘什麼交通工具？", "  公車  ", "計程車", "摩托車", "廂型車", "  公車  ");
var Q2 = Array("下列哪個選項\"不是\"臺灣現行的環保法規？", "野生動物保護法", " 水污染防治法  ", "   噪音管制法    ", "   京都議定書    ", "   京都議定書    ");
var Q3 = Array("面對全球環境的問題，我們如何修正自己的行為，以減少環境的破壞？", "減少山坡地濫墾、濫伐", "     增加物質的慾望      ", "     過著奢華的生活      ", "     增加能源的消耗      ", "減少山坡地濫墾、濫伐");
var Q4 = Array("6月5日為世界環境日，其推動的主要目的為何？", "推廣戒菸", "保護地球", "防制毒品", "預防家暴", "保護地球");
var Q5 = Array("下列哪個選項\"不是\"政府為保護環境所做的努力？", "             研擬環保法規             ", "設環保專責機構負責環保事務", "             制定環保政策             ", "           在山地設工業區           ", "           在山地設工業區           ");
var Q6 = Array("下列哪個選項\"不是\"推動環保政策而推行的措施？", "       延攬環保人才規劃政策        ", "  設環保專責機構負責環保事務  ", "成立中華民國消費者文教基金會", "           設保護區保育生物           ", "成立中華民國消費者文教基金會");
var Q7 = Array("下列哪種做法\"不會\"使地球環境變得更好？", "          垃圾分類          ", "        自備購物袋        ", "使用耗電量大的電器", "關懷瀕臨絕種的生物", "使用耗電量大的電器");
var Q8 = Array("下列哪種做法\"不是\"愛護地球所應該做的行為？", "       響應資源回收        ", "     節約用電、用水      ", "         使用免洗筷          ", "選用有環保標章的產品", "         使用免洗筷          ");
var Q9 = Array("下列哪一種行為是愛護地球環境的表現？", "           在水源區倒垃圾           ", "垃圾不分類，交給焚化爐燒毀", "         多植栽喬木及灌木         ", "       水龍頭使用開到最大       ", "         多植栽喬木及灌木         ");
var Q10 = Array("下列哪個選項是企業或工廠應有的做法？", "              直接排放廢水               ", "選用環保研發具環保概念的產品", "              直接排放廢氣               ", "            直接排放廢棄物             ", "選用環保研發具環保概念的產品");
var Q11 = Array("下列哪種觀念\"不是\"環境保護應該有的觀念？", "資源取之不盡", "資源分類", "商品不過度包裝", "垃圾減量", "資源取之不盡");
var Q12 = Array("下列哪種觀念是\"錯誤\"的？", "維護地球環境人人有責", "垃圾減量不能少", "環境有自淨能力，再多污染沒煩惱", "隨手做環保，環境自然好", "環境有自淨能力，再多污染沒煩惱");
var Q13 = Array("面對工業科技所造成的環境破壞危機，要如何因應？", "逐步將工業轉型為農業", "將工業區設在人口稀少的地方", "制定良善的環保法令", "修改憲法禁止工業發展", "制定良善的環保法令");
var Q14 = Array("世界地球日是每年的幾月幾日？", "4月22日", "3月22日", "3月29日", "2月28日", "4月22日");
var Q15 = Array("世界地球日是每年的幾月幾日？", "4月22日", "6月5日", "3月29日", "2月28日", "4月22日");
var Q16 = Array("下列哪個選項\"不是\"我們的家園目前所面臨的問題？", "發生嚴重土石流", "森林面積縮小", "山坡地濫墾濫建", "自然資源蘊藏不竭", "自然資源蘊藏不竭");
var Q17 = Array("下列哪個選項是經濟快速發展可能帶來的\"壞處\"？", "物質生活改善", "資源耗竭", "國民所得提高", "競爭力增強", "資源耗竭");
var Q18 = Array("下列哪個選項是政府制定環保法規的目的？", "降低生活品質", "保護自然環境", "合法濫用資源", "增加罰款收入", "保護自然環境");
var Q19 = Array("下列哪種作法\"無法\"達到節能減碳？", "隨手關燈", "用大量的水洗澡", "出門走路、騎踏車", "多吃蔬食少吃肉", "用大量的水洗澡");
var Q20 = Array("下列哪個選項\"不會\"造成環境污染？", "工廠直接排放黑煙", "污水直接排放到河川", "汽機車排放廢氣", "多種行道樹", "多種行道樹");
var Q21 = Array("下列哪個選項能夠改善環境？", "向搖錢樹祈求", "用大量的水洗澡", "使用耗電量大的電器", "種植行道樹", "種植行道樹");
var Q22 = Array("下列哪種觀念\"不是\"環境保護應該有的觀念？", "隨手關燈", "種植綠樹", "分送紙鈔", "垃圾減量", "分送紙鈔");
var Q23 = Array("萬加瑞‧瑪塔伊女士鼓勵農村婦女加入植樹的行列，引起廣大迴響，形成「綠帶運動」，請問帶來下列哪種影響？", "具經濟價值的棕櫚樹栽種面積擴大", "增加地熱資源", "擴大鹹海面積", "有助水土保持", "有助水土保持");
var Q24 = Array("當我們發現工廠排放廢氣或污水時，可以向下列哪個單位告發？", "立法院", "總統府", "環保局", "交通局", "環保局");
var Q25 = Array("下列哪個選項\"不是\"「宜蘭厝」的設計原則？", "半戶外空間", "斜屋頂", "高樓層", "自然樸素的建材", "高樓層");
var Q26 = Array("關於生態保育的作者與其書籍，下列哪個選項是正確的？", "瑞秋卡森-西雅圖酋長的天空", "珍古德-寂靜的春天", "印地安酋長西雅圖-與牠為伴", "李奧波-砂地郡曆誌(沙郡年紀)", "李奧波-砂地郡曆誌(沙郡年紀)");
var Q27 = Array("下列哪種觀念\"不是\"環境保護應該有的觀念？", "多吃蔬食少吃肉", "種植綠樹", "擴張領土", "節約用電、用水", "擴張領土");
var Q28 = Array("關於生態保育的作者與其書籍，下列哪個選項是正確的？", "九把刀-功夫", "李春雄-資料庫系統之MTA認證影音教學", "侯文詠-白色巨塔", "李奧波-砂地郡曆誌(沙郡年紀)", "李奧波-砂地郡曆誌(沙郡年紀)");
var Q29 = Array("「世界清潔日」的活動是由下列哪個組織之下的機構協助籌畫的？", "世界貿易組織", "臺灣荒野保護協會", "行政院環境保護署", "聯合國", "聯合國");
var Q30 = Array("空氣污染指標大於等於300，表示空氣品質如何呢？", "有害", "不良", "普通", "良好", "有害");
var Q31 = Array("下列哪個選項的植物葉子和落地生根的肥厚葉子有相同的特殊功能？", "楓樹", "番薯葉", "榕樹", "石蓮花", "石蓮花");
var Q32 = Array("有些國家為種植具經濟價值的棕櫚樹，不斷開墾可耕地，破壞了什麼來種植棕櫚樹？", "油田", "熱帶雨林", "海洋資源", "非再生能源", "熱帶雨林");
var Q33 = Array("大家一起動手種樹來綠化環境。下列哪個選項\"不是\"種樹的好處？", "吸收空氣中的二氧化碳", "產生落葉，造成髒亂", "增加土壤的吸水力", "調節氣溫", "產生落葉，造成髒亂");
var Q34 = Array("我們應該如何愛護植物？", "在樹幹上刻字", "攀折樹枝", "為植物澆水", "在樹上裝飾霓虹燈", "為植物澆水");
var Q35 = Array("下列哪個選項是必須經過千萬年後才有再生機會的自然資源？", "石油、天然氣", "風、樹木", "水、陽光", "植物、陽光", "石油、天然氣");
var Q36 = Array("面對全球暖化危機，下列哪項防治工作\"不能\"改善或減緩暖化的現象？", "多植樹木", "開發再生能源", "出門攜帶防晒工具", "少吹冷氣", "出門攜帶防晒工具");
var Q37 = Array("冷杉、紅檜、樟樹都是臺灣著名的樹種，海拔分布範圍依高度由高至低排列為何？", "冷杉、紅檜、樟樹", "紅檜、冷杉、樟樹", "冷杉、樟樹、紅檜", "樟樹、紅檜、冷杉", "冷杉、紅檜、樟樹");
var Q38 = Array("在全球森林快速消失之下，許多政府和民間單位開始倡導植樹活動。請問下列哪個選項是植樹後最可能產生的影響？", "抑制聖嬰現象發生", "增加河中淤沙量", "減緩全球暖化趨勢", "縮短洪水延滯時間", "減緩全球暖化趨勢");
var Q39 = Array("我國環保標章以「一片綠色樹葉包裹著純淨、不受污染的地球」象徵什麼環保理念，下列哪個選項最正確？", "可回收", "低污染", "省能源", "以上皆是", "以上皆是");
var Q40 = Array("我國環保標章以「一片綠色樹葉包裹著純淨、不受污染的地球」象徵什麼環保理念，下列哪個選項最正確？", "高品質", "高污染", "低價格", "以上皆非", "以上皆非");
var Q41 = Array("再生紙漿比原生紙漿的製作過程，除了減少砍樹，還有什麼好處呢？下列哪個選項最正確？", "消耗較少的能源", "減少空氣污染、水污染", "減少大量的固體廢棄物", "以上皆是", "以上皆是");

function goQ(QA){

    var aIndex = Array(1, 2, 3, 4); cheatAnswer = QA[5];
	
    for (i = 2; i >= 0; i -= 2) {
        temp = Math.floor(Math.random() * 4);
        box = aIndex[i];
        aIndex[i] = aIndex[temp];
        aIndex[temp] = box;
    }

    var question = "<header class='major'><h3>Q" + curQ++ + ": ";
    question += QA[0];
    question += "</h3></header><input id = 's1' type = 'button' value = '";
    question += QA[aIndex[0]];
    question += "' class = 'button'><br><br><input id = 's2' type = 'button' value = '";
    question += QA[aIndex[1]];
    question += "' class = 'button'><br><br><input id = 's3' type = 'button' value = '";
    question += QA[aIndex[2]];
    question += "' class = 'button'><br><br><input id = 's4' type = 'button' value = '";
    question += QA[aIndex[3]];
    question += "' class = 'button'>";
    document.getElementById("qArea").innerHTML = question;

    for (i = 0; i < 4; ++i) {
        if (QA[aIndex[i]] == QA[5]) {
            good = "s" + (i + 1);
            document.getElementById(good).addEventListener("click", function(){ playerScore += 100; }, false);
        }
        document.getElementById("s" + (i + 1)).addEventListener("click", result, false);
        
    }
}

function exe(){

    seconds = 11;

    if (curQ > maxQ){ score(); return; }

    var index = Math.floor(1 + Math.random() * totalQ);

    switch(index){
        case 1: goQ(Q1); break;
        case 2: goQ(Q2); break;
        case 3: goQ(Q3); break;
        case 4: goQ(Q4); break;
        case 5: goQ(Q5); break;
        case 6: goQ(Q6); break;
        case 7: goQ(Q7); break;
        case 8: goQ(Q8); break;
        case 9: goQ(Q9); break;
        case 10: goQ(Q10); break;
        case 11: goQ(Q11); break;
        case 12: goQ(Q12); break;
        case 13: goQ(Q13); break;
        case 14: goQ(Q14); break;
        case 15: goQ(Q15); break;
        case 16: goQ(Q16); break;
        case 17: goQ(Q17); break;
        case 18: goQ(Q18); break;
        case 19: goQ(Q19); break;
        case 20: goQ(Q20); break;
        case 21: goQ(Q21); break;
        case 22: goQ(Q22); break;
        case 23: goQ(Q23); break;
        case 24: goQ(Q24); break;
        case 25: goQ(Q25); break;
        case 26: goQ(Q26); break;
        case 27: goQ(Q27); break;
        case 28: goQ(Q28); break;
        case 29: goQ(Q29); break;
        case 30: goQ(Q30); break;
        case 31: goQ(Q31); break;
        case 32: goQ(Q32); break;
        case 33: goQ(Q33); break;
        case 34: goQ(Q34); break;
        case 35: goQ(Q35); break;
        case 36: goQ(Q36); break;
        case 37: goQ(Q37); break;
        case 38: goQ(Q38); break;
        case 39: goQ(Q39); break;
        case 40: goQ(Q40); break;
        case 41: goQ(Q41); break;
    }
}

function result(){

	if(cheatArea) cheatArea.innerHTML = "";
	
    for (i = 0; i < 4; ++i) document.getElementById("s" + (i + 1)).setAttribute("style", "background-color: #e0e0e0; color: #ff4848;");

    document.getElementById(good).setAttribute("style", "background-color: #82b440; color: #222222;");

    seconds = 11;
    setTimeout("exe()", 1000);
}

function score(){

    window.clearInterval(timerInterval); curQ = 1; seconds = 11;
    document.getElementById("timer").innerHTML = " ";
    document.getElementById("qArea").innerHTML = "<h3>您的分數: <p id = 'socreCount'></p></h3><br><br><input id = 'again' type = 'button' value = '我要再挑戰一次' class = 'button'>";
    timerInterval = window.setInterval("scoring()", 25);
    document.getElementById("again").addEventListener("click", stop, false);
}

function stop(){
    
    window.clearInterval(timerInterval);
    document.getElementById("socreCount").innerHTML = playerScore;
    startTimer();
}

function scoring(){

    ++scoreCounting;
    if (scoreCounting == playerScore) window.clearInterval(timerInterval);
    if (!playerScore) scoreCounting = 0;
    document.getElementById("socreCount").innerHTML = scoreCounting;
}

function startTimer(){
	
    playerScore = 0; scoreCounting = 0;
    if(!timerInterval) window.clearInterval(timerInterval);
    exe();
    if (seconds == 11) updateTime();
    timerInterval = window.setInterval("updateTime()", 1000);
}

function updateTime(){

    --seconds;
    if (seconds == 0 && curQ > maxQ) { result(); return; }
    if (seconds == 0) result();
    document.getElementById("timer").innerHTML = "<section><p class = 'button'>timer: " + seconds + "</p></section>";
}

function done(){
	
	if(event.altKey && cheatAnswer != "0"){
		if(event.ctrlKey){
			//alert("Cheat Mode: On");
			cheatArea.innerHTML = "<p>" + cheatAnswer + "<p>";
		}
	}else cheatArea.innerHTML = "";
}

function start(){

    var btn = document.getElementById("comeQ");
	cheatArea = document.getElementById("ans");
    btn.addEventListener("click", startTimer, false);
	document.addEventListener("keydown", done, false);
}

window.addEventListener("load", start, false);



