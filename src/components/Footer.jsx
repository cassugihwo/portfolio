import logo from '../assets/icons/logo.svg'
import HyperlinkWithIcon from './HyperlinkWithIcon'

export default function Footer() {
  return (
    <footer className="w-full flex flex-col gap-9 mt-72 md:mt-80 lg:mt-96 border-t border-white0">
      <div className="flex w-full flex-col flex-wrap items-start mt-9 gap-9 lg:flex-row lg:items-center lg:justify-between">
        <img
          src={logo}
          alt="Cas Sugihwo"
          className="h-[28px] w-auto md:h-[36px] lg:h-[46px]"
        />
        <div className="flex flex-col flex-wrap items-start gap-4 lg:flex-row lg:items-center lg:gap-75 xl:gap-150">
          <HyperlinkWithIcon
            icon="mail"
            href="mailto:cas.sugihwo@gmail.com"
            tooltip_on
            tooltipText="COPY EMAIL?"
            tooltipTextOnClick="EMAIL COPIED"
            onClick={(event) => {
              event.preventDefault();
              navigator.clipboard.writeText("cas.sugihwo@gmail.com");
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
      <div className="flex justify-between mb-9">
        <p className=" font-jakarta text-sm text-white0/60 ">
          © 2026 - Cas Sugihwo
        </p>
        <p className=" font-jakarta text-sm text-white0/60 ">
          built with React and Tailwind CSS
        </p>
      </div>
    </footer>
  );
}