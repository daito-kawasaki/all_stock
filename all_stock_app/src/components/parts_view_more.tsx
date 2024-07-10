import { noto_serif_bl } from "@/lib/fonts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

export default function View_more() {
  return (
    <div className="w-full">
      <div className="w-fit pl-8 pr-5 py-2.5 bg-slate-900/70 rounded-lg justify-start items-center gap-2.5 flex mx-auto">
        <div className={`text-white text-base ${noto_serif_bl}`}>View more</div>
        <FontAwesomeIcon icon={faAngleRight} className="w-3 text-white" />
      </div>
    </div>
  );
}
