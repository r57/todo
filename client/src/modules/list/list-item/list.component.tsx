import React, { Component } from 'react';
import { Card, CardContent, Typography, styled, CardActions, Button } from '@material-ui/core';
import { ListItemComponentModel } from './list-item.model';
import './list-item.component.scss';
import { Link } from 'react-router-dom';

const MyTypography = styled(Typography)({
  fontSize: 14,
});

export default class ListItemComponent extends Component<ListItemComponentModel> {
  render() {
    return (
      <Card className="card-wrapper">
        <CardContent>
          <MyTypography color="textSecondary">
            {this.props.title}
          </MyTypography>
          <MyTypography color="textPrimary">
            {this.props.description}
          </MyTypography>
          <CardActions>
            <Button size="small" onClick={this.props.clicked}>Edit</Button>
          </CardActions>
        </CardContent>
      </Card>
    );
  }
}