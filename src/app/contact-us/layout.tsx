import type { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Contact Us',
    description: 'Contact study Monks For Better Result',
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