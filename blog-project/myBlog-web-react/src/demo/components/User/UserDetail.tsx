import React, { ReactElement } from 'react';
import { Layout, Menu } from 'antd';
import { Link, withRouter, RouteComponentProps } from 'react-router-dom'
type Props = RouteComponentProps;

class UserDetail extends React.Component<Props> {
    render() {
        return (
            <div>UserAdd</div>
        )
    }
}

export default withRouter(UserDetail)