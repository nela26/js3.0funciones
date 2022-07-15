let colorGlobal = "";
document.addEventListener('keydown', function(event) {
    if (event.key === 'a') {
        colorGlobal = 'gray';
    } else if (event.key === 's') {
        colorGlobal = 'pink';
    } else if (event.key === 'd') {
        colorGlobal = 'black';
    }
    let key1 = document.querySelector('#key1');
    key1.addEventListener("click", () => {
        key1.style.backgroundColor = colorGlobal
    })
    let key2 = document.querySelector('#key2');
    key2.addEventListener("click", () => {
        key2.style.backgroundColor = colorGlobal
    })
    let key3 = document.querySelector('#key3');
    key3.addEventListener("click", () => {
        key3.style.backgroundColor = colorGlobal
    })
    let key4 = document.querySelector('#key4');
    key4.addEventListener("click", () => {
        key4.style.backgroundColor = colorGlobal
    })
})