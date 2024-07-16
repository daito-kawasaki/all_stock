interface PositionProps {
  bg_position: string;
  bg_height: string;
}
export default function Blue_bg({ bg_position, bg_height }: PositionProps) {
  return (
    <div
      className={`absolute z-[-1] left-0 ${bg_position} w-full ${bg_height} bg-blue-200/25`}
    ></div>
  );
}
