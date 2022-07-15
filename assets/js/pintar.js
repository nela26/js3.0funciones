let ele1 = document.getElementById('ele1');
ele1.setAttribute('style', 'background-color: green');

let changeColor = function(element, color) {
    element.style.backgroundColor = color
}


ele1.addEventListener('click', () => changeColor(ele1, 'yellow'))