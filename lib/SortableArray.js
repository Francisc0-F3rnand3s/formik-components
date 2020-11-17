"use strict";
exports.__esModule = true;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var formik_1 = require("formik");
var react_sortable_hoc_1 = require("react-sortable-hoc");
var Item = react_sortable_hoc_1.SortableElement(function (_a) {
    var children = _a.children;
    return (React.createElement(React.Fragment, null, children));
});
var SortableList = react_sortable_hoc_1.SortableContainer(function (_a) {
    var renderItem = _a.renderItem, values = _a.values, array = _a.array, name = _a.name, children = _a.children;
    if (renderItem) {
        return (React.createElement("div", null, values.map(function (_, i) { return (React.createElement(Item, { key: i, index: i }, renderItem(i, false, array, name + "." + i + "."))); })));
    }
    return (React.createElement(React.Fragment, null, children(values, name, Item, array)));
});
function SortableArray(_a) {
    var name = _a.name, renderNewPlaceholder = _a.renderNewPlaceholder, renderItem = _a.renderItem, children = _a.children, sortableListProps = _a.sortableListProps;
    return (React.createElement(formik_1.Field, { name: name }, function (_a) {
        var field = _a.field, form = _a.form;
        return (React.createElement(formik_1.FieldArray, { name: name }, function (array) {
            var values = field.value || [];
            if (renderNewPlaceholder) {
                return values
                    .map(function (_, i) {
                    return renderItem(i, false, array, name + "." + i + ".");
                })
                    .concat([
                    renderItem(values.length, true, array, name + "." + values.length + "."),
                ]);
            }
            else {
                var onSortEnd = function (_a) {
                    var oldIndex = _a.oldIndex, newIndex = _a.newIndex;
                    array.move(oldIndex, newIndex);
                };
                var props = tslib_1.__assign({ renderItem: renderItem,
                    values: values,
                    array: array,
                    name: name,
                    onSortEnd: onSortEnd, useDragHandle: true, lockAxis: 'y', lockToContainerEdges: true }, sortableListProps);
                return React.createElement(SortableList, tslib_1.__assign({}, props), children);
            }
        }));
    }));
}
exports.SortableArray = SortableArray;
//# sourceMappingURL=SortableArray.js.map