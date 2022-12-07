import React from 'react'
import { MENU } from '../constant/menu'
import {
    LandingPage,
    QuestPage
} from '../views'
import {Route, Switch, Redirect} from 'react-router'

const routes = (
    <Switch>
        <Route exact path={MENU.LANDING} component={LandingPage} />
        <Route exact path={MENU.QUEST} component={QuestPage} />
        <Redirect to="/Landing/" />
    </Switch>
);

export default routes;