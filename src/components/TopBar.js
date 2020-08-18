import React from "react";
import searchImg from "../assests/images/asset_1.png"

const TopBar = ({ styles }) => {
  const topBarStyle = {
    top: 0,
    width: "100%",
    padding: styles.showBarDown ? "0 30px" : "0 10px",
    backgroundColor: styles.white,

    upperWragpper: {
      borderBottom: "1px solid #d8d8d8",
      height: styles.topBarUpperHeight,
      display: "flex",
      alignItems: "center",
      fontWeight: "bold"
    },
    leftInfo: {
      width: "100%",
      display: styles.showBarDown ? 'block' : 'none'
    },
    rightInfo: {
      display: "flex",
      width: "100%",
      justifyContent: "flex-end"
    },
    rightInfoText: {
      display: "flex",
      alignItems: "center",
      fontSize: 10,
      fontWeight: 800,
      letterSpacing: 2
    },
    rightOperate: {
      display: "flex",
      alignItems: "center",
    },
    searchImgRadius: {
      display: "flex",
      justifyContent: "center",
      alignItems: 'center',
      minWidth: styles.imgWrapperWH,
      height: styles.imgWrapperWH,
      backgroundColor: "black",
      borderRadius: "50%",
      textAlign: "center",
      marginLeft: "10px"
    },
    searchImgWrapper: {
      width: styles.imgWH
    },
    buyBagGroup: {
      display: "flex",
      justifyContent: "center",
      alignItems: 'center',
      backgroundColor: "black",
      borderRadius: styles.showBarDown ? 13 : 20,
      padding: styles.showBarDown ? "0 6px" : "0 10px",
      minWidth: styles.imgWrapperWH,
      height: styles.imgWrapperWH,
      margin: styles.showBarDown ? "0 0 0 10px" : "0 10px"
    },
    bagImgWrapper: {
      width: styles.imgWH,
      margin: styles.showBarDown ? "0px 5px 0px 2px" : "0px 10px 0px 2px"
    },
    buyBagText: {
      color: "white",
      fontSize: 12,
      fontWeight: 700,
      letterSpacing: 2
    },
    burgerWrapper: {
      display: styles.showBarDown ? 'none' : 'block',
      position: "relative",
      width: 20,
      height: 14,
      margin: 0,
      marginRight: 10,
      cursor: "pointer"
    },
    burgerLine:{
      position: 'absolute',
      top: '50%',
      left: '50%',
      width: '100%',
      height: '2px',
      backgroundColor: '#0b222a',
      transition: "background-color .3s ease-in-out, transform .3s ease-in-out",
      borderradius: "3px"
    },
    burgerTop:{
      transform: "translate(-50%,-7px)"
    },
    burgerMid:{
      transform: "translate(-50%,0px)"
    },
    burgerBottom:{
      transform: "translate(-50%,7px)",
      // transition: background-color .3s ease-in-out, transform .3s ease-in-out;
    },
    downWragpper: {
      display: styles.showBarDown ? 'flex' : 'none',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: "50px"
    },
    menuItems: {
      cursor: "pointer",
      margin: "0 10px -2px",
      fontSize: "10px",
      fontWeight: 700,
      letterSpacing: "2px",
      textTransform: "uppercase",
      opacity: .5,
    }

  };


  const menus = [
    { text: "New" },
    { text: "Produce" },
    { text: "Dairy" },
    { text: "Meat" },
    { text: "Deli" },
    { text: "International" },
    { text: "Drinks" },
    { text: "Pantry" },
    { text: "Bakery" },
    { text: "Home" },
    { text: "Personal" },
  ]


  return (
    <div id="topBar" style={topBarStyle} class="topBarStyle">
      <div style={topBarStyle.upperWragpper}>
        <div style={topBarStyle.leftInfo}></div>
        <img src="https://storage.googleapis.com/zeroshop-cdn/site/img/logo.svg" />
        <div style={topBarStyle.rightInfo}>
          {styles.showBarDown ? <div style={topBarStyle.rightInfoText}>
            <div style={{ whiteSpace: "nowrap", margin: "0 10px" }}>LOG IN</div>
            <div style={{ whiteSpace: "nowrap", margin: "0 10px" }}>SIGN UP</div>
          </div> : null}
          <div style={topBarStyle.rightOperate}>
            <div style={topBarStyle.searchImgRadius}>
              <img src={searchImg} style={topBarStyle.searchImgWrapper} />
            </div>
            <div style={topBarStyle.buyBagGroup}>
              <img style={topBarStyle.bagImgWrapper} src="https://storage.googleapis.com/zeroshop-cdn/site/img/cart-white.svg" />
              <span style={topBarStyle.buyBagText}>0 ITEMS</span>
            </div>
          </div>
        </div>
        <div style={topBarStyle.burgerWrapper}>
          <div style={{...topBarStyle.burgerLine,...topBarStyle.burgerTop}}></div>
          <div style={{...topBarStyle.burgerMid,...topBarStyle.burgerLine}}></div>
          <div style={{...topBarStyle.burgerBottom, ...topBarStyle.burgerLine}}></div>
        </div>
      </div>
      <div style={topBarStyle.downWragpper}>
        {
          menus.map(el => {
            return (
              <div style={topBarStyle.menuItems} class="menuItem">{el.text}</div>
            )
          })
        }
      </div>
    </div>
  );
};

export default TopBar;
