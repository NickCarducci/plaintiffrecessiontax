import React from "react";
import Cable from "./Dropwire";
import { UAParser } from "ua-parser-js";

export default class Basic extends React.Component {
  constructor(props) {
    super(props);
    var parser = new UAParser();
    const name = parser.getBrowser().name;
    console.log(name);
    this.state = {
      onFactors: true,
      trigger: false,
      browser: name,
      scrollTop: 0,
      serviceCancelingImages: name.includes("Safari")
    };
    for (let i = 0; i < 220; i++) {
      this["scrollImg" + i] = React.createRef();
    }
    this.home = React.createRef();
  }
  componentDidMount = () => {
    this.handleScroll();
    window.addEventListener("resize", this.refresh);
    window.addEventListener("scroll", this.handleScroll);
    this.refresh(true);
    const { pathname } = this.props;
    clearTimeout(this.starttime);
    this.starttime = setTimeout(() => {
      this.check(pathname);
    }, 500);
  };
  check = (pathname) => {
    if (pathname === "/") {
      window.scroll(0, this.home.current.offsetTop);
    }
  };
  componentDidUpdate = (prevProps) => {
    const { pathname, basic } = this.props;
    if (
      this.props !== prevProps ||
      basic !== prevProps.basic ||
      pathname !== prevProps.pathname
    ) {
      this.check(pathname);
    }
  };
  componentWillUnmount = () => {
    clearTimeout(this.starttime);
    clearTimeout(this.scrollTimeout);
    clearTimeout(this.resizeTimer);
    window.removeEventListener("resize", this.refresh);
    window.removeEventListener("scroll", this.handleScroll);
  };
  handleScroll = (e) => {
    if (!this.state.offScroll) {
      const scrollTop = window.scrollY;
      this.setState(
        {
          scrolling: true,
          scrollTop
        },
        () => {
          clearTimeout(this.scrollTimeout);
          this.scrollTimeout = setTimeout(() => {
            this.setState({
              scrolling: false
            });
          }, 900);
        }
      );
    } //"abolish exchange value" - CJ
    //social capital estranged from the rollover/expiry individual
    //govrent assert the universal. "'capitaism is small gov ad freedom' so much no"
  }; //authority is unique for payment for the transaction requires it,
  //but for instance a distributed database for a death registry, would not
  //acheive trustlessness by the same methods
  refresh = (first) => {
    const width =
      (this.state.ios ? window.screen.availWidth : window.innerWidth) - 20;
    if (first || Math.abs(this.state.lastWidth - width) > 0) {
      clearTimeout(this.resizeTimer);
      this.resizeTimer = setTimeout(() => {
        this.setState({
          lastWidth: width,
          width,
          availableHeight: this.state.ios
            ? window.screen.availHeight - 20
            : window.innerHeight
        });
      }, 600);
    }
  };
  render() {
    const handleScollImgError = (e) => {
      if (e.message) {
        console.log(e.message);
        this.setState({ serviceCancelingImages: true });
      }
    };
    let arrayOfnumbers = 0;
    const scrollnum = () => {
      arrayOfnumbers = arrayOfnumbers + 1; //arrayOfnumbers[arrayOfnumbers.length - 1] + 1;
      //arrayOfnumbers.push(num);
      //console.log(arrayOfnumbers)
      return arrayOfnumbers;
    };
    const space = " ";
    return (
      <div
        ref={this.home}
        style={{
          border: "1px solid rgb(200,200,200)",
          overflow: "hidden",
          //margin: "5px",
          fontFamily: "'Comfortaa', cursive",

          wordBreak: "break-word",
          textAlign: "left",
          width: "100%",
          maxWidth: "600px",
          position: "relative"
        }}
      >
        <div
          style={{
            position: "fixed", //salt bank vaults royalty stewardship
            right: "0px", //living commodities at the equator
            bottom: "0px",
            cursor: "pointer"
          }}
          onClick={() => this.props.setBasic()}
          //no sale to satan, just read JB Say (no criminal sponsors)
          //was that a foul? defending on top; catch left throw right
        >
          more
        </div>
        <h3>Take the politics out of government</h3>
        there is a maximum rate of people and non-from inflationary changes to
        employment (but we have never seen unemployment's). take guns away from
        people who want others dead.
        <br />
        <br />
        &bull;{space}Are criminal cases for the public or deceased victim?
        <br />
        &bull;{space}How do prostitution, pimping, and divorce courts differ?
      </div>
    );
  }
}
