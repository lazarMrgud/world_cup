let btn_Start = document.querySelector(".start");
let btn_Group = document.querySelector(".Grupa");
let btn_I_round = document.querySelector(".Prvo_kolo");
let btn_II_round = document.querySelector(".Drugo_kolo");
let btn_III_round = document.querySelector(".Trece_kolo");

let dugmeIskljuci = document.querySelector(".button_category");

let btn_Sixth = document.querySelector(".VIII ");
let btn_Sixth_POINTS = document.querySelector(".VIII_bodovi");
let btn_IV_points = document.querySelector(".IV_bodovi");
let btn_II_points = document.querySelector(".II_bodovi");
let btn_FINALE_points = document.querySelector(".FINALE");
const naslovi = document.querySelectorAll(".naslov");
const DIV_title_for_finalists = document.querySelector(".name_of_cvalification");



const izabranaDugmad = [];
const izabranaDugmad_I = [];
const izabranaDugmad_II = [];
const izabranaDugma_III = [];

let executing = false;

let dugmeKliknuto = false;

let Add_goals; //ovde stoje golovi dodati za prvo kolo

const Round_I_goals = [];
const Round_II_goals = [];
const Round_III_goals = [];
const Goals_6_final = [];
const Goals_IV_final = [];
const Goals_II_final = [];
const Goals_third_place = [];
const Goals_final = [];
const sveobuhvatni_timovi = [];
const golovi = []; 
const noviTimovi = [];

const Round_I = [];
const Round_II = [];
const Round_III = [];
const ROUND_Sixth = [];
const ROUND_IV = [];

const ROUND_FINALE_II = [];
const ROUND_FINALE = [];
const TRECEMESTO = [];

const sorted_I_round = [];
const sorted_II_round = [];
const sorted_III_round = [];

const sorted_Sixth_final = [];
const sorted_IV_finale = [];
const sortirano_II_finale = [];
const sortirano_III_vs_FINAL = [];
const sortirano_finale = [];

const GRUPE_VIII = [];
const Group_IV = [];
const Group_II = [];

const GRUPA_TRECE_MESTO = [];
const GRUPA_FINALISATA = [];

const sets_of_teams = [];
const sets_of_teams1 = [];
const sets_of_teams2 = [];
const sets_of_teams3 = [];

const Timovi = [
    {
        id: 0,
        grupa: "Agrupa",
        ime: "Qatar",
        slika: "Image of tim/QAT.png",
        bodovi: "Image of tim/ball.png",
        players: {
            Goalkeeper: [
                {
                    ime: "MESHAAL BARSHAM",
                    slika: "Quatar/Goalkeeper/MESHAAL BARSHAM.webp",
                },
                {
                    ime: "SAAD ALSHEEB",
                    slika: "Quatar/Goalkeeper/SAAD ALSHEEB.webp",
                },
                {
                    ime: "YOUSOF HASSAN",
                    slika: "Quatar/Goalkeeper/YOUSOF HASSAN.webp",
                },
            ],
            Defender: [
                {
                    ime: "BASSAM HISAM",
                    slika: "Quatar/Defender/BASSAM HISAM.webp",
                },
                {
                    ime: "BOUALEM KHOUKI",
                    slika: "Quatar/Defender/BOUALEM KHOUKI.webp",
                },
                {
                    ime: "HOMAM AHMED",
                    slika: "Quatar/Defender/HOMAM AHMED.webp",
                },
                {
                    ime: "ISMAIL MOHAMAD",
                    slika: "Quatar/Defender/ISMAIL MOHAMAD.webp",
                },
                {
                    ime: "MOHAMMED WAAD",
                    slika: "Quatar/Defender/MOHAMMED WAAD.webp",
                },
                {
                    ime: "MUSAAB KHIDIR",
                    slika: "Quatar/Defender/MUSAAB KHIDIR.webp",
                },
                {
                    ime: "PEDRO MIGUEL",
                    slika: "Quatar/Defender/PEDRO MIGUEL.webp",
                },
                {
                    ime: "TAREK SALMAN",
                    slika: "Quatar/Defender/TAREK SALMAN.webp",
                },
            ],
            Forward: [
                {
                    ime: "AHMED ALAAELDIN",
                    slika: "Quatar/Forward/AHMED ALAAELDIN.webp",
                },
                {
                    ime: "AKRAM AFIF",
                    slika: "Quatar/Forward/AKRAM AFIF.webp",
                },
                {
                    ime: "ALMOEZ ALI",
                    slika: "Quatar/Forward/ALMOEZ ALI.webp",
                },
                {
                    ime: "KHALID MUNEER",
                    slika: "Quatar/Forward/KHALID MUNEER.webp",
                },
                {
                    ime: "MOHAMMED MUNTARI",
                    slika: "Quatar/Forward/MOHAMMED MUNTARI.webp",
                },
            ],
            Midfielder: [
                {
                    ime: "ABDELKARIM HASSAN",
                    slika: "Quatar/Midfielder/ABDELKARIM HASSAN.webp",
                },
                {
                    ime: "ABDULAZIZ HATEM",
                    slika: "Quatar/Midfielder/ABDULAZIZ HATEM.webp",
                },
                {
                    ime: "ALI ASSADALLA",
                    slika: "Quatar/Midfielder/ALI ASSADALLA.webp",
                },
                {
                    ime: "ASSIM MADIBO",
                    slika: "Quatar/Midfielder/ASSIM MADIBO.webp",
                },
                {
                    ime: "HASSAN ALHAYDOS",
                    slika: "Quatar/Midfielder/HASSAN ALHAYDOS.webp",
                },
                {
                    ime: "JESSEM GABER",
                    slika: "Quatar/Midfielder/JESSEM GABER.webp",
                },
                {
                    ime: "KARIM BOUDIAF",
                    slika: "Quatar/Midfielder/KARIM BOUDIAF.webp",
                },
                {
                    ime: "MOUSTAFA TAREK",
                    slika: "Quatar/Midfielder/MOUSTAFA TAREK.webp",
                },
                {
                    ime: "NAIF ABDULRAHEEM",
                    slika: "Quatar/Midfielder/NAIF ABDULRAHEEM.webp",
                },
                {
                    ime: "SALEM AL HAJRI",
                    slika: "Quatar/Midfielder/SALEM AL HAJRI.webp",
                },
            ],
            Manager: [
                {
                    ime: "FELIX SANCHEZ BAS",
                    slika: "Quatar/Manager/FELIX SANCHEZ BAS.webp",
                },
            ],
        },
        info: {
            P: 0,
            W: 0,
            D: 0,
            L: 0,
            GF: 0,
            GA: 0,
            GD: 0,
            Pts: 0
        },
    },
    {
        id: 1,
        grupa: "Agrupa",
        ime: "Netherlands",
        slika: "Image of tim/NED.png",
        bodovi: "Image of tim/ball.png",
        players: {
            Goalkeeper: [
                {
                    ime: "ANDRIES NOPPERT",
                    slika: "Nethelands/Goalkeeper/ANDRIES NOPPERT.webp",
                },
                {
                    ime: "JUSTIN BIJLOW",
                    slika: "Nethelands/Goalkeeper/JUSTIN BIJLOW.webp",
                },
                {
                    ime: "REMKO PASVEER",
                    slika: "Nethelands/Goalkeeper/REMKO PASVEER.webp",
                },
            ],
            Defender: [
                {
                    ime: "DALEY BLIND",
                    slika: "Nethelands/Defender/DALEY BLIND.webp",
                },
                {
                    ime: "DENZEL DUMFRIES",
                    slika: "Nethelands/Defender/DENZEL DUMFRIES.webp",
                },
                {
                    ime: "JEREMIE FRIMPONG",
                    slika: "Nethelands/Defender/JEREMIE FRIMPONG.webp",
                },
                {
                    ime: "JURRIEN TIMBER",
                    slika: "Nethelands/Defender/JURRIEN TIMBER.webp",
                },
                {
                    ime: "MATTHIJS DE LIGT",
                    slika: "Nethelands/Defender/MATTHIJS DE LIGT.webp",
                },
                {
                    ime: "NATHAN AKE",
                    slika: "Nethelands/Defender/NATHAN AKE.webp",
                },
                {
                    ime: "TYRELL MALACIA",
                    slika: "Nethelands/Defender/TYRELL MALACIA.webp",
                },
                {
                    ime: "VIRGIL VAN DIJK",
                    slika: "ANethelands/Defender/VIRGIL VAN DIJK.webp",
                },
                {
                    ime: "STEFAN DE VRIJ",
                    slika: "Nethelands/Defender/STEFAN DE VRIJ.webp",
                },
            ],
            Forward: [
                {
                    ime: "CODY GAKPO",
                    slika: "Nethelands/Forward/CODY GAKPO.webp",
                },
                {
                    ime: "LUUK DE JONG",
                    slika: "Nethelands/Forward/LUUK DE JONG.webp",
                },
                {
                    ime: "MEMPHIS DEPAY",
                    slika: "Nethelands/Forward/MEMPHIS DEPAY.webp",
                },
                {
                    ime: "NOA LANG",
                    slika: "Nethelands/Forward/NOA LANG.webp",
                },
                {
                    ime: "STEVEN BERGWIJN",
                    slika: "Nethelands/Forward/STEVEN BERGWIJN.webp",
                },
                {
                    ime: "VINCENT JANSSEN",
                    slika: "Nethelands/Forward/VINCENT JANSSEN.webp",
                },
                {
                    ime: "WOUT WEGHORST",
                    slika: "Nethelands/Forward/WOUT WEGHORST.webp",
                },
            ],
            Midfielder: [
                {
                    ime: "DAVY KLAASSEN",
                    slika: "Nethelands/Midfielder/DAVY KLAASSEN.webp GOMEZ.webp",
                },
                {
                    ime: "FRENKIE DE JONG",
                    slika: "Nethelands/Midfielder/FRENKIE DE JONG.webp",
                },
                {
                    ime: "KENNETH TAYLOR",
                    slika: "Nethelands/Midfielder/KENNETH TAYLOR.webp",
                },
                {
                    ime: "MARTEN DE ROON",
                    slika: "Nethelands/Midfielder/MARTEN DE ROON.webp",
                },
                {
                    ime: "STEFAN BERGHUIS",
                    slika: "Nethelands/Midfielder/STEFAN BERGHUIS.webp",
                },
                {
                    ime: "TEUN KOOPMEINERS",
                    slika: "Nethelands/Midfielder/TEUN KOOPMEINERS.webp",
                },
                {
                    ime: "XOVI SIMONS",
                    slika: "Nethelands/Midfielder/XOVI SIMONS.webp",
                },
                {
                    ime: "RODRIGUEZ GUIDO",
                    slika: "Argentina/Midfielder/RODRIGUEZ GUIDO.webp",
                },
            ],
            Manager: [
                {
                    ime: "LOUIS VAN GAAL",
                    slika: "Nethelands/Manager/LOUIS VAN GAAL.webp",
                },
            ],
        },
        info: {
            P: 0,
            W: 0,
            D: 0,
            L: 0,
            GF: 0,
            GA: 0,
            GD: 0,
            Pts: 0
        },
    },
    {
        id: 2,
        grupa: "Agrupa",
        ime: "Ecuador",
        slika: "Image of tim/ECU.png",
        bodovi: "Image of tim/ball.png",
        players: {
            Goalkeeper: [
                {
                    ime: "ALEXANDER DOMINGUEZ",
                    slika: "Ecuador/Goalkeeper/ALEXANDER DOMINGUEZ.webp",
                },
                {
                    ime: "HERNAN GALINDEZ",
                    slika: "Ecuador/Goalkeeper/HERNAN GALINDEZ.webp",
                },
                {
                    ime: "MOISES RAMIREZ",
                    slika: "Ecuador/Goalkeeper/MOISES RAMIREZ.webp",
                },
            ],
            Defender: [
                {
                    ime: "ANGELO PRECIADO",
                    slika: "Ecuador/Defender/ANGELO PRECIADO.webp",
                },
                {
                    ime: "DIEGO PALACIOS",
                    slika: "Ecuador/Defender/DIEGO PALACIOS.webp",
                },
                {
                    ime: "FELIX TORRES",
                    slika: "Ecuador/Defender/FELIX TORRES.webp",
                },
                {
                    ime: "JACKSON POROZO",
                    slika: "Ecuador/Defender/JACKSON POROZO.webp",
                },
                {
                    ime: "PERVIS ESTUPINAN",
                    slika: "Ecuador/Defender/PERVIS ESTUPINAN.webp",
                },
                {
                    ime: "PIERO HINCAPIE",
                    slika: "Ecuador/Defender/PIERO HINCAPIE.webp",
                },
                {
                    ime: "ROBERT ARBOLEDA",
                    slika: "Ecuador/Defender/ROBERT ARBOLEDA.webp",
                },
                {
                    ime: "WILLAM PACHO",
                    slika: "Ecuador/Defender/WILLAM PACHO.webp",
                },
                {
                    ime: "XAVIER ARREAGA",
                    slika: "Ecuador/Defender/XAVIER ARREAGA.webp",
                },
            ],
            Forward: [
                {
                    ime: "DJORKAEFF REASCO",
                    slika: "Ecuador/Forward/DJORKAEFF REASCO.webp",
                },
                {
                    ime: "ENNER VALENCIA",
                    slika: "Ecuador/Forward/ENNER VALENCIA.webp",
                },
                {
                    ime: "KEVIN RODRIGUEZ",
                    slika: "Ecuador/Forward/KEVIN RODRIGUEZ.webp",
                },
                {
                    ime: "MICHAEL ESTRADO",
                    slika: "Ecuador/Forward/MICHAEL ESTRADO.webp",
                },
            ],
            Midfielder: [
                {
                    ime: "ALAN FRANCO",
                    slika: "Ecuador/Midfielder/ALAN FRANCO.webp",
                },
                {
                    ime: "ANGEL MENA",
                    slika: "Ecuador/Midfielder/ANGEL MENA.webp",
                },
                {
                    ime: "CARLOS GRUEZO",
                    slika: "Ecuador/Midfielder/CARLOS GRUEZO.webp",
                },
                {
                    ime: "EDUAR PRECIADO",
                    slika: "Ecuador/Midfielder/EDUAR PRECIADO.webp",
                },
                {
                    ime: "GONZALO PLATA",
                    slika: "Ecuador/Midfielder/GONZALO PLATA.webp",
                },
                {
                    ime: "JEREMY SARMIENTO",
                    slika: "Ecuador/Midfielder/JEREMY SARMIENTO.webp",
                },
                {
                    ime: "JHEGSON MENDEZ",
                    slika: "Ecuador/Midfielder/JHEGSON MENDEZ.webp",
                },
                {
                    ime: "JOSE CIFUENTES",
                    slika: "Ecuador/Midfielder/JOSE CIFUENTES.webp",
                },
                {
                    ime: "MOISES CALCEDO",
                    slika: "Ecuador/Midfielder/MOISES CALCEDO.webp",
                },
                {
                    ime: "ROMARIO IBARRA",
                    slika: "Ecuador/Midfielder/ROMARIO IBARRA.webp",
                },
            ],
            Manager: [
                {
                    ime: "GUSTAVO ALFARO",
                    slika: "Ecuador/Manager/GUSTAVO ALFARO.webp",
                },
            ],
        },
        info: {
            P: 0,
            W: 0,
            D: 0,
            L: 0,
            GF: 0,
            GA: 0,
            GD: 0,
            Pts: 0
        },
    },
    {
        id: 3,
        grupa: "Agrupa",
        ime: "Senegal",
        slika: "Image of tim/SEN.png",
        bodovi: "Image of tim/ball.png",
        players: {
            Goalkeeper: [
                {
                    ime: "ALFRED GOMIS",
                    slika: "Senegal/Goalkeeper/ALFRED GOMIS.webp",
                },
                {
                    ime: "EDOUARD MENDY",
                    slika: "Senegal/Goalkeeper/EDOUARD MENDY.webp",
                },
                {
                    ime: "SENY DIENG",
                    slika: "Senegal/Goalkeeper/SENY DIENG.webp",
                },
            ],
            Defender: [
                {
                    ime: "ADBOU DIALLO",
                    slika: "Senegal/Defender/ADBOU DIALLO.webp",
                },
                {
                    ime: "CHEIKHOU KOUYATE",
                    slika: "Senegal/Defender/CHEIKHOU KOUYATE.webp",
                },
                {
                    ime: "FODE BALLO",
                    slika: "Senegal/Defender/FODE BALLO.webp",
                },
                {
                    ime: "FORMOSE MENDY",
                    slika: "Senegal/Defender/FORMOSE MENDY.webp",
                },
                {
                    ime: "ISMAIL JAKOBSA",
                    slika: "Senegal/Defender/ISMAIL JAKOBSA.webp",
                },
                {
                    ime: "KALIDOU KOULIBALY",
                    slika: "Senegal/Defender/KALIDOU KOULIBALY.webp",
                },
                {
                    ime: "MOUSSA NDIAYE",
                    slika: "Senegal/Defender/MOUSSA NDIAYE.webp",
                },
                {
                    ime: "MOUSTAPHA NAME",
                    slika: "Senegal/Defender/MOUSTAPHA NAME.webp",
                },
                {
                    ime: "PAPE ABOU CISSE",
                    slika: "Senegal/Defender/PAPE ABOU CISSE.webp",
                },
                {
                    ime: "YOUSSOUF SABALY",
                    slika: "Senegal/Defender/YOUSSOUF SABALY.webp",
                },
            ],
            Forward: [
                {
                    ime: "BOULAYE DIA",
                    slika: "Senegal/Forward/BOULAYE DIA.webp",
                },
                {
                    ime: "CHEIKH",
                    slika: "Senegal/Forward/CHEIKH.webp",
                },
                {
                    ime: "FAMARA DIDHIOU",
                    slika: "Senegal/Forward/FAMARA DIDHIOU.webp",
                },
                {
                    ime: "ISMAILA SARR",
                    slika: "Senegal/Forward/ISMAILA SARR.webp",
                },
                {
                    ime: "MOHAMMED ALYAMI",
                    slika: "Senegal/Forward/MOHAMMED ALYAMI.webp",
                },
                {
                    ime: "NICOLAS JACKSON",
                    slika: "Senegal/Forward/NICOLAS JACKSON.webp",
                },
            ],
            Midfielder: [
                {
                    ime: "IDRISSA GANA GUEYE",
                    slika: "Senegal/Midfielder/IDRISSA GANA GUEYE.webp",
                },
                {
                    ime: "KREPIN DIATTA",
                    slika: "Senegal/Midfielder/KREPIN DIATTA.webp",
                },
                {
                    ime: "MAMADOU",
                    slika: "Senegal/Midfielder/MAMADOU.webp",
                },
                {
                    ime: "NAMPALSY MENDY",
                    slika: "Senegal/Midfielder/NAMPALSY MENDY.webp",
                },
                {
                    ime: "PAPE GUEYE",
                    slika: "Senegal/Midfielder/PAPE GUEYE.webp",
                },
                {
                    ime: "PAPE SARR",
                    slika: "Senegal/Midfielder/PAPE SARR.webp",
                },
                {
                    ime: "PATHE CISS",
                    slika: "Senegal/Midfielder/PATHE CISS.webp",
                },
            ],
            Manager: [
                {
                    ime: "Aliou Cissé",
                    slika: "senegal/midfielder",
                },
            ],
        },
        info: {
            P: 0,
            W: 0,
            D: 0,
            L: 0,
            GF: 0,
            GA: 0,
            GD: 0,
            Pts: 0
        },
    },
    {
        id: 4,
        grupa: "Bgrupa",
        ime: "England",
        slika: "Image of tim/ENG.png",
        bodovi: "Image of tim/ball.png",
        players: {
            Goalkeeper: [
                {
                    ime: "AARAN RAMSDALE",
                    slika: "England/Goalkeeper/AARAN RAMSDALE.webp",
                },
                {
                    ime: "AARAN",
                    slika: "England/Goalkeeper/AARAN.webp",
                },
                {
                    ime: "JORDAN PICKFORD",
                    slika: "England/Goalkeeper/JORDAN PICKFORD.webp",
                },
                {
                    ime: "NICK POOE",
                    slika: "England/Goalkeeper/NICK POOE.webp",
                },
            ],
            Defender: [
                {
                    ime: "BEN WHITE",
                    slika: "England/Defender/BEN WHITE.webp",
                },
                {
                    ime: "CONOR COADY",
                    slika: "England/Defender/CONOR COADY.webp",
                },
                {
                    ime: "ERIC DIER",
                    slika: "England/Defender/ERIC DIER.webp",
                },
                {
                    ime: "HARRY MAGUIRE",
                    slika: "England/Defender/HARRY MAGUIRE.webp",
                },
                {
                    ime: "JOHN SONES",
                    slika: "England/Defender/JOHN SONES.webp",
                },
                {
                    ime: "KIERAN TRIPPIER",
                    slika: "England/Defender/KIERAN TRIPPIER.webp",
                },
                {
                    ime: "KYLE WALKER",
                    slika: "England/Defender/KYLE WALKER.webp",
                },
                {
                    ime: "LUKE SHAW",
                    slika: "England/Defender/LUKE SHAW.webp",
                },
                {
                    ime: "TRENT ALEXANDER-ARN",
                    slika: "England/Defender/TRENT ALEXANDER-ARN.webp",
                },
            ],
            Forward: [
                {
                    ime: "BUKAYO SAKA",
                    slika: "England/Forward/BUKAYO SAKA.webp",
                },
                {
                    ime: "CALLUM WILSON",
                    slika: "England/Forward/CALLUM WILSON.webp",
                },
                {
                    ime: "HARRY KANE",
                    slika: "England/Forward/HARRY KANE.webp",
                },
                {
                    ime: "JACK GREALISH",
                    slika: "England/Forward/JACK GREALISH.webp",
                },
                {
                    ime: "MARCUS RASHFORD",
                    slika: "England/Forward/MARCUS RASHFORD.webp",
                },
                {
                    ime: "RAHEEM STERLING",
                    slika: "England/Forward/RAHEEM STERLING.webp",
                },
            ],
            Midfielder: [
                {
                    ime: "CONOR GALLAGHER",
                    slika: "England/Midfielder/CONOR GALLAGHER.webp",
                },
                {
                    ime: "DECLAN RICE",
                    slika: "England/Midfielder/DECLAN RICE.webp",
                },
                {
                    ime: "JAMES MADDISON",
                    slika: "England/Midfielder/JAMES MADDISON.webp",
                },
                {
                    ime: "JORDAN HEDERSON",
                    slika: "England/Midfielder/JORDAN HEDERSON.webp",
                },
                {
                    ime: "JUDE BELLINGHAM",
                    slika: "England/Midfielder/JUDE BELLINGHAM.webp",
                },
                {
                    ime: "KALVIN PHILLIPS",
                    slika: "England/Midfielder/KALVIN PHILLIPS.webp",
                },
                {
                    ime: "MASON MOUNT",
                    slika: "England/Midfielder/MASON MOUNT.webp",
                },
                {
                    ime: "PHIL FODEN",
                    slika: "England/Midfielder/PHIL FODEN.webp",
                },
            ],
            Manager: [
                {
                    ime: "SOUTHGATE",
                    slika: "England/Manager/SOUTHGATE.webp",
                },
            ],
        },
        info: {
            P: 0,
            W: 0,
            D: 0,
            L: 0,
            GF: 0,
            GA: 0,
            GD: 0,
            Pts: 0
        },
    },
    {
        id: 5,
        grupa: "Bgrupa",
        ime: "USA",
        slika: "Image of tim/USA.png",
        bodovi: "Image of tim/ball.png",
        players: {
            Goalkeeper: [
                {
                    ime: "ETHAN HORVATH",
                    slika: "United States/Goalkeeper/ETHAN HORVATH.webp",
                },
                {
                    ime: "Matt TURNER",
                    slika: "United States/Goalkeeper/Matt TURNER.webp",
                },
                {
                    ime: "SEAN JOHNSON",
                    slika: "United States/Goalkeeper/SEAN JOHNSON.webp",
                },
            ],
            Defender: [
                {
                    ime: "AARON LONG",
                    slika: "United States/Defender/AARON LONG.webp",
                },
                {
                    ime: "ANTONEE ROBINSON",
                    slika: "United States/Defender/ANTONEE ROBINSON.webp",
                },
                {
                    ime: "CAMERON CARTER-VICKERS",
                    slika: "United States/Defender/CAMERON CARTER-VICKERS.webp",
                },
                {
                    ime: "GONZALO MONTIEL",
                    slika: "Argentina/Defender/GONZALO MONTIEL.webp",
                },
                {
                    ime: "DeANDRE YEDLIN",
                    slika: "United States/Defender/DeANDRE YEDLIN.webp",
                },
                {
                    ime: "JOE SCALLY",
                    slika: "United States/Defender/JOE SCALLY.webp",
                },
                {
                    ime: "SERGINO DEST",
                    slika: "United States/Defender/SERGINO DEST.webp",
                },
                {
                    ime: "SHAQUELL MOORE",
                    slika: "United States/Defender/SHAQUELL MOORE.webp",
                },
                {
                    ime: "TIM REAM",
                    slika: "United States/Defender/TIM REAM.webp",
                },
                {
                    ime: "WALKER ZIMMERMAN",
                    slika: "United States/Defender/WALKER ZIMMERMAN.webp",
                },
            ],
            Forward: [
                {
                    ime: "BRENDEN AARONSON",
                    slika: "United States/Forward/BRENDEN AARONSON.webp",
                },
                {
                    ime: "CHRISTIAN PULISC",
                    slika: "United States/Forward/CHRISTIAN PULISC.webp",
                },
                {
                    ime: "GIOVANNI REYNA",
                    slika: "United States/Forward/GIOVANNI REYNA.webp",
                },
                {
                    ime: "HAJI WRIGHT",
                    slika: "United States/Forward/HAJI WRIGHT.webp",
                },
                {
                    ime: "JESUS FERREIRA",
                    slika: "United States/Forward/JESUS FERREIRA.webp",
                },
                {
                    ime: "JORDAN MORRIS",
                    slika: "United States/Forward/JORDAN MORRIS.webp",
                },
                {
                    ime: "TIM WEAH",
                    slika: "United States/Forward/TIM WEAH.webp",
                },
            ],
            Midfielder: [
                {
                    ime: "CRISTIAN ROLDAN",
                    slika: "United States/Midfielder/CRISTIAN ROLDAN.webp",
                },
                {
                    ime: "KELLYN PERRY-ACOSTA",
                    slika: "United States/Midfielder/KELLYN PERRY-ACOSTA.webp",
                },
                {
                    ime: "LUCA DE LA TORRE",
                    slika: "United States/Midfielder/LUCA DE LA TORRE.webp",
                },
                {
                    ime: "TYLER ADAMS",
                    slika: "United States/Midfielder/TYLER ADAMS.webp",
                },
                {
                    ime: "WESTON McKENNIE",
                    slika: "United States/Midfielder/WESTON McKENNIE.webp",
                },
                {
                    ime: "YUNUS MUSAH",
                    slika: "United States/Midfielder/YUNUS MUSAH.webp",
                },
            ],
            Manager: [
                {
                    ime: "GREQQ BERHALTER",
                    slika: "United States/Manager/GREQQ BERHALTER.webp",
                },
            ],
        },
        info: {
            P: 0,
            W: 0,
            D: 0,
            L: 0,
            GF: 0,
            GA: 0,
            GD: 0,
            Pts: 0
        },
    },
    {
        id: 6,
        grupa: "Bgrupa",
        ime: "Iran",
        slika: "Image of tim/IRN.png",
        bodovi: "Image of tim/ball.png",
        players: {
            Goalkeeper: [
                {
                    ime: "ALI BEIRANVAND",
                    slika: "Iran/Goalkeeper/ALI BEIRANVAND.webp",
                },
                {
                    ime: "AMIR ABEDZADEH",
                    slika: "Iran/Goalkeeper/AMIR ABEDZADEH.webp",
                },
                {
                    ime: "HOSSEIN HOSSEINI",
                    slika: "Iran/Goalkeeper/HOSSEIN HOSSEINI.webp",
                },
                {
                    ime: "PAYAM MIAZMAND",
                    slika: "Iran/Goalkeeper/PAYAM MIAZMAND.webp",
                },
            ],
            Defender: [
                {
                    ime: "ABOLFAZL JALALI",
                    slika: "Iran/Defender/ABOLFAZL JALALI.webp",
                },
                {
                    ime: "EHSAN HAJISAFL",
                    slika: "Iran/Defender/EHSAN HAJISAFL.webp",
                },
                {
                    ime: "MAJID HOSSEINI",
                    slika: "Iran/Defender/MAJID HOSSEINI.webp",
                },
                {
                    ime: "MILAD MOHAMMADI",
                    slika: "Iran/Defender/MILAD MOHAMMADI.webp",
                },
                {
                    ime: "MOHAMMAD KANAANI",
                    slika: "Iran/Defender/MOHAMMAD KANAANI.webp",
                },
                {
                    ime: "MORTEZA POURALIGANJI",
                    slika: "Iran/Defender/MORTEZA POURALIGANJI.webp",
                },
                {
                    ime: "RAMIN REZAEIAN",
                    slika: "Iran/Defender/RAMIN REZAEIAN.webp",
                },
                {
                    ime: "SADEGH MOHARRAMI",
                    slika: "Iran/Defender/SADEGH MOHARRAMI.webp",
                },
                {
                    ime: "SHOJAE KHALILZADEH",
                    slika: "Iran/Defender/SHOJAE KHALILZADEH.webp",
                },
            ],
            Forward: [
                {
                    ime: "KARIM ANSARIFARD",
                    slika: "Iran/Forward/KARIM ANSARIFARD.webp",
                },
                {
                    ime: "MEHDI TAREMI",
                    slika: "Iran/Forward/MEHDI TAREMI.webp",
                },
                {
                    ime: "SARDAR AZMOUN",
                    slika: "Iran/Forward/SARDAR AZMOUN.webp",
                },
            ],
            Midfielder: [
                {
                    ime: "AHMAD NOOROLLAHI",
                    slika: "Iran/Midfielder/AHMAD NOOROLLAHI.webp",
                },
                {
                    ime: "ALI GHOLIZADEH",
                    slika: "Iran/Midfielder/ALI GHOLIZADEH.webp",
                },
                {
                    ime: "ALI KARIMI",
                    slika: "Iran/Midfielder/ALI KARIMI.webp",
                },
                {
                    ime: "ALIREZA JAHANBAKHSH",
                    slika: "Iran/Midfielder/ALIREZA JAHANBAKHSH.webp",
                },
                {
                    ime: "MAHDI TORABI",
                    slika: "Iran/Midfielder/MAHDI TORABI.webp",
                },
                {
                    ime: "SAEID EZATOLAHI",
                    slika: "Iran/Midfielder/SAEID EZATOLAHI.webp",
                },
                {
                    ime: "SAMAN GHODDOS",
                    slika: "Iran/Midfielder/SAMAN GHODDOS.webp",
                },
                {
                    ime: "VAHID AMIRI",
                    slika: "Iran/Midfielder/VAHID AMIRI.webp",
                },
            ],
            Manager: [
                {
                    ime: "CARLOS QUEIROZ",
                    slika: "Iran/Manager/CARLOS QUEIROZ.webp",
                },
            ],
        },
        info: {
            P: 0,
            W: 0,
            D: 0,
            L: 0,
            GF: 0,
            GA: 0,
            GD: 0,
            Pts: 0
        },
    },
    {
        id: 7,
        grupa: "Bgrupa",
        ime: "Wales",
        slika: "Image of tim/WAL.png",
        bodovi: "Image of tim/ball.png",
        players: {
            Goalkeeper: [
                {
                    ime: "ADAM DAVIES",
                    slika: "Wales/Goalkeeper/ADAM DAVIES.webp",
                },
                {
                    ime: "DANNY WARD",
                    slika: "Wales/Goalkeeper/DANNY WARD.webp",
                },
                {
                    ime: "WAYNE HENNESSEY",
                    slika: "Wales/Goalkeeper/WAYNE HENNESSEY.webp",
                },
            ],
            Defender: [
                {
                    ime: "CHRIS GUNTER",
                    slika: "wales/defender/chris gunter.webp",
                },
                {
                    ime: "DAN DAVIES",
                    slika: "wales/defender/ben davies.webp",
                },
                {
                    ime: "TOM LOCKYER",
                    slika: "wales/defender/tom lockyer.webp",
                },

                {
                    ime: "CHRIS MEPHAM",
                    slika: "Wales/Defender/CHRIS MEPHAM.webp",
                },
                {
                    ime: "CONNOR ROBERTS",
                    slika: "Wales/Defender/CONNOR ROBERTS.webp",
                },
                {
                    ime: "ETHAN AMPADU",
                    slika: "Wales/Defender/ETHAN AMPADU.webp",
                },
                {
                    ime: "NECO WILLIAMS",
                    slika: "Wales/Defender/NECO WILLIAMS.webp",
                },
                {
                    ime: "JEO RODON",
                    slika: "Wales/Defender/JEO RODON.webp",
                },
                {
                    ime: "RUBIN COWILL",
                    slika: "wales/defender/rubin colwill.webp",
                },
                {
                    ime: "BEN CABANGO",
                    slika: "wales/defender/BEN CABANGO.webp",
                },
            ],
            Forward: [
                {
                    ime: "BRENNAN JOHNSON",
                    slika: "Wales/Forward/BRENNAN JOHNSON.webp",
                },
                {
                    ime: "DANIEL JAMES",
                    slika: "Wales/Forward/DANIEL JAMES.webp",
                },
                {
                    ime: "GARETH BALE",
                    slika: "Wales/Forward/GARETH BALE.webp",
                },
                {
                    ime: "KIEFFER MOORE",
                    slika: "Wales/Forward/KIEFFER MOORE.webp",
                },
                {
                    ime: "MARK HARRIS",
                    slika: "Wales/Forward/MARK HARRIS.webp",
                },
            ],
            Midfielder: [
                {
                    ime: "AARON RAMSEY",
                    slika: "Wales/Midfielder/AARON RAMSEY.webp",
                },
                {
                    ime: "DYLAN LEVITT",
                    slika: "Wales/Midfielder/DYLAN LEVITT.webp",
                },
                {
                    ime: "HARRY WILSON",
                    slika: "Wales/Midfielder/HARRY WILSON.webp",
                },
                {
                    ime: "JOE ALLEN",
                    slika: "Wales/Midfielder/JOE ALLEN.webp",
                },
                {
                    ime: "JONATHAN WILLIAMS",
                    slika: "Wales/Midfielder/JONATHAN WILLIAMS.webp",
                },
                {
                    ime: "JOSEFF MORRELL",
                    slika: "Wales/Midfielder/JOSEFF MORRELL.webp",
                },
                {
                    ime: "MATT SMITH",
                    slika: "Wales/Midfielder/MATT SMITH.webp",
                },
                {
                    ime: "SORBA THOMAS",
                    slika: "Wales/Midfielder/SORBA THOMAS.webp",
                },
            ],
            Manager: [
                {
                    ime: "ROBERT JOHAN PAGE",
                    slika: "Wales/Manager/ROBERT JOHAN PAGE.webp",
                },
            ],
        },
        info: {
            P: 0,
            W: 0,
            D: 0,
            L: 0,
            GF: 0,
            GA: 0,
            GD: 0,
            Pts: 0
        },
    },
    {
        id: 8,
        grupa: "Cgrupa",
        ime: "Argentina",
        slika: "Image of tim/ARG.png",
        bodovi: "Image of tim/ball.png",
        players: {
            Goalkeeper: [
                {
                    ime: "Emiliano Martinez",
                    slika: "Argentina/Goalkeeper/Emiliano Martinez.webp",
                },
                {
                    ime: "FRANKO ARMANI",
                    slika: "Argentina/Goalkeeper/FRANKO ARMANI.webp",
                },
                {
                    ime: "Geronimo Rulli",
                    slika: "Argentina/Goalkeeper/Geronimo Rulli.webp",
                },
            ],
            Defender: [
                {
                    ime: "CRISTIAN ROMERO",
                    slika: "Argentina/Defender/CRISTIAN ROMERO.webp",
                },
                {
                    ime: "FOYTH JUAN",
                    slika: "Argentina/Defender/FOYTH JUAN.webp",
                },
                {
                    ime: "GERMAN PEZZELLA",
                    slika: "Argentina/Defender/GERMAN PEZZELLA.webp",
                },
                {
                    ime: "GONZALO MONTIEL",
                    slika: "Argentina/Defender/GONZALO MONTIEL.webp",
                },
                {
                    ime: "LISANDRO MARTINEZ",
                    slika: "Argentina/Defender/LISANDRO MARTINEZ.webp",
                },
                {
                    ime: "NICOLAS OTAMENDL",
                    slika: "Argentina/Defender/NICOLAS OTAMENDL.webp",
                },
                {
                    ime: "NICOLAS TAGLIAFICO",
                    slika: "Argentina/Defender/NICOLAS TAGLIAFICO.webp",
                },
                {
                    ime: "MAHUEL MOLINA",
                    slika: "Argentina/Defender/MAHUEL MOLINA.webp",
                },
            ],
            Forward: [
                {
                    ime: "AMGEL CORREA",
                    slika: "Argentina/Forward/AMGEL CORREA.webp",
                },
                {
                    ime: "ANGEL DI MARIA",
                    slika: "Argentina/Forward/ANGEL DI MARIA.webp",
                },
                {
                    ime: "JULIAN ALVAREZ",
                    slika: "Argentina/Forward/JULIAN ALVAREZ.webp",
                },
                {
                    ime: "LAUTARO MARTINEZ",
                    slika: "Argentina/Forward/LAUTARO MARTINEZ.webp",
                },
                {
                    ime: "LIONE MESSI",
                    slika: "Argentina/Forward/LIONE MESSI.webp",
                },
                {
                    ime: "PAULO DYBALA",
                    slika: "Argentina/Forward/PAULO DYBALA.webp",
                },
            ],
            Midfielder: [
                {
                    ime: "ALEJANDRO GOMEZ",
                    slika: "Argentina/Midfielder/ALEJANDRO GOMEZ.webp",
                },
                {
                    ime: "ALEXIS MAC ALLISTER",
                    slika: "Argentina/Midfielder/ALEXIS MAC ALLISTER.webp",
                },
                {
                    ime: "ENZO FERNANDEZ",
                    slika: "Argentina/Midfielder/ENZO FERNANDEZ.webp",
                },
                {
                    ime: "EXEQUIEL PALACIOS",
                    slika: "Argentina/Midfielder/EXEQUIEL PALACIOS.webp",
                },
                {
                    ime: "LEANDRO PAREDES",
                    slika: "Argentina/Midfielder/LEANDRO PAREDES.webp",
                },
                {
                    ime: "MARCOS ACUNA",
                    slika: "Argentina/Midfielder/MARCOS ACUNA.webp",
                },
                {
                    ime: "RODRIGO DEPAUL",
                    slika: "Argentina/Midfielder/RODRIGO DEPAUL.webp",
                },
                {
                    ime: "RODRIGUEZ GUIDO",
                    slika: "Argentina/Midfielder/RODRIGUEZ GUIDO.webp",
                },
            ],
            Manager: [
                {
                    ime: "LIONE SCALONI",
                    slika: "Argentina/Menager/LIONE SCALONI.webp",
                },
            ],
        },
        info: {
            P: 0,
            W: 0,
            D: 0,
            L: 0,
            GF: 0,
            GA: 0,
            GD: 0,
            Pts: 0
        },
    },
    {
        id: 9,
        grupa: "Cgrupa",
        ime: "Mexico",
        slika: "Image of tim/MEX.png",
        bodovi: "Image of tim/ball.png",
        players: {
            Goalkeeper: [
                {
                    ime: "ALFREDO TALAVERA",
                    slika: "Mexico/Goalkeeper/ALFREDO TALAVERA.webp",
                },
                {
                    ime: "GUILLERMO OCHOA",
                    slika: "Mexico/Goalkeeper/GUILLERMO OCHOA.webp",
                },
                {
                    ime: "RODOLFO COTA",
                    slika: "Mexico/Goalkeeper/RODOLFO COTA.webp",
                },
            ],
            Defender: [
                {
                    ime: "CESAR MONTES",
                    slika: "Mexico/Defender/CESAR MONTES.webp",
                },
                {
                    ime: "EDSON ALVAREZ",
                    slika: "Mexico/Defender/EDSON ALVAREZ.webp",
                },
                {
                    ime: "GERARDO ARTEAGA",
                    slika: "Mexico/Defender/GERARDO ARTEAGA.webp",
                },
                {
                    ime: "HECTOR MORENO",
                    slika: "Mexico/Defender/HECTOR MORENO.webp",
                },
                {
                    ime: "JESUS GALLARDO",
                    slika: "Mexico/Defender/JESUS GALLARDO.webp",
                },
                {
                    ime: "JOHAN VASQUEZ",
                    slika: "Mexico/Defender/JOHAN VASQUEZ.webp",
                },
                {
                    ime: "JORGE SANCHEZ",
                    slika: "Mexico/Defender/JORGE SANCHEZ.webp",
                },
                {
                    ime: "KEVIN ALVAREZ",
                    slika: "Mexico/Defender/KEVIN ALVAREZ.webp",
                },
                {
                    ime: "NESTOR ARAUJO",
                    slika: "Mexico/Defender/NESTOR ARAUJO.webp",
                },
            ],
            Forward: [
                {
                    ime: "ALEXIS VEGA",
                    slika: "Mexico/Forward/ALEXIS VEGA.webp",
                },
                {
                    ime: "HENRY MARTINE",
                    slika: "Mexico/Forward/HENRY MARTINE.webp",
                },
                {
                    ime: "HIRVING LOYANO",
                    slika: "Mexico/Forward/HIRVING LOYANO.webp",
                },
                {
                    ime: "ORBELIN PINEDA",
                    slika: "Mexico/Forward/ORBELIN PINEDA.webp",
                },
                {
                    ime: "RAUL JIMFEZ",
                    slika: "Mexico/Forward/RAUL JIMFEZ.webp",
                },
                {
                    ime: "ROBERTO ALVARADO",
                    slika: "Mexico/Forward/ROBERTO ALVARADO.webp",
                },
                {
                    ime: "ROGELIO FUNES MORI",
                    slika: "Mexico/Forward/ROGELIO FUNES MORI.webp",
                },
                {
                    ime: "URIEL ANTUNA",
                    slika: "Mexico/Forward/URIEL ANTUNA.webp",
                },
            ],
            Midfielder: [
                {
                    ime: "ANDRES GUARDADO",
                    slika: "Mexico/Midfielder/ANDRES GUARDADO.webp",
                },
                {
                    ime: "CARLOS RODRIGUEZ",
                    slika: "Mexico/Midfielder/CARLOS RODRIGUEZ.webp",
                },
                {
                    ime: "ERICK GUTIERREZ",
                    slika: "Mexico/Midfielder/ERICK GUTIERREZ.webp",
                },
                {
                    ime: "HECTOR HERRERA",
                    slika: "Mexico/Midfielder/HECTOR HERRERA.webp",
                },
                {
                    ime: "LUIS CHAVEZ",
                    slika: "Mexico/Midfielder/LUIS CHAVEZ.webp",
                },
                {
                    ime: "LUIS ROMO",
                    slika: "Mexico/Midfielder/LUIS ROMO.webp",
                },
            ],
            Manager: [
                {
                    ime: "GERARDO DANIEL MARTINO",
                    slika: "Mexico/Manager/GERARDO DANIEL MARTINO.webp",
                },
            ],
        },
        info: {
            P: 0,
            W: 0,
            D: 0,
            L: 0,
            GF: 0,
            GA: 0,
            GD: 0,
            Pts: 0
        },
    },
    {
        id: 10,
        grupa: "Cgrupa",
        ime: "Poland",
        slika: "Image of tim/POL.png",
        bodov: "Image of tim/ball.png",
        players: {
            Goalkeeper: [
                {
                    ime: "KAMIL GRABARA",
                    slika: "Poland/Goalkeeper/KAMIL GRABARA.webp",
                },
                {
                    ime: "LUKASZ SKORUPSKI",
                    slika: "Poland/Goalkeeper/LUKASZ SKORUPSKI.webp",
                },
                {
                    ime: "WOJCIECH SZXZESNY",
                    slika: "Poland/Goalkeeper/WOJCIECH SZXZESNY.webp",
                },
            ],
            Defender: [
                {
                    ime: "ARTUR JEDRZEJCZYK",
                    slika: "Poland/Defender/ARTUR JEDRZEJCZYK.webp",
                },
                {
                    ime: "BARTOSZ BERESZYNSJI",
                    slika: "Poland/Defender/BARTOSZ BERESZYNSJI.webp",
                },
                {
                    ime: "JAKUB KIWIOR",
                    slika: "Poland/Defender/JAKUB KIWIOR.webp",
                },
                {
                    ime: "JAN BEDNAREK",
                    slika: "Poland/Defender/JAN BEDNAREK.webp",
                },
                {
                    ime: "KAMIL GLIK",
                    slika: "Poland/Defender/KAMIL GLIK.webp",
                },
                {
                    ime: "MATEUSZ WIETESKA",
                    slika: "Poland/Defender/MATEUSZ WIETESKA.webp",
                },
                {
                    ime: "MATTY CASH",
                    slika: "Poland/Defender/MATTY CASH.webp",
                },
                {
                    ime: "ROBERT GUMNY",
                    slika: "Poland/Defender/ROBERT GUMNY.webp",
                },
            ],
            Forward: [
                {
                    ime: "ARKADIUSZ MILIK",
                    slika: "Poland/Forward/ARKADIUSZ MILIK.webp",
                },
                {
                    ime: "KAROL SWIDERSKI",
                    slika: "Poland/Forward/KAROL SWIDERSKI.webp",
                },
                {
                    ime: "KRZYSZTOF PIATEK",
                    slika: "Poland/Forward/KRZYSZTOF PIATEK.webp",
                },
                {
                    ime: "ROBERT LEWANDOWSKI",
                    slika: "Poland/Forward/ROBERT LEWANDOWSKI.webp",
                },
            ],
            Midfielder: [
                {
                    ime: "DAMIAN SZYMANSKL",
                    slika: "Poland/Midfielder/DAMIAN SZYMANSKL.webp",
                },
                {
                    ime: "GRZEGORZ KRYCHOWIAK",
                    slika: "Poland/Midfielder/GRZEGORZ KRYCHOWIAK.webp",
                },
                {
                    ime: "JAKUB KAMINSKI",
                    slika: "Poland/Midfielder/JAKUB KAMINSKI.webp",
                },
                {
                    ime: "KAMIL GROSICKI",
                    slika: "Poland/Midfielder/KAMIL GROSICKI.webp",
                },
                {
                    ime: "KRTSTIAN BIELIK",
                    slika: "Poland/Midfielder/KRTSTIAN BIELIK.webp",
                },
                {
                    ime: "MICHAL SKORAS",
                    slika: "Poland/Midfielder/MICHAL SKORAS.webp",
                },
                {
                    ime: "NICOLA ZALEWSKI",
                    slika: "Poland/Midfielder/NICOLA ZALEWSKI.webp",
                },
                {
                    ime: "PIROT ZLEINSKI",
                    slika: "Poland/Midfielder/PIROT ZLEINSKI.webp",
                },
                {
                    ime: "SEBASTIAN SZYMANSKI",
                    slika: "Poland/Midfielder/SEBASTIAN SZYMANSKI.webp",
                },
                {
                    ime: "SZYMAN ZURKOWSKI",
                    slika: "Poland/Midfielder/SZYMAN ZURKOWSKI.webp",
                },
            ],
            Manager: [
                {
                    ime: "CZESTAW MICHNIEWICZ",
                    slika: "Poland/Manager/CZESTAW MICHNIEWICZ.webp",
                },
            ],
        },
        info: {
            P: 0,
            W: 0,
            D: 0,
            L: 0,
            GF: 0,
            GA: 0,
            GD: 0,
            Pts: 0
        },
    },
    {
        id: 11,
        grupa: "Cgrupa",
        ime: "Saud Arabi",
        slika: "Image of tim/KSA.png",
        bodovi: "Image of tim/ball.png",
        players: {
            Goalkeeper: [
                {
                    ime: "MOHAMMED ALOWAIS",
                    slika: "Saud Arabi/Goalkeeper/MOHAMMED ALOWAIS.webp",
                },
                {
                    ime: "MOHAMMED ALYAMI",
                    slika: "Saud Arabi/Goalkeeper/MOHAMMED ALYAMI.webp",
                },
                {
                    ime: "NAWAF ALAQIDI",
                    slika: "Saud Arabi/Goalkeeper/NAWAF ALAQIDI.webp",
                },
            ],
            Defender: [
                {
                    ime: "ABDULELAH ALAMRI",
                    slika: "Saud Arabi/Defender/ABDULELAH ALAMRI.webp",
                },
                {
                    ime: "ABDULLAH MADU",
                    slika: "Saud Arabi/Defender/ABDULLAH MADU.webp",
                },
                {
                    ime: "ALI ALBULAYHI",
                    slika: "Saud Arabi/Defender/ALI ALBULAYHI.webp",
                },
                {
                    ime: "HASSAN ALTAMBAKTI",
                    slika: "Saud Arabi/Defender/HASSAN ALTAMBAKTI.webp",
                },
                {
                    ime: "MOHAMMED ALBURAYK",
                    slika: "Saud Arabi/Defender/MOHAMMED ALBURAYK.webp",
                },
                {
                    ime: "SAUD ABULHAMID",
                    slika: "Saud Arabi/Defender/SAUD ABULHAMID.webp",
                },
                {
                    ime: "SULTAN ALGHANNAM",
                    slika: "Saud Arabi/Defender/SULTAN ALGHANNAM.webp",
                },
                {
                    ime: "YASSER ALHAHRANI",
                    slika: "Saud Arabi/Defender/YASSER ALHAHRANI.webp",
                },
            ],
            Forward: [
                {
                    ime: "ABDULRAHMAN ALOBUD",
                    slika: "Saud Arabi/Forward/ABDULRAHMAN ALOBUD.webp",
                },
                {
                    ime: "FERAS ALBIKAN",
                    slika: "Saud Arabi/Forward/FERAS ALBIKAN.webp",
                },
                {
                    ime: "HAITHAM ASIRI",
                    slika: "Saud Arabi/Forward/HAITHAM ASIRI.webp",
                },
                {
                    ime: "HATAN BAHBRI",
                    slika: "Saud Arabi/Forward/HATAN BAHBRI.webp",
                },
                {
                    ime: "SALEH ALSHERI",
                    slika: "Saud Arabi/Forward/SALEH ALSHERI.webp",
                },
                {
                    ime: "SALEM ALDAWSARI",
                    slika: "Saud Arabi/Forward/SALEM ALDAWSARI.webp",
                },
            ],
            Midfielder: [
                {
                    ime: "ABDULELAH ALMALKI",
                    slika: "Saud Arabi/Midfielder/ABDULELAH ALMALKI.webp",
                },
                {
                    ime: "ABDULLAH OTYF",
                    slika: "Saud Arabi/Midfielder/ABDULLAH OTYF.webp",
                },
                {
                    ime: "ALI ALHASSAN",
                    slika: "Saud Arabi/Midfielder/ALI ALHASSAN.webp",
                },
                {
                    ime: "MOHAMED KANNO",
                    slika: "Saud Arabi/Midfielder/MOHAMED KANNO.webp",
                },
                {
                    ime: "NASSER ALDAWSARI",
                    slika: "Saud Arabi/Midfielder/NASSER ALDAWSARI.webp",
                },
                {
                    ime: "NAWAF AL ABID",
                    slika: "Saud Arabi/Midfielder/NAWAF AL ABID.webp",
                },
                {
                    ime: "RIYADH SHARAHILI",
                    slika: "Saud Arabi/Midfielder/RIYADH SHARAHILI.webp",
                },
                {
                    ime: "SALMAN ALFARAJ",
                    slika: "Saud Arabi/Midfielder/SALMAN ALFARAJ.webp",
                },
                {
                    ime: "SAMI ALNAJI",
                    slika: "Saud Arabi/Midfielder/SAMI ALNAJI.webp",
                },
            ],
            Manager: [
                {
                    ime: "HERVE RENARD",
                    slika: "Saud Arabi/Manager/HERVE RENARD.webp",
                },
            ],
        },
        info: {
            P: 0,
            W: 0,
            D: 0,
            L: 0,
            GF: 0,
            GA: 0,
            GD: 0,
            Pts: 0
        },
    },
    {
        id: 12,
        grupa: "Dgrupa",
        ime: "France",
        slika: "Image of tim/FRA.png",
        bodovi: "Image of tim/ball.png",
        players: {
            Goalkeeper: [
                {
                    ime: "ALPHONSE AROLA",
                    slika: "France/Goalkeeper/ALPHONSE AROLA.webp",
                },
                {
                    ime: "HUGO LLORIS",
                    slika: "France/Goalkeeper/HUGO LLORIS.webp",
                },
                {
                    ime: "STEVE MANDANDA",
                    slika: "France/Goalkeeper/STEVE MANDANDA.webp",
                },
            ],
            Defender: [
                {
                    ime: "AXEL DISASI",
                    slika: "France/Defender/AXEL DISASI.webp",
                },
                {
                    ime: "BENIAMIN PAVARD",
                    slika: "France/Defender/BENIAMIN PAVARD.webp",
                },
                {
                    ime: "DAYOT UPAMECANO",
                    slika: "France/Defender/DAYOT UPAMECANO.webp",
                },
                {
                    ime: "IBRAHIMA KONATEĐ",
                    slika: "France/Defender/IBRAHIMA KONATEĐ.webp",
                },
                {
                    ime: "JULES KOUNDE",
                    slika: "France/Defender/JULES KOUNDE.webp",
                },
                {
                    ime: "LUCAS HERNANDEZ",
                    slika: "France/Defender/LUCAS HERNANDEZ.webp",
                },
                {
                    ime: "RAPHAEL VAARANE",
                    slika: "France/Defender/RAPHAEL VAARANE.webp",
                },
                {
                    ime: "THEO HERNANDEZ",
                    slika: "France/Defender/THEO HERNANDEZ.webp",
                },
                {
                    ime: "WILLAM SALIBA",
                    slika: "France/Defender/WILLAM SALIBA.webp",
                },
                {
                    ime: "YOUSSOUF FOFANA",
                    slika: "France/Defender/YOUSSOUF FOFANA.webp",
                },
            ],
            Forward: [
                {
                    ime: "ANTOINE GRIEZMANN",
                    slika: "France/Forward/ANTOINE GRIEZMANN.webp",
                },
                {
                    ime: "KARIM BEZEMA",
                    slika: "France/Forward/KARIM BEZEMA.webp",
                },
                {
                    ime: "KINGSLEY COMAN",
                    slika: "France/Forward/KINGSLEY COMAN.webp",
                },
                {
                    ime: "KYLIAN MBAPPE",
                    slika: "France/Forward/KYLIAN MBAPPE.webp",
                },
                {
                    ime: "MARCUS THURAM",
                    slika: "France/Forward/MARCUS THURAM.webp",
                },
                {
                    ime: "OLIVIER GIROUD",
                    slika: "France/Forward/OLIVIER GIROUD.webp",
                },
                {
                    ime: "OUSMANE DEMBELE",
                    slika: "France/Forward/OUSMANE DEMBELE.webp",
                },
                {
                    ime: "RONDAL DOLO MUANI",
                    slika: "France/Forward/RONDAL DOLO MUANI.webp",
                },
            ],
            Midfielder: [
                {
                    ime: "ABRIEN RABIOT",
                    slika: "France/Midfielder/ABRIEN RABIOT.webp",
                },
                {
                    ime: "AURELIEN TCHOUAMENI",
                    slika: "France/Midfielder/AURELIEN TCHOUAMENI.webp",
                },
                {
                    ime: "EDUARDO CAMAVINGA",
                    slika: "France/Midfielder/EDUARDO CAMAVINGA.webp",
                },
                {
                    ime: "JORDAN VERETOUT",
                    slika: "France/Midfielder/JORDAN VERETOUT.webp",
                },
                {
                    ime: "MATTEO GUENDOUZI",
                    slika: "France/Midfielder/MATTEO GUENDOUZI.webp",
                },
            ],
            Manager: [
                {
                    ime: "DIDIER DESCHAMPS",
                    slika: "France/Manager/DIDIER DESCHAMPS.webp",
                },
            ],
        },
        info: {
            P: 0,
            W: 0,
            D: 0,
            L: 0,
            GF: 0,
            GA: 0,
            GD: 0,
            Pts: 0
        },
    },
    {
        id: 13,
        grupa: "Dgrupa",
        ime: "Denmark",
        slika: "Image of tim/DEN.png",
        bodovi: "Image of tim/ball.png",
        players: {
            Goalkeeper: [
                {
                    ime: "FREDERIK RONNOW",
                    slika: "Denmark/Goalkeeper/FREDERIK RONNOW.webp",
                },
                {
                    ime: "KASPER SCHMELCHEL",
                    slika: "Denmark/Goalkeeper/KASPER SCHMELCHEL.webp",
                },
                {
                    ime: "OLIVER CHRISTENSEN",
                    slika: "Denmark/Goalkeeper/OLIVER CHRISTENSEN.webp",
                },
            ],
            Defender: [
                {
                    ime: "ALEXANDER BAH",
                    slika: "Denmark/Defender/ALEXANDER BAH.webp",
                },
                {
                    ime: "ANDREAS CHRISTENSEN",
                    slika: "Denmark/Defender/ANDREAS CHRISTENSEN.webp",
                },
                {
                    ime: "DANIEL WASS",
                    slika: "Denmark/Defender/DANIEL WASS.webp",
                },
                {
                    ime: "JENS STRYGER LARSEN",
                    slika: "Denmark/Defender/JENS STRYGER LARSEN.webp",
                },
                {
                    ime: "JOACHIM ANDERSEN",
                    slika: "Denmark/Defender/JOACHIM ANDERSEN.webp",
                },
                {
                    ime: "JOAKIM MAEHLE",
                    slika: "Denmark/Defender/JOAKIM MAEHLE.webp",
                },
                {
                    ime: "RASMUS KRISTENSEN",
                    slika: "Denmark/Defender/RASMUS KRISTENSEN.webp",
                },
                {
                    ime: "SIMON KJAER",
                    slika: "Denmark/Defender/SIMON KJAER.webp",
                },
                {
                    ime: "VICTOR NELSSON",
                    slika: "Denmark/Defender/VICTOR NELSSON.webp",
                },
            ],
            Forward: [
                {
                    ime: "ANDREAS CORNELIUS",
                    slika: "Denmark/Forward/ANDREAS CORNELIUS.webp",
                },
                {
                    ime: "JANAS WIND",
                    slika: "Denmark/Forward/JANAS WIND.webp",
                },
                {
                    ime: "KASPER DOLBERG",
                    slika: "Denmark/Forward/KASPER DOLBERG.webp",
                },
                {
                    ime: "MARTIN BRAITHWAITE",
                    slika: "Denmark/Forward/MARTIN BRAITHWAITE.webp",
                },
                {
                    ime: "YUSSUF YURARY POULSEN",
                    slika: "Denmark/Forward/YUSSUF YURARY POULSEN.webp",
                },
            ],
            Midfielder: [
                {
                    ime: "ANDREAS SKOV OLSEN",
                    slika: "Denmark/Midfielder/ANDREAS SKOV OLSEN.webp",
                },
                {
                    ime: "CHRISTIAN NORGAARD",
                    slika: "Denmark/Midfielder/CHRISTIAN NORGAARD.webp",
                },
                {
                    ime: "CRISTIAN ERIKSEN",
                    slika: "Denmark/Midfielder/CRISTIAN ERIKSEN.webp",
                },
                {
                    ime: "JESPER LINDSTROM",
                    slika: "Denmark/Midfielder/JESPER LINDSTROM.webp",
                },
                {
                    ime: "MATHIAS JENSEN",
                    slika: "Denmark/Midfielder/MATHIAS JENSEN.webp",
                },
                {
                    ime: "MIKKEL DAMSGAARD",
                    slika: "Denmark/Midfielder/MIKKEL DAMSGAARD.webp",
                },
                {
                    ime: "PIERRE-EMILE HOJBJERG",
                    slika: "Denmark/Midfielder/PIERRE-EMILE HOJBJERG.webp",
                },
                {
                    ime: "ROBERT SKOV",
                    slika: "Denmark/Midfielder/ROBERT SKOV.webp",
                },
                {
                    ime: "THOMAS DELANEY",
                    slika: "Denmark/Midfielder/THOMAS DELANEY.webp",
                },
            ],
            Manager: [
                {
                    ime: "KASPER HIULMAND",
                    slika: "Denmark/Manager/KASPER HIULMAND.webp",
                },
            ],
        },
        info: {
            P: 0,
            W: 0,
            D: 0,
            L: 0,
            GF: 0,
            GA: 0,
            GD: 0,
            Pts: 0
        },
    },
    {
        id: 14,
        grupa: "Dgrupa",
        ime: "Tunisia",
        slika: "Image of tim/TUN.png",
        bodovi: "Image of tim/ball.png",
        players: {
            Goalkeeper: [
                {
                    ime: "AYMEN DAHMEN",
                    slika: "Tunisia/Goalkeeper/AYMEN DAHMEN.webp",
                },
                {
                    ime: "AYMEN MATHOUTHI",
                    slika: "Tunisia/Goalkeeper/AYMEN MATHOUTHI.webp",
                },
                {
                    ime: "BECHIR BEN SAID",
                    slika: "Tunisia/Goalkeeper/BECHIR BEN SAID.webp",
                },
                {
                    ime: "MOUEZ HASSEN",
                    slika: "Tunisia/Goalkeeper/MOUEZ HASSEN.webp",
                },
            ],
            Defender: [
                {
                    ime: "ALI ABDL",
                    slika: "Tunisia/Defender/ALI ABDL.webp",
                },
                {
                    ime: "ALI MAALOUL",
                    slika: "Tunisia/Defender/ALI MAALOUL.webp",
                },
                {
                    ime: "BILEL IFA",
                    slika: "Tunisia/Defender/BILEL IFA.webp",
                },
                {
                    ime: "DYLAN BRONN",
                    slika: "Tunisia/Defender/DYLAN BRONN.webp",
                },
                {
                    ime: "MOHAMED DRAGER",
                    slika: "Tunisia/Defender/MOHAMED DRAGER.webp",
                },
                {
                    ime: "MONTASSAR TALBI",
                    slika: "Tunisia/Defender/MONTASSAR TALBI.webp",
                },
                {
                    ime: "WAJDI KECHRIDA",
                    slika: "Tunisia/Defender/WAJDI KECHRIDA.webp",
                },
                {
                    ime: "YASSINE MERLAH",
                    slika: "Tunisia/Defender/YASSINE MERLAH.webp",
                },
            ],
            Forward: [
                {
                    ime: "ANIS SLIMANE",
                    slika: "Tunisia/Forward/ANIS SLIMANE.webp",
                },
                {
                    ime: "ISSAM JEBALI",
                    slika: "Tunisia/Forward/ISSAM JEBALI.webp",
                },
                {
                    ime: "NAIM SLITI",
                    slika: "Tunisia/Forward/NAIM SLITI.webp",
                },
                {
                    ime: "SEIFEDDINE JAZIRI",
                    slika: "Tunisia/Forward/SEIFEDDINE JAZIRI.webp",
                },
                {
                    ime: "TAHA KHENISSI",
                    slika: "Tunisia/Forward/TAHA KHENISSI.webp",
                },
                {
                    ime: "WAHBI KHAZRI",
                    slika: "Tunisia/Forward/WAHBI KHAZRI.webp",
                },
                {
                    ime: "YOUSSEF MSAKNI",
                    slika: "Tunisia/Forward/YOUSSEF MSAKNI.webp",
                },
            ],
            Midfielder: [
                {
                    ime: "AISSA LAIDOUNI",
                    slika: "Tunisia/Midfielder/AISSA LAIDOUNI.webp",
                },
                {
                    ime: "BEN ROMDHANE ALI",
                    slika: "Tunisia/Midfielder/BEN ROMDHANE ALI.webp",
                },
                {
                    ime: "ELLYES SKHIRI",
                    slika: "Tunisia/Midfielder/ELLYES SKHIRI.webp",
                },
                {
                    ime: "FERJANI SASSI",
                    slika: "Tunisia/Midfielder/FERJANI SASSI.webp",
                },
                {
                    ime: "GHAYLEN CHAALELI",
                    slika: "Tunisia/Midfielder/GHAYLEN CHAALELI.webp",
                },
                {
                    ime: "HANNIBAL MEJBRI",
                    slika: "Tunisia/Midfielder/HANNIBAL MEJBRI.webp",
                },
                {
                    ime: "NADER GHANDRL",
                    slika: "Tunisia/Midfielder/NADER GHANDRL.webp",
                },
            ],
            Manager: [
                {
                    ime: "JALEL KADRI",
                    slika: "Tunisia/Manager/JALEL KADRI.webp",
                },
            ],
        },
        info: {
            P: 0,
            W: 0,
            D: 0,
            L: 0,
            GF: 0,
            GA: 0,
            GD: 0,
            Pts: 0
        },
    },
    {
        id: 15,
        grupa: "Dgrupa",
        ime: "Australia",
        slika: "Image of tim/AUS.png",
        bodovi: "Image of tim/ball.png",
        players: {
            Goalkeeper: [
                {
                    ime: "ANDREW REDMAYNE",
                    slika: "Australija/Goalkeeper/ANDREW REDMAYNE.webp",
                },
                {
                    ime: "DANNY VUKOVIC",
                    slika: "Australija/Goalkeeper/DANNY VUKOVIC.webp",
                },
                {
                    ime: "MATHEW RYAN",
                    slika: "Australija/Goalkeeper/MATHEW RYAN.webp",
                },
            ],
            Defender: [
                {
                    ime: "AYIY BEHICH",
                    slika: "Australija/Defender/AYIY BEHICH.webp",
                },
                {
                    ime: "BAILE WRIGHT",
                    slika: "Australija/Defender/BAILE WRIGHT.webp",
                },
                {
                    ime: "FRAN KARACIC",
                    slika: "Australija/Defender/FRAN KARACIC.webp",
                },
                {
                    ime: "HARRY SOUTTAR",
                    slika: "Australija/Defender/HARRY SOUTTAR.webp",
                },
                {
                    ime: "JOEL KING",
                    slika: "Australija/Defender/JOEL KING.webp",
                },
                {
                    ime: "KEY ROWLES",
                    slika: "Australija/Defender/KEY ROWLES.webp",
                },
                {
                    ime: "MILOS DEGENEK",
                    slika: "Australija/Defender/MILOS DEGENEK.webp",
                },
                {
                    ime: "NATHANIEL ATKNSON",
                    slika: "Australija/Defender/NATHANIEL ATKNSON.webp",
                },
                {
                    ime: "THOMAS DENG",
                    slika: "Australija/Defender/THOMAS DENG.webp",
                },
            ],
            Forward: [
                {
                    ime: "AWER MABIL",
                    slika: "Australija/Forward/AWER MABIL.webp",
                },
                {
                    ime: "CRAIG GOODWIN",
                    slika: "Australija/Forward/CRAIG GOODWIN.webp",
                },
                {
                    ime: "GARANG KUOL",
                    slika: "Australija/Forward/GARANG KUOL.webp",
                },
                {
                    ime: "JAMIE MACLAREN",
                    slika: "Australija/Forward/JAMIE MACLAREN.webp",
                },
                {
                    ime: "JASON CUMMINGS",
                    slika: "Australija/Forward/JASON CUMMINGS.webp",
                },
                {
                    ime: "MARCO TILIO",
                    slika: "Australija/Forward/MARCO TILIO.webp",
                },
                {
                    ime: "MATHEW LECKIE",
                    slika: "Australija/Forward/MATHEW LECKIE.webp",
                },
                {
                    ime: "MITCH DUKE",
                    slika: "Australija/Forward/MITCH DUKE.webp",
                },
            ],
            Midfielder: [
                {
                    ime: "AARON MOOY",
                    slika: "Australija/Midfielder/AARON MOOY.webp",
                },
                {
                    ime: "AJDIN HRUSTIC",
                    slika: "Australija/Midfielder/AJDIN HRUSTIC.webp",
                },
                {
                    ime: "CAMERON DEVLIN",
                    slika: "Australija/Midfielder/CAMERON DEVLIN.webp",
                },
                {
                    ime: "JACKSON IRVINE",
                    slika: "Australija/Midfielder/JACKSON IRVINE.webp",
                },
                {
                    ime: "KEANU BACCUS",
                    slika: "Australija/Midfielder/KEANU BACCUS.webp",
                },
                {
                    ime: "RILEY MCGREE",
                    slika: "Australija/Midfielder/RILEY MCGREE.webp",
                },
            ],
            Manager: [
                {
                    ime: "GRAHAM JAMES ARNOLD",
                    slika: "Australija/Manager/GRAHAM JAMES ARNOLD.webp",
                },
            ],
        },
        info: {
            P: 0,
            W: 0,
            D: 0,
            L: 0,
            GF: 0,
            GA: 0,
            GD: 0,
            Pts: 0
        },
    },
    {
        id: 16,
        grupa: "Egrupa",
        ime: "Spain",
        slika: "Image of tim/ESP.png",
        bodovi: "Image of tim/ball.png",
        players: {
            Goalkeeper: [
                {
                    ime: "DAVID RAYA",
                    slika: "Spain/Goalkeeper/DAVID RAYA.webp",
                },
                {
                    ime: "ROBERT SANCHEZ",
                    slika: "Spain/Goalkeeper/ROBERT SANCHEZ.webp",
                },
                {
                    ime: "UNAI SIMON",
                    slika: "Spain/Goalkeeper/UNAI SIMON.webp",
                },
            ],
            Defender: [
                {
                    ime: "ALEJANDO",
                    slika: "Spain/Defender/ALEJANDO.webp",
                },
                {
                    ime: "AYMERIC LAPORTE",
                    slika: "Spain/Defender/AYMERIC LAPORTE.webp",
                },
                {
                    ime: "CESAR AZPILICUETA",
                    slika: "Spain/Defender/CESAR AZPILICUETA.webp",
                },
                {
                    ime: "DANI CARVAJAL",
                    slika: "Spain/Defender/DANI CARVAJAL.webp",
                },
                {
                    ime: "ERIC GARCIA",
                    slika: "Spain/Defender/ERIC GARCIA.webp",
                },
                {
                    ime: "HUGO GUILLAMON",
                    slika: "Spain/Defender/HUGO GUILLAMON.webp",
                },
                {
                    ime: "JORDI ALBA",
                    slika: "Spain/Defender/JORDI ALBA.webp",
                },
                {
                    ime: "PAU TORRES",
                    slika: "Spain/Defender/PAU TORRES.webp",
                },
            ],
            Forward: [
                {
                    ime: "ALVARO MORATA",
                    slika: "Spain/Forward/ALVARO MORATA.webp",
                },
                {
                    ime: "ANSU FATI",
                    slika: "Spain/Forward/ANSU FATI.webp",
                },
                {
                    ime: "DANI OLMO",
                    slika: "Spain/Forward/DANI OLMO.webp",
                },
                {
                    ime: "FERRAN TORRES",
                    slika: "Spain/Forward/FERRAN TORRES.webp",
                },
                {
                    ime: "MARCO ASENSIO",
                    slika: "Spain/Forward/MARCO ASENSIO.webp",
                },
                {
                    ime: "NICO WILLIAMS",
                    slika: "Spain/Forward/NICO WILLIAMS.webp",
                },
                {
                    ime: "PABLO SARABIA",
                    slika: "Spain/Forward/PABLO SARABIA.webp",
                },
                {
                    ime: "YEREMY PINO",
                    slika: "Spain/Forward/YEREMY PINO.webp",
                },
            ],
            Midfielder: [
                {
                    ime: "CARLOS SOLER",
                    slika: "Spain/Midfielder/CARLOS SOLER.webp",
                },
                {
                    ime: "GAVI",
                    slika: "Spain/Midfielder/GAVI.webp",
                },
                {
                    ime: "KOKE",
                    slika: "Spain/Midfielder/KOKE.webp",
                },
                {
                    ime: "MARCOS LLOREMTE",
                    slika: "Spain/Midfielder/MARCOS LLOREMTE.webp",
                },
                {
                    ime: "PEDRI GONYALEZ",
                    slika: "Spain/Midfielder/PEDRI GONYALEZ.webp",
                },
                {
                    ime: "RODRI",
                    slika: "Spain/Midfielder/RODRI.webp",
                },
                {
                    ime: "SERGIO BUSQUETS",
                    slika: "Spain/Midfielder/SERGIO BUSQUETS.webp",
                },
            ],
            Manager: [
                {
                    ime: "LUIS ENRIQUE MARTINEZ",
                    slika: "Spain/Manager/LUIS ENRIQUE MARTINEZ.webp",
                },
            ],
        },
        info: {
            P: 0,
            W: 0,
            D: 0,
            L: 0,
            GF: 0,
            GA: 0,
            GD: 0,
            Pts: 0
        },
    },
    {
        id: 17,
        grupa: "Egrupa",
        ime: "German",
        slika: "Image of tim/GER.png",
        bodovi: "Image of tim/ball.png",
        players: {
            Goalkeeper: [
                {
                    ime: "KEVIN TRAPP",
                    slika: "Germany/Goalkeeper/KEVIN TRAPP.webp",
                },
                {
                    ime: "MANUEL NEUER",
                    slika: "Germany/Goalkeeper/MANUEL NEUER.webp",
                },
                {
                    ime: "MARC-ANDRE TER STEGEN",
                    slika: "Germany/Goalkeeper/MARC-ANDRE TER STEGEN.webp",
                },
            ],
            Defender: [
                {
                    ime: "ANTONIO RUEDIGER",
                    slika: "Germany/Defender/ANTONIO RUEDIGER.webp",
                },
                {
                    ime: "ARMEL BELLA KOTCHAP",
                    slika: "Germany/Defender/ARMEL BELLA KOTCHAP.webp",
                },
                {
                    ime: "CHRISTIAN GUENTER",
                    slika: "Germany/Defender/CHRISTIAN GUENTER.webp",
                },
                {
                    ime: "DAVID RAUM",
                    slika: "Germany/Defender/DAVID RAUM.webp",
                },
                {
                    ime: "LUKAS KLOSTERMANN",
                    slika: "Germany/Defender/LUKAS KLOSTERMANN.webp",
                },
                {
                    ime: "MATTHIAS GINTER",
                    slika: "Germany/Defender/MATTHIAS GINTER.webp",
                },
                {
                    ime: "NIKLAS SUELE",
                    slika: "Germany/Defender/NIKLAS SUELE.webp",
                },
                {
                    ime: "SCHLOTTERBECK",
                    slika: "Germany/Defender/SCHLOTTERBECK.webp",
                },
                {
                    ime: "THILO KEHRER",
                    slika: "Germany/Defender/THILO KEHRER.webp",
                },
            ],
            Forward: [
                {
                    ime: "KAI HAVERTZ",
                    slika: "Germany/Forward/KAI HAVERTZ.webp",
                },
                {
                    ime: "KARIM ADEYEMI",
                    slika: "Germany/Forward/KARIM ADEYEMI.webp",
                },
                {
                    ime: "NICLAS FUELLKRUG",
                    slika: "Germany/Forward/NICLAS FUELLKRUG.webp",
                },
                {
                    ime: "SERGE GNABRY",
                    slika: "Germany/Forward/SERGE GNABRY.webp",
                },
                {
                    ime: "YOUSSOUFA MOUKOKO",
                    slika: "Germany/Forward/YOUSSOUFA MOUKOKO.webp",
                },
                {
                    ime: "YOUSSOUFA",
                    slika: "Germany/Forward/YOUSSOUFA.webp",
                },
            ],
            Midfielder: [
                {
                    ime: "JAMAS MUSLALA",
                    slika: "Germany/Midfielder/JAMAS MUSLALA.webp",
                },
                {
                    ime: "JONAS HOFMANN",
                    slika: "Germany/Midfielder/JONAS HOFMANN.webp",
                },
                {
                    ime: "JOSHUA KIMMICK",
                    slika: "Germany/Midfielder/JOSHUA KIMMICK.webp",
                },
                {
                    ime: "JULIAN BRANDT",
                    slika: "Germany/Midfielder/JULIAN BRANDT.webp",
                },
                {
                    ime: "LEON GORTZKA",
                    slika: "Germany/Midfielder/LEON GORTZKA.webp",
                },
                {
                    ime: "LEROY SANE",
                    slika: "Germany/Midfielder/LEROY SANE.webp",
                },
                {
                    ime: "LLKAY GUENDOGAN",
                    slika: "Germany/Midfielder/LLKAY GUENDOGAN.webp",
                },
                {
                    ime: "MARIO GOETZE",
                    slika: "Germany/Midfielder/MARIO GOETZE.webp",
                },
                {
                    ime: "THOMAS MUELLER",
                    slika: "Germany/Midfielder/THOMAS MUELLER.webp",
                },
            ],
            Manager: [
                {
                    ime: "HANS-DIETER FLICK",
                    slika: "Germany/Manager/HANS-DIETER FLICK.webp",
                },
            ],
        },
        info: {
            P: 0,
            W: 0,
            D: 0,
            L: 0,
            GF: 0,
            GA: 0,
            GD: 0,
            Pts: 0
        },
    },
    {
        id: 18,
        grupa: "Egrupa",
        ime: "Japan",
        slika: "Image of tim/JPN.png",
        bodovi: "Image of tim/ball.png",
        players: {
            Goalkeeper: [
                {
                    ime: "DANIEL SCHMIDT",
                    slika: "Japan/Goalkeeper/DANIEL SCHMIDT.webp",
                },
                {
                    ime: "EIJI KAWASHIMA",
                    slika: "Japan/Goalkeeper/EIJI KAWASHIMA.webp",
                },
                {
                    ime: "SHUICJI GONDA",
                    slika: "Japan/Goalkeeper/SHUICJI GONDA.webp",
                },
            ],
            Defender: [
                {
                    ime: "HIROKI SAKAL",
                    slika: "Japan/Defender/HIROKI SAKAL.webp",
                },
                {
                    ime: "HIROKO ITO",
                    slika: "Japan/Defender/HIROKO ITO.webp",
                },
                {
                    ime: "KOU ITKURA",
                    slika: "Japan/Defender/KOU ITKURA.webp",
                },
                {
                    ime: "MAYA YOSHIDA",
                    slika: "Japan/Defender/MAYA YOSHIDA.webp",
                },
                {
                    ime: "MIKI YAMANE",
                    slika: "Japan/Defender/MIKI YAMANE.webp",
                },
                {
                    ime: "SHOGO TANIGUCHI",
                    slika: "Japan/Defender/SHOGO TANIGUCHI.webp",
                },
                {
                    ime: "TAKEHIRO TOMIYASU",
                    slika: "Japan/Defender/TAKEHIRO TOMIYASU.webp",
                },
                {
                    ime: "YUTO NAGATOMO",
                    slika: "Japan/Defender/YUTO NAGATOMO.webp",
                },
            ],
            Forward: [
                {
                    ime: "AYASE UEDA",
                    slika: "Japan/Forward/AYASE UEDA.webp",
                },
                {
                    ime: "TAKUMA ASANO",
                    slika: "Japan/Forward/TAKUMA ASANO.webp",
                },
                {
                    ime: "SHUTO MACHINO",
                    slika: "Japan/Forward/SHUTO MACHINO.webp",
                },
                {
                    ime: "DAZIAN MAEDA",
                    slika: "Japan/Forward/DAZIAN MAEDA.webp",
                },
            ],
            Midfielder: [
                {
                    ime: "AO TANAKA",
                    slika: "Japan/Midfielder/AO TANAKA.webp",
                },
                {
                    ime: "DOICHI KAMADA",
                    slika: "Japan/Midfielder/DOICHI KAMADA.webp",
                },
                {
                    ime: "GAKU SHIBASAKI",
                    slika: "Japan/Midfielder/GAKU SHIBASAKI.webp",
                },
                {
                    ime: "HIDEMASA MORITA",
                    slika: "Japan/Midfielder/HIDEMASA MORITA.webp",
                },
                {
                    ime: "JUNYA ITO",
                    slika: "Japan/Midfielder/JUNYA ITO.webp",
                },
                {
                    ime: "KAORU MITOMA",
                    slika: "Japan/Midfielder/KAORU MITOMA.webp",
                },
                {
                    ime: "RITSU DOAN",
                    slika: "Japan/Midfielder/RITSU DOAN.webp",
                },
                {
                    ime: "TAKEFUSA KUBO",
                    slika: "Japan/Midfielder/TAKEFUSA KUBO.webp",
                },
                {
                    ime: "TAKUMI MINAMINO",
                    slika: "Japan/Midfielder/TAKUMI MINAMINO.webp",
                },
                {
                    ime: "WATARU ENDO",
                    slika: "Japan/Midfielder/WATARU ENDO.webp",
                },
                {
                    ime: "YUKI SOMA",
                    slika: "Japan/Midfielder/YUKI SOMA.webp",
                },
            ],
            Manager: [
                {
                    ime: "HAJIME MORIYASU",
                    slika: "Japan/Manager/HAJIME MORIYASU.webp",
                },
            ],
        },
        info: {
            P: 0,
            W: 0,
            D: 0,
            L: 0,
            GF: 0,
            GA: 0,
            GD: 0,
            Pts: 0
        },
    },
    {
        id: 19,
        grupa: "Egrupa",
        ime: "Costa Rica",
        slika: "Image of tim/CRC.png",
        bodovi: "Image of tim/ball.png",
        players: {
            Goalkeeper: [
                {
                    ime: "ESTEBON ALVARADO",
                    slika: "Costa Rica/Goalkeeper/ESTEBON ALVARADO.webp",
                },
                {
                    ime: "KEYLOR NAVAS",
                    slika: "Costa Rica/Goalkeeper/KEYLOR NAVAS.webp",
                },
                {
                    ime: "PATRICK SEQUEIRA",
                    slika: "Costa Rica/Goalkeeper/PATRICK SEQUEIRA.webp",
                },
            ],
            Defender: [
                {
                    ime: "BRYAN OVIEDO",
                    slika: "Costa Rica/Defender/BRYAN OVIEDO.webp",
                },
                {
                    ime: "CARLOS MARTINEZ",
                    slika: "Costa Rica/Defender/CARLOS MARTINEZ.webp",
                },
                {
                    ime: "FRANCISCO CALVO",
                    slika: "Costa Rica/Defender/FRANCISCO CALVO.webp",
                },
                {
                    ime: "JUAN VARGAS",
                    slika: "Costa Rica/Defender/JUAN VARGAS.webp",
                },
                {
                    ime: "KENDALL WASTON",
                    slika: "Costa Rica/Defender/KENDALL WASTON.webp",
                },
                {
                    ime: "KEYSHER FULLER",
                    slika: "Costa Rica/Defender/KEYSHER FULLER.webp",
                },
                {
                    ime: "OSCAR DUARTE",
                    slika: "Costa Rica/Defender/OSCAR DUARTE.webp",
                },
                {
                    ime: "RANALD MATARRITA",
                    slika: "Costa Rica/Defender/RANALD MATARRITA.webp",
                },
            ],
            Forward: [
                {
                    ime: "ANTHONY CONTRERAS",
                    slika: "Costa Rica/Forward/ANTHONY CONTRERAS.webp",
                },
                {
                    ime: "JOEL CAMPBELL",
                    slika: "Costa Rica/Forward/JOEL CAMPBELL.webp",
                },
                {
                    ime: "JOHAN VENEGAS",
                    slika: "Costa Rica/Forward/JOHAN VENEGAS.webp",
                },
            ],
            Midfielder: [
                {
                    ime: "ALVARO ZAMORA",
                    slika: "Costa Rica/Midfielder/ALVARO ZAMORA.webp",
                },
                {
                    ime: "ANTHONY HERNANDEZ",
                    slika: "Costa Rica/Midfielder/ANTHONY HERNANDEZ.webp",
                },
                {
                    ime: "BAANDAN AGUILERA",
                    slika: "Costa Rica/Midfielder/BAANDAN AGUILERA.webp",
                },
                {
                    ime: "BRYAN RUIY",
                    slika: "Costa Rica/Midfielder/BRYAN RUIY.webp",
                },
                {
                    ime: "CELSO BORGES",
                    slika: "Costa Rica/Midfielder/CELSO BORGES.webp",
                },
                {
                    ime: "DANIEL CHACON",
                    slika: "Costa Rica/Midfielder/DANIEL CHACON.webp",
                },
                {
                    ime: "DOUGLAS LOPEZ",
                    slika: "Costa Rica/Midfielder/DOUGLAS LOPEZ.webp",
                },
                {
                    ime: "GERSON TORRES",
                    slika: "Costa Rica/Midfielder/GERSON TORRES.webp",
                },
                {
                    ime: "JEWISON BENNETTE",
                    slika: "Costa Rica/Midfielder/JEWISON BENNETTE.webp",
                },
                {
                    ime: "ROAN WILSON",
                    slika: "Costa Rica/Midfielder/ROAN WILSON.webp",
                },
                {
                    ime: "YELTSIN TEJEDA",
                    slika: "Costa Rica/Midfielder/YELTSIN TEJEDA.webp",
                },
                {
                    ime: "YOUSTIN SALAS",
                    slika: "Costa Rica/Midfielder/YOUSTIN SALAS.webp",
                },
            ],
            Manager: [
                {
                    ime: "LUIS FERNANDO SUAREZ GUZMAN",
                    slika: "Costa Rica/Manager/LUIS FERNANDO SUAREZ GUZMAN.webp",
                },
            ],
        },
        info: {
            P: 0,
            W: 0,
            D: 0,
            L: 0,
            GF: 0,
            GA: 0,
            GD: 0,
            Pts: 0
        },
    },
    {
        id: 20,
        grupa: "Fgrupa",
        ime: "Belgium",
        slika: "Image of tim/BEL.png",
        bodovi: "Image of tim/ball.png",
        players: {
            Goalkeeper: [
                {
                    ime: "KOEN CASTEELS",
                    slika: "Belgium/Goalkeeper/KOEN CASTEELS.webp",
                },
                {
                    ime: "SIMON MIGNOLET",
                    slika: "Belgium/Goalkeeper/SIMON MIGNOLET.webp",
                },
                {
                    ime: "THIBOUT COURTOIS",
                    slika: "Belgium/Goalkeeper/THIBOUT COURTOIS.webp",
                },
            ],
            Defender: [
                {
                    ime: "ARTHUR THEATE",
                    slika: "Belgium/Defender/ARTHUR THEATE.webp",
                },
                {
                    ime: "JAN VERTONGHEN",
                    slika: "Belgium/Defender/JAN VERTONGHEN.webp",
                },
                {
                    ime: "LEONARDO DENDONCKER",
                    slika: "Belgium/Defender/LEONARDO DENDONCKER.webp",
                },
                {
                    ime: "TOBY ALDERWEIRELD",
                    slika: "Belgium/Defender/TOBY ALDERWEIRELD.webp",
                },
                {
                    ime: "WOUT FAES",
                    slika: "Belgium/Defender/WOUT FAES.webp",
                },
                {
                    ime: "ZENO DEBAST",
                    slika: "Belgium/Defender/ZENO DEBAST.webp",
                },
            ],
            Forward: [
                {
                    ime: "DE KETELAERE",
                    slika: "Belgium/Forward/DE KETELAERE.webp",
                },
                {
                    ime: "DRIES MERTENS",
                    slika: "Belgium/Forward/DRIES MERTENS.webp",
                },
                {
                    ime: "EDEN HAYARD",
                    slika: "Belgium/Forward/EDEN HAYARD.webp",
                },
                {
                    ime: "JEREMY DOKU",
                    slika: "Belgium/Forward/JEREMY DOKU.webp",
                },
                {
                    ime: "LEONARDO TROSSARD",
                    slika: "Belgium/Forward/LEONARDO TROSSARD.webp",
                },
                {
                    ime: "LOIS OPENDA",
                    slika: "Belgium/Forward/LOIS OPENDA.webp",
                },
                {
                    ime: "MICHY BATSHUAYI",
                    slika: "Belgium/Forward/MICHY BATSHUAYI.webp",
                },
                {
                    ime: "ROMELU LUKAKU",
                    slika: "Belgium/Forward/ROMELU LUKAKU.webp",
                },
                {
                    ime: "YANNICK CARRASCO",
                    slika: "Belgium/Forward/YANNICK CARRASCO.webp",
                },
            ],
            Midfielder: [
                {
                    ime: "AMADOU ONANA",
                    slika: "Belgium/Midfielder/AMADOU ONANA.webp",
                },
                {
                    ime: "AXEL WITSEL",
                    slika: "Belgium/Midfielder/AXEL WITSEL.webp",
                },
                {
                    ime: "HANS VANAKEN",
                    slika: "Belgium/Midfielder/HANS VANAKEN.webp",
                },
                {
                    ime: "KEVIN DE BRUYNER",
                    slika: "Belgium/Midfielder/KEVIN DE BRUYNER.webp",
                },
                {
                    ime: "THOMAS MEUNIER",
                    slika: "Belgium/Midfielder/THOMAS MEUNIER.webp",
                },
                {
                    ime: "THORGON HAYARD",
                    slika: "Belgium/Midfielder/THORGON HAYARD.webp",
                },
                {
                    ime: "TIMOTHY CASTAGNE",
                    slika: "Belgium/Midfielder/TIMOTHY CASTAGNE.webp",
                },
                {
                    ime: "YOURI TIELEMANS",
                    slika: "Belgium/Midfielder/YOURI TIELEMANS.webp",
                },
            ],
            Manager: [
                {
                    ime: "ROBERTO MARTINEY MONTOLIU",
                    slika: "Belgium/Manager/ROBERTO MARTINEY MONTOLIU.webp",
                },
            ],
        },
        info: {
            P: 0,
            W: 0,
            D: 0,
            L: 0,
            GF: 0,
            GA: 0,
            GD: 0,
            Pts: 0
        },
    },
    {
        id: 21,
        grupa: "Fgrupa",
        ime: "Croatia",
        slika: "Image of tim/CRO.png",
        bodovi: "Image of tim/ball.png",
        players: {
            Goalkeeper: [
                {
                    ime: "DOMINIK LIVAKOVIC",
                    slika: "Croatia/Goalkeeper/DOMINIK LIVAKOVIC.webp",
                },
                {
                    ime: "IVCA IVUSIC",
                    slika: "Croatia/Goalkeeper/IVCA IVUSIC.webp",
                },
                {
                    ime: "IVO GRBIC",
                    slika: "Croatia/Goalkeeper/IVO GRBIC.webp",
                },
            ],
            Defender: [
                {
                    ime: "BORNA BARISIC",
                    slika: "Croatia/Defender/BORNA BARISIC.webp",
                },
                {
                    ime: "BORNA SOSA",
                    slika: "Croatia/Defender/BORNA SOSA.webp",
                },
                {
                    ime: "DEJAN LOVREN",
                    slika: "Croatia/Defender/DEJAN LOVREN.webp",
                },
                {
                    ime: "DOMAGOJ VIDA",
                    slika: "Croatia/Defender/DOMAGOJ VIDA.webp",
                },
                {
                    ime: "JOSIP JURANOVIC",
                    slika: "Croatia/Defender/JOSIP JURANOVIC.webp",
                },
                {
                    ime: "JOSIP STANISIC",
                    slika: "Croatia/Defender/JOSIP STANISIC.webp",
                },
                {
                    ime: "JOSIP SUTALO",
                    slika: "Croatia/Defender/JOSIP SUTALO.webp",
                },
                {
                    ime: "JOSKO GVARDIOL",
                    slika: "Croatia/Defender/JOSKO GVARDIOL.webp",
                },
                {
                    ime: "MARTIN ERLIC",
                    slika: "Croatia/Defender/MARTIN ERLIC.webp",
                },
            ],
            Forward: [
                {
                    ime: "ANDREJ KRAMARIC",
                    slika: "Croatia/Forward/ANDREJ KRAMARIC.webp",
                },
                {
                    ime: "ANTE BUDIMIR",
                    slika: "Croatia/Forward/ANTE BUDIMIR.webp",
                },
                {
                    ime: "BRUNO PETKOVIC",
                    slika: "Croatia/Forward/BRUNO PETKOVIC.webp",
                },
                {
                    ime: "IVAN PERISIC",
                    slika: "Croatia/Forward/IVAN PERISIC.webp",
                },
                {
                    ime: "MARKO LIVAJA",
                    slika: "Croatia/Forward/MARKO LIVAJA.webp",
                },
                {
                    ime: "MISLAV ORSIC",
                    slika: "Croatia/Forward/MISLAV ORSIC.webp",
                },
            ],
            Midfielder: [
                {
                    ime: "KRISTIJAN JAKIC",
                    slika: "croatia/midfielder/kristijan jakic.webp",
                },
                {
                    ime: "LIKA SUCIC",
                    slika: "croatia/midfielder/lika sucic.webp",
                },
                {
                    ime: "LOVOR MAJER",
                    slika: "croatia/midfielder/lovro majer.webp",
                },
                {
                    ime: "LUKA MODRIC",
                    slika: "croatia/midfielder/luka modric.webp",
                },
                {
                    ime: "MARCELO BROZOVIC",
                    slika: "croatia/midfielder/marcelo brozovic.webp",
                },
                {
                    ime: "MATEO KOVACIC",
                    slika: "croatia/midfielder/mateo kovacic.webp",
                },
                {
                    ime: "MORIO PASALIC",
                    slika: "croatia/midfielder/morio pasalic.webp",
                },
                {
                    ime: "NIKOLA VLASIC",
                    slika: "croatia/midfielder/nikola vlasic.webp",
                },
                {
                    ime: "ZLATKO DALIĆ",
                    slika: "croatia/midfielder/zlatko dalić.webp",
                }
            
            ],
            Manager: [
                {
                    ime: "LUIS FERNANDO SUAREZ GUZMAN",
                    slika: "Costa Rica/Manager/LUIS FERNANDO SUAREZ GUZMAN.webp",
                },
            ],
        },
        info: {
            P: 0,
            W: 0,
            D: 0,
            L: 0,
            GF: 0,
            GA: 0,
            GD: 0,
            Pts: 0
        },
    },
    {
        id: 22,
        grupa: "Fgrupa",
        ime: "Morocco",
        slika: "Image of tim/MAR.png",
        bodovi: "Image of tim/ball.png",
        players: {
            Goalkeeper: [
                {
                    ime: "AHMED TAGNOUTI",
                    slika: "Morocco/Goalkeeper/AHMED TAGNOUTI.webp",
                },
                {
                    ime: "MONIR EL KAJOUI",
                    slika: "Morocco/Goalkeeper/MONIR EL KAJOUI.webp",
                },
                {
                    ime: "YASSINE BOUNOU",
                    slika: "Morocco/Goalkeeper/YASSINE BOUNOU.webp",
                },
            ],
            Defender: [
                {
                    ime: "ACHRAF DARI",
                    slika: "Morocco/Defender/ACHRAF DARI.webp",
                },
                {
                    ime: "ACHRAF HAKIMI",
                    slika: "Morocco/Defender/ACHRAF HAKIMI.webp",
                },
                {
                    ime: "BADR BENOUN",
                    slika: "Morocco/Defender/BADR BENOUN.webp",
                },
                {
                    ime: "JAWAD EL YAMIQ",
                    slika: "Morocco/Defender/JAWAD EL YAMIQ.webp",
                },
                {
                    ime: "NAYEF AGUERD",
                    slika: "Morocco/Defender/NAYEF AGUERD.webp",
                },
                {
                    ime: "NOUSSAIR MAZRAOUI",
                    slika: "Morocco/Defender/NOUSSAIR MAZRAOUI.webp",
                },
                {
                    ime: "ROMAIN SAISS",
                    slika: "Morocco/Defender/ROMAIN SAISS.webp",
                },
                {
                    ime: "YAHYA ATTIAT-ALLAH",
                    slika: "Morocco/Defender/YAHYA ATTIAT-ALLAH.webp",
                },
            ],
            Forward: [
                {
                    ime: "ABDERRAZAK HAMDALLAH",
                    slika: "Morocco/Forward/ABDERRAZAK HAMDALLAH.webp",
                },
                {
                    ime: "ADBE EZZALZOULI",
                    slika: "Morocco/Forward/ADBE EZZALZOULI.webp",
                },
                {
                    ime: "ADBELHAMID SABIRI",
                    slika: "Morocco/Forward/ADBELHAMID SABIRI.webp",
                },
                {
                    ime: "WALID CHDDIRA",
                    slika: "Morocco/Forward/WALID CHDDIRA.webp",
                },
                {
                    ime: "YOUSSEF EN NESYRL",
                    slika: "Morocco/Forward/YOUSSEF EN NESYRL.webp",
                },
            ],
            Midfielder: [
                {
                    ime: "ANASS ZAROURY",
                    slika: "Morocco/Midfielder/ANASS ZAROURY.webp",
                },
                {
                    ime: "AZZEDINE OUNAHI",
                    slika: "Morocco/Midfielder/AZZEDINE OUNAHI.webp",
                },
                {
                    ime: "BIIAI EL KHANNOUSS",
                    slika: "Morocco/Midfielder/BIIAI EL KHANNOUSS.webp",
                },
                {
                    ime: "HAKIM ZIYECH",
                    slika: "Morocco/Midfielder/HAKIM ZIYECH.webp",
                },
                {
                    ime: "IIAS CHAIR",
                    slika: "Morocco/Midfielder/IIAS CHAIR.webp",
                },
                {
                    ime: "SAFYAN AMRABAT",
                    slika: "Morocco/Midfielder/SAFYAN AMRABAT.webp",
                },
                {
                    ime: "SELIM AMALLAH",
                    slika: "Morocco/Midfielder/SELIM AMALLAH.webp",
                },
                {
                    ime: "SOFIANE BOUFAL",
                    slika: "Morocco/Midfielder/SOFIANE BOUFAL.webp",
                },
                {
                    ime: "YAHYA JABRANE",
                    slika: "Morocco/Midfielder/YAHYA JABRANE.webp",
                },
                {
                    ime: "ZAKARIA ABOUKHLAL",
                    slika: "Morocco/Midfielder/ZAKARIA ABOUKHLAL.webp",
                },
            ],
            Manager: [
                {
                    ime: "HOALID REGRAGUL",
                    slika: "Morocco/Manager/HOALID REGRAGUL.webp",
                },
            ],
        },
        info: {
            P: 0,
            W: 0,
            D: 0,
            L: 0,
            GF: 0,
            GA: 0,
            GD: 0,
            Pts: 0
        },
    },
    {
        id: 23,
        grupa: "Fgrupa",
        ime: "Canada",
        slika: "Image of tim/CAN.png",
        bodovi: "Image of tim/ball.png",
        players: {
            Goalkeeper: [
                {
                    ime: "DAYNER ST",
                    slika: "Canada/Goalkeeper/DAYNER ST. CLAIR.webp",
                },
                {
                    ime: "JAMES PANTEMIS",
                    slika: "Canada/Goalkeeper/JAMES PANTEMIS.webp",
                },
                {
                    ime: "MILAN BORJAN",
                    slika: "Canada/Goalkeeper/MILAN BORJAN.webp",
                },
            ],
            Defender: [
                {
                    ime: "ALISTAIR JOHNSTON",
                    slika: "Canada/Defender/ALISTAIR JOHNSTON.webp",
                },
                {
                    ime: "DEREK CORNELIUS",
                    slika: "Canada/Defender/DEREK CORNELIUS.webp",
                },
                {
                    ime: "JOEL WATERMAN",
                    slika: "Canada/Defender/JOEL WATERMAN.webp",
                },
                {
                    ime: "KAMAL MILLER",
                    slika: "Canada/Defender/KAMAL MILLER.webp",
                },
                {
                    ime: "RICHIE LARYEA",
                    slika: "Canada/Defender/RICHIE LARYEA.webp",
                },
                {
                    ime: "SAM ADEKUGBE",
                    slika: "Canada/Defender/SAM ADEKUGBE.webp",
                },
                {
                    ime: "STEVEN VITORIA",
                    slika: "Canada/Defender/STEVEN VITORIA.webp",
                },
            ],
            Forward: [
                {
                    ime: "ALPHONSO DAVIES",
                    slika: "Canada/Forward/ALPHONSO DAVIES.webp",
                },
                {
                    ime: "CYLE LARIN",
                    slika: "Canada/Forward/CYLE LARIN.webp",
                },
                {
                    ime: "JANATHAN DAVID",
                    slika: "Canada/Forward/JANATHAN DAVID.webp",
                },
                {
                    ime: "LKE UGBO",
                    slika: "Canada/Forward/LKE UGBO.webp",
                },
                {
                    ime: "LUCAS CAVALLINI",
                    slika: "Canada/Forward/LUCAS CAVALLINI.webp",
                },
                {
                    ime: "TAION BUCHANA",
                    slika: "Canada/Forward/TAION BUCHANA.webp",
                },
            ],
            Midfielder: [
                {
                    ime: "ATIBA HUTCHINSON",
                    slika: "Canada/Midfielder/ATIBA HUTCHINSON.webp",
                },
                {
                    ime: "DAVID WOTHERSPOON",
                    slika: "Canada/Midfielder/DAVID WOTHERSPOON.webp",
                },
                {
                    ime: "ISMAEL KONE",
                    slika: "Canada/Midfielder/ISMAEL KONE.webp",
                },
                {
                    ime: "JANATHAN OSORIO",
                    slika: "Canada/Midfielder/JANATHAN OSORIO.webp",
                },
                {
                    ime: "JUNIOR HOILETT",
                    slika: "Canada/Midfielder/JUNIOR HOILETT.webp",
                },
                {
                    ime: "LIAM FRASER",
                    slika: "Canada/Midfielder/LIAM FRASER.webp",
                },
                {
                    ime: "LIAM MILLAR",
                    slika: "Canada/Midfielder/LIAM MILLAR.webp",
                },
                {
                    ime: "MARK-ANTHONY",
                    slika: "Canada/Midfielder/MARK-ANTHONY.webp",
                },
                {
                    ime: "SAMUEL PIETTE",
                    slika: "Canada/Midfielder/SAMUEL PIETTE.webp",
                },
                {
                    ime: "STAPHEN EUSTAQULO",
                    slika: "Canada/Midfielder/STAPHEN EUSTAQULO.webp",
                },
            ],
            Manager: [
                {
                    ime: "JOHN HERDMAN",
                    slika: "Canada/Manager/JOHN HERDMAN.webp",
                },
            ],
        },
        info: {
            P: 0,
            W: 0,
            D: 0,
            L: 0,
            GF: 0,
            GA: 0,
            GD: 0,
            Pts: 0
        },
    },
    {
        id: 24,
        grupa: "Ggrupa",
        ime: "Serbia",
        slika: "Image of tim/SRB.png",
        bodovi: "Image of tim/ball.png",
        players: {
            Goalkeeper: [
                {
                    ime: "MARKO DIMITRIJEVIC",
                    slika: "Srbija/Goalkeeper/MARKO DIMITRIJEVIC.webp",
                },
                {
                    ime: "PREDRAG RAJKOVIC",
                    slika: "Srbija/Goalkeeper/PREDRAG RAJKOVIC.webp",
                },
                {
                    ime: "VANJA MILINKOVIC",
                    slika: "Srbija/Goalkeeper/VANJA MILINKOVIC.webp",
                },
            ],
            Defender: [
                {
                    ime: "FILIP MLADENOVIC",
                    slika: "Srbija/Defender/FILIP MLADENOVIC.webp",
                },
                {
                    ime: "MILOS VELJKOVIC",
                    slika: "Srbija/Defender/MILOS VELJKOVIC.webp",
                },
                {
                    ime: "NIKOLA MILENKOVIC",
                    slika: "Srbija/Defender/NIKOLA MILENKOVIC.webp",
                },
                {
                    ime: "SRDAN BABIC",
                    slika: "Srbija/Defender/SRDAN BABIC.webp",
                },
                {
                    ime: "STEFAN MITROVIC",
                    slika: "Srbija/Defender/STEFAN MITROVIC.webp",
                },
                {
                    ime: "STRAHINJA ERAKOVIC",
                    slika: "Srbija/Defender/STRAHINJA ERAKOVIC.webp",
                },
                {
                    ime: "STRAHINJA PAVLOVIC",
                    slika: "Srbija/Defender/STRAHINJA PAVLOVIC.webp",
                },
            ],
            Forward: [
                {
                    ime: "ALEKSANDAR MITROVIC",
                    slika: "Srbija/Forward/ALEKSANDAR MITROVIC.webp",
                },
                {
                    ime: "DUSAN TADIC",
                    slika: "Srbija/Forward/DUSAN TADIC.webp",
                },
                {
                    ime: "DUSAN VLAHOVIC",
                    slika: "Srbija/Forward/DUSAN VLAHOVIC.webp",
                },
                {
                    ime: "FILIP DJURICIC",
                    slika: "Srbija/Forward/FILIP DJURICIC.webp",
                },
                {
                    ime: "LUKA JOVIC",
                    slika: "Srbija/Forward/LUKA JOVIC.webp",
                },
                {
                    ime: "NEMANJA RADOJEVIC",
                    slika: "Srbija/Forward/NEMANJA RADOJEVIC.webp",
                },
            ],
            Midfielder: [
                {
                    ime: "ANDRIJA ZIVKOVIC",
                    slika: "Srbija/Midfielder/ANDRIJA ZIVKOVIC.webp",
                },
                {
                    ime: "DARKO LAZOVIC",
                    slika: "Srbija/Midfielder/DARKO LAZOVIC.webp",
                },
                {
                    ime: "FILIP KOSTIC",
                    slika: "Srbija/Midfielder/FILIP KOSTIC.webp",
                },
                {
                    ime: "IVAN ILIC",
                    slika: "Srbija/Midfielder/IVAN ILIC.webp",
                },
                {
                    ime: "MARKO GRUJIC",
                    slika: "Srbija/Midfielder/MARKO GRUJIC.webp",
                },
                {
                    ime: "NEMANJA GUDELJ",
                    slika: "Srbija/Midfielder/NEMANJA GUDELJ.webp",
                },
                {
                    ime: "NEMANJA MAKSIMOVIC",
                    slika: "Srbija/Midfielder/NEMANJA MAKSIMOVIC.webp",
                },
                {
                    ime: "SASA LUKIC",
                    slika: "Srbija/Midfielder/SASA LUKIC.webp",
                },
                {
                    ime: "SERGEJ MILENKOVIC-SAVIC",
                    slika: "Srbija/Midfielder/SERGEJ MILENKOVIC-SAVIC.webp",
                },
                {
                    ime: "UROS RACIC",
                    slika: "Srbija/Midfielder/UROS RACIC.webp",
                },
            ],
            Manager: [
                {
                    ime: "DRAGAN STOJKOVIC",
                    slika: "Srbija/Manager/DRAGAN STOJKOVIC.webp",
                },
            ],
        },
        info: {
            P: 0,
            W: 0,
            D: 0,
            L: 0,
            GF: 0,
            GA: 0,
            GD: 0,
            Pts: 0
        },
    },
    {
        id: 25,
        grupa: "Ggrupa",
        ime: "Brazil",
        slika: "Image of tim/BRA.png",
        bodovi: "Image of tim/ball.png",
        players: {
            Goalkeeper: [
                {
                    ime: "Alisson",
                    slika: "Brazil/Goalkeeper/Alisson.webp",
                },
                {
                    ime: "EDERSON",
                    slika: "Brazil/Goalkeeper/EDERSON.webp",
                },
                {
                    ime: "WEVERTON",
                    slika: "Brazil/Goalkeeper/WEVERTON.webp",
                },
            ],
            Defender: [
                {
                    ime: "ALEX SANDRO",
                    slika: "Brazil/Defender/ALEX SANDRO.webp",
                },
                {
                    ime: "ALEX TELLES",
                    slika: "Brazil/Defender/ALEX TELLES.webp",
                },
                {
                    ime: "BREMMER",
                    slika: "Brazil/Defender/BREMMER.webp",
                },
                {
                    ime: "DANI ALVES",
                    slika: "Brazil/Defender/DANI ALVES.webp",
                },
                {
                    ime: "DANILO",
                    slika: "Brazil/Defender/DANILO.webp",
                },
                {
                    ime: "EDER MILITO",
                    slika: "Brazil/Defender/EDER MILITO.webp",
                },
                {
                    ime: "MARQUIHOS",
                    slika: "Brazil/Defender/MARQUIHOS.webp",
                },
                {
                    ime: "THIAGO SILVA",
                    slika: "Brazil/Defender/THIAGO SILVA.webp",
                },
            ],
            Forward: [
                {
                    ime: "ANTONY",
                    slika: "Brazil/Forward/ANTONY.webp",
                },
                {
                    ime: "GABRIEL JESUS",
                    slika: "Brazil/Forward/GABRIEL JESUS.webp",
                },
                {
                    ime: "GABRIEL MARTINELLI",
                    slika: "Brazil/Forward/GABRIEL MARTINELLI.webp",
                },
                {
                    ime: "NEYMAR",
                    slika: "Brazil/Forward/NEYMAR.webp",
                },
                {
                    ime: "PEDRO",
                    slika: "Brazil/Forward/PEDRO.webp",
                },
                {
                    ime: "RAPHINHA",
                    slika: "Brazil/Forward/RAPHINHA.webp",
                },
                {
                    ime: "RAPHINHA",
                    slika: "Brazil/Forward/RAPHINHA.webp",
                },
                {
                    ime: "RICHARLISON",
                    slika: "Brazil/Forward/RICHARLISON.webp",
                },
                {
                    ime: "VINCIUS JR",
                    slika: "Brazil/Forward/VINCIUS JR.webp",
                },
            ],
            Midfielder: [
                {
                    ime: "BRUNO GUIMARAES",
                    slika: "Brazil/Midfielder/BRUNO GUIMARAES.webp",
                },
                {
                    ime: "CASEMIRO",
                    slika: "Brazil/Midfielder/CASEMIRO.webp",
                },
                {
                    ime: "EVERTON RIBEIRO",
                    slika: "Brazil/Midfielder/EVERTON RIBEIRO.webp",
                },
                {
                    ime: "LUCAS PAQUETA",
                    slika: "Brazil/Midfielder/LUCAS PAQUETA.webp",
                },
                {
                    ime: "FABINHO",
                    slika: "Brazil/Midfielder/FABINHO.webp",
                },
                {
                    ime: "ERED",
                    slika: "Brazil/Midfielder/ERED.webp",
                },
            ],
            Manager: [
                {
                    ime: "TITE",
                    slika: "Brazil/Manager/TITE.webp",
                },
            ],
        },
        info: {
            P: 0,
            W: 0,
            D: 0,
            L: 0,
            GF: 0,
            GA: 0,
            GD: 0,
            Pts: 0
        },
    },
    {
        id: 26,
        grupa: "Ggrupa",
        ime: "Cameroon",
        slika: "Image of tim/CMR.png",
        bodovi: "Image of tim/ball.png",
        players: {
            Goalkeeper: [
                {
                    ime: "ANDRE ONANA",
                    slika: "Cameroon/Goalkeeper/ANDRE ONANA.webp",
                },
                {
                    ime: "BRADY NGAPANDOUETNBU",
                    slika: "Cameroon/Goalkeeper/BRADY NGAPANDOUETNBU.webp",
                },
                {
                    ime: "DEVIS EPASSY",
                    slika: "Cameroon/Goalkeeper/DEVIS EPASSY.webp",
                },
            ],
            Defender: [
                {
                    ime: "CHRISTOPHER WOOH",
                    slika: "Cameroon/Defender/CHRISTOPHER WOOH.webp",
                },
                {
                    ime: "COLLINS FAI",
                    slika: "Cameroon/Defender/COLLINS FAI.webp",
                },
                {
                    ime: "ENYO EBOSSE",
                    slika: "Cameroon/Defender/ENYO EBOSSE.webp",
                },
                {
                    ime: "JEAN-CHARLES CASTELLETTO",
                    slika: "Cameroon/Defender/JEAN-CHARLES CASTELLETTO.webp",
                },
                {
                    ime: "JEROME NGOM MBEKELI",
                    slika: "Cameroon/Defender/JEROME NGOM MBEKELI.webp",
                },
                {
                    ime: "NICOLAS NKOULOU",
                    slika: "Cameroon/Defender/NICOLAS NKOULOU.webp",
                },
                {
                    ime: "NOUHOU TOLO",
                    slika: "Cameroon/Defender/NOUHOU TOLO.webp",
                },
                {
                    ime: "OLIVIER MBAIZO",
                    slika: "Cameroon/Defender/OLIVIER MBAIZO.webp",
                },
            ],
            Forward: [
                {
                    ime: "BRYAN MBEUMO",
                    slika: "Cameroon/Forward/BRYAN MBEUMO.webp",
                },
                {
                    ime: "CHRISTIAN BASSOGOG",
                    slika: "Cameroon/Forward/CHRISTIAN BASSOGOG.webp",
                },
                {
                    ime: "ERIC MAXIM CHOUPO-MOTING",
                    slika: "Cameroon/Forward/ERIC MAXIM CHOUPO-MOTING.webp",
                },
                {
                    ime: "JEAN-PIERRE NSAME",
                    slika: "Cameroon/Forward/JEAN-PIERRE NSAME.webp",
                },
                {
                    ime: "KARI TOKO EKAMBI",
                    slika: "Cameroon/Forward/KARI TOKO EKAMBI.webp",
                },
                {
                    ime: "VINCENT ABOUBAKAR",
                    slika: "Cameroon/Forward/VINCENT ABOUBAKAR.webp",
                },
            ],
            Midfielder: [
                {
                    ime: "ANDRE-FRANK ZAMBO ANGUISSA",
                    slika: "Cameroon/Midfielder/ANDRE-FRANK ZAMBO ANGUISSA.webp",
                },
                {
                    ime: "GAEL ONDOUA",
                    slika: "Cameroon/Midfielder/GAEL ONDOUA.webp",
                },
                {
                    ime: "GEORGES-KEVIN NKOUDOU",
                    slika: "Cameroon/Midfielder/GEORGES-KEVIN NKOUDOU.webp",
                },
                {
                    ime: "MARTIN HONGLA",
                    slika: "Cameroon/Midfielder/MARTIN HONGLA.webp",
                },
                {
                    ime: "OLIVIER NTCHAM",
                    slika: "Cameroon/Midfielder/OLIVIER NTCHAM.webp",
                },
                {
                    ime: "PIERRE KUNDE",
                    slika: "Cameroon/Midfielder/PIERRE KUNDE.webp",
                },
                {
                    ime: "SAMUEL GOUET",
                    slika: "Cameroon/Midfielder/SAMUEL GOUET.webp",
                },
                {
                    ime: "SOUAIDOU MAROU",
                    slika: "Cameroon/Midfielder/SOUAIDOU MAROU.webp",
                },
            ],
            Manager: [
                {
                    ime: "RIGOBERT SONG BAHANAG",
                    slika: "Cameroon/Manager/RIGOBERT SONG BAHANAG.webp",
                },
            ],
        },
        info: {
            P: 0,
            W: 0,
            D: 0,
            L: 0,
            GF: 0,
            GA: 0,
            GD: 0,
            Pts: 0
        },
    },
    {
        id: 27,
        grupa: "Ggrupa",
        ime: "Switzerland",
        slika: "Image of tim/SUI.png",
        bodovi: "Image of tim/ball.png",
        players: {
            Goalkeeper: [
                {
                    ime: "PHILIPP KOHEN",
                    slika: "Switzerland/Goalkeeper/PHILIPP KOHEN.webp",
                },
                {
                    ime: "GREGOR KOBEL",
                    slika: "Switzerland/Goalkeeper/GREGOR KOBEL.webp",
                },
                {
                    ime: "JANAS OMLIN",
                    slika: "Switzerland/Goalkeeper/JANAS OMLIN.webp",
                },
                {
                    ime: "YANN SOMMER",
                    slika: "Switzerland/Goalkeeper/YANN SOMMER.webp",
                },
            ],
            Defender: [
                {
                    ime: "EDIMISON FERNANDES",
                    slika: "Switzerland/Defender/EDIMISON FERNANDES.webp",
                },
                {
                    ime: "ERAY COMERT",
                    slika: "Switzerland/Defender/ERAY COMERT.webp",
                },
                {
                    ime: "FABINO SCHER",
                    slika: "Switzerland/Defender/FABINO SCHER.webp",
                },
                {
                    ime: "MANUEL AKANJI",
                    slika: "Switzerland/Defender/MANUEL AKANJI.webp",
                },
                {
                    ime: "NICON ELVEDI",
                    slika: "Switzerland/Defender/NICON ELVEDI.webp",
                },
                {
                    ime: "RENATO STEFFEN",
                    slika: "Switzerland/Defender/RENATO STEFFEN.webp",
                },
                {
                    ime: "RICARDO RODRIGES",
                    slika: "Switzerland/Defender/RICARDO RODRIGES.webp",
                },
                {
                    ime: "SILVAN WIDMER",
                    slika: "Switzerland/Defender/SILVAN WIDMER.webp",
                },
            ],
            Forward: [
                {
                    ime: "BREEL EMBOLO",
                    slika: "Switzerland/Forward/BREEL EMBOLO.webp",
                },
                {
                    ime: "HARIS SEFEROVIC",
                    slika: "Switzerland/Forward/HARIS SEFEROVIC.webp",
                },
                {
                    ime: "NOAH OKAFOR",
                    slika: "Switzerland/Forward/NOAH OKAFOR.webp",
                },
                {
                    ime: "RUBEN VARGAS",
                    slika: "Switzerland/Forward/RUBEN VARGAS.webp",
                },
            ],
            Midfielder: [
                {
                    ime: "ARDON JASHARI",
                    slika: "Switzerland/Midfielder/ARDON JASHARI.webp",
                },
                {
                    ime: "CHRISTAN FASSNACHT",
                    slika: "Switzerland/Midfielder/CHRISTAN FASSNACHT.webp",
                },
                {
                    ime: "DENIS ZAKARIA",
                    slika: "Switzerland/Midfielder/DENIS ZAKARIA.webp",
                },
                {
                    ime: "FABIAN FREL",
                    slika: "Switzerland/Midfielder/FABIAN FREL.webp",
                },
                {
                    ime: "FABIAN RIEDER",
                    slika: "Switzerland/Midfielder/FABIAN RIEDER.webp",
                },
                {
                    ime: "GRANIT XHAKA",
                    slika: "Switzerland/Midfielder/GRANIT XHAKA.webp",
                },
                {
                    ime: "MICHEL AEBISCHER",
                    slika: "Switzerland/Midfielder/MICHEL AEBISCHER.webp",
                },
                {
                    ime: "MOHAMETH SOW",
                    slika: "Switzerland/Midfielder/MOHAMETH SOW.webp",
                },
                {
                    ime: "REMO FREULER",
                    slika: "Switzerland/Midfielder/REMO FREULER.webp",
                },
                {
                    ime: "XHERDAN SHAQIRI",
                    slika: "Switzerland/Midfielder/XHERDAN SHAQIRI.webp",
                },
            ],
            Manager: [
                {
                    ime: "MURAT YAKIN",
                    slika: "Switzerland/Manager/MURAT YAKIN.webp",
                },
            ],
        },
        info: {
            P: 0,
            W: 0,
            D: 0,
            L: 0,
            GF: 0,
            GA: 0,
            GD: 0,
            Pts: 0
        },
    },
    {
        id: 28,
        grupa: "Hgrupa",
        ime: "Portugal",
        slika: "Image of tim/POR.png",
        bodovi: "Image of tim/ball.png",
        players: {
            Goalkeeper: [
                {
                    ime: "DIGO COSTA",
                    slika: "Portugal/Goalkeeper/DIGO COSTA.webp",
                },
                {
                    ime: "JOSE SA",
                    slika: "Portugal/Goalkeeper/JOSE SA.webp",
                },
                {
                    ime: "RUI PATRICIO",
                    slika: "Portugal/Goalkeeper/RUI PATRICIO.webp",
                },
            ],
            Defender: [
                {
                    ime: "ANTONIO SILVA",
                    slika: "Portugal/Defender/ANTONIO SILVA.webp",
                },
                {
                    ime: "DANILO",
                    slika: "Portugal/Defender/DANILO.webp",
                },
                {
                    ime: "DIOGO DALOT",
                    slika: "Portugal/Defender/DIOGO DALOT.webp",
                },
                {
                    ime: "JOAO CANCELO",
                    slika: "Portugal/Defender/JOAO CANCELO.webp",
                },
                {
                    ime: "NUNO MENDES",
                    slika: "Portugal/Defender/NUNO MENDES.webp",
                },
                {
                    ime: "PEPE",
                    slika: "Portugal/Defender/PEPE.webp",
                },
                {
                    ime: "RAPHAEL GUERREIRO",
                    slika: "Portugal/Defender/RAPHAEL GUERREIRO.webp",
                },
                {
                    ime: "RUBEN DIAS",
                    slika: "Portugal/Defender/RUBEN DIAS.webp",
                },
            ],
            Forward: [
                {
                    ime: "ANDRE SILVA",
                    slika: "Portugal/Forward/ANDRE SILVA.webp",
                },
                {
                    ime: "BERNARDO SILVA",
                    slika: "Portugal/Forward/BERNARDO SILVA.webp",
                },
                {
                    ime: "CRISTIANO RONALDO",
                    slika: "Portugal/Forward/CRISTIANO RONALDO.webp",
                },
                {
                    ime: "GONCALO RAMOS",
                    slika: "Portugal/Forward/GONCALO RAMOS.webp",
                },
                {
                    ime: "JOAO FELIX",
                    slika: "Portugal/Forward/JOAO FELIX.webp",
                },
                {
                    ime: "RAFAEL LEAO",
                    slika: "Portugal/Forward/RAFAEL LEAO.webp",
                },
                {
                    ime: "RICARDO HORTA",
                    slika: "Portugal/Forward/RICARDO HORTA.webp",
                },
            ],
            Midfielder: [
                {
                    ime: "BRUNO FERNANDES",
                    slika: "Portugal/Midfielder/BRUNO FERNANDES.webp",
                },
                {
                    ime: "JOAO MARIO",
                    slika: "Portugal/Midfielder/JOAO MARIO.webp",
                },
                {
                    ime: "JOAO PALHINHA",
                    slika: "Portugal/Midfielder/JOAO PALHINHA.webp",
                },
                {
                    ime: "MATHEUS NUNES",
                    slika: "Portugal/Midfielder/MATHEUS NUNES.webp",
                },
                {
                    ime: "OTAVIO",
                    slika: "Portugal/Midfielder/OTAVIO.webp",
                },
                {
                    ime: "RUBEN NEVES",
                    slika: "Portugal/Midfielder/RUBEN NEVES.webp",
                },
                {
                    ime: "VITINHA",
                    slika: "Portugal/Midfielder/VITINHA.webp",
                },
                {
                    ime: "WILLIAM",
                    slika: "Portugal/Midfielder/WILLIAM.webp",
                },
            ],
            Manager: [
                {
                    ime: "FERNANDO MANUEL FENNANDO",
                    slika: "Portugal/Manager/FERNANDO MANUEL FENNANDO.webp",
                },
            ],
        },
        info: {
            P: 0,
            W: 0,
            D: 0,
            L: 0,
            GF: 0,
            GA: 0,
            GD: 0,
            Pts: 0
        },
    },
    {
        id: 29,
        grupa: "Hgrupa",
        ime: "Uruguay",
        slika: "Image of tim/URU.png",
        bodovi: "Image of tim/ball.png",
        players: {
            Goalkeeper: [
                {
                    ime: "FERNANDO MUSLERA",
                    slika: "Uruguay/Goalkeeper/FERNANDO MUSLERA.webp",
                },
                {
                    ime: "SEBASTIAN SOSA",
                    slika: "Uruguay/Goalkeeper/SEBASTIAN SOSA.webp",
                },
                {
                    ime: "SERGIO ROCHET",
                    slika: "Uruguay/Goalkeeper/SERGIO ROCHET.webp",
                },
            ],
            Defender: [
                {
                    ime: "DIEGO GODIN",
                    slika: "Uruguay/Defender/DIEGO GODIN.webp",
                },
                {
                    ime: "GUILLERMO VARELA",
                    slika: "Uruguay/Defender/GUILLERMO VARELA.webp",
                },
                {
                    ime: "JOSE GIMENZ",
                    slika: "Uruguay/Defender/JOSE GIMENZ.webp",
                },
                {
                    ime: "JOSE LUIS RODRIGUEZ",
                    slika: "Uruguay/Defender/JOSE LUIS RODRIGUEZ.webp",
                },
                {
                    ime: "MARTIN CACERES",
                    slika: "Uruguay/Defender/MARTIN CACERES.webp",
                },
                {
                    ime: "MATHIAS OLIVERA",
                    slika: "Uruguay/Defender/MATHIAS OLIVERA.webp",
                },
                {
                    ime: "MATIAS VINA",
                    slika: "Uruguay/Defender/MATIAS VINA.webp",
                },
                {
                    ime: "RONALD ARAUJO",
                    slika: "Uruguay/Defender/RONALD ARAUJO.webp",
                },
                {
                    ime: "SEBASTIAN COATES",
                    slika: "Uruguay/Defender/SEBASTIAN COATES.webp",
                },
            ],
            Forward: [
                {
                    ime: "DORWIN NUNEZ",
                    slika: "Uruguay/Forward/DORWIN NUNEZ.webp",
                },
                {
                    ime: "EDINSON CAVANI",
                    slika: "Uruguay/Forward/EDINSON CAVANI.webp",
                },
                {
                    ime: "FACUNDO PELLISTRI",
                    slika: "Uruguay/Forward/FACUNDO PELLISTRI.webp",
                },
                {
                    ime: "FACUNDO TORRES",
                    slika: "Uruguay/Forward/FACUNDO TORRES.webp",
                },
                {
                    ime: "LUIS SUAREZ",
                    slika: "Uruguay/Forward/LUIS SUAREZ.webp",
                },
                {
                    ime: "MAXIMILIANO GOMEZ",
                    slika: "Uruguay/Forward/MAXIMILIANO GOMEZ.webp",
                },
            ],
            Midfielder: [
                {
                    ime: "AGUSTIN CANOBBIO",
                    slika: "Uruguay/Midfielder/AGUSTIN CANOBBIO.webp",
                },
                {
                    ime: "FEDERICO VAVERDE",
                    slika: "Uruguay/Midfielder/FEDERICO VAVERDE.webp",
                },
                {
                    ime: "GIORGIAN DE ARRASCAETA",
                    slika: "Uruguay/Midfielder/GIORGIAN DE ARRASCAETA.webp",
                },
                {
                    ime: "LUCAS TORREIRA",
                    slika: "Uruguay/Midfielder/LUCAS TORREIRA.webp",
                },
                {
                    ime: "MANUEL UGARTE",
                    slika: "Uruguay/Midfielder/MANUEL UGARTE.webp",
                },
                {
                    ime: "MARTIAS VECINO",
                    slika: "Uruguay/Midfielder/MARTIAS VECINO.webp",
                },
                {
                    ime: "NICOLAS DE LA CRUZ",
                    slika: "Uruguay/Midfielder/NICOLAS DE LA CRUZ.webp",
                },
                {
                    ime: "RODRIGO BENTANCUR",
                    slika: "Uruguay/Midfielder/RODRIGO BENTANCUR.webp",
                },
            ],
            Manager: [
                {
                    ime: "DIEGO ALONSO",
                    slika: "Uruguay/Manager/DIEGO ALONSO.webp",
                },
            ],
        },
        info: {
            P: 0,
            W: 0,
            D: 0,
            L: 0,
            GF: 0,
            GA: 0,
            GD: 0,
            Pts: 0
        },
    },
    {
        id: 30,
        grupa: "Hgrupa",
        ime: "Korea Republic",
        slika: "Image of tim/KOR.png",
        bodovi: "Image of tim/ball.png",
        players: {
            Goalkeeper: [
                {
                    ime: "JO HYEONWOO",
                    slika: "Korea Republic/Goalkeeper/JO HYEONWOO.webp",
                },
                {
                    ime: "KIM SUNGGYU",
                    slika: "Korea Republic/Goalkeeper/KIM SUNGGYU.webp",
                },
                {
                    ime: "SONG BUMKEUN",
                    slika: "Korea Republic/Goalkeeper/SONG BUMKEUN.webp",
                },
            ],
            Defender: [
                {
                    ime: "CHO YUMIN",
                    slika: "Korea Republic/Defender/CHO YUMIN.webp",
                },
                {
                    ime: "HONG CHUL",
                    slika: "Korea Republic/Defender/HONG CHUL.webp",
                },
                {
                    ime: "KIM MINJAE",
                    slika: "Korea Republic/Defender/KIM MINJAE.webp",
                },
                {
                    ime: "KIM JINSU",
                    slika: "Korea Republic/Defender/KIM JINSU.webp",
                },
                {
                    ime: "KIM MOONHWAN",
                    slika: "Korea Republic/Defender/KIM MOONHWAN.webp",
                },
                {
                    ime: "KIM TAEHWAN",
                    slika: "Korea Republic/Defender/KIM TAEHWAN.webp",
                },
                {
                    ime: "KIM YOUNGGWON",
                    slika: "Korea Republic/Defender/KIM YOUNGGWON.webp",
                },
                {
                    ime: "KWON KYNGWON",
                    slika: "Korea Republic/Defender/KWON KYNGWON.webp",
                },
                {
                    ime: "YOON JONGGYU",
                    slika: "Korea Republic/Defender/YOON JONGGYU.webp",
                },
            ],
            Forward: [
                {
                    ime: "CHO GUESUNG",
                    slika: "Korea Republic/Forward/CHO GUESUNG.webp",
                },
                {
                    ime: "HWANG UIJO",
                    slika: "Korea Republic/Forward/HWANG UIJO.webp",
                },
            ],
            Midfielder: [
                {
                    ime: "HWANG HEECHAN",
                    slika: "Korea Republic/Midfielder/HWANG HEECHAN.webp",
                },
                {
                    ime: "HWANG INBEOM",
                    slika: "Korea Republic/Midfielder/HWANG INBEOM.webp",
                },
                {
                    ime: "JEONG WOOYEONG",
                    slika: "Korea Republic/Midfielder/JEONG WOOYEONG.webp",
                },
                {
                    ime: "JUNG WOOYOUNG",
                    slika: "Korea Republic/Midfielder/JUNG WOOYOUNG.webp",
                },
                {
                    ime: "KWON CHANGHOON",
                    slika: "Korea Republic/Midfielder/KWON CHANGHOON.webp",
                },
                {
                    ime: "LEE JAESUNG",
                    slika: "Korea Republic/Midfielder/LEE JAESUNG.webp",
                },
                {
                    ime: "LEE KANGIN",
                    slika: "Korea Republic/Midfielder/LEE KANGIN.webp",
                },
                {
                    ime: "NA SANGHO",
                    slika: "Korea Republic/Midfielder/NA SANGHO.webp",
                },
                {
                    ime: "PAIK SEUNGHO",
                    slika: "Korea Republic/Midfielder/PAIK SEUNGHO.webp",
                },
                {
                    ime: "SON HEUNGMIN",
                    slika: "Korea Republic/Midfielder/SON HEUNGMIN.webp",
                },
                {
                    ime: "SONG MINKYU",
                    slika: "Korea Republic/Midfielder/SONG MINKYU.webp",
                },
            ],
            Manager: [
                {
                    ime: "PAULO JORGE GOMES BE",
                    slika: "Korea Republic/Manager/PAULO JORGE GOMES BE...webp",
                },
            ],
        },
        info: {
            P: 0,
            W: 0,
            D: 0,
            L: 0,
            GF: 0,
            GA: 0,
            GD: 0,
            Pts: 0
        },
    },
    {
        id: 31,
        grupa: "Hgrupa",
        ime: "Ghana",
        slika: "Image of tim/GHA.png",
        bodovi: "Image of tim/ball.png",
        players: {
            Goalkeeper: [
                {
                    ime: "ABODUL MANAF NURUDEEN",
                    slika: "Ghana/Goalkeeper/ABODUL MANAF NURUDEEN.webp",
                },
                {
                    ime: "DONLAD IBRAHIM",
                    slika: "Ghana/Goalkeeper/DONLAD IBRAHIM.webp",
                },
                {
                    ime: "LAWRENCE ATI ZIGI",
                    slika: "Ghana/Goalkeeper/LAWRENCE ATI ZIGI.webp",
                },
            ],
            Defender: [
                {
                    ime: "ALEXANDER DJIKU",
                    slika: "Ghana/Defender/ALEXANDER DJIKU.webp",
                },
                {
                    ime: "BADA RAHMAN",
                    slika: "Ghana/Defender/BADA RAHMAN.webp",
                },
                {
                    ime: "DANIEL AMARTEY",
                    slika: "Ghana/Defender/DANIEL AMARTEY.webp",
                },
                {
                    ime: "DENIS ODOI",
                    slika: "Ghana/Defender/DENIS ODOI.webp",
                },
                {
                    ime: "GIDEON MENSAH",
                    slika: "Ghana/Defender/GIDEON MENSAH.webp",
                },
                {
                    ime: "JOSEPH AIDOO",
                    slika: "Ghana/Defender/JOSEPH AIDOO.webp",
                },
                {
                    ime: "MOHAMMED SALISU",
                    slika: "Ghana/Defender/MOHAMMED SALISU.webp",
                },
                {
                    ime: "SEIDU ALIDU",
                    slika: "Ghana/Defender/SEIDU ALIDU.webp",
                },
                {
                    ime: "TARIQ LAMPTEY",
                    slika: "Ghana/Defender/TARIQ LAMPTEY.webp",
                },
            ],
            Forward: [
                {
                    ime: "ANDRE AYEW",
                    slika: "Ghana/Forward/ANDRE AYEW.webp",
                },
                {
                    ime: "ANTOINE SEMENYO",
                    slika: "Ghana/Forward/ANTOINE SEMENYO.webp",
                },
                {
                    ime: "INAKI WILLIAMS",
                    slika: "Ghana/Forward/INAKI WILLIAMS.webp",
                },
                {
                    ime: "JORDAN AYEW",
                    slika: "Ghana/Forward/JORDAN AYEW.webp",
                },
            ],
            Midfielder: [
                {
                    ime: "ABDUL FATAWU ISSAHAKU",
                    slika: "Ghana/Midfielder/ABDUL FATAWU ISSAHAKU.webp",
                },
                {
                    ime: "ANDRE AYEW",
                    slika: "Ghana/Midfielder/ANDRE AYEW.webp",
                },
                {
                    ime: "ANTOINE SEMENYO",
                    slika: "Ghana/Midfielder/ANTOINE SEMENYO.webp",
                },
                {
                    ime: "DANIEL AFIYIE",
                    slika: "Ghana/Midfielder/DANIEL AFIYIE.webp",
                },
                {
                    ime: "DANIEL-KOFI KYEREH",
                    slika: "Ghana/Midfielder/DANIEL-KOFI KYEREH.webp",
                },
                {
                    ime: "ELISHA OWUSU",
                    slika: "Ghana/Midfielder/ELISHA OWUSU.webp",
                },
                {
                    ime: "INAKI WILLIAMS",
                    slika: "Ghana/Midfielder/INAKI WILLIAMS.webp",
                },
                {
                    ime: "JORDAN AYEW",
                    slika: "Ghana/Midfielder/JORDAN AYEW.webp",
                },
                {
                    ime: "KAMAL SOWAH",
                    slika: "Ghana/Midfielder/KAMAL SOWAH.webp",
                },
                {
                    ime: "KAMALDEEN SULEMANA",
                    slika: "Ghana/Midfielder/KAMALDEEN SULEMANA.webp",
                },
                {
                    ime: "KUDUS MOHAMMED",
                    slika: "Ghana/Midfielder/KUDUS MOHAMMED.webp",
                },
                {
                    ime: "OSMAN BUKARI",
                    slika: "Ghana/Midfielder/OSMAN BUKARI.webp",
                },
                {
                    ime: "SALIS ABDUL SAMED",
                    slika: "Ghana/Midfielder/SALIS ABDUL SAMED.webp",
                },
                {
                    ime: "THOMAS PARTEY",
                    slika: "Ghana/Midfielder/THOMAS PARTEY.webp",
                },
            ],
            Manager: [
                {
                    ime: "OTTO ADDO",
                    slika: "Ghana/Manager/OTTO ADDO.webp",
                },
            ],
        },
        info: {
            P: 0,
            W: 0,
            D: 0,
            L: 0,
            GF: 0,
            GA: 0,
            GD: 0,
            Pts: 0
        },
    },
];



Timovi.forEach((tim) => {
    // Iteriraj kroz svaku grupu igrača unutar tima
    Object.keys(tim.players).forEach((grupa) => {
        // Iteriraj kroz sve igrače unutar grupe
        tim.players[grupa].forEach((igrac) => {
            // Razdvoji putanju slike
            const putanjaSlike = igrac.slika;
            // Izdvoji ime fajla iz putanje
            const imeFajla = putanjaSlike.substring(
                putanjaSlike.lastIndexOf("/") + 1
            );
            // Izdvoji format fajla
            const format = imeFajla.substring(imeFajla.lastIndexOf(".") + 1);
            // Postavi ime fajla kao ime igrača
            igrac.ime = imeFajla.split(".")[0];
        });
    });
});


const groupedTeamsArray = grupisaniTimovi();
let rezultatTekst = "";



btn_Start.addEventListener("click", function (e) {
    
    const value = e.currentTarget;
    
    btn_Start.classList.add("disabled");
    btn_Group.classList.add("active");

    if (value) {
        btn_Start.disabled = true;
        btn_Group.disabled = false;
    }

    All_tims(Timovi);
    let cards = document.querySelectorAll(".container_tim_grupe_F");
    function turn_the_picture() {
        this.classList.toggle("flip");
    }
    cards.forEach((card) => card.addEventListener("click", turn_the_picture));
});
btn_Group.addEventListener("click", function (e) {
    btn_Group.classList.remove("active");
    btn_Group.classList.add("disabled");

    btn_I_round.classList.add("active");

    const value = e.currentTarget;
    console.log(value, "dugme");
    if (value) {
        btn_Group.disabled = true;
        grupisaniTimovi();
        Group_view(groupedTeamsArray);

        asdsa(value, groupedTeamsArray, sets_of_teams);

        teamplayers(Timovi);

        //obrisiContainer()
    }
});
btn_I_round.addEventListener("click", function (e) {
    btn_I_round.classList.remove("active");
    btn_I_round.classList.add("disabled");
    btn_II_round.classList.add("active");



    const value = e.currentTarget;
    if (value) {
        btn_I_round.disabled = true;
        Add_goals = dodavanje_golova(groupedTeamsArray);

        First_round_goals(Add_goals);
        compare_the_goals_of_the_First_round(Round_I_goals);

        Team_sorting(sorted_I_round);

        RoundI_II_III(sorted_I_round);
        teamplayers(Timovi);

    
        
        asdsa(value, Round_I, sets_of_teams1);
    


        handleResize();
    }
});
btn_II_round.addEventListener("click", function (e) {
    btn_II_round.classList.remove("active");

    btn_II_round.classList.add("disabled");
    btn_III_round.classList.add("active");
    const value = e.currentTarget;
    if (value) {
        btn_II_round.disabled = true;

        Add_goals = dodavanje_golova(Round_I);
        Second_round_goals(Add_goals);
        console.log(Round_II_goals,"Round_II_goals")
        compare_the_goals_of_the_Second_round(Round_II_goals);
        Team_sorting(sorted_II_round);
        RoundI_II_III(sorted_II_round);
        teamplayers(Timovi);

    
        asdsa(value, Round_II, sets_of_teams2);
        
        
        handleResize();
    }
});
btn_III_round.addEventListener("click", function (e) {
    btn_III_round.classList.remove("active");

    btn_III_round.classList.add("disabled");
    btn_Sixth.classList.add("active");
    const value = e.currentTarget;
    if (value) {
        btn_III_round.disabled = true;
        Add_goals = dodavanje_golova(Round_II);
        console.log(Round_II, "dsa2");
        Third_second_round_goals(Add_goals);
        compare_the_goals_of_the_Third_round(Round_III_goals);
        Team_sorting(sorted_III_round);
    
        RoundI_II_III(sorted_III_round);
        teamplayers(Timovi);

    
        asdsa(value, Round_III, sets_of_teams3);
        

        
        handleResize();
    }
});

btn_Sixth.addEventListener("click", function (e) {
    const screenWidth = window.innerWidth;
    
    btn_Sixth.classList.remove("active");
    btn_Sixth.classList.add("disabled");
    btn_Sixth_POINTS.classList.add("active");
    const elementsToToggle=document.querySelector(".container_all_of_Grup_osmina");

    //showTitles(title)
    const value = e.currentTarget;
    //toggleDisabledElements(screenWidth, value );

    const title = value.getAttribute("aria-label");
    if (value) {
        window.onload = function () {
            showTitles();
        };
        
        window.addEventListener("resize", showTitles);
        toggleDisplay(screenWidth,elementsToToggle,title)
        console.log(value,"title")

        btn_Sixth.disabled = true;

        
        Round_of_6_grouping(sorted_III_round);

        showTitles(title);

        Sixth_final(GRUPE_VIII);
        //proveriSvaDugmadPronašla(groupedTeamsArray, sets_of_teams);
        asdsa(value, Round_III, sets_of_teams3);
    }
});
btn_Sixth_POINTS.addEventListener("click", function (e) {
    //window.addEventListener("resize", showTitles);
    const screenWidth = window.innerWidth;

    btn_Sixth_POINTS.classList.remove("active");
    btn_Sixth_POINTS.classList.add("disabled");
    btn_IV_points.classList.add("active");
    const elementsToToggle=document.querySelector(".container_all_of_Grup_cetvrt");
    
    
    

    const value = e.currentTarget;
    const title = value.getAttribute("aria-label");

    if (value) {

    
        toggleDisplay(screenWidth,elementsToToggle,title)
        console.log(value,"title")

        btn_Sixth_POINTS.disabled = true;

        const golovi = dodavanje_golova(GRUPE_VIII);
        console.log(golovi, "golovi sestine");

        Round_of_Sixth_goals(golovi);

        showTitles(title);

        compare_the_goals_of_the_Round_of_Sixth_final(Goals_6_final);
        Team_sorting2(sorted_Sixth_final);

        Sixth_final_points(ROUND_Sixth);
        Grouping_quarters(sorted_Sixth_final);

        console.log(Group_IV, "Group_IV");
        Quarter(Group_IV);
        //proveriSvaDugmadPronašla(groupedTeamsArray, sets_of_teams);
        asdsa(value, Round_III, sets_of_teams3);
    }
});
btn_IV_points.addEventListener("click", function (e) {
    const screenWidth = window.innerWidth;
    btn_IV_points.classList.remove("active");
    btn_IV_points.classList.add("disabled");
    btn_II_points.classList.add("active");
    const elementsToToggle=document.querySelector(".container_all_of_Grup_polu");
    

    
    
    

    const value = e.currentTarget;
    const title = value.getAttribute("aria-label");

    if (value) {

        toggleDisplay(screenWidth,elementsToToggle,title)
        btn_IV_points.disabled = true;
        const golovi = dodavanje_golova(Group_IV);
        console.log(golovi, " golovi Group_IV");

        Quarter_final_goals(golovi);

        showTitles(title);
        compare_the_goals_of_the_Quarter_final(Goals_IV_final);
        Team_sorting3(sorted_IV_finale);

        Quarter_stitches(ROUND_IV);
        Grouping_semi_finals(sorted_IV_finale);
        Semi_finals(Group_II);
        //proveriSvaDugmadPronašla(groupedTeamsArray, sets_of_teams);
        asdsa(value, Round_III, sets_of_teams3);
    }
});
btn_II_points.addEventListener("click", function (e) {
    const screenWidth = window.innerWidth;
    btn_II_points.classList.remove("active");
    btn_II_points.classList.add("disabled");
    btn_FINALE_points.classList.add("active");

    const elementsToToggle=document.querySelector(".container_Play-off_for_third_place")

    

    const value = e.currentTarget;
    const title = value.getAttribute("aria-label");
    console.log(title, " btn_II_points");
    if (value) {


        toggleDisplay(screenWidth,elementsToToggle,title)

        btn_II_points.disabled = true;
        const golovi = dodavanje_golova(Group_II);

        Semi_final_goals(golovi);
        showTitles(title);
        compare_the_goals_of_the_Semi_finals(Goals_II_final);

        Semi_finals_Points(ROUND_FINALE_II);
        select_the_finalists(ROUND_FINALE_II);

        Finale(GRUPA_FINALISATA, GRUPA_TRECE_MESTO);

        const Goal_finalist = dodavanje_golova(GRUPA_FINALISATA);
        const Goal_finalist2 = dodavanje_golova(GRUPA_TRECE_MESTO);
        compare_the_goals_of_the_Third_place(Goal_finalist2);

        compare_the_goals_of_the_Finale(Goal_finalist);
        Sortiranje5(GRUPA_FINALISATA);
        Sortiranje6(GRUPA_TRECE_MESTO);

        //proveriSvaDugmadPronašla(groupedTeamsArray, sets_of_teams);
        asdsa(value, Round_III, sets_of_teams3);
    }
});

btn_FINALE_points.addEventListener("click", function (e) {
    btn_FINALE_points.classList.remove("active");
    btn_II_points.classList.add("disabled");



    const value = e.currentTarget;
    const title = value.getAttribute("aria-label");
    if (value) {
        btn_FINALE_points.disabled = true;

        Finalebodovi(GRUPA_FINALISATA, GRUPA_TRECE_MESTO);
        showTitles(title);
        ///trecemestobodovi(GRUPA_TRECE_MESTO)
        Sortiranje5(sortirano_finale);

        //proveriSvaDugmadPronašla(groupedTeamsArray, sets_of_teams);
        asdsa(value, Round_III, sets_of_teams3);
        changeTitle();
    }
});

window.addEventListener("resize", handleResize);

function handleResize() {
    if (window.innerWidth <= 800) {
        // Pronalaženje svakog "red" div-a
        const redDivs = document.querySelectorAll(".red");
        const redDivs2 = document.querySelectorAll(".blue");

        redDivs.forEach((redDiv) => {
            const timSlov = redDiv.querySelector("#tim_grup_slovo");
            const containerOfResult = redDiv.querySelector(".container_of_result");

            if (timSlov) {
                const textContent = timSlov.textContent;
                if (textContent.length > 2) {
                    timSlov.textContent = textContent.slice(0, 3);
                }
            }
            // Prikazivanje samo prvog div-a unutar .container_of_result
            if (containerOfResult) {
                const divs = containerOfResult.querySelectorAll("div");

                divs.forEach((div, index) => {
                    if (index !== 0) {
                        div.style.display = "none";
                    } else {
                        div.style.display = "block";
                    }
                });
            }
        });
        redDivs2.forEach((redDiv) => {
            const timSlov = redDiv.querySelector("#tim_grup_slovo");
            const containerOfResult = redDiv.querySelector(".container_of_result");

            if (timSlov) {
                const textContent = timSlov.textContent;
                if (textContent.length > 2) {
                    timSlov.textContent = textContent.slice(0, 3);
                }
            }
            if (containerOfResult) {
                const divs = containerOfResult.querySelectorAll("div");

                divs.forEach((div, index) => {
                    if (index !== 0) {
                        div.style.display = "none";
                    } else {
                        div.style.display = "block";
                    }
                });
            }
        });
    } else {
        const divs = document.querySelectorAll(".container_of_result div");
        var elements = document.querySelectorAll("#tim_grup_slovo");

        for (var i = 0; i < sorted_I_round.length; i++) {
            for (var ii = 0; ii < sorted_I_round[i].length; ii++) {
                elements[i * sorted_I_round[i].length + ii].textContent =
                    sorted_I_round[i][ii].ime;
                // elements.textContent = `${sorted_I_round[i][ii].ime}`;
            }
        }

        divs.forEach((div) => {
            div.style.display = "block";
        });
    }
}

function grupisaniTimovi() {
    const grupisaniTimoviSkup = Timovi.reduce((obj, tim) => {
        const grupa = tim.grupa;
        if (!obj.hasOwnProperty(grupa)) {
            obj[grupa] = [];
        }
        obj[grupa].push(tim);
        return obj;
    }, {});
    const noviskup = Object.values(grupisaniTimoviSkup);

    return noviskup;
}
function Round_of_6_grouping(timovi) {
    const grupa1 = [];
    const grupa2 = [];
    const grupa3 = [];
    const grupa4 = [];
    const grupa5 = [];
    const grupa6 = [];
    const grupa7 = [];
    const grupa8 = [];
    for (let i = 0; i < timovi.length; i++) {
        for (let a = 0; a < timovi.length; a++) {
            if (grupa1.length === 0) {
                grupa1.push(timovi[0][0], timovi[1][1]);
            }
            if (grupa2.length === 0) {
                grupa2.push(timovi[2][0], timovi[3][1]);
            }
            if (grupa3.length === 0) {
                grupa3.push(timovi[0][1], timovi[1][0]);
            }
            if (grupa4.length === 0) {
                grupa4.push(timovi[2][1], timovi[3][0]);
            }
            if (grupa5.length === 0) {
                grupa5.push(timovi[4][0], timovi[5][1]);
            }
            if (grupa6.length === 0) {
                grupa6.push(timovi[6][0], timovi[7][1]);
            }
            if (grupa7.length === 0) {
                grupa7.push(timovi[4][1], timovi[5][0]);
            }
            if (grupa8.length === 0) {
                grupa8.push(timovi[6][1], timovi[7][0]);
            }
        }
    }

    GRUPE_VIII.push(
        [...grupa1],
        [...grupa2],
        [...grupa3],
        [...grupa4],
        [...grupa5],
        [...grupa6],
        [...grupa7],
        [...grupa8]
    );
}
function Grouping_quarters(timovi) {
    const grupa1 = [];
    const grupa2 = [];
    const grupa3 = [];
    const grupa4 = [];
    for (let i = 0; i < timovi.length; i++) {
        for (let a = 0; a < timovi.length; a++) {
            if (grupa1.length === 0) {
                grupa1.push(timovi[0][0], timovi[2][0]);
            }
            if (grupa2.length === 0) {
                grupa2.push(timovi[1][0], timovi[3][0]);
            }
            if (grupa3.length === 0) {
                grupa3.push(timovi[6][0], timovi[4][0]);
            }
            if (grupa4.length === 0) {
                grupa4.push(timovi[5][0], timovi[7][0]);
            }
        }
    }

    Group_IV.push([...grupa1], [...grupa2], [...grupa3], [...grupa4]);
}
function Grouping_semi_finals(arr) {
    const prviTreci = [];
    const drugiCetvrti = [];

    if (
        arr.length >= 1 &&
        arr[0].length >= 1 &&
        arr.length >= 3 &&
        arr[2].length >= 1
    ) {
        prviTreci.push(arr[0][0], arr[2][0]); // Prvi i treći element
    }

    if (
        arr.length >= 2 &&
        arr[1].length >= 1 &&
        arr.length >= 4 &&
        arr[3].length >= 1
    ) {
        drugiCetvrti.push(arr[1][0], arr[3][0]); // Drugi i četvrti element
    }

    Group_II.push(prviTreci, drugiCetvrti);

    //console.log(GRUPE_II, 'GRUPISANJE POLUFINALE ZA DRUGO MESO');
}
function Grouping_Finale(arr) {
    arr.forEach((grupa) => {
        const prvaDva = grupa.slice(0, 2);
        const drugaDva = grupa.slice(2, 4);
        GRUPA_FINALISATA.push(JSON.parse(JSON.stringify(prvaDva)));
        GRUPA_TRECE_MESTO.push(JSON.parse(JSON.stringify(drugaDva)));
    });
}

function dodavanje_golova(grupe) {
    const noviTimovi = grupe.map((grupaTimova) => {
        return grupaTimova.map((tim) => {
            const noviTim = { ...tim };
            const goals = Math.floor(Math.random() * 10);
            if (!noviTim.hasOwnProperty("goals")) {
                noviTim.goals = {};
            }

            if (!noviTim.goals.hasOwnProperty("first_round_goals")) {
                noviTim.goals.first_round_goals = [goals];
            } else if (!noviTim.goals.hasOwnProperty("second_round_goals")) {
                noviTim.goals.second_round_goals = [goals];
            } else if (!noviTim.goals.hasOwnProperty("third_round_goals")) {
                noviTim.goals.third_round_goals = [goals];
            } else if (!noviTim.goals.hasOwnProperty("goals_Round_16")) {
                noviTim.goals.goals_Round_16 = [goals];
            } else if (!noviTim.goals.hasOwnProperty("goals_Quarter_finale")) {
                noviTim.goals.goals_Quarter_finale = [goals];
            } else if (!noviTim.goals.hasOwnProperty("goals_Semi_final")) {
                noviTim.goals.goals_Semi_final = [goals];
            } else if (
                (noviTim.goals.hasOwnProperty("goals_Semi_final") &&
                    noviTim.kraj === "finale" &&
                    !noviTim.goals.hasOwnProperty("goals_finale")) ||
                (noviTim.goals.hasOwnProperty("goals_Semi_final") &&
                    noviTim.kraj === "for the third place" &&
                    !noviTim.goals.hasOwnProperty("goals_third_place"))
            ) {
                noviTim.goals[
                    noviTim.kraj === "finale" ? "goals_finale" : "goals_third_place"
                ] = [goals];
            }

            return noviTim;
        });
    });

    console.log(noviTimovi, "NOVI TIMOVI");
    return noviTimovi;
}

function veci(button, skup) {
    var newDiv = document.createElement("div");
    newDiv.classList.add("output-group");
    var foundObj = skup.find((obj) => obj.button === button);
    if (foundObj) {
        return foundObj.timovi;
    }
    return null;
}

function asdsa(value, groupedTeamsArray, sets_of_teams) {
    const buttons = document.querySelectorAll(".name_of_grup_button");
    const button_round_chose = value.getAttribute("aria-label");
    console.log(sets_of_teams,"nesto bez grupe")

    if (button_round_chose === "Grupa") {
        buttons.forEach((button) => {
            button.addEventListener("click", function () {
            
                click_on_Grup(
                    button_round_chose,
                    button,
                    groupedTeamsArray,
                    sets_of_teams
                );
            });
        });
    } else if (button_round_chose === "I") {
        buttons.forEach((button) => {
            button.addEventListener("click", function () {
                click_on_Grup(
                    button_round_chose,
                    button,
                    groupedTeamsArray,
                    sets_of_teams1
                );
                console.log(groupedTeamsArray,sets_of_teams1,"dsad")
            });
        });
    } else if (button_round_chose === "II") {
        buttons.forEach((button) => {
            button.addEventListener("click", function () {
                click_on_Grup(
                    button_round_chose,
                    button,
                    groupedTeamsArray,
                    sets_of_teams2
                );
            });
        });
    } else if (button_round_chose === "III") {
        buttons.forEach((button) => {
            button.addEventListener("click", function () {
                click_on_Grup(
                    button_round_chose,
                    button,
                    groupedTeamsArray,
                    sets_of_teams3
                );
            });
        });
    } else if (button_round_chose === "Round of 16") {
        buttons.forEach((button) => {
            button.addEventListener("click", function () {
                click_on_Grup(
                    button_round_chose,
                    button,
                    groupedTeamsArray,
                    sets_of_teams3
                );
            });
        });
    } else if (button_round_chose === "Semi final") {
        buttons.forEach((button) => {
            button.addEventListener("click", function () {
                click_on_Grup(
                    button_round_chose,
                    button,
                    groupedTeamsArray,
                    sets_of_teams3
                );
            });
        });
    } else if (button_round_chose === "Third place") {
        buttons.forEach((button) => {
            button.addEventListener("click", function () {
                click_on_Grup(
                    button_round_chose,
                    button,
                    groupedTeamsArray,
                    sets_of_teams3
                );
            });
        });
    } else if (button_round_chose === "Final") {
        buttons.forEach((button) => {
            button.addEventListener("click", function () {
                click_on_Grup(
                    button_round_chose,
                    button,
                    groupedTeamsArray,
                    sets_of_teams3
                );
            });
        });
    }
}

function click_on_Grup(button_round_chose, chose_button, groups, sets_of_teams) {
    if (executing) return; 
    executing = true; 

    const stadium = getRandomStadiumImage();
    const button = chose_button.getAttribute("aria-label");

    if (button_round_chose === "Grupa") {
        if (sets_of_teams.length === 0) {
            
            let found = false;
            groups.forEach((group) => {

                
                let foundForButton = false;
                group.forEach((tim) => {
                    if (tim.grupa === button && !foundForButton) {
                        console.log(group,tim,"timovi")
                        
                        foundForButton = true; 
                        const newTeamSet = {
                            button: button,
                            stadium: stadium,
                            firstim: [group[0], group[1]],
                            lasttim: [group[2], group[3]],
                            found: true,
                            executeFunction: function () {
                                createAndAppendElements(
                                    this.firstim,
                                    this.lasttim,
                                    this.stadium
                                );
                                
                                createTable(this.button, group);
                                createCloseButton();
                            },
                        };
                        sets_of_teams.push(newTeamSet);
                        console.log(sets_of_teams,"0")
                        newTeamSet.executeFunction();
                        scrollToFitFinalDiv();
                    }
                });
            });
            
        } else if (!sets_of_teams.some((teamSet) => teamSet.button === button)) {
            let found = false;
            groups.forEach((group) => {
                let foundForButton = false;
                group.forEach((tim) => {
                    if (tim.grupa === button && !foundForButton) {
                        foundForButton = true;
                        const newTeamSet = {
                            button: button,
                            stadium: stadium,
                            firstim: [group[0], group[1]],
                            lasttim: [group[2], group[3]],
                            found: true,
                            executeFunction: function () {
                                createAndAppendElements(
                                    this.firstim,
                                    this.lasttim,
                                    this.stadium
                                );
                                
                                createTable(this.button, group);
                                createCloseButton();
                            },
                        };
                        sets_of_teams.push(newTeamSet);
                        console.log(sets_of_teams,"01")
                        newTeamSet.executeFunction();
                        scrollToFitFinalDiv();
                    }
                });
            });
        } else {
            const chose_group = sets_of_teams.filter(
                (teamSet) => teamSet.button === button
            );
            if (chose_group) {
                chose_group.forEach((group) => {
                    group.executeFunction();
                    scrollToFitFinalDiv();
                });
            }
        }
    } else if (button_round_chose === "I") {
        
        if (sets_of_teams1.length === 0) {
            console.log("true");
            let found = false;
            groups.forEach((group) => {
                
                let foundForButton = false;

                const groupCopy = [...group];
                
                group.forEach((tim) => {
                    if (tim.grupa === button && !foundForButton) {
                        foundForButton = true;
                        const newTeamSet = {
                            button: button,
                            stadium: stadium,
                            firstim: [group[0], group[1]],
                            lasttim: [group[2], group[3]],
                            found: true,
                            executeFunction: function () {
                                createAndAppendElements(
                                    this.firstim,
                                    this.lasttim,
                                    this.stadium
                                );
                                sortTeamsInGroup(groupCopy)
                                createTable(this.button, groupCopy);
                                createCloseButton();
                            },
                        };
                        sets_of_teams1.push(newTeamSet);
                        newTeamSet.executeFunction();
                        scrollToFitFinalDiv();
                        
                    }
                });
            });
        } else if (!sets_of_teams1.some((teamSet) => teamSet.button === button)) {
            let found = false;
            groups.forEach((group) => {
                let foundForButton = false;
                const groupCopy = [...group];
                group.forEach((tim) => {
                    if (tim.grupa === button && !foundForButton) {
                        foundForButton = true;
                        const newTeamSet = {
                            button: button,
                            stadium: stadium,
                            firstim: [group[0], group[1]],
                            lasttim: [group[2], group[3]],
                            found: true,
                            executeFunction: function () {
                                createAndAppendElements(
                                    this.firstim,
                                    this.lasttim,
                                    this.stadium
                                );
                                sortTeamsInGroup(groupCopy)
                                createTable(this.button, groupCopy);
                                createCloseButton();
                            },
                        };
                        sets_of_teams1.push(newTeamSet);
                        
        
                        newTeamSet.executeFunction();
                        scrollToFitFinalDiv();
                    }
                });
            });
        
        } else {
            const chose_group = sets_of_teams1.filter(
                (teamSet) => teamSet.button === button
            );
            if (chose_group) {
                chose_group.forEach((group) => {
                    group.executeFunction();
                    scrollToFitFinalDiv();
                });
            }
        }
    } else if (button_round_chose === "II") {
        
        if (sets_of_teams2.length === 0) {
            let found = false;
            groups.forEach((group) => {
                let foundForButton = false;
                const groupCopy = [...group];
                group.forEach((tim) => {
                    if (tim.grupa === button && !foundForButton) {
                        foundForButton = true;
                        const newTeamSet = {
                            button: button,
                            stadium: stadium,
                            firstim: [group[0], group[2]],
                            lasttim: [group[1], group[3]],
                            found: true,
                            executeFunction: function () {
                                createAndAppendElements(
                                    this.firstim,
                                    this.lasttim,
                                    this.stadium
                                );
                                sortTeamsInGroup(groupCopy)
                                createTable(this.button, groupCopy);
                                createCloseButton();
                            },
                        };
                        sets_of_teams2.push(newTeamSet);
                        
                        newTeamSet.executeFunction();
                        scrollToFitFinalDiv();
                    }
                });
            });
            
        } else if (!sets_of_teams2.some((teamSet) => teamSet.button === button)) {
            let found = false;
            groups.forEach((group) => {
                let foundForButton = false;
                const groupCopy = [...group];
                group.forEach((tim) => {
                    if (tim.grupa === button && !foundForButton) {
                        foundForButton = true;
                        const newTeamSet = {
                            button: button,
                            stadium: stadium,
                            firstim: [group[0], group[2]],
                            lasttim: [group[1], group[3]],
                            found: true,
                            executeFunction: function () {
                                createAndAppendElements(
                                    this.firstim,
                                    this.lasttim,
                                    this.stadium
                                );
                                sortTeamsInGroup(groupCopy)
                                createTable(this.button, groupCopy);
                                createCloseButton();
                            },
                        };
                        sets_of_teams2.push(newTeamSet);
                        
                        newTeamSet.executeFunction();
                        scrollToFitFinalDiv();
                    }
                });
            });
            
        } else {
            const chose_group = sets_of_teams2.filter(
                (teamSet) => teamSet.button === button
            );
            if (chose_group) {
                chose_group.forEach((group) => {
                    group.executeFunction();
                    scrollToFitFinalDiv();
                });
            }
        }
    } else if (button_round_chose === "III") {
        if (sets_of_teams3.length === 0) {
            let found = false;
            groups.forEach((group) => {

                let foundForButton = false;
                const groupCopy = [...group];

                group.forEach((tim) => {
                    if (tim.grupa === button && !foundForButton) {
                        foundForButton = true;
                        const newTeamSet = {
                            button: button,
                            stadium: stadium,
                            firstim: [group[0], group[3]],
                            lasttim: [group[1], group[2]],
                            found: true,
                            executeFunction: function () {
                                createAndAppendElements(
                                    this.firstim,
                                    this.lasttim,
                                    this.stadium
                                );
                                sortTeamsInGroup(groupCopy)
                                createTable(this.button, groupCopy);
                                createCloseButton();
                            },
                        };
                        sets_of_teams3.push(newTeamSet);
                        
                        newTeamSet.executeFunction();
                        scrollToFitFinalDiv();
                    }
                });
            });
            
        } else if (!sets_of_teams3.some((teamSet) => teamSet.button === button)) {
            let found = false;
            groups.forEach((group) => {
                let foundForButton = false;
                const groupCopy = [...group];
                group.forEach((tim) => {
                    if (tim.grupa === button && !foundForButton) {
                        foundForButton = true;
                        const newTeamSet = {
                            button: button,
                            stadium: stadium,
                            firstim: [group[0], group[3]],
                            lasttim: [group[1], group[2]],
                            found: true,
                            executeFunction: function () {
                                createAndAppendElements(
                                    this.firstim,
                                    this.lasttim,
                                    this.stadium
                                );
                                sortTeamsInGroup(groupCopy)
                                createTable(this.button, groupCopy);
                                createCloseButton();
                            },
                        };
                        sets_of_teams3.push(newTeamSet);
                        
                    
                        newTeamSet.executeFunction();
                        scrollToFitFinalDiv();
                    }
                });
            });
        } else {
            const chose_group = sets_of_teams3.filter(
                (teamSet) => teamSet.button === button
            );
            if (chose_group) {
                chose_group.forEach((group) => {
                    group.executeFunction();
                    scrollToFitFinalDiv();
                });
            }
        }
    }
}

function createAndAppendElements(firstim, lasttim, stadium) {
    const container_all_of_Grup = document.querySelector(".container_finale");

    var containerOfGruop = document.createElement("div");
    containerOfGruop.classList.add("container_of_gruop_info");

    var containerOfTimsFirst = document.createElement("div");
    containerOfTimsFirst.classList.add("container_of_tims_info");

    var stadiumDiv1 = document.createElement("div");
    stadiumDiv1.classList.add("output_stadium");
    var stadiumImg1 = document.createElement("img");
    stadiumImg1.src = stadium[0].slika;
    var stadiumName1 = document.createElement("p");
    stadiumName1.textContent = stadium[0].ime;
    stadiumDiv1.append(stadiumImg1, stadiumName1);

    var stadiumDiv2 = document.createElement("div");
    stadiumDiv2.classList.add("output_stadium");
    var stadiumImg2 = document.createElement("img");
    stadiumImg2.src = stadium[1].slika;
    var stadiumName2 = document.createElement("p");
    stadiumName2.textContent = stadium[1].ime;
    stadiumDiv2.append(stadiumImg2, stadiumName2);

    firstim.slice(0, 2).forEach((tim) => {
        var containerOfTim = document.createElement("div");
        containerOfTim.classList.add("container_of_tim_info");

        var outputTim = document.createElement("div");
        outputTim.classList.add("output_tim");

        var timImage = document.createElement("img");
        timImage.src = tim.slika;
        outputTim.appendChild(timImage);

        var timName = document.createElement("p");
        timName.textContent = tim.ime;
        outputTim.appendChild(timName);

        containerOfTim.appendChild(outputTim);

        var divBodovi = document.createElement("div");
        divBodovi.classList.add("div_bodovi");
        containerOfTim.appendChild(divBodovi);



        if (tim.goals ) {
        
            if (tim.goals.first_round_goals &&  !tim.goals.second_round_goals && !tim.goals.third_round_goals) {
                divBodovi.textContent = tim.goals.first_round_goals;
                console.log("dugme 1")
            } else if (tim.goals.second_round_goals && tim.goals.first_round_goals && !tim.goals.third_round_goals) {
                divBodovi.textContent = tim.goals.second_round_goals;
                console.log("dugme 2")
            } else if (tim.goals.second_round_goals && tim.goals.first_round_goals && tim.goals.third_round_goals) {
                divBodovi.textContent = tim.goals.third_round_goals;
                console.log("dugme 3")
            } else {
                divBodovi.textContent = "0";
            }
        } else {
            divBodovi.textContent = "0";
        }

        containerOfTim.appendChild(divBodovi);

        var img = document.createElement("img");
        img.src = tim.bodovi;

        containerOfTimsFirst.append(stadiumDiv1, containerOfTim);
    });

    containerOfGruop.appendChild(containerOfTimsFirst);

    var containerOfTimsLast = document.createElement("div");
    containerOfTimsLast.classList.add("container_of_tims_info");

    
    lasttim.slice(0, 2).forEach((tim) => {
        var containerOfTim = document.createElement("div");
        containerOfTim.classList.add("container_of_tim_info");

        var outputTim = document.createElement("div");
        outputTim.classList.add("output_tim");

        var timImage = document.createElement("img");
        timImage.src = tim.slika;
        outputTim.appendChild(timImage);

        var timName = document.createElement("p");
        timName.textContent = tim.ime;
        outputTim.appendChild(timName);

        containerOfTim.appendChild(outputTim);

        var divBodovi = document.createElement("div");
        divBodovi.classList.add("div_bodovi");



        
        if (tim.goals ) {
        
            if (tim.goals.first_round_goals &&  !tim.goals.second_round_goals && !tim.goals.third_round_goals) {
                divBodovi.textContent = tim.goals.first_round_goals;
                console.log("dugme 1")
            } else if (tim.goals.second_round_goals && tim.goals.first_round_goals && !tim.goals.third_round_goals) {
                divBodovi.textContent = tim.goals.second_round_goals;
                console.log("dugme 2")
            } else if (tim.goals.second_round_goals && tim.goals.first_round_goals && tim.goals.third_round_goals) {
                divBodovi.textContent = tim.goals.third_round_goals;
                console.log("dugme 3")
            } else {
                divBodovi.textContent = "0";
            }
        } else {
            divBodovi.textContent = "0";
        }

        containerOfTim.appendChild(divBodovi);

        containerOfTimsLast.append(stadiumDiv2, containerOfTim);
    });

    containerOfGruop.appendChild(containerOfTimsLast);

    document.querySelector(".info_tims").appendChild(containerOfGruop);

}
function createTable(group, groups) {
    const containerOfTable = document.createElement("div");
    containerOfTable.classList.add("container_of_table");

    const table = document.createElement("table");
    table.classList.add("table_tims");

    for (var i = 0; i < 5; i++) {
        const row = document.createElement("tr");

        for (var j = 0; j < 9; j++) {
            const cell = document.createElement("td");
            cell.classList.add("table_td");

            if (i === 0) {
                // If it's the first row
                switch (j) {
                    case 0:
                        cell.textContent = groups[i].grupa;
                        break;
                    case 1:
                        cell.textContent = "P";
                        break;
                    case 2:
                        cell.textContent = "W";
                        break;
                    case 3:
                        cell.textContent = "D";
                        break;
                    case 4:
                        cell.textContent = "L";
                        break;
                    case 5:
                        cell.textContent = "GF";
                        break;
                    case 6:
                        cell.textContent = "GA";
                        break;
                    case 7:
                        cell.textContent = "GD";
                        break;
                    case 8:
                        cell.textContent = "Pts";
                        break;
                    default:
                        cell.textContent = group;
                        cell.style.fontSize = "32px";
                        break;
                }
            } else {
                if (j === 0) {
                    if (i > 0 && i <= groups.length) {
                        const currentGroup = groups[i - 1];
                        const cellContent = document.createElement("div");
                        cellContent.classList.add("flex-container");

                        const groupNumber = document.createElement("span");
                        groupNumber.textContent = i + ".";
                        cellContent.appendChild(groupNumber);

                        const groupImage = document.createElement("img");
                        groupImage.src = currentGroup.slika;
                        groupImage.style.width = "50px";
                        groupImage.style.height = "auto";
                        cellContent.appendChild(groupImage);

                        const groupName = document.createElement("p");
                        groupName.textContent = currentGroup.ime;
                        cellContent.appendChild(groupName);

                        cell.appendChild(cellContent);
                    } else {
                        cell.textContent = "";
                    }
                } else if (i > 0 && i <= groups.length) {
                    const currentGroup = groups[i - 1];
                    switch (j) {
                        case 1:
                            cell.textContent = currentGroup.info.P;
                            break;
                        case 2:
                            cell.textContent = currentGroup.info.W;
                            break;
                        case 3:
                            cell.textContent = currentGroup.info.D;
                            break;
                        case 4:
                            cell.textContent = currentGroup.info.L;
                            break;
                        case 5:
                            cell.textContent = currentGroup.info.GF;
                            break;
                        case 6:
                            cell.textContent = currentGroup.info.GA;
                            break;
                        case 7:
                            cell.textContent = currentGroup.info.GD;
                            break;
                        case 8:
                            cell.textContent = currentGroup.info.Pts;
                            break;
                        default:
                            cell.textContent = "";
                            break;
                    }
                } else {
                    cell.textContent = "";
                }
            }

            row.appendChild(cell);
        }
        table.appendChild(row);
    }

    containerOfTable.appendChild(table);
    document.querySelector(".info_tims").appendChild(containerOfTable);
    //document.body.appendChild(containerOfTable);
}

function teamplayers(timovi) {
    var isFunctionActive = false;

    var containerElement = document.querySelector(".info_players");

    var timDivs = document.querySelectorAll("#tim_grup_img");
    for (var i = 0; i < timDivs.length; i++) {
        timDivs[i].addEventListener("click", function (e) {
            if (!isFunctionActive) {
                isFunctionActive = true;
                var noviDiv = document.createElement("div");
                noviDiv.classList.add("container-tim-players");

                noviDiv.addEventListener("DOMNodeInserted", function () {
                    scrollToFitFinalDiv_players();
                });

                const clickedSrc = e.currentTarget.alt;
                for (var i = 0; i < timovi.length; i++) {
                    if (timovi[i].ime === clickedSrc) {
                        var timDiv = document.createElement("div");
                        timDiv.className = "tim";
                        var categor_button = document.createElement("button");
                        categor_button.classList.add("button_category");
                        categor_button.textContent = "X";
                        noviDiv.appendChild(categor_button);
                        //<i class="fa-sharp fa-light fa-rectangle-xmark"></i>
                        categor_button.addEventListener("click", function (event) {
                            if (event.target) {
                                noviDiv.style.display = "none";
                                isFunctionActive = false;
                            }
                        });

                        var slika = document.createElement("img");
                        slika.classList.add("img-flag")
                        slika.src = timovi[i].slika;

                        var ime = document.createElement("p");
                        ime.classList.add("p-ime")
                        var imeText = timovi[i].ime.substring(0, 3).toUpperCase();
                        
                        if (window.innerWidth < 600) {
                            ime.textContent = imeText;
                        } else {
                            ime.textContent = timovi[i].ime;
                        }

                        timDiv.appendChild(slika);
                        timDiv.appendChild(ime);
                        timDiv.appendChild(categor_button);
                        noviDiv.appendChild(timDiv);

                        var goalkeeperDiv1 = document.createElement("div");
                        goalkeeperDiv1.className = "container-goalkeeper";

                        var defenderDiv1 = document.createElement("div");
                        defenderDiv1.className = "container-defender";

                        var forwardDiv1 = document.createElement("div");
                        forwardDiv1.className = "container-forward";

                        var midfielderDiv1 = document.createElement("div");
                        midfielderDiv1.className = "container-midfielder";

                        var managerDiv1 = document.createElement("div");
                        managerDiv1.className = "container-manager";

                        noviDiv.append(
                            goalkeeperDiv1,
                            defenderDiv1,
                            forwardDiv1,
                            midfielderDiv1,
                            managerDiv1
                        );

                        var goalkeepers = timovi[i].players.Goalkeeper;

                        for (var j = 0; j < goalkeepers.length; j++) {
                            var flagImage = document.createElement("img");
                            flagImage.classList.add("flagImage");
                            flagImage.src = timovi[i].slika;

                            var goalkeeperDiv = document.createElement("div");
                            goalkeeperDiv.className = "goalkeeper";
                            var goalkeeperImage = document.createElement("img");
                            goalkeeperImage.classList.add("players");
                            goalkeeperImage.src = goalkeepers[j].slika;

                            var goalkeeperName = document.createElement("p");
                            goalkeeperName.textContent = goalkeepers[j].ime;

                            var goalkeeper_categories = document.createElement("p");
                            goalkeeper_categories.classList.add("category_players");
                            goalkeeper_categories.textContent = "GOLKEEPER";

                            goalkeeperDiv.appendChild(flagImage);
                            goalkeeperDiv.appendChild(goalkeeperImage);
                            goalkeeperDiv.appendChild(goalkeeperName);
                            goalkeeperDiv.appendChild(goalkeeper_categories);
                            goalkeeperDiv1.appendChild(goalkeeperDiv);
                            noviDiv.appendChild(goalkeeperDiv1);
                        }

                        var defender = timovi[i].players.Defender;
                        for (var j = 0; j < defender.length; j++) {
                            var flagImage = document.createElement("img");
                            flagImage.classList.add("flagImage");
                            flagImage.src = timovi[i].slika;

                            var defenderDiv = document.createElement("div");
                            defenderDiv.className = "defender ";
                            var defenderImage = document.createElement("img");
                            defenderImage.classList.add("players");
                            defenderImage.src = defender[j].slika;

                            var defenderName = document.createElement("p");
                            defenderName.textContent = defender[j].ime;

                            var defender_categories = document.createElement("p");
                            defender_categories.classList.add("category_players");
                            defender_categories.textContent = "DEFENDER";

                            defenderDiv.appendChild(flagImage);
                            defenderDiv.appendChild(defenderImage);
                            defenderDiv.appendChild(defenderName);
                            defenderDiv.appendChild(defender_categories);
                            defenderDiv1.appendChild(defenderDiv);
                            noviDiv.appendChild(defenderDiv1);
                        }
                        var forward = timovi[i].players.Forward;
                        for (var j = 0; j < forward.length; j++) {
                            var flagImage = document.createElement("img");
                            flagImage.classList.add("flagImage");
                            flagImage.src = timovi[i].slika;

                            var forwardDiv = document.createElement("div");
                            forwardDiv.className = "forward";
                            var forwardImage = document.createElement("img");
                            forwardImage.classList.add("players");
                            forwardImage.src = forward[j].slika;

                            var forwardName = document.createElement("p");
                            forwardName.textContent = forward[j].ime;

                            var forward_categories = document.createElement("p");
                            forward_categories.classList.add("category_players");
                            forward_categories.textContent = "FORWARD";

                            forwardDiv.appendChild(flagImage);
                            forwardDiv.appendChild(forwardImage);
                            forwardDiv.appendChild(forwardName);
                            forwardDiv.appendChild(forward_categories);
                            forwardDiv1.appendChild(forwardDiv);
                            noviDiv.appendChild(forwardDiv1);
                        }
                        var midfielder = timovi[i].players.Midfielder;
                        for (var j = 0; j < midfielder.length; j++) {
                            var flagImage = document.createElement("img");
                            flagImage.classList.add("flagImage");
                            flagImage.src = timovi[i].slika;

                            var midfielderDiv = document.createElement("div");
                            midfielderDiv.className = "midfielder";
                            var midfielderImage = document.createElement("img");
                            midfielderImage.classList.add("players");
                            midfielderImage.src = midfielder[j].slika;
                            console.log(midfielderImage, "slike");
                            var midfielderName = document.createElement("p");
                            midfielderName.textContent = midfielder[j].ime;

                            var midfielder_categories = document.createElement("p");
                            midfielder_categories.classList.add("category_players");
                            midfielder_categories.textContent = "MIDFIELDER";

                            midfielderDiv.appendChild(flagImage);
                            midfielderDiv.appendChild(midfielderImage);
                            midfielderDiv.appendChild(midfielderName);
                            midfielderDiv.appendChild(midfielder_categories);
                            midfielderDiv1.appendChild(midfielderDiv);
                            noviDiv.appendChild(midfielderDiv1);
                        }
                        var manager = timovi[i].players.Manager;
                        for (var j = 0; j < manager.length; j++) {
                            var flagImage = document.createElement("img");
                            flagImage.classList.add("flagImage");
                            flagImage.src = timovi[i].slika;

                            var managerDiv = document.createElement("div");
                            managerDiv.className = "manager";
                            var managerImage = document.createElement("img");
                            managerImage.classList.add("players");
                            managerImage.src = manager[j].slika;
                            console.log(managerImage, "slike");
                            var managerName = document.createElement("p");
                            managerName.textContent = manager[j].ime;

                            var manager_categories = document.createElement("p");
                            manager_categories.classList.add("category_players");
                            manager_categories.textContent = "MANAGER";

                            managerDiv.appendChild(flagImage);
                            managerDiv.appendChild(managerImage);
                            managerDiv.appendChild(managerName);
                            managerDiv.appendChild(manager_categories);
                            managerDiv1.appendChild(managerDiv);
                            noviDiv.appendChild(managerDiv1);
                        }
                        containerElement.appendChild(noviDiv);
                        //containerElement.parentNode.insertBefore(noviDiv, containerElement.nextSibling);
                    }
                }
            }
        });
    }
}
function createCloseButton() {
    const element = document.querySelector(".container_of_gruop_info");
    const closeButton = document.createElement("button");
    closeButton.textContent = "Close";
    closeButton.classList.add("close-button");
    element.appendChild(closeButton);

    closeButton.addEventListener("click", () => {
        // Pronalazimo prozore koje želimo zatvoriti
        const containerGroup = document.querySelector(".container_of_gruop_info");
        const containerTable = document.querySelector(".container_of_table");
        const buttons = document.querySelectorAll(".name_of_grup_button");

        // Provera da li su pronađeni
        if (containerGroup && containerTable) {
            containerGroup.remove();
            containerTable.remove(); // Uklanjamo prozor grupa

            executing = false;
        }
    });
}
function scrollToFitFinalDiv() {
    const containerOfGruop = document.querySelector(".container_of_gruop_info");
    if (containerOfGruop) {
        containerOfGruop.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
        console.log("nismo pronasli ni jedan ");
    }
}

function scrollToFitFinalDiv_players() {
    const containerOfplayers = document.querySelector(".container-tim-players");
    if (containerOfplayers) {
        containerOfplayers.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
        console.log("nismo pronasli ni jedan ");
    }
}

function getRandomStadiumImage() {
    // Definišite grupu slika stadiona (možete koristiti linkove ka slikama)
    const stadiumImages = [
        { id: 1, ime: "Ahmad", slika: "NEW STADIUM/ahmad.png" },
        { id: 2, ime: "Albayt", slika: "NEW STADIUM/albayt.png" },
        { id: 3, ime: "Aljanoub", slika: "NEW STADIUM/aljanoub.png" },
        { id: 4, ime: "Althumama", slika: "NEW STADIUM/althumama.png" },
        { id: 5, ime: "Educationcity", slika: "NEW STADIUM/educationcity.png" },
        { id: 6, ime: "Khalifa", slika: "NEW STADIUM/khalifa.png" },
        { id: 7, ime: "Lusail", slika: "NEW STADIUM/lusail.png" },
        { id: 8, ime: "Stadium974", slika: "NEW STADIUM/stadium974.png" },
        // Dodajte ostale putanje ka slikama stadiona koje želite
    ];

    // Generišemo nasumični indeks od 0 do dužine niza slika stadiona
    const randomIndex1 = Math.floor(Math.random() * stadiumImages.length);
    const randomIndex2 = Math.floor(Math.random() * stadiumImages.length);

    // Vraćamo nasumično izabranu sliku stadiona
    return [stadiumImages[randomIndex1], stadiumImages[randomIndex2]];
}

function First_round_goals(GRUPA) {
    for (const grupe of GRUPA) {
        for (let i = 0; i < grupe.length; i++) {
            const tim = grupe[i];
            const goals = tim.goals;

            if (
                !tim.hasOwnProperty("first_round_halftime") &&
                !tim.hasOwnProperty("second_round_halftime") &&
                !tim.hasOwnProperty("third_round_halftime")
            ) {
                tim.first_round_halftime = {
                    halftime_first: [],
                    halftime_second: [],
                };
                if (goals.first_round_goals.includes(0)) {
                    tim.first_round_halftime.halftime_first.push({ gol: 0, min: -1 });
                    tim.first_round_halftime.halftime_second.push({ gol: 0, min: -1 });
                } else {
                    if (goals.first_round_goals > 0) {
                        for (let j = 1; j <= goals.first_round_goals; j++) {
                            const slucajniBroj = Math.floor(Math.random() * 2) + 1;
                            if (slucajniBroj === 1) {
                                const minuti_prvog = Math.floor(Math.random() * 45) + 1;
                                tim.first_round_halftime.halftime_first.push({
                                    gol: 1,
                                    min: minuti_prvog,
                                });
                            } else if (slucajniBroj === 2) {
                                const minuti_drugo =
                                    Math.floor(Math.random() * (90 - 45 + 1)) + 45;
                                tim.first_round_halftime.halftime_second.push({
                                    gol: 1,
                                    min: minuti_drugo,
                                });
                            }
                        }
                    }
                }
            }
        }
        Round_I_goals.push(JSON.parse(JSON.stringify(grupe)));
    }
}
function Second_round_goals(GRUPA) {
    for (const grupe of GRUPA) {
        for (let i = 0; i < grupe.length; i++) {
            const tim = grupe[i];
            const goals = tim.goals;

            if (
                tim.hasOwnProperty("first_halftime") &&
                !tim.hasOwnProperty("second_round_halftime") &&
                !tim.hasOwnProperty("third_round _halftime")
            ) {
                tim.second_round_halftime = {
                    halftime_first: [],
                    halftime_second: [],
                };

                if (goals.second_round_goals.includes(0)) {
                    tim.second_round_halftime.halftime_first.push({ gol: 0, min: -1 });
                    tim.second_round_halftime.halftime_second.push({ gol: 0, min: -1 });
                } else {
                    if (goals.second_round_goals > 0) {
                        for (let j = 1; j <= goals.second_round_goals; j++) {
                            const slucajniBroj = Math.floor(Math.random() * 2) + 1;
                            if (slucajniBroj === 1) {
                                const minuti_prvog = Math.floor(Math.random() * 45) + 1;
                                tim.second_round_halftime.halftime_first.push({
                                    gol: 1,
                                    min: minuti_prvog,
                                });
                            } else if (slucajniBroj === 2) {
                                const minuti_drugo =
                                    Math.floor(Math.random() * (90 - 45 + 1)) + 45;
                                tim.second_round_halftime.halftime_second.push({
                                    gol: 1,
                                    min: minuti_drugo,
                                });
                            }
                        }
                    }
                }
            }
        }
        Round_II_goals.push(JSON.parse(JSON.stringify(grupe)));
    }
}
function Third_second_round_goals(GRUPA) {
    for (const grupe of GRUPA) {
        for (let i = 0; i < grupe.length; i++) {
            const tim = grupe[i];
            const goals = tim.golovi;
            if (
                tim.hasOwnProperty("first_round_halftime") &&
                tim.hasOwnProperty("second_round_halftime") &&
                !tim.hasOwnProperty("third_round_halftime")
            ) {
                tim.third_round_halftime = {
                    halftime_first: [],
                    halftime_second: [],
                };

                if (goals.third_round_goals.includes(0)) {
                    tim.third_round_halftime.halftime_first.push({ gol: 0, min: -1 });
                    tim.third_round_halftime.halftime_second.push({ gol: 0, min: -1 });
                } else {
                    if (goals.third_round_goals > 0) {
                        for (let j = 1; j <= goals.third_round_goals; j++) {
                            const slucajniBroj = Math.floor(Math.random() * 2) + 1;
                            if (slucajniBroj === 1) {
                                const minuti_prvog = Math.floor(Math.random() * 45) + 1;
                                tim.third_round_halftime.halftime_first.push({
                                    gol: 1,
                                    min: minuti_prvog,
                                });
                            } else if (slucajniBroj === 2) {
                                const minuti_drugo =
                                    Math.floor(Math.random() * (90 - 45 + 1)) + 45;
                                tim.third_round_halftime.halftime_second.push({
                                    gol: 1,
                                    min: minuti_drugo,
                                });
                            }
                        }
                    }
                }
            }
        }
        Round_III_goals.push(JSON.parse(JSON.stringify(grupe)));
    }
}
function Round_of_Sixth_goals(GRUPA) {
    console.log(GRUPA, "novo");

    for (const grupe of GRUPA) {
        for (let i = 0; i < grupe.length; i++) {
            const tim = grupe;
            console.log(tim, "tim1");

            if (
                tim.hasOwnProperty("third_round_halftime") &&
                !tim.hasOwnProperty("Round_of_16_halftime")
            ) {
                tim.Round_of_16_halftime = {
                    poluvreme1: [],
                    poluvreme2: [],
                };

                if (tim.goals.goals_Round_16.includes(0)) {
                    tim.Round_of_16_halftime.poluvreme1.push({ gol: 0, min: -1 });
                    tim.Round_of_16_halftime.poluvreme2.push({ gol: 0, min: -1 });
                } else {
                    if (tim.goals.goals_Round_16 > 0) {
                        for (let j = 1; j <= tim.goals.goals_Round_16; j++) {
                            const slucajniBroj = Math.floor(Math.random() * 2) + 1;
                            if (slucajniBroj === 1) {
                                const minuti_prvog = Math.floor(Math.random() * 45) + 1;
                                tim.Round_of_16_halftime.poluvreme1.push({
                                    gol: 1,
                                    min: minuti_prvog,
                                });
                            } else if (slucajniBroj === 2) {
                                const minuti_drugo =
                                    Math.floor(Math.random() * (90 - 45 + 1)) + 45;
                                tim.Round_of_16_halftime.poluvreme2.push({
                                    gol: 1,
                                    min: minuti_drugo,
                                });
                            }
                        }
                    }
                }
            }
        }
        Goals_6_final.push(grupe);
    }
}
function Quarter_final_goals(GRUPA) {
    console.log(GRUPA, " Quarter_final_goals");

    for (const grupe of GRUPA) {
        for (let i = 0; i < grupe.length; i++) {
            const tim = grupe;

            if (
                tim.hasOwnProperty("Round_of_16_halftime") &&
                !tim.hasOwnProperty("Quarter_finale_halftimee")
            ) {
                tim.Quarter_finale_halftimee = {
                    poluvreme1: [],
                    poluvreme2: [],
                };

                if (tim.goals_Quarter_finale.includes(0)) {
                    tim.Quarter_finale_halftimee.poluvreme1.push({ gol: 0, min: -1 });
                    tim.Quarter_finale_halftimee.poluvreme2.push({ gol: 0, min: -1 });
                } else {
                    if (tim.goals_Quarter_finale > 0) {
                        for (let j = 1; j <= golovi.goals_Quarter_finale; j++) {
                            const slucajniBroj = Math.floor(Math.random() * 2) + 1;
                            if (slucajniBroj === 1) {
                                const minuti_prvog = Math.floor(Math.random() * 45) + 1;
                                tim.Quarter_finale_halftimee.poluvreme1.push({
                                    gol: 1,
                                    min: minuti_prvog,
                                });
                            } else if (slucajniBroj === 2) {
                                const minuti_drugo =
                                    Math.floor(Math.random() * (90 - 45 + 1)) + 45;
                                tim.Quarter_finale_halftimee.poluvreme2.push({
                                    gol: 1,
                                    min: minuti_drugo,
                                });
                            }
                        }
                    }
                }
            }
        }
        Goals_IV_final.push(grupe);
    }
}
function Semi_final_goals(GRUPA) {
    for (const grupe of GRUPA) {
        for (let i = 0; i < grupe.length; i++) {
            const tim = grupe;

            if (
                tim.hasOwnProperty("Quarter_finale_halftimee") &&
                !tim.hasOwnProperty("Semi_final_halftime")
            ) {
                tim.Semi_final_halftime = {
                    poluvreme1: [],
                    poluvreme2: [],
                };

                if (tim.goals_Semi_finale.includes(0)) {
                    tim.Semi_final_halftime.poluvreme1.push({ gol: 0, min: -1 });
                    tim.Semi_final_halftime.poluvreme2.push({ gol: 0, min: -1 });
                } else {
                    if (tim.goals_Semi_finale > 0) {
                        for (let j = 1; j <= golovi.goals_Semi_finale; j++) {
                            const slucajniBroj = Math.floor(Math.random() * 2) + 1;
                            if (slucajniBroj === 1) {
                                const minuti_prvog = Math.floor(Math.random() * 45) + 1;
                                tim.Semi_final_halftime.poluvreme1.push({
                                    gol: 1,
                                    min: minuti_prvog,
                                });
                            } else if (slucajniBroj === 2) {
                                const minuti_drugo =
                                    Math.floor(Math.random() * (90 - 45 + 1)) + 45;
                                tim.Semi_final_halftime.poluvreme2.push({
                                    gol: 1,
                                    min: minuti_drugo,
                                });
                            }
                        }
                    }
                }
            }
        }
        Goals_II_final.push(grupe);
    }
}
function Finale_goals(GRUPA) {
    for (const grupe of GRUPA) {
        for (let i = 0; i < grupe.length; i++) {
            const tim = grupe;
            if (
                tim.hasOwnProperty("Semi_final_halftime") &&
                !tim.hasOwnProperty("Final_halftime")
            ) {
                tim.Final_halftime = {
                    poluvreme1: [],
                    poluvreme2: [],
                };

                if (tim.goals_finale.includes(0)) {
                    tim.Finale_poluvreme.poluvreme1.push({ gol: 0, min: -1 });
                    tim.Finale_poluvreme.poluvreme2.push({ gol: 0, min: -1 });
                } else {
                    if (tim.goals_finale > 0) {
                        for (let j = 1; j <= golovi.goals_finale; j++) {
                            const slucajniBroj = Math.floor(Math.random() * 2) + 1;
                            if (slucajniBroj === 1) {
                                const minuti_prvog = Math.floor(Math.random() * 45) + 1;
                                tim.Final_halftime.poluvreme1.push({
                                    gol: 1,
                                    min: minuti_prvog,
                                });
                            } else if (slucajniBroj === 2) {
                                const minuti_drugo =
                                    Math.floor(Math.random() * (90 - 45 + 1)) + 45;
                                tim.Final_halftime.poluvreme2.push({
                                    gol: 1,
                                    min: minuti_drugo,
                                });
                            }
                        }
                    }
                }
            }
        }
        Goals_final.push(grupe);
    }
}
function third_place_goals(GRUPA) {
    for (const grupe of GRUPA) {
        for (let i = 0; i < grupe.length; i++) {
            const tim = grupe;
            if (
                tim.hasOwnProperty("Semi_final_halftime") &&
                !tim.hasOwnProperty("third_place_halftime")
            ) {
                tim.third_place_halftime = {
                    poluvreme1: [],
                    poluvreme2: [],
                };

                if (tim.goals_third_place.includes(0)) {
                    tim.trece_mesto_poluvreme.poluvreme1.push({ gol: 0, min: -1 });
                    tim.trece_mesto_poluvreme.poluvreme2.push({ gol: 0, min: -1 });
                } else {
                    if (tim.goals_third_place > 0) {
                        for (let j = 1; j <= golovi.goals_third_place; j++) {
                            const slucajniBroj = Math.floor(Math.random() * 2) + 1;
                            if (slucajniBroj === 1) {
                                const minuti_prvog = Math.floor(Math.random() * 45) + 1;
                                tim.third_place_halftime.poluvreme1.push({
                                    gol: 1,
                                    min: minuti_prvog,
                                });
                            } else if (slucajniBroj === 2) {
                                const minuti_drugo =
                                    Math.floor(Math.random() * (90 - 45 + 1)) + 45;
                                tim.third_place_halftime.poluvreme2.push({
                                    gol: 1,
                                    min: minuti_drugo,
                                });
                            }
                        }
                    }
                }
            }
        }
        Goals_third_place.push(grupe);
    }
}

//ispravio
function compare_the_goals_of_the_First_round(noviTimovi) {
    for (let i = 0; i < noviTimovi.length; i++) {
        const prvi = noviTimovi[i][0];
        const drugi = noviTimovi[i][1];
        const treci = noviTimovi[i][2];
        const cetvrti = noviTimovi[i][3];

        if (prvi.goals.first_round_goals > drugi.goals.first_round_goals) {
            prvi.info.P = 1;
            drugi.info.P = 1;

            prvi.info.W = 1;
            drugi.info.W = 0;

            prvi.info.D = 0;
            drugi.info.D = 0;

            prvi.info.L = 0;
            drugi.info.L = 1;

            prvi.info.GA = parseInt(drugi.goals.first_round_goals);
            drugi.info.GA = parseInt(prvi.goals.first_round_goals);

            prvi.info.GD =
                prvi.goals.first_round_goals - drugi.goals.first_round_goals;
            drugi.info.GD =
                drugi.goals.first_round_goals - prvi.goals.first_round_goals;

            prvi.info.GF = parseInt(prvi.goals.first_round_goals);
            drugi.info.GF = parseInt(drugi.goals.first_round_goals);

            prvi.info.Pts = 3;
            drugi.info.Pts = 0;

            prvi.text = "the first pair of the first round";
            drugi.text = "the first pair of the first round";
            prvi.points_per_round = { points_round_one: 3 };
            drugi.points_per_round = { points_round_one: 0 };
        } else if (prvi.goals.first_round_goals < drugi.goals.first_round_goals) {
            prvi.info.P = 1;
            drugi.info.P = 1;

            prvi.info.W = 0;
            drugi.info.W = 1;

            prvi.info.L = 1;
            drugi.info.L = 0;

            prvi.info.D = 0;
            drugi.info.D = 0;

            prvi.info.GA = parseInt(drugi.goals.first_round_goals);
            drugi.info.GA = parseInt(prvi.goals.first_round_goals);

            prvi.info.GD =
                prvi.goals.first_round_goals - drugi.goals.first_round_goals;
            drugi.info.GD =
                drugi.goals.first_round_goals - prvi.goals.first_round_goals;

            prvi.info.GF = parseInt(prvi.goals.first_round_goals);
            drugi.info.GF = parseInt(drugi.goals.first_round_goals);

            prvi.info.Pts = 0;
            drugi.info.Pts = 3;

            prvi.text = "the first pair of the first round";
            drugi.text = "the first pair of the first round";
            prvi.points_per_round = { points_round_one: 0 };
            drugi.points_per_round = { points_round_one: 3 };
        } else {
            prvi.info.P = 1;
            drugi.info.P = 1;

            prvi.info.W = 0;
            drugi.info.W = 0;

            prvi.info.L = 0;
            drugi.info.L = 0;

            prvi.info.D = 1;
            drugi.info.D = 1;

            prvi.info.GA = parseInt(drugi.goals.first_round_goals);
            drugi.info.GA = parseInt(prvi.goals.first_round_goals);

            prvi.info.GD =
                prvi.goals.first_round_goals - drugi.goals.first_round_goals;
            drugi.info.GD =
                drugi.goals.first_round_goals - prvi.goals.first_round_goals;

            prvi.info.GF = parseInt(prvi.goals.first_round_goals);
            drugi.info.GF = parseInt(drugi.goals.first_round_goals);

            prvi.info.Pts = 1;
            drugi.info.Pts = 1;

            prvi.text = "the first pair of the first round";
            drugi.text = "the first pair of the first round";
            prvi.points_per_round = { points_round_one: 1 };
            drugi.points_per_round = { points_round_one: 1 };
        }

        if (treci.goals.first_round_goals > cetvrti.goals.first_round_goals) {
            treci.info.P = 1;
            cetvrti.info.P = 1;

            treci.info.W = 1;
            cetvrti.info.W = 0;

            treci.info.D = 0;
            cetvrti.info.D = 0;

            treci.info.L = 0;
            cetvrti.info.L = 1;

            treci.info.GA = parseInt(cetvrti.goals.first_round_goals);
            cetvrti.info.GA = parseInt(treci.goals.first_round_goals);

            treci.info.GD =
                treci.goals.first_round_goals - cetvrti.goals.first_round_goals;
            cetvrti.info.GD =
                cetvrti.goals.first_round_goals - treci.goals.first_round_goals;

            treci.info.GF = parseInt(treci.goals.first_round_goals);
            cetvrti.info.GF = parseInt(cetvrti.goals.first_round_goals);

            treci.info.Pts = 3;
            cetvrti.info.Pts = 0;

            cetvrti.text = "the second pair of the first round";
            treci.text = "the second pair of the first round";
            treci.points_per_round = { points_round_one: 3 };
            cetvrti.points_per_round = { points_round_one: 0 };
        } else if (
            treci.goals.first_round_goals < cetvrti.goals.first_round_goals) {
            treci.info.P = 1;
            cetvrti.info.P = 1;

            treci.info.W = 0;
            cetvrti.info.W = 1;

            treci.info.L = 1;
            cetvrti.info.L = 0;

            treci.info.D = 0;
            cetvrti.info.D = 0;

            treci.info.GA = parseInt(cetvrti.goals.first_round_goals);
            cetvrti.info.GA = parseInt(treci.goals.first_round_goals);

            treci.info.GD =
                treci.goals.first_round_goals - cetvrti.goals.first_round_goals;
            cetvrti.info.GD =
                cetvrti.goals.first_round_goals - treci.goals.first_round_goals;

            treci.info.GF = parseInt(treci.goals.first_round_goals);
            cetvrti.info.GF = parseInt(cetvrti.goals.first_round_goals);

            treci.info.Pts = 0;
            cetvrti.info.Pts = 3;

            cetvrti.text = "the second pair of the first round";
            treci.text = "the second pair of the first round";
            treci.points_per_round = { points_round_one: 0 };
            cetvrti.points_per_round = { points_round_one: 3 };
        } else {
            treci.info.P = 1;
            cetvrti.info.P = 1;

            treci.info.W = 0;
            cetvrti.info.W = 0;

            treci.info.L = 0;
            cetvrti.info.L = 0;

            treci.info.D = 1;
            cetvrti.info.D = 1;

            treci.info.GA = parseInt(cetvrti.goals.first_round_goals);
            cetvrti.info.GA = parseInt(treci.goals.first_round_goals);

            treci.info.GD =
                treci.goals.first_round_goals - cetvrti.goals.first_round_goals;
            cetvrti.info.GD =
                cetvrti.goals.first_round_goals - treci.goals.first_round_goals;

            treci.info.GF = parseInt(treci.goals.first_round_goals);
            cetvrti.info.GF = parseInt(cetvrti.goals.first_round_goals);

            treci.info.Pts = 1;
            cetvrti.info.Pts = 1;

            cetvrti.text = "the second pair of the first round";
            treci.text = "the second pair of the first round";
            treci.points_per_round = { points_round_one: 1 };
            cetvrti.points_per_round = { points_round_one: 1 };
        }
        Round_I.push(JSON.parse(JSON.stringify(noviTimovi[i])));
        sorted_I_round.push(JSON.parse(JSON.stringify(noviTimovi[i])));
    }
}
function compare_the_goals_of_the_Second_round(noviTimovi) {
    console.log(noviTimovi,"dva 2 dva")
    for (let i = 0; i < noviTimovi.length; i++) {
        const prvi = noviTimovi[i][0];
        const drugi = noviTimovi[i][1];
        const treci = noviTimovi[i][2];
        const cetvrti = noviTimovi[i][3];
        console.log(prvi,treci,"-----------------------------------------------")


        

if (prvi.goals.second_round_goals > treci.goals.second_round_goals) {
            console.log("radi li ova funkcija ili ne radi        prvi.second_round_goals > treci.second_round_goals")
            prvi.info.P += 1;
            treci.info.P += 1;

            prvi.info.W += 1;
            treci.info.W += 0;

            prvi.info.D += 0;
            treci.info.D += 0;

            prvi.info.L += 0;
            treci.info.L += 1;

            prvi.info.GA += parseInt(treci.goals.second_round_goals);
            treci.info.GA += parseInt(prvi.goals.second_round_goals);

            prvi.info.GD +=prvi.goals.second_round_goals - treci.goals.second_round_goals;
            treci.info.GD +=treci.goals.second_round_goals - prvi.goals.second_round_goals;

            prvi.info.GF += parseInt(prvi.goals.second_round_goals);
            treci.info.GF += parseInt(drugi.goals.second_round_goals);

            prvi.info.Pts += 3;
            treci.info.Pts += 0;
            prvi.text = "the first pair of the second round";
            treci.text = "the first pair of the second round";
            prvi.points_per_round = { points_of_the_second_round: 3 };
            treci.points_per_round = { points_of_the_second_round: 0 };
        } 
        else if (prvi.goals.second_round_goals < treci.goals.second_round_goals) {
            prvi.info.P += 1;
            treci.info.P += 1;

            prvi.info.W += 0;
            treci.info.W += 0;

            prvi.info.D += 0;
            treci.info.D += 0;

            prvi.info.L += 1;
            treci.info.L += 0;

            prvi.info.GA += parseInt(treci.goals.second_round_goals);
            treci.info.GA += parseInt(prvi.goals.second_round_goals);

            prvi.info.GD +=
                prvi.goals.second_round_goals - treci.goals.second_round_goals;
            treci.info.GD +=
                treci.goals.second_round_goals - prvi.goals.second_round_goals;

            prvi.info.GF += parseInt(prvi.goals.second_round_goals);
            treci.info.GF += parseInt(treci.goals.second_round_goals);
            prvi.info.Pts += 0;
            treci.info.Pts += 3;
            prvi.text = "the first pair of the second round";
            treci.text = "the first pair of the second round";
            prvi.points_per_round = { points_of_the_second_round: 0 };
            treci.points_per_round = { points_of_the_second_round: 3 };
        } 
        else {
            console.log("ova radi ===")
            prvi.info.P += 1;
            treci.info.P += 1;

            prvi.info.W += 0;
            treci.info.W += 0;

            prvi.info.D += 1;
            treci.info.D += 1;

            prvi.info.L += 0;
            treci.info.L += 0;

            prvi.info.GA += parseInt(treci.goals.second_round_goals);
            treci.info.GA += parseInt(prvi.goals.second_round_goals);

            prvi.info.GD +=
                prvi.goals.second_round_goals - treci.goals.second_round_goals;
            treci.info.GD +=
                treci.goals.second_round_goals - prvi.goals.second_round_goals;

            prvi.info.GF += parseInt(prvi.goals.second_round_goals);
            treci.info.GF += parseInt(treci.goals.second_round_goals);
            prvi.info.Pts += 1;
            treci.info.Pts += 1;
            prvi.text = "the first pair of the second round";
            treci.text = "the first pair of the second round";
            prvi.points_per_round = { points_of_the_second_round: 1 };
            treci.points_per_round = { points_of_the_second_round: 1 };
        }
        if (drugi.goals.second_round_goals > cetvrti.goals.second_round_goals) {
            console.log(" ne radi drugi.second_round_goals > cetvrti.second_round_goals")
            drugi.info.P += 1;
            cetvrti.info.P += 1;

            drugi.info.W += 1;
            cetvrti.info.W += 0;

            drugi.info.D += 0;
            cetvrti.info.D += 0;

            drugi.info.L += 0;
            cetvrti.info.L += 1;

            drugi.info.GA += parseInt(cetvrti.goals.second_round_goals);
            cetvrti.info.GA += parseInt(drugi.goals.second_round_goals);

            drugi.info.GD +=
                drugi.goals.second_round_goals - cetvrti.goals.second_round_goals;
            cetvrti.info.GD +=
                cetvrti.goals.second_round_goals - drugi.goals.second_round_goals;

            drugi.info.GF += parseInt(cetvrti.goals.second_round_goals);
            cetvrti.info.GF += parseInt(drugi.goals.second_round_goals);

            drugi.info.Pts += 3;
            cetvrti.info.Pts += 0;
            drugi.text = "the second pair of the second roundd";
            cetvrti.text = "the second pair of the second round";
            drugi.points_per_round = { points_of_the_second_round: 3 };
            cetvrti.points_per_round = { points_of_the_second_round: 0 };
        } else if (drugi.goals.second_round_goals < cetvrti.goals.second_round_goals) {
            drugi.info.P += 1;
            cetvrti.info.P += 1;

            drugi.info.W += 0;
            cetvrti.info.W += 1;

            drugi.info.D += 0;
            cetvrti.info.D += 0;

            drugi.info.L += 1;
            cetvrti.info.L += 0;

            drugi.info.GA += parseInt(cetvrti.goals.second_round_goals);
            cetvrti.info.GA += parseInt(drugi.goals.second_round_goals);

            drugi.info.GD +=
                drugi.goals.second_round_goals - cetvrti.goals.second_round_goals;
            cetvrti.info.GD +=
                cetvrti.goals.second_round_goals - drugi.goals.second_round_goals;

            drugi.info.GF += parseInt(cetvrti.goals.second_round_goals);
            cetvrti.info.GF += parseInt(drugi.goals.second_round_goals);
            drugi.info.Pts += 0;
            cetvrti.info.Pts += 3;
            drugi.text = "the second pair of the second roundd";
            cetvrti.text = "the second pair of the second round";
            drugi.points_per_round = { points_of_the_second_round: 0 };
            cetvrti.points_per_round = { points_of_the_second_round: 3 };
        } else {

            console.log("ova radi za druga dva  ===")
            drugi.info.P += 1;
            cetvrti.info.P += 1;

            drugi.info.W += 0;
            cetvrti.info.W += 0;

            drugi.info.D += 1;
            cetvrti.info.D += 1;

            drugi.info.L += 0;
            cetvrti.info.L += 0;

            drugi.info.GA += parseInt(cetvrti.goals.second_round_goals);
            cetvrti.info.GA += parseInt(drugi.goals.second_round_goals);

            drugi.info.GD +=
                drugi.goals.second_round_goals - cetvrti.goals.second_round_goals;
            cetvrti.info.GD +=
                cetvrti.goals.second_round_goals - drugi.goals.second_round_goals;

            drugi.info.GF += parseInt(cetvrti.goals.second_round_goals);
            cetvrti.info.GF += parseInt(drugi.goals.second_round_goals);
            drugi.info.Pts += 1;
            cetvrti.info.Pts += 1;
            drugi.text = "the second pair of the second roundd";
            cetvrti.text = "the second pair of the second round";
            drugi.points_per_round = { points_of_the_second_round: 1 };
            cetvrti.points_per_round = { points_of_the_second_round: 1 };
        }
        Round_II.push(JSON.parse(JSON.stringify(noviTimovi[i])));
        sorted_II_round.push(JSON.parse(JSON.stringify(noviTimovi[i])));
    }
}
function compare_the_goals_of_the_Third_round(noviTimovi) {
    for (let i = 0; i < noviTimovi.length; i++) {
        const prvi = noviTimovi[i][0];
        const drugi = noviTimovi[i][1];
        const treci = noviTimovi[i][2];
        const cetvrti = noviTimovi[i][3];

        if (prvi.goals.third_round_goals > cetvrti.goals.third_round_goals) {
            prvi.info.P += 1;
            cetvrti.info.P += 1;

            prvi.info.W += 1;
            cetvrti.info.W += 0;

            prvi.info.D += 0;
            cetvrti.info.D += 0;

            prvi.info.L += 0;
            cetvrti.info.L += 1;

            prvi.info.GA += parseInt(cetvrti.goals.third_round_goals);
            cetvrti.info.GA += parseInt(prvi.goals.third_round_goals);

            prvi.info.GD +=
                prvi.goals.third_round_goals - cetvrti.goals.third_round_goals;
            cetvrti.info.GD +=
                cetvrti.goals.third_round_goals - prvi.goals.third_round_goals;

            prvi.info.GF += parseInt(prvi.goals.third_round_goals);
            cetvrti.info.GF += parseInt(drugi.goals.third_round_goals);

            prvi.info.Pts += 3;
            cetvrti.info.Pts += 0;
            prvi.text = "the first pair of the third round";
            cetvrti.text = "the first pair of the third round";
            prvi.points_per_round = { points_of_the_third_round: 3 };
            cetvrti.points_per_round = { points_of_the_third_round: 0 };
        } else if (prvi.goals.third_round_goals < cetvrti.goals.third_round_goals) {
            prvi.info.P += 1;
            cetvrti.info.P += 1;

            prvi.info.W += 0;
            cetvrti.info.W += 1;

            prvi.info.D += 0;
            cetvrti.info.D += 0;

            prvi.info.L += 1;
            cetvrti.info.L += 0;

            prvi.info.GA += parseInt(treci.goals.third_round_goals);
            cetvrti.info.GA += parseInt(prvi.goals.third_round_goals);

            prvi.info.GD +=
                prvi.goals.third_round_goals - treci.goals.third_round_goals;
            cetvrti.info.GD +=
                treci.goals.third_round_goals - prvi.goals.third_round_goals;

            prvi.info.GF += parseInt(prvi.goals.third_round_goals);
            cetvrti.info.GF += parseInt(drugi.goals.third_round_goals);

            prvi.info.Pts += 0;
            cetvrti.info.Pts += 3;
            prvi.text = "the first pair of the third round";
            cetvrti.text = "the first pair of the third round";
            prvi.points_per_round = { points_of_the_third_round: 0 };
            cetvrti.points_per_round = { points_of_the_third_round: 3 };
        } else {
            prvi.info.P += 1;
            cetvrti.info.P += 1;

            prvi.info.W += 0;
            cetvrti.info.W +=0;

            prvi.info.D += 1;
            cetvrti.info.D += 1;

            prvi.info.L += 0;
            cetvrti.info.L += 0;

            prvi.info.GA += parseInt(treci.goals.third_round_goals);
            cetvrti.info.GA += parseInt(prvi.goals.third_round_goals);

            prvi.info.GD +=
                prvi.goals.third_round_goals - treci.goals.third_round_goals;
            cetvrti.info.GD +=
                treci.goals.third_round_goals - prvi.goals.third_round_goals;

            prvi.info.GF += parseInt(prvi.goals.third_round_goals);
            cetvrti.info.GF += parseInt(drugi.goals.third_round_goals);

            prvi.info.Pts += 1;
            cetvrti.info.Pts += 1;
            prvi.text = "the first pair of the third round";
            cetvrti.text = "the first pair of the third round";
            prvi.points_per_round = { points_of_the_third_round: 1 };
            cetvrti.points_per_round = { points_of_the_third_round: 1 };
        }
        if (drugi.goals.third_round_goals > treci.goals.third_round_goals) {
            drugi.info.P += 1;
            treci.info.P += 1;

            drugi.info.W += 1;
            treci.info.W += 0;

            drugi.info.D += 0;
            treci.info.D += 0;

            drugi.info.L += 0;
            treci.info.L += 1;

            drugi.info.GA += parseInt(treci.goals.third_round_goals);
            treci.info.GA += parseInt(drugi.goals.third_round_goals);

            drugi.info.GD +=
                drugi.goals.third_round_goals - treci.goals.third_round_goals;
            treci.info.GD +=
                treci.goals.third_round_goals - drugi.goals.third_round_goals;

            drugi.info.GF += parseInt(drugi.goals.third_round_goals);
            treci.info.GF += parseInt(treci.goals.third_round_goals);

            drugi.info.Pts += 3;
            treci.info.Pts += 0;
            drugi.text = "the second pair of the third round";
            treci.text = "the second pair of the third round";
            drugi.points_per_round = { points_of_the_third_round: 3 };
            treci.points_per_round = { ppoints_of_the_third_round: 0 };
        } else if (drugi.goals.third_round_goals < treci.goals.third_round_goals) {
            drugi.info.P += 1;
            treci.info.P += 1;

            drugi.info.W += 0;
            treci.info.W += 1;

            drugi.info.D += 0;
            treci.info.D += 0;

            drugi.info.L += 1;
            treci.info.L += 0;

            drugi.info.GA += parseInt(treci.goals.third_round_goals);
            treci.info.GA += parseInt(drugi.goals.third_round_goals);

            drugi.info.GD +=
                drugi.goals.third_round_goals - treci.goals.third_round_goals;
            treci.info.GD +=
                treci.goals.third_round_goals - drugi.goals.third_round_goals;

            drugi.info.GF += parseInt(drugi.goals.third_round_goals);
            treci.info.GF += parseInt(treci.goals.third_round_goals);

            drugi.info.Pts += 0;
            treci.info.Pts += 3;
            drugi.text = "the second pair of the third round";
            treci.text = "the second pair of the third round";
            drugi.points_per_round = { points_of_the_third_round: 0 };
            treci.points_per_round = { points_of_the_third_round: 3 };
        } else {
            drugi.info.P += 1;
            treci.info.P += 1;

            drugi.info.W += 0;
            treci.info.W += 0;

            drugi.info.D += 1;
            treci.info.D += 1;

            drugi.info.L += 0;
            treci.info.L += 0;

            drugi.info.GA += parseInt(treci.goals.third_round_goals);
            treci.info.GA += parseInt(drugi.goals.third_round_goals);

            drugi.info.GD +=
                drugi.goals.third_round_goals - treci.goals.third_round_goals;
            treci.info.GD +=
                treci.goals.third_round_goals - drugi.goals.third_round_goals;

            drugi.info.GF += parseInt(drugi.goals.third_round_goals);
            treci.info.GF += parseInt(treci.goals.third_round_goals);

            drugi.info.Pts += 1;
            treci.info.Pts += 1;
            drugi.text = "the second pair of the third round";
            treci.text = "the second pair of the third round";
            drugi.points_per_round = { points_of_the_third_round: 1 };
            treci.points_per_round = { points_of_the_third_round: 1 };
        }
        Round_III.push(JSON.parse(JSON.stringify(noviTimovi[i])));
        sorted_III_round.push(JSON.parse(JSON.stringify(noviTimovi[i])));
    }
}

function compare_the_goals_of_the_Round_of_Sixth_final(noviTimovi) {
    for (let i = 0; i < noviTimovi.length; i++) {
        const prvi = noviTimovi[i][0];
        const drugi = noviTimovi[i][1];

        if (prvi.goals.goals_Round_16 > drugi.goals.goals_Round_16) {
            prvi.kraj = "cetvrtfinalista";
            drugi.kraj = "ispao";
        } else if (prvi.goals.goals_Round_16 < drugi.goals.goals_Round_16) {
            prvi.kraj = "ispao";
            drugi.kraj = "cetvrtfinale";
        } else {
           
            const penali1 = Math.floor(Math.random() * 6); 
            const penali2 = Math.floor(Math.random() * 6);

            prvi.penali_of_16 = penali1;
            drugi.penali_of_16 = penali2;

            
            if (prvi.penali_of_16 > drugi.penali_of_16) {
                prvi.kraj = "cetvrtfinale";
                drugi.kraj = "ispao";
            } else if (prvi.penali_of_16 < drugi.penali_of_16) {
                prvi.kraj = "ispao";
                drugi.kraj = "cetvrtfinale";
            } else {
                
                let penaltyWinner = null;
                while (penaltyWinner === null) {
                    prvi.penali_of_16 = Math.floor(Math.random() * 6);
                    drugi.penali_of_16 = Math.floor(Math.random() * 6);
                    if (prvi.penali_of_16 !== drugi.penali_of_16) {
                        penaltyWinner =
                            prvi.penali_of_16 > drugi.penali_of_16 ? prvi : drugi;
                    }
                }
                penaltyWinner.kraj = "cetvrtfinale";
                const loser = penaltyWinner === prvi ? drugi : prvi;
                loser.kraj = "ispao";
            }
        }

        ROUND_Sixth.push(JSON.parse(JSON.stringify(noviTimovi[i])));
        sorted_Sixth_final.push(JSON.parse(JSON.stringify(noviTimovi[i])));
        console.log(ROUND_Sixth, "16");
    }
}

function compare_the_goals_of_the_Quarter_final(noviTimovi) {
    for (let i = 0; i < noviTimovi.length; i++) {
        const prvi = noviTimovi[i][0];
        const drugi = noviTimovi[i][1];

        if (prvi.goals.goals_Quarter_finale > drugi.goals.goals_Quarter_finale) {
            prvi.kraj = "polufinale";
            drugi.kraj = "ispao";
        } else if (
            prvi.goals.goals_Quarter_finale < drugi.goals.goals_Quarter_finale
        ) {
            prvi.kraj = "ispao";
            drugi.kraj = "polufinale";
        } else {
            // Ukoliko su golovi izjednačeni, idemo na penale
            const penali1 = Math.floor(Math.random() * 6); // Penali mogu biti od 0 do 5
            const penali2 = Math.floor(Math.random() * 6);

            prvi.penali_Quarter_finale = penali1;
            drugi.penali_Quarter_finale = penali2;

            // Provera ko je pobednik penala
            if (prvi.penali_Quarter_finale > drugi.penali_Quarter_finale) {
                prvi.kraj = "polufinale";
                drugi.kraj = "ispao";
            } else if (prvi.penali_Quarter_finale < drugi.penali_Quarter_finale) {
                prvi.kraj = "ispao";
                drugi.kraj = "polufinale";
            } else {
                // Ukoliko su penali izjednačeni, ponovno izvršavamo penale sve dok ne dobijemo pobjednika
                while (prvi.penali_Quarter_finale === drugi.penali_Quarter_finale) {
                    prvi.penali_Quarter_finale = Math.floor(Math.random() * 6);
                    drugi.penali_Quarter_finale = Math.floor(Math.random() * 6);
                }
                if (prvi.penali_Quarter_finale > drugi.penali_Quarter_finale) {
                    prvi.kraj = "polufinale";
                    drugi.kraj = "ispao";
                } else {
                    prvi.kraj = "ispao";
                    drugi.kraj = "polufinale";
                }
            }
        }

        ROUND_IV.push(JSON.parse(JSON.stringify(noviTimovi[i])));
        sorted_IV_finale.push(JSON.parse(JSON.stringify(noviTimovi[i])));
        console.log(ROUND_IV, "4");
    }
}

function compare_the_goals_of_the_Semi_finals(noviTimovi) {
    for (let i = 0; i < noviTimovi.length; i++) {
        const prvi = noviTimovi[i][0];
        const drugi = noviTimovi[i][1];

        if (prvi.goals.goals_Semi_final > drugi.goals.goals_Semi_final) {
            prvi.kraj = "finale";
            drugi.kraj = "for the third place";
        } else if (prvi.goals.goals_Semi_final < drugi.goals.goals_Semi_final) {
            prvi.kraj = "for the third place";
            drugi.kraj = "finale";
        } else {
            // Ukoliko su golovi izjednačeni, idemo na penale
            const penali1 = Math.floor(Math.random() * 6); // Penali mogu biti od 0 do 5
            const penali2 = Math.floor(Math.random() * 6);

            prvi.penali_Semi_final = penali1;
            drugi.penali_Semi_final = penali2;

            // Provera ko je pobednik penala
            if (prvi.penali_Semi_final > drugi.penali_Semi_final) {
                prvi.kraj = "finale";
                drugi.kraj = "for the third place";
            } else if (prvi.penali_Semi_final < drugi.penali_Semi_final) {
                prvi.kraj = "for the third place";
                drugi.kraj = "finale";
            } else {
                // Ukoliko su penali izjednačeni, ponovno izvršavamo penale sve dok ne dobijemo pobjednika
                while (prvi.penali_Semi_final === drugi.penali_Semi_final) {
                    prvi.penali_Semi_final = Math.floor(Math.random() * 6);
                    drugi.penali_Semi_final = Math.floor(Math.random() * 6);
                }
                if (prvi.penali_Semi_final > drugi.penali_Semi_final) {
                    prvi.kraj = "finale";
                    drugi.kraj = "for the third place";
                } else {
                    prvi.kraj = "for the third place";
                    drugi.kraj = "finale";
                }
            }
        }

        ROUND_FINALE_II.push(JSON.parse(JSON.stringify(noviTimovi[i])));
        console.log(ROUND_FINALE_II, "semi");
    }
}

function compare_the_goals_of_the_Finale(noviTimovi) {
    for (let i = 0; i < noviTimovi.length; i++) {
        const prvi = noviTimovi[i][0];
        const drugi = noviTimovi[i][1];

        if (prvi.goals.goals_finale > drugi.goals.goals_finale) {
            prvi.kraj = "prvak";
            drugi.kraj = "drugomesto";
        } else if (prvi.goals.goals_finale < drugi.goals.goals_finale) {
            prvi.kraj = "drugomesto";
            drugi.kraj = "prvak";
        } else {
            // Ako su golovi izjednačeni, idemo na penale
            const penali1 = Math.floor(Math.random() * 6);
            const penali2 = Math.floor(Math.random() * 6);

            prvi.penali_finale = penali1;
            drugi.penali_finale = penali2;

            // Provera ko je pobednik penala
            if (prvi.penali_finale > drugi.penali_finale) {
                prvi.kraj = "prvak";
                drugi.kraj = "drugomesto";
            } else if (prvi.penali_finale < drugi.penali_finale) {
                prvi.kraj = "drugomesto";
                drugi.kraj = "prvak";
            } else {
                // Ako su penali izjednačeni, ponovno izvršavamo penale sve dok ne dobijemo pobjednika
                while (prvi.penali_finale === drugi.penali_finale) {
                    prvi.penali_finale = Math.floor(Math.random() * 6);
                    drugi.penali_finale = Math.floor(Math.random() * 6);
                }
                if (prvi.penali_finale > drugi.penali_finale) {
                    prvi.kraj = "prvak";
                    drugi.kraj = "drugomesto";
                } else {
                    prvi.kraj = "drugomesto";
                    drugi.kraj = "prvak";
                }
            }
        }
        GRUPA_FINALISATA.length = 0;
        GRUPA_FINALISATA.push(JSON.parse(JSON.stringify(noviTimovi[i])));
        console.log(GRUPA_FINALISATA);

        sortirano_finale.push(JSON.parse(JSON.stringify(noviTimovi[i])));
    }
}

function compare_the_goals_of_the_Third_place(noviTimovi) {
    console.log(noviTimovi, "pokazivanje timova finale");

    for (let i = 0; i < noviTimovi.length; i++) {
        const prvi = noviTimovi[i][0];
        const drugi = noviTimovi[i][1];

        if (prvi.goals.goals_third_place > drugi.goals.goals_third_place) {
            prvi.kraj = "treci";
            drugi.kraj = "ispao";
        } else if (prvi.goals.goals_third_place < drugi.goals.goals_third_place) {
            prvi.kraj = "ispao";
            drugi.kraj = "treci";
        } else {
            // Ako su golovi izjednačeni, biramo pobednika nasumično i igramo penale ako je potrebno
            const penali1 = Math.floor(Math.random() * 6);
            const penali2 = Math.floor(Math.random() * 6);

            prvi.penali_trece_mesto = penali1;
            drugi.penali_trece_mesto = penali2;

            // Biramo pobednika nasumično ako su penali izjednačeni
            if (prvi.penali_trece_mesto === drugi.penali_trece_mesto) {
                const izbor = Math.floor(Math.random() * 2);
                if (izbor === 0) {
                    prvi.penali_trece_mesto += 1;
                } else {
                    drugi.penali_trece_mesto += 1;
                }
            }

            // Provera ko je pobednik penala
            if (prvi.penali_trece_mesto > drugi.penali_trece_mesto) {
                prvi.kraj = "treci";
                drugi.kraj = "ispao";
            } else {
                prvi.kraj = "ispao";
                drugi.kraj = "treci";
            }
        }

        GRUPA_TRECE_MESTO.length = 0;
        GRUPA_TRECE_MESTO.push(JSON.parse(JSON.stringify(noviTimovi[i])));
        sortirano_III_vs_FINAL.push(JSON.parse(JSON.stringify(noviTimovi[i])));
        console.log(sortirano_III_vs_FINAL, "trece");
    }
}
function sortTeamsInGroup(group) {

    group.sort((a, b) => {
        // Prvo poredimo po broju bodova (Pts)
        if (a.info.Pts !== b.info.Pts) {
            return b.info.Pts - a.info.Pts; // Tim sa većim brojem bodova ide više
        } else {
            // Ako su bodovi jednaki, poredimo po gol-razlici (GD)
            return b.info.GD - a.info.GD; // Tim sa boljom gol-razlikom ide više
        }
    });
}

function Team_sorting(arr) {
    arr.forEach((group) => {
        group.sort((a, b) => {
            if (a.info.Pts !== b.info.Pts) {
                return b.info.Pts - a.info.Pts;
            }
            return b.info.GF - a.info.GF;
        });
    });
}

function Team_sorting_tabels(arr) {
    arr.forEach((group) => {
        group.sort((a, b) => {
            if (a.info.Pts !== b.info.Pts) {
                return b.info.Pts - a.info.Pts;
            }
            return b.info.GF - a.info.GF;
        });
    });
}
function Team_sorting2(arr) {
    arr.forEach((group) => {
        group.sort((a, b) => {
            if (a.goals.goals_Round_16 !== b.goals.goals_Round_16) {
                return b.goals.goals_Round_16 - a.goals.goals_Round_16;
            } else {
                // Dodatni uslov kada su golovi_Round_16 jednaki
                return b.penali_of_16 - a.penali_of_16;
            }
        });
    });
}
function Team_sorting3(arr) {
    arr.forEach((group) => {
        group.sort((a, b) => {
            if (a.goals.goals_Quarter_finale !== b.goals.goals_Quarter_finale) {
                return b.goals.goals_Quarter_finale - a.goals.goals_Quarter_finale;
            } else {
                return b.penali_Quarter_finale - a.penali_Quarter_finale;
            }
        });
    });
}
function select_the_finalists(timovi) {
    const skup1 = [];
    const skup2 = [];

    timovi.forEach((grupa) => {
        grupa.forEach((utakmica) => {
            if (utakmica.kraj === "finale") {
                skup1.push(utakmica);
            }
        });
        grupa.forEach((utakmica) => {
            if (utakmica.kraj === "for the third place") {
                skup2.push(utakmica);
            }
        });
    });
    GRUPA_FINALISATA.push(skup1);
    GRUPA_TRECE_MESTO.push(skup2);
}
function Sortiranje5(arr) {
    arr.forEach((group) => {
        group.sort((a, b) => {
            if (a.goals.goals_finale !== b.goals.goals_finale) {
                return b.goals.goals_finale - a.goals.goals_finale;
            } else {
                return b.penali_finale - a.penali_finale;
            }
        });
    });
}
function Sortiranje6(arr) {
    arr.forEach((group) => {
        group.sort((a, b) => {
            if (a.goals.goals_third_place !== b.goals.goals_third_place) {
                return b.goals.goals_trece_mesto - a.goals.goals_third_place;
            } else {
                return b.penali_trece_mesto - a.penali_trece_mesto;
            }
        });
    });
}

function All_tims() {
    const svi_timovi = document.querySelector(".container_all_of_tims");
    const Div = document.createElement("div");
    Div.classList.add("container_svih_timova");

    for (let j = 0; j < Timovi.length; j++) {
        Div.innerHTML += `
            <div class="container_tim_grupe_F">
                <img id="front_face" src="${Timovi[j].slika}">
                <p id="back_face" >${Timovi[j].ime}</p>

            </div>  
        `;
        svi_timovi.append(Div);
    }
}
function Group_view(grupisaniTimoviSkup1) {
    const containerGrupa = document.querySelector(".container_all_of_Grup");

    // Uklonite prethodno prikazane podatke
    containerGrupa.innerHTML = "";

    grupisaniTimoviSkup1.forEach((grupa) => {
        const div1 = document.createElement("div");
        div1.classList.add("containet_of_Grup");
        const div2 = document.createElement("div");
        div2.classList.add("container_tims_of_grup");
        const h2 = document.createElement("button");
        h2.classList.add("name_of_grup_button");

        const line = document.createElement("div");
        line.classList.add("line");

        grupa.forEach((tim) => {
            // Kreirajte elemente i ažurirajte podatke
            const timDiv = document.createElement("div");
            timDiv.classList.add("container_of_tim");
            timDiv.id = tim.id;

            const img = document.createElement("img");
            img.id = "tim_grup_img";
            img.src = tim.slika;
            img.alt = tim.ime;

            const p1 = document.createElement("p");
            p1.id = "tim_grup_slovo";
            const prvoSlovo = tim.ime.split("", 1);
            const slovoa = tim.ime.slice(1);
            p1.innerHTML = `<span>${prvoSlovo}</span>${slovoa}`;

            const p2 = document.createElement("p");
            p2.id = "tim_img_ball";

            // Dodajte elemente u div2
            timDiv.appendChild(img);
            timDiv.appendChild(p1);
            timDiv.appendChild(p2);

            div2.appendChild(timDiv);
        });

        const grupaSlovo = grupa[0].grupa.split("", 1);
        h2.innerText = "Group " + grupaSlovo;
        h2.setAttribute("aria-label", `${grupaSlovo}` + "grupa");

        div1.appendChild(h2);
        div1.appendChild(div2);

        // Dodajte div1 u containerGrupa
        containerGrupa.appendChild(div1);
    });
}

function RoundI_II_III(grupisaniTimoviSkup1) {
    //console.log(grupisaniTimoviSkup1,"ššš")
    const containerGrupa = document.querySelector(".container_all_of_Grup");

    // Uklonite prethodno prikazane podatke
    containerGrupa.innerHTML = "";

    grupisaniTimoviSkup1.forEach((grupa) => {
        const div1 = document.createElement("div");
        div1.classList.add("containet_of_Grup");
        const div2 = document.createElement("div");
        div2.classList.add("container_tims_of_grup");
        const h2_button = document.createElement("button");
        h2_button.classList.add("name_of_grup_button");

        grupa.forEach((tim) => {
            //console.log(tim,"tttttttttttttttttttttttttttt")
            if (tim.text.includes("the first pair of the first round")) {
                const timDiv = document.createElement("div");
                timDiv.classList.add("red");
                timDiv.id = tim.id;

                const img = document.createElement("img");
                img.id = "tim_grup_img";
                img.src = tim.slika;
                img.alt = tim.ime;

                const p1 = document.createElement("p");
                p1.id = "tim_grup_slovo";
                const prvoSlovo = tim.ime.split("", 1);
                const slovoa = tim.ime.slice(1);
                p1.innerHTML = `<span>${prvoSlovo}</span>${slovoa}`;

                const timDivP = document.createElement("div");
                timDivP.classList.add("container_of_result");
                const timbodovi = document.createElement("div");
                const timgolovi = document.createElement("div");

                const ime_bodovi = document.createElement("h4");
                const ime_golovi = document.createElement("h4");
                ime_bodovi.innerText = "PTS";
                ime_golovi.innerText = "GF";

                const p2 = document.createElement("p");
                p2.id = "bodovi_kola-1";
                const bodoviKolo1 = tim.info.Pts;
                p2.innerHTML = `${bodoviKolo1}`;

                const p3 = document.createElement("p");
                p3.id = "bodovi_kola-2";
                const goloviKola = tim.info.GF;
                p3.innerHTML = `${goloviKola}`;

                timbodovi.append(ime_bodovi, p2);
                timgolovi.append(ime_golovi, p3);
                timDivP.append(timbodovi, timgolovi);

                timDiv.appendChild(img);
                timDiv.appendChild(p1);
                timDiv.appendChild(timDivP);
                div2.appendChild(timDiv);
            } else if (tim.text.includes("the second pair of the first round")) {
                const timDiv = document.createElement("div");
                timDiv.classList.add("blue");
                timDiv.id = tim.id;

                const img = document.createElement("img");
                img.id = "tim_grup_img";
                img.src = tim.slika;
                img.alt = tim.ime;

                const p1 = document.createElement("p");
                p1.id = "tim_grup_slovo";
                const prvoSlovo = tim.ime.split("", 1);
                const slovoa = tim.ime.slice(1);
                p1.innerHTML = `<span>${prvoSlovo}</span>${slovoa}`;

                const timDivP = document.createElement("div");
                timDivP.classList.add("container_of_result");
                const timbodovi = document.createElement("div");
                const timgolovi = document.createElement("div");

                const ime_bodovi = document.createElement("h4");
                const ime_golovi = document.createElement("h4");
                ime_bodovi.innerText = "PTS";
                ime_golovi.innerText = "GF";

                const p2 = document.createElement("p");
                p2.id = "bodovi_kola-1";
                const bodoviKolo1 = tim.info.Pts;
                p2.innerHTML = `${bodoviKolo1}`;

                const p3 = document.createElement("p");
                p3.id = "bodovi_kola-2";
                const goloviKola = tim.info.GF;
                p3.innerHTML = `${goloviKola}`;

                timbodovi.append(ime_bodovi, p2);
                timgolovi.append(ime_golovi, p3);
                timDivP.append(timbodovi, timgolovi);

                timDiv.appendChild(img);
                timDiv.appendChild(p1);
                timDiv.appendChild(timDivP);
                div2.appendChild(timDiv);
            }
            if (tim.text.includes("the first pair of the second round")) {
                const timDiv = document.createElement("div");
                timDiv.classList.add("red");
                timDiv.id = tim.id;

                const img = document.createElement("img");
                img.id = "tim_grup_img";
                img.src = tim.slika;
                img.alt = tim.ime;

                const p1 = document.createElement("p");
                p1.id = "tim_grup_slovo";
                const prvoSlovo = tim.ime.split("", 1);
                const slovoa = tim.ime.slice(1);
                p1.innerHTML = `<span>${prvoSlovo}</span>${slovoa}`;

                const timDivP = document.createElement("div");
                timDivP.classList.add("container_of_result");
                const timbodovi = document.createElement("div");
                const timgolovi = document.createElement("div");

                const ime_bodovi = document.createElement("h4");
                const ime_golovi = document.createElement("h4");
                ime_bodovi.innerText = "PTS";
                ime_golovi.innerText = "GF";

                const p2 = document.createElement("p");
                p2.id = "bodovi_kola-1";
                const bodoviKolo1 = tim.info.Pts;
                p2.innerHTML = `${bodoviKolo1}`;

                const p3 = document.createElement("p");
                p3.id = "bodovi_kola-2";
                const goloviKola = tim.info.GF;
                p3.innerHTML = `${goloviKola}`;

                timbodovi.append(ime_bodovi, p2);
                timgolovi.append(ime_golovi, p3);
                timDivP.append(timbodovi, timgolovi);

                timDiv.appendChild(img);
                timDiv.appendChild(p1);
                timDiv.appendChild(timDivP);
                div2.appendChild(timDiv);
            } else if (tim.text.includes("the second pair of the second round")) {
                const timDiv = document.createElement("div");
                timDiv.classList.add("blue");
                timDiv.id = tim.id;

                const img = document.createElement("img");
                img.id = "tim_grup_img";
                img.src = tim.slika;
                img.alt = tim.ime;

                const p1 = document.createElement("p");
                p1.id = "tim_grup_slovo";
                const prvoSlovo = tim.ime.split("", 1);
                const slovoa = tim.ime.slice(1);
                p1.innerHTML = `<span>${prvoSlovo}</span>${slovoa}`;

                const timDivP = document.createElement("div");
                timDivP.classList.add("container_of_result");
                const timbodovi = document.createElement("div");
                const timgolovi = document.createElement("div");

                const ime_bodovi = document.createElement("h4");
                const ime_golovi = document.createElement("h4");
                ime_bodovi.innerText = "PTS";
                ime_golovi.innerText = "GF";

                const p2 = document.createElement("p");
                p2.id = "bodovi_kola-1";
                const bodoviKolo1 = tim.info.Pts;
                p2.innerHTML = `${bodoviKolo1}`;

                const p3 = document.createElement("p");
                p3.id = "bodovi_kola-2";
                const goloviKola = tim.info.GF;
                p3.innerHTML = `${goloviKola}`;

                timbodovi.append(ime_bodovi, p2);
                timgolovi.append(ime_golovi, p3);
                timDivP.append(timbodovi, timgolovi);

                timDiv.appendChild(img);
                timDiv.appendChild(p1);
                timDiv.appendChild(timDivP);
                div2.appendChild(timDiv);
            }
            if (
                tim.text.includes("the first pair of the third round") &&
                !tim.text.includes("the first pair of the first round") &&
                !tim.text.includes("the second pair of the first round")
            ) {
                const timDiv = document.createElement("div");
                timDiv.classList.add("red");
                timDiv.id = tim.id;

                const img = document.createElement("img");
                img.id = "tim_grup_img";
                img.src = tim.slika;
                img.alt = tim.ime;

                const p1 = document.createElement("p");
                p1.id = "tim_grup_slovo";
                const prvoSlovo = tim.ime.split("", 1);
                const slovoa = tim.ime.slice(1);
                p1.innerHTML = `<span>${prvoSlovo}</span>${slovoa}`;

                const timDivP = document.createElement("div");
                timDivP.classList.add("container_of_result");
                const timbodovi = document.createElement("div");
                const timgolovi = document.createElement("div");

                const ime_bodovi = document.createElement("h4");
                const ime_golovi = document.createElement("h4");
                ime_bodovi.innerText = "PTS";
                ime_golovi.innerText = "GF";

                const p2 = document.createElement("p");
                p2.id = "bodovi_kola-1";
                const bodoviKolo1 = tim.info.Pts;
                p2.innerHTML = `${bodoviKolo1}`;

                const p3 = document.createElement("p");
                p3.id = "bodovi_kola-2";
                const goloviKola = tim.info.GF;
                p3.innerHTML = `${goloviKola}`;

                timbodovi.append(ime_bodovi, p2);
                timgolovi.append(ime_golovi, p3);
                timDivP.append(timbodovi, timgolovi);

                timDiv.appendChild(img);
                timDiv.appendChild(p1);
                timDiv.appendChild(timDivP);
                div2.appendChild(timDiv);
            } else if (tim.text.includes("the second pair of the third round")) {
                const timDiv = document.createElement("div");
                timDiv.classList.add("blue");
                timDiv.id = tim.id;

                const img = document.createElement("img");
                img.id = "tim_grup_img";
                img.src = tim.slika;
                img.alt = tim.ime;

                const p1 = document.createElement("p");
                p1.id = "tim_grup_slovo";
                const prvoSlovo = tim.ime.split("", 1);
                const slovoa = tim.ime.slice(1);
                p1.innerHTML = `<span>${prvoSlovo}</span>${slovoa}`;

                const timDivP = document.createElement("div");
                timDivP.classList.add("container_of_result");
                const timbodovi = document.createElement("div");
                const timgolovi = document.createElement("div");

                const ime_bodovi = document.createElement("h4");
                const ime_golovi = document.createElement("h4");
                ime_bodovi.innerText = "PTS";
                ime_golovi.innerText = "GF";

                const p2 = document.createElement("p");
                p2.id = "bodovi_kola-1";
                const bodoviKolo1 = tim.info.Pts;
                p2.innerHTML = `${bodoviKolo1}`;

                const p3 = document.createElement("p");
                p3.id = "bodovi_kola-2";
                const goloviKola = tim.info.GF;
                p3.innerHTML = `${goloviKola}`;

                timbodovi.append(ime_bodovi, p2);
                timgolovi.append(ime_golovi, p3);
                timDivP.append(timbodovi, timgolovi);

                timDiv.appendChild(img);
                timDiv.appendChild(p1);
                timDiv.appendChild(timDivP);
                div2.appendChild(timDiv);
            }
        });

        const grupaSlovo = grupa[0].grupa.split("", 1);

        h2_button.innerText = "Group " + grupaSlovo;
        h2_button.setAttribute("aria-label", `${grupaSlovo}` + "grupa");

        //h2_button.id=grupaSlovo+"grupa"

        div1.appendChild(h2_button);
        div1.appendChild(div2);

        // Dodajte div1 u containerGrupa
        containerGrupa.appendChild(div1);
    });
}
function prikaziParoveTimova(skupTimova, container) {
    for (let i = 0; i < skupTimova.length; i++) {
        const grupa = skupTimova[i];

        const TI = document.createElement("div");
        TI.classList.add("container_grup");

        // Create a div for the left-top section
        const TIMS = document.createElement("div");
        TIMS.classList.add("container_of_tims");

        // Prikazi prva dva tima u prvom redu

        // Create a div for each team
        for (let j = 0; j < grupa.length; j++) {
            const tim = grupa[j];

            const teamDiv = document.createElement("div");
            teamDiv.classList.add("team");

            const img = document.createElement("img");
            img.id = "tim_grup_img_finale";
            img.src = tim.slika;

            const p = document.createElement("p");
            p.id = "tim_grup_slovo_finale";
            const prvoSlovo = tim.ime[0];
            const slova = tim.ime.slice(1, 3);
            p.innerHTML = `<span>${prvoSlovo}</span>${slova}`;

            teamDiv.append(img, p);
            TIMS.appendChild(teamDiv);
            TI.appendChild(TIMS);

            // Prikazi "vs" između prvog i drugog tima
            if (j === 0 && grupa.length > 1) {
                const vsDiv = document.createElement("div");
                vsDiv.classList.add("vs");
                vsDiv.textContent = "vs";
                TIMS.appendChild(vsDiv);
            }
        }

        container.appendChild(TI);
    }
}
function prikaziParoveTimova_thre_place(skupTimova, container) {
    for (let i = 0; i < skupTimova.length; i++) {
        const grupa = skupTimova[i];

        const TI = document.createElement("div");
        TI.classList.add("container_grup");

        // Create a div for the left-top section
        const TIMS = document.createElement("div");
        TIMS.classList.add("container_of_tims");

        // Prikazi prva dva tima u prvom redu

        // Create a div for each team
        for (let j = 0; j < grupa.length; j++) {
            const tim = grupa[j];

            const teamDiv = document.createElement("div");
            teamDiv.classList.add("team");

            const img = document.createElement("img");
            img.id = "tim_grup_img_finale";
            img.src = tim.slika;

            const p = document.createElement("p");
            p.id = "tim_grup_slovo_finale";
            const prvoSlovo = tim.ime[0];
            const slova = tim.ime.slice(1, 3);
            p.innerHTML = `<span>${prvoSlovo}</span>${slova}`;

            teamDiv.append(img, p);
            TIMS.appendChild(teamDiv);
            TI.appendChild(TIMS);

            // Prikazi "vs" između prvog i drugog tima
            if (j === 0 && grupa.length > 1) {
                const vsDiv = document.createElement("div");
                vsDiv.classList.add("vs");
                vsDiv.textContent = "vs";
                TIMS.appendChild(vsDiv);
            }
        }

        container.appendChild(TI);
    }
}
function prikaziParoveTimova1(skupTimova, container) {
    for (let i = 0; i < skupTimova.length; i++) {
        const grupa = skupTimova[i];

        const TI = document.createElement("div");
        TI.classList.add("container_grup");
        const container_penal_info = document.createElement("div");
        container_penal_info.classList.add("container_penal_info");

        const container_of_tims = document.createElement("div");
        container_of_tims.classList.add("container_of_tims");
        const tim_container = document.createElement("div");
        tim_container.classList.add("tim_container");

        for (let j = 0; j < grupa.length; j++) {
            const tim = grupa[j];

            const teamDiv = document.createElement("div");
            teamDiv.classList.add("team1");

            const team_container_of_point = document.createElement("div");
            team_container_of_point.classList.add("team_container_of_point");

            const img = document.createElement("img");
            img.id = "tim_grup_img_finale";
            img.src = tim.slika;

            const p1 = document.createElement("p");
            p1.id = "tim_grup_slovo_finale";
            const prvoSlovo = tim.ime[0];
            const slova = tim.ime.slice(1, 3);
            p1.innerHTML = `<span>${prvoSlovo}</span>${slova}`;

            const p2 = document.createElement("p");
            p2.id = "tim_grup_of_point";
            p2.textContent = tim.goals.goals_Round_16;

            const vsDiv = document.createElement("div");
            vsDiv.classList.add("vs");
            vsDiv.textContent = "vs";

            const penals_img = document.createElement("img");
            penals_img.classList.add("penals_img");
            penals_img.src = "penaltick.PNG";

            if (
                typeof tim.penali_of_16 !== "undefined" &&
                tim.penali_of_16 !== null &&
                tim.penali_of_16 !== ""
            ) {
                const team_penals1 = document.createElement("div");
                team_penals1.classList.add("team_penals");
                const team_penals_name = document.createElement("div");
                team_penals_name.classList.add("team_penals_name");

                const team_penals_gol = document.createElement("div");
                team_penals_gol.classList.add("team_penals_gol");

                const p3 = document.createElement("p");
                p3.id = "tim_grup_penals";
                p3.textContent = tim.penali_of_16;

                if (j === 0) {
                    teamDiv.append(img, p1);
                    team_container_of_point.appendChild(p2);
                    tim_container.append(teamDiv, team_container_of_point, vsDiv);
                    container_of_tims.appendChild(tim_container);

                    TI.appendChild(container_of_tims);

                    team_penals_name.innerHTML = `<span>${prvoSlovo}</span>${slova}`;
                    team_penals_gol.textContent = tim.penali_of_16;
                    team_container_of_point.appendChild(p2);
                    team_penals1.append(team_penals_name, team_penals_gol);
                    container_penal_info.append(team_penals1, penals_img);
                } else if (j === 1) {
                    teamDiv.append(img, p1);
                    team_container_of_point.appendChild(p2);
                    tim_container.append(team_container_of_point, teamDiv);
                    container_of_tims.appendChild(tim_container);
                    TI.appendChild(container_of_tims);

                    team_penals_name.innerHTML = `<span>${prvoSlovo}</span>${slova}`;
                    team_penals_gol.textContent = tim.penali_of_16;
                    team_penals1.append(team_penals_gol, team_penals_name);
                    container_penal_info.appendChild(team_penals1);
                }

                container_of_tims.appendChild(tim_container);
                TI.appendChild(container_penal_info);
            } else {
                if (j === 0) {
                    teamDiv.append(img, p1);
                    team_container_of_point.appendChild(p2);
                    tim_container.append(teamDiv, team_container_of_point, vsDiv);
                    container_of_tims.appendChild(tim_container);
                    TI.appendChild(container_of_tims);
                } else if (j === 1) {
                    teamDiv.append(img, p1);
                    team_container_of_point.appendChild(p2);
                    tim_container.append(team_container_of_point, teamDiv);
                    container_of_tims.appendChild(tim_container);
                    TI.appendChild(container_of_tims);
                }
            }
        }
        //TI.appendChild(container_of_tims)
        container.appendChild(TI);
    }
}

function prikaziParoveTimova2(skupTimova, container) {
    for (let i = 0; i < skupTimova.length; i++) {
        const grupa = skupTimova[i];

        const TI = document.createElement("div");
        TI.classList.add("container_grup");
        const container_penal_info = document.createElement("div");
        container_penal_info.classList.add("container_penal_info");

        const container_of_tims = document.createElement("div");
        container_of_tims.classList.add("container_of_tims");
        const tim_container = document.createElement("div");
        tim_container.classList.add("tim_container");

        for (let j = 0; j < grupa.length; j++) {
            const tim = grupa[j];

            const teamDiv = document.createElement("div");
            teamDiv.classList.add("team1");

            const team_container_of_point = document.createElement("div");
            team_container_of_point.classList.add("team_container_of_point");

            const img = document.createElement("img");
            img.id = "tim_grup_img_finale";
            img.src = tim.slika;

            const p1 = document.createElement("p");
            p1.id = "tim_grup_slovo_finale";
            const prvoSlovo = tim.ime[0];
            const slova = tim.ime.slice(1, 3);
            p1.innerHTML = `<span>${prvoSlovo}</span>${slova}`;

            const p2 = document.createElement("p");
            p2.id = "tim_grup_of_point";
            p2.textContent = tim.goals.goals_Quarter_finale;

            const vsDiv = document.createElement("div");
            vsDiv.classList.add("vs");
            vsDiv.textContent = "vs";

            const penals_img = document.createElement("img");
            penals_img.classList.add("penals_img");
            penals_img.src = "penaltick.PNG";

            if (
                typeof tim.penali_Quarter_finale !== "undefined" &&
                tim.penali_Quarter_finale !== null &&
                tim.penali_Quarter_finale !== ""
            ) {
                const team_penals1 = document.createElement("div");
                team_penals1.classList.add("team_penals");
                const team_penals_name = document.createElement("div");
                team_penals_name.classList.add("team_penals_name");

                const team_penals_gol = document.createElement("div");
                team_penals_gol.classList.add("team_penals_gol");

                const p3 = document.createElement("p");
                p3.id = "tim_grup_penals";
                p3.textContent = tim.penali_Quarter_finale;

                if (j === 0) {
                    teamDiv.append(img, p1);
                    team_container_of_point.appendChild(p2);
                    tim_container.append(teamDiv, team_container_of_point, vsDiv);
                    container_of_tims.appendChild(tim_container);

                    TI.appendChild(container_of_tims);

                    team_penals_name.innerHTML = `<span>${prvoSlovo}</span>${slova}`;
                    team_penals_gol.textContent = tim.penali_Quarter_finale;
                    team_container_of_point.appendChild(p2);
                    team_penals1.append(team_penals_name, team_penals_gol);
                    container_penal_info.append(team_penals1, penals_img);
                } else if (j === 1) {
                    teamDiv.append(img, p1);
                    team_container_of_point.appendChild(p2);
                    tim_container.append(team_container_of_point, teamDiv);
                    container_of_tims.appendChild(tim_container);
                    TI.appendChild(container_of_tims);

                    team_penals_name.innerHTML = `<span>${prvoSlovo}</span>${slova}`;
                    team_penals_gol.textContent = tim.penali_Quarter_finale;
                    team_penals1.append(team_penals_gol, team_penals_name);
                    container_penal_info.appendChild(team_penals1);
                }

                container_of_tims.appendChild(tim_container);
                TI.appendChild(container_penal_info);
            } else {
                if (j === 0) {
                    teamDiv.append(img, p1);
                    team_container_of_point.appendChild(p2);
                    tim_container.append(teamDiv, team_container_of_point, vsDiv);
                    container_of_tims.appendChild(tim_container);
                    TI.appendChild(container_of_tims);
                } else if (j === 1) {
                    teamDiv.append(img, p1);
                    team_container_of_point.appendChild(p2);
                    tim_container.append(team_container_of_point, teamDiv);
                    container_of_tims.appendChild(tim_container);
                    TI.appendChild(container_of_tims);
                }
            }
        }
        //TI.appendChild(container_of_tims)
        container.appendChild(TI);
    }
}

function prikaziParoveTimova3(skupTimova, container) {
    for (let i = 0; i < skupTimova.length; i++) {
        const grupa = skupTimova[i];

        const TI = document.createElement("div");
        TI.classList.add("container_grup");
        const container_penal_info = document.createElement("div");
        container_penal_info.classList.add("container_penal_info");

        const container_of_tims = document.createElement("div");
        container_of_tims.classList.add("container_of_tims");
        const tim_container = document.createElement("div");
        tim_container.classList.add("tim_container");

        for (let j = 0; j < grupa.length; j++) {
            const tim = grupa[j];

            const teamDiv = document.createElement("div");
            teamDiv.classList.add("team1");

            const team_container_of_point = document.createElement("div");
            team_container_of_point.classList.add("team_container_of_point");

            const img = document.createElement("img");
            img.id = "tim_grup_img_finale";
            img.src = tim.slika;

            const p1 = document.createElement("p");
            p1.id = "tim_grup_slovo_finale";
            const prvoSlovo = tim.ime[0];
            const slova = tim.ime.slice(1, 3);
            p1.innerHTML = `<span>${prvoSlovo}</span>${slova}`;

            const p2 = document.createElement("p");
            p2.id = "tim_grup_of_point";
            p2.textContent = tim.goals.goals_Semi_final;

            const vsDiv = document.createElement("div");
            vsDiv.classList.add("vs");
            vsDiv.textContent = "vs";

            const penals_img = document.createElement("img");
            penals_img.classList.add("penals_img");
            penals_img.src = "penaltick.PNG";

            if (
                typeof tim.penali_Semi_final !== "undefined" &&
                tim.penali_Semi_final !== null &&
                tim.penali_Semi_final !== ""
            ) {
                const team_penals1 = document.createElement("div");
                team_penals1.classList.add("team_penals");
                const team_penals_name = document.createElement("div");
                team_penals_name.classList.add("team_penals_name");

                const team_penals_gol = document.createElement("div");
                team_penals_gol.classList.add("team_penals_gol");

                const p3 = document.createElement("p");
                p3.id = "tim_grup_penals";
                p3.textContent = tim.penali_Semi_final;

                if (j === 0) {
                    teamDiv.append(img, p1);
                    team_container_of_point.appendChild(p2);
                    tim_container.append(teamDiv, team_container_of_point, vsDiv);
                    container_of_tims.appendChild(tim_container);

                    TI.appendChild(container_of_tims);

                    team_penals_name.innerHTML = `<span>${prvoSlovo}</span>${slova}`;
                    team_penals_gol.textContent = tim.penali_Semi_final;
                    team_container_of_point.appendChild(p2);
                    team_penals1.append(team_penals_name, team_penals_gol);
                    container_penal_info.append(team_penals1, penals_img);
                } else if (j === 1) {
                    teamDiv.append(img, p1);
                    team_container_of_point.appendChild(p2);
                    tim_container.append(team_container_of_point, teamDiv);
                    container_of_tims.appendChild(tim_container);
                    TI.appendChild(container_of_tims);

                    team_penals_name.innerHTML = `<span>${prvoSlovo}</span>${slova}`;
                    team_penals_gol.textContent = tim.penali_Semi_final;
                    team_penals1.append(team_penals_gol, team_penals_name);
                    container_penal_info.appendChild(team_penals1);
                }

                container_of_tims.appendChild(tim_container);
                TI.appendChild(container_penal_info);
            } else {
                if (j === 0) {
                    teamDiv.append(img, p1);
                    team_container_of_point.appendChild(p2);
                    tim_container.append(teamDiv, team_container_of_point, vsDiv);
                    container_of_tims.appendChild(tim_container);
                    TI.appendChild(container_of_tims);
                } else if (j === 1) {
                    teamDiv.append(img, p1);
                    team_container_of_point.appendChild(p2);
                    tim_container.append(team_container_of_point, teamDiv);
                    container_of_tims.appendChild(tim_container);
                    TI.appendChild(container_of_tims);
                }
            }
        }
        //TI.appendChild(container_of_tims)
        container.appendChild(TI);
    }
}

function prikaziParoveTimova4(skupTimova, container) {
    for (let i = 0; i < skupTimova.length; i++) {
        const grupa = skupTimova[i];

        const TI = document.createElement("div");
        TI.classList.add("container_grup");
        const container_penal_info = document.createElement("div");
        container_penal_info.classList.add("container_penal_info");

        const container_of_tims = document.createElement("div");
        container_of_tims.classList.add("container_of_tims");
        const tim_container = document.createElement("div");
        tim_container.classList.add("tim_container");

        for (let j = 0; j < grupa.length; j++) {
            const tim = grupa[j];

            const teamDiv = document.createElement("div");
            teamDiv.classList.add("team1");

            const team_container_of_point = document.createElement("div");
            team_container_of_point.classList.add("team_container_of_point");

            const img = document.createElement("img");
            img.id = "tim_grup_img_finale";
            img.src = tim.slika;

            const p1 = document.createElement("p");
            p1.id = "tim_grup_slovo_finale";
            const prvoSlovo = tim.ime[0];
            const slova = tim.ime.slice(1, 3);
            p1.innerHTML = `<span>${prvoSlovo}</span>${slova}`;

            const p2 = document.createElement("p");
            p2.id = "tim_grup_of_point";
            p2.textContent = tim.goals.goals_finale;

            const vsDiv = document.createElement("div");
            vsDiv.classList.add("vs");
            vsDiv.textContent = "vs";

            const penals_img = document.createElement("img");
            penals_img.classList.add("penals_img");
            penals_img.src = "penaltick.PNG";

            if (
                typeof tim.penali_finale !== "undefined" &&
                tim.penali_finale !== null &&
                tim.penali_finale !== ""
            ) {
                const team_penals1 = document.createElement("div");
                team_penals1.classList.add("team_penals");
                const team_penals_name = document.createElement("div");
                team_penals_name.classList.add("team_penals_name");

                const team_penals_gol = document.createElement("div");
                team_penals_gol.classList.add("team_penals_gol");

                const p3 = document.createElement("p");
                p3.id = "tim_grup_penals";
                p3.textContent = tim.penali_finale;

                if (j === 0) {
                    teamDiv.append(img, p1);
                    team_container_of_point.appendChild(p2);
                    tim_container.append(teamDiv, team_container_of_point, vsDiv);
                    container_of_tims.appendChild(tim_container);

                    TI.appendChild(container_of_tims);

                    team_penals_name.innerHTML = `<span>${prvoSlovo}</span>${slova}`;
                    team_penals_gol.textContent = tim.penali_finale;
                    team_container_of_point.appendChild(p2);
                    team_penals1.append(team_penals_name, team_penals_gol);
                    container_penal_info.append(team_penals1, penals_img);
                } else if (j === 1) {
                    teamDiv.append(img, p1);
                    team_container_of_point.appendChild(p2);
                    tim_container.append(team_container_of_point, teamDiv);
                    container_of_tims.appendChild(tim_container);
                    TI.appendChild(container_of_tims);

                    team_penals_name.innerHTML = `<span>${prvoSlovo}</span>${slova}`;
                    team_penals_gol.textContent = tim.penali_finale;
                    team_penals1.append(team_penals_gol, team_penals_name);
                    container_penal_info.appendChild(team_penals1);
                }

                container_of_tims.appendChild(tim_container);
                TI.appendChild(container_penal_info);
            } else {
                if (j === 0) {
                    teamDiv.append(img, p1);
                    team_container_of_point.appendChild(p2);
                    tim_container.append(teamDiv, team_container_of_point, vsDiv);
                    container_of_tims.appendChild(tim_container);
                    TI.appendChild(container_of_tims);
                } else if (j === 1) {
                    teamDiv.append(img, p1);
                    team_container_of_point.appendChild(p2);
                    tim_container.append(team_container_of_point, teamDiv);
                    container_of_tims.appendChild(tim_container);
                    TI.appendChild(container_of_tims);
                }
            }
        }
        container.appendChild(TI);
    }
}
function prikaziParoveTimova5(skupTimova, container) {
    for (let i = 0; i < skupTimova.length; i++) {
        const grupa = skupTimova[i];

        const TI = document.createElement("div");
        TI.classList.add("container_grup");
        const container_penal_info = document.createElement("div");
        container_penal_info.classList.add("container_penal_info");

        const container_of_tims = document.createElement("div");
        container_of_tims.classList.add("container_of_tims");
        const tim_container = document.createElement("div");
        tim_container.classList.add("tim_container");

        for (let j = 0; j < grupa.length; j++) {
            const tim = grupa[j];

            const teamDiv = document.createElement("div");
            teamDiv.classList.add("team1");

            const team_container_of_point = document.createElement("div");
            team_container_of_point.classList.add("team_container_of_point");

            const img = document.createElement("img");
            img.id = "tim_grup_img_finale";
            img.src = tim.slika;

            const p1 = document.createElement("p");
            p1.id = "tim_grup_slovo_finale";
            const prvoSlovo = tim.ime[0];
            const slova = tim.ime.slice(1, 3);
            p1.innerHTML = `<span>${prvoSlovo}</span>${slova}`;

            const p2 = document.createElement("p");
            p2.id = "tim_grup_of_point";
            p2.textContent = tim.goals.goals_third_place;

            const vsDiv = document.createElement("div");
            vsDiv.classList.add("vs");
            vsDiv.textContent = "vs";

            const penals_img = document.createElement("img");
            penals_img.classList.add("penals_img");
            penals_img.src = "penaltick.PNG";

            if (
                typeof tim.penali_trece_mesto !== "undefined" &&
                tim.penali_trece_mesto !== null &&
                tim.penali_trece_mesto !== ""
            ) {
                const team_penals1 = document.createElement("div");
                team_penals1.classList.add("team_penals");
                const team_penals_name = document.createElement("div");
                team_penals_name.classList.add("team_penals_name");

                const team_penals_gol = document.createElement("div");
                team_penals_gol.classList.add("team_penals_gol");

                const p3 = document.createElement("p");
                p3.id = "tim_grup_penals";
                p3.textContent = tim.penali_trece_mesto;

                if (j === 0) {
                    teamDiv.append(img, p1);
                    team_container_of_point.appendChild(p2);
                    tim_container.append(teamDiv, team_container_of_point, vsDiv);
                    container_of_tims.appendChild(tim_container);

                    TI.appendChild(container_of_tims);

                    team_penals_name.innerHTML = `<span>${prvoSlovo}</span>${slova}`;
                    team_penals_gol.textContent = tim.penali_trece_mesto;
                    team_container_of_point.appendChild(p2);
                    team_penals1.append(team_penals_name, team_penals_gol);
                    container_penal_info.append(team_penals1, penals_img);
                } else if (j === 1) {
                    teamDiv.append(img, p1);
                    team_container_of_point.appendChild(p2);
                    tim_container.append(team_container_of_point, teamDiv);
                    container_of_tims.appendChild(tim_container);
                    TI.appendChild(container_of_tims);

                    team_penals_name.innerHTML = `<span>${prvoSlovo}</span>${slova}`;
                    team_penals_gol.textContent = tim.penali_trece_mesto;
                    team_penals1.append(team_penals_gol, team_penals_name);
                    container_penal_info.appendChild(team_penals1);
                }

                container_of_tims.appendChild(tim_container);
                TI.appendChild(container_penal_info);
            } else {
                if (j === 0) {
                    teamDiv.append(img, p1);
                    team_container_of_point.appendChild(p2);
                    tim_container.append(teamDiv, team_container_of_point, vsDiv);
                    container_of_tims.appendChild(tim_container);
                    TI.appendChild(container_of_tims);
                } else if (j === 1) {
                    teamDiv.append(img, p1);
                    team_container_of_point.appendChild(p2);
                    tim_container.append(team_container_of_point, teamDiv);
                    container_of_tims.appendChild(tim_container);
                    TI.appendChild(container_of_tims);
                }
            }
        }
        //TI.appendChild(container_of_tims)
        container.appendChild(TI);
    }
}

function Sixth_final(grupa_of_16) {
    const container_osmina = document.querySelector(
        ".container_all_of_Grup_osmina"
    );
    const title_Sixth_final = document.createElement("p");
    title_Sixth_final.classList.add("title_Sixth_final");
    title_Sixth_final.textContent = "Sixth final";

    const all_tims = document.createElement("div");
    all_tims.classList.add("all_tims");
    prikaziParoveTimova(grupa_of_16, all_tims);
    container_osmina.append(title_Sixth_final, all_tims);
}
function Sixth_final_points(grupa_of_16) {
    const container_osmina = document.querySelector(
        ".container_all_of_Grup_osmina"
    );
    container_osmina.innerHTML = "";

    const title_Sixth_final = document.createElement("p");
    title_Sixth_final.classList.add("title_Sixth_final");
    title_Sixth_final.textContent = "Sixth final";

    const all_tims = document.createElement("div");
    all_tims.classList.add("all_tims");
    prikaziParoveTimova1(grupa_of_16, all_tims);

    container_osmina.append(title_Sixth_final, all_tims);
}

function Quarter(grupa_of_16) {
    const container_osmina = document.querySelector(
        ".container_all_of_Grup_cetvrt"
    );
    const all_tims = document.createElement("div");
    all_tims.classList.add("all_tims");

    const title_Sixth_final = document.createElement("p");
    title_Sixth_final.classList.add("title_Sixth_final");
    title_Sixth_final.textContent = "Quarter final";

    prikaziParoveTimova(grupa_of_16, all_tims);
    container_osmina.append(title_Sixth_final, all_tims);
}

function Quarter_stitches(grupa_of_16) {
    const container_osmina = document.querySelector(
        ".container_all_of_Grup_cetvrt"
    );
    container_osmina.innerHTML = "";

    const title_Sixth_final = document.createElement("p");
    title_Sixth_final.classList.add("title_Sixth_final");
    title_Sixth_final.textContent = "Quarter final";

    const all_tims = document.createElement("div");
    all_tims.classList.add("all_tims");
    prikaziParoveTimova2(grupa_of_16, all_tims);
    container_osmina.append(title_Sixth_final, all_tims);
}

function Semi_finals(grupa_of_16) {
    const container_osmina = document.querySelector(
        ".container_all_of_Grup_polu"
    );

    const title_Sixth_final = document.createElement("p");
    title_Sixth_final.classList.add("title_Sixth_final");
    title_Sixth_final.textContent = "Semi final";

    const all_tims = document.createElement("div");
    all_tims.classList.add("all_tims");
    prikaziParoveTimova(grupa_of_16, all_tims);
    container_osmina.append(title_Sixth_final, all_tims);
}

function Semi_finals_Points(grupa_of_16) {
    console.log(grupa_of_16, "polufinale");

    const container_osmina = document.querySelector(
        ".container_all_of_Grup_polu"
    );
    container_osmina.innerHTML = "";

    const title_Sixth_final = document.createElement("p");
    title_Sixth_final.classList.add("title_Sixth_final");
    title_Sixth_final.textContent = "Semi final";

    const all_tims = document.createElement("div");
    all_tims.classList.add("all_tims");
    prikaziParoveTimova3(grupa_of_16, all_tims);
    container_osmina.append(title_Sixth_final, all_tims);
}

function Finale(Grup_finale, Grup_za_trece1) {
    const container_finalist = document.querySelector(
        ".container_Play-off_for_third_place"
    );
    container_finalist.classList.add("active");
    const container_Grup_finale = document.querySelector(
        ".container_all_of_Grup_finale"
    );

    const title_Sixth_final = document.createElement("p");
    title_Sixth_final.classList.add("title_Sixth_final");
    title_Sixth_final.textContent = "Play-off for third place";

    const contener_winer = document.createElement("div");
    contener_winer.classList.add("contener_winer");

    const title_finalist = document.createElement("p");
    title_finalist.classList.add("title_finalist");
    title_finalist.textContent = "Finalist";

    const all_tims = document.createElement("div");
    all_tims.classList.add("all_tims");

    prikaziParoveTimova(Grup_finale, all_tims);
    container_Grup_finale.appendChild(all_tims);
    contener_winer.append(title_finalist, container_Grup_finale);

    const container_Grup_za_trece1 = document.querySelector(
        ".container_all_of_Grup_za_trece1"
    );

    const contener_Third_place = document.createElement("div");
    contener_Third_place.classList.add("contener_Third_place");

    const title_third_place = document.createElement("p");
    title_third_place.classList.add("title_third_place");
    title_third_place.textContent = "Third place";

    const all_tims2 = document.createElement("div");
    all_tims2.classList.add("all_tims");

    prikaziParoveTimova_thre_place(Grup_za_trece1, all_tims2);
    container_Grup_za_trece1.appendChild(all_tims2);
    contener_Third_place.append(container_Grup_za_trece1, title_third_place);

    container_finalist.append(
        title_Sixth_final,
        contener_winer,
        contener_Third_place
    );
}
function Finalebodovi(Grup_finale, Grup_za_trece1) {
    const container_finalist = document.querySelector(
        ".container_Play-off_for_third_place"
    );
    container_finalist.classList.add("active");
    const container_Grup_finale = document.querySelector(
        ".container_all_of_Grup_finale"
    );
    container_Grup_finale.innerHTML = "";

    const container_Grup_za_trece1 = document.querySelector(
        ".container_all_of_Grup_za_trece1"
    );
    container_Grup_za_trece1.innerHTML = "";

    const title_Sixth_final = document.createElement("p");
    title_Sixth_final.classList.add("title_Sixth_final");
    title_Sixth_final.textContent = "Sixth final";

    const contener_winer_old = document.querySelector(".contener_winer");
    contener_winer_old.remove();
    const contener_Third_place_old = document.querySelector(
        ".contener_Third_place"
    );
    contener_Third_place_old.remove();

    const contener_winer = document.createElement("div");
    contener_winer.classList.add("contener_winer");

    const title_finalist = document.createElement("p");
    title_finalist.classList.add("title_finalist");
    title_finalist.textContent = "Finalist";

    const all_tims1 = document.createElement("div");
    all_tims1.classList.add("all_tims");
    prikaziParoveTimova4(Grup_finale, all_tims1);
    container_Grup_finale.appendChild(all_tims1);
    contener_winer.append(title_finalist, container_Grup_finale);

    const contener_Third_place = document.createElement("div");
    contener_Third_place.classList.add("contener_Third_place");

    const title_third_place = document.createElement("p");
    title_third_place.classList.add("title_third_place");
    title_third_place.textContent = "Third place";

    const all_tims2 = document.createElement("div");
    all_tims2.classList.add("all_tims");
    prikaziParoveTimova5(Grup_za_trece1, all_tims2);
    container_Grup_za_trece1.appendChild(all_tims2);
    contener_Third_place.append(container_Grup_za_trece1, title_third_place);

    container_finalist.append(contener_winer, contener_Third_place);
}

function postaviEventSlusalce() {
    const divElements = document.querySelectorAll(".container_of_tim");

    divElements.forEach((div) => {
        div.addEventListener("click", function () {
            const slikaSrc = this.getAttribute("src");
            const ime = this.getAttribute("tim_grupe_slovo");
            const bodovi = this.getAttribute("tim_grupe_ball");
            // Sada možete koristiti podatke za prikaz u prozoru
            openPopup(slikaSrc, ime, bodovi);
        });
    });
}

function uvecajSliku() {
    var slika = document.getElementById("slika");
    var trenutnaSirina = slika.offsetWidth;
    var novaSirina = trenutnaSirina + 100; // Možete prilagoditi željeno uvećanje

    slika.style.width = novaSirina + "px";
}

function navigateToDiv(targetDivId) {
    var targetDiv = document.querySelector(targetDivId);
    if (targetDiv) {
        targetDiv.scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "nearest",
        });

        // U ovom delu možete dodati dodatnu logiku kako biste pomerili vidljivost div-a na 70%
        var windowHeight = window.innerHeight;
        var targetDivTop = targetDiv.getBoundingClientRect().top;
        var offset = 0.1 * windowHeight; // 70% visine prozora

        // Pomeranje samo ako je div izvan gornjeg 30% prozora
        if (
            targetDivTop < 0.1 * windowHeight ||
            targetDivTop > windowHeight - offset
        ) {
            window.scrollBy(0, targetDivTop - 0.1 * windowHeight);
        }
    }
}

function changeTitle() {
    const Container = document.querySelector(".main-hede");
    const container_DIV = document.createElement("div");
    container_DIV.classList.add("team-DIV");

    const imgTitle = document.createElement("img");
    imgTitle.classList.add("team-image-cup");
    imgTitle.src = "Image of tim/pngwing.com(2).png";
    //Title.appendChild(imgTitle);

    sortirano_finale.forEach((tim) => {
        tim[0];

        const img = document.createElement("img");
        img.classList.add("team-image");
        img.src = tim[0].slika;
        const p = document.createElement("p");
        p.classList.add("team-name");
        p.textContent = tim[0].ime.slice(0, 3);

        container_DIV.append(img, p, imgTitle);

        Container.append(container_DIV);
    });
}

function showTitles(tittle_button) {
    var sirinaEkrana = window.innerWidth;
    var tittles = document.querySelectorAll(".title");
    var tittleContainer = document.querySelector(".Container_title");
    

    if (sirinaEkrana > 800) {
        tittleContainer.classList.add("active");
    } else  {
        tittleContainer.classList.remove("active");
    }

    tittles.forEach(function (tittle) {
        var ariaLabel = tittle.getAttribute("aria-label");
        if (tittle_button === "Round of 16" && ariaLabel === "Round of 16") {
            tittle.style.display = "block";
        } else if (
            tittle_button === "Quarter final" &&
            ariaLabel === "Quarter final"
        ) {
            tittle.style.display = "block";
        } else if (tittle_button === "Semi final" && ariaLabel === "Semi final") {
            tittle.style.display = "block";
        } else if (tittle_button === "Finalists" && ariaLabel === "Finalists") {
            tittle.style.display = "block";
        }
    });
}




function toggleDisplay(screenWidth, elementsToToggle, targetButton) {
    
    
    if (screenWidth <900){

        if(elementsToToggle && targetButton === "Round of 16"){
                
                elementsToToggle.classList.remove = 'disabled';
                

        }else if (elementsToToggle && targetButton==="Quarter final" ){
            
            elementsToToggle.classList.remove = 'disabled';
        
            

        }else if ( elementsToToggle&& targetButton==="Semi final" ){

            elementsToToggle.classList.remove = 'disabled';
            
        

        }else if (  elementsToToggle &&targetButton==="Finalists" ){
        
            elementsToToggle.classList.remove = 'disabled';
            

        }else if (screenWidth <900  && element && targetButton==="End" ){ 
            elementsToToggle.style.display = 'block';
        
            
            
        }
    }else{
        elementsToToggle.style.display = 'block'
    }


}

        

