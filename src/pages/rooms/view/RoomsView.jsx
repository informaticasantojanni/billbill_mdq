import React, {useEffect} from 'react'
import "./roomsView.css"
import PageHeader from '../../../components/pageHeader/PageHeader';
import image from '../../../../src/assets/gallery_mdq/billbillMdq3.jpg';
import useRooms from '../useRooms';
import RoomsList from '../components/RoomsList';

const RoomsView = () => {

  const { t } = useRooms();

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div className='Rooms'>
      <PageHeader 
      title={t('titleHeader')} 
      image={image}
      colorHeader={"fontColor7"}
      />
      <RoomsList
        title={t('titleRooms')}
        paragraph={t('paragraphRooms')}
      />
    </div>
  )
}

export default RoomsView