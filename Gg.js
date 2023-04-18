 //Selection tout les elements
const Play = document.getElementById("Play"); 
const AT = document.getElementById ("AT");
const  Quest = document.getElementById ("Quest");
const SafidyA = document.getElementById ("A");
const SafidyB = document.getElementById ("B");
const Isa = document.getElementById ("Isa");
const btGauge = document.getElementById ("btGauge");
const tGauge = document.getElementById ("tGauge");
const progress = document.getElementById ("progress");
const ScoreDiv = document.getElementById ("ContenueScore");

//Fanontaniana

let quests = [
    {
        Quest : " Dobokelin'Andriamanitra tsy azo hilomanosana  ",
        SafidyA : "Maso",
        SafidyB : "Ranomasina",
        Marina : "A" 
    },
    {
        Quest : " Tsy omby, tsy ondry nefa mahalala ny maintso hoanina ",
        SafidyA : "Valala",
        SafidyB : "Fanala",
        Marina : "B" 
    },
    {
        Quest : " Faladia ambony ranjo  ",
        SafidyA : "Latabatra",
        SafidyB : "Ravi-tsaonjo",
        Marina : "B" 
    },
    {
        Quest : " Mihiratra tsy mahita azy, mikipy vao mahita azy  ",
        SafidyA : "haizina",
        SafidyB : "Nofy",
        Marina : "B" 
    },
    {
        Quest : " Solabe minaonaona  ",
        SafidyA : "Aponga",
        SafidyB : "Sahafa",
        Marina : "A" 
    },
    {
        Quest : " Akana vao maika mitombo ",
        SafidyA : "Afo",
        SafidyB : "Fasika",
        Marina : "A" 
    },
    {
        Quest : " Aleveno aho haka ny taolako taloha  ",
        SafidyA : "Katsaka",
        SafidyB : "Vovoka",
        Marina : "A" 
    },
    {
        Quest : " Izy efa-dahy milanja, Kotokely mikapoka lalitra, ingahy Ndriana mitiritirina ery am-pandriana ",
        SafidyA : "Omby",
        SafidyB : "Tànana",
        Marina : "A" 
    },
    {
        Quest : " Bataina tsy zaka, afindra mora foana  ",
        SafidyA : "Rano",
        SafidyB : "Aloka",
        Marina : "B" 
    },
    {
        Quest : " Any an-tsaha no mamela-pandrika ka ny any an-tanana no voa  ",
        SafidyA : "Fandribaratra",
        SafidyB : "Fasana",
        Marina : "B" 
    },
    {
        Quest : " Kapain-tsy hita fery  ",
        SafidyA : "Rano",
        SafidyB : "Aloka",
        Marina : "B" 
    },
    {
        Quest : " Akao bararata tsy loaka aho hisotroako rano  ",
        SafidyA : "Fary",
        SafidyB : "Zinga",
        Marina : "A" 
    },
    {
        Quest : " Anaty rano tsy lena, an-tanety tsy malazo ",
        SafidyA : "Vorona",
        SafidyB : "Aloka",
        Marina : "B" 
    },
    {
        Quest : " Ilay boka mitaingi-tseza  ",
        SafidyA : "Mananasy",
        SafidyB : "Sosety",
        Marina : "A" 
    },
    {
        Quest : " Elobe tsy mipika  ",
        SafidyA : "Tafo",
        SafidyB : "Lanitra",
        Marina : "B" 
    },
    {
        Quest : " Alina izy tonga tsy nalaina, atoandro very tsy nangalarina  ",
        SafidyA : "Kintana",
        SafidyB : "Olona",
        Marina : "A" 
    },
    {
        Quest : " Ilay mahia miankin-drindrina  ",
        SafidyA : "Kifafa",
        SafidyB : "Hazo",
        Marina : "A" 
    },
    {
        Quest : " Hoano aho hihinanako anao  ",
        SafidyA : "Sakay",
        SafidyB : "Tantely",
        Marina : "A" 
    },
    {
        Quest : " Andrahoin-tsy masaka, atono mora foana ",
        SafidyA : "Rano",
        SafidyB : "Volo",
        Marina : "B" 
    },
    {
        Quest : " Izay teraka lahy avokoa  ",
        SafidyA : "Lahin-jiro",
        SafidyB : "Hazo",
        Marina : "A" 
    },
    
];

// somme variable

const dernierQuest = quests.length - 1;
let CourantQuest = 0;
let Cpt = 0;
const questTime = 10; // 10s
const gaugeWidth = 150; //150px
const gaugeInit = gaugeWidth / questTime;
let Ora;
let Score = 0;

// fournir une question

function FournirQuest(){
    let q = quests[CourantQuest];

    Quest.innerHTML = "<p>"+ q.Quest +"</p>";
    SafidyA.innerHTML = q.SafidyA;
    SafidyB.innerHTML = q.SafidyB;
}

Play.addEventListener("click",PlayAt);

// play ankamantatra
function PlayAt(){
    Play.style.display = "none";
    FournirQuest();
    AT.style.display = "block";
    FournirProgr();
    Fournircompteur();
    Ora = setInterval(Fournircompteur, 1000); //1000ms = 1s

}

//Fournir une progression

function FournirProgr(){
    for (let qIndex = 0; qIndex <= dernierQuest; qIndex++){
        progress.innerHTML += "<div class='prog' id="+ qIndex +"></div>";
    }
}

//Fournir compteur


function Fournircompteur(){
    if (Cpt <= questTime){
        Isa.innerHTML = Cpt;
        tGauge.style.width = Cpt * gaugeInit + "px";
        Cpt++;
    }
    else {
        Cpt = 0;
        //miova mena ny progress
        RepFaux();
        if (CourantQuest < dernierQuest) {
            CourantQuest++;
            FournirQuest();
        } else {
            //scrore a la fin du Ankamantatra
            clearInterval(Ora);
            FournirScore();
        }
    }
}

// Choix reponse

function checkAnswer(Valiny){
    if (Valiny == quests[CourantQuest].Marina){
        //valiny marina
        Score++;
        //miova maintso ny progress
        RepVrai();
    } else {
        //valiny diso
        //miova mena ny progress
        RepFaux();
    }
    // ato ny tohiny manaraka
    Cpt = 0;
    if (CourantQuest < dernierQuest) {
        CourantQuest++;
        FournirQuest();
    } else {
        //scrore a la fin du Ankamantatra
        clearInterval(Ora);
        FournirScore();
    }
}

// Si la reponse et vrai

function RepVrai(){
    document.getElementById(CourantQuest).style.backgroundColor = "#0f0";
}

// Si la reponse et faux

function RepFaux(){
    document.getElementById(CourantQuest).style.backgroundColor = "#f00";
}

//fournir Score

function FournirScore(){
    ScoreDiv.style.display = "block";

    //Calcule pourcentage a chaque question
    const Pourcent = Math.round(100 * Score/quests.length);

    //image à chaque pourcentage
    let img = (Pourcent >= 80) ? "5.png" :
              (Pourcent >60 ) ? "4.png" :
              (Pourcent >40 ) ? "3.png":
              (Pourcent >20 ) ? "2.png":
                "1.png" ;

    ScoreDiv.innerHTML = "<img src ="+ img +">" ;
    ScoreDiv.innerHTML += "<p>"+ Pourcent +"%</p>" ;

}