// Author: Sailendra
// Date: 30 july 2020
// Purpose: Learning mongodb and inserting data into database

// IN MONGODB
/*
Table = Collection




USE/CREATING DATABASE:
use saicart

INSERT SINGLE DATA:
db.items.insertOne({name:"iphone x", price: 900000, rating: 4.9, qty: 500, sold: 300})

INSERT MULTIPLE DATA:
db.items.insertMany([
    {name:"iphone x", price: 900000, rating: 4.9, qty: 500, sold: 300},
    {name:"samsung s10", price: 989000, rating: 5.9, qty: 800, sold: 700},
    {name:"mi note7", price: 189000, rating: 3.9, qty: 80, sold: 70}
 ])

SEARCHING DATA IN DATABASE:
db.items.find()
db.items.find({rating:4.9}) // {} filter objects inside curley bracess
db.items.find({rating:{$gte:4.7}}) // little complex filter. gte means greaterthan and equalto
db.items.find({rating:{$gt:4.7}}) // little complex filter. gt means greaterthan
db.items.find({rating:{$lt:4.7}}) // little complex filter. lt means lessthan

db.items.find({rating: {$gt:3.0}, price: {$lt:900000}}) // comma means and operator

 //  or operator
db.items.find({
     $or: [
         {rating: {$gt:3.0}}, 
         {price: {$lt:900000}}
        ]
    
    })

db.items.find({$or: [{rating: {$gt:3.0}}, {price: {$lt:900000}}]})    // or operator in one line
db.items.find({rating:{$gt:3.0}}, {rating: 1})  // projection means only one element



*/