import { useParams } from 'react-router-dom'
import ButtonBack from '../components/ButtonBack'
import ContentInnerSection from '../components/ContentInnerSection'
import ContentSectionTop from '../components/ContentSectionTop'
import PageLayout from '../components/PageLayout'
import Sidebar from '../components/Sidebar'
import TagList from '../components/TagList'
import { projects } from '../data/projects'

const eyebrow = 'font-jakarta text-sm font-medium uppercase tracking-wide text-white0 opacity-60'

export default function ProjectDetail() {
  const { slug } = useParams()
  const project = projects.find((p) => p.slug === slug)

  if (!project) {
    return (
      <PageLayout>
        <div className="mt-75 flex flex-col items-center gap-50 text-center">
          <p className="font-jakarta text-body text-white0">Project not found.</p>
          <ButtonBack to="/projects" />
        </div>
      </PageLayout>
    )
  }

  const heroImages = project.img.length > 0 ? project.img : [null, null]

  return (
    <PageLayout>
      <div className="mt-50 lg:mt-75">
        <ButtonBack to="/projects" />
      </div>

      {/* PROJECT-TOP */}
      <div className="mt-50 grid grid-cols-1 gap-50 lg:mt-75 lg:grid-cols-2 lg:gap-75">
        <div className="flex min-w-0 flex-col gap-50">
          <div className="flex flex-col gap-25">
            <h1 className="font-grotesque text-heading font-medium break-words text-white0">
              {project.title}
            </h1>
            <TagList
              tags={project.tags}
              className="font-jakarta text-sm text-white0 opacity-60"
            />
          </div>

          <div className="flex flex-col gap-25">
            <p className={eyebrow}>About</p>
            <p className="font-jakarta text-body text-white0/80">
              {project.desc.about}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-25">
            <div className="flex flex-col gap-25">
              <p className={eyebrow}>My Role</p>
              <p className="font-jakarta text-body text-white0/80">
                {project.desc.role.join(" & ")}
              </p>
            </div>
            <div className="flex flex-col gap-25">
              <p className={eyebrow}>Tools</p>
              <p className="font-jakarta text-body text-white0/80">
                {project.desc.tools.join(", ")}
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-25">
          {heroImages.map((image, i) =>
            image?.src ? (
              <img
                key={i}
                src={image.src}
                alt={image.alt ?? ""}
                className="aspect-[1112/1008] w-full rounded-img object-cover"
              />
            ) : (
              <div
                key={i}
                className="aspect-[1112/1008] w-full rounded-img bg-[#d4d4d4]"
              />
            ),
          )}
        </div>
      </div>
      {/* /end PROJECT-TOP */}

      {/* PROJECT-BODY */}
      <div className="mt-96 grid grid-cols-1 gap-50 lg:mt-96 lg:grid-cols-[1fr_4fr] lg:gap-100">
        <Sidebar
          items={project.sections.map((section) => ({
            id: section.id,
            label: section.sidebarText,
          }))}
          className="hidden lg:flex lg:sticky lg:top-1/2 lg:-translate-y-1/2 lg:self-start"
        />

        <div className="flex min-w-0 flex-col gap-75 lg:gap-100">
          {project.sections.map((section) => (
            <section
              key={section.id}
              id={section.id}
              className="flex flex-col mb-72 scroll-mt-100 gap-72 lg:gap-64 "
            >
              <ContentSectionTop
                header={section.header}
                label={section.label}
                sectionDesc={section.sectionDesc}
                img={section.img}
              />
              {section.innerSections.map((innerSection, i) => (
                <ContentInnerSection
                  key={i}
                  type={innerSection.type}
                  blocks={innerSection.blocks}
                />
              ))}
            </section>
          ))}
        </div>
      </div>
      {/* /END PROJECT-BODY */}
    </PageLayout>
  );
}
