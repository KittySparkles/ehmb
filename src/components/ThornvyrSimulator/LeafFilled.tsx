import type { FC } from "react";

export const LeafFilled: FC<{ title: string }> = ({ title }) => (
  <svg
    width="800px"
    height="800px"
    viewBox="0 0 48 48"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>{title}</title>
    <g id="Layer_2" data-name="Layer 2">
      <g id="invisible_box" data-name="invisible box">
        <rect width="48" height="48" fill="none" />
      </g>
      <g id="Q3_icons" data-name="Q3 icons">
        <path d="M45.7,36.9c-3.8-6.4-12.3-12.7-18.6-15.2a12.8,12.8,0,0,0-3.4-1c-1.7-.2-2.5-1.4-2.2-2.5s.8-1.4,1.9-1.3c3,.4,7.7,2.3,12.2,5.2l.9.6.3.2,1.2.8a1,1,0,0,0,1.6-.9c-.6-4.7-2.1-9.4-6.5-12.4S21.2,8,14,9.2a80.6,80.6,0,0,1-9.7,1.3H3a.9.9,0,0,0-.9,1.3l.4,1.2c3.1,9.4,7.4,22.3,17.8,25.4a17.4,17.4,0,0,0,4.5.6A19.5,19.5,0,0,0,38,33.7,29.4,29.4,0,0,1,42.3,39,1.9,1.9,0,0,0,44,40a2.2,2.2,0,0,0,1.3-.4A2.1,2.1,0,0,0,45.7,36.9Z" />
      </g>
    </g>
  </svg>
);
