import React from "react-dom";
import { withStyles } from "@material-ui/core/styles";

import Container from "@material-ui/core/Container";
import CustomizedSlider from "./components/Slider";
import ButtonSizes from "./components/Buttons";
import TextArea from "./components/TextArea";

const ContainerApp = withStyles({
  root: {
    paddingTop: "40px",
  },
})(Container);

const ContainerBlock = withStyles({
  root: {
    paddingTop: "40px",
    display: "flex",
  },
})(Container);

function App() {
  return (
    <ContainerApp>
      <h1>Select:</h1>
      <ButtonSizes />
      <ContainerBlock>
        <CustomizedSlider />
        <TextArea />
      </ContainerBlock>
    </ContainerApp>
  );
}

export default App;
