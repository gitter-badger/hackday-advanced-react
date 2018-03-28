import React from 'react'
import {BrowserRouter, NavLink, Route} from 'react-router-dom'
import Loadable from 'react-loadable'
import {Title} from '../../shared/Title'
import {HeaderNav} from './Header'
import {Hero} from './Hero'
import {Provider} from 'react-redux'
import {store} from './store'
import {Emojis} from '../../shared/Emojis'
import {CenteredSpinner} from '../../shared/CenteredSpinner'
import {ReduxFormRoute} from './ReduxFormRoute'
import {capitalizeTitle} from './utils'

const loading = () => <CenteredSpinner />

const LoadableHome = Loadable({
  loader: () =>
    import(/* webpackChunkName: "HomePage" */ './Home').then(({Home}) => Home),
  loading,
})

const LoadableStats = Loadable({
  loader: () =>
    import(/* webpackChunkName: "Stats" */ './Stats').then(({Stats}) => Stats),
  loading,
})

const LoadableContactForm = Loadable({
  loader: () =>
    import(/* webpackChunkName: "Contact" */ './Contact').then(
      ({Contact}) => Contact
    ),
  loading,
})

const LoadableUrlCreator = Loadable({
  loader: () =>
    import(/* webpackChunkName: "UrlCreator" */ './UrlCreator').then(
      ({UrlCreator}) => UrlCreator
    ),
  loading,
})

const LoadablePureComponents = Loadable({
  loader: () =>
    import(/* webpackChunkName: "PureComponents" */ './PureComponents').then(
      ({PureComponents}) => PureComponents
    ),
  loading,
})

export const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Hero>
          <Title>
            <Emojis>💩</Emojis>
            {capitalizeTitle('wEb aPP')}
          </Title>
        </Hero>
        <HeaderNav>
          <NavLink exact to="/">
            🏡 Home
          </NavLink>
          <NavLink to="/stats">💅🏻 Cool graphs</NavLink>
          <NavLink to="/contact">📇 Contact form</NavLink>
          <NavLink to="/url-creator">⚡️ Url Safe Links Generator</NavLink>
          <NavLink to="/pure-components">🙏🏻 Pure components</NavLink>
        </HeaderNav>
        <Route exact path="/" component={LoadableHome} />
        <Route path="/stats" component={LoadableStats} />
        <ReduxFormRoute path="/contact" component={LoadableContactForm} />
        <Route path="/url-creator" component={LoadableUrlCreator} />
        <Route path="/pure-components" component={LoadablePureComponents} />
      </div>
    </BrowserRouter>
  </Provider>
)
