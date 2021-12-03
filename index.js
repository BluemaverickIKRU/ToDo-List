var enterButton = document.getElementById('enter');
var inputData = document.getElementById('userinput');
var ul =  document.querySelector('ul');
var listItems = document.querySelectorAll('li');

function lenghtOfInput() {
    return inputData.value.length;
}

function addDeleteBtn(i) {
    var dele = document.createElement('button');
    dele.innerHTML = 'DELETE';
    i.append(dele);
}

listItems.forEach(function(i) {
    addDeleteBtn(i);
})

function createListItem() {
    var li = document.createElement('li');
    var delBtn = document.createElement('button');
    li.appendChild(document.createTextNode(inputData.value));
    delBtn.innerHTML = 'DELETE';
    ul.appendChild(li);
    li.append(delBtn);
    inputData.value = "";
}

function addAfterClick() {
    if (lenghtOfInput(inputData) > 0) {
        createListItem();
    }
}

function addAfterPress(event) {
    if (lenghtOfInput(inputData) > 0 && event.keyCode === 13) {
        createListItem();
    }
}


function taskDone(event) {
    if (event.target.localName === 'li' || event.target.localName === 'li.done') {
        event.target.classList.toggle('done');
    }
}
function deleteTask(event) {
    if (event.target.innerHTML === 'DELETE') {
        event.path[1].remove();
    };
}


function handleUI(event) {
    taskDone(event);
    deleteTask(event);
}

ul.addEventListener('click',handleUI);
enterButton.addEventListener('click',addAfterClick);
inputData.addEventListener('keypress',addAfterPress);
