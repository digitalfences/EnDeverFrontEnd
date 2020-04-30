import React from "react";
import { storiesOf } from "@storybook/react";
import SingleMessage from "./SingleMessage";

storiesOf("SingleMessage", module)
    .add("Default", () => <SingleMessage></SingleMessage>)