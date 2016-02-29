Meteor.publish('products', function (argument) {
    return Products.find({});
});

Meteor.methods({
    addProduct: function (product, expirationDate) {
        Products.insert({
            name: product,
            expirationDate: expirationDate,
            addedAtDate: new Date() // current time
        });
    },
    deleteProduct: function(id) {
        Products.remove(id);
    }
});

