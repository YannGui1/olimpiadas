function pesquisar() {
    // Obtém o elemento HTML com o ID "resultados_pesquisa" onde os resultados serão exibidos.
    let informacoes = document.getElementById("resultados_pesquisa");
  
    let campoPesquisa = document.getElementById("campo-pesquisa").value;
    
    let resultado = "";
    let titulo ="";
    let descricao ="";
    let tags ="";

    if (!campoPesquisa){
        resultado = ` <div class="item-resultado">
            <h3>Atleta não encontrado. Digite o nome do atleta ou esporte.</h3>`
        informacoes.innerHTML = resultado;
        return;    
    }
    campoPesquisa = campoPesquisa.toLowerCase();
    // Itera sobre cada elemento (dado) no array "dados".
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase();
        descricao = dado.descricao.toLowerCase();
        tags = dado.tags.toLowerCase();


        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)){
             // Cria um novo elemento HTML para cada resultado.
            resultado += ` <div class="item-resultado">
            <h2>${dado.titulo}</h2>
            <p class="descricao-meta">
                ${dado.descricao}
            </p>
            <a href="${dado.link}" target="_blank">Mais informações</a>
            </div>`;
        }
            // Atribui o HTML gerado ao elemento "informacoes", atualizando a página com os resultados.
            informacoes.innerHTML = resultado;
    };
    if (!resultado){
        resultado = ` <div class="item-resultado">
       <h3>Atleta não encontrado.</h3>`
       informacoes.innerHTML = resultado;
   }
}

