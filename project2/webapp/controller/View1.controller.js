sap.ui.define([
        "./BaseController"
    ],
    function (BaseController) {
        "use strict";

        return BaseController.extend("project2.controller.View1", {
            onInit: function () {
                // var mockModel = this.getModel("mockModel");
                // console.log(mockModel.getData());


                var oComboBox = this.getView().byId("mainCombobox");
                oComboBox.bindAggregation("items", {
                    path: "mockModel>/Customers", 
                    factory: function (){
                        return new sap.ui.core.Item({
                            text: "{mockModel>id}"
                        })
                    }
                })
            },
            onSelectionChange: function(oEvent){
                var sPath = oEvent.getParameter("selectedItem").getBindingContext("mockModel").getPath();
                var oForm = this.getView().byId("simpleForm");

                oForm.bindElement("mockModel>" + sPath)
            }
        });
    });
