export const metadata = {
  title: 'Fintech Dashboard',
  description: 'Modern banking platform',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: 'Arial' }}>
        {children}
      </body>
    </html>
  )
}
