import type { Metadata } from "next";
import './scss/style.scss';

export const metadata: Metadata = {
  title: "YES Recuirtment",
  description: "Young Employment Services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
