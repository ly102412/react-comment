/*
  评论
 */
import React,{Component,PropTypes} from "react";
import Pubsub from "pubsub-js";
import "./item.css";

export default class Item extends Component {

  static propTypes = {
    comment: PropTypes.object.isRequired
  };

  deleteItem = () => {
    const {comment,index} = this.props;
    if(window.confirm(`你确认删除${comment.username}的评论吗？`)){
      Pubsub.publish('deleteComment',index);
    };
  };

  render () {
    const {comment} = this.props;
    return (
    <li className="list-group-item">
      <div className="handle">
        <a href="javascript:;" onClick={this.deleteItem}>删除</a>
      </div>
      <p className="user"><span >{comment.username}</span><span>说:</span></p>
      <p className="centence">{comment.content}</p>
    </li>
    );
  };
};