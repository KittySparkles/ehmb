import type { FC } from "react";

export const LeafEmpty: FC<{ title: string }> = ({ title }) => (
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
        <path d="M45.7,36.9c-4.6-7.7-16-15.4-22.2-16.2a2,2,0,0,0-2.2,2.6A2,2,0,0,0,23,24.6c2.8.5,7.6,3,11.9,6.4-3.6,3.4-9,4.9-13.4,3.6C13.8,32.4,9.9,22.5,7.1,14.3l7.6-1.1C21.3,12,27,11,30.8,13.6s4,5,4.6,8.3L38,23.7a1,1,0,0,0,1.6-.9c-.6-4.7-2.1-9.4-6.5-12.4S21.2,8,14,9.2a80.6,80.6,0,0,1-9.7,1.3H3a.9.9,0,0,0-.9,1.3l.4,1.2c3.1,9.4,7.4,22.3,17.8,25.4a17.4,17.4,0,0,0,4.5.6A19.5,19.5,0,0,0,38,33.7,29.4,29.4,0,0,1,42.3,39,1.9,1.9,0,0,0,44,40a2.2,2.2,0,0,0,1.3-.4A2.1,2.1,0,0,0,45.7,36.9Z" />
      </g>
    </g>
  </svg>
);
