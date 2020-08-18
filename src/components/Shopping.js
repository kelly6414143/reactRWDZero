import React from "react";

const Shopping = ({ styles }) => {
    const ShoppingStyle = {
        display: "flex",
        padding: "0 20px",
        paddingTop: styles.shoppingChangeDirection ? "40px" : "105px",
        flexDirection: styles.shoppingChangeDirection ? "column" : "row",
        alignItems: styles.shoppingChangeDirection ? "center" : null,
        justifyContent: "space-between",
        shopTitleBox: {
            marginBottom: styles.shoppingChangeDirection ? "90px" : "0",
            textAlign: styles.shoppingChangeDirection ? "center" : "left"
        },
        title: {
            fontSize: "52px",
            color: "#000000",
            fontFamily: "'Adrianna', sans-serif",
            fontWeight: 600,
            lineheight: "56px",
            width: "100%",
            maxWidth: styles.shoppingChangeDirection ? "420px" : "285px",
            margin: "0 12.5px 30px 0",
        },
        buttonWrapper: {
            cursor: "pointer",
            display: "inline-block",
            padding: "20px",
            backgroundColor: "#000000",
            color: "#ffffff",
            fontSize: "14px",
            fontWeight: 700,
            letterSpacing: "1px",
            textTransform: "uppercase"
        },
        shopItemRow: {
            display: "flex",
        },
        shopItem: {
            marginLeft: "25px",
            width: "190px",
            height: "196px",
            padding: "20px",
            border: "1px solid red"
        }
    };




    return (
        <div style={ShoppingStyle} class="ShoppingStyle">
            <div style={ShoppingStyle.shopTitleBox}>
                <h1 style={ShoppingStyle.title}>
                    Zero-waste
                    groceries,
                    delivered fast.
                </h1>
                <span style={ShoppingStyle.buttonWrapper}>Start shopping</span>
            </div>
            <div style={ShoppingStyle.shopItemRow}>
                <div style={ShoppingStyle.shopItem}></div>
                <div style={ShoppingStyle.shopItem}></div>
                <div style={ShoppingStyle.shopItem}></div>
                <div style={ShoppingStyle.shopItem}></div>
            </div>
        </div>
    );
};

export default Shopping;
