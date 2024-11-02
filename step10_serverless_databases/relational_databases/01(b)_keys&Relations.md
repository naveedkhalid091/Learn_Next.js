## Keys in the databases:

There are 7 types of keys exist in `Relational databases management System (RDBMS)` which are given below:

i) `Primary Key`: Uniquely identifies each row; often auto-incremented, same like a spreadsheet where each row has a defined number e.g Row A,B etc.
The developer's responsibility is to specify which column will serve as the primary key, and the database will automatically handle generating values for that column.

ii) `Foreign Key`: A foreign key is a column in one table that references the primary key of another table, creating a relationship between the two tables.

For Example:

### Table 1: Users

| UserID | Name  |
| ------ | ----- |
| A1     | Alice |
| A2     | Bob   |

### Table 2: Orders

| OrderID | UserID (Foreign Key) | Product |
| ------- | -------------------- | ------- |
| O1      | A1                   | Laptop  |
| O2      | A2                   | Phone   |

Inside the table 1: The key names A1,A2 were the primary keys but when you have referenced these keys in table 2 then it becomes a foreign key in table 2.

iii) `Composite Key`:

When you define a `rule` in two or more columns then you use the composite key, to prevent the duplication in the tables.

For Example:
For a table listing students enrolled in different classes:

- Student A is in Math.
- Student A is also in Science.
- Student B is in Math.

Now, here you will use the composite key to ensure that student A can't be re-enrolled on one course again.

| **Student** | **Class** |
| ----------- | --------- |
| A           | Math      |
| A           | Science   |
| B           | Math      |

Here's why a composite key is useful:

- If you only look at the Student column, you might see the same student more than once.
- If you only look at the Class column, you might see the same class more than once.

But if you look at both `Student` and `Class` together, each pair is unique. By making (Student, Class) a composite key, you tell the database that each student can only be enrolled in each class one time.

- Composite Key: (Student, Class)

When you use both `Student A` and `Math together`, it tells you exactly which row you mean.

The composite key prevents duplicates.

For example:

- If you accidentally try to add A in Math again, the database will stop you, saying that the combination already exists.

  iv) `Unique Key`: It is applied on the value on which you wanna tag as a unique, if you receive another same value in future then Error will be thrown from the database.
  For Example:
  In the E-commerce website, you will only allow one email to the one user. if user will try to register again from the same email then error will be thrown.

v) Super Key: (used in rare cases)
vi) Candidate key: (used in rare cases)
vii) Alternate key: (used in rare cases)

## Types of Database Relationships

Understanding relationships between tables is crucial for designing a relational database schema.

Here are the main types of relationships:

1. One-to-One (1:1)

   - Definition: Each record in Table A is related to only one record in Table B, and vice versa.

   * Example: A person and their passport—each person has one passport, and each passport belongs to one person.
   * Implementation: Typically, you add a foreign key in either table that references the primary key of the other table.
     - Example: CREATE TABLE Passports (PassportID INT PRIMARY KEY, PersonID INT UNIQUE, FOREIGN KEY (PersonID) REFERENCES Persons(PersonID));

2. One-to-Many (1:n)

- Definition: A record in Table A can relate to multiple records in Table B, but each record in Table B relates to only one record in Table A.
- Example: A customer and their orders, one customer can place many orders, but each order belongs to only one customer.

* Implementation: Add a foreign key in the “many” table (Table B) that references the primary key of the “one” table (Table A).
  - Example: CREATE TABLE Orders (OrderID INT PRIMARY KEY, CustomerID INT, FOREIGN KEY (CustomerID) REFERENCES Customers(CustomerID));

3. Many-to-One (n:1)

   - Definition: Many records in Table A can relate to one record in Table B, while a record in Table B can relate to multiple records in Table A.
   - Example: Many students enrolled in one course—multiple students can enroll in the same course.

   * Implementation: Similar to One-to-Many, add a foreign key in the “many” table (Table A) that references the primary key of the “one” table (Table B).
     - Example: CREATE TABLE Enrollments (EnrollmentID INT PRIMARY KEY, StudentID INT, CourseID INT, FOREIGN KEY (CourseID) REFERENCES Courses(CourseID));

4. Many-to-Many (n:n)
   - Definition: Records in Table A can relate to multiple records in Table B, and vice versa.
   - Example: Students and courses—students can enroll in multiple courses, and each course can have multiple students.
   - Implementation: Use a pivot table to create an intermediate table that links both tables.
     - Example: CREATE TABLE StudentCourses (StudentID INT, CourseID INT, PRIMARY KEY (StudentID, CourseID), FOREIGN KEY (StudentID) REFERENCES Students(StudentID), FOREIGN KEY (CourseID) REFERENCES Courses(CourseID));
