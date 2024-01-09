import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";


export const useLanguage = () => {

    const { locale,
        setLocale } = useContext(LanguageContext);

    return {
        locale,
        setLocale
    }

}
