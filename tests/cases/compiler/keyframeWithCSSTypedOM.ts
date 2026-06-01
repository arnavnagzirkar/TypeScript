// @lib: dom,dom.iterable
// @target: ES2022
// Tests that the Keyframe interface allows CSS Typed OM objects (CSSStyleValue subclasses)
// for CSS property values, as per the Web Animations API spec.

const keyframes: Keyframe[] = [
    { transform: "rotate(0deg)" },
    { transform: new CSSRotate(CSS.number(45), CSS.number(0), CSS.number(0), CSS.deg(90)) },
];

const element = document.createElement("div");

element.animate(
    [
        { transform: "rotate(0deg)" },
        { transform: new CSSRotate(CSS.number(45), CSS.number(0), CSS.number(0), CSS.deg(90)) },
    ],
    {
        duration: 500,
    },
);

// Also valid: other CSSStyleValue subclasses
const keyframes2: Keyframe[] = [
    { opacity: "1" },
    { opacity: new CSSUnitValue(0.5, "number") },
];
