import React, { SFC, RefObject } from "react";

/**
 * Example Text SVG - 'AURORA'
 */
export const TextSvg: SFC<{
  className?: string;
  svgRef?: RefObject<any>;
}> = props => {
  return (
    <svg
      width="586"
      height="113"
      viewBox="0 0 586 113"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={props.className}
      ref={props.svgRef}
    >
      <path
        d="M73.664 84.2H29.888L21.824 106.52H8L44.288 6.728H59.408L95.552 106.52H81.728L73.664 84.2ZM70.064 73.976L51.776 22.856L33.488 73.976H70.064Z"
        stroke="white"
        strokeWidth="5"
      />
      <path
        d="M124.183 6.152V69.512C124.183 78.344 126.391 84.968 130.807 89.384C135.223 93.704 141.271 95.864 148.951 95.864C156.631 95.864 162.631 93.704 166.951 89.384C171.367 84.968 173.575 78.344 173.575 69.512V6.152H186.679V69.512C186.679 77.864 184.999 84.92 181.639 90.68C178.279 96.344 173.719 100.568 167.959 103.352C162.295 106.136 155.911 107.528 148.807 107.528C141.703 107.528 135.271 106.136 129.511 103.352C123.847 100.568 119.335 96.344 115.975 90.68C112.711 84.92 111.079 77.864 111.079 69.512V6.152H124.183Z"
        stroke="white"
        strokeWidth="5"
      />
      <path
        d="M261.387 106.52L237.483 65.48H221.643V106.52H208.539V6.152H240.939C248.523 6.152 254.907 7.448 260.091 10.04C265.371 12.632 269.307 16.136 271.899 20.552C274.491 24.968 275.787 30.008 275.787 35.672C275.787 42.584 273.771 48.68 269.739 53.96C265.803 59.24 259.851 62.744 251.883 64.472L277.083 106.52H261.387ZM221.643 54.968H240.939C248.043 54.968 253.371 53.24 256.923 49.784C260.475 46.232 262.251 41.528 262.251 35.672C262.251 29.624 260.523 24.92 257.067 21.56C253.611 18.2 248.235 16.52 240.939 16.52H221.643V54.968Z"
        stroke="white"
        strokeWidth="5"
      />
      <path
        d="M341.652 107.528C332.34 107.528 323.844 105.368 316.164 101.048C308.484 96.632 302.388 90.536 297.876 82.76C293.46 74.888 291.252 66.056 291.252 56.264C291.252 46.472 293.46 37.688 297.876 29.912C302.388 22.04 308.484 15.944 316.164 11.624C323.844 7.208 332.34 5 341.652 5C351.06 5 359.604 7.208 367.284 11.624C374.964 15.944 381.012 21.992 385.428 29.768C389.844 37.544 392.052 46.376 392.052 56.264C392.052 66.152 389.844 74.984 385.428 82.76C381.012 90.536 374.964 96.632 367.284 101.048C359.604 105.368 351.06 107.528 341.652 107.528ZM341.652 95.72C348.66 95.72 354.948 94.088 360.516 90.824C366.18 87.56 370.596 82.952 373.764 77C377.028 71.048 378.66 64.136 378.66 56.264C378.66 48.392 377.028 41.48 373.764 35.528C370.596 29.48 366.18 24.872 360.516 21.704C354.948 18.44 348.66 16.808 341.652 16.808C334.644 16.808 328.309 18.44 322.645 21.704C317.077 24.872 312.66 29.48 309.396 35.528C306.228 41.48 304.645 48.392 304.645 56.264C304.645 64.136 306.228 71.048 309.396 77C312.66 82.952 317.077 87.56 322.645 90.824C328.309 94.088 334.644 95.72 341.652 95.72Z"
        stroke="white"
        strokeWidth="5"
      />
      <path
        d="M462.2 106.52L438.296 65.48H422.456V106.52H409.352V6.152H441.752C449.336 6.152 455.72 7.448 460.904 10.04C466.184 12.632 470.12 16.136 472.712 20.552C475.304 24.968 476.6 30.008 476.6 35.672C476.6 42.584 474.584 48.68 470.552 53.96C466.616 59.24 460.664 62.744 452.696 64.472L477.896 106.52H462.2ZM422.456 54.968H441.752C448.856 54.968 454.184 53.24 457.736 49.784C461.288 46.232 463.064 41.528 463.064 35.672C463.064 29.624 461.336 24.92 457.88 21.56C454.424 18.2 449.048 16.52 441.752 16.52H422.456V54.968Z"
        stroke="white"
        strokeWidth="5"
      />
      <path
        d="M556.289 84.2H512.513L504.449 106.52H490.625L526.913 6.728H542.033L578.177 106.52H564.353L556.289 84.2ZM552.689 73.976L534.401 22.856L516.113 73.976H552.689Z"
        stroke="white"
        strokeWidth="5"
      />
    </svg>
  );
};