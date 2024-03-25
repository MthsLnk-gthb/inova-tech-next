import "bootstrap/dist/css/bootstrap.min.css";

export const metadata = {
  title: "InovaTech",
  description:
    "Explore uma variedade de serviços inovadores projetados para impulsionar seu negócio para o próximo nível",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />
      </head>
      <body>{children}</body>
    </html>
  );
}
