import { Language } from "@/types/Language";

export interface SelectLanguageProps {
  options: Language[];
  value: string;
  handleToggleOrder: () => void;
  handleLanguageChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}
