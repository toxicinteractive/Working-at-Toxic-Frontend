import { memo } from "react";
import { SelectLanguageProps } from "./select-language.types";
import { IoLanguage } from "react-icons/io5";
import { MdFilterList } from "react-icons/md";

const SelectLanguage: React.FC<SelectLanguageProps> = ({
  options,
  value,
  handleToggleOrder,
  handleLanguageChange,
}) => {
  return (
    <div className="flex items-center px-2 py-2.5 gap-2">
      <div className="flex items-center relative bg-gray-900 h-9 rounded-md pl-16 pr-9 "
      style={{width:'calc(100% - 40px)'}}>
        <button className="absolute left-4 text-gold-900 rounded-full">
          <IoLanguage size={24} />
        </button>
        <select
          id="select"
          className="bg-gray-900 text-sm outline-none text-slate-400 w-full"
          value={value}
          onChange={handleLanguageChange}
        >
          {options.map((option) => (
            <option
              key={option.english_name + option.iso_639_1}
              value={option.iso_639_1}
            >
              {option.english_name}
            </option>
          ))}
        </select>
      </div>
      <button
        onClick={handleToggleOrder}
        className="flex items-center justify-center text-gold-900"
      >
        <MdFilterList size={24} />
      </button>
    </div>
  );
};

export default memo(SelectLanguage);
