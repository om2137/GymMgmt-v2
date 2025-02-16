import type { Meta, StoryObj } from "@storybook/react";
import Card from "./Card";
import { useState } from "react";

interface client {
    id: number;
    Firstname: string;
    Lastname: string;
    gender: string;
    address: string;
}

const meta: Meta<typeof Card> = {
  title: "Components/Card",
  component: Card,
  tags: ["autodocs"],
  argTypes: {
    isActive: { control: "boolean" },
  },
};


export default meta;
type Story = StoryObj<typeof Card>;

// Wrapper component to manage state
const CardWrapper = (args: {
    client: client;
    isActive: boolean;
    id: number;
  }) => {
    const [activeCardId, setActiveCardId] = useState<number | null>(null);
    const [visibility, setVisibility] = useState<string>("hidden");
    const [selectedClient, setSelectedClient] = useState<number>(0);
    console.log(activeCardId,visibility,selectedClient)
  return (
    <div className="block justify-center w-64"> {/* Set fixed width */}
      <Card {...args}
      setVisibility={setVisibility}
      setSelectedClient={setSelectedClient}
      setActiveCardId={setActiveCardId} />
    </div>
  );
};

export const Default: Story = {
  render: (args) => <CardWrapper {...args} />,
  args: {
    client: {
      id: 1,
      Firstname: "John",
      Lastname: "Doe",
      gender: "Male",
      address: "123 Main St",
    },
    isActive: false,
    id: 1,
  },
};
