import React, { Component } from 'react';
import { Box, Button, Card, CardActions, CardContent, styled, Typography } from '@material-ui/core';
import { ListItemComponentModel } from './list-item.model';
import RemoveListModalComponent from '../remove-list-modal/remove-list-modal.component';
import './list-item.component.scss';

const MyTypography = styled(Typography)({
  fontSize: 14,
});

export default class ListItemComponent extends Component<ListItemComponentModel> {
  render() {
    const listLength = this.props.items.length;
    return (
      <Card className="card-wrapper">
        <CardContent>
          <h3 color="textPrimary">{this.props.title}</h3>
          <Typography variant="caption">
            <span>{listLength + ' item' + (listLength !== 1 ? 's' : '')}</span>
          </Typography>
          <Box className="list-comment">
            <MyTypography color="textSecondary" variant="body2">
              {this.props.comment}
            </MyTypography>
          </Box>
        </CardContent>
        <CardActions className="card-actions">
            <Button size="small" onClick={this.props.clicked}>Edit List</Button>
            <RemoveListModalComponent id={this.props.id}></RemoveListModalComponent>
        </CardActions>
      </Card>
    );
  }
}