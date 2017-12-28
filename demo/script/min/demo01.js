var createListItemElement = React.createFactory('li')

var listItemElement1 = React.DOM.li({className: 'item-1', key: 'item-1'}, 'Item-1')
var listItemElement2 = React.DOM.li({className: 'item-2', key: 'item-2'}, 'Item-2')
var listItemElement3 = React.DOM.li({className: 'item-3', key: 'item-3'}, 'Item-3')

var reactFragment = [listItemElement1, listItemElement2, listItemElement3]
var listOfItems = React.createElement('ul', {className: 'list-of-items'}, reactFragment)

ReactDOM.render(listOfItems, document.getElementById('react-root'))
