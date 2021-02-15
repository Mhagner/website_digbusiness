import { Switch, Route } from 'react-router-dom'

import HomePage from './pages/HomePage'
import MoreServices from './pages/MoreServices'

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/services" component={MoreServices} />
        </Switch>
    )
}

export default Routes