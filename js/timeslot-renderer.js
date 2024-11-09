import * as timeslots from "./timeslot.js";

document.addEventListener("DOMContentLoaded", function() {

    const table = document.querySelector('#timeslots');

    timeslots.getTimeslots().forEach( (t) => {
        const row = document.createElement('tr');

        let col = document.createElement('td');
        col.setAttribute('style', 'font-weight:bold');
        col.textContent = t.slot;
        row.appendChild(col);

        col = document.createElement('td');
        col.textContent = `DJ: ${t.DJ}`;
        row.appendChild(col);

        col = document.createElement('td');
        let a = document.createElement('a');
        a.setAttribute('href', `assigndj.html?id=${t.ID}`);
        a.textContent = "Assign DJ";
        col.appendChild(a);
        row.appendChild(col);

        col = document.createElement('td');
        a = document.createElement('a');
        a.setAttribute('href', `report.html?id=${t.ID}`);
        a.textContent = "View Report";
        col.appendChild(a);
        row.appendChild(col);

        table.appendChild(row);

    });

});