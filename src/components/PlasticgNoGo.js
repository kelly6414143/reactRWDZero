import React from "react";
import pigLeaf from '../assests/images/asset 8.png';
import smallLeaf from '../assests/images/asset 9.svg';
import buyBag from '../assests/images/asset 10.png';

import bottle from '../assests/images/asset 14.png';
import pinkPic from '../assests/images/asset 12.png';
import whiteLeaf from '../assests/images/asset 13.svg';

const PlasticgNoGo = ({ styles, windowWidth }) => {
    const PlasticgNoGoStyle = {
        maxWidth: '1320px',
        position: 'relative',
        display: "flex",
        margin: "0px auto",
        alignItems: styles.plasticgNoGoChangeDirection ? 'center' : 'center',
        flexDirection: styles.plasticgNoGoChangeDirection ? 'column' : 'row',
        paddingTop: styles.plasticgNoGoChangeDirection ? "333.5px" : "0PX",
        topWrapper: {
            justifyContent: "flex-end",
            margin: "0 auto 80px",
            minHeight: styles.plasticgNoGoChangeDirection ? "0px" : "602px",
        },
        bottomWrapper: {
            justifyContent: "flex-start",
            marginBottom: "140px",
            minHeight: styles.plasticgNoGoChangeDirection ? "0px" : "678px",
        },
        imgWrapper: {
            position: "absolute",
            top: 0,
            transformOrigin: "top"
        },
        topImgWrapper: {
            width: "602px",
            height: "607px",
            left: styles.plasticgNoGoChangeDirection ? "50%" : "-40px",
            transform: styles.plasticgNoGoChangeDirection ? 'translate(-50%, 0) scale(0.5)' : '',
        },
        bottomImgWrapper: {
            left: "initial",
            width: "767px",
            height: "679px",
            right: styles.plasticgNoGoChangeDirection ? "50%" : "0px",
            transform: styles.plasticgNoGoChangeDirection ? 'translate(50%, 0) scale(0.5)' : '',
        },
        img: {
            position: "absolute",
            width: '100%'
        },
        buyBagImg: {
            zIndex: 2,
            width: '608px',
            padding: "50px",
            top: "-36px",
            left: "-6px"
        },
        pigLeaf: {
            zIndex: 0,
            top: 0,
            left: 0,
            width: "602px"
        },
        smallLeaf: {
            zIndex: 1,
            width: "238px",
            bottom: 0,
            left: "32px"
        },
        bottleImg: {
            zIndex: 2,
            width: '614px',
            top: "181px",
            left: "0px",
        },
        pinkPic: {
            zIndex: 0,
            top: "64px",
            right: 0,
            width: "602px"
        },
        whiteLeaf: {
            zIndex: 1,
            width: "362",
            top: 0,
            right: "57px"
        },
        contentWrapper: {
            position: "relative",
            zIndex: 3,
            display: "flex",
            flexDirection: "column",
            maxWidth: "640px",
            justifyContent: "center"
        },
        title: {
            fontFamily: "Bodoni_72",
            fontSize: windowWidth < 780 ? "42px" : "170px",
            fontWeight: 700,
            lineHeight: windowWidth < 780 ? "52px" : "130px",
            marginBottom: windowWidth < 780 ? "20px" : "40px"
        },
        content: {
            color: "rgba(0,0,0,0.75)",
            fontFamily: "'Adrianna', sans-serif",
            fontSize: "16px",
            fontWeight: 600,
            lineHeight: "26px",
            opacity: .7
        }

    };







    return (
        <>
            <div style={{ ...PlasticgNoGoStyle, ...PlasticgNoGoStyle.topWrapper }} class="PlasticgNoGoStyle">
                <div style={{ ...PlasticgNoGoStyle.imgWrapper, ...PlasticgNoGoStyle.topImgWrapper }}>
                    <img style={{ ...PlasticgNoGoStyle.img, ...PlasticgNoGoStyle.buyBagImg }} src={buyBag} />
                    <img style={{ ...PlasticgNoGoStyle.img, ...PlasticgNoGoStyle.pigLeaf }} src={pigLeaf} />
                    <img style={{ ...PlasticgNoGoStyle.img, ...PlasticgNoGoStyle.smallLeaf }} src={smallLeaf} />
                </div>
                <div style={PlasticgNoGoStyle.contentWrapper}>
                    <p style={PlasticgNoGoStyle.title}>Plastic is a no-go</p>
                    <span style={PlasticgNoGoStyle.content}>We are on a mission to remove single-use plastics from the food system. You'll receive groceries in reusable containers, so go ahead, throw out your trashcan.</span>
                </div>
            </div>

            <div style={{ ...PlasticgNoGoStyle, ...PlasticgNoGoStyle.bottomWrapper }} class="PlasticgNoGoStyle">
                <div style={PlasticgNoGoStyle.contentWrapper}>
                    <p style={PlasticgNoGoStyle.title}>Jars & chill</p>
                    <span style={{ ...PlasticgNoGoStyle.content, width: "80%" }}>Think of us as the new-and-improved milkman. When you're done with your jars, we'll swing by and pick them up on your next order.</span>
                </div>
                <div style={{ ...PlasticgNoGoStyle.imgWrapper, ...PlasticgNoGoStyle.bottomImgWrapper }}>
                    <img style={{ ...PlasticgNoGoStyle.img, ...PlasticgNoGoStyle.bottleImg }} src={bottle} />
                    <img style={{ ...PlasticgNoGoStyle.img, ...PlasticgNoGoStyle.pinkPic }} src={pinkPic} />
                    <img style={{ ...PlasticgNoGoStyle.img, ...PlasticgNoGoStyle.whiteLeaf }} src={whiteLeaf} />
                </div>
            </div>

        </>
    );
};

export default PlasticgNoGo;
