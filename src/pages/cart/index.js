import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
// import GoToTop from '../../components/goToTop';
import {GoToTop} from 'demo-react-ui';
class Cart extends PureComponent{
    render(){
        return (
            <div style={{ height: "600px", margin: "50% auto" }}>
                Cart page
                <Link to="/duwu">跳转到毒物</Link>
                <GoToTop></GoToTop>
            </div>)
    }
}

export default Cart;