document.addEventListener('DOMContentLoaded', () => {
    const fortunes = [
        "Tomorrow will be exactly 24 hours long.",
        "You will breathe air today.",
        "The floor is made out of floor.",
        "Blinking is a required action.",
        "Water is wet.",
        "If you are hungry, you should eat.",
        "The sun will rise from the east.",
        "You just read a fortune.",
        "This fortune is a sentence.",
        "Opening your eyes will allow you to see.",
        "You will breathe at least once today.",
        "Tomorrow will be followed by the day after tomorrow.",
       "Your left shoe will probably still fit your left foot.",
       "Clouds may or may not be in the sky tonight.",
       "If you drop something, it will fall down."
    ];

    const fortuneText = document.getElementById('fortune-text');
    const newFortuneBtn = document.getElementById('new-fortune-btn');

    newFortuneBtn.addEventListener('click', () => {
        const randomIndex = Math.floor(Math.random() * fortunes.length);
        fortuneText.textContent = `"${fortunes[randomIndex]}"`;
    });
});
