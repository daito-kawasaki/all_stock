import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import { noto_sans_md } from "@/lib/fonts";

export default function PartsSendBut() {
  return (
    <div className="send_but w-fit pl-[45px] pr-[25px] py-2 rounded-[10px] border border-[#333333] justify-start items-center flex mx-auto">
      <button
        type="submit"
        name="send"
        className={`${noto_sans_md} text-lg text-[#333] flex items-center`}
      >
        送信
        <FontAwesomeIcon
          icon={faAnglesRight}
          className=" pl-4 w-[1.464vw] h-auto text-black/60"
        />
      </button>
    </div>
  );
}
