import React from 'react';
import {Comment} from './comment';
import './index.scss';
import {Modal} from './Modal';
class PictureList extends React.Component{
	constructor(props){
		super(props);
		this.state={
			showModal: false,
			key: 0
		}
	}
	showModal(id) {
		this.setState({
		  key: id
		})
	}

	render(){

		var commentNodes = this.props.data.map((comment, index) => {
			return (
					<div key={comment.id} className='box'>
						<img src={comment.src} onClick={this.showModal.bind(this,comment.id)}/>
						<Modal comment={comment} showModal={this.state.key == index + 1}/>
					</div>
				);
		});

		return (
				<div className='commentList'>
					{commentNodes}
				</div>
			)
	}
}

export { PictureList };