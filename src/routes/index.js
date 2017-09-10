// We only need to import the modules necessary for initial render
import LandingPage from './LandingPage'
import React from 'react'
import {Route} from 'react-router'
import Category from './Category'
import Categories from './Categories'
import Admin from './Admin'
import GoesShelter from './FormToAdmin'
import Contacts from './Contacts'
import About from './About'
import Partners from './Partners'
import StaticLayout from '../layouts/index'
import AnimalDetails from './AnimalDetails/index'

/*  Note: Instead of using JSX, we recommend using react-router
    PlainRoute objects to build route definitions.   */

export const createRoutes = (store) => ([
    {
        path: '/',
        component: LandingPage
    }, {
        component: StaticLayout,
        childRoutes: [
            {
                path: '/categories',
                component: Categories
            }, {
                path: 'categories/category/:categID',
                component: Category
            }, {
                path: 'animals/animal/:animalID',
                component: AnimalDetails
            }, {
                path: '/admin/:action',
                component: Admin
            }, {
                path: '/goes-shelter',
                component: GoesShelter
            }, {
                path: '/contacts',
                component: Contacts
            }, {
                path: '/about',
                component: About
            }, {
                path: '/partners',
                component: Partners
            }

        ]
    }
])


/*  Note: childRoutes can be chunked or otherwise loaded programmatically
    using getChildRoutes with the following signature:

    getChildRoutes (location, cb) {
      require.ensure([], (require) => {
        cb(null, [
          // Remove imports!
          require('./Counter').default(store)
        ])
      })
    }

    However, this is not necessary for code-splitting! It simply provides
    an API for async route definitions. Your code splitting should occur
    inside the route `getComponent` function, since it is only invoked
    when the route exists and matches.
*/

export default createRoutes
