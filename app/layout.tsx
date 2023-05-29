import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2133814916385175"
          crossOrigin="anonymous"
        ></script>
      </head>
      <body className="h-full w-full bg-slate-900 text-slate-200">
        {children}
      </body>
    </html>
  );
}
