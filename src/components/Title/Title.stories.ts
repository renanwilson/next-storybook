import { Meta, StoryObj } from "@storybook/react";
import Title from ".";

const meta: Meta<typeof Title> = {
  title: "Components/Titulo",
  component: Title,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    color: { control: "color" },
    text: { control: "text" },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    color: "#000000",
    text: "Aquele texto de teste",
  },
};
