import React from "react"

export const User = ({image, name, email}) => {
    return (<div className="user-box">
        <img src={image} alt="user"/>
        <div className="user-info">
            <div className="name">{name}</div>
            <div className="email">{email}</div>
        </div>
    </div>)
}