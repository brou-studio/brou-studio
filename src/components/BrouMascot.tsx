export default function BrouMascot({
  width = 200,
  height = 240,
  className = "",
}: {
  width?: number;
  height?: number;
  className?: string;
}) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 200 240"
      className={className}
    >
      {/* Flame body */}
      <ellipse cx="100" cy="170" rx="75" ry="65" fill="#e63916" />
      <ellipse cx="100" cy="165" rx="68" ry="58" fill="#f05a2e" />
      {/* Flame top */}
      <path d="M60 140 Q65 60 100 30 Q135 60 140 140" fill="#e63916" />
      <path d="M70 140 Q75 75 100 50 Q125 75 130 140" fill="#f05a2e" />
      <path d="M85 130 Q90 90 100 75 Q110 90 115 130" fill="#ff8c42" />
      {/* Eyes */}
      <ellipse cx="78" cy="165" rx="18" ry="20" fill="#ffffff" />
      <ellipse cx="122" cy="165" rx="18" ry="20" fill="#ffffff" />
      <ellipse cx="82" cy="168" rx="10" ry="11" fill="#1a1a1a" />
      <ellipse cx="118" cy="168" rx="10" ry="11" fill="#1a1a1a" />
      <ellipse cx="84" cy="165" rx="3" ry="3" fill="#ffffff" />
      <ellipse cx="120" cy="165" rx="3" ry="3" fill="#ffffff" />
      {/* Smile */}
      <path
        d="M88 185 Q100 195 112 185"
        stroke="#1a1a1a"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
      />
      {/* Hands */}
      <ellipse cx="35" cy="190" rx="16" ry="14" fill="#e63916" />
      <ellipse cx="165" cy="190" rx="16" ry="14" fill="#e63916" />
      {/* Feet */}
      <ellipse cx="72" cy="228" rx="18" ry="12" fill="#e63916" />
      <ellipse cx="128" cy="228" rx="18" ry="12" fill="#e63916" />
      {/* Horns */}
      <path
        d="M55 115 Q45 90 50 75"
        stroke="#e63916"
        strokeWidth="8"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M145 115 Q155 90 150 75"
        stroke="#e63916"
        strokeWidth="8"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
}
