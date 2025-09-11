import type { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Career',
    description: 'Career in Study Monks',
  }


export default function StoryLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
        <>
          {children}
        </>
    )
}