DROP DATABASE IF EXISTS bamazondb;

CREATE DATABASE bamazondb;

USE bamazondb;

CREATE TABLE products (
item_id INT NOT NULL AUTO_INCREMENT,
product_name VARCHAR (50),
department_name VARCHAR(50),
price INTEGER(10),
stock_quantity INTEGER(10),
PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Strawberries", "Fruits", 10, 20);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Bananas","Fruits", 5, 30);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Gone with the wind", "Books", 15, 5);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Microwaves", "Kitchen & Dining", 300, 12);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Dresser", "Furniture", 200, 8);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Candles", "Home Decor", 3, 6);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Duvets", "Bed & Bath", 150, 14);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Shoe rack", "Furniture", 70, 8);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Dutch ovens", "Kitchen & Dining",300, 4);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Nightstands", "Bed & Bath", 50, 23);


SELECT * FROM products;