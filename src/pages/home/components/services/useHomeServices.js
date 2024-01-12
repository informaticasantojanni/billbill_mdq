import { useTranslation } from 'react-i18next';


const homeUseService = () => {

    const { t } = useTranslation('translation', { keyPrefix: 'home' });

    return { t }
}

export default homeUseService;