const input = document.getElementById('new-item');//criando variavel pra cada item
const sendBtn = document.getElementById('send-btn');
const list = document.getElementById('items-list');

sendBtn.addEventListener('click', addItem);//variavel.addEventListener('tipoDevent', nomeFunc);

function addItem() {//funcao
  if (input.value.trim() === '') {//trim e usado para verificar se n ta vazio
    return;//retorna o valor
  }

  const li = document.createElement('li');//n sei direito
  const checkbox = document.createElement('input');//cria um input
  checkbox.type = 'checkbox';//diz q o tipo do input e checkbox
  const label = document.createElement('label');//cria label
  label.textContent = input.value;//diz q o texto da check e o msm que o do input
  li.appendChild(checkbox);//add a check
  li.appendChild(label);// add o texto
  list.appendChild(li);//a lista
  input.value = '';//limpa o input
}

list.addEventListener('change', function(event) {
  const target = event.target;//estudar esses dois
  const parent = target.parentNode;
  if (target.checked) {// se a check for marcado ele 
    //add completo e risca o texto pelo css
    parent.classList.add('completed');
  } else {
    //remove o completo ou seja ela nao risca
    parent.classList.remove('completed');
  }
});
