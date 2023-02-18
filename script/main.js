
let navButtons = document.querySelectorAll('#buttonHolder img'),
	theHeadline = document.querySelector('#headLine h1'),
	// collect ALL of the draggable pieces in the drag zone
	puzzlePieces = document.querySelectorAll('.puzzle-pieces img'),
	// collect ALL of the drop zone elements
	dropZones = document.querySelectorAll('.drop-zone'),
	puzzleBoard = document.querySelector('.puzzle-board'),
	// set up a global variable to store a reference to the dragged piece
	draggedPiece;

	const imageParts = ['topLeft', 'topRight', 'bottomLeft', 'bottomRight'];


// these are the "actions" that should happen
function changeBGImage() {	

	puzzleBoard.style.backgroundImage = `url(images/backGround${this.id}.jpg)`;

	dropZones.forEach(item => {item.innerHTML = ""});

	pBoard = document.querySelector(".puzzle-pieces");

	pBoard.innerHTML = "";

		puzzlePieces[0].src = `images/topLeft${this.id}.jpg`;
		puzzlePieces[1].src = `images/topRight${this.id}.jpg`;
		puzzlePieces[2].src = `images/bottomLeft${this.id}.jpg`;
		puzzlePieces[3].src = `images/bottomRight${this.id}.jpg`;
		puzzlePieces.forEach(item => pBoard.appendChild(item));

}

function handleDrag(e) {
	console.log('started draggin me');
	// reference to the element
	e.dataTransfer.setData(draggedPiece, this.id);
}

function handleStartDrag(e) {
	console.log('started draggin me');
	e.dataTransfer.setData(draggedPiece, this.id);
}

function handleDragOver(e) {
	// block the default behaviour 
	e.preventDefault();
}

function handleDrop(e) {
	// block the default behaviour 
	e.preventDefault();
	console.log('dropped on me! :)');

	if (e.target.childElementCount == 0 && !(e.target instanceof HTMLImageElement)){
		let droppedElId = e.dataTransfer.getData(draggedPiece);
	
		// save the dragged piece by its ID, and put it inside the current drop zone
		// put it inside the current drop zone

		this.appendChild(document.querySelector(`#${droppedElId}`));
	} 
}



// how things react when you use the targets

navButtons.forEach(button => button.addEventListener('click', changeBGImage));
// add the drag start handler to all of the puzzle pieces
puzzlePieces.forEach(piece => piece.addEventListener('dragstart', handleStartDrag));
// add the dragover handling to the drop zones
dropZones.forEach(zone => zone.addEventListener('dragover', handleDragOver));
dropZones.forEach(zone => zone.addEventListener('drop', handleDrop));

function blockDefaultBehaviour(e) { // e is shorthand for event -> in this case the nav event
	// don't let the default behaviour of certain elements happen - block it
	e.preventDefault();
}