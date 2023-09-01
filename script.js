let myjokes = ["“Never put off till tomorrow what may be done day after tomorrow just as well.”",
    " “Time you enjoy wasting is not wasted time.”",
    "“You can't just turn on creativity like a faucet. You have to be in the right mood. What mood is that Last-minute panic.”",
    " “You may delay, but time will not.”",
    "“Only put off until tomorrow what you are willing to die having left undone”",
    "“I can't think about that right now. If I do, I'll go crazy. I'll think about that tomorrow.”",
    " “Procrastination is the thief of time, collar him.”",
    " “Procrastinate now, don't put it off.”",
    "“I never put off till tomorrow what I can possibly do - the day after.”",
    "“I'll think of it tomorrow, at Tara. I can stand it then. Tomorrow, I'll think of some way to get him back. After all, tomorrow is another day.”",
    "“Time is an equal opportunity employer. Each human being has exactly the same number of hours and minutes every day. Rich people can't buy more hours. Scientists can't invent new minutes. And you can't save time to spend it on another day. Even so, time is amazingly fair and forgiving. No matter how much time you've wasted in the past, you still have an entire tomorrow.”",
    "“A year from now you may wish you had started today.”",
    "“You cannot escape the responsibility of tomorrow by evading it today.”",
    "“It is easier to resist at the beginning than at the end.”",
    "“If it weren't for the last minute, nothing would get done.”",
    " “My advice is, never do to-morrow what you can do today. Procrastination is the thief of time. Collar him!”",
    "“God has promised forgiveness to your repentance, but He has not promised tomorrow to your procrastination.”",
    "“If you get stuck, get away from your desk. Take a walk, take a bath, go to sleep, make a pie, draw, listen to music, meditate, exercise; whatever you do, don't just stick there scowling at the problem. But don't make telephone calls or go to a party; if you do, other people's words will pour in where your lost words should be. Open a gap for them, create a space. Be patient.”",
    " “A day can really slip by when you're deliberately avoiding what you're supposed to do.”",
    "“the best possible way to prepare for tomorrow is to concentrate with all your intelligence, all your enthusiasm, on doing today's work superbly today. That is the only possible way you can prepare for the future.”",
    " “Your Life Is Happening Right Now: Don't let procrastination take over your life. Be brave and take risks. Your life is happening right now.”",
    " “Life always begins with one step outside of your comfort zone.”",
    "“If you choose to not deal with an issue, then you give up your right of control over the issue and it will select the path of least resistance.”",
    " “The thing all writers do best is find ways to avoid writing.”",
    "“Someday is not a day of the week.”",
    " “Never put off till tomorrow the book you can read today.”",
    " “Now is the time to get serious about living your ideals. How long can you afford to put off who you really want to be? Your nobler self cannot wait any longer. Put your principles into practice  now. Stop the excuses and the procrastination. This is your life! You arent a child anymore. The sooner you set yourself to your spiritual program, the happier you will be. The longer you wait, the more youll be vulnerable to mediocrity and feel filled with shame and regret, because you know you are capable of better. From this instant on, vow to stop disappointing yourself. Separate yourself from the mob. Decide to be extraordinary and do what you need to do  now.”",
    " “Success is not obtained overnight. It comes in installments; you get a little bit today, a little bit tomorrow until the whole package is given out. The day you procrastinate, you lose that day's success.”",
    " “Never leave till tomorrow that which you can do today.”"]
    const joke = document.getElementById("main-text");
   
  const generateButton = document.getElementById("generateButton");

generateButton.addEventListener("click", () => {
    const index = Math.floor(Math.random() * myjokes.length- 1);
    // joke.innerHTML= myjokes[index].joke
    joke.innerHTML = myjokes[index];
})