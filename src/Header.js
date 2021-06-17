import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import Avatar from '@material-ui/core/Avatar';
import { useDataLayerValue } from './DataLayer';

export default function Header() {

    const [{user}, dispatch] = useDataLayerValue();
    return(
        <div className="header">
            <div className="header_left">
                <SearchIcon />
                <input 
                    placeholder="Search for the Artist, Song , or podcast"
                    type="text"/>
            </div>
            <div className="header_right">
                <Avatar src={user?.images[0]?.url} alt={user?.display_name} />
                <h4>{user?.display_name}</h4>
            </div>
        </div>
    )
}