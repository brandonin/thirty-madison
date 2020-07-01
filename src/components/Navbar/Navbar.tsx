import React from 'react';
import { useQuery } from '@apollo/client';
import clsx from 'clsx';
import { makeStyles, useTheme, Theme, createStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import GTranslate from '@material-ui/icons/MoveToInbox';
import Extension from '@material-ui/icons/Extension';
import EmojiObjects from '@material-ui/icons/EmojiObjects';

import GAME_QUERY from '../../graphql/game';
import { GetGame } from '../../graphql/__generated__/GetGame';

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
        },
        appBar: {
            transition: theme.transitions.create(['margin', 'width'], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
            backgroundColor: '#50bfbf',
        },
        appBarShift: {
            width: `calc(100% - ${drawerWidth}px)`,
            transition: theme.transitions.create(['margin', 'width'], {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginRight: drawerWidth,
        },
        title: {
            flexGrow: 1,
        },
        hide: {
            display: 'none',
        },
        drawer: {
            width: drawerWidth,
            flexShrink: 0,
        },
        drawerPaper: {
            width: drawerWidth,
        },
        drawerHeader: {
            display: 'flex',
            alignItems: 'center',
            padding: theme.spacing(0, 1),
            // necessary for content to be below app bar
            ...theme.mixins.toolbar,
            justifyContent: 'flex-start',
        },
        content: {
            flexGrow: 1,
            padding: theme.spacing(3),
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
            marginRight: -drawerWidth,
        },
        contentShift: {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginRight: 0,
        },
    }),
);

const Navbar: React.FC = () => {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const { loading, data } = useQuery<GetGame>(GAME_QUERY, {
        variables: {
            gameId: window.localStorage.getItem('gameId'),
        },
        notifyOnNetworkStatusChange: true,
    });

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    if (loading) {
        return <div>Loading...</div>;
    }
    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                })}
            >
                <Toolbar>
                    {data && (
                        <Typography variant="h6" noWrap className={classes.title}>
                            {data?.game?.users[0]?.name}'s Score: {data?.game?.users[0]?.score?.value}
                        </Typography>
                    )}
                    {data && (
                        <Typography variant="h6" noWrap className={classes.title}>
                            {data?.game?.whosTurn?.name && `It's ${data?.game?.whosTurn?.name}'s turn!`}
                        </Typography>
                    )}
                    {data && (
                        <Typography variant="h6" noWrap className={classes.title}>
                            {data?.game?.users[1]?.name}'s Score: {data?.game?.users[1]?.score?.value}
                        </Typography>
                    )}
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="end"
                        onClick={handleDrawerOpen}
                        className={clsx(open && classes.hide)}
                    >
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="right"
                open={open}
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <div className={classes.drawerHeader}>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </div>
                <Divider />

                <List>
                    <ListItem button>
                        <ListItemIcon>
                            <EmojiObjects />
                        </ListItemIcon>
                        <ListItemText primary={'Chess'} />
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <Extension />
                        </ListItemIcon>
                        <ListItemText primary={'Checkers'} />
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <GTranslate />
                        </ListItemIcon>
                        <ListItemText primary={'Chinese Checkers'} />
                    </ListItem>
                </List>
            </Drawer>
        </div>
    );
};

export default Navbar;
