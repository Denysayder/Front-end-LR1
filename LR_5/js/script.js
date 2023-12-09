document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector('.contact-form');
    const enteredDataDiv = document.querySelector('.entered-data');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const fullNameInput = document.querySelector('input:nth-child(1)');
        const variantInput = document.querySelector('input:nth-child(2)');
        const phoneInput = document.querySelector('input:nth-child(3)');
        const facultyInput = document.querySelector('input:nth-child(4)');
        const addressInput = document.querySelector('input:nth-child(5)');

        const fullNameRegex = /^[\p{L}\s]{1,10} [\p{L}]\.[\p{L}]\.$/u;
        const variantRegex = /^\d{1,2}$/;
        const phoneRegex = /^\(\d{3}\)-\d{3}-\d{2}-\d{2}$/;
        const facultyRegex = /^[\p{L}]{1,5}$/u;
        const addressRegex = /^м\.\s[\p{L}\s]{1,15}$/u;

        let isValid = true;

        if (!fullNameRegex.test(fullNameInput.value)) {
            fullNameInput.style.borderColor = 'red';
            isValid = false;
        } else {
            fullNameInput.style.borderColor = '';
        }

        if (!variantRegex.test(variantInput.value)) {
            variantInput.style.borderColor = 'red';
            isValid = false;
        } else {
            variantInput.style.borderColor = '';
        }

        if (!phoneRegex.test(phoneInput.value)) {
            phoneInput.style.borderColor = 'red';
            isValid = false;
        } else {
            phoneInput.style.borderColor = '';
        }

        if (!facultyRegex.test(facultyInput.value)) {
            facultyInput.style.borderColor = 'red';
            isValid = false;
        } else {
            facultyInput.style.borderColor = '';
        }

        if (!addressRegex.test(addressInput.value)) {
            addressInput.style.borderColor = 'red';
            isValid = false;
        } else {
            addressInput.style.borderColor = '';
        }

        if (isValid) {
            const fullNameParagraph = document.createElement('p');
            const variantParagraph = document.createElement('p');
            const phoneParagraph = document.createElement('p');
            const facultyParagraph = document.createElement('p');
            const addressParagraph = document.createElement('p');

            fullNameParagraph.textContent = "ПІБ: " + fullNameInput.value;
            variantParagraph.textContent = "Варіант: " + variantInput.value;
            phoneParagraph.textContent = "Телефон: " + phoneInput.value;
            facultyParagraph.textContent = "Факультет: " + facultyInput.value;
            addressParagraph.textContent = "Адреса: " + addressInput.value;

            enteredDataDiv.appendChild(fullNameParagraph);
            enteredDataDiv.appendChild(variantParagraph);
            enteredDataDiv.appendChild(phoneParagraph);
            enteredDataDiv.appendChild(facultyParagraph);
            enteredDataDiv.appendChild(addressParagraph);

            form.reset();
        }
    });


    const table = document.getElementById("coloredTable");
    const colorPicker = document.getElementById("colorPicker");

    // Генерація таблиці
    for (let i = 0; i < 6; i++) {
        const row = table.insertRow(i);
        for (let j = 0; j < 6; j++) {
            const cell = row.insertCell(j);
            const cellNumber = i * 6 + j + 1;
            cell.textContent = cellNumber;

            // Зміна кольору при кліку на колір з палітри
            cell.addEventListener("click", function () {
                const selectedColor = colorPicker.value;
                cell.style.backgroundColor = selectedColor;
            });

            // Зміна кольору рядків при подвійному кліку
            cell.addEventListener("dblclick", function () {
                const cell7Color = document.getElementById("coloredTable").rows[1].cells[0].style.backgroundColor;
                const rows = table.getElementsByTagName("tr");
                for (let k = i; k < rows.length; k += 2) {
                    const cells = rows[k].getElementsByTagName("td");
                    for (let l = 0; l < cells.length; l++) {
                        cells[l].style.backgroundColor = cell7Color;
                    }
                }
            });

            // Зміна кольору при наведенні на клітинку з номером 7
            if (cellNumber === 7) {
                cell.addEventListener("mouseover", function () {
                    cell.style.backgroundColor = getRandomColor();
                });
            }
        }
    }

    // Зміна кольору клітинки 7 при зміні кольору у виборі кольору
    colorPicker.addEventListener("input", function () {
        document.getElementById("coloredTable").rows[1].cells[0].style.backgroundColor = colorPicker.value;
    });

    // Функція для генерації випадкового кольору
    function getRandomColor() {
        const letters = "0123456789ABCDEF";
        let color = "#";
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
});
