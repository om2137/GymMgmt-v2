import { Meta, StoryObj } from "@storybook/react";
import { SearchBar } from "./SearchBar";

const ImageLink = `https://res.cloudinary.com/dqpsoptzm/image/upload/v1736962825/V2/default_m9uvjp.png`

const meta: Meta<typeof SearchBar> = {
    title: "Components/SearchBar",
    component: SearchBar,
    tags: ["autodocs"],
  };

export default meta;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function SearchBarWrapper( { args }: any ){
  return <SearchBar {...args} />
}

type Story = StoryObj<typeof SearchBar>;
export const Default: Story = {
  render: (args) => <SearchBarWrapper {...args}/>,
  args: {
    searchDisplay: "block", // Ensuring visibility
    list: [
      { id: 1, name: "Alice", avatar: ImageLink },
      { id: 2, name: "Bob", avatar: ImageLink },
      { id: 3, name: "Charlie" }, // No avatar
    ],
    setId: (value: number) => console.log("Selected ID:", value), // Dummy function for Storybook
  },
}
