#!/bin/bash

# Запускаем PostgreSQL
service postgresql start

# Создаем базу данных и пользователя
su postgres -c "psql -c \"CREATE USER kaspersky WITH PASSWORD '123456';\""
su postgres -c "createdb -O kaspersky kaspdb"

# Запускаем приложение
yarn start