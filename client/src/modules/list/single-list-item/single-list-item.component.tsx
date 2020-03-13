import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';

interface listItemProps extends RouteComponentProps<{itemId:string}> {
}

const GET_LIST_ITEM = gql`
query TodoItemDetails ($itemId:String!){
  todoItem(id:$itemId) {
    title
    id
  }
}`;

const SingleListItemComponent: React.FC<listItemProps> = (props) => {

  const {
    data,
    loading,
    error
  } = useQuery(GET_LIST_ITEM,
    { variables: { itemId: props.match.params.itemId } }
  );

  return (
    <div>'single item' {props.match.params.itemId}</div>
  );
}

export default SingleListItemComponent;
