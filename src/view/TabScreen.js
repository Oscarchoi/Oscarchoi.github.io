import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

import HomeIcon from "@material-ui/icons/Home";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MusicNoteIcon from "@material-ui/icons/MusicNote";

import HomePanel from "../panel/HomePanel";

import MemoryIcon from "@material-ui/icons/Memory";
import SettingsEthernetIcon from "@material-ui/icons/SettingsEthernet";
import SettingsInputAntennaIcon from "@material-ui/icons/SettingsInputAntenna";

function a11yProps(index) {
  return {
    id: `tab-${index}`,
    "aria-controls": `tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

export default function TabHeader() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar
        position="static"
        color="transparent"
        elevation={0}
        variant="outlined"
      >
        <Tabs
          value={value}
          onChange={handleChange}
          textColor="primary"
          indicatorColor="primary"
          aria-label="tab header"
          centered
        >
          <Tab icon={<HomeIcon fontSize="medium" />} {...a11yProps(0)} />
          <Tab icon={<FavoriteIcon fontSize="medium" />} {...a11yProps(1)} />
          <Tab icon={<MusicNoteIcon fontSize="medium" />} {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <HomePanel></HomePanel>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Typography> TBD </Typography>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Typography> TBD </Typography>
      </TabPanel>
    </div>
  );
}
