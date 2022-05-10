import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import './Accordion.css';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export function SimpleAccordion(props) {
  const classes = useStyles();

  return (
    <Accordion className={classes.root} expanded={props.expanded === 'panel' + props.id} onChange={props.handleChange('panel' + props.id)}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls={props.id + "-content"}
        id={props.id}
      >
        <Typography className={classes.heading}>{props.title}</Typography>
      </AccordionSummary>
      <AccordionDetails className="accordionDetails">
        {props.children}
      </AccordionDetails>
    </Accordion>
      
  );
}