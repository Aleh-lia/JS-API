document.addEventListener("DOMContentLoaded", function () {
    // Загрузка данных о занятиях из JSON
    fetch("sportsActivities.json")
        .then(response => response.json())
        .then(data => {
            const scheduleElement = document.getElementById("schedule");

            // Создание элементов расписания на основе данных JSON
            data.forEach(item => {
                const scheduleItem = document.createElement("div");
                scheduleItem.className = "card mt-3 card-body";

                // Создание HTML для отображения информации о занятии
                scheduleItem.innerHTML = `
                    <h3 class="text-center">${item.nameRus}</h3>
                    <p>Время: ${item.time}</p>
                    <p>Макс. количество участников: ${item.maxParticipants}</p>
                    <p>Текущее количество записанных: <span id="${item.nameEng}-current">${item.currentParticipants}</span></p>
                    <button id="${item.nameEng}-btn" class="btn btn-success mr-2 ">Записаться</button>
                    <button id="${item.nameEng}-cancel" class="btn btn-danger" style="display: none">Отменить запись</button>
                `;

                scheduleElement.appendChild(scheduleItem);

                
                const signupButton = document.getElementById(`${item.nameEng}-btn`);
                const cancelButton = document.getElementById(`${item.nameEng}-cancel`);
                signupButton.addEventListener("click", () => {
                    if (item.currentParticipants < item.maxParticipants) {
                        item.currentParticipants++;
                        document.getElementById(`${item.nameEng}-current`).textContent = item.currentParticipants;
                        signupButton.style.display = "none";
                        cancelButton.style.display = "block";
                    }
                });

                
                cancelButton.addEventListener("click", () => {
                    if (item.currentParticipants > 0) {
                        item.currentParticipants--;
                        document.getElementById(`${item.nameEng}-current`).textContent = item.currentParticipants;
                        signupButton.style.display = "block";
                        cancelButton.style.display = "none";
                    }
                });
            });
        });
});