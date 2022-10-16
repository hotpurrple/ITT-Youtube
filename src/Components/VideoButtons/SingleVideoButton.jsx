import React from 'react'


export default function SingleVideoButton(props) {
    const {name, icon} = props
  return (
    <>
            <span className="singleVideoButton">
            {icon}
            <h4>{name}</h4>
            </span>
           

    </>
  )
}
