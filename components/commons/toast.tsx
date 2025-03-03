"use client"

import { toast } from "sonner"

import { Button } from "@/components/Buttons/Button"

export function SonnerDemo() {
  return (
    <Button
    //   variant="outline"
        Name="Toast"
      onClick={() =>
        toast("Event has been created", {
          description: "Sunday, December 03, 2023 at 9:00 AM",
          action: {
            label: "Undo",
            onClick: () => console.log("Undo"),
          },
        })
      }
    />
  )
}
