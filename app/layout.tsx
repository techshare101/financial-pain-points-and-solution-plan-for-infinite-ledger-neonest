export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body style={{ fontFamily: 'system-ui, sans-serif', backgroundColor: '#000', color: '#fff', margin: 0, padding: 0 }}>
        {children}
      </body>
    </html>
  )
}
