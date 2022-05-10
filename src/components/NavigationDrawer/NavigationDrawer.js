import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
// import InboxIcon from '@material-ui/icons/MoveToInbox';
// import MailIcon from '@material-ui/icons/Mail';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Hidden from '@material-ui/core/Hidden';
import { List as NavBarList } from '../../sources/NavBarItemList';
import UniLogo from '../../sources/logos/UniLogo';
import { SimpleAccordion as Accordion } from './Accordion';
import Typography from '@material-ui/core/Typography';
import './NavigationDrawer.css';


const useStyles = makeStyles({
    list: {
        width: 300,
    },
    fullList: {
        width: '100%',
    },
    menuButton: {
        color: 'black !important'
    }
});

export default function TemporaryDrawer() {
    const classes = useStyles();

    let viewBox = "";
    let height = 0;
    let classNameX = "";

    let mql = window.matchMedia('(max-width: 360px)');

    // For first render
    let mobileView = mql.matches;
    if (mobileView) {
        viewBox = "0 0 400.122 111.116";
        height = "40"
        classNameX = "MiniLogo"
    } else {
        mql = window.matchMedia('(min-width: 361px) and (max-width: 450px)');
        mobileView = mql.matches;
        if (mobileView) {
            viewBox = "0 0 400 111.116";
            height = '45';
            classNameX = "MobileLogo"
        } else {
            mql = window.matchMedia('(min-width: 451px) and (max-width: 960px)');
            mobileView = mql.matches;
            if (mobileView) {
                viewBox = "0 0 400 111.116";
                height = '50';
                classNameX = "TabletLogo"
            }
        }
    }

    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });


    const toggleDrawer = (anchor, open) => (event) => {
        if (
          event &&
          event.type === 'keydown' &&
          (event.key === 'Tab' || event.key === 'Shift')
        ) {
          return;
        }
    
        setState({ ...state, [anchor]: open });
      };

    const list = (anchor) => (
        <div
            // className={clsx(classes.list, {
            //     [classes.fullList]: anchor === 'top' || anchor === 'bottom',
            // })}

            className="NavigationDrawerContainer"
            role="presentation"
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                <ListItem
                    className={classNameX + ' ListItemX'}
                >
                    <a href="/"
                    >
                        <UniLogo
                            viewBox={viewBox}
                            height={height}
                        />
                    </a>
                </ListItem>

                <ControlledAccordions anchor={anchor} toggleDrawer={toggleDrawer} List={NavBarList} />
            </List>
            <Divider />

            {/* <List>
                {['All mail', 'Trash', 'Spam'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List> */}
        </div>
    );


    const ControlledAccordions = (props) => {

        const [expanded, setExpanded] = React.useState(false);

        const handleChange = (panel) => (event, isExpanded) => {
            console.log(panel);
            setExpanded(isExpanded ? panel : false);
        };

        return (
            <div>
                {
                    props.List.map((item, index) => (
                        <Accordion 
                        expanded={expanded} 
                        title={item.title} 
                        key={"Accordion" + index} 
                        id={'panel' + index} 
                        handleChange={handleChange}
                        >
                            {
                                item.nestedLinks.map((link, ind) => {
                                    return (
                                        <ListItem
                                         button 
                                         key={ind} 
                                         onClick={props.toggleDrawer(props.anchor, false)}
                                         >
                                            {/* <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon> */}
                                            <ListItemText >
                                                <Typography>
                                                    <a href={link.href}>{link.title}</a>
                                                </Typography>
                                            </ListItemText>
                                        </ListItem>
                                    )
                                })
                            }
                        </Accordion>
                    ))
                }
            </div>
        );
    }

    return (
        <div>
            <React.Fragment key='left'>
                <Hidden mdUp>
                    <IconButton onClick={toggleDrawer('left', true)} edge="start" className={classes.menuButton + ' menuButton2'} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                </Hidden>
                <SwipeableDrawer anchor={'left'} open={state['left']} onClose={toggleDrawer('left', false)}>
                    {list('left')}
                </SwipeableDrawer>
            </React.Fragment>
        </div>
    );
}
