const card = document.querySelector('.card');
card.addEventListener('click', 
    () => {
        card.classList.toggle('_flip');
    } 
)

let content = new Map();
content.set('Які дві планети найближчі до Землі?', 'Венера і Марс');
content.set('Як далеко Земля від Сонця?', 'Близько 15 млн км');
content.set('Місяць це планета?', 'Ні, супутник Землі');
content.set('Яка відстань від Місяця до Землі?', '384 000 км');
content.set('Який діаметр Землі?', '13 000 км');
content.set('За скільки часу Земля робить оберт навколо Сонця?', '365,25 днів');
content.set('Чому Сонце сходить на сході?', 'Тому що Земля обертається зі сходу');
content.set('Чи падають метеорити на Землю зараз?', 'Так, багато! Але найбільші з них розміром з зерня.');
content.set('Чому в космосі немає льоду?', 'Немає води, яка б могла замерзнути.');
content.set('Наскільки холодно в космосі?', '-273°C – 0°K');
content.set('Як називається найбільша планета?', 'Юпітер');
content.set('Як називали бога моря римляни?', 'Нептун');
content.set('Місяць здійснює оборот навколо Землі за 31 день?', 'Ні! Місяць обертається навколо Землі за 28 днів');
content.set('Якого кольору Марс, якщо дивитися з Землі?', 'Яскраво-червоний');
content.set('Яку сторону Місяця ми ніколи не побачимо з Землі?', 'Задню сторону');
content.set('На якій відстані знаходиться найближча зірка до Землі?', 'На відстані 11 світлових років');

let indexContent = new Map();
const contentIter = content[Symbol.iterator]();
let index = 1;
for(const item of contentIter){
    indexContent.set(index, item);
    index++;
}

let currentCardNum = 1;

let currentCard = document.querySelector('.card');
let question = document.getElementById("question");
let answer = document.getElementById("answer");

let backBtn = document.querySelector('.arrow.left');
let nextBtn = document.querySelector('.arrow.right');

nextBtn.addEventListener('click', () => {
    if(currentCardNum < 16){
        currentCardNum++;
        getNewCard();
    }
});

backBtn.addEventListener('click', () => {
    if(currentCardNum > 1){
        currentCardNum--;
        getNewCard();
    }
});

function getNewCard(){
    currentCard.classList.add('hide');
    setTimeout(() => {
        let value = indexContent.get(currentCardNum);
        question.innerHTML = value[0];
        answer.innerHTML = value[1];
        currentCard.classList.remove('hide');
    }, 300);
}
