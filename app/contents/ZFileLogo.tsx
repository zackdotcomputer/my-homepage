const paths = [
  "M39.1674 39.1674H5.875V17.625H39.1674V11.75H27.4174V0H0V47H39.1674V39.1674Z",
  "M29.375 0V9.79245H39.1674L29.375 0Z",
  "M41.125 37.2075V19.5825H7.83252V37.2075H41.125ZM13.7099 33.2924H11.7523V31.3348H13.7099V33.2924ZM23.5 27.4174H21.5424V29.3749H17.625V31.3325H23.5V33.29H15.6674V29.3726H17.625V27.415H21.5424V25.4575H15.6674V23.4999H23.5V27.4174Z"
];

/** The "z-file" site logo. Solid in the current text colour, gradient on hover. */
export default function ZFileLogo({ className }: { className?: string }) {
  return (
    <svg
      width="42"
      height="47"
      viewBox="0 0 42 47"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="Zack Sheppard"
    >
      <g className="fill-current">
        {paths.map((d) => (
          <path key={d} d={d} />
        ))}
      </g>
      <g className="logo-hover" fill="url(#zfile-hover-gradient)">
        {paths.map((d) => (
          <path key={d} d={d} />
        ))}
      </g>
      <defs>
        <linearGradient id="zfile-hover-gradient">
          <stop offset="1%" stopColor="#E40034" />
          <stop offset="50%" stopColor="#BD00A9" />
          <stop offset="99%" stopColor="#5200C1" />
        </linearGradient>
      </defs>
    </svg>
  );
}
