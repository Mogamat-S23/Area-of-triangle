let height = document.getElementById('h');
let base = document.getElementById('b');
let calculate = document.getElementById('cal')
let c = calculate;

c.addEventListener('click', () => {
    let h =height.value;
    let b = base.value;
    let answer = eval (((1/2) * b * h ));

    document.getElementById('output').innerHTML = answer  ;
    output.value = answer + 'cm²'
})

let btnClear = document.getElementById('clear');

btnClear.addEventListener('click', () => {
    let base = document.getElementById('b')
    base.value = ''

    let height = document.getElementById('h')
    height.value = ''

    let output = document.getElementById('output')
    output.value=''

    document.getElementById('b').innerHTML = ''
    document.getElementById('h').innerHTML = ''
    document.getElementById('output').innerHTML=''
    




});