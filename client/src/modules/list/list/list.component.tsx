import React, { Fragment } from 'react';
import { ListItem } from '../list-item/list-item.model';
import ListItemComponent from '../list-item/list.component';
import { RouteComponentProps } from 'react-router';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import AddListModal from '../add-list-modal/add-list-modal.component';

const GET_LIST_ITEMS = gql`
  query TodoItems {
    todo {
      id,
      title,
      comment,
      items {
        content,
        done,
        created
      },
    }
  }
`;

function goToItem() {
  console.log('here')
  //this.props.history.push(`${this.props.match.url}/${id}`);
}

interface ListItemProps extends RouteComponentProps {}

interface WrappedListItem {
  todo: ListItem[];
}

const ListComponent: React.FC<ListItemProps> = () => {

  const { loading, error, data } = useQuery<WrappedListItem>(GET_LIST_ITEMS);

  if (loading) return <p>Loading ...</p>;
  if (error) return <p>There was an error fetching the list, please try again. </p>
  if (!data) return <p>No Todo Lists</p>

  return (
    <Fragment>
      <AddListModal></AddListModal>
      { data.todo.map(listItem => (
        <ListItemComponent key={listItem.id} {...listItem} clicked={() => {goToItem();}}/>
      ))}
    </Fragment>
  );
}

export default ListComponent;
