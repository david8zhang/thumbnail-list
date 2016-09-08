import React, { Component } from 'react';

class ThumbnailList extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className='thumnail-list'>
				<h4 style={{background: '#e6e6e6', 
							fontWeight:'700', 
							marginTop:'0px',
							marginLeft:'0px',
							marginBottom:'0px',
							marginRight:'20%',
							padding:'20px 15px'}}>
					<i className='fi-clock' style={{marginRight:'10px', color:'#F2676B'}}/>
					Recent Posts
				</h4>
				{this.renderThumbnailItems()}
			</div>
		)
	}

	/**
	 * Render the recent blog posts as thumbnail items
	 * @return {JSX} React components comprising the list of thumbnail items
	 */
	renderThumbnailItems() {
		return this.props.items.map((item, index) => {
			return <div style={{background: 'white', marginRight:'20%'}} key={index}>
				<div className='row'>
					<div className='small-12 large-3 columns'>
						<img className='thumbnail' src={item.image_url} style={{width:'100%',height:'87px', marginLeft:'20px', marginTop:'10px'}}/>
					</div>
					<div className='small-12 large-9 columns' style={{marginTop:'20px'}}>
						<a>{item.title}</a>
						<p><em>{item.topic_name}</em></p>
					</div>
				</div>
			</div>
		})

	}
}

export default ThumbnailList;