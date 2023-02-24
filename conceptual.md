### Conceptual Exercise

Answer the following questions below:

- What is a JWT? 
  - JSON Web tokens is a proposed internet standard for creating data with optional signature and/or optional encryption whose payloads holds JSON that asserts some number of claims.

- What is the signature portion of the JWT?  What does it do?
  - to verify that the sender of the JWT is who it says it is and to ensure that the message wasn't changed along the way.

- If a JWT is intercepted, can the attacker see what's inside the payload?
  - Yes, a JWT is easily decoded by using the decode method.

- How can you implement authentication with a JWT?  Describe how it works at a high level.
  - a client app must send a JWT in the authorization header of the HTTP request to the backend API.

- Compare and contrast unit, integration and end-to-end tests.
  - E2E testing is a methodology used in the software dev life to test the functionality and performance of an application under product-like circumstances

- What is a mock? What are some things you would mock?
  - mock is a way of testing, objects that mimic the behavior of real objects in controlled ways

- What is continuous integration?
  - CI is the practice of automating the integration of code changes from multiple contributors into a single software project.

- What is an environment variable and what are they used for?
  - a variable whose value is set outside the program, typically through functionality

- What is TDD? What are some benefits and drawbacks?
  - Test driven development is a programming practice that instructs developers to write new code only if an automated test has failed.

- What is the value of using JSONSchema for validation?
  - Enables to validate your JSON structure and make sure it meets the required API.

- What are some ways to decide which code to test?
  - In most cases, unit tests are not an effective way to find bugs.

- What does `RETURNING` do in SQL? When would you use it?
  - to return what we insert/update

- What are some differences between Web Sockets and HTTP?
  - HTTP starts sending data as responses  when a request is received, whereas websockets send and receives data based on data availability.

- Did you prefer using Flask over Express? Why or why not (there is no right
  answer here --- we want to see how you think about technology)?
  
