import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="h-full w-full bg-slate-900 text-slate-200">{children}</body>
    </html>
  )
}
