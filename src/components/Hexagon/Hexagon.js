import React from 'react'
import useStyle from '../../assets/jss/general-styles/components/hexagonStyle'
export default function Hexagon({ children }) {
    let Children = children
    const classes = useStyle();
    return (
        <div className={classes.hexWrap}>
            <div className={classes.hexagon}>
                <div className={classes.iconHexagonWrap}>
                    {children}
                </div>
            </div>
        </div>
    )
}
