import type * as React from "react";

// Ensure global JSX namespace is defined for TS projects using React 19 types.
declare global {
    namespace JSX {
        interface IntrinsicElements extends React.JSX.IntrinsicElements {}
        interface Element extends React.JSX.Element {}
        interface ElementClass extends React.JSX.ElementClass {}
        interface ElementAttributesProperty extends React.JSX.ElementAttributesProperty {}
        interface ElementChildrenAttribute extends React.JSX.ElementChildrenAttribute {}
        type LibraryManagedAttributes<C, P> = React.JSX.LibraryManagedAttributes<C, P>;
    }
}

export {};
