## Як встановити проект

Якщо ви користуєтесь Docker, то ви вже знаєте, що вам робити:

```shell
docker-compose up -d
```

Також треба встановити залежності та мігрувати базу даних:

```shell
docker-compose exec app composer install
docker-compose exec app php yii migrate
```

## API

Гривня Тудей має власне API, у якому можна отримати історію курсів за останній рік. Також, із запуском API тепер доступні курси багатьох валют. 

Документація та доступ знаходиться на Rapid API за цим посиланням:

https://rapidapi.com/dontgiveafish/api/hryvna-today

## Telegram

Напишіть боту Гривні у Telegram! Бот навчений декільком командам, що дають інформацію про поточний курс валют:

https://telegram.me/HryvnaTodayBot

Код боту також відкритий і знаходиться в іншому проекті:

https://github.com/dontgiveafish/hryvna-today-telegram

## Багато дяк

[Dmytro Bagaiev](https://github.com/dbagaev) for code revision

## Таке інше

Історія проекту в статті на DOU:

http://dou.ua/lenta/articles/dou-projector-hryvna-today/

Якщо ви хочете долучитись до розробки чи маєте питання щодо API, пишіть на tony@dontgiveafish.com

І гуд тріп, як той казав Едіп!
