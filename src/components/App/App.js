/*
  主组件
 */
import React,{Component} from "react";
import Add from "../Add/Add";
import List from "../List/List";
import Pubsub from "pubsub-js";


export default class App extends Component {
  constructor (props) {
    super (props);
    this.state = {
      comments: [
        {username: "Tom",content: "Good"},
        {username: "Jack",content: "No"}
      ]
    };
  };

  componentDidMount () {
    Pubsub.subscribe('deleteComment',(message,index) => {
      this.deleteComment(index);
    })
  }
  addComment = (comment) => {
    const {comments} = this.state;
    comments.unshift(comment);
    this.setState({comments});
  };

  deleteComment = (index) => {
    const {comments} = this.state;
    comments.splice(index,1);
    this.setState({comments});
  }

  render () {
    const {comments} = this.state;
    return (
        <div>
          <header className="site-header jumbotron">
            <div className="container">
              <div className="row">
                <div className="col-xs-12">
                  <h1>请发表对React的评论</h1>
                </div>
              </div>
            </div>
          </header>
          <div className="container">
            <Add addComment={this.addComment}></Add>
            <List comments={comments} deleteComment={this.deleteComment}></List>
          </div>
        </div>
    );
  };
};