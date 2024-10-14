const table = document.getElementById('editableTable');
const storageKey = 'tabelaEditavelDados';

// Carrega os dados do localStorage e renderiza na tabela
function loadData() {
    const storedData = localStorage.getItem(storageKey);
    const data = storedData ? JSON.parse(storedData) : [];
    const tbody = table.querySelector('tbody');
    tbody.innerHTML = ''; // Limpa as linhas existentes

    // Cria as linhas da tabela com os dados do localStorage
    data.forEach((rowData) => {
        const row = document.createElement('tr');
        row.innerHTML = `
                    <td contenteditable="true">${rowData.nome}</td>
                    <td contenteditable="true">${rowData.idade}</td>
                    <td contenteditable="true">${rowData.email}</td>
                `;
        tbody.appendChild(row);
    });

    console.log("Dados Carregados")
}

// Salva os dados atualizados no localStorage
function saveData() {
    const data = [];
    const rows = table.querySelectorAll('tbody tr');

    rows.forEach(row => {
        const cells = row.querySelectorAll('td');
        const rowData = {
            nome: cells[0].innerText,
            idade: cells[1].innerText,
            email: cells[2].innerText
        };
        data.push(rowData);
    });

    localStorage.setItem(storageKey, JSON.stringify(data));
    console.log("Dados salvos no localStorage:", data);
}

// Adiciona o evento 'blur' para salvar as alterações ao perder o foco
table.addEventListener('blur', event => {
    if (event.target.tagName === 'TD') {
        saveData();
        loadData();
    }
}, true);


// Carrega os dados ao iniciar
document.addEventListener('DOMContentLoaded', loadData);