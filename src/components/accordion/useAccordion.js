import React, { useState } from "react";
import { useTranslation } from 'react-i18next';

const useAccordion = () => {

    const [isShowingFaq, setIsShowingFaq] = useState(false);
    const { t } = useTranslation('translation', { keyPrefix: 'location' });

    const toggleShow = () => {
        setIsShowingFaq(!isShowingFaq);

    }

    return {
        isShowingFaq, setIsShowingFaq, toggleShow, t
    }
}

export default useAccordion;