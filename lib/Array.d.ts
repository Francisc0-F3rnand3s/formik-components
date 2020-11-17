import * as React from "react";
import { FieldArrayRenderProps } from "formik";
interface Props {
    name: string;
    renderNewPlaceholder: boolean;
    renderItem: (i: number, isLast: boolean, array: FieldArrayRenderProps, path: string) => React.ReactNode;
}
export declare function Array({ name, renderItem, renderNewPlaceholder }: Props): JSX.Element;
export {};
//# sourceMappingURL=Array.d.ts.map