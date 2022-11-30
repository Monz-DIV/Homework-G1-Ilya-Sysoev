
var questions1 = [ {
    kvist: ' Ты любишь кофе больше чем чай?',
    answer: 'да',
    affirm: 'Круто. Ты выпиваешь больше одной кружки в день?',
    rebuttal: 'Подумай еще раз, я уверен, что ты просто его не распробовал'},
    {
    kvist: ' Ты любишь арабику больше чем рабусту?',
    answer: 'да',
    affirm: 'Круто. Значит тебе нравиться более насыщенный вкус кофе',
    rebuttal: 'В чистом виде рабусту не пьют. Только ценители. Ты ценитель?'
    }];

var questions2 = [ {
    kvist: ' Ты знаешь кофе какой сраны ты любишь больше всего?',
    answer: 'да',
    affirm: 'Круто. Ты уверен',
    rebuttal: 'Не переживай, они все равно все ушли из России'},
    {
    kvist: ' Отлично, со страной определились, а как на счет прожарки? любишь сильную прожарку?',
    answer: 'да',
    affirm: 'Круто. Ты знаешь толк в кофе',
    rebuttal: 'Ну может ты просто еще не распробовал?',
    }];    

 var questions3 = [ {
    kvist: 'Ты любишь итальянский кофе больше чем бразильский?',
    answer: 'да',
    affirm: 'Круто. Но итальянского кофе нет. В Италии его только обжаривают',
    rebuttal: 'Верно, потому что итальяноского кофе нет, есть только итальянская обжарка. Ты знал?'},
    {
    kvist: ' Ты думаешь много стран где кофе популярен так же как и в России?',
    answer: 'да',
    affirm: 'На самом деле, нет. По статистике, часто кофе пьют в небольшом количетсве сран. Ты знал ?',
    rebuttal: 'Все верно, не очень много стран фанатеют от кофе. А ты фанат как я понимаю?'
    }];
    
    var questions4 = [ {
        kvist: 'Мы практически все узнали о тебе и кофе',
        answer: 'да',
        affirm: 'Теперь пожалуй можно выпить кружечку',
        rebuttal: 'Ты что то еще хочешь мне рассказать?'},
        {
        kvist: ' До новых встреч, да?',
        answer: 'да',
        affirm: 'Пока',
        rebuttal: 'не хочешь со мной расставаться?'
        }];
    
for (var i = 0, l=questions1.length; i<l; i++) {
    answer = prompt (questions1[i].kvist);

    if (answer != questions1[i].answer) {
        prompt(questions1[i].rebuttal);
        i--;
    } else {
        prompt (questions1[i].affirm);
    }
}

for (var j = 0, l=questions2.length; j<l; j++) {
    answer = prompt (questions2[j].kvist);

    if (answer != questions2[j].answer) {
        prompt(questions2[j].rebuttal);
        j--;
    } else {
        prompt (questions2[j].affirm);
    }
}

for (var u = 0, l=questions3.length; u<l; u++) {
    answer = prompt (questions3[u].kvist);

    if (answer != questions3[u].answer) {
        prompt(questions3[u].rebuttal);
        u--;
    } else {
        prompt (questions3[u].affirm);
    }
}

for (var e = 0, l=questions4.length; e<l; e++) {
    answer = alert (questions4[e].kvist);

    if (answer != questions4[e].answer) {
        alert(questions4[u].rebuttal);
        e--;
    } else {
        alert (questions4[e].affirm);
    }
}

