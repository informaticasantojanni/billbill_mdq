
import React, {useEffect} from 'react';
import { useLanguage } from '../../../hooks/useLanguage';
import i18n from "../../../core/config/i18n";

const useSwitchLanguage = () => {

    // Import the global variables
    const { locale, setLocale } = useLanguage();

    const handleChange = (event) => setLocale(event.target.value);
    // const handleChange = (value) => setLocale(value);


    useEffect(() => {
        setLocale(i18n.resolvedLanguage);
        console.log("Language detected is: ", i18n.resolvedLanguage)
    }, [])

    useEffect(() => {
        i18n.changeLanguage(locale)
    }, [locale])

    return {
        locale,
        handleChange
    }
}

export default useSwitchLanguage;