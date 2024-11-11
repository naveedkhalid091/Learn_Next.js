## RESTful API:

Representational State Transfer (REST) API used for web services and designed around the principles of REST.

REST APIs generally use HTTP/HTTPS as their communication protocol.

- Primarily uses JSON (sometimes XML).
- JSON is lightweight and widely supported.

REST APIs are stateless, meaning each call is independent, with no session stored on the server.

### How would you know if the API is REST API?

You can identify if an API is a REST API by looking for the following characteristics:

##### 1. HTTP Methods (Verbs) Usage:

REST APIs primarily use standard HTTP methods to perform actions:

##### 2. Resource-Oriented URL Structure:

REST APIs focus on resources rather than actions. The URL paths represent resources, typically nouns, like:

/users/ (collection of users)
/users/123/ (a specific user by ID)
The API treats each resource as a unique entity, identified by a URL.
