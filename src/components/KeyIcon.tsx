interface KeyIconProps {
  size?: number;
  color?: string;
  className?: string;
}

const KeyIcon = ({ size = 28, color = "currentColor", className }: KeyIconProps) => {
  const height = Math.round(size * (96 / 72));
  return (
    <svg
      className={className}
      width={size}
      height={height}
      viewBox="0 0 72 96"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="36" cy="28" r="18" stroke={color} strokeWidth="4" />
      <circle cx="36" cy="28" r="8" fill={color} />
      <rect x="32" y="46" width="8" height="40" fill={color} />
      <rect x="40" y="62" width="10" height="5" fill={color} />
      <rect x="40" y="74" width="8" height="5" fill={color} />
    </svg>
  );
};

export default KeyIcon;
