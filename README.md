# LazyWorker

LazyWorker — клиентское приложение для личных задач с календарем, списком дел и глобальным поиском. Авторизация и хранение расписания выполнены через Firebase.

**Возможности**
1. Регистрация и вход через email/пароль и Google.
2. Сброс пароля по email.
3. Календарь с управлением периодом.
4. Список дел с группировкой по периоду, приоритетом и описанием.
5. Поисковик с подсказками по истории запросов.

**Технологии**
1. React 19, TypeScript, Vite (rolldown-vite).
2. Firebase Auth + Firestore.
3. MobX для состояния.
4. Radix UI Themes, react-hook-form, dnd-kit, dayjs.

**Быстрый старт**
1. Установить зависимости: `yarn`.
2. Создать `.env` с переменными Firebase (пример ниже).
3. Запустить dev-сервер: `yarn dev`.

**Переменные окружения**
Создайте файл `.env` в корне проекта и укажите ключи, которые вы можете получить в консоли Firebase:
```env
VITE_FIREBASE_API_KEY="..."
VITE_FIREBASE_AUTH_DOMAIN="..."
VITE_FIREBASE_PROJECT_ID="..."
VITE_FIREBASE_STORAGE_BUCKET="..."
VITE_FIREBASE_MESSAGING_SENDER_ID="..."
VITE_FIREBASE_APP_ID="..."
```

**Скрипты**
1. `yarn dev` — запуск в режиме разработки.
2. `yarn build` — типизация и сборка в `dist`.
3. `yarn preview` — локальный предпросмотр сборки.
4. `yarn lint` — линтинг.

**Структура проекта**
1. `src/modules` — крупные фичи (Calendar, Upcoming, GlobalSearch, Auth).
2. `src/pages` — страницы и роуты.
3. `src/layouts` — layout-и для авторизации и основной навигации.
4. `src/store` — MobX store (расписание).
5. `src/service` — работа с Firebase.
6. `src/ui` и `src/components` — общие UI-компоненты.

**Firebase**
1. Auth используется для регистрации, входа, выхода и сброса пароля.
2. Firestore хранит расписание пользователя в коллекции `schedule`.
3. Настройки хостинга и правил находятся в `firebase.json`, `firestore.rules`, `firestore.indexes.json`.

**Требования к окружению**
1. Node.js `>= 22`.
2. Yarn `>= 1.22`.
