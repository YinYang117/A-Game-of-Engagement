npm i cookie-parser cors csurf dotenv express express-async-errors helmet jsonwebtoken morgan per-env sequelize sequelize-cli pg

npm i -D sqlite3 dotenv-cli nodemon

`npm i -D` === npm i --save-dev and 

- `csurf` - CSRF
- `helmet` - security middleware
- `jsonwebtoken` - aka JWT
- `morgan` - logging information about server requests/responses
- `per-env` - use environment variables for starting app differently
- `pg` - use Postgres as the production environment database


*in backend*
cp .env.example .env

Run `openssl rand -base64 10` to generate a random JWT secret for the .env

npx sequelize init

any `sequelize db:` commands need to be prefixed with `dotenv`

npx dotenv sequelize db:migrate
npx dotenv sequelize db:migrate:undo
npx dotenv sequelize db:migrate:undo:all

npx dotenv sequelize db:seed
npx dotenv sequelize db:seed:all
npx dotenv sequelize db:seed:undo
npx dotenv sequelize db:seed:undo:all