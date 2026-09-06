import ButtonBack from '../components/ButtonBack'
import HyperlinkWithIcon from '../components/HyperlinkWithIcon'
import PageLayout from '../components/PageLayout'

export default function Contact() {
  return (
    <PageLayout>
      <div className="mt-50 lg:mt-75">
        <ButtonBack to="/" />
      </div>

      <div className="mt-50 flex flex-col gap-50 lg:mt-75">
        <div className="flex flex-col gap-10">
          <h1 className="font-grotesque text-hero font-medium text-white0">Let&rsquo;s get in touch!</h1>
          <p className="font-jakarta text-label font-medium text-white0/60">Looking forward to speaking with you :)</p>
        </div>

        <div className="flex flex-col gap-25">
          <HyperlinkWithIcon
            icon="mail"
            href="mailto:cas.sugihwo@gmail.com"
            tooltip_on
            tooltipText="COPY EMAIL?"
            tooltipTextOnClick="EMAIL COPIED"
            onClick={(event) => {
              event.preventDefault()
              navigator.clipboard.writeText('cas.sugihwo@gmail.com')
            }}
          >
            cas.sugihwo@gmail.com
          </HyperlinkWithIcon>
          <HyperlinkWithIcon
            icon="linkedin"
            href="https://www.linkedin.com/in/cas-sugihwo-819896234/"
            external
            tooltip_on
            tooltipText="TO LINKEDIN"
          >
            Linkedin
          </HyperlinkWithIcon>
        </div>
      </div>
    </PageLayout>
  )
}
