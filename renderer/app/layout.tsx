import type { Metadata } from 'next'
import { Inter as FontSans } from 'next/font/google'
import { cn } from '@/lib/utils'

import '@/styles/globals.css'
import { ThemeProvider } from 'next-themes'
import ReduxProvider from '@/store/redux-provider'
import AppLayout from '@/components/layouts/app-layout'
import { ProvideStore } from '@/store'

const fontSans = FontSans({
    subsets: ['latin'],
    variable: '--font-sans',
})

export const metadata: Metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body
                className={cn(
                    'min-h-screen bg-background font-sans antialiased',
                    fontSans.variable
                )}
            >
                <ProvideStore>
                    <AppLayout>{children}</AppLayout>
                </ProvideStore>
            </body>
        </html>
    )
}
