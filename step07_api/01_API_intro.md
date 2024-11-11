## What is API?

API stands for `Application Programing Interface`

Interface means- A point where two applications meet and interact. so we need an Interface to interact.

In other terms, API is a tool, which enables two applications to interact between themselves.

An API acts as a messenger between a user or an app and a server. It sends the user’s request to the server, the server gathers and prepares the data, and then sends it back to the API. The API then delivers this data to the user.

#### Why APIs Are Important for Front-end Developers:

We will understand above question with an example of FoodPanda Application.

APIs are essential for front-end developers because they allow one app to connect seamlessly with multiple services. For example, in the FoodPanda app, users can make payments or track a rider’s location without needing to interact directly with other apps. Instead, APIs connect FoodPanda to payment systems and Google Maps, enabling these features.

## Components of an API.

API components can be divided into two categories.

1. Request components:
2. Response components:

#### 1. Request components:

These components are part of the API call made by the client to the server for retrieving or modifying data.

Request components are given below:

###### i) `Endpoint/Resource`:

Endpoint represents a particular last section of a URL, if you need fruits then you will request the endpoints of `fruits` as
https://api.example.com/fruits.

###### ii) `HTTP Methods`:

It defines the action to be performed on the Endpoints (e.g., GET, POST, PUT, DELETE).

- **Get:** If you need to **retrieve/fetch data** from the database then you have to send a query into a specific url by selecting the **Get method**:
  For Example: You use the **Get method** along with url `https://api.example.com/fruits` to get/fetch the list of furits .

- **Post:** This method is used to **create new data** into the server/database:
  For Example: To add a banana item into your database then use the **Post method** and use the same url as above `https://api.example.com/fruits`.

- **Put:** Put is used to **update the data** from the database:
  For Example: If you wanted to update the price of products then you will select the **put method** with the url `https://api.example.com/fruits` mentioned.

- **Delete:** Delete method is used to **delete the data** from the database:
  For Example: if you wanted to delete certain fruits from the database due to any reason. then you will select the **Delete Method** with the url `https://api.example.com/fruits` mentioned.

###### iii) `Parameters`:

You might be required to send additional information or parameters can be used to filter or narrow down the request (like searching for "apple" in a fruit list):
For Example: You wanted to check the list of fruits but especially you wanna check if apple is available then your will pass the `apple` as an additional parameter.

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

###### iii) Response Headers:

The header same like in request, the special instructions are mentioned along with response inside the metadata.
