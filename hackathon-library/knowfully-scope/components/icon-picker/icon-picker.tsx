import {
  Box,
  Button,
  ButtonGroup,
  CircularProgress,
  createStyles,
  Icon,
  IconButton,
  InputAdornment,
  makeStyles,
  Paper,
  TextField,
  Theme,
  Tooltip,
  withStyles,
} from "@material-ui/core";
import ClearIcon from "@material-ui/icons/Clear";
import SearchIcon from "@material-ui/icons/Search";
import useBoolean from "./useBoolean";
import React, { useEffect, useMemo, useState } from "react";
import { fontAwesomeIcons } from "./FontAwesomeIcons";

type IconPickerProps = {
  value?: string;
  onChange: (value?: string) => void;
};

const styles = {
  "@global": {
    ".MuiIcon-root": {
      width: "1.5em",
      borderRadius: "0%",
    },
  },
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    selectedIcon: {
      color: theme.palette.secondary.main,
      width: "10%",
    },
    selectedButtonWrapper: {
      float: "right",
      border: `4px solid #DCDCDC`,
      borderRadius: "0px",
      padding: 6,
    },
    paginationButtonGroup: {
      float: "right",
    },
    paper: {
      border: "4px solid #DCDCDC",
    },
    searchBox: {
      width: "90%",
    },
  })
);

const IconPicker = ({ value, onChange }: IconPickerProps) => {
  const classes = useStyles();
  const [icon, setIcon] = useState<string | undefined>(value);
  const [searchTerm, setSearchTerm] = useState("");

  const iconChange = (value?: string | undefined) => {
    setIcon(value);
    onChange(value);
  };

  const totalElements = 15 * 6; /*items per line x lines */

  const iconsArray = useMemo(
    () => [
      ...fontAwesomeIcons.Accessibility,
      ...fontAwesomeIcons.Arrows,
      ...fontAwesomeIcons["Audio & Video"],
      ...fontAwesomeIcons.Business,
      ...fontAwesomeIcons.Chess,
      ...fontAwesomeIcons.Code,
      ...fontAwesomeIcons.Communication,
      ...fontAwesomeIcons.Computers,
      ...fontAwesomeIcons.Currency,
      ...fontAwesomeIcons["Date & Time"],
      ...fontAwesomeIcons.Design,
      ...fontAwesomeIcons.Editors,
      ...fontAwesomeIcons.Files,
      ...fontAwesomeIcons.Genders,
      ...fontAwesomeIcons.Hands,
      ...fontAwesomeIcons.Health,
      ...fontAwesomeIcons.Images,
      ...fontAwesomeIcons.Interfaces,
      ...fontAwesomeIcons.Maps,
      ...fontAwesomeIcons.Objects,
      ...fontAwesomeIcons["Payments & Shopping"],
      ...fontAwesomeIcons.Shapes,
      ...fontAwesomeIcons.Spinners,
      ...fontAwesomeIcons.Sports,
      ...fontAwesomeIcons.Status,
      ...fontAwesomeIcons["Users & People"],
      ...fontAwesomeIcons.Vehicles,
      ...fontAwesomeIcons.Writing,
    ],
    []
  );

  const [icons, setIcons] = useState(iconsArray.slice(0, totalElements));
  const [searching, setSearching] = useBoolean(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    setSearchTerm("");
    const newIconsPage = iconsArray.slice(
      page === 1 ? 0 : page * totalElements,
      page === 1 ? totalElements : (page + 1) * totalElements
    );
    setIcons(newIconsPage);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  return (
    <>
      <Box style={{ height: "50%" }}>
        <Paper elevation={0}>
          <Box mb={1}>
            <TextField
              fullWidth
              variant="outlined"
              placeholder={"Search Icon"}
              value={searchTerm ?? ""}
              className={classes.searchBox}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => {
                        setSearchTerm("");
                        setIcons(iconsArray);
                      }}
                    >
                      <ClearIcon />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              onChange={(e: any) => {
                setSearching.setTrue();
                setSearchTerm(e.target.value);
                let filteredIcons = iconsArray.filter((icon) =>
                  icon.includes(e.target.value)
                );
                setIcons(filteredIcons.slice(page, page * totalElements));
                setSearching.setFalse();
              }}
            />
            <Tooltip title={icon ?? ""}>
              <IconButton
                color="primary"
                size="medium"
                component="span"
                className={classes.selectedButtonWrapper}
                disabled
              >
                <Icon
                  fontSize="large"
                  className={`${classes.selectedIcon} ${icon}`}
                />
              </IconButton>
            </Tooltip>
          </Box>
          <Paper className={classes.paper}>
            <ButtonGroup
              size="large"
              style={{
                display: "flex",
                flexFlow: "row wrap",
              }}
            >
              {!searching ? (
                icons.map((icon, index) => {
                  return (
                    <div key={index}>
                      <Tooltip title={icon}>
                        <IconButton
                          color="primary"
                          size="medium"
                          component="span"
                          onClick={(e: any) => {
                            iconChange(icons[index]);
                          }}
                        >
                          <Icon className={icon} fontSize="large" />
                        </IconButton>
                      </Tooltip>
                    </div>
                  );
                })
              ) : (
                <CircularProgress size={24} />
              )}
            </ButtonGroup>
          </Paper>
          <Box m={1}>
            <ButtonGroup className={classes.paginationButtonGroup} size="large">
              <Button
                disabled={page === 1}
                onClick={() => setPage((prev) => prev - 1)}
              >
                Previous Page
              </Button>
              <Button
                disabled={page === 13}
                onClick={() => setPage((prev) => prev + 1)}
              >
                Next Page
              </Button>
            </ButtonGroup>
          </Box>
        </Paper>
      </Box>
    </>
  );
};

export default withStyles(styles)(IconPicker);
