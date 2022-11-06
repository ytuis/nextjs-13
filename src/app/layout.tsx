export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head>Sample App</head>
      <body>{children}</body>
    </html>
  )
}
