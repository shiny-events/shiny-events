# Shiny Events — PWA за GitHub Pages

Минимален сайт с:
- PWA (installable)
- Google Calendar embed
- Web Push (OneSignal)
- Статични събития от `events.json`

## Бърз старт
1. **Създай GitHub repo** и качи всички файлове от тази папка.
2. В GitHub → Settings → Pages → Source: избери `Deploy from a branch`, Branch: `main` и `/ (root)`.
3. Изчакай деплой и отвори `https://<username>.github.io/<repo>/`.

## Настрой Google Calendar
- Направи нов календар (или използвай текущ).
- В Calendar settings → **Access permissions for events**: отметни `Make available to public` (или сподели само `Free/Busy`).
- В секция `Integrate calendar` копирай `Calendar ID` и в `index.html` замени `{YOUR_CALENDAR_ID}` в iframe URL.

## Настрой OneSignal (Web Push)
1. Отиди на https://onesignal.com и създай App → платформа **Web**.
2. Site URL = `https://<username>.github.io/<repo>/` (точен адрес на Pages).
3. Вземи **App ID** и замени `REPLACE_WITH_YOUR_ONESIGNAL_APP_ID` в `index.html`.
4. Увери се, че **тези файлове са в root** на сайта:
   - `OneSignalSDKWorker.js`
   - `OneSignalSDKUpdaterWorker.js`
5. Публикувай. Отвори сайта **през HTTPS**. Натисни „Абонирай ме“.

> Бележка: на iOS, за да работят web push, потребителят трябва да добави сайта на Home Screen и да го отвори от иконата.

## Редактирай събития
- Добави/промени записи в `events.json`.
- За по-профи сетъп, използвай Google Sheets/Headless CMS и fetch-вай JSON.

## PWA и офлайн
- `service-worker.js` кешира основните assets и позволява офлайн изглед.
- Иконите са placeholder — замени ги с твои в `icons/`.

Успех! 🤘
