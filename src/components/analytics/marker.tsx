type MarkerProps = {
  x: number;
  y: number;
  color: string;
};

export function Marker({ x, y, color }: MarkerProps) {
  return (
    <div
      className="absolute"
      style={{
        left: `${x}%`,
        top: `${y}%`,
        transform: "translate(-50%, -50%)",
      }}
    >
      <div
        className="relative h-4 w-4 rounded-full"
        style={{ backgroundColor: color }}
      >
        <span
          className="absolute inset-0 animate-ping rounded-full"
          style={{ backgroundColor: color }}
        />
      </div>
    </div>
  );
}
