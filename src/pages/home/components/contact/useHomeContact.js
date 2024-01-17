import { useTranslation } from 'react-i18next';


const useHomeContact = () => {

    const { t } = useTranslation('translation', { keyPrefix: 'home' });

    return { t }
}

export default useHomeContact