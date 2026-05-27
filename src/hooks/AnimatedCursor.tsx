import { useEffect, useRef, type CSSProperties } from "react";

type AnimatedCursorProps = {
  clickables?: string[];
  color?: string;
  innerScale?: number;
  innerSize?: number;
  innerStyle?: CSSProperties;
  outerAlpha?: number;
  outerScale?: number;
  outerSize?: number;
  outerStyle?: CSSProperties;
  trailingSpeed?: number;
};

const DEFAULT_CLICKABLES = [
  "a",
  "button",
  "input",
  "label[for]",
  "select",
  "textarea",
  ".link",
];

const isTouchDevice = () =>
  typeof navigator !== "undefined" &&
  window.matchMedia("(hover: none) and (pointer: coarse)").matches;

export default function AnimatedCursor({
  clickables = DEFAULT_CLICKABLES,
  color = "0, 123, 255",
  innerScale = 0.7,
  innerSize = 8,
  innerStyle,
  outerAlpha = 0.3,
  outerScale = 5,
  outerSize = 8,
  outerStyle,
  trailingSpeed = 8,
}: AnimatedCursorProps) {
  const innerRef = useRef<HTMLDivElement>(null);
  const outerRef = useRef<HTMLDivElement>(null);
  const pointer = useRef({ x: 0, y: 0 });
  const trailing = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (isTouchDevice()) return undefined;

    const inner = innerRef.current;
    const outer = outerRef.current;
    if (!inner || !outer) return undefined;

    document.body.style.cursor = "none";

    const setVisibility = (visible: boolean) => {
      inner.style.opacity = visible ? "1" : "0";
      outer.style.opacity = visible ? "1" : "0";
    };

    const setActive = (active: boolean) => {
      inner.style.transform = `translate(-50%, -50%) scale(${active ? innerScale : 1})`;
      outer.style.transform = `translate(-50%, -50%) scale(${active ? outerScale : 1})`;
    };

    const move = (event: MouseEvent) => {
      setVisibility(true);
      pointer.current = { x: event.clientX, y: event.clientY };
      inner.style.left = `${event.clientX}px`;
      inner.style.top = `${event.clientY}px`;
    };

    let frame = 0;
    const animate = () => {
      trailing.current.x += (pointer.current.x - trailing.current.x) / trailingSpeed;
      trailing.current.y += (pointer.current.y - trailing.current.y) / trailingSpeed;
      outer.style.left = `${trailing.current.x}px`;
      outer.style.top = `${trailing.current.y}px`;
      frame = requestAnimationFrame(animate);
    };

    const clickableElements = document.querySelectorAll<HTMLElement>(
      clickables.join(","),
    );

    clickableElements.forEach((element) => {
      element.style.cursor = "none";
      element.addEventListener("mouseenter", () => setActive(true));
      element.addEventListener("mouseleave", () => setActive(false));
    });

    document.addEventListener("mousemove", move);
    document.addEventListener("mouseenter", () => setVisibility(true));
    document.addEventListener("mouseleave", () => setVisibility(false));
    document.addEventListener("mousedown", () => setActive(true));
    document.addEventListener("mouseup", () => setActive(false));
    frame = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(frame);
      document.body.style.cursor = "";
      document.removeEventListener("mousemove", move);
      clickableElements.forEach((element) => {
        element.style.cursor = "";
      });
    };
  }, [clickables, innerScale, outerScale, trailingSpeed]);

  if (typeof window !== "undefined" && isTouchDevice()) return null;

  const baseStyle: CSSProperties = {
    borderRadius: "50%",
    display: "block",
    opacity: 0,
    pointerEvents: "none",
    position: "fixed",
    transition: "opacity 150ms ease, transform 180ms ease",
    zIndex: 999999,
  };

  return (
    <>
      <div
        ref={outerRef}
        style={{
          ...baseStyle,
          backgroundColor: `rgba(${color}, ${outerAlpha})`,
          height: outerSize,
          width: outerSize,
          ...outerStyle,
        }}
      />
      <div
        ref={innerRef}
        style={{
          ...baseStyle,
          backgroundColor: `rgba(${color}, 1)`,
          height: innerSize,
          width: innerSize,
          ...innerStyle,
        }}
      />
    </>
  );
}
