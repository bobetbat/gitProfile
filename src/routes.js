import Profile from './Profile'
//import React from 'react'
import Repos from './Repos'


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