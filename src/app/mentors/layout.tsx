import type { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Mentors',
    description: 'Mentors',
  }


export default function PrimaryLayout({
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