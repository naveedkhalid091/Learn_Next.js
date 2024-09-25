## Fetched data displaying patterns:

When you have more than one API to fetch in a singal page then you have to decide the dispalying priorities of APIs, which one to display first.

There are two methods of displaying data:

    1. Parallel displaying
    2. Sequential dispalying

1. Parallel displaying:
   Parallal data dispalying means to display all the APIs at once. we use the `promise.all()` method to apply these settings.

   See the coding example inside the `books-api-app`. A seperate `parallel-display` route is made to explain this concept.

2. Sequential displaying of Data:
   Sequential data displaying means to display all the APIs sequence wise. We don't use any special for this. only ascy await function is used.

   See the coding example inside the `books-api-app`. A seperate `sequential-display` route is made to explain this concept.
