const form = document.querySelector('#form');
const size = document.getElementById('size');
const Table = document.getElementById('table');
const msg = document.querySelector('#msg');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    let num = size.value;
    num = Number(num);
    
    Table.innerHTML = '';

    if (size.value.length <= 0 || isNaN(num)) {
        msg.innerHTML = '<p class="msg">Please enter a number</p>';
        setTimeout(() => document.querySelector('.msg').remove(), 3000);
        size.value = '';
    } else if(num < 2 || num > 12) {
        msg.innerHTML = '<p class="msg">Please enter a number between a minimum of 2 and a maximum of 12</p>';
        setTimeout(() => document.querySelector('.msg').remove(), 3000);
        size.value = '';
    } else {
        multiTable(num, Table);
        size.value = '';
    }

});

function multiTable(size, myTable) {
    const myTables = myTable;
    let table = '';
    for (let i = 1; i <= size; i++) {
        table += '<tr>';
        for (let j = 1; j <= size; j++) {
            table += `<td>${i * j}</td>`;
        }
        table += '</tr>';
    }
    myTables.innerHTML += table;
}
