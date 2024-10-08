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

  if (!EL_tabs) return;

  EL_tabs.forEach((currentElement) => {
    currentElement.addEventListener('click', () => {
      currentElement
        .closest('.tabs')
        .querySelectorAll('.js-tabs-label')
        .forEach((el) => el.classList.remove('active'));

      document.querySelector(`[for="${currentElement.id}"]`).classList.toggle('active');

      document.querySelector('.warning-tooltip').style.display = 'none';

      if (document.querySelector(`[id="tab-1"]`).checked && document.querySelector(`[id="tab-6"]`).checked) {
        document.querySelector('.warning-tooltip').style.display = 'block';
      }
    });
  });
};

const openModal = () => {
  const EL_openModal = document.querySelectorAll('[data=js-open-modal]');
  const EL_closeModalBtn = document.querySelectorAll('[data=js-close-modal]');

  if (EL_openModal && EL_closeModalBtn) {
    EL_openModal.forEach((modal) => {
      modal.addEventListener('click', () => {
        const { forModal } = modal.dataset;

        document.body.style.overflow = 'hidden';
        document.querySelector(`[data-modal-name="${forModal}"]`).style.display = 'flex';
      });
    });

    EL_closeModalBtn.forEach((button) => {
      button.addEventListener('click', () => {
        const { forModal } = button.dataset;

        document.body.style.overflow = 'auto';
        document.querySelector(`[data-modal-name="${forModal}"]`).style.display = 'none';
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

let selectedDate = '';
const calendarStep_1 = () => {
  const today = new Date();
  let dayInt = today.getDate();
  let month = today.getMonth();
  let year = today.getFullYear();

  const calendarBody = document.querySelector('.js-calendar-days-step-1');

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

  selectedDate = `${dayInt} ${months[month]} ${year}`;

  const nextBtn = document.querySelector('.js-calendar-next-step-1');
  const prevBtn = document.querySelector('.js-calendar-prev-step-1');

  const showDate = (event) => {
    calendarBody.querySelectorAll('li').forEach((el) => el.classList.remove('active'));

    event.classList.add('active');

    let showYear = event.getAttribute('data-year');
    let showMonth = event.getAttribute('data-month');
    let showDay = event.getAttribute('data-day');

    selectedDate = `${showDay} ${months[showMonth]} ${showYear}`;
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

    document.querySelector('.js-calendar-month-step-1').innerHTML = `${months[month]}, `;
    document.querySelector('.js-calendar-year-step-1').innerHTML = year;
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

const calendarStep_3 = () => {
  const today = new Date();
  let dayInt = today.getDate();
  let month = today.getMonth();
  let year = today.getFullYear();

  const calendarBody = document.querySelector('.js-calendar-days-step-3');

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

  selectedDate = `${dayInt} ${months[month]} ${year}`;

  const nextBtn = document.querySelector('.js-calendar-next-step-3');
  const prevBtn = document.querySelector('.js-calendar-prev-step-3');

  const showDate = (event) => {
    calendarBody.querySelectorAll('li').forEach((el) => el.classList.remove('active'));

    event.classList.add('active');

    let showYear = event.getAttribute('data-year');
    let showMonth = event.getAttribute('data-month');
    let showDay = event.getAttribute('data-day');

    selectedDate = `${showDay} ${months[showMonth]} ${showYear}`;
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

    document.querySelector('.js-calendar-month-step-3').innerHTML = `${months[month]}, `;
    document.querySelector('.js-calendar-year-step-3').innerHTML = year;
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

        const currentValue = element.querySelector('.custom-select__select-text').textContent.trim();

        EL_selectInput.value = currentValue;
        EL_currentPaymentVariant.textContent = currentValue;

        if (currentValue === 'Другое') {
          document.querySelector('.js-step-2-textarea').style.display = 'block';
        } else {
          document.querySelector('.js-step-2-textarea').style.display = 'none';
        }
      });
    });
  }
};

const timeSelectorHandler = () => {
  const EL_timeSelectors = document.querySelectorAll('.js-time-selector');

  if (!EL_timeSelectors) return;

  EL_timeSelectors.forEach((element) => {
    element.addEventListener('click', () => {
      if (!element.classList.contains('active')) {
        EL_timeSelectors.forEach((el) => el.classList.remove('active'));
        element.classList.add('active');
      } else {
        element.classList.remove('active');
      }
    });

    const EL_selector = element.querySelectorAll('.time__selector');
    EL_selector.forEach((selector) => {
      selector.addEventListener('click', (event) => {
        event.stopPropagation();

        let hour = selector.querySelector('.hours__input');
        if (
          event.target.classList.contains('js-hour-up') ||
          event.target.tagName === 'svg' ||
          event.target.tagName === 'path'
        ) {
          if (hour.value < 23) {
            hour.value++;
          } else {
            hour.value = 0;
          }
        }

        if (
          event.target.classList.contains('js-hour-down') ||
          event.target.tagName === 'svg' ||
          event.target.tagName === 'path'
        ) {
          if (hour.value <= 0) {
            hour.value = 0;
          } else {
            hour.value--;
          }
        }

        let minutes = selector.querySelector('.minutes__input');
        if (
          event.target.classList.contains('js-minutes-up') ||
          event.target.tagName === 'svg' ||
          event.target.tagName === 'path'
        ) {
          if (minutes.value < 50) {
            minutes.value = Number(minutes.value) + 10;
          } else {
            minutes.value = 0;
          }
        }

        if (
          event.target.classList.contains('js-minutes-down') ||
          event.target.tagName === 'svg' ||
          event.target.tagName === 'path'
        ) {
          if (minutes.value <= 0) {
            minutes.value = 0;
          } else {
            minutes.value = Number(minutes.value) - 10;
          }
        }
        element.querySelector('input').value = `${hour.value || '00'}:${minutes.value || '00'}`;
      });
    });
  });
};

const checkPayer = () => {
  const EL_radio = document.querySelectorAll('.js-check-payer');

  const isChecked = Array.from(EL_radio).map((item) => item.checked);

  EL_radio.forEach((el) => {
    if (isChecked.includes(true)) {
      el.previousElementSibling.style.display = 'none';
    } else {
      el.previousElementSibling.style.display = 'block';
    }
  });
};

// for step_2
const step_2_Handler = () => {
  const content = document.querySelectorAll('.js-step-2-content');

  if (!content) return;

  const data = {
    shipments: [],
  };
  let values = {};

  content.forEach((shipment) => {
    const inputs = shipment.querySelectorAll('input[data-step-2]');

    inputs.forEach((input) => {
      values = {
        ...values,
        [input.name]: input.value,
        description: shipment.querySelector('.js-custom-select-variant').textContent,
        comment: shipment.querySelector('textarea[name="shipmentVariant"]').value,
      };
    });

    data.shipments.push(values);
  });

  return data;
};

// for step_4
const selectingServiceHandler = () => {
  let step_4 = '';
  const selectingService = document.querySelectorAll('.js-selecting-service');

  if (!selectingService) return;

  selectingService.forEach((service) => {
    if (service.querySelector('input').checked) {
      step_4 = service.querySelector('input').value;
    }
  });

  return step_4;
};

// for step_5
const additionalSelectedServiceHandler = () => {
  const additionalSelectingService = document.querySelectorAll('.js-additional-selected-service');

  if (!additionalSelectingService) return;
  let step_5 = {};

  additionalSelectingService.forEach((service) => {
    const name = service.querySelector('input').name;
    let inputs = service.querySelectorAll(`input[name="${name}"]`);

    const values = [];

    inputs.forEach((input) => {
      if (input.checked) {
        values.push(input.value);
      }
    });

    step_5 = {
      ...step_5,
      [name]: values,
    };
  });

  return step_5;
};

// Функция проверки поля на пустоту
const emptyField = (field) => (field === '' ? true : false);

// Функция обновления DOM если есть ошибки
const showError = (fields) => {
  fields.forEach((element) => {
    const input = document.querySelector(`[name='${element.name}']`);

    const currentLabelText = input.placeholder;

    if (emptyField(element.value)) {
      input.style.borderColor = '#EB0045';

      input.nextElementSibling.textContent = 'Заполнить';
      input.nextElementSibling.style.color = '#EB0045';
      input.nextElementSibling.style.visibility = 'visible';
    } else {
      input.style.borderColor = 'transparent';

      input.nextElementSibling.textContent = currentLabelText;
      input.nextElementSibling.removeAttribute('style');
    }
  });

  return;
};

// Отдельная проверка времени доставки и обеда
const emptyTime = () => {
  const timeInputs = document.querySelectorAll('.js-time-selector > input');

  showError(timeInputs);
};

const formSubmitHandler = () => {
  const mainFrom = document.querySelector('.js-main-form');

  if (!mainFrom) return;

  mainFrom.addEventListener('submit', (event) => {
    event.preventDefault();

    const inputs = mainFrom.querySelectorAll('[data-required]');

    showError(inputs);
    emptyTime();
    checkPayer();

    // -------------------------------

    // Функция получения значений из полей
    const getFieldsData = (fields) => {
      let dataStep_1 = {};
      let dataStep_3 = {};

      const resultData = {};

      fields.forEach((input) => {
        const currentStep = input.closest('.js-step-content').dataset.step;
        const currentName = input.closest('.js-step-content').dataset.name;
        const currentTab = mainFrom.querySelector(`[value="${currentName}"]`)?.checked;

        if (currentTab && currentStep === 'step_1') {
          dataStep_1 = {
            ...dataStep_1,
            [currentName]: {
              ...dataStep_1[currentName],
              [input.name]: input.value,
            },
          };
        }

        if (currentTab && currentStep === 'step_3') {
          dataStep_3 = {
            ...dataStep_3,
            [currentName]: {
              ...dataStep_3[currentName],
              [input.name]: input.value,
            },
          };
        }
      });

      const getComments = (element) => {
        const textarea = document.querySelector(element);
        return textarea.value;
      };

      resultData.step_1 = dataStep_1;
      resultData.step_1.selectedDate = selectedDate;
      resultData.step_1.comment = getComments('textarea[name="step-1-comment"]');
      resultData.step_2 = step_2_Handler();
      resultData.step_3 = dataStep_3;
      resultData.step_3.comment = getComments('textarea[name="step-3-comment"]');
      resultData.step_4 = selectingServiceHandler();
      resultData.step_5 = additionalSelectedServiceHandler();

      console.log('resultData', resultData);

      return resultData;
    };

    // Функция отправки данных на сервер
    const fetchData = async (fetchedData) => {
      const tabs = mainFrom.querySelectorAll(`.tabs__input`);
      const arrayTabs = Array.from(tabs);

      let preparedData = [];

      arrayTabs.forEach((input) => {
        if (input.checked) {
          preparedData = [...preparedData, input.value];
        }
      });

      const data = {
        ...fetchedData,
        selectedTabs: preparedData,
      };

      try {
        const url = '/';
        const config = {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        };

        const response = await fetch(url, config);

        const json = await response.json();
      } catch (error) {
        console.log('error', error);
      }
    };

    fetchData(getFieldsData(inputs));
  });
};

const showPassportData = () => {
  const EL_title = document.querySelector('.js-passport-title');

  if (!EL_title) return;

  EL_title.addEventListener('click', (event) => {
    EL_title.closest('.modal__small-content-passport').classList.toggle('hidden');
  });
};

const showCoordinates = () => {
  const EL_Trigger = document.querySelectorAll('.js-coordinates-trigger input');

  if (!EL_Trigger) return;

  EL_Trigger.forEach((element) => {
    element.addEventListener('click', () => {
      const { trigger } = element.dataset;

      if (element.checked) {
        document.querySelector(`[data-coordinates="${trigger}"]`).style.display = 'flex';
      } else {
        document.querySelector(`[data-coordinates="${trigger}"]`).style.display = 'none';
      }
    });
  });
};

const inputMasks = () => {
  IMask(document.querySelector('[name="individualPhone"]'), {
    mask: '{+375}(00)000-00-00',
  });

  IMask(document.querySelector('[name="individualArrivalPhone"]'), {
    mask: '{+375}(00)000-00-00',
  });

  IMask(document.querySelector('[name="modalPhone"]'), {
    mask: '{+375}(00)000-00-00',
  });

  IMask(document.querySelector('[name="individualName"]'), {
    mask: /^[а-яА-ЯёЁ\s]+$/,
  });
  IMask(document.querySelector('[name="individualArrivalName"]'), {
    mask: /^[а-яА-ЯёЁ\s]+$/,
  });

  IMask(document.querySelector('[name="individualPassportDate"]'), {
    mask: Date,
    min: new Date(2022, 0, 1),
  });
  IMask(document.querySelector('[name="individualArrivalPassportDate"]'), {
    mask: Date,
    min: new Date(2022, 0, 1),
  });

  IMask(document.querySelector('[name="individualPassportNumber"]'), {
    mask: IMask.MaskedRange,
    from: 0000000,
    to: 9999999,
  });

  IMask(document.querySelector('[name="individualArrivalPassportNumber"]'), {
    mask: IMask.MaskedRange,
    from: 0000000,
    to: 9999999,
  });
};

addEventListener('DOMContentLoaded', () => {
  openStepHandler();
  activeTab();
  counter();
  calendarStep_1();
  calendarStep_3();
  customSelectHandler();
  timeSelectorHandler();
  openModal();
  showPassportData();
  showCoordinates();

  formSubmitHandler();
  inputMasks();
});
