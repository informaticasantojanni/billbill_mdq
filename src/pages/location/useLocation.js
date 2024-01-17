import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';


const useLocation = () => {
    const { t } = useTranslation('translation', { keyPrefix: 'location' });

    return {
        t
    }
}

export default useLocation;