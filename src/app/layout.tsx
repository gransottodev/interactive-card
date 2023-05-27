import './globals.css'
import { Poppins } from 'next/font/google'
import { CardProvider } from './context/cardContext'

const poppins = Poppins({
  weight: ['200', '300','400', '500', '600'],
  subsets: ['latin']
})

export const metadata = {
  title: 'Interactive Card',
  description: 'Interactive Card with React',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <CardProvider>
          {children}
        </CardProvider>
        </body>
    </html>
  )
}
