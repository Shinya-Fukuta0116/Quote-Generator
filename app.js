const quoteText = document.querySelector('.quote'),
  authorName = document.querySelector('.author .name')
quoteBtn = document.querySelector('button');
soundBtn = document.querySelector('.sound'),
  copyBtn = document.querySelector('.copy'),
  twitterBtn = document.querySelector('.twitter'),

  function randomQuote() {
    quoteBtn.classList.add('loading');
    quoteBtn.innerText = 'Loading Quote...';
    fetch('https://api.quotable.io/random').then(res => res.json()).then(result => {
      console.log(result);
      quoteText.innerText = result.content;
      authorName.innerText = result.author;
      quoteBtn.innerText = 'New Quote';
      quoteBtn.classList.remove('loading');
    });
  }

soundBtn.addEventListener('click', () => {

  let utterance = new SpeechSynthesisUtterance(`${quoteText.innerText}`);
  speechSynthesis.speak(utterance);
})

quoteBtn.addEventListener('click', randomQuote);
