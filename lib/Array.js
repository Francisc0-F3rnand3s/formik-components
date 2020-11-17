"use strict";
exports.__esModule = true;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var formik_1 = require("formik");
function Array(_a) {
    var name = _a.name, renderItem = _a.renderItem, renderNewPlaceholder = _a.renderNewPlaceholder;
    return (React.createElement(formik_1.Field, { name: name }, function (_a) {
        var field = _a.field, form = _a.form;
        return (React.createElement(formik_1.FieldArray, { name: name }, function (array) {
            var value = field.value || [];
            if (renderNewPlaceholder) {
                return value
                    .map(function (_, i) {
                    return renderItem(i, false, array, name + "." + i + ".");
                })
                    .concat([
                    renderItem(value.length, true, array, name + "." + value.length + "."),
                ]);
            }
            else {
                return value.map(function (_, i) {
                    return renderItem(i, false, array, name + "." + i + ".");
                });
            }
        }));
    }));
}
exports.Array = Array;
//# sourceMappingURL=Array.js.map