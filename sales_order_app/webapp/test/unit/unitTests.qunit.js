/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"sales_order_app/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
