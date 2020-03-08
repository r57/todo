import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router';

interface what extends RouteComponentProps<{itemId: string}> {}

interface whatState {
  itemId: string;
}

export default class SingleListItemComponent extends Component<what, whatState> {

  constructor(props: what) {
    super (props);
    this.state = {
      itemId: this.props.match.params.itemId,
    };
  }

  render () {
    return (
      <div>'single item' {this.state.itemId}</div>
    );
  }
}