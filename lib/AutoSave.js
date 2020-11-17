"use strict";
exports.__esModule = true;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var formik_1 = require("formik");
var lodash_debounce_1 = tslib_1.__importDefault(require("lodash.debounce"));
exports.AutoSaveContext = React.createContext({
    pause: function () { }
});
function AutoSave(_a) {
    var delayMs = _a.delayMs, pause = _a.pause;
    var ctx = formik_1.useFormikContext();
    var debouncedSubmit = React.useCallback(lodash_debounce_1["default"](function () {
        // this might not work
        if (ctx.dirty && !ctx.isSubmitting) {
            ctx.submitForm().then(function () { });
        }
    }, delayMs), [delayMs, ctx.dirty, ctx.submitForm, pause]);
    React.useEffect(function () {
        if (!pause) {
            debouncedSubmit();
        }
    }, [ctx.values, pause]);
    return null;
}
exports.AutoSave = AutoSave;
function AutoSaveProvider(_a) {
    var children = _a.children;
    var _b = React.useState(false), pause = _b[0], setPause = _b[1];
    var value = React.useMemo(function () { return ({
        pause: function (value) { return setPause(value); }
    }); }, [pause]);
    return (React.createElement(exports.AutoSaveContext.Provider, { value: value },
        children,
        React.createElement(AutoSave, { delayMs: 1000, pause: pause })));
}
exports.AutoSaveProvider = AutoSaveProvider;
function SimpleAutoSave(_a) {
    var delayMs = _a.delayMs;
    var ctx = formik_1.useFormikContext();
    var debouncedSubmit = React.useCallback(lodash_debounce_1["default"](function () {
        // this might not work
        if (ctx.dirty && !ctx.isSubmitting) {
            ctx.submitForm().then(function () { });
        }
    }, delayMs), [delayMs, ctx.dirty, ctx.submitForm]);
    React.useEffect(function () {
        debouncedSubmit();
    }, [ctx.values]);
    return null;
}
exports.SimpleAutoSave = SimpleAutoSave;
//# sourceMappingURL=AutoSave.js.map