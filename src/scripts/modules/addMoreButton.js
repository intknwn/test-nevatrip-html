/* eslint-disable no-param-reassign */
function addMoreButton() {
  const schedulesWrappers = document.querySelectorAll('.card__times-wrapper');

  schedulesWrappers.forEach((wrapperElem) => {
    const timeButtons = wrapperElem.querySelectorAll('.card__time');

    let newLineButton;

    if (timeButtons.length > 0) {
      timeButtons.forEach((button) => {
        if (newLineButton) {
          button.hidden = true;
        }

        if (!newLineButton && button.offsetTop > button.offsetHeight) {
          newLineButton = button;
          newLineButton.hidden = true;
        }
      });
    }

    if (newLineButton) {
      const moreButton = document.createElement('button');
      moreButton.innerText = 'еще...';
      moreButton.className = 'card__time';
      moreButton.onclick = () => {
        moreButton.hidden = true;
        timeButtons.forEach((button) => {
          button.hidden = false;
        });
      };

      const prevSibling = newLineButton.previousElementSibling;

      prevSibling.after(moreButton);
      prevSibling.hidden = true;
    }
  });
}

export default addMoreButton;
