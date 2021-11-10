const que1 = document.querySelectorAll('.que1');
const que2 = document.querySelectorAll('.que2');
const que3 = document.querySelectorAll('.que3');
const que4 = document.querySelectorAll('.que4');
const que5 = document.querySelectorAll('.que5');
const que6 = document.querySelectorAll('.que6');
const que7 = document.querySelectorAll('.que7');
const que8 = document.querySelectorAll('.que8');
const que9 = document.querySelectorAll('.que9');
const que10 = document.querySelectorAll('.que10');
const que11 = document.querySelectorAll('.que11');
const que12 = document.querySelectorAll('.que12');
const que13 = document.querySelectorAll('.que13');
const que14 = document.querySelectorAll('.que14');
const que15 = document.querySelectorAll('.que15');
const que16 = document.querySelectorAll('.que16');
const que17 = document.querySelectorAll('.que17');
const que18 = document.querySelectorAll('.que18');
const que19 = document.querySelectorAll('.que19');
const que20 = document.querySelectorAll('.que20');
const que21 = document.querySelectorAll('.que21');
const que22 = document.querySelectorAll('.que22');
const que23 = document.querySelectorAll('.que23');
const que24 = document.querySelectorAll('.que24');
const que25 = document.querySelectorAll('.que25');
const que26 = document.querySelectorAll('.que26');
const que27 = document.querySelectorAll('.que27');
const que28 = document.querySelectorAll('.que28');
const que29 = document.querySelectorAll('.que29');
const que30 = document.querySelectorAll('.que30');
const btnComplete = document.querySelector('.btnComplete');
let score;
const question1 = document.querySelector('.question1');
const question2 = document.querySelector('.question2');
const question3 = document.querySelector('.question3');
const question4 = document.querySelector('.question4');
const question5 = document.querySelector('.question5');
const question6 = document.querySelector('.question6');
const question7 = document.querySelector('.question7');
const question8 = document.querySelector('.question8');
const question9 = document.querySelector('.question9');
const question10 = document.querySelector('.question10');
const question11 = document.querySelector('.question11');
const question12 = document.querySelector('.question12');
const question13 = document.querySelector('.question13');
const question14 = document.querySelector('.question14');
const question15 = document.querySelector('.question15');
const question16 = document.querySelector('.question16');
const question17 = document.querySelector('.question17');
const question18 = document.querySelector('.question18');
const question19 = document.querySelector('.question19');
const question20 = document.querySelector('.question20');
const question21 = document.querySelector('.question21');
const question22 = document.querySelector('.question22');
const question23 = document.querySelector('.question23');
const question24 = document.querySelector('.question24');
const question25 = document.querySelector('.question25');
const question26 = document.querySelector('.question26');
const question27 = document.querySelector('.question27');
const question28 = document.querySelector('.question28');
const question29 = document.querySelector('.question29');
const question30 = document.querySelector('.question30');
const lab1 = document.querySelectorAll('.lab1');
const lab2 = document.querySelectorAll('.lab2');
const lab3 = document.querySelectorAll('.lab3');
const lab4 = document.querySelectorAll('.lab4');
const lab5 = document.querySelectorAll('.lab5');
const lab6 = document.querySelectorAll('.lab6');
const lab7 = document.querySelectorAll('.lab7');
const lab8 = document.querySelectorAll('.lab8');
const lab9 = document.querySelectorAll('.lab9');
const lab10 = document.querySelectorAll('.lab10');
const lab11 = document.querySelectorAll('.lab11');
const lab12 = document.querySelectorAll('.lab12');
const lab13 = document.querySelectorAll('.lab13');
const lab14 = document.querySelectorAll('.lab14');
const lab15 = document.querySelectorAll('.lab15');
const lab16 = document.querySelectorAll('.lab16');
const lab17 = document.querySelectorAll('.lab17');
const lab18 = document.querySelectorAll('.lab18');
const lab19 = document.querySelectorAll('.lab19');
const lab20 = document.querySelectorAll('.lab20');
const lab21 = document.querySelectorAll('.lab21');
const lab22 = document.querySelectorAll('.lab22');
const lab23 = document.querySelectorAll('.lab23');
const lab24 = document.querySelectorAll('.lab24');
const lab25 = document.querySelectorAll('.lab25');
const lab26 = document.querySelectorAll('.lab26');
const lab27 = document.querySelectorAll('.lab27');
const lab28 = document.querySelectorAll('.lab28');
const lab29 = document.querySelectorAll('.lab29');
const lab30 = document.querySelectorAll('.lab30');

const questionsArray = [question1, question2, question3, question4, question5, question6, question7, question8, question9, question10,
    question11, question12, question13, question14, question15, question16, question17, question18, question19, question20,
    question21, question22, question23, question24, question25, question26, question27, question28, question29, question30];

const btnNextQuest = document.querySelector('.btnNextQuestion');

let q = 0;

const questNumber = document.querySelectorAll('.questNumber');

let ball;

const shuffle = (questionsArray) => {
    return questionsArray.sort(() => Math.round(Math.random() * 100) - 50);
}

shuffle(questionsArray);

questionsArray[q].style.display = "block";

btnNextQuest.onclick = () => {
    if (q < 29) {
        questNumber[q].style.backgroundColor = "#5781e1"
        questNumber[q].style.color = "#fff";
        questionsArray[q].style.display = "none";
        q += 1;
        questionsArray[q].style.display = "block";
    } else {
        checkAnswers();
        colorizedBedAns();
        console.log(score);
        toFio.innerHTML = FIO.value;
        scor.innerHTML = score;
        for (let i = 0; i < questionsArray.length; i++) {
            questionsArray[i].style.display = "block";
        }
        questNumber[q].style.backgroundColor = "#5781e1"
        questNumber[q].style.color = "#fff";
        endContainer.style.display = "block";
    }
}


const divForm = document.querySelectorAll('.divForm');
const time = 15 * 60;
const r = document.getElementById('r');
let tmp = time;
const closeStartMessage = document.querySelector('.closeStartMessage');
let FIO = document.querySelector('#FIO');
const startContainer = document.querySelector('.startContainer');
const endContainer = document.querySelector('.endContainer');
let toFio = document.querySelector('#toFio');
let scor = document.querySelector('#scor');
let appraisal = document.querySelector('#appraisal');
let passCloseMessage = document.querySelector('#passCloseMessage');
let closeEndMessage = document.querySelector('.closeEndMessage');


btnComplete.onclick = () => {
    checkAnswers();
    colorizedBedAns();
    console.log(score);
    toFio.innerHTML = FIO.value;
    scor.innerHTML = score;
    for (let i = 0; i < questionsArray.length; i++) {
        questionsArray[i].style.display = "block";
    }
    endContainer.style.display = "block";
}


function checkAnswers() {
    score = 0;

    if ((que1[3].checked == true) && (que1[0].checked == false) && (que1[1].checked == false) && (que1[2].checked == false)) {
        score += 1;
    } else {
        question1.setAttribute("name", "badAnswer");
    }

    if ((que2[0].checked == false) && (que2[1].checked == false) && (que2[2].checked == true) && (que2[3].checked == false)) {
        score += 1;
    } else {
        question2.setAttribute("name", "badAnswer");
    }

    if ((que3[0].checked == false) && (que3[1].checked == true) && (que3[2].checked == false) && (que3[3].checked == false)) {
        score += 1;
    } else {
        question3.setAttribute("name", "badAnswer");
    }

    if ((que4[0].checked == false) && (que4[1].checked == true) && (que4[2].checked == false) && (que4[3].checked == false)) {
        score += 1;
    } else {
        question4.setAttribute("name", "badAnswer");
    }

    if ((que5[0].checked == false) && (que5[1].checked == false) && (que5[2].checked == true) && (que5[3].checked == false)) {
        score += 1;
    } else {
        question5.setAttribute("name", "badAnswer");
    }

    if ((que6[0].checked == true) && (que6[1].checked == false) && (que6[2].checked == false) && (que6[3].checked == false)) {
        score += 1;
    } else {
        question6.setAttribute("name", "badAnswer");
    }

    if ((que7[0].checked == true) && (que7[1].checked == false) && (que7[2].checked == false) && (que7[3].checked == false)) {
        score += 1;
    } else {
        question7.setAttribute("name", "badAnswer");
    }

    if ((que8[0].checked == false) && (que8[1].checked == true) && (que8[2].checked == false) && (que8[3].checked == false)) {
        score += 1;
    } else {
        question8.setAttribute("name", "badAnswer");
    }

    if ((que9[0].checked == false) && (que9[1].checked == false) && (que9[2].checked == true) && (que9[3].checked == false)) {
        score += 1;
    } else {
        question9.setAttribute("name", "badAnswer");
    }

    if ((que10[0].checked == true) && (que10[1].checked == false) && (que10[2].checked == false) && (que10[3].checked == false)) {
        score += 1;
    } else {
        question10.setAttribute("name", "badAnswer");
    }

    if ((que11[0].checked == false) && (que11[1].checked == true) && (que11[2].checked == false) && (que11[3].checked == false)) {
        score += 1;
    } else {
        question11.setAttribute("name", "badAnswer");
    }

    if ((que12[0].checked == false) && (que12[1].checked == false) && (que12[2].checked == true) && (que12[3].checked == false)) {
        score += 1;
    } else {
        question12.setAttribute("name", "badAnswer");
    }

    if ((que13[0].checked == false) && (que13[1].checked == false) && (que13[2].checked == false) && (que13[3].checked == true)) {
        score += 1;
    } else {
        question13.setAttribute("name", "badAnswer");
    }

    if ((que14[0].checked == false) && (que14[1].checked == true) && (que14[2].checked == false) && (que14[3].checked == false)) {
        score += 1;
    } else {
        question14.setAttribute("name", "badAnswer");
    }

    if (((que15[0].checked == true) || (que15[3].checked == true)) && (que15[1].checked == false) && (que15[2].checked == false)) {
        score += 1;
    } else {
        question15.setAttribute("name", "badAnswer");
    }

    if ((que16[0].checked == true) && (que16[1].checked == false) && (que16[2].checked == false) && (que16[3].checked == false)) {
        score += 1;
    } else {
        question16.setAttribute("name", "badAnswer");
    }

    if ((que17[0].checked == false) && (que17[1].checked == false) && (que17[2].checked == true)) {
        score += 1;
    } else {
        question17.setAttribute("name", "badAnswer");
    }

    if ((que18[0].checked == true) && (que18[1].checked == false) && (que18[2].checked == false)) {
        score += 1;
    } else {
        question18.setAttribute("name", "badAnswer");
    }

    if ((que19[0].checked == false) && (que19[1].checked == false) && (que19[2].checked == true)) {
        score += 1;
    } else {
        question19.setAttribute("name", "badAnswer");
    }

    if ((que20[0].checked == true) && (que20[1].checked == false) && (que20[2].checked == false) && (que20[3].checked == false)) {
        score += 1;
    } else {
        question20.setAttribute("name", "badAnswer");
    }

    if ((que21[0].checked == false) && (que21[1].checked == false) && (que21[2].checked == true)) {
        score += 1;
    } else {
        question21.setAttribute("name", "badAnswer");
    }

    if ((que22[0].checked == false) && (que22[1].checked == true) && (que22[2].checked == false)) {
        score += 1;
    } else {
        question22.setAttribute("name", "badAnswer");
    }

    if ((que23[0].checked == false) && (que23[1].checked == false) && (que23[2].checked == true) && (que23[3].checked == false)) {
        score += 1;
    } else {
        question23.setAttribute("name", "badAnswer");
    }

    if ((que24[0].checked == false) && (que24[1].checked == true) && (que24[2].checked == false) && (que24[3].checked == false)) {
        score += 1;
    } else {
        question24.setAttribute("name", "badAnswer");
    }

    if ((que25[0].checked == false) && (que25[1].checked == true) && (que25[2].checked == false) && (que25[3].checked == false)) {
        score += 1;
    } else {
        question25.setAttribute("name", "badAnswer");
    }

    if ((que26[0].checked == false) && (que26[1].checked == true) && (que26[2].checked == false) && (que26[3].checked == false)) {
        score += 1;
    } else {
        question26.setAttribute("name", "badAnswer");
    }

    if ((que27[0].checked == false) && (que27[1].checked == true) && (que27[2].checked == false)) {
        score += 1;
    } else {
        question27.setAttribute("name", "badAnswer");
    }

    if (((que28[0].checked == true) || (que28[1].checked == true)) && (que28[2].checked == false)) {
        score += 1;
    } else {
        question28.setAttribute("name", "badAnswer");
    }

    if ((que29[0].checked == true) && (que29[1].checked == false) && (que29[2].checked == false) && (que29[3].checked == false)) {
        score += 1;
    } else {
        question29.setAttribute("name", "badAnswer");
    }

    if ((que30[0].checked == true) && (que30[1].checked == false) && (que30[2].checked == false) && (que30[3].checked == false)) {
        score += 1;
    } else {
        question30.setAttribute("name", "badAnswer");
    }


    if (score > 19) {
        ball = "зачтены!";
        appraisal.innerHTML = ball;
    } else {
        ball = "не зачтены. Пересдача возможна по вторникам. Время и аудиторию Вы можете уточнить на стенде у 307 аудитории либо в группе ВК: https://vk.com/suti_roat"
        appraisal.innerHTML = ball;
    }



    $(function() {
        let request = {
            'FIO': $(FIO).val(),
            'score': score,
            'ball': ball
        }
        $.post('/api.php', request, function (response) {
            if (response != '1') { alert('Что-то пошло не так...');}
        });
        return false;
    });
}

closeStartMessage.onclick = () => {
    if (FIO.value != 0) {
        startContainer.style.display = "none";
        setInterval(function () {
            let c = tmp--;
            let m = (c / 60) >> 0;
            let s = c - m * 60 + "";
            r.textContent = "Осталось " + m + ":" + (s.length > 1 ? "" : "0") + s;
            tmp != 0 || (tmp = time);
            if (m == 0 && s == 1) {
                checkAnswers();
                colorizedBedAns();
                console.log(score);
            }
        }, 1000);
    }
}

closeEndMessage.onclick = () => {
    if (passCloseMessage.value == 46) {
        endContainer.style.display = "none";
        passCloseMessage.value = '';
    }
};


function colorizedBedAns() {
    for (let i = 0; i < 30; i++) {
        if (divForm[i].getAttribute("name") == "badAnswer") {
            divForm[i].style.boxShadow = "0 0 5px red";
        }
    }
}