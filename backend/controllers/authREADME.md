Authentication: the process of verifying the identity of a user."Who are you?"

checking if the username/email and password provided by a user match the records in your database.

Session Management: Once a user is authenticated, you need a way to maintain their logged-in state across multiple requests. This often involves using sessions (server-side storage of user information linked to a cookie in the user's browser).

JSON Web Tokens (JWTs): JWTs are another popular way to handle authentication, especially in stateless applications or APIs. After successful login, a JWT is issued to the client, and the client sends this token with subsequent requests. The server then verifies the token's authenticity.

Checking if a User is Signed In: This is a direct consequence of successful authentication and session/token management. Your application needs to be able to determine if the current request is being made by an authenticated user.

Authorization (often closely related but distinct): While authentication is about who the user is, authorization is about what they are allowed to do. This involves checking if an authenticated user has the necessary permissions to access certain resources or perform specific actions.

Cross-Site Request Forgery (CSRF) protection is a security measure to prevent malicious websites from performing actions on behalf of a logged-in user without their consent. While it's a crucial security aspect, it's more about protecting against a specific type of attack rather than the core process of verifying identity itself. However, it's definitely something you've correctly implemented in your app.js and is often considered alongside authentication and session management for a secure user experience.