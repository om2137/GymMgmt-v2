import type { Meta, StoryObj } from '@storybook/react';
 
import { Button } from './Button';


const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Button>;

function ButtonWrapper( args:{ Name:string }){
    return(
        <Button {...args} />
    )
}

export const Default: Story = {
    render: (args) => <ButtonWrapper {...args} />,
    args:{
        Name: 'Story'
    }
}
export const Success: Story = {
    render: (args) => <ButtonWrapper {...args} />,
    args:{
        Name: 'Success',
        btnColor: 'bg-green-500', 
        size: 'px-6 py-3 m-2 font-semibold text-lg', 
    }
}
export const LargePrimary: Story = {
    render: (args) => <ButtonWrapper {...args} />,
    args:{
        Name: 'Large',
        btnColor: 'bg-blue-500', 
        size: 'px-10 py-4 m-3 font-semibold text-lg', 
    }
}






