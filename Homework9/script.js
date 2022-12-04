
var questions = [ {
    kvist1: ' Ты любишь кофе больше чем чай?',
    kvist2: ' Ты любишь арабику больше чем рабусту?'
    kvist3: ' Ты знаешь кофе какой сраны ты любишь больше всего?',
    kvist4: ' Отлично, со страной определились, а как на счет прожарки? любишь сильную прожарку?',
    kvist5: ' Ты любишь итальянский кофе больше чем бразильский?',
    kvist6: ' Ты думаешь много стран где кофе популярен так же как и в России?',
    kvist7: ' Мы практически все узнали о тебе и кофе',
    kvist8: ' До новых встреч, да?'},

    {
        affirm: 'Круто. Ты выпиваешь больше одной кружки в день?',
        affirm: 'Круто. Значит тебе нравиться более насыщенный вкус кофе',
    }






    
    answer: 'да',
    
    rebuttal: 'Подумай еще раз, я уверен, что ты просто его не распробовал'},
    {
   
    answer: 'да',
    
    rebuttal: 'В чистом виде рабусту не пьют. Только ценители. Ты ценитель?'
    },

    {
    
    answer: 'да',
    affirm: 'Круто. Ты уверен',
    rebuttal: 'Не переживай, они все равно все ушли из России'},
    {
    
    answer: 'да',
    affirm: 'Круто. Ты знаешь толк в кофе',
    rebuttal: 'Ну может ты просто еще не распробовал?',
    },  

    {
    
    answer: 'да',
    affirm: 'Круто. Но итальянского кофе нет. В Италии его только обжаривают',
    rebuttal: 'Верно, потому что итальяноского кофе нет, есть только итальянская обжарка. Ты знал?'},
    {
    
    answer: 'да',
    affirm: 'На самом деле, нет. По статистике, часто кофе пьют в небольшом количетсве сран. Ты знал ?',
    rebuttal: 'Все верно, не очень много стран фанатеют от кофе. А ты фанат как я понимаю?'
    },
    
    {
        
        answer: 'да',
        affirm: 'Теперь пожалуй можно выпить кружечку',
        rebuttal: 'Ты что то еще хочешь мне рассказать?'},
        {
        kvist8: ' До новых встреч, да?',
        answer: 'да',
        affirm: 'Пока',
        rebuttal: 'не хочешь со мной расставаться?'
        }];
    
for (var i = 0, l=questions.length; i<l; i++) {
    answer = prompt (questions[i].kvist);

    if (answer != questions[i].answer) {
        prompt(questions[i].rebuttal);
        i--;
    } else {
        prompt (questions[i].affirm);
    }
}

for (var j = 0, l=questions.length; j<l; j++) {
    answer = prompt (questions[j].kvist);

    if (answer != questions[j].answer) {
        prompt(questions[j].rebuttal);
        j--;
    } else {
        prompt (questions[j].affirm);
    }
}

for (var u = 0, l=questions.length; u<l; u++) {
    answer = prompt (questions3[u].kvist);

    if (answer != questions[u].answer) {
        prompt(questions[u].rebuttal);
        u--;
    } else {
        prompt (questions3[u].affirm);
    }
}

for (var e = 0, l=questions.length; e<l; e++) {
    answer = alert (questions4[e].kvist);

    if (answer != questions[e].answer) {
        alert(questions[u].rebuttal);
        e--;
    } else {
        alert (questions[e].affirm);
    }
}

