const users = [
  "Liam",
  "Olivia",
  "Noah",
  "Emma",
  "Oliver",
  "Ava",
  "Elijah",
  "Charlotte",
  "William",
  "Sophia",
  "James",
  "Amelia",
  "Benjamin",
  "Isabella",
  "Lucas",
  "Mia",
  "Henry",
  "Evelyn",
  "Alexander",
  "Harper",
  "Michael",
  "Abigail",
  "Ethan",
  "Emily",
  "Daniel",
  "Elizabeth",
  "Matthew",
  "Avery",
  "Jackson",
  "Sofia",
  "Sebastian",
  "Ella",
  "Aiden",
  "Madison",
  "David",
  "Scarlett",
  "Joseph",
  "Victoria",
  "Carter",
  "Grace",
  "Owen",
  "Chloe",
  "Wyatt",
  "Camila",
  "John",
  "Luna",
  "Jack",
  "Nora",
  "Luke",
  "Penelope"
];

const thoughts = [
  "Be yourself; everyone else is already taken.",
  "To live is the rarest thing in the world. Most people exist, that is all.",
  "I think I'm confused",
  "True friends stab you in the front.",
  "Women are made to be Loved, not understood.",
  "Be the change that you wish to see in the world.",
  "Live as if you were to die tomorrow. Learn as if you were to live forever.",
  "No one can make you feel inferior without your consent.",
  "Great minds discuss ideas; average minds discuss events; small minds discuss people.",
  "Do what you feel in your heart to be right - for you'll be criticized anyway.",
  "Do one thing every day that scares you.",
  "Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate; only love can do that.",
  "Our lives begin to end the day we become silent about things that matter.",
  "In the end, we will remember not the words of our enemies, but the silence of our friends.",
  "Injustice anywhere is a threat to justice everywhere.",
  "The time is always right to do what is right.",
  "Life's most persistent and urgent question is, 'What are you doing for others?",
  "Weak people revenge. Strong people forgive. Intelligent People Ignore.",
  "I have not failed. I've just found 10,000 ways that won't work.",
  "Genius is one percent inspiration and ninety-nine percent perspiration.",
  "Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.",
  "If we did all the things we are capable of, we would literally astound ourselves.",
  "Imagination is more important than knowledge. Knowledge is limited. Imagination encircles the world.",
  "Life isn't about finding yourself. Life is about creating yourself.",
  "Success is not final, failure is not fatal: it is the courage to continue that counts.",
  "If you're going through hell, keep going.",
  "We make a living by what we get, but we make a life by what we give.",
  "Peace begins with a smile.",
  "Spread love everywhere you go. Let no one ever come to you without leaving happier.",
  "If you can't feed a hundred people, then feed just one.",
  "Kind words can be short and easy to speak, but their echoes are truly endless.",
  "Isn't it nice to think that tomorrow is a new day with no mistakes in it yet?",
  "Tomorrow is always fresh, with no mistakes in it.",
  "We should regret our mistakes and learn from them, but never carry them forward into the future with us.",
  "It's so easy to be wicked without knowing it, isn't it?",
  "All the darkness in the world cannot extinguish the light of a single candle.",
  "Start by doing what's necessary; then do what's possible; and suddenly you are doing the impossible.",
  "Preach the Gospel at all times and when necessary use words.",
  "A single sunbeam is enough to drive away many shadows.",
  "You never fail until you stop trying.",
  "You see things; you say, 'Why?' But I dream things that never were; and I say 'Why not?",
  "We don't stop playing because we grow old; we grow old because we stop playing.",
  "Progress is impossible without change, and those who cannot change their minds cannot change anything.",
  "A life spent making mistakes is not only more honorable, but more useful than a life spent doing nothing.",
  "Kindness is a language which the deaf can hear and the blind can see.",
  "The secret of getting ahead is getting started.",
  "Whenever you find yourself on the side of the majority, it is time to pause and reflect.",
  "The two most important days in your life are the day you are born and the day you find out why.",
  "Truth is stranger than fiction, but it is because Fiction is obliged to stick to possibilities; Truth isn't.",
  "If you tell the truth, you don't have to remember anything.",
]

const reactions = [
  "This is amazing!",
  "Great job!",
  "Interesting perspective.",
  "I agree with this.",
  "Well said!",
  "Love it!",
  "Awesome!",
  "I'm impressed!",
  "Absolutely!",
  "Fascinating!",
  "Insightful!",
  "Very informative.",
  "Brilliant!",
  "So true.",
  "Incredible!",
  "Fantastic work!",
  "Exactly!",
  "Wonderful!",
  "I'm inspired!",
  "Such a valuable post.",
  "Well articulated.",
  "Spot on!",
  "This deserves more attention.",
  "Superb!",
  "Couldn't agree more.",
  "Exceptional!",
  "I'm amazed!",
  "This resonates with me.",
  "Top-notch!",
  "Remarkable!",
  "Impressive!",
  "I'm captivated!",
  "This is gold!",
  "Thank you for sharing!",
  "This made my day!",
  "Very well written.",
  "I'm blown away!",
  "This needs to be shared widely.",
  "So insightful!",
  "Beautifully written.",
  "This is invaluable!",
  "A must-read!",
  "This is powerful!",
  "I'm moved!",
  "Absolutely brilliant!",
  "Kudos!",
  "This is a game-changer!",
  "So profound!",
  "This is exceptional!",
  "I'm touched!"
];

// Get a random item given an array
const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

// Get a random 
// const getRandomUser = getRandomArrItem(users);
// const getRandomThought = getRandomArrItem(thoughts);

// Function to generate random Reactions that we can add to Thoughts object.
const getRandomReactions = (int) => {
  const results = [];
  for (let i = 0; i < int; i++) {
    results.push({
      reactionBody: getRandomArrItem(reactions),
      username: getRandomArrItem(users)
    });
  }
  return results;
};

// Export the functions for use in seed.js
module.exports = { users, thoughts, getRandomArrItem, getRandomReactions };