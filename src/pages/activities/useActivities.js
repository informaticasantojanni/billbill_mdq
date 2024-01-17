import { useTranslation } from 'react-i18next';


const useActivities = () => {

    const { t } = useTranslation('translation', { keyPrefix: 'activities' });

    return { t }
}

export default useActivities;