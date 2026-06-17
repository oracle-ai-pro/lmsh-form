let currentForm = JSON.parse(localStorage.getItem('current_editing_form')) || { title: "Название", description: "", fields: [] };

function save() {
    localStorage.setItem('current_editing_form', JSON.stringify(currentForm));
    alert("Форма сохранена!");
}

function render(view) {
    const app = document.getElementById('app');
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    event.target.classList.add('active');
    
    if(view === 'builder') {
        app.innerHTML = `<h3>Конструктор</h3>`; // Здесь будет логика отрисовки полей
    } else if(view === 'settings') {
        app.innerHTML = `
            <h3>Настройки корпорации</h3>
            <textarea oninput="currentForm.description = this.value">${currentForm.description}</textarea>
        `;
    }
}

function exportIframe() {
    const code = `<iframe src="${window.location.href}" width="600" height="400"></iframe>`;
    prompt("Скопируйте HTML код:", code);
}
