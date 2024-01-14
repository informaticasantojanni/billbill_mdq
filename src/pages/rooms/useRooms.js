import { useTranslation } from 'react-i18next';


const useRooms = () => {

    const { t } = useTranslation('translation', { keyPrefix: 'rooms' });

    return { t }
}

export default useRooms;