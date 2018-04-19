var pass = ""
var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: pass,
  database: "bamazondb"
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
    // querySpecific();
    // afterConnection();
    
});
afterConnection();
whatProduct();
//Running this application will first display all 
// of the items available for sale. 
// Include the ids, names, and prices of products
//  for sale.
var products;
function afterConnection(){
    connection.query("SELECT * FROM products", function(err, res){
        if (err) throw err;
        console.log(res);
        // Set result from database into products so we can access products inside the inquirer function
        products = res;
        // for(var i = 0;i<=res.length;i++){
        //     console.log(res[i]);
        // }
        // console.log(res.item_id + res.product_name + res.price);
    });
}
//The app should then prompt users with two messages.
// First ask them the ID of the product they would like to buy
function whatProduct(){
    console.log("working");
    inquirer.prompt([
        {
    name: "item",
    type: "input",
    message: "What is the id of the product you want to buy?",
    validate: function(value) {
        if (isNaN(value) === false) {
          return true;
        }
        return false;
      }        
    },
        {
    name:"quantity",
    type: "input",
    message: "How many units would you like to buy?",
    validate: function(value) {
        if (isNaN(value) === false) {
          return true;
        }
        return false;
      }
        }
    ])
    .then(function(answer){
        var chosenItem;
        // console.log(products);
        for (var i=0;i<products.length;i++){
            if(products[i].item_id == answer.item){
                chosenItem = products[i];
                console.log(chosenItem);
            }
        }
        console.log(chosenItem);
        if (chosenItem.stock_quantity >= parseInt(answer.quantity)){
            connection.query(
                "UPDATE products SET ? WHERE ?",
                [
                   {
                       stock_quantity: answer.quantity
                   } ,
                   {
                       item_id : chosenItem.item
                   }
                ],
                function(error){
                    if (error) throw err;
                    console.log("Successful purchase!");
                    console.log("The total cost of purchase is"+" "+"$"+
                parseInt(answer.quantity * chosenItem.price));
                    // afterConnection();
                    whatProduct();
                }
            );
        }
        else{
            console.log("Insufficient quantity!");
            // afterConnection();
            whatProduct();
        }

    })
}

