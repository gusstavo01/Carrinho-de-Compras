import { ListItem, ListItemText } from '@material-ui/core/';
import React from "react";

const Item = ({name,details}) => {

    return(
        <ListItem>
            <ListItemText
           primary={<span style={{ fontWeight: 'bold' }}>{name}</span>}
           secondary={details}
            />
        </ListItem>
    )

}

export default Item;