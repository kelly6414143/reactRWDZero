import React from "react";

const ReadBar = ({ styles }) => {
    const readBarStyle = {
        width: "100%",
        backgroundColor: "#f1c1b8",
        display: "flex",
        justifyContent: "space-between",
        alignItems: 'center',
        flexDirection: styles.readBarChangeDirection ? "column" : "row",
        padding: "7px 30px",
        minHeight: "40px",
        fontWeight: 600,
        fontSize: "16px",
        content: {
            marginRight: 10,
            lineHeight: "26px",
        },
        readMe: {
            textTransform: "uppercase",
            color: "rgba(0,0,0,0.5)",
            fontSize: 12,
            letterSpacing: 2,
            whiteSpace: "nowrap"
        }
    };




    return (
        <div style={readBarStyle} class="readBarStyle">
            <div style={readBarStyle.content}>Here are the COVID-19 precautions we are taking at Zero to make sure you’re safe.</div>
            <div style={readBarStyle.readMe}>read more →</div>
        </div>
    );
};

export default ReadBar;
