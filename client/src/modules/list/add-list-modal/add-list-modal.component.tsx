import React from 'react';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import { TextField } from '@material-ui/core';

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

const ADD_TODO_LIST = gql`
  mutation addTodoList($title: string, $comment: string) {
    addTodoList(title: $title, comment: $comment){
      id,
      title,
      comment
      }
  }
`;

export default function AddListModal() {
    const classes = useStyles();
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);

    let inputRef = React.createRef<HTMLInputElement>();
    const [addTodo, { data }] = useMutation(ADD_TODO_LIST);

    const disableSubmit = !inputRef.current;

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
    <div>
        <Button onClick={handleOpen}>
        Add List
        </Button>
        <Modal
            open={open}
            onClose={handleClose}
        >
        <div style={modalStyle} className={classes.paper}>
            <h2>Add a new ToDo list</h2>
            <form
                onSubmit={e => {
                    e.preventDefault();
                    if (inputRef.current) {
                        addTodo({ variables: { title: inputRef.current.value, comment: 'test' } });
                        inputRef.current.value = '';
                    }
                }}
                >
                <TextField placeholder="Title" ref={inputRef}/>
                <Button disabled={disableSubmit} type="submit">Add Todo</Button>
            </form>
        </div>
        </Modal>
    </div>
    );
}
