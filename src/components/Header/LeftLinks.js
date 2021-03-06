/*eslint-disable*/
import React from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

import Button from "../CustomButtons/Button.js";

import styles from "../../assets/jss/general-styles/components/headerLinksStyle.js"
import { Link } from 'react-scroll'

const useStyles = makeStyles(styles);

export default function LeftLinks(props) {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Link
          activeClass={classes.active}
          to="home"
          smooth
          duration={500}
          offset={-50}
        >
          <Button
            color="transparent"
            className={classes.navLink}
            style={{ fontSize: '1rem' }}
          >
            Inicio
          </Button>
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link
          activeClass={classes.active}
          to="about"
          smooth
          duration={500}
          offset={-50}
        >
          <Button
            color="transparent"
            className={classes.navLink}
            style={{ fontSize: '1rem' }}
          >
            Perfil
          </Button>
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link
          activeClass={classes.active}
          to="project"
          smooth
          duration={500}
          offset={-50}
        >
          <Button
            color="transparent"
            className={classes.navLink}
            style={{ fontSize: '1rem' }}
          >
            Proyectos
          </Button>
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link
          activeClass={classes.active}
          to="contact"
          smooth
          duration={500}
          offset={-50}
        >
          <Button
            color="transparent"
            className={classes.navLink}
            style={{ fontSize: '1rem' }}
          >
            Contacto
          </Button>
        </Link>
      </ListItem>
    </List>
  );
}
