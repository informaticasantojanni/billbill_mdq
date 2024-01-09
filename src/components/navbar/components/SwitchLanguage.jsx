import React, { useEffect } from 'react'
// import Select from 'react-select';
import "./switchLanguage.css"
import useSwitchLanguage from './useSwitchLanguage';
import sp_flag from "../../../assets/sp_flag.jpg"
import en_flag from "../../../assets/uk_flag.jpg"
// import pt_flag from "../../../assets/pt_flag.jpg"


const SwitchLanguage = () => {

const { locale,
handleChange} = useSwitchLanguage();

// const languageOptions = [
//     { value: 'es', label: <span><img className="imgFlag" src={sp_flag} alt="Spain flag" /></span> },
//     { value: 'en', label: <span><img className="imgFlag" src={en_flag} alt="UK flag" /></span> },
//     { value: 'pt', label: <span><img className="imgFlag" src={pt_flag} alt="Portughese flag" /></span> },
// ];

    return (
        <div >
            <select className='switchLanguage' value={locale} onChange={handleChange}>
                <option value="es">Español</option>
                <option value="en">English</option>
                <option value="pt">Portugues</option>
            </select>

            {/* <Select
                className='switchLanguage'
                value={languageOptions.find((option) => option.value === locale)}
                onChange={(selectedOption) => handleChange(selectedOption.value)}
                options={languageOptions}
                isSearchable={false} // Disable search box
            /> */}
        </div>
    )
}

export default SwitchLanguage
