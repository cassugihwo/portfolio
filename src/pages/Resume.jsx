import { lazy, Suspense } from 'react'
import ButtonBack from '../components/ButtonBack'
import HyperlinkWithIcon from '../components/HyperlinkWithIcon'
import PageLayout from '../components/PageLayout'
import resumeFile from '../files/resume/Cas_Sugihwo_Resume.pdf'

const ResumePreview = lazy(() => import('../components/ResumePreview'))

const GDRIVE_HREF =
  "https://drive.google.com/file/d/1f40KqQ7rqyxqYKIchbS278R_fkeiYR1h/view?usp=sharing";

export default function Resume() {
  return (
    <PageLayout>
      <div className="mt-50 lg:mt-75">
        <ButtonBack to="/" />
      </div>

      <header className="mt-50 lg:mt-75">
        <h1 className="font-grotesque text-hero font-medium text-white0">
          RESUME
        </h1>
        <p className="font-jakarta text-label font-medium text-white0/60">
          Feel free to download a pdf of my resume!
        </p>
      </header>

      <div className="flex justify-center">
        <div className="mt-50 flex flex-col gap-20 lg:mt-75">
          <div className="flex flex-col items-start gap-25 max-w-5xl sm:flex-row sm:items-center sm:justify-between">
            <HyperlinkWithIcon
              icon="download"
              href={resumeFile}
              download="Cas_Sugihwo_Resume.pdf"
              tooltip_on
              tooltipText="DOWNLOAD PDF FILE?"
            >
              Download
            </HyperlinkWithIcon>
            <HyperlinkWithIcon
              icon="file"
              href={GDRIVE_HREF}
              external
              tooltip_on
              tooltipText="TO GDRIVE"
            >
              Link to File (Google Drive)
            </HyperlinkWithIcon>
          </div>
          <Suspense
            fallback={
              <div className="aspect-[1834/2373] max-w-5xl animate-pulse bg-[#d4d4d4]" />
            }
          >
            <ResumePreview />
          </Suspense>
        </div>
      </div>
    </PageLayout>
  );
}
