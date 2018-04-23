import React from 'react';
import {Comment} from './comment';
import './index.scss';
class Modal extends React.Component{
	constructor(props){
    super(props);
    this.state={
      showModal: props.showModal
    }
	}
	render(){
    const {
      comment,
      showModal
    } = this.props;

      return (
        <div>
          {
            showModal
            ?
            <div className='modal'>
            <h2>图片说明：</h2>
            <span>{comment.title}--{comment.description}</span>
            </div>
            :
            null
          }
      </div>
      )

	}
}

export { Modal };