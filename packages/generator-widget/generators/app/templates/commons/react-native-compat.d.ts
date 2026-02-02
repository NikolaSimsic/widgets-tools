import "react";

// React Native 0.78.x types expect a `refs` property on class components.
// React 19 removed `refs` from the Component instance type, so we re-add it here
// to keep JSX element compatibility for native widgets.
declare module "react" {
    interface Component<P = {}, S = {}, SS = any> {
        refs?: Record<string, unknown>;
    }
}

declare namespace JSX {
    interface ElementClass {
        refs?: Record<string, unknown>;
    }
}
