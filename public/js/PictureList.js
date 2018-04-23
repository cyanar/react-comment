import React from 'react';
import {Comment} from './comment';
import './index.scss';
class PictureList extends React.Component{
	constructor(props){
		super(props);
		this.state={
			showModal: false
		}
	}
	showModal() {
		this.setState({
			showModal: true
		})
	}
	render(){

		var commentNodes = this.props.data.map(comment => {
			return (
					<div key={comment.id}>
						<img src={comment.src} onClick={this.showModal.bind(this)}/>
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