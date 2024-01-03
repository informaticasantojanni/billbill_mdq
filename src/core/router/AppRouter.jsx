import React from 'react'
import { createHashRouter } from "react-router-dom";
import GeneralLayout from '../layouts/GeneralLayout';
import HomeView from '../../pages/home/view/HomeView';
import RoomsView from '../../pages/rooms/view/RoomsView';
import ServicesView from '../../pages/services/view/ServicesView';
import GalleryView from '../../pages/gallery/view/GalleryView';
import ContactView from '../../pages/contact/view/ContactView';
import ActivitiesView from '../../pages/activities/view/ActivitiesView';
import LocationView from '../../pages/location/view/LocationView';



export const appRouter = createHashRouter([
    {
        path: "/",
        element: (
            <GeneralLayout>
                <HomeView />
            </GeneralLayout>
        ),
    },
    {
        path: "/rooms",
        element: (
            <GeneralLayout>
                <RoomsView />
            </GeneralLayout>
        ),
    },
    {
        path: "/services",
        element: (
            <GeneralLayout>
                <ServicesView />
            </GeneralLayout>
        ),
    },
    {
        path: "/gallery",
        element: (
            <GeneralLayout>
                <GalleryView />
            </GeneralLayout>
        ),
    },
    {
        path: "/contact",
        element: (
            <GeneralLayout>
                <ContactView />
            </GeneralLayout>
        ),
    },
    {
        path: "/activities",
        element: (
            <GeneralLayout>
                <ActivitiesView />
            </GeneralLayout>
        ),
    },
    {
        path: "/location",
        element: (
            <GeneralLayout>
                <LocationView />
            </GeneralLayout>
        ),
    },

]);