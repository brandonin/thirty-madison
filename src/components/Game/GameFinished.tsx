import React, { useCallback } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';

interface IFormDialog {
    open: boolean;
    winner: boolean;
    tie: boolean;
    reset(): void;
}

const FormDialog: React.FC<IFormDialog> = ({ open, reset, winner, tie }) => {
    const handleSubmit = useCallback(() => {
        reset();
    }, [reset])

    return (
        <div>
        <Dialog open={open} aria-labelledby="form-dialog-title" disableBackdropClick={true} disableEscapeKeyDown={true}>
            <DialogContent>
                <DialogContentText> 
                    { winner && "Congratulations on winning. Would you like to play again?" }
                    { tie && "You tied! Reset the game and try again." }
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleSubmit} variant="contained" color="primary">
                    Reset
                </Button>
            </DialogActions>
        </Dialog>
        </div>
    );
}

export default FormDialog;
