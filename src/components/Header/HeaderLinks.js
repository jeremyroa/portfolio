/*eslint-disable*/
import React, { useEffect } from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import { Apps, CloudDownload } from "@material-ui/icons";
import DeleteIcon from "@material-ui/icons/Delete";
import WhatsApp from "@material-ui/icons/WhatsApp";
import Telegram from "@material-ui/icons/Telegram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
import Github from "@material-ui/icons/GitHub";
import Email from "@material-ui/icons/Email";
import IconButton from "@material-ui/core/IconButton";

// core components
import Button from "../CustomButtons/Button.js";

import styles from "../../assets/jss/general-styles/components/headerLinksStyle.js"

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();

  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-tooltip"
          title="Sigueme en Instagram"
          placement={"top"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.instagram.com/roajeremy"
            target="_blank"
            className={classes.navLink}
          >
            <InstagramIcon />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="twitter-tooltip"
          title="Agregame en LinkedIn"
          placement={"top"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            href="https://www.linkedin.com/in/roajeremy/"
            target="_blank"
            color="transparent"
            className={classes.navLink}
          >
            <LinkedInIcon />
          </Button>
        </Tooltip>
      </ListItem>

      <ListItem className={classes.listItem}>
        <Tooltip
          id="github-tooltip"
          title="Sigueme en GitHub"
          placement={"top"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://github.com/jeremyroa"
            target="_blank"
            className={classes.navLink}
          >
            <Github />
          </Button>
        </Tooltip>
      </ListItem>

      <ListItem className={classes.listItem}>
        <Tooltip
          id="wp-tooltip"
          title="Escribeme por WhatsApp"
          placement={"top"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://api.whatsapp.com/send?phone=+584122443946"
            target="_blank"
            className={classes.navLink}
          >
            <WhatsApp />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="tg-tooltip"
          title="Escribeme por Telegram"
          placement={"top"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://t.me/roajeremy"
            target="_blank"
            className={classes.navLink}
          >
            <Telegram />
          </Button>
        </Tooltip>
      </ListItem>

      <ListItem className={classes.listItem}>
        <Tooltip
          id="email-tooltip"
          title="Enviame un e-mail"
          placement={"top"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="mailto:jmra0611@gmail.com"
            target="_blank"
            className={classes.navLink}
          >
            <Email />
          </Button>
        </Tooltip>
      </ListItem>
    </List>
  );
}
