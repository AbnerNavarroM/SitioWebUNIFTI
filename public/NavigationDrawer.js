import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
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
import { List as NavBarList } from './../../sources/NavBarItemList';
import UniLogo from './../../UniLogo';
import { SimpleAccordion as Accordion } from './Accordion';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    list: {
        width: 300,
    },
    fullList: {
        width: 'auto',
    },
});

export default function TemporaryDrawer() {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const handleChange = (panel) => (event, isExpanded) => {
      console.log('expanded');
      setExpanded(isExpanded ? panel : false);
    };


    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <div
            className={clsx(classes.list, {
                [classes.fullList]: anchor === 'top' || anchor === 'bottom',
            })}
            role="presentation"
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                <ListItem>
                    <a href="/">
                        <UniLogo />
                    </a>
                </ListItem>


                {NavBarList.map((item, index) => (
                    <Accordion expanded={expanded} handleChange={handleChange} title={item.title} key={"Accordion" + index}>
                        {
                            item.nestedLinks.map((link, ind) => {
                                return (
                                    <ListItem button key={ind} onClick={toggleDrawer(anchor, false)}>
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
                ))}
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

    return (
        <div>
            <React.Fragment key='left'>
                <Hidden mdUp>
                    <IconButton onClick={toggleDrawer('left', true)} edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                </Hidden>
                <Drawer anchor={'left'} open={state['left']} onClose={toggleDrawer('left', false)}>
                    {list('left')}
                </Drawer>
            </React.Fragment>
        </div>
    );
}
