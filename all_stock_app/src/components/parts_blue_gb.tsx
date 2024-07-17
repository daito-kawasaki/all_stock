interface PositionProps {
  bg_position: string;
  bg_height: string;
  color: string;
}
export default function Blue_bg({
  bg_position,
  bg_height,
  color,
}: PositionProps) {
  return (
    <div
      className={`absolute z-[-1] left-0 ${bg_position} w-full ${bg_height} ${color}`}
    ></div>
  );
}
