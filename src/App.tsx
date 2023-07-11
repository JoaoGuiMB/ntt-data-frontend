import {
  Avatar,
  FlexBox,
  FlexBoxAlignItems,
  FlexBoxDirection,
  FlexBoxJustifyContent,
  Input,
  InputPropTypes,
  Label,
  Link,
  LinkDesign,
  ShellBar,
} from "@ui5/webcomponents-react";

function App() {
  return (
    <>
      <ShellBar
        logo={<img src="/nttMoviesLogo.png" alt={"Vite Logo"} />}
        primaryTitle="NTTmovies"
      />
    </>
  );
}

export default App;
