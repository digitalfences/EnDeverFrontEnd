import React from "react";
import { storiesOf } from "@storybook/react";
import Messenger from "./Messenger";

storiesOf("Messenger", module)
    .add("Default", () => <Messenger></Messenger>)