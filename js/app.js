let question = document.querySelector('.pre_q');
let answer = document.querySelector('.pre_a');
let answerBtn = document.querySelector('.answer_btn');
let nextQuestionBtn = document.querySelector('.quest_btn');
let answerBlock = document.querySelector('.answer');
let num= 0;
let newImg;


let arr = [
    {
        q: 'Что такое Doctype? Для чего он используется?',
        a: `    Doctype используется для указания типа документа. Он добавляется первой строкой любого HTML документа.

    Служит для того, чтобы браузер мог понять, как ему интерпретировать страницу и в соответствии с каким стандартом парсить страницу`
    },
    {
        q: 'Базовая структура HTML страницы?',
        a: `    Первой строкой обязательно указывается Doctype

    <!DOCTYPE html>

    Затем тег HTML - контейнер, в котором содержится все содержимое страницы

    <html lang = 'en'>
    
    Далее тег head. Он содержит в себе все необходимые данные о HTML странице (заголовок, описание, SEO информация, подключение стилей,шрифтов)

    <head>
        <meta charset="utf-8">
        <title>Interview assistance</title>
        <link rel="stylesheet" href="css/style.css">
    
    Далее body- Содержит в себе всю разметку HTML страницы. Здесь вся видимая часть страницы

    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8">
        <title>Interview assistance</title>
        <link rel="stylesheet" href="css/style.css">
    <body>
    </body>
    </hed>
    </html>`
    },
    {
        q: `Что такое семантика? Какие семантические теги вы знаете?`,
        a: `    Семантика в HTML - это использование правильных тегов, которыеописывают содержание контента внутри себя.
        
    Семантичный тег - это тег, который обладает каким-то пояснением своего предназначения.
    
    По тегу должно быть понятно, что внутри него находится.
    
    <header></header> - Шапка сайта

    <footer></footer> - подвал

    <aside></aside> - боковая панель

    <nav></nav> - навигация по сайту

    <main></main> - основное содержимое документа

    <p></p> - параграф

    <h1></h1> - заголовок

    <em></em> - курсив с семантикой

    <strong></strong> - жирный текст с семантикой

    <ul></ul> - маркированный список и т.д.`
    },
    {
        q: `Какая разница между тегами <strong>, <em> и <b>, <i>`,
        a: `    <strong> и <em> предназначеныдля придания элементу логического выделения.
        
    При чтении страницы поисковыми роботами или screen- ридарами на этих элементах будет сделан акцент`
    },
    {
        q: `Разница между call, apply и bind?`,
        a: `    Из-за запутанности кода может случиться ситуация, когда контекст this будет ссылаться не на тот объект, что нам нужен.
    
    Мы можем сами задать, на какой объект будет ссылаться this в определенной функции.
    
    function showName(firstName, lastName) {
        console.log(firstName + ' ' + lastName)
    }
    
    const user = {
        firstName: 'Ivan',
        lastName: 'Petrov'
    }
    
    Теперь указываем, для функции showName, что this внутри нее должен ссылаться на объукт user.
    
    Для этого есть 3 способа:
    
    call
    
    showName.call(user, 'firstName', 'lastName) - функция showName сразу же вызовется и отработает
    
    apply

    showName.apply(user, ['firstName', 'lastName]) - функция showName сразу же вызовется и отработает

    В call параметры функции записываются через запятые, ихможет быть сколько угодно.
    А в apply может быть только два параметра. Поэтому первый параметр - это всегда объект, а остальные параметры просто записываются внутри массива.

    bind

    showName.bind(user, 'firstName', 'lastName)()

    Параметры также как и в call записфваются через запятую. Но bind не вызывается сразу. Т.е. мы можем передать контекст, а функцию уже вызвать тогда, когда нам это нужно. Либо, если нужно сразу вызвать, то в конце указываем скобки ()`,
    i: 'a'
    }

];

searchQuestion();

function searchQuestion() {
    num = Math.floor(Math.random() * arr.length);
    if(arr[num] === null) {
        searchQuestion();
    } else {
        question.innerText = arr[num].q;
        // question.innerText = arr[4].q;
        console.log(arr[num]);

        answerBtn.addEventListener('click', showAnswer);

        nextQuestionBtn.addEventListener('click', next);
    }
    
}

function showAnswer() {
    answer.innerText = arr[num].a;
    // answer.innerText = arr[4].a;
    if (arr[num].hasOwnProperty('i')) {
        newImg = document.createElement('img');
        newImg.src = `./img/${arr[4].i}.jpg`;
        newImg.style.cssText = 'width: 100%; object-fit: contain; margin: 0 auto; padding-top: 10px';
        
        answerBlock.append(newImg);
        
        
    }
    arr[num] = null;
    console.log(arr);
}

function next() {
    arr[num] = null;
    answer.innerText = '';
    // answerBlock.remove(newImg);
    let str = document.createElement('span');
    str.style.cssText = 'width: 100%; height: 100%';
    if (newImg) {
        newImg.replaceWith(str);
    }
    // newImg.remove();
    // let flag = arr.some((elem)=> {
    //     return elem !== null;
    // });
    // if( flag === false) {
    //     searchQuestion();
    // } else {
    //     clear();
    // }
    searchQuestion();
    
}

function clear() {
    question.innerText = '';
    answer.innerText = '';
}

