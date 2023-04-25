sap.ui.define([
    "sap/ui/core/mvc/Controller"
  ], function (Controller) {
  
    "use strict";
   
    return Controller.extend("project2.controller.BaseController", {
   
      onInit(){
      },
   
      // just this.getModel() ...
      getModel: function(sName) {
        return this.getView().getModel(sName) || this.getOwnerComponent().getModel(sName);
      },
   
      // just this.setModel() ...
      setModel: function(oModel, sName) {
   
        // ... instead of
        return this.getView().setModel(oModel, sName);
   
      },
   
      // just this.getResoureBundle() ... 
      getResourceBundle: function () {
   
        // ... instead of
        return this.getOwnerComponent().getModel("i18n").getResourceBundle();
   
      }
   
    });
   
  });