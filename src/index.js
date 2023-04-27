import React from "react";
import { render } from "react-dom";
import { QRCode } from "react-qr-svg";

const styles = {
  root: {
    fontFamily: "sans-serif"
  },
  h1: {
    textAlign: "center"
  },
  qrcode: {
    textAlign: "center"
  }
};

export default class App extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <div style={styles.root}>
        <h1 style={styles.h1}>Json to QrCode </h1>
        <h1 style={styles.h1}>(type=qrcode)</h1>
        <div style={styles.qrcode}>
          <QRCode
            level="Q"
            style={{ width: 480 }}
            value={
              `[{
                "_id": "6449ba58cafb18041400838e",
                "index": 0,
                "guid": "a4f0b6a3-5b7e-4b7e-8b1a-3b5b9b2b2b2b",
                "isActive": true,
                "balance": "$2,850.00",
                "picture": "http://placehold.it/32x32",
                "age": 40,
                "eyeColor": "green",
                "name": "Mccarty Mcclure",
                , `
            }
          />
        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
