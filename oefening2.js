const rainbow = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet', 'violet'];

let oefening2 = () => {
    // Maak hier oefening 2
    let tablerow = document.getElementById('tableRow');
    let tablebody = document.getElementById('tableBody');
    tablerow.innerHTML = '';

    for (let i = 0; i < rainbow.length; i++) {
        let tableitem = document.createElement('td');
        tableitem.innerText = rainbow[i]
        tableitem.style.width = (100 / rainbow.length) + '%';

        tableitem.addEventListener("mouseover", function () {
            tableitem.style.color = 'white';
            tableitem.style.backgroundColor = rainbow[i];
        });
        tableitem.addEventListener("mouseout", function () {
            tableitem.style.color = 'black';
            tableitem.style.backgroundColor = 'white';
        });
        tableitem.addEventListener("click", function () {
            let input = 0;
            while (input > rainbow.length || input < 1|| isNaN(input)) {
                input = prompt(`At which position should i add it (1-${rainbow.length})`);
            }
            let newrow = document.createElement('tr');
            tablebody.append(newrow);
            for (let i = 0; i < rainbow.length; i++) {
                if (i == input - 1) {
                    let tableItem2 = document.createElement('td');
                    tableItem2.innerText = tableitem.innerText;
                    tableItem2.style.backgroundColor = tableitem.innerText;
                    tableItem2.style.textAlign = 'center';
                    tableItem2.style.color = 'white';
                    tableItem2.style.width = (100 / rainbow.length) + '%';
                    tableItem2.addEventListener("click", function () {
                        let input3 = 'NOTVALID';
                        while (isValidColor(input3) == false && (input3.lastIndexOf('#') != 0 || input3.length != 7)) {
                            input3 = prompt(`Which color whould you like to add?`);
                        }
                        tableItem2.style.backgroundColor = input3;
                        tableItem2.style.color = 'white';
                        tableItem2.innerText = input3;
                    });
                    newrow.appendChild(tableItem2);
                }
                else {
                    let tableItem2 = document.createElement('td');
                    tableItem2.style.width = (100 / rainbow.length) + '%';
                    tableItem2.addEventListener("click", function () {
                        let input3 = 'NOTVALID';
                        while (isValidColor(input3) == false && (input3.lastIndexOf('#') != 0 || input3.length != 7)) {
                            input3 = prompt(`Which color whould you like to add?`);
                        }
                        tableItem2.style.backgroundColor = input3;
                        tableItem2.style.color = 'white';
                        tableItem2.innerText = input3;

                    });
                    newrow.appendChild(tableItem2);
                }
            }
        });
        tablerow.appendChild(tableitem);
        tablerow.style.textAlign = 'center';
    }
    function isValidColor(strColor) {
        var s = new Option().style;
        s.color = strColor;
        return s.color == strColor.toLowerCase();
    }
}
