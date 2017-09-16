// We only need to import the modules necessary for initial render
import LandingPage from './LandingPage'
import React from 'react'
import { Route } from 'react-router'
import Category from './Category'
import Categories from './Categories'
import Admin from './Admin'
import GoesShelter from './FormToAdmin'
import Contacts from './Contacts'
import About from './About'
import Partners from './Partners'
import StaticLayout from '../layouts/index'
import AnimalDetails from './AnimalDetails/index'
import SignIn from './SignIn'
import NotFound from './NotFound'

/*  Note: Instead of using JSX, we recommend using react-router
    PlainRoute objects to build route definitions.   */

export const createRoutes = (store) => ([
  {
    name: 'home',
    path: '/',
    component: LandingPage
  }, {
    component: StaticLayout,
    childRoutes: [
      {
        name: 'categories',
        path: '/categories',
        component: Categories,
        childRoutes: [{
          name: 'category',
          path: ':categID',
          component: Category,
          childRoutes: [{
            name: 'animal details',
            path: ':animalID',
            component: AnimalDetails
          }]
        }]
      }, {
        name: 'admin',
        path: '/admin/:action',
        component: Admin
      }, {
        name: 'goes shelter',
        path: '/goes-shelter',
        component: GoesShelter
      }, {
        name: 'contacts',
        path: '/contacts',
        component: Contacts
      }, {
        name: 'about',
        path: '/about',
        component: About
      }, {
        name: 'partners',
        path: '/partners',
        component: Partners
      },{
        path: '/login',
        component: SignIn
      }

    ]
  },
  {
    path: '*',
    component: NotFound
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
