const openStepHandler = () => {
  const EL_stepBlock = document.querySelectorAll('.js-step');

  if (EL_stepBlock) {
    EL_stepBlock.forEach((element) => {
      element.addEventListener('click', (event) => {
        if (event.target.classList.contains('js-step-button-open')) {
          element.classList.toggle('close');
        }
      });
    });
  }
};

const activeTab = () => {
  const EL_tabs = document.querySelectorAll('.tabs__input');

  if (EL_tabs) {
    EL_tabs.forEach((currentElement) => {
      currentElement.addEventListener('click', () => {
        currentElement
          .closest('.tabs')
          .querySelectorAll('.js-tabs-label')
          .forEach((el) => el.classList.remove('active'));

        document.querySelector(`[for="${currentElement.id}"]`).classList.toggle('active');
      });
    });
  }
};

const counter = () => {
  const EL_counter = document.querySelector('.js-counter');
  const EL_input = document.querySelector('.js-counter input');

  if (!EL_counter) return;

  let value = Number(EL_input.value.split(' ')[0]);
  let unit = EL_input.value.split(' ')[1];

  EL_counter.addEventListener('click', (event) => {
    if (event.target.classList.contains('js-button-minus')) {
      value = value <= 0 ? 0 : value - 1;
      EL_input.value = `${value} ${unit}`;
    }

    if (event.target.classList.contains('js-button-plus')) {
      value++;
      EL_input.value = `${value} ${unit}`;
    }
  });
};

addEventListener('DOMContentLoaded', () => {
  openStepHandler();
  activeTab();
  counter();
});
