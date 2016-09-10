'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @property {String} title 				The title of the thumbnail list
 * @property {Array}  items 				An array of thumbnail objects, with properties image_url, title, topic_name
 * @property {JSX} 	  children (OPTIONAL)	Some custom children to render instead of default thumbnail items
 */

var ThumbnailList = (function (_Component) {
	_inherits(ThumbnailList, _Component);

	function ThumbnailList(props) {
		_classCallCheck(this, ThumbnailList);

		return _possibleConstructorReturn(this, (ThumbnailList.__proto__ || Object.getPrototypeOf(ThumbnailList)).call(this, props));
	}

	_createClass(ThumbnailList, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				{ className: 'thumnail-list small-12 large-4 columns' },
				_react2.default.createElement(
					'h4',
					{ style: { background: '#e6e6e6',
							fontWeight: '700',
							marginTop: '0px',
							marginLeft: '0px',
							marginBottom: '0px',
							marginRight: '20%',
							padding: '20px 15px' } },
					_react2.default.createElement('i', { className: 'fi-clock', style: { marginRight: '10px', color: '#F2676B' } }),
					this.props.title
				),
				this.props.children || this.renderThumbnailItems()
			);
		}

		/**
   * Render the recent blog posts as thumbnail items
   * @return {JSX} React components comprising the list of thumbnail items
   */

	}, {
		key: 'renderThumbnailItems',
		value: function renderThumbnailItems() {
			return this.props.items.map(function (item, index) {
				return _react2.default.createElement(
					'div',
					{ style: { background: 'white', marginRight: '20%' }, key: index },
					_react2.default.createElement(
						'div',
						{ className: 'row' },
						_react2.default.createElement(
							'div',
							{ className: 'small-2 large-3 columns', style: { padding: '10px 0px 10px 0px' } },
							_react2.default.createElement('img', { className: 'thumbnail', src: item.image_url, style: { width: 'auto', maxHeight: '87px', maxWidth: '100%', height: 'auto', margin: '0 auto' } })
						),
						_react2.default.createElement(
							'div',
							{ className: 'small-10 large-9 columns', style: { marginTop: '15px', paddingLeft: '10px' } },
							_react2.default.createElement(
								'a',
								{ style: { fontSize: '25px' } },
								item.title
							),
							_react2.default.createElement(
								'p',
								null,
								_react2.default.createElement(
									'em',
									null,
									item.topic_name
								)
							)
						)
					)
				);
			});
		}
	}]);

	return ThumbnailList;
})(_react.Component);

exports.default = ThumbnailList;