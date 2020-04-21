function addCategorizedItem() {
    var category = document.getElementById("category_selector");
    var input = document.getElementById("text_input");

    if (input.value != "") {
        var list = document.getElementById(category.value);
        createItem(list, input);
        input.value = "";
    }
}

function addItem() {
    const list = document.getElementById("todo_list");
    var input = document.getElementById("input_field");

    if (input.value != "") {
        createItem(list, input)
        input.value = "";
    }
}

function clearAllCategorized() {
    document.getElementById("cat1").innerHTML = "";
    document.getElementById("cat2").innerHTML = "";
    document.getElementById("cat3").innerHTML = "";
}

function clearAll() {
    document.getElementById("todo_list").innerHTML = "";
}

function removeItem(item) {
    item.parentNode.removeChild(item);
}

function checkItem(item) {
    if (item.className == "list_item checked") {
        item.className = "list_item";
    }
    else {
        item.className = "list_item checked";
    }
}

function createItem(list, input) {
    var el = document.createElement("li");
    el.setAttribute("class","list_item");
    el.innerText = input.value;

    var deleteButton = document.createElement("button");
    deleteButton.setAttribute("onclick","removeItem(this.parentNode)");
    deleteButton.innerHTML = "❎";
    el.appendChild(deleteButton);

    var checkButton = document.createElement("button");
    checkButton.setAttribute("onclick","checkItem(this.parentNode)");
    checkButton.innerHTML = "✅"
    el.appendChild(checkButton);

    list.appendChild(el);
}