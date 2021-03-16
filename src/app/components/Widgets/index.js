import { FiberManualRecord, Info } from '@material-ui/icons'
import React from 'react'
import './styles.scss'

function Widgets() {

    const newArticle = (heading, subtitle) => {
        return  <div className="widgets__article">
            <div className="widgets__articleLeft">
                <FiberManualRecord />
            </div>
            <div className="widgets__articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    }
    return (
        <div className="widgets">
            <div className="widgets__header">
                <h2>LinkedIn News</h2>
                <Info />
            </div>
        
            {newArticle("PAPA React is back", "Top news - 9099 readers")}
            {newArticle("Coronavirus: UK updates", "Top news - 886 readers")}
            {newArticle("Tesla hits new highs", "Cars & auto - 300 readers")}
            {newArticle("Bitcoin Breaks $22k", "Crypto - 8000 readers")}
            {newArticle("Is Redux too good?", "Code - 123 readers")}
            {newArticle("PAPAP react launches course?!", "Top news - 6503 readers")}
        </div>
    )
}

export default Widgets
