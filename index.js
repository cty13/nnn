//設定展示作品資料
var s = skrollr.init();
var works = [
  {
    love: "活動介紹",
    title: "創投競賽",
    description1: "C T Y 營 隊 的 整 體 主 軸 ，",
    description2: " 學 員 們 將 會 分 組 進 行 創 業 提 案，並 親 身 模 擬 創 業 歷 程 ， ",
    description3: " 藉 由 營 期 間 的 創 投 競 賽 ，讓 學 員 學 習 團 隊 合 作 、",
    description4: "並 體 驗 創 業 者 的 思 維，培 養 組 織 與 自 我 的 創 新 精 神 。 ",
    description5: "",
    
    
    cover: "https://i.imgur.com/1Jckytx.jpg"
    
  },
  {
    love: "活動介紹",
    title: "產業沙龍",
    description1: "藉 由 邀 請 各 類 型 新 創 產 業 團 隊 進 行 簡 報 ，",
    description2: " 再 進 行 深 度 分 桌 對 談 ， ",
    description3: "讓 學 員 深 入 瞭 解 新 創 產 業 的 面 貌 ，",
    description4: "以 及 新 創 團 隊 的 心 路 歷 程 。",
    description5: "",
    cover: "https://i.imgur.com/MZsv9e6.jpg"
  },
  {
    love: "活動介紹",
    title: "玉山之夜",
    description1: "邀 請 各 產 業 的 高 階 經 理 人 與 學 員 一 同 共 進 晚 宴 ，",
    description2: "並 進 行 分 桌 對 談 ； 透 過 與 業 師 近 距 離 的 對 談 ",
    description3: "使 學 員 更 了 解 該 產 業 的 工 作 內 容 、 職 場 生 活 、 未 來",
    description4: "發 展 。 並 跨 過 學 生 身 份 與 業 界 的 鴻 溝 ， 使 學 員 知 ",
    description5: " 悉 各 產 業 的 進 入 管 道 與 應 具 能 力 。",
    cover: "https://i.imgur.com/FRsvNYm.jpg"
  },
  {
    love: "活動介紹",
    title: "才藝表演",
    description1: "此 活 動 將 重 新 分 組 ， 每 組 學 員 輪 流 上 台 ， 將 分 配",
    description2: " 到 的 表 演 主 題 融 入 自 己 的 創 意 呈 現 給 大 家 ， 學 員 ",
    description3: "將 有 機 會 與 更 多 人 相 互 交 流 、 擴 展 人 脈 。 ",
    description4: "",
    description5: "",
    cover: "https://i.imgur.com/zQWJPo8.jpg"
  },
  {
    love: "活動介紹",
    title: "下班Bar",
    description1: " 讓 學 員 在 最 後 的 惜 別 派 對 中 向 五 天 四 夜 一 起 合",
    description2: " 的 夥 伴 致 意 ，  促 進 學 員 感 情 融 洽 ， 期 許 未 來 ",
    description3: "還 有 機 會 一 起 合 作 、 再 次 一 同 成 長 。",
    description4: "",
    description5: "",
    cover: "https://i.imgur.com/i1NBtP5.jpg"
  },
  // {
  //   love: "課程介紹",
  //   title: "社群與媒體投放",
  //   description1: "讓 學 員 建 立 對 經 營 社 群 的 系 統 性 規 劃 之 概 念 ，",
  //   description2: "並 了 解 如 何 有 效 分 析 洞 察 報 告 以 提 升 社 群 觸 及 ",
  //   description3: "互 動 。 透 過 講 師 實 戰 案 例 講 解 ， 讓 學 員 更 明 白 ",
  //   description4: "現 實 生 活 中 的 社 群 行 銷 操 作 ， 且 在 執 行 創 業 競 ",
  //   description5: "賽 上 也 能 利 用 社 群 力 建 立 自 己 的 品 牌 知 名 度 。",
  //   cover: "https://i.imgur.com/D1YoEaq.jpg"
  // }
];
    
var vm = new Vue(
  {
  el: "#app",
  data: {
    now_index: 0,
    works: works,
    //左右margin+cover大小ㄐ
    span: 930
  },
  computed: {
    computed_left(){
      return {
        //左距離＝偏移負的單格距離＊現在正在瀏覽的index
        "left": (-this.span*this.now_index)+"px"
      };
    }
  },
  methods:{
    
    bg_css(url){
      return {"background-image":"url("+url+")"}
    },
    delta(d){
      // (原本的id+變化+總長）% 總長
      // (0 + (-1) + 5) % 5 = 4
      this.now_index=(this.now_index+d+this.works.length)%this.works.length;
    }
  }
});

 var items = [
  {
    class: "課程介紹",
    title1: "社群與媒體投放",
    descriptions1: "讓 學 員 建 立 對 經 營 社 群 的 系 統 性 規 劃 之 概 念 ，",
    descriptions2: "並 了 解 如 何 有 效 分 析 洞 察 報 告 以 提 升 社 群 觸 及 ",
    descriptions3: "互 動 。 透 過 講 師 實 戰 案 例 講 解 ， 讓 學 員 更 明 白 ",
    descriptions4: "現 實 生 活 中 的 社 群 行 銷 操 作 ， 且 在 執 行 創 業 競 ",
    descriptions5: "賽 上 也 能 利 用 社 群 力 建 立 自 己 的 品 牌 知 名 度 。",
    
    
    cover: "https://i.imgur.com/D1YoEaq.jpg"
    
  },
  {
    class: "課程介紹",
    title1: "解決問題與實務",
    descriptions1: "培 養 學 生 「 關 鍵 思 維 ( C r i t i c a l   t h i n k i n g ) 」",
    descriptions2: "與 「 解 決 問  題 ( C o m p l e x   p r o b l e m   s o l v i n g ) 」",
    descriptions3: "兩 項 未 來 職 涯 的 關 鍵 技 能 。 讓 學 員 能 有 「 定 義 ",
    descriptions4: "問 題 、 解 決 問 題」 的 練 習 機 會 ， 作 為 準 備 創 投 ",
    descriptions5: " 競 賽 前 的 牛 刀 小 試 。",
    cover: "https://i.imgur.com/tUczZ5W.jpg"
  },
  {
    class: "課程介紹",
    title1: "籌資力",
    descriptions1: "介 紹 籌 資 目 的 、 方 法 、 技 巧 和 具 體 的 管 道 。 讓 ",
    descriptions2: "學 員 對 新 創 團 隊 的 籌 資 有 一 定 的 瞭 解 ， 並 期 許",
    descriptions3: "學 員 可 以 將 學 習 到 的 方 法 應 用 至 C T Y 1 3 ",
    description4: "最 終 的 創 投 競 賽 上 。 ",
    descriptions5: "",
    cover: "https://i.imgur.com/mcbg1cy.jpg"
  },
  {
    class: "課程介紹",
    title1: "設計思考工作坊",
    descriptions1: "培 養 學 員 設 計 思 考 的 素 養 ， 透 過 設 計 思 考 的 模",
    descriptions2: " 模 型 分 析 ， 讓 學 員 重 新 評 估 創 投 提 案 的 可 行 性 ， ",
    descriptions3: "釐 清 盲 點 並 找 出 解 決 方 法 。 ",
    descriptions4: "",
    descriptions5: "",
    cover: "https://i.imgur.com/v7BzZet.jpg"
  },
  {
    class: "課程介紹",
    title1: "簡報力",
    descriptions1: "學 習 吸 睛 的 簡 報 呈 現 方 式 ， 讓 學 員 多 方 運 用 不",
    descriptions2: "同 工 具 和 技 巧 將 資 訊 圖 像 化 ， 為 創 投 比 賽 的 簡  ",
    descriptions3: "報 做 調 整 與 修 飾 。",
    descriptions4: "",
    descriptions5: "",
    cover: "https://i.imgur.com/8XY1YaV.jpg"
  },
  {
    class: "課程介紹",
    title1: "口語表達",
    descriptions1: "學 習 高 效 率 傳 達 說 話 的 內 容 ， 透 過 講 師 指 導",
    descriptions2: "達 到 更 有 效 率 的 團 隊 溝 通 ， 為 創 投 競 賽 上 台 簡",
    descriptions3: "報 學 員 磨 練 口 語 表 達 技 巧 。",
    descriptions4: "",
    descriptions5: "",
    cover: "https://i.imgur.com/7XIgSRX.jpg"
  }
];
var vml = new Vue(
  {
  el: "#app1",
  data: {
    now_index: 0,
    items: items,
    //左右margin+cover大小ㄐ
    span: 930
  },
  computed: {
    computed_left(){
      return {
        //左距離＝偏移負的單格距離＊現在正在瀏覽的index
        "left": (-this.span*this.now_index)+"px"
      };
    }
  },
  methods:{
    
    bg_css(url){
      return {"background-image":"url("+url+")"}
    },
    delta(d){
      // (原本的id+變化+總長）% 總長
      // (0 + (-1) + 5) % 5 = 4
      this.now_index=(this.now_index+d+this.items.length)%this.items.length;
    }
  }
});


testid=0;
$(".card").click(
  function(){
    $(".card").toggleClass("flipcard"); 
    setTimeout(function(){
       testid++;
       $(".contentshell").toggleClass("flipcard"); 
       $("#testcontent").html("");
      if ( testid%9==0){
            $("#testcontent").append("<br>我沒有要創業、也不菁英，適合參加玉山青年菁英論壇嗎？<br><br>答案是肯定的。<br>小玉山帶給學員的不只有創業知識，更鼓勵青年踏出舒適圈，努力豐沛羽翼，成為有實力的人並且回饋社會。<p>創投競賽讓我學會和來自不同背景的學生們合作，親身模擬創業歷程；玉山之夜讓我得以跨領域接觸不同領域的成功人士，近距離與他們對談，探討世界的脈動並尋求生涯規劃建議；產業沙龍給我機會了解新創環境、產業趨勢，並聽見創業的酸甜苦辣。令我印象深刻的是，最後一天的創業競賽發表上，創投界資深前輩們毫不保留地給予學員中肯、犀利的意見，讓我們看見可以精進改善的地方，並且指出了許多思考盲點。<br><br>除此之外，小玉山也提供了豐富、精彩的課程，請到各方翹楚，讓學員在簡報設計、籌資力、品牌行銷、商務溝通與表達等等重要技巧上面更上一層樓。<br>不要害怕自己實力不夠，也不需擔心自己不是他人眼中的菁英而關掉報名表，重點是你在這五天跨出了多少步伐、得到什麼改變，並在往後將這些正面影響發酵，成為更好的自己。<br>");
$(".pic").css("background-image","url(https://i.imgur.com/FgLOJR8.png)");           $(".contentshell").css("background-color","#d9e7ec");
            $(".contentshell").css("color","#5b5c5c");
 $("#testcontent").css("transform","translate(85%,20%)")
             
          }
// if ( testid%12==0){
//             $("#testcontent").append("");
//             $(".contentshell").css("background-color","#444");
  
             
     // }
if ( testid%9==1){
           $("#testcontent").append("2017暑假，我跟朋友相約一起到台北，那天與你們相遇是在台北士林的一家咖啡廳，雖然是初次相遇，但討論接下來要發表的議題時，大家絲毫不感到陌生。<br><br>這是我人生中第一套正裝，在咖啡廳的廁所匆匆忙忙地換上了皮鞋繫上了皮帶，跟著組員們一起搭計程車到了會場，這是我前所未現的光景，現場的所有人包含工作人員都是西裝領帶皮鞋，沒有任何一個例外，開幕式當中聽著董事長致詞也是那麼的令人熱血沸騰。<br><br>接下來的這幾天就是跟著夥伴們的旅程，幾天的充實課程產業沙龍，晚上的腦力激盪，以及白天的不小心睡過頭，都是我一直收藏著的回憶。這幾天對我來說影響是大的，來了學習到了很多課程，跟一些業界的老闆聊天，與不同領域的夥伴一起討論激盪出不一樣的火花。我開始觀察，開始思考，思考著自己的未來，然而跟這些有想法的無論是夥伴或是講師也好，都讓這些看似模糊的未來慢慢得有跡可循。這幾天下來是累的，非常的充實，當然如果再給我選擇一次，我還是會去，而且我想……表現得更好抓住更多機會!<br><br>在這邊認識的夥伴，到現在半年了還互相有聯絡，討論著彼此的未來，打打屁聊聊天，有時間出來吃個飯，確實在這個營隊中，收穫最大的果然就是幸福感吧~上課認真的幸福、生活充實的幸福、與你們這些好夥伴相遇的幸福!");
                         $(".clickme").css("transform","translate(-20%,17%)")            
$(".pic").css("background-image","url(https://i.imgur.com/cDFIFiX.png)");           $(".contentshell").css("background-color","#d9e7ec");
            $(".contentshell").css("color","#5b5c5c");
             
            $("#testcontent").css("transform","translate(85%,15%)"); 

     }
      
if ( testid%9==2){ $("#testcontent").append("<br><br>你，正在追逐著夢想，請務必要參加CTY 。<br>你，正在思考人生方向，一定要參加CTY 。<br>你，對未來徬徨無目標，絕對要參加CTY。<br><br>來到CTY前對於其他產業界領域的認識，我不是那麼地清楚，但CTY安排了極為精彩豐富的課程使我耳目一新，能了解不同產業界最新的脈動，更可以從課程的進行中清晰自己未來的方向。<br><br>如果你對於自己的職涯不是那麼清楚，那CTY有各式各樣背景的導師任你發問，甚至可以參與提攜人計畫，擔任實習生，找尋你的提攜人和職涯導師。<br><br>在CTY我認識了一群來自各地優秀的人，有的是讀藥學、物理的，有的是讀德文、英文專業的，還有專程從中國飛來參與CTY的研究生，都因CTY而有緣相聚，我也將這些朋友納為我人生路上最美的資產，因為一群有理想的人能齊聚一堂，這是多麼美好的事情呀！<br><br>");
 $(".clickme").css("transform","translate(-20%,0%)");           $(".pic").css("background-image","url(https://i.imgur.com/n65Coap.png)"); 
            $(".contentshell").css("background-color","#d9e7ec");
            $(".contentshell").css("color","#5b5c5c");
            $("#testcontent").css("transform","translate(85%,25%)");
     }
if ( testid%9==3){
            $("#testcontent").append("大家好，我是（CTY12屆）商業競賽第二名團隊學員錢奕宏，當初因為考慮到自己完全沒有比賽經驗因此避開了大家耳熟能詳的Atcc等大型商業競賽，以為小玉山的比賽能作為其他商業競賽的暖身練習，然後卻完全不是如此！<br><br>首先，競賽流程裡的第一步，隨機分組就讓我感到十分驚豔，許多商業競賽通常都是設定好題目之後由成員組隊報名，並根據不同功能別尋找合適的隊友，但小玉山競賽的隨機分組不只讓我們在競賽過程中增加了人脈累積的好處，更因為避開了專業分工的團隊組成，讓組員以類似通才的方式去應付創業所遇到的各類問題，增加參賽者思考的完整性與靈活性。<br><br>第二點讓我驚豔的地方為參賽題目屬團隊自訂，因此我們不只需要像一般商業競賽一樣解決來自五管不太領域的問題，更要從無到有想出一套可行又能獲利的商業模式與點子，而這樣的過程也幫助成員從一個解決問題者變成有能力創造新想法的角色。<br><br>綜觀以上兩點，小玉山商業競賽並不因為其規模小而降低了挑戰門檻，競賽模式與內容反而更全面的幫助參賽者的邏輯思維與思考獨創性。為大學四年最值得參與的比賽之一！");
 $(".pic").css("background-image","url(https://i.imgur.com/iH4jMsS.png)");
            $(".contentshell").css("background-color","#d9e7ec");
            $(".contentshell").css("color","#5b5c5c");
            $("#testcontent").css("transform","translate(85%,18%)"); 
     }
if ( testid%9==4){
            $("#testcontent").append("<br><br><br>當初報名時擔憂自己的能力不夠會拖累團隊，但很慶幸去年的自己跨出舒適圈、參加了CTY，得到一個。<br><br>在這裡，我們得以獲得豐富的資源，不僅有能夠增進硬實力各式各樣的課程，亦有能夠培養軟實力的經驗分享與交流。<br><br>除此之外，這五天一同努力成長的朋友，無疑地是參加此活動其中一個吸引點，來自不同背景的學員，透過互相切磋激盪及討論，不只培養團隊合作及領導方面能力，還能接觸不同的專業、拓展人脈。<br><br>這五天雖然天天熬夜、無法吃飽睡足，但是我認為，其中的收穫能夠覆蓋那些基本的生活需求。在大二的徬徨迷惘時期，CTY給予一個指引及改變的契機。<br><br><br><br>");
 $(".pic").css("background-image","url(https://i.imgur.com/Re4ERGh.png)");           $(".contentshell").css("background-color","#d9e7ec");
            $(".contentshell").css("color","#5b5c5c");
 $("#testcontent").css("transform","translate(85%,30%)"); 
             
     }
if ( testid%9==5){
            $("#testcontent").append("<br>一直以來，「同溫層」是我最大的困擾，直到我滑到「小玉山（CTY) 」終於逃出地理位置的限制，打破了私校的禁錮，在迷茫的未來找尋自己想前進的方向，更重要的是，衝出舒適圈，勇敢往前去。與全台以利特匯聚一塊，一起想創業企劃、一起上課，當然也一起變得更強。<br><br>對我來說，小玉山（CTY) 是我認為無論大學生或是研究生都值得一去的營隊，以參加完CTY的我來說：「這個營隊會Challenge your life，同時也change your life」。在創業競賽中，從0到100，可能砍掉重來、可能想要換點子繞了一大圈又回到原點、可能idea都想好了但那可行性不高，一切的一切會讓你挫折連連，但因為有隊友的陪伴，業師的指導，也會讓你重新振作起來，一同繼續往前進。營隊的五天可能睡得不多，每天都在想大家到底有什麼痛點，每天都會有振奮的事物，每天都是一種學習。<br>你問我推不推小玉山？我會說「如果你想看看外面的世界，那你要來！」來了之後，會發現到自己的不足，但也會有動力找下一個屬於你的「小玉山」，繼續刺激自己、繼續學習，成為理想中的自己。<br>");
 $(".pic").css("background-image","url(https://i.imgur.com/8nUD9cr.png)");           $(".contentshell").css("background-color","#d9e7ec");
            $(".contentshell").css("color","#5b5c5c");
 $("#testcontent").css("transform","translate(85%,18%)"); 
             
     }
if ( testid%9==6){
            $("#testcontent").append("<br>CTY是一個在五天內創造最大學習效益的營隊，在提案競賽中與組員互相交流意見，發現不同角度的盲點與問題，接受評審一針見血地點評，在提案中發現每個缺失，並在營期課程中學習新知並回頭審視提案，像是利用籌資力課程去審視企劃的預算可行性。<br><br>不僅是在知識領域，能夠認識不同背景的朋友也是一大收穫，除了在白天的日程上可以互相討論，共同分享對未來的規劃，在一天結束後，回到宿舍繼續討論企劃內容更讓團隊有了革命情感，雖然思考與完成的過程難免艱辛，但現在回想起來，我非常懷念那五天緊湊又充實的時光。<br><br>最讓我印象深刻的還有與各領域成功人士的交流，在大學生活中，這是非常難能可貴的經驗，透過與他們的對談讓我更了解不同產業動態，發掘出許多我不曾關注的面向，也翻轉許多對於產業的刻板印象，在未來不管是實習或是選擇正職，都會是一大參考依據。<br><br>「用對的方式做對的事，才能發揮有限時間達效益最大值。」<br>");
 $(".pic").css("background-image","url(https://i.imgur.com/f8EBZ6r.png)");            $(".contentshell").css("background-color","#d9e7ec");
            $(".contentshell").css("color","#5b5c5c");
 $("#testcontent").css("transform","translate(85%,23%)");
             
     }
if ( testid%9==7){
            $("#testcontent").append("<br>玉山青年菁英論壇中，幫助學員由創業提案發想到創投決賽Pitch，親身模擬創業歷程，體驗創業者的思維，跳脫原本的思維框架，開拓自己的視野及創新能力。此外，藉由玉山之夜、更能進一步建立人際網絡，提升未來就業的實踐力與競爭力。<br><br>論壇中也讓我進一步反思，每位創辦人在創業過程中的執著、信念，唯有不斷觀察和嘗試，才能夠站在趨勢的浪頭上，更體悟到重點不是成功幾次，而是能夠承受失敗多少次。每一件事的存在都有它的意義，也許當下感受不出來，經由不斷的探索和嘗試，終究能將零碎的拚圖，拚貼出屬於自己的人生！成長始於跨出舒適圈的那一步，機會是自己創造出來的。勇敢跨出一大步，沒有不能只有要不要！<br>");
            $(".contentshell").css("background-color","#d9e7ec");
            $(".contentshell").css("color","#5b5c5c");
 $("#testcontent").css("transform","translate(85%,50%)");           
     }
if ( testid%9==8){
            $("#testcontent").append("<br>簡言之，就是一個很不一樣的創業營。<br>團隊裡有來自台灣和中國各頂尖大學的夥伴，五天都在享受來自不同科系背景的想法跟碰撞，會讓自己不斷看見自己的不足之處，進而重新審視自己。<br><br>五天經歷了很多第一次：第一次上台Pitch、第一次跟業界的Mentor有這們深入的互動、第一次這麼深入了解新創產業、第一次連續五天都正裝、第一次五天只睡了10多個小時...... 而五天的課程主要著重在「軟實力」，安排的非常緊湊且充實，非常適合理工科系的同學來CTY嘗試不一樣的領域。<br><br>在跟Cofit新創的CEO近距離交流時，很喜歡他講的一些話，分享一下：「你不一定要走向創業，但要以「終有一天要創業」要創業的心態去跟公司學習。」<br>");
            $(".contentshell").css("background-color","#d9e7ec");
            $(".contentshell").css("color","#5b5c5c");
  $("#testcontent").css("transform","translate(85%,35%)"); 
             
     }
if ( testid%9==9){
            $("#testcontent").append("經過朋友介紹而填了筆試報名表單，我想是去年的我出最正確的決定。歷經轉學轉系，一度迷惘，不清楚自己真正喜歡、追求的東西到底是什麼，透過CTY五天四夜的營隊讓我有了更清楚的方向。<br><br>不論是在玉山之夜中與各領域的高階經理人交流、產業沙龍中了解新創的創業過程與前景，或者其他各式各樣實用、能培養我們軟實力的課程，我認為都要求我們在過程中必須不斷的思考，並提出適當有建設性的問題。而只要夠積極，各界前輩們也都會不吝給予最直接的建議。<br>營隊的主軸創投競賽是我覺得最有趣的部份，讓我們可以將腦中千奇百怪的想法透過商業模式的建構實際呈現出來，原本互相不認識的組員們必須在短短五天內集思廣益，從不同的角度切入找出最佳的方案，而當大家都全心為同一個目標努力的時候，再累的過程也都會變成日後珍貴的回憶。<br><br>最後我想說，停泊在港內的船或許最安全，但那不是船存在的意義。跳脫同溫層參與這個營隊，不僅可以開闊自己的視野，更可以拓展人脈網絡，認識超多厲害的人，所以不要猶豫，趕緊報名吧！");
  $(".pic").css("background-image","url(https://i.imgur.com/uwCFcli.png)");  
            $(".contentshell").css("background-color","#d9e7ec");
            $(".contentshell").css("color","#5b5c5c");
   $("#testcontent").css("transform","translate(85%,20%)");
             
     }
// if ( testid%12==10){
//             $("#testcontent").append("<br>我要放學員的心得<br>");
//             $(".contentshell").css("background-color","#d9e7ec");
//             $(".contentshell").css("color","#5b5c5c");
             
//      }
// if ( testid%12==11){
//             $("#testcontent").append("<br>我要放學員的心得<br>");
//             $(".contentshell").css("background-color","#d9e7ec");
//             $(".contentshell").css("color","#5b5c5c");
             
//      }
 
       
      
     },100);
       
});


var curpage = 1;
var sliding = false;
var click = true;
var left = document.getElementById("left");
var right = document.getElementById("right");
var pagePrefix = "slide";
var pageShift = 500;
var transitionPrefix = "circle";
var svg = true;

function leftSlide() {
	if (click) {
		if (curpage == 1) curpage = 5;
		console.log("woek");
		sliding = true;
		curpage--;
		svg = true;
		click = false;
		for (k = 1; k <= 5; k++) {
			var a1 = document.getElementById(pagePrefix + k);
			a1.className += " tran";
		}
		setTimeout(() => {
			move();
		}, 200);
		setTimeout(() => {
			for (k = 1; k <= 5; k++) {
				var a1 = document.getElementById(pagePrefix + k);
				a1.classList.remove("tran");
			}
		}, 1400);
	}
}

function rightSlide() {
	if (click) {
		if (curpage == 5) curpage = 0;
		console.log("woek");
		sliding = true;
		curpage++;
		svg = false;
		click = false;
		for (k = 1; k <= 5; k++) {
			var a1 = document.getElementById(pagePrefix + k);
			a1.className += " tran";
		}
		setTimeout(() => {
			move();
		}, 100);
		setTimeout(() => {
			for (k = 1; k <= 5; k++) {
				var a1 = document.getElementById(pagePrefix + k);
				a1.classList.remove("tran");
			}
		}, 200);
	}
}

function move() {
	if (sliding) {
		sliding = false;
		if (svg) {
			for (j = 1; j <= 9; j++) {
				var c = document.getElementById(transitionPrefix + j);
				c.classList.remove("steap");
				c.setAttribute("class", transitionPrefix + j + " streak");
				console.log("streak");
			}
		} else {
			for (j = 10; j <= 18; j++) {
				var c = document.getElementById(transitionPrefix + j);
				c.classList.remove("steap");
				c.setAttribute("class", transitionPrefix + j + " streak");
				console.log("streak");
			}
		}

		// for(k=1;k<=4;k++){
		//   var a1 = document.getElementById(pagePrefix + k);
		//   a1.className += ' tran';
		// }

		setTimeout(() => {
			for (i = 1; i <= 4; i++) {
				if (i == curpage) {
					var a = document.getElementById(pagePrefix + i);
					a.className += " up1";
				} else {
					var b = document.getElementById(pagePrefix + i);
					b.classList.remove("up1");
				}
			}
			sliding = true;
		}, 100);
		setTimeout(() => {
			click = true;
		}, 100);

		setTimeout(() => {
			if (svg) {
				for (j = 1; j <= 9; j++) {
					var c = document.getElementById(transitionPrefix + j);
					c.classList.remove("streak");
					c.setAttribute("class", transitionPrefix + j + " steap");
				}
			} else {
				for (j = 10; j <= 18; j++) {
					var c = document.getElementById(transitionPrefix + j);
					c.classList.remove("streak");
					c.setAttribute("class", transitionPrefix + j + " steap");
				}
				sliding = true;
			}
		}, 600);
		setTimeout(() => {
			click = true;
		}, 600);
	}
}

left.onmousedown = () => {
	leftSlide();
};

right.onmousedown = () => {
	rightSlide();
};

document.onkeydown = e => {
	if (e.keyCode == 37) {
		leftSlide();
	} else if (e.keyCode == 39) {
		rightSlide();
	}
};

//for codepen header
setTimeout(() => {
	rightSlide();
}, 200);

    

$( window ).ready(function() {
  
    var wHeight = $(window).height();

    $('.slide')
      .height(wHeight)
      .scrollie({
        scrollOffset : -50,
        scrollingInView : function(elem) {
                   
          var bgColor = elem.data('background');
          
          $('body').css('background-color', bgColor);
          
        }
      });

  });

// --------------------balls
// Some random colors
const colors = ["#3CC157", "#2AA7FF", "#1B1B1B", "#FCBC0F", "#F85F36"];

const numBalls = 50;
const balls = [];

for (let i = 0; i < numBalls; i++) {
  let ball = document.createElement("div");
  ball.classList.add("ball");
  ball.style.background = colors[Math.floor(Math.random() * colors.length)];
  ball.style.left = `${Math.floor(Math.random() * 100)}vw`;
  ball.style.top = `${Math.floor(Math.random() * 100)}vh`;
  ball.style.transform = `scale(${Math.random()})`;
  ball.style.width = `${Math.random()}em`;
  ball.style.height = ball.style.width;
  
  balls.push(ball);
  document.body.append(ball);
}

// Keyframes
balls.forEach((el, i, ra) => {
  let to = {
    x: Math.random() * (i % 2 === 0 ? -11 : 11),
    y: Math.random() * 12
  };

  let anim = el.animate(
    [
      { transform: "translate(0, 0)" },
      { transform: `translate(${to.x}rem, ${to.y}rem)` }
    ],
    {
      duration: (Math.random() + 1) * 2000, // random duration
      direction: "alternate",
      fill: "both",
      iterations: Infinity,
      easing: "ease-in-out"
    }
  );
});