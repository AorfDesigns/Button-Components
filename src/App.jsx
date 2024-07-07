// App.js
import { useState } from 'react';
import React from 'react';
import './App.css'; 
import ButtonGrid from './Component/ButtonGrid';
import { MdLocalGroceryStore } from "react-icons/md";

function App() {
  const [btnTitle,setBtnTitle] = useState('Default');
  const [hovering,setHovering] = useState("Default");
  const [outineTxt, setOutlineTxt] = useState("Default");
  const [focus, setFocus] = useState("Default");
  const [text, setText] = useState("Default");
  const [textHov, setTextHov] = useState("Default");
  const [disabledShow, setDisabledShow] = useState("Default")
  const [disabled, setDisabled] = useState("Default")
  const [textDisabled, setTextDisabled] = useState("Default")
  const [iconLeft,setIconLeft] = useState("Default");
 const [iconRight,setIconRight] = useState("Default");
 const [sm, setSm] = useState("Default")
 const [md, setMd] = useState("Default")
 const [lg, setLg] = useState("Default")
 const [colorDefault, setColorDefault] = useState("Default")
 const [primary, setPrimary] = useState("Default")
 const [secondary, setSecondary] = useState("Default")
 const [danger, setDanger] = useState("Default")
 const [hov, setHov] = useState("Default")
 const [mdPrimary, setMdPrimary] = useState("Default")
 const [mdSecondary, setMdSecondary] = useState("Default")
 const [mdDanger, setMdDanger] = useState("Default")

const handleDefault = () => {
  setBtnTitle("This is the Default Button Clicked")
}


const handleHovering = () => {
  setHovering("This is the Hovering State")
}
const handleOutline = () => {
  setOutlineTxt("This is the Outline State")
}
const handleFocus = () => {
  setFocus("This is the Focus State")
}
const handleText = () => {
  setText("This is the text State")
}
const handleTextHov = () => {
  setTextHov ("This is the Hovering and Focus State")
}
const handleDisabledShow = () => {
  setDisabledShow("This is the DisabledShow State")
}
const handleDisabled = () => {
  setDisabled("This is the Disabled State")
}
const handleTextDisabled = () => {
  setTextDisabled("This is the Disabled Text State")
}
const handleIconLeft = () => {
  setIconLeft("Text with Icon Left")
}
const handleIconRight = () => {
  setIconRight("Text with Icon Right")
}
const handleSm = () => {
  setSm("This is the Small Button")
}
const handleMd = () => {
  setMd("This is the Medium Button")
}
const handleLg = () => {
  setLg("This is the Large Button")
}
const handleColorDefault = () => {
  setColorDefault("This is the Color Default Button")
}
const handlePrimary = () => {
  setPrimary("This is the Primary button")
}
const handleSecondary = () => {
  setSecondary("This is the Secondary Button")
}
const handleDanger = () => {
  setDanger("This is the Danger Button")
}
const handleHov = () => {
  setHov("This is the Hovering State")
}
const handleMdPrimary = () => {
  setMdPrimary("This is the Medium Primary Button")
}
const handleMdSecondary = () => {
  setMdSecondary("This is the Medium Secondary Button")
}
const handleMdDanger = () => {
  setMdDanger("This is the Medium Danger Button")
}
  return (
    <>
      <div className='btn'>
        <div className="btn-grid">
          <div className="btn-item">
            <h5>Button: {btnTitle}</h5>
            <ButtonGrid btnBg="#E0E0E0" btnName={"Default"} txtColor={"Black"} btnFunc={handleDefault} />
          </div>
          <div className="btn-item">
            <h5>Button: {hovering}</h5>
            <ButtonGrid btnBg="#AEAEAE" btnName={"Default"} txtColor={"Black"} btnFunc={handleHovering} />
          </div>
          <div className="btn-item">
            <h5>Button {outineTxt}</h5>
            <ButtonGrid btnBg="transparent" btnBorder="2px solid blue" btnName={"Default"} txtColor="blue" btnFunc={handleOutline} />
          </div>
          <div className="btn-item">
            <h5>Button: {focus}</h5>
            <ButtonGrid btnBg="rgba(41, 98, 255, 0.1)" btnBorder="1px solid blue" btnName={"Default"} txtColor="blue" btnFunc={handleFocus} />
          </div>
          <div className="btn-item">
            <h5>Button: {text}</h5>
            <ButtonGrid btnBg="transparent" btnName={"Default"} txtColor="blue" btnFunc={handleText} />
          </div>
          <div className="btn-item">
            <h5>Button: {textHov}</h5>
            <ButtonGrid btnBg="rgba(41, 98, 255, 0.1)" btnBorder="1px solid blue" btnName={"Default"} txtColor="blue" btnFunc={handleTextHov}/>
          </div>
          <div className="btn-item">
            <h5>Button: {disabledShow}</h5>
            <ButtonGrid btnBg="#3D5AFE" btnName={"Default"} txtColor="white" btnFunc={handleDisabledShow} />
          </div>
          <div className="btn-item">
            <h5>Button: {disabled}</h5>
            <ButtonGrid btnBg="#E0E0E0" btnName={"Disabled"} txtColor="Black" btnFunc={handleDisabled} />
          </div>
          <div className="btn-item">
            <h5>Button: {textDisabled}</h5>
            <ButtonGrid btnBg="transparent" btnName={"Disabled"} txtColor="#9E9E9E"btnFunc={handleTextDisabled} />
          </div>
          <div className="btn-item">
            <h5>Button: {iconLeft}</h5>
            <ButtonGrid btnBg="#2962FF" btnFunc={handleIconLeft}>
              <MdLocalGroceryStore color='white' />
              <span className='btntxt'>Default</span>
            </ButtonGrid>
          </div>
          <div className="btn-item">
            <h5>Button: {iconRight}</h5>
            <ButtonGrid btnBg="#2962FF" btnFunc={handleIconRight}>
              <span className='btntxt1'>Default</span>
              <MdLocalGroceryStore color='white' />
            </ButtonGrid>
          </div>
          <div className="btn-item">
            <h5>Button: {sm}</h5>
            <ButtonGrid btnBg="#2962FF" btnName={"Default"} txtColor={"white"} btnWidth="120px" btnHeight="50px" btnFunc={handleSm} />
          </div>
          <div className="btn-item">
            <h5>Button: {md}</h5>
            <ButtonGrid btnBg="#2962FF" btnName={"Default"} txtColor={"white"} btnWidth="150px" btnHeight="60px" btnFunc={handleMd} />
          </div>
          <div className="btn-item">
            <h5>Button: {lg}</h5>
            <ButtonGrid btnBg="#2962FF" btnName={"Default"} txtColor={"white"} btnWidth="180px" btnHeight="70px" btnFunc={handleLg} />
          </div>
          <div className="btn-item">
            <h5>Button: {colorDefault}</h5>
            <ButtonGrid btnBg="rgba(51, 51, 51, 0.3)" btnName={"Default"} txtColor={"black"} btnWidth="120px" btnHeight="50px" btnFunc={handleColorDefault} />
          </div>
          <div className="btn-item">
            <h5>Button: {primary}</h5>
            <ButtonGrid btnBg="#2962FF" btnName={"Default"} txtColor={"white"} btnFunc={handlePrimary} />
          </div>
          <div className="btn-item">
            <h5>Button: {secondary}</h5>
            <ButtonGrid btnBg="#455A64" btnName={"Secondary"} txtColor={"white"} btnFunc={handleSecondary} />
          </div>
          <div className="btn-item">
            <h5>Button: {danger}</h5>
            <ButtonGrid btnBg="#D32F2F" btnName={"Danger"} txtColor={"white"} btnFunc={handleDanger} />
          </div>
          <div className="btn-item">
            <h5>Button: {hov}</h5>
            <ButtonGrid btnBg="#AEAEAE" btnName={"Default"} txtColor={"black"} btnWidth="120px" btnHeight="50px" btnFunc={handleHov} />
          </div>
          <div className="btn-item">
          <h5>Button: {mdPrimary}</h5>
            <ButtonGrid btnBg="#0039CB" btnName={"Default"} txtColor={"white"} btnWidth="120px" btnHeight="50px" btnFunc={handleMdPrimary} />
          </div>
          <div className="btn-item">
          <h5>Button: {mdSecondary}</h5>
            <ButtonGrid btnBg="#1C313A" btnName={"Secondary"} txtColor={"white"} btnWidth="140px" btnHeight="50px" btnFunc={handleMdSecondary} />
          </div>
          <div className="btn-item">
          <h5>Button: {mdDanger}</h5>
            <ButtonGrid btnBg="#9A0007" btnName={"Danger"} txtColor={"white"} btnWidth="140px" btnHeight="50px" btnFunc={handleMdDanger} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
