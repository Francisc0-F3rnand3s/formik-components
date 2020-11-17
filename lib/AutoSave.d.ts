import * as React from "react";
interface IAutoSaveContext {
    pause: (pause: boolean) => void;
}
export declare const AutoSaveContext: React.Context<IAutoSaveContext>;
export declare function AutoSave({ delayMs, pause, }: {
    delayMs: number;
    pause: boolean;
}): null;
export declare function AutoSaveProvider({ children, }: {
    children: React.ReactElement | React.ReactElement[];
}): JSX.Element;
export declare function SimpleAutoSave({ delayMs }: {
    delayMs: number;
}): null;
export {};
//# sourceMappingURL=AutoSave.d.ts.map