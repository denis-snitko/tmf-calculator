## Используется Node v14.19.3

### Установка
1. Скачать зависимости - yarn или npm i
2. Запуск - yarn start или npm run start

## Описание сборщика
#### Структура файлов и папок
 \#src - исходники
 
 \#src/fonts - шрифты в формате TTF
 
 \#src/img - изображения png, jpg
 
 \#src/img/icons - для удобства папка для иконок

 \#src/img/svg - для удобства папка для SVG

\#src/js/main.js - файл с JS

\#src/js/vendors.js - файл с JS-библиотеками (jquery, swiper и т.д.)

\#src/modules - папка с компонентами

\#src/scss - стили

#### HTML
HTML-файлы складываются в корень \#src. Для удобства можно создать папку и складывать туда.

Внутри HTML-файлов используется модульная(компонентная) структура. Подключается так (например header) - @@include('modules/header/_header.html')

#### CSS
В сборщике используется препроцессор SASS в синтаксисе SCSS.
