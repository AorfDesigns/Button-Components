import React from 'react'

const ButtonGrid = ({btnName,btnBg, btnWidth, btnHeight, txtColor, btnBorder,btnFunc,children}) => {
    const btnStyles = {
        backgroundColor: btnBg || "blue",
        padding: "16px 32px",
        border: btnBorder ||"none",
        color: txtColor || "white",
        width: btnWidth || "80%",
        height: btnHeight || "60%"
    }
  return (
   <button style={btnStyles} onClick={btnFunc}>{btnName || children}</button>
  )
}

export default ButtonGrid