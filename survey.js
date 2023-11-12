const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const questionsArr = [`What's your name? Nicknames are also acceptable :) `,
  `What's an activity you like doing? `,
  `What do you listen to while doing that? `,
  `Which meal is your favourite (eg: dinner, brunch, etc.) `,
  `What's your favourite thing to eat for that meal? `,
  `Which sport is your absolute favourite? `,
  `What is your superpower? In a few words, tell us what you are amazing at! `];

rl.question(questionsArr[0], (name) => {
  rl.question(questionsArr[1], (activity) => {
    rl.question(questionsArr[2], (music) => {
      rl.question(questionsArr[3], (meal) => {
        rl.question(questionsArr[4], (favFood) => {
          rl.question(questionsArr[5], (sport) => {
            rl.question(questionsArr[6], (superPower) => {
              console.log(`${name} loves listening to ${music} while ${activity}, devouring ${favFood} for ${meal}, prefers ${sport} over any other sport, and is amazing at ${superPower}.`);
              rl.close();
            });
          });
        });
      });
    });
  });
});