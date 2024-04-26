import { FileSelector } from '@/components/file-selector'
import Head from 'next/head'
import { Fragment } from 'react'
import ProjectPreviewContainer from './components/project-preview-container'

export default function ProjectPage() {
    return (
        <Fragment>
            <Head>
                <title>Projects</title>
            </Head>
            <div className="grid grid-cols-4 gap-4 md:grid-cols-3 sm:grid-cols-1">
                <ProjectPreviewContainer>
                    <FileSelector />
                </ProjectPreviewContainer>
            </div>
        </Fragment>
    )
}
