# La Tomatina

## Description

La Tomatina is a game, inspired by the Tomatina festival in Pamplona, Spain. In La Tomatina, the player has to move itself horizontally throughout the game area, and hit the incoming white-dressed people, known as "festivaleros", with tomatoes, summing points on the scoreboard. The player loses either when the one festivalero reaches the player's side without being hit. As a bonus, the player loses if it gets hit by tomatoes too many times, getting too dirty. Additionally, the player loses when he hits a clothes-rack instead of a festivalero, and gets double points on the scoreboard everytime he hits festivaleros with pumped up tomatoes, that occasionally appear.

## MVP

- Has a player that moves horizontally, using the left and right arrow keys;
- The player is able to throw tomatoes, using the enter key;
- Festivaleros appear randomly from the top of the screen, moving downwards/vertically;
- One festivalero reaching the opposite game area (the player's one), ends the game;
- The tomatoes thrown by the player stain on festivaleros, eliminating them;
- Having a scoreboard of tomatoes throwned at festivaleros;
- Everytime a festivalero gets hit by a tomato, the scoreboard increases by 1;
- Reload time for throwing a tomato;
- Increasing the difficulty, by increasing the number of festivaleros.

## Backlog

- Creating a cleaning-bar scoreboard, for the payer;
- When the cleaning-bar reaches 0, the player loses;
- Festivaleros now move randomly in zig-zags, instead of only moving downwards;
- Ocasionally, clothe-racks appear instead of festivaleros;
- If the player hits a clothes-rack loses;
- Randomly the player gets a pumped up tomato to throw;
- If the player hits a festivalero with a pumped up tomato the scoreboard increases by 2;
- In the gameover screen, ask for player's name and show top 5 scores and current player's score.

## Data Structure

1. main.js

   - newGame() {} <!-- ok-->

2. game.js

   - Game () {} <!-- ok-->
   - clearCanvas() {} <!-- ok-->
   - drawElements() {} <!-- ok-->
   - moveElements() {} <!-- ok-->
   - gameLoop() {} <!-- ok-->
   - gameoverCheck() {}
   - setControls() {} <!-- ok-->
   - drawTomatoes() {} <!-- ok-->
   - moveTomatoes() {} <!-- ok-->
   - generateTomatoes() {} <!-- ok-->
   - addTarget() {}

3. player.js

   - Player() {this.x, this.y, this.width, this.height, this.image, this.image.src} <!-- ok-->
   - draw() {} <!-- ok-->
   - moveLeft() {} <!-- ok-->
   - moveRight() {} <!-- ok-->
   - playerGetsHit() {}

4. festivalero.js

   - Festivalero() {this.x, this.y, this.width, this.height, this.image, this.image.src}
   - festivaleroDraw() {}
   - festivaleroMove() {}
   - festivaleroThrow() {}
   - festivaleroGetsHit() {}
   - festivaleroReachesBottom() {}

5. tomatoes.js

   - Tomato() {this.x, this.y, this.width, this.height, this.image, this.image.src, this.speed} <!-- ok-->
   - draw() {} <!-- ok-->
   - move() {} <!-- ok-->
   - PumpedUpTomato extends Tomato() {this.width, this.height}
   - pumpedUpTomatoDraw() {}
   - pumpedUpTomatoMove() {}
   - randomTomato() {}

6. clothe-racks.js
   - ClotheRacks() {this.x, this.y, this.width, this.height, this.image, this.image.src}
   - clotheRacksDraw() {}
   - clotheRacksMove() {}
   - clotheRacksGetsHit() {}

## States y States Transitions

- splashScreen
- gameScreen
- gameoverScreen

## Tasks

1. main - target DOM elements <!-- ok-->
2. main - define canvas setup <!-- ok-->
3. main - define game object <!-- ok-->
4. game - add event listeners <!-- ok-->
5. game - create class Game <!-- ok-->
6. game - create game loop <!-- ok-->
7. player - create class Player <!-- ok-->
8. player - draw <!-- ok-->
9. player - move <!-- ok-->
10. tomatoes - create class Tomato <!-- ok-->
11. tomatoes - draw <!-- ok-->
12. tomatoes - move <!-- ok-->
13. festivalero - create class Festivalero
14. festivalero - draw
15. festivalero - move
16. festivalero - gets hit
17. festivalero - collision with bottom
18. game - add target
19. game - add tomatoes <!-- ok-->
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

## Additional Links

**Trello**
https://trello.com/b/Safym8kV/la-tomatina

**Slides**
