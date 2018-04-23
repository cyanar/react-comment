import React from 'react';
import {Comment} from './comment';
import './index.scss';
class Modal extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
    const {
      data,
      showModal
    } = this.props;
        {
          showModal
           ?
          <div className='modal'>
            {data.title}--{data.description}
          </div>
          :
          null
        }
	}
}

export { Modal };