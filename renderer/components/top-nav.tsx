import { FC } from 'react'
import { ModeToggle } from './mode-toggle'

interface TopNavProps {
    title?: string
}

const TopNav: FC<TopNavProps> = ({ title }) => {
    return (
        <nav className="flex items-center p-2">
            {title && (
                <div>
                    <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
                        {title}
                    </h4>
                </div>
            )}
            <div className="flex-1 flex justify-end">
                <ModeToggle />
            </div>
        </nav>
    )
}

export default TopNav
