const mode = document.getElementById('mode_icon');

mode.addEventListener('click', () => {
    const form = document.getElementById('login_form');

    if(mode.classList.contains('fa-moon')) {
        mode.classList.remove('fa-moon');
        mode.classList.add('fa-sun');

        form.classList.add('dark');
        return ;
    }
    
    mode.classList.remove('fa-sun');
    mode.classList.add('fa-moon');

    form.classList.remove('dark');
});



const cadastroForms = document.getElementById('btn_checar');
cadastroForms.addEventListener("click", (event ) =>{
    const nomeInput = document.getElementById('nome');
    const idadeInput = document.getElementById('idade');
    const sexoInput = document.getElementById('sexo');

    if (!nomeInput.value || !idadeInput.value || !sexoInput.value){
        event.preventDefault();
        alert('Por Favor, verifique se todos os campos foram preenchidos!');
    }
})