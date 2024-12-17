sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
function (Controller) {
    "use strict";

    return Controller.extend("salesorderapp.controller.overview", {
        onInit: function () {
            var oModel = new sap.ui.model.odata.v2.ODataModel("/sap/opu/odata/sap/SEPMRA_SO_MAN");
            this.getView().setModel(oModel, "salesOrderModel");

            oModel.read("/SEPMRA_C_SalesOrder", {
                success: function(oData) {
                    console.log("All Sales Orders fetched:", oData.results);
        
                    // Set all data into a JSON model
                    var oAllDataModel = new sap.ui.model.json.JSONModel(oData.results);
                    this.getView().setModel(oAllDataModel, "allDataModel");
                }.bind(this),
                error: function(oError) {
                    console.error("Error fetching all Sales Orders:", oError);
                }
            });
        }
    });
});
