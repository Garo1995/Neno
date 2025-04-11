const links = document.querySelectorAll(".animation-box");
const linksAnother = document.querySelectorAll(".animation-another-box");

const totalLinks = links.length;

const snakeLength = links.length;
const opacitySteps = [0.25, 0.5, 0.75, 1, 0.75, 0.5, 0.25];

let firstSnakeIndex = 0;
let secondSnakeIndex = 13;

function updateSnake(startIndex, snakeLength, ) {

    for (let i = 0; i < snakeLength; i++) {
        const opacity = opacitySteps[i % opacitySteps.length];
        const index = (startIndex + i) % totalLinks;
        links[index].style.opacity = opacity;
        linksAnother[index].style.opacity = opacity;
        // linksAnother[index].classList.add(colorClass); // Добавляем цвет
    }
}

setInterval(() => {
    updateSnake(firstSnakeIndex, snakeLength, );

    updateSnake(secondSnakeIndex, snakeLength, );

    // Смещаем индексы
    firstSnakeIndex = (firstSnakeIndex + 1) % totalLinks;
    secondSnakeIndex = (secondSnakeIndex + 1) % totalLinks;
}, 200);




document.querySelectorAll('.animation-another-box').forEach(box => {
    box.addEventListener('animationstart', () => {
        setInterval(() => {
            box.classList.add('active');
        }, 200);
    });
});

