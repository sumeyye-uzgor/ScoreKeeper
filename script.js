const maxScore = document.querySelector('select');
const btnPlyr1 = document.querySelector('#btnPlyr1');
const btnPlyr2 = document.querySelector('#btnPlyr2');
const btnRst = document.querySelector('#btnRst');
const p1Display = document.querySelector('#p1Display');
const p2Display = document.querySelector('#p2Display');

btnRst.addEventListener('click', function () {
    p1Display.innerText = '0';
    p2Display.innerText = '0';
    btnPlyr2.disabled = false;
    btnPlyr1.disabled = false;
    p2Display.style.color = 'black';
    p1Display.style.color = 'black';
})

btnPlyr1.addEventListener('click', function () {
    const scr = parseInt(p1Display.innerText);
    const scrUpdt = scr + 1;
    p1Display.innerText = `${scrUpdt}`
    const maxScr = parseInt(maxScore.value);
    if (maxScr === scrUpdt) {
        p1Display.style.color = 'green';
        p2Display.style.color = 'red';
        btnPlyr1.disabled = true;
        btnPlyr2.disabled = true;
    }
})

btnPlyr2.addEventListener('click', function () {
    const scr = parseInt(p2Display.innerText);
    const scrUpdt = scr + 1;
    p2Display.innerText = `${scrUpdt}`
    const maxScr = parseInt(maxScore.value);
    if (maxScr === scrUpdt) {
        p2Display.style.color = 'green';
        p1Display.style.color = 'red';
        btnPlyr1.disabled = true;
        btnPlyr2.disabled = true;
    }
})

// maxScore.addEventListener('click', function () {

//     console.log('maxScore should be...')
//     console.log(maxScore.value);
// })