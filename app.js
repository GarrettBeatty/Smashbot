import 'dotenv/config';

const phrases = ["Hi there!", "Nice to meet you.", "Welcome!", 
  "I'm glad you're here!", "Well played.", "Good morning.", "Hello.", "Good evening.",
 "Nice to meet you!", "Long time no see!", "We meet again...", "Thanks, as always",
 "Same here!", "Go easy on me!", "OK", "All righ!", "Please wait.", "Ready!", "Thank you for waiting.",
 "I'll be away for a bit", "I'm back.", "I'm taking a break.", "I'll spectate.",
 "I'm gonna take a break.", "Please enter the ring.", "Please wait until the ring is full.",
 "Waiting for other participants.", "Please change teams.",
 "One more battle with the same teams!", "Changing fighter.",
 "Changing stage.", "Changing rules.", "Go easy on me!",
 "Let's have some fun.", "I'm excited!", "I'm so thrilled!",
 "Bring it on!", "You can't stop me!", "I play for keeps...",
 "I'm gonna get flashy!", "I'm gonna win!", "I'm burning to fight!",
 "Let's really go for it!", "I'll end it here!", "I'll win this time!",
 "I can keep going!", "I've got you now!", "Our battle starts here!",
 "Let's have a good battle!", "I'm gonna go all out from the beginning!",
 "Edges don't scare me!", "Lose the battle, win the war, launc the opponent!",
 "Hear the roar of my full-force neutral attack!", "Going for a flashy attack!",
 "I'll take you on!", "Good!", "Good fight!", "Perfect!", "Nice", "Nice fight!",
 "Wonderful!", "Nicely done!", "I expected nothing less!", "Whoa",
 "Lucky!", "It's decided!", "What a great comeback!", "Duntastic!",
 "Nice teamwork!", "What a great team!", "That was a close one!",
 "So close!", "Grrrrr.", "You got me!", "How dissapointing!",
 "I'll try harder next time!", "Congrats!", "Thanks!",
 "I'll leave after a few more rounds.",
 "The next battle is my last.", "I'm gonna head out.",
 "Shutting down the arena!", "Fun times!", "Peace!",
 "Lets smash again!", "Thanks.", "Bye Bye.", "Goodbye.", "Goodnight.",
 "Thank you very much."
];

// Function to generate a random index
function getRandomIndex(max) {
  return Math.floor(Math.random() * max);
}

export function generate_response(message) {

  const shouldReply = shouldRespond();
  if (shouldReply) {
    return phrases[getRandomIndex(phrases.length)];
  }
  return null;
}


import { Client, GatewayIntentBits } from 'discord.js';
const client = new Client({ intents: [
  GatewayIntentBits.Guilds
  , GatewayIntentBits.GuildMessages
  , GatewayIntentBits.MessageContent

] });

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

// Function to decide whether to respond based on probability
function shouldRespond() {
  // 1/20 chance (5% probability)
  return Math.random() < 0.05;
}


client.on('messageCreate', async message => {
  if (!message?.author.bot) {
    let response = await generate_response(message.content)
    
    if (response) {
      await message.channel.send(response)
    }
  }
});

client.login(process.env.DISCORD_TOKEN);