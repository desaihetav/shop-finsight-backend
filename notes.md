# ToDo Steps

1. Create arrays for all
    - Authors
    - Genres
    - Publishers
    - Offers
    - Products

2. Write a function findOneOrCreateWith like [this](https://github.com/melardev/ApiEcomMongooseExpress/blob/master/models/role.model.js), for all above Schemas except Products

3. Then write seed function for product
    - Pass authors, genres, publisher, offers and product in request body
    - Create everything except product and get their `_id`
    - Use these `_id`s to create Product.

4. And you're done!!!

---