import React from 'react';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import { IconButton } from '@material-ui/core';

interface RemoveListProps {id:string}

function getModalStyle() {
    return {
        top: `30%`,
        left: `50%`,
        transform: `translate(-30%, -50%)`,
    };
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      padding: theme.spacing(2, 4, 3),
    },
  }),
);

const REMOVE_TODO_LIST = gql`
  mutation removeTodoList($id: string) {
    removeTodoList(id: $id){ id}
  }
`;

const RemoveListModalComponent: React.FC<RemoveListProps> = (props) => {

//export default function RemoveListModal() {
    const classes = useStyles();
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);

    const [removeTodo, { data }] = useMutation(REMOVE_TODO_LIST);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
    <div>
        <IconButton size="small" color="secondary" title="Remove list" aria-label="Remove list" component="span" onClick={handleOpen}>
            <DeleteIcon />
        </IconButton>
        <Modal
            open={open}
            onClose={handleClose}
        >
        <div style={modalStyle} className={classes.paper}>
            <h2>Are you sure you want to remove this list?</h2>
            <form
                onSubmit={e => {
                    e.preventDefault();
                    removeTodo({ variables: { id: props.id } });
                }}
                >
                <Button type="reset">Cancel</Button>
                <Button type="submit">Yes</Button>
            </form>
        </div>
        </Modal>
    </div>
    );
}

export default RemoveListModalComponent;

