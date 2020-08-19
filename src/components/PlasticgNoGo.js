import React from "react";
import pigLeaf from '../assests/images/asset 8.png';
import smallLeaf from '../assests/images/asset 9.svg';
import buyBag from '../assests/images/asset 10.png';

const PlasticgNoGo = ({ styles, windowWidth }) => {
    const PlasticgNoGoStyle = {
        maxWidth: '1320px',
        display: "flex",
        margin: "0px auto",
        imgWrapper: {
            position: "relative",
            width: "602px",
            height: "607px",
            left: "-40px"
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
        contentWrapper: {
            display: "flex",
            flexDirection: "column"
        }

    };







    return (
        <div style={PlasticgNoGoStyle} class="PlasticgNoGoStyle">
            <div style={PlasticgNoGoStyle.imgWrapper}>
                <img style={{ ...PlasticgNoGoStyle.img, ...PlasticgNoGoStyle.buyBagImg }} src={buyBag} />
                <img style={{ ...PlasticgNoGoStyle.img, ...PlasticgNoGoStyle.pigLeaf }} src={pigLeaf} />
                <img style={{ ...PlasticgNoGoStyle.img, ...PlasticgNoGoStyle.smallLeaf }} src={smallLeaf} />
            </div>
            <div style={PlasticgNoGoStyle.contentWrapper}>
                <h2 style={PlasticgNoGoStyle.title}>Plastic is a no-go</h2>
                <span style={PlasticgNoGoStyle.content}>We are on a mission to remove single-use plastics from the food system. You'll receive groceries in reusable containers, so go ahead, throw out your trashcan.</span>
            </div>
        </div>
    );
};

export default PlasticgNoGo;
