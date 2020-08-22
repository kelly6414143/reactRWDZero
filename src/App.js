import React, { Component } from "react";
import TopBar from "./components/TopBar";
import ReadBar from "./components/ReadBar";
import FooterMenu from "./components/FooterMenu";
import Content from "./components/Content";
import Sidebar from "./components/Sidebar";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      windowWidth: 0,
      windowHeight: 0,
      scrollY: 0,
      topBarHeight: 0
    };
  }

  componentDidMount() {
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions.bind(this));
    window.addEventListener("scroll", this.onScroll)
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions.bind(this));
    window.removeventListener("scroll", this.onScroll)
  }

  updateDimensions() {
    let windowWidth = typeof window !== "undefined" ? window.innerWidth : 0;
    let windowHeight = typeof window !== "undefined" ? window.innerHeight : 0;

    this.setState({ windowWidth, windowHeight });
  }

  onScroll = () => {
    let scrollY = window.scrollY
    let topBar = document.getElementById("topBar")
    let topBarHeight = topBar.clientHeight
    topBar.style.position = scrollY > 0 ? "fixed" : "static"
    this.setState({ scrollY, topBarHeight });
  }

  render() {
    const { windowWidth, scrollY, topBarHeight } = this.state;

    const styles = {
      white: scrollY > 0 ? `rgba(255, 255, 255, 1)` : `rgba(255, 255, 255, 0)`,
      // black: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
      topBarUpperHeight: windowWidth > 900 ? 50 : 70,
      topBarBlankHeight: scrollY > 0 ? topBarHeight : 0,
      // footerMenuHeight: 50,
      showBarDown: windowWidth > 900,
      imgWH: windowWidth > 900 ? 16 : 20,
      imgWrapperWH: windowWidth > 900 ? 26 : 40,
      readBarChangeDirection: windowWidth < 600,
      shoppingChangeDirection: windowWidth < 1146,
      plasticgNoGoChangeDirection: windowWidth < 1250
    };

    // const menuItems = styles.showSidebar
    //   ? [
    //     { icon: `😀`, text: "Item 1" },
    //     { icon: `😉`, text: "Item 2" },
    //     { icon: `😎`, text: "Item 3" },
    //     { icon: `🤔`, text: "Item 4" },
    //     { icon: `😛`, text: "Item 5" },
    //     { icon: `😺️`, text: "Profile" },
    //     { icon: `⚙`, text: "Settings" }
    //   ]
    //   : [
    //     { icon: `😀`, text: "Item 1" },
    //     { icon: `😉`, text: "Item 2" },
    //     { icon: `😎`, text: "Item 3" },
    //     { icon: `🤔`, text: "Item 4" },
    //     { icon: `😛`, text: "Item 5" }
    //   ];

    return (
      <div
        style={{
          // backgroundColor: styles.black(0.05),
          // minHeight: "120vh",
          position: "relative"
        }}
      >
        {/* {styles.showSidebar ? (
          <Sidebar menuItems={menuItems} styles={styles} />
        ) : ( */}
        <TopBar styles={styles} />
        {/* )} */}
        <div style={{ height: styles.topBarBlankHeight }}></div>
        <ReadBar styles={styles} />

        <Content styles={styles} {...this.state} />

        {/* {!styles.showSidebar && (
          <FooterMenu menuItems={menuItems} styles={styles} />
        )} */}
      </div>
    );
  }
}

export default App;
