import React from "react";
import { render } from "react-dom";
import { TextInput, Code, NavBar, Img } from "./lib";
import styled from "styled-components";

import logo from "./towhen_small.png";

const LogoHolder = styled.div`
  text-align: center;
`;

const LogoImage = styled(Img)`
  height: 40px;
  margin-bottom: -9px;
`;

const LogoText = styled.h4`
  display: inline-block;
  margin: 0;
  vertical-align: text-bottom;
  padding-left: 5px;
`;

const App = () => (
  <div>
    <NavBar shadow>
      <LogoHolder className=" no-select">
        <LogoImage src={logo} alt="logo" />
        <LogoText>To When</LogoText>
      </LogoHolder>
    </NavBar>
    <div style={{ width: 640, margin: "15px auto" }}>
      <div className="light">
        <h1 className="c-pointer no-select ">Hello World</h1>
        <TextInput label="Email Address" placeholder="name@example.com" />
      </div>
      <Code dataLang="HTML">
        <span class="com">&lt;!-- code snippets --&gt;</span>
        &lt;<span class="tag">button</span> <span class="atn">class</span>=
        <span class="atv">&quot;btn&quot;</span>&gt; Submit &lt;
        <span class="tag">/button</span>&gt;
      </Code>
    </div>
  </div>
);

render(<App />, document.getElementById("root"));
