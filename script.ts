let jokes = ["What did one hat say to the other? You wait here — I'll go on ahead!",

"Why don't the circus lions eat the clowns? Because they taste funny!",

"What did the pirate say when he turned 80? \"Aye matey.\"",

'Why did the chicken cross the playground? To get to the other slide!',

'Why did the actor fall through the floorboards? They were going through a stage!',

'Why did a scarecrow win a Nobel prize? He was outstanding in his field!',
 
'Why are peppers the best at archery? Because they habanero!',

"What did the duck say after she bought chapstick? Put it on my bill!",

'Why did an old man fall in a well? Because he couldn’t see that well!',

"What do you call a fake noodle? An impasta!",

"What did the three-legged dog say when he walked into a saloon? I’m looking for the man who shot my paw!”",

'How do you tell the difference between a bull and a cow? It is either one or the udder!',

"What’s red and smells like blue paint? Red paint!",

"What’s the difference between a hippo and a Zippo? One is very heavy, the other is a little lighter!",


"What happened when Bluebeard fell overboard in the Red Sea? He got marooned!",

'Why couldn\'t the skeleton go to school? His heart just wasn’t in it.',

"What did the termite say when it walked into a bar? Where's the bar tender?",

'Why can’t you send a duck to space? Because the bill would be astronomical!',

"What does Jeff Bezos do before he goes to sleep? He puts his PJ-Amazon!",

"What happened when the world's tongue-twister champion got arrested? They gave him a tough sentence!",

"What did the mama cow say to the calf? It’s pasture bedtime!",

'How does a vampire start a letter? Tomb it may concern!',

"What do you call an illegally parked frog? Toad!",

"What did one plate say to the other? Dinner is on me!",

'Why do hummingbirds hum? Because they don’t know the words!',

"What do sprinters eat before a race? Nothing. They fast!",

"Two muffins are baking in an oven. One of them looks to the other and says, \"Phew, it\'s getting hot in here!\" The other looks back and says, \"Ack! A talking muffin!",


"What kind of cat likes living in water? An octo-puss",

'Why did the dinosaur cross the road? Because chickens hadn\'t evolved yet.',
  
"What do you call a cow that can't make milk? An udder failure — a milk dud."
]
console.log(jokes.length)
console.log(jokes)
let random = Math.round(Math.random()*jokes.length - 1)
let j = document.getElementById("joke")!;
let r_jokes = j.innerText = jokes[random]
console.log(r_jokes)