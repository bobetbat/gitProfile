import Profile from './views/Profile'
//import React from 'react'
import Repos from './views/Repos'


export default [
  {
    path: '/',
    exact: true,
    component: Profile
  },
  {
    path: '/repos',
    exact: false,
    component: Repos
  }
]