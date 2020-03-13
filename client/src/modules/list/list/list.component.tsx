import React, { Component } from 'react';
import { ListItem } from '../list-item/list-item.model';
import ListItemComponent from '../list-item/list.component';
import { RouteComponentProps } from 'react-router';

export default class ListComponent extends Component<RouteComponentProps> {
  listArray: ListItem[] = [
    {
      id: '98yh4irnjwienfo0w8uh43r',
      title: 'todo',
      description: 'have to be done by Monday',
      items: [],
    },
    {
      id: '2',
      title: 'todo',
      description: 'have to be done by Monday',
      items: [],
    },
    {
      id: '3',
      title: 'todo',
      description: 'have to be done by Monday',
      items: [],
    },
    {
      id: '4',
      title: 'todo',
      description: 'have to be done by Monday',
      items: [],
    }
  ];

  goToItem(id: string) {
    this.props.history.push(`${this.props.match.url}/${id}`);
  }

  render() {
    return this.listArray.map((singleListItem: ListItem) => {
      return <ListItemComponent key={singleListItem.id} {...singleListItem} clicked={() => this.goToItem(singleListItem.id)} />;
    });
  }
}
