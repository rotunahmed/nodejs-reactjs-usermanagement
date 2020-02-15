import React, { Component } from 'react'
import logo from '../../logo.png'
import { Link, NavLink } from 'react-router-dom';

import { Navbar, NavbarGroup, Alignment } from "@blueprintjs/core";


class TopBar extends Component {
    render() {

        return (
            <div>
                <div className="container">
                    <div className="top-panel" style={{ background: '#634DBF', height: 55, width: '100%' }}>
                        <div className="banner-icon" style={{ width: 350, marginLeft: 20, float: 'left', height: 55 }}>
                            <img src={logo} alt="rotun" style={{ width: 50, height: 50, padding: 0, margin: 2 }} />
                            <h2 className="bp3-heading" style={styles.heading}>RKN ERP</h2>
                        </div>
                        <div className="banner-right-menu" style={styles.bannerRightMenu}>
                            <Navbar className="right-nav-bar" style={{ height: 54, background: '#634DBF' }}>
                                <NavbarGroup align={Alignment.RIGHT} style={{ height: 54 }}>
                                    <button className="bp3-button  bp3-icon-user" style={{ color: '#F5F8FA', margin: 5 }}></button>
                                    <button className="bp3-button  bp3-icon-cog" style={{ color: '#F5F8FA', margin: 5 }}></button>
                                    <button onClick={this.logout} className="bp3-button  bp3-icon-log-out" style={{ color: '#F5F8FA', margin: 5 }}></button>
                                </NavbarGroup>
                            </Navbar>
                        </div>
                    </div>
                    <div className="top-menu-panel">
                        <ul>
                            <li><NavLink activeClassName="active-link-router" to="/user">Users</NavLink></li>
                            <li><NavLink activeClassName="active-link-router" to="/module">Modules</NavLink></li>
                        </ul>
                    </div>
                    <div className="nav-menu-tolbar">

                    </div>
                </div>
            </div>
        )
    }
}

const styles = {
    heading: { display: 'inline-block', marginBottom: 10, margin: 11, marginLeft: 12, overflow: 'hidden', fontSize: 22, color: '#F5F8FA' },
    bannerRightMenu: { float: 'right', marginRight: 20, width: 'auto' }
}
export default TopBar