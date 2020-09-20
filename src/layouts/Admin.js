import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import routes from "../routes/adminRoutes";

const renderComponentWithProps = (Component, props) => {
    return function(matchProps) {
        return Component !== null ?
            <Component {...props} {...matchProps} />
            :
            null;
    }
};

const renderRoutes = (props) => (
    props.map((prop, key) => renderRoute(prop, key) )
);

const renderRoute = (prop, key) => {
    return prop.layout !== "/admin" ? null : (
        <Route
            path={prop.layout + prop.path}
            component={renderComponentWithProps(prop.component, { title: prop.title })}
            key={key}
        />
    );
};


const Admin = props => {

    const preparedRoutes = renderRoutes(routes);

    return (
        <div className="wrapper">
            <Switch>
                {preparedRoutes}
                <Redirect from="*" to={'/admin/main'} />
            </Switch>
        </div>
    )
};

export default Admin;