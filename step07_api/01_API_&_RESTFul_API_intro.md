What is API?

API stands for `Application Programing Interface`

Interface means- A point where two applications meet and interact. so we need an Interface to interact.

In other terms, API is a tool, which enables two applications to interact between themselves.

API works like a messenger, API takes request from one `app` and send request to another app.

The other app prepares a response and give prepared response to the API and finally the API send response

#### How and Why API is important for Front-end Developers?

We will understand above question with an example of FoodPanda Application.

let suppose the web developer has made an app called `foodpanda` but this single application is connected with multiple `applications` via APIs but user don't know or user don't interact with other applications directly.

When user connect with the payments system, obviously the web developer don't have its own payment system. He only enables to connect with payments system through APIs.

To track the Rider's location, the web developers connect Google Map through APIs.

So one App may connected with one or more applications at a same time.

## Components of an API.

API components can be divided into two categories,

1. Request components:
2. Response components:

#### 1. Request components:

These components are part of the API call made by the client to the server for retrieving or modifying data.

Request components are given below:

###### i) `Endpoint/Resource`:

Endpoint represents a particular section of a URL, if you need fruits then you will request the endpoints of `fruits` as
https://api.example.com/fruits.
Here, we send request to the endpoints i.e. `fruits`.

###### ii) `HTTP Method`:

It defines the action to be performed on the Endpoints (e.g., GET, POST, PUT, DELETE).

    * Get: This method is used to retrieve data from API. For Example: You wanted to know which fruits are currently available so you enquire through the `Get` method. Here you will get the list of available fruits.
    * Post: This method is used to create/post new data/product through the given API. For Example: you need to add the new fruits in the fruit list.
    * Put: Put is used to update the data. For Example: If you wanted to update the price of products then you will use the `put` method.
    *Delete: Delete is used to delete the data from the APIs. For Example: You wanted to delete certain fruits from the APIs due to any reason.

###### iii) `Parameters`:

When you send request to an API then it might be possible to send additional required information or parameters can be used to filter or narrow down the request (like searching for "apple" in a fruit list). For Example: You wanted to check the list of fruits but especially you wanna check if apple is available then your will pass the `apple` as an additional parameter.

###### iv) `Headers`:

Just like Parameters, Headers are also additional piece of information, While headers can also be instructions
For Example: In a restaurants and you order `coke` the cook will be considered as `parameter` but your special instructions like `I need coke in specific container` this is considered as header.

#### 2. Response components:

There are three sub components of Response component:

###### i) Status code:

It indicates the result of request, (either successfull or received an error). The status received in three digit numbers return by an API. These three digit code help the develepors to understand the nature of response;

For Example:
2xx - Successfully responded/fatched data.
3xx - Successfully responded/fatched data but redirected into another URL.
4xx - Error on the client side.
5xx - Error on the server side.

###### ii) response body (Data):

API send the response in the form of Data, for Example: you send request to Get fruits then you will be given result in a form of list.

###### i) Response Headers:

The header same like in request, the special instructions are mentioned along with response inside the metadata.

## RESTful API:

Representational State Transfer (REST) API used for web services and designed around the principles of REST.

REST APIs generally use HTTP/HTTPS as their communication protocol.

Primarily uses JSON (sometimes XML). JSON is lightweight and widely supported.

REST APIs are stateless, meaning each call is independent, with no session stored on the server.

### How would I know if the API is REST API?

You can identify if an API is a REST API by looking for the following characteristics:

##### 1. HTTP Methods (Verbs) Usage:

REST APIs primarily use standard HTTP methods to perform actions:

- GET – Retrieve data from the server.
- POST – Create new resources.
- PUT – Update an existing resource.
- DELETE – Remove a resource

##### 2. Resource-Oriented URL Structure:

REST APIs focus on resources rather than actions. The URL paths represent resources, typically nouns, like:

/users/ (collection of users)
/users/123/ (a specific user by ID)
The API treats each resource as a unique entity, identified by a URL.
