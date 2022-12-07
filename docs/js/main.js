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

const calendar = () => {
  const today = new Date();
  let dayInt = today.getDate();
  let month = today.getMonth();
  let year = today.getFullYear();

  const calendarBody = document.querySelector('.js-calendar-days');

  const months = [
    'Январь',
    'Февраль',
    'Март',
    'Апрель',
    'Май',
    'Июнь',
    'Июль',
    'Август',
    'Сентябрь',
    'Октябрь',
    'Ноябрь',
    'Декабрь',
  ];

  const nextBtn = document.querySelector('.js-calendar-next');
  const prevBtn = document.querySelector('.js-calendar-prev');

  const showDate = (event) => {
    calendarBody.querySelectorAll('li').forEach((el) => el.classList.remove('active'));

    event.classList.add('active');

    let showYear = event.getAttribute('data-year');
    let showMonth = event.getAttribute('data-month');
    let showDay = event.getAttribute('data-day');

    console.log(`${showDay} ${months[showMonth]} ${showYear}`);
  };

  const daysInMonth = (month, year) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const blankDates = (count) => {
    for (let x = 0; x < count; x++) {
      let cell = document.createElement('li');
      let cellText = document.createTextNode('');
      cell.appendChild(cellText);
      cell.classList.add('empty');
      calendarBody.appendChild(cell);
    }
  };

  const showCalendar = (month, year) => {
    let firstDay = new Date(year, month).getDay();
    calendarBody.innerHTML = '';
    let totalDays = daysInMonth(month, year);

    blankDates(firstDay === 0 ? 6 : firstDay - 1);
    for (let day = 1; day <= totalDays; day++) {
      const cell = document.createElement('li');
      const cellText = document.createTextNode(day);

      if (dayInt === day && month === today.getMonth() && year === today.getFullYear()) {
        cell.classList.add('active');
      }

      cell.setAttribute('data-day', day);
      cell.setAttribute('data-month', month);
      cell.setAttribute('data-year', year);

      cell.classList.add('singleDay');
      cell.appendChild(cellText);
      cell.onclick = function (e) {
        showDate(e.target);
      };
      calendarBody.appendChild(cell);
    }

    document.querySelector('.js-calendar-month').innerHTML = `${months[month]}, `;
    document.querySelector('.js-calendar-year').innerHTML = year;
  };

  showCalendar(month, year);

  const next = () => {
    year = month === 11 ? year + 1 : year;
    month = (month + 1) % 12;
    showCalendar(month, year);
  };

  const previous = () => {
    year = month === 0 ? year - 1 : year;
    month = month === 0 ? 11 : month - 1;
    showCalendar(month, year);
  };

  prevBtn.addEventListener('click', () => previous());
  nextBtn.addEventListener('click', () => next());
};

const customSelectHandler = () => {
  const EL_paymentVariants = document.querySelector('.js-custom-select');
  const EL_currentPaymentVariant = document.querySelector('.js-custom-select-variant');
  const EL_selectItem = document.querySelectorAll('.js-select-item');
  const EL_selectInput = document.querySelector('.js-custom-select-input');
  const EL_searchInput = document.querySelector('.js-search input');

  if (EL_paymentVariants && EL_currentPaymentVariant) {
    EL_paymentVariants.addEventListener('click', () => {
      EL_paymentVariants.classList.contains('open')
        ? EL_paymentVariants.classList.remove('open')
        : EL_paymentVariants.classList.add('open');

      EL_searchInput.focus();
    });
  }

  if (EL_selectItem) {
    EL_selectItem.forEach((element) => {
      element.addEventListener('click', () => {
        document.querySelectorAll('.custom-select__select-text').forEach((el) => el.classList.remove('selected'));
        element.querySelector('.custom-select__select-text').classList.add('selected');

        const currentValue = element.querySelector('.custom-select__select-text').textContent;

        EL_selectInput.value = currentValue.trim();
        EL_currentPaymentVariant.textContent = currentValue;
      });
    });
  }
};

const timeSelectorHandler = () => {
  const EL_timeSelectors = document.querySelectorAll('.js-time-selector');

  if (!EL_timeSelectors) return;

  EL_timeSelectors.forEach((element) => {
    element.addEventListener('click', (event) => {
      console.dir(event.currentTarget);

      const child = element.querySelector('.time__selector');

      if (child.style.display === 'none' || child.style.display === '') {
        child.style.display = 'block';
      } else {
        child.style.display = 'none';
        // EL_timeSelectors.forEach((el) => el.classList.remove('active'));
      }

      child.querySelector('.up').addEventListener('click', () => {
        child.style.display = 'block';
        console.log('', 1);
      });
    });
  });
};

// const formSubmitHandler = () => {
//   const mainFrom = document.querySelector('.js-main-form');

//   if (!mainFrom) return;

//   mainFrom.addEventListener('submit', (event) => {
//     event.preventDefault();

//     const data = Object.fromEntries(new FormData(mainFrom));

//     console.log('data', data);
//   });
// };

addEventListener('DOMContentLoaded', () => {
  openStepHandler();
  activeTab();
  counter();
  calendar();
  customSelectHandler();
  timeSelectorHandler();

  // formSubmitHandler();
});
