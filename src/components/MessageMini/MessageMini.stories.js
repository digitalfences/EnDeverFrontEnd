import React from "react";
import { storiesOf } from "@storybook/react";
import MessageMini from "./MessageMini";

storiesOf("MessageMini", module)
    .add("Default", () => <MessageMini></MessageMini>)