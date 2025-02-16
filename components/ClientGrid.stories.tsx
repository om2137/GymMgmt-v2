import type { Meta, StoryObj } from "@storybook/react";
import { ClientGrid } from "../components/ClientGrid";

export default {
  title: "Components/ClientGrid",
  component: ClientGrid,
  tags: ["autodocs"],
} as Meta;

const mockClients = [
  {
    id: 1,
    Firstname: "John",
    Lastname: "Doe",
    address: "123 Main St",
    contact: "555-1234",
    dob: new Date("1980-06-15"),
    gender: "Male",
    IsMarried: true,
    admissionDate: "2023-01-15",
    cardNumber: "123456789",
    balance: "500.00",
  },
  {
    id: 2,
    Firstname: "Jane",
    Lastname: "Smith",
    address: "456 Elm St",
    contact: "555-5678",
    dob: new Date("1990-08-22"),
    gender: "Female",
    IsMarried: false,
    admissionDate: "2022-07-20",
    cardNumber: "987654321",
    balance: "250.00",
  },
  {
    id: 3,
    Firstname: "Alice",
    Lastname: "Johnson",
    address: "789 Oak St",
    contact: "555-2468",
    dob: new Date("1985-04-10"),
    gender: "Female",
    IsMarried: true,
    admissionDate: "2021-11-30",
    cardNumber: "456123789",
    balance: "100.00",
  },
  {
    id: 4,
    Firstname: "Bob",
    Lastname: "Brown",
    address: "321 Pine St",
    contact: "555-1357",
    dob: new Date("1975-12-05"),
    gender: "Male",
    IsMarried: false,
    admissionDate: "2020-06-25",
    cardNumber: "789456123",
    balance: "750.00",
  },
];

export const Default: StoryObj<typeof ClientGrid> = {
  args: {
    clients: mockClients,
  },
};
