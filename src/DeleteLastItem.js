import React from 'react';
import PropTypes from 'prop-types';

function DeleteLastItem (props){
  
  return(
    
 	<button onClick={props.onDeleteLastItem} disabled={props.itemNotFound()}>
          Delete Last Item
        </button>
  )
}

DeleteLastItem.propTypes = {
  buttonDisabled: PropTypes.func.isRequired,
  onDeleteLastItem: PropTypes.func.isRequired,
};

export default DeleteLastItem