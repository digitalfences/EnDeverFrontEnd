import React from "react";
import { storiesOf } from "@storybook/react";
import DevCard from "./DevCard";

storiesOf("DevCard", module)
    .add("Default", () => <DevCard></DevCard>)