"use strict";
exports.__esModule = true;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var formik_1 = require("formik");
function If(_a) {
    var name = _a.name, children = _a.children;
    return (React.createElement(formik_1.Field, { name: name }, function (_a) {
        var field = _a.field;
        return field.value ? children : null;
    }));
}
exports.If = If;
function IfNot(_a) {
    var name = _a.name, children = _a.children;
    return (React.createElement(formik_1.Field, { name: name }, function (_a) {
        var field = _a.field;
        return !field.value ? children : null;
    }));
}
exports.IfNot = IfNot;
function IfValid(_a) {
    var children = _a.children;
    return (React.createElement(formik_1.Field, { name: name }, function (_a) {
        var form = _a.form;
        return form.isValid && children;
    }));
}
exports.IfValid = IfValid;
function IfDirty(_a) {
    var children = _a.children;
    // const ctx = useFormikContext()
    return (React.createElement(formik_1.Field, { name: name }, function (_a) {
        var form = _a.form;
        return (form.dirty ? children : null);
    }));
}
exports.IfDirty = IfDirty;
function IfSubmitting(_a) {
    var children = _a.children;
    return (React.createElement(formik_1.Field, null, function (_a) {
        var form = _a.form;
        return (form.isSubmitting ? children : null);
    }));
}
exports.IfSubmitting = IfSubmitting;
function IfValidating(_a) {
    var children = _a.children;
    return (React.createElement(formik_1.Field, null, function (_a) {
        var field = _a.field, form = _a.form;
        return form.isValidating ? children : null;
    }));
}
exports.IfValidating = IfValidating;
function IfTouched(_a) {
    var children = _a.children;
    return (React.createElement(formik_1.Field, null, function (_a) {
        var field = _a.field, form = _a.form;
        return (form.touched ? children : null);
    }));
}
exports.IfTouched = IfTouched;
function IfError(_a) {
    var children = _a.children;
    return (React.createElement(formik_1.Field, null, function (_a) {
        var field = _a.field, form = _a.form;
        return form.errors && children;
    }));
}
exports.IfError = IfError;
function IfField(_a) {
    var name = _a.name, children = _a.children, value = _a.value;
    return (React.createElement(formik_1.Field, null, function (_a) {
        var field = _a.field, form = _a.form;
        return value === undefined
            ? field.value && children
            : field.value == value && children;
    }));
}
exports.IfField = IfField;
//# sourceMappingURL=If.js.map