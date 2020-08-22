import React from "react";

const VideoArea = ({ styles, windowWidth }) => {

//     const coolBoxKeyframes = keyframes`
//     0% {
//       height: 0px;
//       background: green;
//     }
//     100% {
//       height: 200px;
//       background: blue;
//     }
//   `

//     const CoolBox = styled.div`
//     display: inline-block;
//     background: green;
//     width: 100px;
//     position: relative;
//     animation-name: ${coolBoxKeyframes};
//     animation-duration: 2s;
//     animation-timing-function: ease;
//     animation-delay: 0s;
//     animation-iteration-count: 1;
//     animation-direction: normal;
//     animation-fill-mode: forwards;
//     animation-play-state: running;
//   `

    const VideoAreaStyle = {
        display: "flex",
        width: "calc(100% - 40px)",
        padding: "90px 20px",
        margin: "0 auto 230px",
        backgroundColor: "#104d46",
        videoWrapper: {
            width: "100%",
            maxWidth: "540px",
            paddingRight: "20px"
        },
        title: {
            margin: "0 0 90px",
            lineHeight: "102px",
            color: "#ffffff",
            fontFamily: "Bodoni_72",
            letterSpacing: "-2.5px",
            fontSize: "85px",
            fontWeight: "700"
        },
        stepList: {
            display: "flex",
            alignItems: 'center',
        },
        stepCircle: {
            width: "64px",
            height: "64px",
            backgroundColor: "#000000",
            borderRadius: "50%",
            color: "#ffffff",
            fontFamily: "Bodoni_72",
            fontSize: "42px",
            fontWeight: 700,
            marginRight: "40px",
            display: "flex",
            alignItems: 'center',
            justifyContent: 'center'
        },
        stepParagraph: {
            fontFamily: "'Bodoni_72', sans-serif",
            fontSize: "42px",
            fontWeight: 700,
            lineHeight: "56px",
            margin: 0
        }
    };







    return (
        <>
            <div style={VideoAreaStyle} class="VideoAreaStyle">
                <div >
                    <video style={VideoAreaStyle.videoWrapper} autoplay="true" loop="true"><source src="https://storage.googleapis.com/zeroshop-cdn/site/videos/journey.mov" type="video/mp4" /></video>
                </div>
                <div >
                    <h2 style={VideoAreaStyle.title}>Start your journey</h2>
                    <div>
                        <div style={VideoAreaStyle.stepList}>
                            <span style={VideoAreaStyle.stepCircle}>1</span>
                            <p style={VideoAreaStyle.stepParagraph}>Order your groceries online</p>
                        </div>
                        <div>
                            <span></span>
                        </div>
                        <div>
                            <span></span>
                        </div>
                        <div>
                            <span></span>
                        </div>
                    </div>
                    {/* <Box /> */}
                </div>
            </div>

        </>
    );
};

export default VideoArea;
