_**# bamazon**_

 This is an Amazon-like storefront application which is created with **MySQL**. 
 
 This app will take in orders from customers and deplete stock from the store's inventory.
 
 This application requires the **MySQL** and **inquirer** npm package to function as it is required for data input and storage.
 
 A MySQL Database called *bamazon* is created with a *products* table in it. 
 
 The products' table incudes the following columns:

   * item_id (unique id for each product)

   * product_name (Name of product)

   * department_name

   * price (cost to customer)

   * stock_quantity (how much of the product is available in stores)

The database is populated with 10 different products.

Then a Node application called `bamazonCustomer.js` is created. 

Running this application will first display all of the items available for sale. Including the ids, names, and prices of products for sale.

The app then prompt users with two messages.

   * The first asks the user for the ID of the product they would like to buy.
   
   * The second message asks the user how many units of the product they would like to buy.

Once the customer has placed the order, the application checks if the store has enough of the product to meet the customer's request.

    * If it does, the order goes through, and the customer sees the total cost of their purchase

    * If not, the app logs a phrase like `Insufficient quantity!`, and then prevent the order from going through.
   
