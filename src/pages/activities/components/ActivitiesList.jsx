import React from 'react'
import './activitiesList.css'

import CardDescription from '../../../components/cardDescription/CardDescription'
import CardPhoto from '../../../components/cardPhoto/CardPhoto'
import CustomButton from '../../../components/cutomButton/CustomButton'

import dataActivities from '../dataActivities'
import useActivities from '../useActivities'

const ActivitiesList = ({title, paragraph}) => {

    const { t } = useActivities()

    return (
        <div className="main-container">
            <div className="activityList mt-5">
                <div className="activityList__header mb-8">
                    {/* <div className="activityList__title title1Size1 fontStyle1 mt-4 mb-3">{title}</div> */}
                    {/* <div className="activityList__paragraph textSize3 fontStyle4 mt-4">{paragraph}</div> */}
                    <div className="textSize1 fontStyle4 mt-4">{paragraph}</div>
                </div>
                {dataActivities.map((activity, index) => (
                    <div className="activityList__grid" key={index}>
                        <div className={`activityList__items_description activityList__item${index * 2 + 1} mb-2`}>
                            <CardDescription
                                title={t(`${activity.title}`)}
                                description={t(`${activity.description}`)}
                                listTitle={'Servicios'}
                                listCard={activity.activityInfo}
                                t={t}
                            />
                            <div>
                                <CustomButton
                                    link={'#'}
                                    text={t(`textButton`)}
                                    classButton={'btnBook'}
                                    classFontSize={'textSize2'}
                                    classFontStyle={'fontStyle4'}
                                />
                            </div>
                        </div>

                        <div className={`activityList__items_photo activityList__item${index * 2 + 2} mb-2`}>
                            <CardPhoto
                                imgMobile={activity.imgActivity_mobile}
                                imgDesktop={activity.imgActivity_desktop}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ActivitiesList