import { ButtonType } from "@/lib/types";
import { HiDownload } from "react-icons/hi";

type Props = {
  buttonType: ButtonType;
  children: React.ReactNode;
};

export const Button: React.FC<Props> = ({ buttonType, children }) => {
  return (
    <button
      aria-label="button"
      type="button"
      className={`group inline-flex items-center rounded-full px-6 py-1.5 font-semibold transition ${
        buttonType === ButtonType.PRIMARY
          ? "bg-midnight text-white dark:bg-gray-200 dark:text-midnight hover:bg-slate-700"
          : buttonType === ButtonType.SECONDARY
          ? "text-midnight border border-black/10 dark:text-white dark:border-white/10  dark:hover:bg-slate-400 dark:hover:bg-opacity-20 dark:hover:border-white/20"
          : buttonType === ButtonType.TERTIARY
          ? "bg-midnight text-white dark:bg-gray-200 dark:text-midnight hover:bg-slate-700"
          : buttonType === ButtonType.QUATERNARY
          ? "text-midnight border border-black/10 dark:text-white dark:border-white/10  dark:hover:bg-slate-400 dark:hover:bg-opacity-20 dark:hover:border-white/20"
          : buttonType === ButtonType.QUINARY
          ? "bg-midnight text-white dark:bg-gray-200 dark:text-midnight hover:bg-slate-700"
          : null
      }`}
    >
      {children}

      {(buttonType === ButtonType.TERTIARY ||
        buttonType === ButtonType.QUATERNARY) && (
        <HiDownload
          className={`opacity-90 group-hover:translate-y-1 transition ${
            buttonType === ButtonType.TERTIARY
              ? "stroke-white dark:stroke-midnight"
              : buttonType === ButtonType.QUATERNARY
              ? "stroke-midnight dark:stroke-white "
              : null
          }`}
        />
      )}

      <svg
        className={`mt-0.5 ml-2  -mr-1 stroke-2 ${
          buttonType === ButtonType.PRIMARY
            ? "stroke-white dark:stroke-midnight"
            : buttonType === ButtonType.SECONDARY
            ? "stroke-midnight dark:stroke-white "
            : null
        }`}
        fill="none"
        width="10"
        height="10"
        viewBox="0 0 10 10"
        aria-hidden="true"
      >
        <path
          className="transition opacity-0 group-hover:opacity-100"
          d="M0 5h7"
        ></path>
        <path
          className="transition group-hover:translate-x-[3px]"
          d="M1 1l4 4-4 4"
        ></path>
      </svg>
    </button>
  );
};
