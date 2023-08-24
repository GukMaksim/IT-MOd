# Расширенная сборка gulp

## Инструкция

1. Скачать файлы в директорию
2. В терминале: npm install
3. Запуск default task: gulp
4. Просмотр всех тасков: gulp --tasks
5. Проверка обновлений: npm outdate
6. npm run dev / gulp - developer build
7. npm run build / gulp build --build - production build
8. npm run reset / gulp reset - del ./dist directory

## Структура каталогов

    ./src
      index.html
      ./src/files  - other files
      ./src/html  -  html-templates
      ./src/js  -  scripts
      ./src/scss  -  styles
      ./src/img  -  images for site
      ./src/fonts  -  fonts
      ./src/scss/fonts.scss  -  set fonts (auto create)
    -------------------------------
    ./gulp
      ./gulp/config  -  config files
      ./gulp/tasks  -  tasks files

## Plugins

    "devDependencies": {
        "browser-sync": "^2.27.10",
        "del": "^7.0.0",
        "gulp": "^4.0.2",
        "gulp-autoprefixer": "^8.0.0",
        "gulp-clean-css": "^4.3.0",
        "gulp-file-include": "^2.3.0",
        "gulp-fonter-fix": "^0.0.1",
        "gulp-group-css-media-queries": "^1.2.2",
        "gulp-if": "^3.0.0",
        "gulp-imagemin": "^8.0.0",
        "gulp-newer": "^1.4.0",
        "gulp-notify": "^4.0.0",
        "gulp-plumber": "^1.2.1",
        "gulp-rename": "^2.0.0",
        "gulp-replace": "^1.1.3",
        "gulp-sass": "^5.1.0",
        "gulp-sourcemaps": "^3.0.0",
        "gulp-ttf2woff2": "^4.0.1",
        "gulp-version-number": "^0.2.4",
        "gulp-babel": "^8.0.0",
        "@babel/core": "^7.20.2",
        "@babel/preset-env": "^7.20.2",
        "gulp-concat": "^2.6.1",
        "gulp-uglify": "^3.0.2",
        "sass": "^1.56.1"
      }

## Scripts

Запуск скрипта: npm run nameScript<br>

    "scripts": {
        "dev": "gulp",
        "build": "gulp build --build",
        "clear": "gulp reset"
    }

## Alias to insert path to files(img, js, css) (VSCode -> F1 -> Open User Settings(JSON))

    "path-autocomplete.pathMappings": {
        "@img": "${folder}/src/img",
        "@scss": "${folder}/src/scss",
        "@js": "${folder}/src/js"
    }
    --------------------------------------------
    example:
    index.html -> `<img src="@img/shot_001.jpg" alt="">`
    style.scss -> `background: url('@img/shot_001.jpg');`
