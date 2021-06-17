import React from 'react'
import './Player.css'
import Sidebar from './Sidebar'
import Body from './Body'
import Footer from './Footer'
import { useDataLayerValue } from './DataLayer'

export default function Player({player}) {

    const {spotify} = useDataLayerValue();

    return(
        <div className="player">
            <div className="player_body">
                <Sidebar />
                <Body spotify={spotify}/>
            </div>
            <Footer />
        </div>
    )
}