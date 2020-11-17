import * as React from "react";
export declare function If({ name, children, }: {
    name: string;
    children: React.ReactNode;
}): JSX.Element;
export declare function IfNot({ name, children, }: {
    name: string;
    children: React.ReactNode;
}): JSX.Element;
export declare function IfValid({ children }: {
    children: React.ReactNode;
}): JSX.Element;
export declare function IfDirty({ children }: {
    children: React.ReactNode;
}): JSX.Element;
export declare function IfSubmitting({ children }: {
    children: React.ReactNode;
}): JSX.Element;
export declare function IfValidating({ children }: {
    children: React.ReactNode;
}): JSX.Element;
export declare function IfTouched({ children }: {
    children: React.ReactNode;
}): JSX.Element;
export declare function IfError({ children }: {
    children: React.ReactNode;
}): JSX.Element;
export declare function IfField({ name, children, value, }: {
    name: string;
    children: React.ReactNode;
    value?: any;
}): JSX.Element;
//# sourceMappingURL=If.d.ts.map