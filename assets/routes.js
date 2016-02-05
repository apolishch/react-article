'use strict'

import React from 'react'
import { TextBody, Container, Composition } from './components'
import { Route, IndexRoute } from 'react-router'

export default
  <Route path='/' component={Container}>
    <Route path='/textBody'>
      <IndexRoute component={TextBody} />
    </Route>
    <Route path='/composition'>
      <IndexRoute component={Composition} />
    </Route>
  </Route>
