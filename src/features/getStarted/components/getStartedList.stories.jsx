import React from "react";
import { text, boolean, withKnobs } from "@storybook/addon-knobs";

import GetStartedList from "./";

export default {
  title: "Components / GetStartedList",
  decorators: [withKnobs],
};

export const Default = () => {
  const lastVisible = boolean("Show last instruction", false);
  return (
    <GetStartedList
      instructions={[
        { id: 1, instruction: text("First instruction text", "instruction 1") },
        { id: 2, instruction: "instruction 2" },
        ...(lastVisible ? [{ id: 3, instruction: "instruction 3" }] : []),
      ]}
    />
  );
};
