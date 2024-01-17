
let grocery = document.getElementById('grocery');
    grocery.addEventListener('submit', addItem);

    function addItem(event) {
        event.preventDefault();
        let data = this.elements.text_input_list.value;
        let list = document.querySelector('ol');
        let item = document.createElement('li');
        let text = document.createElement('p');

        text.textContent = data;
        this.elements.text_input_list.value = "";
        item.append(text);
        list.append(item); // Append the item to the list, not itself

        let rmvBtn = document.createElement('span');
        rmvBtn.classList.add('remove');
        item.append(rmvBtn);
        rmvBtn.addEventListener('click', deleteItem);
        item.addEventListener('click', doneItem)
    }

function deleteItem(){
    this.parentElement.remove();
}

function doneItem(){
    this.classList.toggle('done');
}