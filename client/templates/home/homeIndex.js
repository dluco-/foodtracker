Meteor.subscribe('products');

Template.listProducts.helpers({
    products: function () {
        return Products.find({}, {
            sort: {
                expirationDate: -1
            }
        });
    }
});

Template.addProduct.events({
    "submit .add-product": function (event) {
        // Prevent default browser form submit
        event.preventDefault();

        // Get value from form element
        var product = event.target.product.value;
        var expirationDate = event.target.expirationDate.value;

        // Insert a task into the collection
        Meteor.call("addProduct", product, expirationDate, function (error, success) {
            if (error) {
                console.log('error', error);
            }
        });

        // Clear form
        event.target.reset();
    }
});

Template.listProducts.events({
    "click .remove": function () {
        Meteor.call('deleteProduct', this._id, function (error, success) {
            if (error) {
                console.log('error', error);
            }
        });
        Products.remove(this._id);
    }
});
