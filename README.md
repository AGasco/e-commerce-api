# e-commerce-api

API I built using Mongoose and Express, so that I can use this data to build MERN-based e-commerce frontends.

# Endpoints

<b>GET</b>
```
/products -> Returns all products
/products/:categoryName -> Returns products from specific category
/products/:categoryName/:productId -> Returns specific product

```

--------------

<b>POST</b>
```
/products -> Post a new product
/products/categories -> Post a new category
```

# Schemas
<ul>
  <li>Product:   </li>
  
      const ProductSchema = mongoose.Schema({
        id: mongoose.ObjectId,
        name: { type: String, required: true },
        description: { type: String, required: true },
        category: { type: String, required: true },
        prices: { type: [PriceSchema], required: true },
        pictures: { type: [String], required: true }
    })
    
  <li>Category:   </li>
  
      const CategorySchema = mongoose.Schema({
        id: mongoose.ObjectId,
        name: { type: String, required: true },
        products: { type: [ProductSchema], required: true }
    });
  
  <li>Price:   </li>
  
      const PriceSchema = mongoose.Schema({
        currency: { type: String, required: true },
        price: { type: Number, required: true }
    });

</ul>
