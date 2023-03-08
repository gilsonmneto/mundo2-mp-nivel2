let swap = (arr, index1, index2) => {
	let tempValue = arr[index1];
	arr[index1] = arr[index2];
	arr[index2] = tempValue;
	//return arr;
};

let shuffle = (arr, shift) => {
	for (shift; shift > 0; shift--) {
		let shift2 = Math.floor(Math.random() * (shift + 1));
		swap(arr, shift, shift2);
	}
	return arr;
};

let bubble_sort = (arr) => {
	let len = arr.length;
	for (let i = 0; i < len; i++) {
		for (let j = 0; j < len; j++) {
			if (arr[j] > arr[j + 1]) {
				swap(arr, j, j + 1);
			}
		}
	}
	return arr;
};

let selection_sort = (arr) => {
	for (let i = 0; i < arr.length; i++) {
		// Encontra o menor número no sub-conjunto
		let lowest = i;
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[j] < arr[lowest]) {
				lowest = j;
			}
		}
		if (lowest != i) {
			swap(arr, i, lowest);
		}
	}
	// return arr;
};

let quick_sort = (arr, startIndex, finalIndex) => {
	if (startIndex == undefined) {
		startIndex = 0;
	}
	if (finalIndex == undefined) {
		finalIndex = arr.length - 1;
	}
	if (startIndex >= finalIndex) {
		return;
	}
	let index = particionamento(arr, startIndex, finalIndex);

	quick_sort(arr, startIndex, index - 1);
	quick_sort(arr, index + 1, finalIndex);
	// return arr;
};

let particionamento = (arr, startIndex, finalIndex) => {
	const pivotValue = arr[finalIndex];
	let pivotIndex = startIndex;
	for (let i = startIndex; i < finalIndex; i++) {
		if (arr[i] < pivotValue) {
			// Troca elementos
			swap(arr, i, pivotIndex);
			pivotIndex++;
		}
	}
	swap(arr, pivotIndex, finalIndex);
	return pivotIndex;
};

let teste = quick_sort([5, 6, 1, 8, 3]);
console.log(teste);

function add() {
	var valor = document.getElementById("valor").value;
	var valores = document.getElementById("valores");
	var node = document.createElement("li");
	var texto = document.createTextNode(valor);
	node.appendChild(texto);
	valores.appendChild(node);
}

function ordenar() {
	var algoritmo = document.getElementById("algoritmo").value;
	var valores = document.getElementById("valores");
	var arrValores = Array.from(valores.children).map((e) => parseInt(e.innerHTML));
	eval(algoritmo + "(arrValores)");
	valores.innerHTML = "";
	arrValores.map((i) => {
		var node = document.createElement("li");
		var texto = document.createTextNode(i);
		node.appendChild(texto);
		valores.appendChild(node);
	});
}

function misturar() {
	let valores = document.getElementById("valores");
	let arrValores = Array.from(valores.children).map((e) => parseInt(e.innerHTML));
	shuffle(arrValores, arrValores.length - 1);
	valores.innerHTML = "";
	arrValores.map((i) => {
		let node = document.createElement("li");
		let texto = document.createTextNode(i);
		node.appendChild(texto);
		valores.appendChild(node);
	});
}
