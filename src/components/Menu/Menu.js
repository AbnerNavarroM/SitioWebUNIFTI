import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import './Menu.css';

function AppMenu(props) {
    const [anchorEl, setAnchorEl] = React.useState(null);

    function handleClick(event) {
        if (anchorEl !== event.currentTarget) {
            setAnchorEl(event.currentTarget);
        }
    }

    function handleClose() {
        setAnchorEl(null);
    }

    return (
        <div className="menu"
        >
            <Button
                aria-owns={anchorEl ? `${props.id}` : undefined}
                aria-haspopup="true"
                onClick={handleClick}
                onMouseOver={handleClick}
                className="menuButton"
            >
                {props.children}
            </Button>
            <Menu
                id={props.id}
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
                MenuListProps={{ onMouseLeave: handleClose }}
            >
                {
                    props.nLinks.map((menuItem, index) => {
                        return (
                            <a key={index} href={menuItem.href} style={{ textDecoration: 'none', color: 'white' }}>
                                <MenuItem className="menuItem" onClick={handleClose}>{menuItem.title}</MenuItem>
                            </a>
                        )
                    })
                }
            </Menu>
        </div>
    );
}

export default AppMenu;
