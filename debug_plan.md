## Crashing Bugs 

The start point of this code has 2 bugs.
This was the way I solved them! :)

## A) One Piece Per Spot:

1) Checked the ChildElement of the Puzzle Board; 
2) Created a condition where: If the targets is 0 and not img, allow dropping.

## B) Reseting Puzzle Pieces:

1) Assigned an id to each img in the div with class "puzzle-pieces".
2) Reseted Drop Zones.
3) Called each piece by their id.
4) For each item in the pzlPieces collection, added a child element to the puzzleBoard element.
 