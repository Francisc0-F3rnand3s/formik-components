import * as React from "react";
import { FieldArrayRenderProps } from "formik";
interface Props {
    name: string;
    renderNewPlaceholder: boolean;
    renderItem: (i: number, isLast: boolean, array: FieldArrayRenderProps, path: string) => React.ReactNode;
    children: React.ReactNode;
    sortableListProps: any;
}
export declare function SortableArray({ name, renderNewPlaceholder, renderItem, children, sortableListProps }: Props): JSX.Element;
export {};
//# sourceMappingURL=SortableArray.d.ts.map