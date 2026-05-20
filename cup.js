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

        

