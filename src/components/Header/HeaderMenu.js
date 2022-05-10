import React, { Component } from 'react';
import { Menu } from 'antd';
import UniLogo from '../../sources/logos/UniLogo';
import { List } from './../../sources/NavBarItemList';
import NavBar from '../NavBar/NavBar';
import './HeaderMenu.css';

const { SubMenu } = Menu;

class HeaderMenu extends Component {
    state = {
        current: 'mail',
    };

    handleClick = e => {
        console.log('click ', e);
        this.setState({ current: e.key });
    };

    render() {
        const { current } = this.state;

        //Para redimensionar el logo de la facultad
        let viewBox = "";
        let height = 0;

        let mqlLogo = window.matchMedia('(min-width: 961px) and (max-width: 1440px)');

        // For first render
        let mobileView = mqlLogo.matches;
        if (mobileView) {
            viewBox = "0 0 400 120.116";
            height = "50";
        }else{
            mqlLogo = window.matchMedia('(min-width: 1440px)');
            viewBox = "0 0 400 125.116";
            height = "65";
        }

        return (
            <div className='containerHeaderMenu'>
                <Menu onClick={this.handleClick} selectedKeys={[current]} mode="horizontal"
                    className="headerMenu"
                >
                    <Menu.Item
                        // key="mail"
                        // icon={<MailOutlined />}
                        id="logoUNILaptop"
                    >
                        <div>
                            <a href="/">
                                <UniLogo
                                    viewBox={viewBox}
                                    height={height}
                                /></a>
                        </div>
                    </Menu.Item>

                    {
                        List.map((item, index) => {
                            return (
                                <SubMenu key={"SubMenu" + (index + 1)}
                                    // icon={<DownOutlined />}
                                    title={item.title} style={{height : '60px'}}>
                                    {
                                        item.nestedLinks.map((linkItem) => {
                                            return (
                                                <Menu.Item key={"linkItem:" + linkItem.title}>
                                                    <a href={linkItem.href} target="_blank" rel="noopener noreferrer" >
                                                        {linkItem.title}
                                                    </a>
                                                </Menu.Item>
                                            )
                                        })
                                    }
                                </SubMenu>
                            )
                        })
                    }
                </Menu>
            </div>
        );
    }
}


class Header extends React.Component {

    state = {
        ChosenHeader: null
    }

    componentDidMount() {
        // I'm borrowing the MDN doc notation here: "mql" stands for "media query list".
        const mql = window.matchMedia('(max-width: 960px)');

        // For first render
        let mobileView = mql.matches;
        if (mobileView) {
            this.setState({ ChosenHeader: NavBar });
        } else {
            this.setState({ ChosenHeader: HeaderMenu });
        }

        // For subsequent renders if screen size changes
        mql.addEventListener('change', (e) => {
            let mobileView = e.matches;
            if (mobileView) {
                this.setState({ ChosenHeader: NavBar });
            } else {
                this.setState({ ChosenHeader: HeaderMenu });
            }
        });
    }
    render() {
        const { ChosenHeader } = this.state;
        return (
            <> {
                ChosenHeader && <ChosenHeader />
            }
            </>
        )
    }
}
export default Header;