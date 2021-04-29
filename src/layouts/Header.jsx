import React from "react";
import Name from "../components/Name"
import Title from "../components/Title"
import { slide as Menu } from 'react-burger-menu'

export default function Header(){
var styles = {
  bmBurgerButton: {
    position: "fixed",
    width: "36px",
    height: "30px",
    right: "36px",
    top: "36px",
  },
  
  bmBurgerBars: {
    background: "#D32F2F",
    height:"3px",
  },
  bmBurgerBarsHover: {
    background: "#a90000",
  },
  bmCrossButton: {
    height: "24px",
    width: "24px",
    visibility:"hidden"
  },
  bmCross: {
    background: "#bdc3c7",
  },
  bmMenuWrap: {
    position: "fixed",
    height: "100%",
    width: "70%"
  },

  bmMorphShape: {
    fill: "#373a47",
  },
  bmItemList: {
    color: "#202030",
    padding: "0.8em",
  },
  bmItem: {
    display: "flex",
  },
  bmOverlay: {
    background: "rgba(0, 0, 0, 0.3)",
  },
};

  return (
    <>
      <div className="border border-transparent">
        <Name />
        <div className="hidden w-7/12 lg:flex fixed justify-end top-0 right-0 lg:mr-16 ">
          <Title link="#aboutMe">À propos </Title> 
          <Title link="#realisations">Réalisations </Title> 
          <Title link="#contact">Contact </Title> 
          <Title>Mon Cv </Title> 
        </div>
        <Menu className={"w-60 px-4 py-8 bg-gray-200 opacity-80 lg:hidden"} styles={styles} right={true} >
            <div className="flex flex-col">
              <Title link="#aboutMe">À propos </Title> 
              <Title link="#realisations">Réalisations </Title> 
              <Title link="#contact">Contact </Title> 
              <Title>Mon Cv </Title> 
            </div>
        </Menu>
      </div>
    </>
  );
}
