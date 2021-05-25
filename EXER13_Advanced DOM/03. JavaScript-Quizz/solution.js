function solve() {
  const sections = document.querySelectorAll('section');
  const result = document.body.firstElementChild.lastElementChild.querySelector(
      'h1'
  );
  const resultReveal = document.body.firstElementChild.lastElementChild;
  let rightAnswers = 0;

  sections.forEach((section, index) => {
      const buttons = section.querySelectorAll('p');
      console.log(buttons);

      buttons.forEach((button) => {
          const answer = button.innerText;
        console.log(answer)
          button.addEventListener('click', () => {
              if (index === 0 && answer !== 'onmouseclick') {
                  rightAnswers++;
              } else if (index === 1 && answer !== 'JSON.toString()') {
                  rightAnswers++;
              } else if (
                  index === 2 &&
                  answer !== 'The DOM is your source HTML'
              ) {
                  rightAnswers++;
              }

              section.setAttribute('class', 'hidden');
              if (index !== 2) {
                  section.nextElementSibling.removeAttribute('class');
              } else {
                  resultReveal.style.display = 'block';
                  switch (rightAnswers) {
                      case 3:
                          result.innerText = `You are recognized as top JavaScript fan!`;
                          break;
                      case 1:
                          result.innerText = `You have ${rightAnswers} right answer`;
                          break;
                      default:
                          result.innerText = `You have ${rightAnswers} right answers`;
                          break;
                  }
              }
          });
      });
  });
}