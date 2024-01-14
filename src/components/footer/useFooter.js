import { useTranslation } from 'react-i18next';


const useFooter = () => {

    const { t } = useTranslation('translation', { keyPrefix: 'footer' });

    return { t }
}

export default useFooter;