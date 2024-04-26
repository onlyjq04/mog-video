import { PropsWithChildren } from 'react'

interface ProjectPreviewContainerProps extends PropsWithChildren {}

export default function ProjectPreviewContainer({
    children,
}: ProjectPreviewContainerProps) {
    return <div className="container h-24 w-32 border rounded border-secondary">{children}</div>
}
