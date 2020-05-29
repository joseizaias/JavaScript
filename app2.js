/****
 /// No html colocar
// <style>
//	td:hover{baground-color:#ddd;;}
// </style>
*****/ 

function mudarImagem(){
	let imagem = this.innerHTML;
	let estrelaON = '<img src="star_on.gif">';
	let estrelaOFF = '<img src="star_off.gif">';
	
	if (imagem === estrelaOFF || imagem === estrelaON) {
		this.innerHTML = imagem === estrelaOFF ? estrelaON : estrelaOFF;
	}
}

function trocaImagemTabela(){
	let rIndex, cIndex;
	
	//Table rows
	for (let r = 0; r < this.rows.length; r++){
		// row cells
		for (c=0; c < this.rows[r].cells.length; c++){
			this.rows[r].cells[c].addEventListener('click', mudarImagem);
		}
	}
}

function listaTabelaHTML(){
    let rIndex, cIndex;
	//Table rows
	for (let r = 0; r < tabela.rows.length; r++){
		
		// row cells
		for (c=0; c < tabela.rows[r].cells.length; c++){
			tabela.rows[r].cells[c].addEventListener('click', function(){
				console.log (this);
				console.dir(this);
				rIndex = this.parentElement.rowIndex;
				cIndex = this.cellIndex;
				console.log('Row: ' + rIndex + ' Cell: ' + cIndex);
			});
		}
	}
}

function mudarACor(){
	this.bgColor=  this.bgColor === 'yellow' ? 'red' : 'yellow';
}

function trocaCorTabela(){
	//Table rows
	for (let r = 0; r < tabela.rows.length; r++){
		
		// row cells
		for (c=0; c < tabela.rows[r].cells.length; c++){
			tabela.rows[r].cells[c].addEventListener('click', mudarACor);
		}
	}
	
}
 
let tabela = document.querySelector('#atable');
let starTable = document.querySelector('#startable');

////   let rIndex, cIndex; (posso mover para dentro da função???

tabela.addEventListener('click', trocaCorTabela);
starTable.addEventListener('click',trocaImagemTabela);

/* //  const btn = document.getElementById('first');
const btn = document.querySelector('#first');
const img = document.querySelector('#imagem');

btn.addEventListener('click', function(){
	this.style.background = '#ff8';
});

function helloWorld(){
	alert('Hello World!!!');
	this.removeEventListener('click', helloWorld);
}

btn.addEventListener('mouseover', function(){
	this.style.background = '#00f';
});

btn.addEventListener('dblclick', function (){
	const body = document.querySelector ('body');
	let paragraph = document.createElement('p');
	let node = document.createTextNode('This is the first paragraph!');
	
	paragraph.appendChild(node);
	body.appendChild(paragraph);
});

img.addEventListener('click', helloWorld);


 */


/* 				function clicked() {
					var columnNum = parseInt( this.index ) + 1;
					var rowNum = parseInt( this.parent().index )+1;
					
					alert('Clicked at: ' + rowNum + ', ', + columnNum);
					//// alert("clicked cell at: " + (this).cellIndex + ", ");	
					//// alert("clicked cell at: " + this.cellIndex + ", " + this.parentNode.rowIndex);
				}

				const tabela = document.querySelector ('#atable');

				tabela.addEventListener('click', clicked);
 */