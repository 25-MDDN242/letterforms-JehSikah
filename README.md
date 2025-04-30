[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/m3rrFl41)
[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-2e0aaae1b6195c2367325f4f02e2d04e9abb55f0b24a779b69b11b9e10269abc.svg)](https://classroom.github.com/online_ide?assignment_repo_id=18842557&assignment_repo_type=AssignmentRepo)
## MDDN 242 2025 Assignment 2

# TITLE
by Jess Merriman

Pages: https://25-mddn242.github.io/letterforms-JehSikah/ 

### MY DESIGN PROCESS

My design process started by looking into interesting fonts for inspiration. 
Initially, I was inspired by funky 70's fonts cause of their fun aethstetic. From these, I mainly wanted to implement the bright colours and fun curves.

///INSERT IMAGE///

Eventually, I decided to go a new direction.

Inspired by Minecraft's enchanting table UI, I chose to replicate the Standard Galactic Alphabet. To stay under the variable limit, I aimed to create the letters in the least amount of parts possible while still looking relatively similar to the original font.

To do this, I picked out the main features of the font. This original consisted of a lot of straight lines but I make wanted a more rounded version. 
(I was also unaware the Standard Galactic Alphabet had numbers as the pictures I was using didn't include them, so I made my own)

I ended up using a line, circle and an arc.

I started by taking an image of the original alphabet and drawing over it using only my three shapes.

///INSERT IMAGE///

After planning out my alphabet, I coded a 5x5 grid and coordinated the x and y values of each shape to be centered in a cell of the grid. This ensured every letter was drawn within the same scale and alignment.

///INSERT IMAGE///

After drawing out the bare bones of my font, I experimented with how I could make it more visually interesting.
I began by colour picking some colours from the Minecraft UI, usingg a light tan bfor my background and a purple for my font. 
I then added a glowing effect to incorporate the magical aspect of my enchanting precedent. This gave off a neon sign-esque vibe so I used a more vibrant purple for the text and added a lighter stroke in the middle to really mimic neon signs.
Finally, I added extra thinner strokes to the arc and circle parts of my letters to give a little more visual interest.

At this point, I was pretty happy with my font, but it was still quite plain to look at, especially compared to a lot of other shared works in class. 

Instead of adding more to my font, I added to the background. 
Since my font is pretty unintelligable, for my first test I drew a simple baby learning how to speak. 
I further developed this idea into an alien trying to communicate with a human and developed assets of an astronaut, a green tentacly alien I've dubbed "Albert", and a galaxy scene for the background. 

I separated Albert into his limbs, main body and mouth in order to animate him talking when interacting with the exhibition, causing him to open his mouth and his body to enlarge. This also presented another optional challenge of making Albert not talk when typing non-alphabetical or non-numerical characters which I was able to implement with the help of Stack Overflow.

While on an animation high, I thought it'd be nice to add a bit of movement to the scene so it didnt look so static. Seeing as my scene is in space, I gave the astronaut and Albert a subtle bob up and down as if in cartoony zero gravity. I also made them bob on different waves so that they weren't in perfect sync and looked more dynamic.

Finally, I added a feature that highlights each letter when typed to bring attention back to the font. This feature looks pretty nice when the code autoswaps words.





### REFERENCES
**Glow Tutorial:**
https://www.youtube.com/watch?v=iIWH3IUYHzM 


**Space Bobbing:**
https://www.youtube.com/watch?v=PEO4fhXMQ9s&ab_channel=KevinWorkman 


**Key Press Detection:**
https://stackoverflow.com/questions/52882144/replacement-for-deprecated-keypress-dom-event 



(Replace this README with information about your alphabet. This is an example.)

Each of my letters is composed with two circles. The size and position of the first circle is fixed, but the location and size of the second circle is controlled by three parameters.

The three parameters per letter:
  * `size` : radius of the second circle
  * `offsetx` : x offset of the second circle relative to the first one
  * `offsety` : y offset of the second circle relative to the first one

test

create basic abcs wih circles for rounded 70s text, dont really like how it looks


experimented w/ curves

abandoned those and made minecraft thing/unown

glow: https://www.youtube.com/watch?v=iIWH3IUYHzM 
interpolates



monster alien speech bubble
comic sans of aliens

draw loop in exhibition, under system background colour


baby became alien ctrying to talk to human
did a bunch of art
variability when they talk, mouth tied into variabe in interp letter
space bobbing 
https://www.youtube.com/watch?v=PEO4fhXMQ9s&ab_channel=KevinWorkman 




