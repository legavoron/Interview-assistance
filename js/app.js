let question = document.querySelector('.pre_q');
let answer = document.querySelector('.pre_a');
let answerBtn = document.querySelector('.answer_btn');
let nextQuestionBtn = document.querySelector('.quest_btn');
let num= 0;

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
    
    Далее тег head. Он содержит в себе все необходимые данные о HTML странице (заголовок, описание, SEO информация, подключение стилей, шрифтов)

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
    }
    

];

searchQuestion();

function searchQuestion() {
    num = Math.floor(Math.random() * arr.length);
    if(arr[num] === null) {
        searchQuestion();
    }
    question.innerHTML = arr[num].q;

    answerBtn.addEventListener('click', showAnswer);

    
}


function showAnswer () {
    answer.innerText = arr[num].a;
}

function hideAnswer() {
    answer.innerHTML = '';
}