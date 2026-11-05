/**
 * Frosting-style wavy divider — a soft piped-icing edge between sections.
 * `fill` is the colour of the section below the divider.
 */
export default function FrostingDivider({ fill = "#fbeeea" }: { fill?: string }) {
  return (
    <div className="frosting-divider" aria-hidden="true">
      <svg viewBox="0 0 1200 36" preserveAspectRatio="none">
        <path
          d="M0,18 C80,36 160,0 240,18 C320,36 400,0 480,18 C560,36 640,0 720,18 C800,36 880,0 960,18 C1040,36 1120,0 1200,18 L1200,36 L0,36 Z"
          fill={fill}
        />
      </svg>
    </div>
  );
}
