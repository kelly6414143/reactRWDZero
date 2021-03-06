import React from "react";
import Shopping from './Shopping';
import PlasticgNoGo from './PlasticgNoGo';
import VideoArea from './VideoArea'

const Content = ({ styles, windowWidth }) => {
  const { showSidebar } = styles;
  // const dummyPost = {
  //   title: `Here's a blog post title`,
  //   summary:
  //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  // };

  // const posts = Array(20).fill(dummyPost);

  const contentStyle = {
    overflow: "hidden"
    // paddingTop: showSidebar ? 20 : styles.topBarHeight + 20,
    // paddingRight: 20,
    // paddingBottom: showSidebar ? 20 : styles.footerMenuHeight + 20,
    // paddingLeft: showSidebar ? styles.sidebarWidth + 20 : 20
  };

  return (
    <div style={contentStyle}>
      <Shopping styles={styles} windowWidth={windowWidth} />
      <PlasticgNoGo styles={styles} windowWidth={windowWidth} />
      <VideoArea style={styles}/>
    </div>
  );
};

export default Content;
