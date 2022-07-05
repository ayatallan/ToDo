const items = [];
function AddItems() {
    let myInput = document.getElementById("item-input");
    let InputFeild = myInput.value;

    if (InputFeild.length) {
        const itemBox = {
            descreption: InputFeild,
            date: new Date().toLocaleString()

        };
        itemBox.isDone = false;
        items.push(itemBox);
        myInput.value = "";
        render();
    }

}

function render() {
    const Addeditem = document.getElementById("items");
    Addeditem.innerHTML = "";
    items.forEach((element, i) => {
        const newItem = `
    <div class="item ${element.isDone ? "finish" : ""} ">
    <div class="desc">
    
        <span class="decrp">${element.descreption}</span>
<small>${element.date}</small>
    </div>
    <div class="del">
        <div class="myCheckbox">
            <input type="checkbox"  onchange="Togell(${i})">
        </div>
        <div class="X-X"  onclick="remove(${i})">
            &#10060;
        </div>
    </div>
</div>

    `;
        Addeditem.innerHTML += newItem;

    });
    if (items.length === 0) {
        Addeditem.innerHTML = "No items added!";
    }

}

function Togell(index) {
    items[index].isDone = !items[index].isDone;
    render();

}
function remove(index) {
    items.splice(index, 1);
    render();
}