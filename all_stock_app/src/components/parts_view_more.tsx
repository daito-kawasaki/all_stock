import { noto_serif_bl } from "@/lib/fonts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

interface ColorProps {
  back: string;
  color: string;
  border: string;
}

export default function Parts_view_more({ back, color, border }: ColorProps) {
  return (
    <div className="w-full">
      <div
        className={`w-fit px-8 py-2.5 ${border} ${back} rounded-lg justify-start items-center gap-2.5 flex mx-auto`}
      >
        <div className={` text-base ${noto_serif_bl} ${color}`}>View more</div>
        <FontAwesomeIcon icon={faAngleRight} className={`w-3  ${color}`} />
      </div>
    </div>
  );
}
