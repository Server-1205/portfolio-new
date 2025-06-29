# Справочник по работе с Git

## Соглашение по именованию коммитов

При работе с Git рекомендуется использовать соглашение [Conventional Commits](https://www.conventionalcommits.org/), которое помогает структурировать историю коммитов и автоматизировать релизы.

### Основные типы коммитов

- **feat**: добавление новой функциональности
  ```
  git commit -m "feat: добавлен компонент Header"
  ```

- **fix**: исправление ошибки
  ```
  git commit -m "fix: исправлено выравнивание элементов в мобильной версии"
  ```

- **docs**: изменения в документации
  ```
  git commit -m "docs: обновлен README.md с инструкциями по установке"
  ```

- **style**: изменения форматирования кода (отступы, точки с запятой и т.д.)
  ```
  git commit -m "style: форматирование кода с помощью prettier"
  ```

- **refactor**: рефакторинг кода без изменения функциональности
  ```
  git commit -m "refactor: переработана структура компонента Button"
  ```

- **perf**: изменения для улучшения производительности
  ```
  git commit -m "perf: оптимизирована загрузка изображений"
  ```

- **test**: добавление или исправление тестов
  ```
  git commit -m "test: добавлены тесты для компонента Form"
  ```

- **build**: изменения в системе сборки или зависимостях
  ```
  git commit -m "build: обновлены версии зависимостей в package.json"
  ```

- **ci**: изменения в настройках CI/CD
  ```
  git commit -m "ci: добавлен GitHub Action для автоматического деплоя"
  ```

- **chore**: другие изменения, не влияющие на код (например, обновление .gitignore)
  ```
  git commit -m "chore: обновлен .gitignore"
  ```

## Рабочий процесс на реальном проекте

### 1. Инициализация проекта

```bash
# Создание нового Next.js проекта
npx create-next-app@latest portfolio-new

# Переход в директорию проекта
cd portfolio-new

# Инициализация Git-репозитория
git init

# Добавление всех файлов
git add .

# Первый коммит
git commit -m "init: initial project setup"

# Добавление удаленного репозитория
git remote add origin https://github.com/username/portfolio-new.git

# Отправка на GitHub
git push -u origin main
```

### 2. Работа над новой функциональностью

```bash
# Создание и переключение на новую ветку
git checkout -b feat/landing-page

# Разработка функциональности...
# После внесения изменений:

# Проверка статуса
git status

# Добавление измененных файлов
git add src/app/page.tsx src/shared/ui/kit/button.tsx

# Создание коммита
git commit -m "feat: создана главная страница с адаптивным дизайном"

# Отправка ветки на удаленный репозиторий
git push -u origin feat/landing-page
```

### 3. Создание Pull Request и Code Review

1. На GitHub создайте Pull Request из ветки `feat/landing-page` в `main`
2. Назначьте ревьюера
3. После ревью и устранения замечаний:

```bash
# Возможно, потребуется внести исправления:
git add src/app/page.tsx
git commit -m "fix: исправлены замечания по PR"
git push origin feat/landing-page
```

### 4. Слияние веток

После одобрения PR:

```bash
# Переключение на основную ветку
git checkout main

# Получение последних изменений
git pull origin main

# Слияние изменений из ветки с функциональностью
git merge feat/landing-page

# Отправка изменений на удаленный репозиторий
git push origin main
```

### 5. Обновление локальной ветки из основной

```bash
# Переключение на ветку с функциональностью
git checkout feat/about-page

# Получение изменений из основной ветки
git merge main

# Разрешение возможных конфликтов
# После этого:
git add .
git commit -m "merge: разрешены конфликты с main"
```

## Работа с ошибками и исправление коммитов

### Откат изменений

```bash
# Отмена последнего коммита (сохраняя изменения)
git reset --soft HEAD~1

# Отмена нескольких коммитов
git reset --soft HEAD~3

# Полный откат изменений (включая рабочую директорию)
git reset --hard HEAD~1
```

### Исправление последнего коммита

```bash
# Добавление забытых изменений
git add src/shared/lib/css.ts
git commit --amend

# Изменение сообщения последнего коммита без добавления файлов
git commit --amend -m "feat: добавлена утилита для работы с CSS классами"
```

### Временное сохранение изменений (stash)

```bash
# Сохранение текущих изменений
git stash

# Просмотр списка сохраненных изменений
git stash list

# Применение последних сохраненных изменений
git stash apply

# Применение и удаление последних сохраненных изменений
git stash pop

# Применение конкретных сохраненных изменений
git stash apply stash@{2}
```

## Git Flow для масштабных проектов

### Основные ветки

- `main` или `master`: стабильная продакшн-версия
- `develop`: основная ветка разработки
- `feature/*`: ветки для разработки новых функций
- `release/*`: ветки подготовки релиза
- `hotfix/*`: ветки срочных исправлений в продакшн

### Пример рабочего процесса

```bash
# Начало работы над новой функцией
git checkout develop
git pull origin develop
git checkout -b feature/contact-form

# После завершения работы
git add .
git commit -m "feat: добавлена контактная форма с валидацией"
git push origin feature/contact-form

# Создание ветки релиза
git checkout develop
git checkout -b release/1.0.0

# Подготовка релиза (исправление багов)
git add .
git commit -m "fix: исправлены стили в мобильной версии"

# Завершение релиза
git checkout main
git merge release/1.0.0 --no-ff -m "release: версия 1.0.0"
git tag -a v1.0.0 -m "Версия 1.0.0"
git push origin main --tags

git checkout develop
git merge release/1.0.0 --no-ff
git push origin develop

# Удаление ветки релиза
git branch -d release/1.0.0
```

## Полезные команды для повседневной работы

```bash
# Просмотр истории коммитов с графом
git log --graph --oneline --all

# Просмотр изменений в файле
git blame src/shared/lib/css.ts

# Поиск коммита, добавившего определенный текст
git log -S "twMerge" --source --all

# Отмена изменений в конкретном файле
git checkout -- src/shared/lib/css.ts

# Сравнение веток
git diff main..feat/landing-page

# Временное переключение на другую ветку
git worktree add ../temp-branch hotfix/urgent-fix
```

## Рекомендации для данного проекта Next.js

Для вашего проекта portfolio-new рекомендуется:

1. Использовать ветки `feature/*` для разработки отдельных страниц и компонентов
2. Следовать соглашению Conventional Commits для всех коммитов
3. Писать подробные описания Pull Request'ов
4. Настроить GitHub Actions для автоматической проверки кода и деплоя
5. Использовать теги для маркировки версий сайта-портфолио
