export const metadata = {
  title: "InovaTech",
  description:
    "Explore uma variedade de serviços inovadores projetados para impulsionar seu negócio para o próximo nível",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
