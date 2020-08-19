import React from "react";
import BreadImg from '../assests/images/asset 4.png';
import MilkImg from '../assests/images/asset 5.png';
import EggImg from '../assests/images/asset 6.png';
import BananaImg from '../assests/images/asset 7.png';

const Shopping = ({ styles, windowWidth }) => {
    const ShoppingStyle = {
        maxWidth: '1320px',
        display: "flex",
        padding: "0 20px",
        margin: "0px auto 165px",
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
            maxWidth: "190px",
            height: "196px",
            padding: "20px",
            position: "relative",
            display: "flex",
            justifyContent: "flex-end",
            flexDirection: "column"
        },
        imgWrapper: {
            width: '171px',
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -100%)"
        },
        img: {
            width: '100%'
        },
        shopContent: {
            color: "rgba(0,0,0,0.75)",
            fontSize: "12px",
            fontWeight: "bold",
            lineHeight: "16px"
        },
        shopPrice: {
            fontSize: "25px",
            lineHeight: "42px"
        },
        shopDownRow: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
        },
        shopButton: {
            backgroundColor: "rgba(123, 97, 97, 0)",
            border: "2px solid #000000",
            fontSize: "10px",
            letterSpacing: "1px",
            padding: "0 10px",
            height: "32px",
            lineHeight: "32px"
        }

    };

    const shoppingItems = [
        {
            img: BreadImg,
            content: 'Starter Bakery Sourdough...',
            price: '$6.99',
            isShow: windowWidth
        },
        {
            img: MilkImg,
            content: 'Straus Family Creamery Organic...',
            price: '$4.97',
            isShow: windowWidth
        },
        {
            img: EggImg,
            content: 'Organic Cage Free Brown Eggs...',
            price: '$5.00',
            isShow: windowWidth > 660
        },
        {
            img: BananaImg,
            content: 'Organic Banana, 1 each',
            price: '$0.35',
            isShow: windowWidth > 875
        }
    ]

    const shopItemBgc = (index) => {
        if (index % 3 === 1) {
            return '#f1c1b8'
        } else if (index % 3 === 2) {
            return '#99ceb1'
        } else {
            return '#ffffff'
        }
    }



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
                {
                    shoppingItems.map((el, index) => {
                        {
                            return (el.isShow ?
                                <div style={{ ...ShoppingStyle.shopItem, backgroundColor: shopItemBgc(index + 1) }} key={index}>
                                    <div style={ShoppingStyle.imgWrapper}>
                                        <img style={ShoppingStyle.img} src={el.img} />
                                    </div>
                                    <p style={ShoppingStyle.shopContent}>{el.content}</p>
                                    <div style={ShoppingStyle.shopDownRow}>
                                        <span style={ShoppingStyle.shopPrice}>{el.price}</span>
                                        <div style={ShoppingStyle.shopButton}>ADD</div>
                                    </div>
                                </div>
                                : null)
                        }

                    })
                }
            </div>
        </div>
    );
};

export default Shopping;
