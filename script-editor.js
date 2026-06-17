let currentForm = JSON.parse(localStorage.getItem('form_data')) || { 
    title: "Название формы", 
    description: "", 
    fields: [] 
};

function save() {
    localStorage.setItem('form_data', JSON.stringify(currentForm));
    alert("Сохранено!");
}

function add(type) {
    currentForm.fields.push({ id: Date.now(), type, label: 'Новый вопрос' });
    render('конструктор');
}

function removeField(id) {
    currentForm.fields = currentForm.fields.filter(f => f.id !== id);
    render('конструктор');
}

function render(view) {
    const app = document.getElementById('app');
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    
    if(view === 'конструктор') {
        app.innerHTML = currentForm.fields.map((f, i) => `
            <div class="field-card">
                <input value="${f.label}" style="background:transparent; border:none; color:white; flex-grow:1" onchange="currentForm.fields[${i}].label = this.value">
                <span class="material-symbols-rounded" style="cursor:pointer" onclick="removeField(${f.id})">delete</span>
            </div>
        `).join('');
    } else if(view === 'настройки') {
        app.innerHTML = `<h3>Настройки корпорации</h3><textarea oninput="currentForm.description = this.value">${currentForm.description}</textarea>`;
    }
}
