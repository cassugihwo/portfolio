import ButtonBig from '../components/ButtonBig'
import PageLayout from '../components/PageLayout'
import ProjectHighlightCard from '../components/ProjectHighlightCard'
import TypingHeadline from '../components/TypingHeadline'
import { projects } from '../data/projects'

const underline = 'underline decoration-from-font [text-underline-position:from-font]'

const SKILLS = {
  SKILLS: ['Interaction Design', 'Visual Design', 'Prototyping', 'Usability Research', 'Web Development', '...etc.'],
  TOOLS: ['Figma', 'Protopie', 'Visual Studio Code', '...etc.'],
  LANGUAGES: [
    'HTML',
    'CSS & SCSS',
    'Javascript',
    'ReactJS',
    'C++',
    'Python',
    'English',
    'Bahasa Indonesia',
    'Design',
    '...etc.',
  ],
}

function SkillColumn({ heading, items }) {
  return (
    <div className="flex flex-col gap-25">
      <p className="font-jakarta text-sm font-medium leading-normal tracking-[-0.3px] text-white0 opacity-60">
        {heading}
      </p>
      <div className="font-jakarta text-sm font-medium tracking-[-0.3px] text-white0">
        {items.map((item) => (
          <p key={item} className="leading-[1.8]">
            {item}
          </p>
        ))}
      </div>
    </div>
  )
}

export default function Landing() {
  return (
    <PageLayout>
      <header className="mt-50 lg:mt-75">
        <h1 className="font-grotesque text-hero font-medium break-words text-white0">
          Hi! I&rsquo;m{" "}
          <span className={`text-purple0 ${underline}`}>Cas Sugihwo</span>, an{" "}
          <span className={underline}>SFU</span>{" "}
          <span className={underline}>student</span> with a strong background in{" "}
          <span className={`font-caslon text-pink0 italic ${underline}`}>
            interaction design
          </span>{" "}
          and{" "}
          <span className="font-code text-blue0">
            [<span className={underline}>programming</span>]
          </span>
          .
        </h1>
      </header>

      <section className="mt-50 lg:mt-300">
        <h2 className="font-grotesque text-heading font-medium text-white0">
          A LITTLE <span className="block">TL;DR</span>
        </h2>

        <div className="mt-25 grid min-w-0 grid-cols-1 gap-50 lg:mt-50 lg:grid-cols-2 lg:gap-0">
          <div className="flex min-w-0 flex-col gap-50 lg:justify-between lg:gap-100 lg:pr-75">
            <TypingHeadline className="font-grotesque text-[2rem] leading-none font-medium break-words text-white0" />
            <ButtonBig to="/about" className="self-start">
              LEARN MORE ABOUT ME
            </ButtonBig>
          </div>
          <div className="flex min-w-0 flex-col gap-50 lg:gap-75">
            <p className="font-jakarta text-body leading-normal font-medium break-words text-white0 opacity-60">
              I'm a Simon Fraser University student, majoring in Interactive
              Arts & Technology (Bsc) and minoring in Computing Science. I am
              driven by the intersection of design and technology. My combined
              skillset brings a rare combination of design sensibility and
              technical fluency, geared towards creating digital systems that
              are both technically sound and deeply human - centered.
            </p>
            <div className="grid grid-cols-1 gap-25 sm:grid-cols-3 lg:gap-50">
              {Object.entries(SKILLS).map(([heading, items]) => (
                <SkillColumn key={heading} heading={heading} items={items} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mt-50 lg:mt-300">
        <h2 className="font-grotesque text-heading font-medium text-white0">
          PROJECT <span className="block">HIGHLIGHTS</span>
        </h2>

        <div className="mt-25 flex flex-col gap-50 lg:mt-50 lg:gap-75">
          {projects
            .filter((project) => project.featured)
            .map((project) => (
              <ProjectHighlightCard
                key={project.slug}
                to={`/projects/${project.slug}`}
                title={project.title}
                tags={project.tags}
                description={project.cardInfo.cardDesc}
                image={project.cardInfo.cardImgSrc}
                imageAlt={project.cardInfo.cardImgAlt}
              />
            ))}
        </div>

        <div className="mt-50 flex justify-center lg:mt-75">
          <ButtonBig to="/projects">SEE ALL PROJECTS</ButtonBig>
        </div>
      </section>
    </PageLayout>
  );
}