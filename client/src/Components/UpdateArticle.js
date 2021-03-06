// @flow

import * as React from 'react';
import { Component } from 'react-simplified';
// $FlowFixMe!
import { Input, Label, Button, FormGroup, Form } from 'reactstrap';
import { articleStore } from '../store';
import { history } from '../index';

class UpdateArticle extends Component {
  header = null;

  newHeader = null;
  newDescription = null;
  newContent = null;
  newImportance = null;

  onClickReturn() {
    history.push('/');
  }

  onClickSubmit() {
    if (
      this.newHeader !== null &&
      this.newContent !== null &&
      this.newDescription !== null &&
      this.newImportance !== null &&
      this.header !== null
    ) {
      const newValues = {
        header: this.newHeader,
        description: this.newDescription,
        content: this.newContent,
        importance: this.newImportance
      };
      const formData = new FormData();

      console.log(this.newDescription);
      console.log(this.newHeader);
      console.log(this.newContent);
      console.log(this.newImportance);

      formData.append('header', this.newHeader);
      formData.append('description', this.newDescription);
      formData.append('content', this.newContent);
      formData.append('importance', this.newImportance);

      articleStore.patchArticle(this.header, newValues);
      alert('updated.');
    } else {
      alert('Fill in all fields');
    }
  }

  render() {
    return (
      <div className="updateArticleWrappper">
        <Form>
          <FormGroup>
            <div className="inputUpdateTop">
              <h1>Update page</h1>
              <Button className="createArticleReturnBTN" onClick={this.onClickReturn}>
                Return to HomePage
              </Button>
            </div>
            <div className="inputTopSecond">
              <Label for="exampleText">Write the header of which article to update here</Label>
              <Input
                className="textarea"
                name="text"
                placeholder="header"
                onChange={event => (this.header = event.target.value)}
              />
            </div>
          </FormGroup>
          <FormGroup>
            <Input
              className="textarea"
              name="text"
              placeholder="new header"
              onChange={event => (this.newHeader = event.target.value)}
            />
            <Input
              className="textarea"
              name="text"
              placeholder="new description"
              onChange={event => (this.newDescription = event.target.value)}
            />
            <Input
              className="textarea"
              name="text"
              placeholder="new content"
              onChange={event => (this.newContent = event.target.value)}
            />
          </FormGroup>

          <FormGroup check>
            <Label check>
              <Input
                type="radio"
                name="radio1"
                id="opt1"
                onChange={event => {
                  if (event.target.value !== undefined) {
                    this.newImportance = 1;
                  }
                }}
              />{' '}
              Important
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input
                type="radio"
                name="radio1"
                id="opt2"
                onChange={event => {
                  if (event.target.value !== undefined) {
                    this.newImportance = 0;
                  }
                }}
              />{' '}
              Trivial
            </Label>
          </FormGroup>
          <FormGroup>
            <div className="updateSubmit">
              <Button className="submitArticleBTN" onClick={this.onClickSubmit}>
                Submit update
              </Button>
            </div>
          </FormGroup>
        </Form>
      </div>
    );
  }
}

export default UpdateArticle;
