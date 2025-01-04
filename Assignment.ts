// 1) Declare variables for the following:
//    A string to store a person's name.
//    A number to store their age.
//    A boolean to indicate if they are a student.

// let username: string; "SMIT"
// let age: number; 40
// let isStudent: boolean; true


// 2) Write a TypeScript function addNumbers(a: number, b: number):
//    number that takes two numbers as parameters and returns their sum.

// const addNumbers= (a: number, b: number): number => {
//     return a + b;
// }

// 3) Create an array of strings to store the names of five cities.
//    Write a function to print each city in the array.

// let cities: string[] = ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix"];

// function printCities(cityArray: string[]): void {
//     cityArray.forEach(city => {
//         console.log(city);
//     });
// }
// printCities(cities);

// 4) Use a tuple to store a product’s details: id (number), name (string), and price (number).
//    Write a function that takes the tuple and prints the product details.

// let product: [number, string, number] = [1, "Laptop", 999.99];

// const printProductDetails = (productDetails: [number, string, number]): void => {
//     const [id, name, price] = productDetails;
//     console.log(`Product ID: ${id}`);
//     console.log(`Product Name: ${name}`);
//     console.log(`Product Price: ${price}`);
// }
// printProductDetails(product);

// 5) Write a function greet  that returns a greeting message like "Hello, John!".

// const greet= (name: string): string => {
//     return "Hello";
// }

// 6) Write a function calculateTotal where discount is optional.
//    If no discount is provided, it should assume a default value of 0%.

// const calculateTotal=(price: number, discount: number = 0): number =>{
//     const discountAmount = (price * discount) / 100;
//     const total = price - discountAmount;
//     return total;
// }

// 7) Write a function printAddress(street: string, city: string, country?: string): string. 
//    If country is not provided, return a string like "Street, City". Otherwise, include the country in the output.

// const printAddress=(street: string, city: string, country?: string): string =>{
//     if (country) {
//         return `${street}, ${city}, ${country}`;
//     } else {
//         return `${street}, ${city}`;
//     }
// }


// 8) Define an interface User with properties: username (required) email (optional) phoneNumber (optional)
//    Write a function that takes a User object and prints their details.
//    If email or phoneNumber is missing, handle it gracefully. 


// interface User {
//     username: string;       
//     email?: string;         
//     phoneNumber?: string;    
// }

// const printUserDetails=(user: User): void => {
//     console.log(`Username: ${user.username}`);
//     if (user.email) {
//         console.log(`Email: ${user.email}`);
//     } else {
//         console.log("Email: Not provided");
//     }
    
//     if (user.phoneNumber) {
//         console.log(`Phone Number: ${user.phoneNumber}`);
//     } else {
//         console.log("Phone Number: Not provided");
//     }
// }

// const user1: User = { username: "john_doe" };
// const user2: User = { username: "jane_doe", email: "jane@example.com", phoneNumber: "123-456-7890" };

// printUserDetails(user1);
// printUserDetails(user2);


// 9) Create a class Product with properties: id, name, price, and quantity.
// Add methods to:
// Update the quantity.
// Calculate the total price for the available stock.


// class Product {
//     id: number;
//     name: string;
//     price: number;
//     quantity: number;

//     constructor(id: number, name: string, price: number, quantity: number) {
//         this.id = id;
//         this.name = name;
//         this.price = price;
//         this.quantity = quantity;
//     }

//     updateQuantity(newQuantity: number): void {
//         this.quantity = newQuantity;
//     }

//     calculateTotalPrice(): number {
//         return this.price * this.quantity;
//     }
// }

// const product = new Product(1, "Laptop", 1000, 50);
// console.log(`Total price for available stock: $${product.calculateTotalPrice()}`);

// product.updateQuantity(60); // Update quantity
// console.log(`Updated total price for available stock: $${product.calculateTotalPrice()}`);

// 10) Write a function to create a list of Product objects and demonstrate the methods.

// class Product {
//     id: number;
//     name: string;
//     price: number;
//     quantity: number;

//     constructor(id: number, name: string, price: number, quantity: number) {
//         this.id = id;
//         this.name = name;
//         this.price = price;
//         this.quantity = quantity;
//     }

//     updateQuantity(newQuantity: number): void {
//         this.quantity = newQuantity;
//     }

//     calculateTotalPrice(): number {
//         return this.price * this.quantity;
//     }
// }

// const createProductList= (): Product[] => {
//     const product1 = new Product(1, "Laptop", 1000, 50);
//     const product2 = new Product(2, "Smartphone", 700, 30);
//     const product3 = new Product(3, "Tablet", 400, 100);

//     return [product1, product2, product3];
// }

// function demonstrateProductMethods(): void {
//     const products = createProductList();

//     products.forEach(product => {
//         console.log(`${product.name} - Total price for available stock: $${product.calculateTotalPrice()}`);
//     })

//     console.log("\nUpdating quantities...\n");
//     products[0].updateQuantity(60);
//     products[1].updateQuantity(50);

//     products.forEach(product => {
//         console.log(`${product.name} - Updated total price for available stock: $${product.calculateTotalPrice()}`);
//     });
// }

// demonstrateProductMethods();


// 11) Define an interface Car with properties brand, model, and year. 
// Write a function that accepts a Car object and returns a string summarizing the car’s details.

// interface Car {
//     brand: string;
//     model: string;
//     year: number;
// }

// const summarizeCarDetails = (car: Car): string => {
//     return `${car.year} ${car.brand} ${car.model}`;
// };

// const myCar: Car = {
//     brand: "Toyota",
//     model: "Camry",
//     year: 2021
// };

// console.log(summarizeCarDetails(myCar));

// 12) Define a Product with properties like id, name, price, and quantity.
//  Write a function that calculates the total price of all products in a cart.

// interface Product {
//     id: number;
//     name: string;
//     price: number;
//     quantity: number;
// }

// const calculateTotalCartPrice = (cart: Product[]): number => {
//     return cart.reduce((total, product) => total + (product.price * product.quantity), 0);
// };

// const cart: Product[] = [
//     { id: 1, name: "Laptop", price: 1000, quantity: 2 },
//     { id: 2, name: "Smartphone", price: 700, quantity: 3 },
//     { id: 3, name: "Headphones", price: 100, quantity: 5 }
// ];

// console.log(`Total cart price: ${calculateTotalCartPrice(cart)}`);

// 13) Create a function findMax(numbers: number[]): number that takes an array of numbers and returns the largest number.

// const findMax = (numbers: number[]): number => {
//     return Math.max(...numbers);
// };

// const numbers = [10, 20, 5, 45, 30];
// console.log(`The largest number is: ${findMax(numbers)}`);

// 14) Create a simple Person class with properties firstName and lastName and a method getFullName() that returns the full name.

// class Person {
//     firstName: string;
//     lastName: string;

//     constructor(firstName: string, lastName: string) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }

//     getFullName = (): string => {
//         return `${this.firstName} ${this.lastName}`;
//     };
// }

// const person = new Person("John", "Doe");
// console.log(person.getFullName());

// 15) Define an enum Color with values Red, Green, and Blue. Write a function that takes a Color and returns its string representation

// enum Color {
//     Red = "Red",
//     Green = "Green",
//     Blue = "Blue"
// }

// const getColorString = (color: Color): string => {
//     return color;
// };

// const myColor: Color = Color.Green;
// console.log(getColorString(myColor));

// 16)Create an interface Student with name, age, and grade. Write a function to calculate the average grade of an array of Student objects.

// interface Student {
//     name: string;
//     age: number;
//     grade: number;
// }

// const calculateAverageGrade = (students: Student[]): number => {
//     const totalGrade = students.reduce((sum, student) => sum + student.grade, 0);
//     return totalGrade / students.length;
// };

// const students: Student[] = [
//     { name: "John", age: 18, grade: 85 },
//     { name: "Jane", age: 19, grade: 92 },
//     { name: "Bob", age: 20, grade: 78 }
// ];

// console.log(`Average grade: ${calculateAverageGrade(students)}`);

// 17) Inventory Management:
// Create a class Product with properties: id, name, price, and quantity.
// Add methods to:
// Update the quantity.
// Calculate the total price for the available stock.
// Write a function to create a array of Product objects and demonstrate the methods.

// class Product {
//     id: number;
//     name: string;
//     price: number;
//     quantity: number;

//     constructor(id: number, name: string, price: number, quantity: number) {
//         this.id = id;
//         this.name = name;
//         this.price = price;
//         this.quantity = quantity;
//     }

//     updateQuantity = (newQuantity: number): void => {
//         this.quantity = newQuantity;
//     };

//     calculateTotalPrice = (): number => {
//         return this.price * this.quantity;
//     };
// }

// const createProductArray = (): Product[] => {
//     const product1 = new Product(1, "Laptop", 1000, 50);
//     const product2 = new Product(2, "Smartphone", 700, 30);
//     const product3 = new Product(3, "Tablet", 400, 100);

//     return [product1, product2, product3];
// };

// const demonstrateInventoryMethods = (): void => {
//     const products = createProductArray();

//     products.forEach(product => {
//         console.log(`${product.name} - Total price for available stock: $${product.calculateTotalPrice()}`);
//     });

//     console.log("\nUpdating quantities...\n");
//     products[0].updateQuantity(60); 
//     products[1].updateQuantity(50); 

//     products.forEach(product => {
//         console.log(`${product.name} - Updated total price for available stock: $${product.calculateTotalPrice()}`);
//     });
// };

// demonstrateInventoryMethods();


// 18) Library Management:

// Create a Library class with properties: name and an array of Book objects (use an interface for Book with properties like title, author, isAvailable).
// Add methods to:
// Add a new book to the library.
// Lend a book (update its isAvailable property to false).
// Return a book (update isAvailable to true).

// interface Book {
//     title: string;
//     author: string;
//     isAvailable: boolean;
// }

// class Library {
//     name: string;
//     books: Book[];

//     constructor(name: string) {
//         this.name = name;
//         this.books = [];
//     }

//     addBook = (book: Book): void => {
//         this.books.push(book);
//     };

//     lendBook = (title: string): string => {
//         const book = this.books.find(book => book.title === title);
//         if (book && book.isAvailable) {
//             book.isAvailable = false;
//             return `${title} has been lent out.`;
//         }
//         return `${title} is either not available or not in the library.`;
//     };

//     returnBook = (title: string): string => {
//         const book = this.books.find(book => book.title === title);
//         if (book && !book.isAvailable) {
//             book.isAvailable = true;
//             return `${title} has been returned.`;
//         }
//         return `${title} was not lent out or is not in the library.`;
//     };
// }

// const myLibrary = new Library("City Library");

// myLibrary.addBook({ title: "1984", author: "George Orwell", isAvailable: true });
// myLibrary.addBook({ title: "The Great Gatsby", author: "F. Scott Fitzgerald", isAvailable: true });
// myLibrary.addBook({ title: "To Kill a Mockingbird", author: "Harper Lee", isAvailable: true });

// console.log(myLibrary.lendBook("1984")); 
// console.log(myLibrary.lendBook("The Great Gatsby")); 
// console.log(myLibrary.lendBook("1984")); 

// console.log(myLibrary.returnBook("1984"));
// console.log(myLibrary.returnBook("The Great Gatsby")); 
// console.log(myLibrary.returnBook("The Great Gatsby"));

// 19) Write a generic function findUnique<T>(arr: T[]): T[] that takes an array of any type and returns a new array with only the unique elements.

// const findUnique = <T>(arr: T[]): T[] => {
//     return [...new Set(arr)];
// };

// const numbers = [1, 2, 2, 3, 4, 4, 5];
// console.log(findUnique(numbers)); 

// const strings = ["apple", "banana", "apple", "orange"];
// console.log(findUnique(strings)); 

// const objects = [{ id: 1 }, { id: 2 }, { id: 1 }];
// console.log(findUnique(objects));

// 20) Create a function truncateString(str: string, maxLength: number): string that truncates the string to the specified length and adds "..." at the end if the string exceeds the length.
// Example:
// Input: truncateString("TypeScript is awesome!", 10)
// Output: "TypeScript..."

// const truncateString = (str: string, maxLength: number): string => {
//     return str.length > maxLength ? str.slice(0, maxLength) + "..." : str;
// };

// console.log(truncateString("TypeScript is awesome!", 10));
// console.log(truncateString("Hello, World!", 5)); 
// console.log(truncateString("Short", 10)); 

// 21) Employee Management:
// Define an interface Employee with properties id, name, department, and position.
// Write a function to filter employees based on their department.
// Use Partial<Employee> to allow updating only specific properties of an employee.

// interface Employee {
//     id: number;
//     name: string;
//     department: string;
//     position: string;
// }

// const filterEmployeesByDepartment = (employees: Employee[], department: string): Employee[] => {
//     return employees.filter(employee => employee.department === department);
// };

// const updateEmployee = (employee: Employee, updates: Partial<Employee>): Employee => {
//     return { ...employee, ...updates };
// };

// const employees: Employee[] = [
//     { id: 1, name: "Alice", department: "HR", position: "Manager" },
//     { id: 2, name: "Bob", department: "IT", position: "Developer" },
//     { id: 3, name: "Charlie", department: "IT", position: "Developer" },
//     { id: 4, name: "Diana", department: "HR", position: "Assistant" }
// ];

// const itEmployees = filterEmployeesByDepartment(employees, "IT");
// console.log(itEmployees);

// const updatedAlice = updateEmployee(employees[0], { position: "Senior Manager" });
// console.log(updatedAlice);

// 22) Define an enum TrafficLight with values Red, Yellow, and Green.
// Write a function getAction(light: TrafficLight): string that returns:
// "Stop" for Red.
// "Get Ready" for Yellow.
// "Go" for Green.

// enum TrafficLight {
//     Red = "Red",
//     Yellow = "Yellow",
//     Green = "Green"
// }

// const getAction = (light: TrafficLight): string => {
//     switch (light) {
//         case TrafficLight.Red:
//             return "Stop";
//         case TrafficLight.Yellow:
//             return "Get Ready";
//         case TrafficLight.Green:
//             return "Go";
//         default:
//             return "Invalid Traffic Light";
//     }
// };

// console.log(getAction(TrafficLight.Red));
// console.log(getAction(TrafficLight.Yellow));
// console.log(getAction(TrafficLight.Green)); 
