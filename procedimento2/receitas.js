const receitas = [
	{
		titulo: "Arroz de Couve-Flor",
		imagem: "imagens/arroz-de-couve-flor.png",
		ingredientes: ["Arroz", "Couve-Flor", "Cebola Média", "Azeite"],
		preparo:
			"Deixe a couve-flor picada. Adicione os ingredientes e refogue bem. Adicione sal, tampe a panela e deixe cozinhar.",
	},
	{
		titulo: "Bolo de Café",
		imagem: "imagens/bolo-de-cafe.png",
		ingredientes: ["Farinha de Trigo", "Açúcar", "Café Coado", "Chocolate em Pó", "Ovos"],
		preparo:
			"Bata o açúcar, as gemas e o café. Adicione farinha e chocolate e mexa bem. Bata as claras e junte à mistura.",
	},
	{
		titulo: "Coxinha de Brigadeiro",
		imagem: "imagens/coxinha-de-brigadeiro.png",
		ingredientes: ["Leite Condensado", "Chocolate em Pó", "Manteiga", "Morango", "Chocolate Granulado"],
		preparo:
			"Junte o leite condensado, chocolate em pó e manteiga. Aqueça no fogo baixo. Envolva os morangos e passe no granulado.",
	},
	{
		titulo: "Arroz de Couve-Flor 2",
		imagem: "imagens/arroz-de-couve-flor.png",
		ingredientes: ["Arroz", "Couve-Flor", "Cebola Média", "Azeite"],
		preparo:
			"Deixe a couve-flor picada. Adicione os ingredientes e refogue bem. Adicione sal, tampe a panela e deixe cozinhar.",
	},
	{
		titulo: "Bolo de Café 2",
		imagem: "imagens/bolo-de-cafe.png",
		ingredientes: ["Farinha de Trigo", "Açúcar", "Café Coado", "Chocolate em Pó", "Ovos"],
		preparo:
			"Bata o açúcar, as gemas e o café. Adicione farinha e chocolate e mexa bem. Bata as claras e junte à mistura.",
	},
	{
		titulo: "Coxinha de Brigadeiro 2",
		imagem: "imagens/coxinha-de-brigadeiro.png",
		ingredientes: ["Leite Condensado", "Chocolate em Pó", "Manteiga", "Morango", "Chocolate Granulado"],
		preparo:
			"Junte o leite condensado, chocolate em pó e manteiga. Aqueça no fogo baixo. Envolva os morangos e passe no granulado.",
	},
];

function getListaIngredientes(receita) {
	let html = "<ul>";
	receita.ingredientes.forEach((ingrediente) => {
		html += "<li>" + ingrediente + "</li>";
	});
	html += "</ul>";
	return html;
}

function getCard(receita) {
	let html =
		`<img class="card-img-top" src="` +
		receita.imagem +
		`"/>
        <div class="card-body">
            <h2 class="card-title">` +
		receita.titulo +
		`</h2>
            <div class="card-text">
               ` +
		getListaIngredientes(receita) +
		` 
            </div>
            <hr/>
            <div class="descricao">` +
		receita.preparo +
		`</div>
        </div>`;
	let card = document.createElement("div");
	card.classList.add("card");
	card.innerHTML = html.trim();
	card.setAttribute("style", "width: 250px;");
	return card;
}

function preencheCatalogo() {
	const pnlCatalogo = document.getElementById("pnlCatalogo");
	receitas.forEach((receita) => {
		const card = getCard(receita);
		pnlCatalogo.appendChild(card);
	});
}
