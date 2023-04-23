<h1 >Kaspersky Project 2023</h1>
<hr/>
<p>
Проект на стажировку в Kaspersky. Набор 2023. На позицию стажёр-фронтенд разработчик.
</p>
<hr/>
<h3>Технологии:</h3>
<h5>Клиентская часть:</h5>
<div id="technologyStack">
<img src="https://img.shields.io/badge/TypeScript-blue?logo=TypeScript&logoColor=white&style=for-the-badge" alt="TypeScript Badge"/>
<img src="https://img.shields.io/badge/JavaScript-yellow?logo=JavaScript&logoColor=white&style=for-the-badge" alt="JavaScript Badge"/>
<img src="https://img.shields.io/badge/HTML5-orange?logo=HTML5&logoColor=white&style=for-the-badge" alt="HTML5 Badge"/>
<img src="https://img.shields.io/badge/SCSS-grey?logo=SASS&logoColor=white&style=for-the-badge" alt="SCSS Badge"/>
<img src="https://img.shields.io/badge/React-blue?logo=React&logoColor=white&style=for-the-badge" alt="React Badge"/>
<img src="https://img.shields.io/badge/Redux-blueviolet?logo=Redux&logoColor=white&style=for-the-badge" alt="Redux Toolkit Badge"/>

[//]: # '<img src="https://img.shields.io/badge/Jest-blue?logo=Jest&logoColor=white&style=for-the-badge" alt="Jest Badge"/>'

<img src="https://img.shields.io/badge/Docker-blue?logo=Docker&logoColor=white&style=for-the-badge" alt="Docker Badge"/>
</div>

<h5>Серверная часть:</h5>
<div id="technologyStack">
<img src="https://img.shields.io/badge/TypeScript-blue?logo=TypeScript&logoColor=white&style=for-the-badge" alt="TypeScript Badge"/>
<img src="https://img.shields.io/badge/JavaScript-yellow?logo=JavaScript&logoColor=white&style=for-the-badge" alt="JavaScript Badge"/>
<img src="https://img.shields.io/badge/Express-white?logo=Express&logoColor=black&style=for-the-badge" alt="Express Badge"/>
<img src="https://img.shields.io/badge/Node.JS-grey?logo=Node.JS&logoColor=white&style=for-the-badge" alt="Node Badge"/>
<img src="https://img.shields.io/badge/Sequelize-green?logo=Sequelize&logoColor=white&style=for-the-badge" alt="Sequelize Badge"/>
<img src="https://img.shields.io/badge/Docker-blue?logo=Docker&logoColor=white&style=for-the-badge" alt="Docker Badge"/>
</div>
<h5>База данных:</h5>
<div id="technologyStack">
<img src="https://img.shields.io/badge/PostgreSQL-blue?logo=PostgreSQL&logoColor=white&style=for-the-badge" alt="JavaScript Badge"/>
<img src="https://img.shields.io/badge/Docker-blue?logo=Docker&logoColor=white&style=for-the-badge" alt="Docker Badge"/>
</div>
<hr/>
<h3>Общие сведения:</h3>
<p> Проект реализован согласно технического задания, размещённого на сайте Stepik, реализован в сжатые сроки (4 дня). Проект имеет потенциал к росту и расширению при наличии желания и более больших сроков.</p>
<ol>
<li><b>Полная система CRUD-запросов в приложении (GET, POST, PUT, PATCH, DELETE).</b> В техническом задании не было указано ничего про их реализацию, а поддержкой оставлено на собственное усмотрение. На данный момент реализованы только два вида GET и POST (подробнее в README.md в папке Server)</li>
<li><b>Систему авторизации на JWT.</b> Чтобы администраторы могли контролировать персонал.</li>
<li><b>Lazy loading и качественная пагинация. </b> Для более быстрой загрузки страниц и данных.</li>
</ol>
<hr/>
<h3>Используемые порты:</h3>
<p>Клиентская часть: 3000 порт</p>
<p>База данных: 5434 порт(внешний), 5432 порт(контейнер)</p>
<p>Серверная часть: 5000 порт</p>
<hr/>
<h3>Варианты установки:</h3>
<ol>
<li>Клонировать проект с GitHub / Распаковать zip-архив</li>
<li>Установить все необходимые зависимости (yarn)</li>
<li>Запустить необходимые контейнеры в docker-compose.yml</li>
<li>Начать работу</li>
</ol>
<hr/>

<h3>Послесловие от автора:</h3>
<p>Т.к. часто в ТЗ были расплывчатые формулировки, то приходилось уточнять у поддержки некоторые детали:</p>
<ol>
<li>Следование макетам оставили на своё усмотрение(принято решение - максимально приблизить к макетам проект, с некоторыми функциональными наработками)</li>
<li>Из макетов не были понятны следующие нюансы:
    <ul>
        <li>Кружочки напротив групп и пользователей (не смог ответить даже человек с поддержки). Решение - не реализовывать.</li>
        <li>Также остались не упомянуты checkbox в карточек и строках. Поддержка сказала, что можно не реализовывать. Решение - добавил фиктивные checkbox, к которым легко можно добавить необходимый функционал.</li>
        <li>Оставили на своё усмотрение функционал "тучек-выгрузок" в карточках пользователей. Решение - оставить фиктивную картинку с возможностью дополнения функционала.</li>
        <li>Реализацию добавления групп и пользователей в группы оставили на своё усмотрение. Решение реализовано в формате POST, GET запросов</li>
    </ul>
</li>
<li>На проект потрачено большое количество сил. Из-за ограничения сроков местами возможны не самые идеальные решения. При больших сроках качество проработки было бы на порядок выше.</li>
</ol>
Все подробности по каждой части написаны в собственных README.md
<ul>
    <li><a href="./Server/README.md">Серверная часть</a></li>
    <li><a href="./Client/README.md">Клиентская часть</a></li>
</ul>
<h5>Спасибо за уделённое внимание, надеюсь, что увидимся на собеседовании.</h5>
