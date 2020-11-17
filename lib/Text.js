"use strict";
exports.__esModule = true;
var tslib_1 = require("tslib");
var formik_1 = require("formik");
var React = tslib_1.__importStar(require("react"));
exports.Text = function (props) { return (React.createElement(formik_1.Field, tslib_1.__assign({}, props), function (_a) {
    var field = _a.field;
    return (field.value ? field.value : null);
})); };
//# sourceMappingURL=Text.js.map