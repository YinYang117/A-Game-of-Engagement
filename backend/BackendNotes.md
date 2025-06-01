## Sequelize notes:

Model Object: Once loaded, Sequelize creates a JavaScript object representing your User model. This object (often accessed as db.User if you've structured your Sequelize setup that way) has methods that allow you to interact with the users table in your database. These methods include:

User.create(): To insert new user records.
User.findAll(): To retrieve all user records.
User.findOne(): To retrieve a single user record based on certain criteria.
User.findByPk(): To retrieve a user record by its primary key (id in this case).
User.update(): To modify existing user records.
User.destroy(): To delete user records.