import React, { Component } from 'react';
import ThumbnailList from './thumbnail_list';

class App extends Component {
	render() {
		var items = [{
			image_url: 'https://i.redd.it/enpimx3w9sjx.jpg',
			title: 'Title 1',
			topic_name: 'Category 1'
		}, {
			image_url: 'https://i.ytimg.com/vi/YSCV4jI1PMM/maxresdefault.jpg',
			title: 'Title 2',
			topic_name: 'Category 2'
		}]
		return <div>
			<ThumbnailList title='Recent Posts' items={items}/>
			<ThumbnailList title='Custom Recent Posts'>
				<h4>Custom Stuff</h4>
			</ThumbnailList>
		</div>
	}
}

export default App;