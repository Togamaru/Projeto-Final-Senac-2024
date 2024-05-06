function enviarDados() {
    const formulario = document.getElementById("cadFormulario");
    const formData = new FormData(formulario);
    const jsonData = {};

    formData.forEach((value, key) => {
        jsonData[key] = value;
    });

    fetch('http://localhost:8080/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(jsonData)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Erro ao enviar dados');
        }
        return response.json();
    })
    .then(data => {
        console.log('Resposta do servidor:', data);
        alert('Registro salvo com sucesso ' + data.message)
    })
    .catch(error => {
        console.error('Erro:', error);
    });
}

function buscarDados() {
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    if (!email || !senha) {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    const formData = { email, senha };
    
    fetch('http://localhost:8080/user', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Erro ao enviar dados');
        }
        return response.json();
    })
    .then(data => {
        console.log('Resposta do servidor:', data);
        if (data.message === 'Login bem-sucedido!') {
            window.location.href = '../_site/home.html';
        } else {
            alert('Credenciais inválidas!');
        }
    })
    .catch(error => {
        console.error('Erro:', error);
    });
}

function updateDados() {
    const formulario = document.getElementById("cadFormulario");
    const formData = new FormData(formulario);
    const jsonData = {};

    formData.forEach((value, key) => {
        jsonData[key] = value;
    });

    fetch('http://localhost:8080/user', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(jsonData)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Erro ao enviar dados');
        }
        return response.json();
    })
    .then(data => {
        console.log('Resposta do servidor:', data);
        alert(data.message)
    })
    .catch(error => {
        console.error('Erro:', error);
    });
}