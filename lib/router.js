Router.configure({
  layoutTemplate: "layout",
  yieldTemplates: {
    nav: {
      to: 'nav'
    }
  }
});

Router.route("/", {
  name: "homeIndex",
});
