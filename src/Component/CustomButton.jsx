import React from 'react'

const CustomButton = ({btnFunc,bgColor, btntext, btnborder,children}) => {
    const btnStyles = {
        backgroundColor: bgColor || "blue",
        padding: "16px 32px",
        color: btntext || "white",
        border : btnborder || "none",
        borderRadius: "5px",
        cursor: "pointer",
        fontSize: "16px",
        margin: "10px",
    }
  return (
   <button style={btnStyles} onClick={btnFunc}>{children || "Default"}</button>
  )
}

export default CustomButton
