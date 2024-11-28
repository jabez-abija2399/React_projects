import React from 'react'

const ListGroup = (props) => {
    const { items, textProperty, valueProperty, onItemSelect, selectedItem } = props;  // object destructuring to extract the items, textProperty, valueProperty, onItemSelect, and selectedItem properties from props
    return (
        <ul className="list-group">
            {items.map(item => (
                <li key={item[valueProperty]} 
                    onClick={() => onItemSelect(item)} 
                    className={item === selectedItem ? "list-group-item active" : "list-group-item"}>
                    {item[textProperty]}
                </li>
            ))}
        </ul>
    );
}

ListGroup.defaultProps = {
    textProperty: 'name',  // default value for textProperty prop
    valueProperty: '_id'  // default value for valueProperty prop
}

export default ListGroup; // export the ListGroup component

