/*eslint-disable*/
import React from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

import Button from "../CustomButtons/Button.js";

import styles from "../../assets/jss/general-styles/components/headerLinksStyle.js"

const useStyles = makeStyles(styles);

export default function LeftLinks(props) {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
          <Button
            href="https://twitter.com/CreativeTim?ref=creativetim"
            target="_blank"
            color="transparent"
            className={classes.navLink}
            style={{fontSize: '1rem'}}
          >
            Inicio
          </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
          <Button
            color="transparent"
            href="https://www.facebook.com/CreativeTim?ref=creativetim"
            target="_blank"
            className={classes.navLink}
            style={{fontSize: '1rem'}}
          >
            Sobre mi
          </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
          <Button
            color="transparent"
            href="https://www.instagram.com/CreativeTimOfficial?ref=creativetim"
            target="_blank"
            className={classes.navLink}
            style={{fontSize: '1rem'}}
          >
            Proyectos
          </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
          <Button
            color="transparent"
            href="https://www.instagram.com/CreativeTimOfficial?ref=creativetim"
            target="_blank"
            className={classes.navLink}
            style={{fontSize: '1rem'}}
          >
            Contacto
          </Button>
      </ListItem>
    </List>
  );
}
