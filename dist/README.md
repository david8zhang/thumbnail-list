# Description
A list of thumbnails for a blog or something

# Styles
You must have Foundation 6 included as part of the project for this component to work!

Get it here: [Foundation 6](http://foundation.zurb.com/sites/download.html/)

Require it in your html

```
<link rel="stylesheet" type="text/css" href="./style/css/app.css">
<link rel="stylesheet" type="text/css" href="./style/css/foundation.css">
<link rel="stylesheet" type="text/css" href="./style/css/foundation.min.css">
```

# Usage
Pass in title of the thumbnail list, plus a list of thumbnail objects with image_url, title, and topic_name. You can also pass in some custom children
```
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
```