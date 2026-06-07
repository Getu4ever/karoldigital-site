// types/globals.d.ts
declare module '*.css' {
  const content: { [className: string]: string };
  export default content;
}

// Optional: Also support other asset types
declare module '*.scss' {
  const content: { [className: string]: string };
  export default content;
}

declare module '*.jpg';
declare module '*.png';
declare module '*.svg';