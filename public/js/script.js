const status = document.getElementById('status');
const table = document.getElementById('table');
const form = document.getElementById('form');
const input = document.getElementById('input');
const employeesName = document.getElementById('name');
const employeesEarnedMoney = document.getElementById('salary');

const ws = new WebSocket('ws://localhost:3000');

function setStatus(value) {
    status.innerHTML = value;
}

function printMessage(value) {

    try {
        const data = JSON.parse(value);
        employeesName.innerHTML = data.name;
        employeesEarnedMoney.innerHTML = data.earnedMoney;
        table.style.display = '';
    } catch (error) {
        table.style.display = 'none';
        alert('Employee not found')
    }

}

form.addEventListener('submit', event => {
    event.preventDefault();

    ws.send(JSON.stringify({ id: input.value }));
    input.value = '';
})

table.style.display = 'none';

ws.onopen = () => setStatus('online');
ws.onclose = () => setStatus('disconnected');
ws.onmessage = response => printMessage(response.data);