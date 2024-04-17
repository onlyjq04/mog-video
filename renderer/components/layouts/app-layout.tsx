'use client'

import { FC, PropsWithChildren, useEffect } from 'react'
import { Nav } from '../nav'
import { TooltipProvider } from '@radix-ui/react-tooltip'
import { Button } from '../ui/button'
import { Menu } from 'lucide-react'
import TopNav from '../top-nav'
import { usePathname } from 'next/navigation'
import { ThemeProvider } from 'next-themes'
import { useSelector, useDispatch } from '@/store'

const AppLayout: FC<PropsWithChildren> = ({ children }) => {
    const pathname = usePathname()

    const { navlinks, sidebarCollapsed, currentRoute } =
        useSelector<'navigation'>('navigation')
    const dispatch = useDispatch<'navigation'>('navigation')

    useEffect(() => {
        const link = navlinks.find((l) => l.path === pathname || null)
        dispatch({ type: 'setCurrentRoute', payload: link })
    }, [pathname, navlinks])

    return (
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
        >
            <TooltipProvider>
                <div className="flex gap-4">
                    <div className="max-w-96 h-screen border-r border-muted shadow-inner">
                        <Button
                            onClick={() =>
                                dispatch({ type: 'toggleSidebarCollapse' })
                            }
                            variant="ghost"
                        >
                            <Menu></Menu>{' '}
                            {!sidebarCollapsed && (
                                <span className="mx-2">Menu</span>
                            )}
                        </Button>
                        <Nav isCollapsed={sidebarCollapsed} links={navlinks} />
                    </div>
                    <div className="flex-1 flex flex-col">
                        <TopNav title={currentRoute?.title ?? ''} />
                        <section className="flex-1 p-2">{children}</section>
                    </div>
                </div>
            </TooltipProvider>
        </ThemeProvider>
    )
}

export default AppLayout
