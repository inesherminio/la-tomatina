# La Tomatina

## Description

La Tomatina is a game, inspired by the Tomatina festival in Pamplona, Spain. In La Tomatina, the player has to move itself horizontally throughout the game area, and hit the incoming white-dressed people, known as "festivaleros", with tomatoes, summing points on the scoreboard. The player loses either when the more than three festivaleros reach the player's side without being hit, when he gets hit by more than 2 tomatoes thrown away by festivaleros, or when he hits a clothesline instead of a festivalero.

## MVP

- Has a player that moves horizontally, using the left and right arrow keys;
- The player is able to throw tomatoes, using the enter key;
- Festivaleros appear randomly from the top of the screen, moving downwards/vertically;
- One festivalero reaching the opposite game area (the player's one), ends the game;
- The tomatoes thrown by the player stain on festivaleros, eliminating them;
- Having a scoreboard of tomatoes throwned at festivaleros;
- Everytime a festivalero gets hit by a tomato, the scoreboard increases by 1;
- Increasing the difficulty, by reducing the time of generation of festivaleros.

## Bonus/Extra

- Tomato appears one time in the player's left-hand and one on the right-hand;
- Random festivaleros can also throw tomatoes;
- Creating a cleaning-bar scoreboard, for the payer;
- When the cleaning-bar reaches 0, the player loses;
- Ocasionally, clotheslines appear instead of festivaleros;
- If the player hits a clothesline, he loses;
- Create a scoreboard for festivaleros that win/reach the other side clean;
- Randomly the player gets a pumped up tomato to throw, which makes it easier to hit the target;
- The gameover screen shows the player's score.

## Data Structure

1. game.js

   - Game () {}
   - drawSceene () {}
   - setControls() {}
   - drawTomatoes() {}
   - generateTomatoPlayer() {}
   - generateTomatoFestivalero() {}
   - festivaleroThrowsTomato() {}
   - moveTomatoes() {}
   - removeTomatoes() {}
   - drawFestivaleros() {}
   - generateFestivaleros() {}
   - moveFestivaleros() {}
   - hitFestivaleros() {}
   - festivalerosWinning() {}
   - drawClothesRack() {}
   - generateClothesRack() {}
   - moveClothesRack() {}
   - hitClothesRack() {}
   - randomTarget() {}
   - hitPlayer() {}
   - gameoverAction() {}
   - gameoverCheck() {}
   - clearCanvas() {}
   - drawElements() {}
   - moveElements() {}
   - checkAllCollisions() {}
   - gameLoop() {}

2. player.js

   - Player() {this.x, this.y, this.width, this.height, this.imageRight, this.imageLeft, this.image.src, this.tomatoImage, this.ctx, this.side, this.tomatoSize}
   - draw() {}
   - moveLeft() {}
   - moveRight() {}

3. festivalero.js

   - Festivalero() {this.x, this.y, this.width, this.height, this.image, this.imageLeft, this.image.src, this.speed, this.difficulty, this.ctx, this.attacker, this.tomatoImage}
   - draw() {}
   - move() {}
   - floorCollision() {}

4. tomatoes.js

   - Tomato() {this.x, this.y, this.width, this.height, this.image, this.image.src, this.speed, this.ctx, this.origin}
   - draw() {}
   - move() {}
   - tomatoHitsTarget() {}
   - canvasCollision() {}

5. clothe-racks.js
   - ClotheRacks() {this.x, this.y, this.width, this.height, this.image, this.image.src, this.speed, this.difficulty, this.ctx}
   - draw() {}
   - move() {}
   - floorCollision() {}

## States y States Transitions

- splashScreen
- gameScreen
- gameoverScreen

## Tasks

1. main - target DOM elements
2. main - define canvas setup
3. main - define game object
4. game - add event listeners
5. game - create class Game
6. game - create game loop
7. player - create class Player
8. player - draw
9. player - move
10. tomatoes - create class Tomato
11. tomatoes - draw
12. tomatoes - move
13. festivalero - create class Festivalero
14. festivalero - draw
15. festivalero - move
16. festivalero - gets hit
17. festivalero - collision with bottom
18. game - add target
19. game - add tomatoes
20. game - check gameover
21. festivalero - throw
22. player - gets hit
23. clothe-racks - create class ClotheRacks
24. clothe-racks - draw
25. clothe-racks - move
26. clothe-racks - gets hit
27. tomatoes - create class PumpedUpTomato
28. tomatoes - draw pumpedUpTomato
29. tomatoes - move pumpedUpTomato
30. game - create random tomato in add tomato function
31. others

## Additional Links

**Trello**
https://trello.com/b/Safym8kV/la-tomatina

**Slides**
https://docs.google.com/presentation/d/1v1yvwayeMtHIOZx6c9-CdYfwdJKE11yzy5f2Ex4o_Fo/edit?usp=sharing
