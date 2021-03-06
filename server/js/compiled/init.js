// Generated by CoffeeScript 1.6.3
(function() {
  $(document).ready(function() {
    var appView, clientServer, params, routeCollection, serverFileCollection, serverTemplate, templateUri, userDatabase;
    serverFileCollection = new ServerFileCollection();
    routeCollection = new RouteCollection();
    userDatabase = new UserDatabase();
    appView = new AppView({
      serverFileCollection: serverFileCollection,
      routeCollection: routeCollection,
      userDatabase: userDatabase
    });
    clientServer = new ClientServer({
      serverFileCollection: serverFileCollection,
      routeCollection: routeCollection,
      appView: appView,
      userDatabase: userDatabase
    });
    params = URI.parseQuery(document.location.search);
    if (_.has(params, "template") && params.template !== "blank") {
      templateUri = params.template;
      return serverTemplate = new ServerTemplateModel({
        templateUri: templateUri,
        handleZipFcn: appView.handleZipFile
      });
    }
  });

}).call(this);
