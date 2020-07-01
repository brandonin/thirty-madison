import React, { useCallback, useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

interface IFormDialog {
    open: boolean;
    submitNames(input: { username1: string, username2: string }): void;
}

const FormDialog: React.FC<IFormDialog> = ({ open, submitNames }) => {
    const [username1, setUsername1] = useState('');
    const [username2, setUsername2] = useState('');
    const handleSubmit = useCallback(() => {
        submitNames({username1, username2});
    }, [submitNames, username1, username2])

    // add debounce functionality in the future.
    const handleUsername1Change = useCallback((e) => {
        setUsername1(e.target.value);
    }, []);

    const handleUsername2Change = useCallback((e) => {
        setUsername2(e.target.value);
    }, []);

    return (
        <div>
        <Dialog open={open} onClose={submitNames} aria-labelledby="form-dialog-title" disableBackdropClick={true} disableEscapeKeyDown={true}>
            <DialogTitle id="form-dialog-title">Welcome</DialogTitle>
            <DialogContent>
                <DialogContentText> 
                    Hello! Thank you for playing our Tic Tac Toe Game. We just need to know the names of who's playing!
                </DialogContentText>
                <TextField
                    autoFocus
                    margin="dense"
                    id="username1"
                    label="First Player"
                    type="text"
                    value={username1}
                    fullWidth
                    onChange={handleUsername1Change}
                />
                <TextField
                    margin="dense"
                    id="username2"
                    label="Second Player"
                    type="text"
                    value={username2}
                    fullWidth
                    onChange={handleUsername2Change}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleSubmit} color="primary">
                    Submit
                </Button>
            </DialogActions>
        </Dialog>
        </div>
    );
}

export default FormDialog;
