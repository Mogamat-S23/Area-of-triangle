let height = document.getElementById('h');
let base = document.getElementById('b');
let calculate = document.getElementById('cal')
let c = calculate;

c.addEventListener('click', () => {
    let h =height.value;
    let b = base.value;
    let answer = eval (((1/2) * b * h ));

    document.getElementById('output').innerHTML = answer ;
})