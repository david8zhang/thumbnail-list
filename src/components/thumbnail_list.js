import React, { Component } from 'react';

/**
 * @property {String} title 				The title of the thumbnail list
 * @property {Array}  items 				An array of thumbnail objects, with properties image_url, title, topic_name
 * @property {JSX} 	  children (OPTIONAL)	Some custom children to render instead of default thumbnail items
 */
class ThumbnailList extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className='thumnail-list small-12 large-4 columns'>
				<h4 style={{background: '#e6e6e6', 
							fontWeight:'700', 
							marginTop:'0px',
							marginLeft:'0px',
							marginBottom:'0px',
							marginRight:'20%',
							padding:'20px 15px'}}>
					<i className='fi-clock' style={{marginRight:'10px', color:'#F2676B'}}/>
					{this.props.title}
				</h4>
				{this.props.children || this.renderThumbnailItems()}
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
					<div className='small-2 large-3 columns' style={{padding:'10px 0px 10px 0px'}}>
						<img className='thumbnail' src={item.image_url} style={{width:'auto', maxHeight:'87px', maxWidth:'100%', height:'auto', margin:'0 auto'}}/>
					</div>
					<div className='small-10 large-9 columns' style={{marginTop:'15px', paddingLeft:'10px'}}>
						<a style={{fontSize:'25px'}}>{item.title}</a>
						<p><em>{item.topic_name}</em></p>
					</div>
				</div>
			</div>
		})

	}
}

export default ThumbnailList;