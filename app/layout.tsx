// replaces pages/_app.tsx and pages/_document.tsx in nextjs 12
import '../styles/globals.css';
// import NavHeader from '../components/Layout/NavHeader';
// import BlurryBg from '../components/Layout/BlurryBg';
import { NavHeader, BlurryBg } from '../components/Layout';

export const metadata = {
  title: 'Kestino',
  description: "Kestino's Personal Website",
}

export default function RootLayout({children,}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body>
        <NavHeader />
        <BlurryBg>
          {children}
        </BlurryBg>
      </body>
    </html>
  )
}
