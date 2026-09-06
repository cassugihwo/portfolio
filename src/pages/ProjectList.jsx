import ButtonBack from '../components/ButtonBack'
import PageLayout from '../components/PageLayout'
import ProjectListCard from '../components/ProjectListCard'
import { projects } from '../data/projects'

export default function ProjectList() {
  const availableProjects = projects.filter((project) => !project.comingSoon)
  const comingSoonProjects = projects.filter((project) => project.comingSoon)

  return (
    <PageLayout>
      <div className="mt-50 lg:mt-75">
        <ButtonBack to="/" />
      </div>

      <header className="mt-50 lg:mt-75">
        <h1 className="font-grotesque text-hero font-medium text-white0">
          MY <span className="block">PROJECTS</span>
        </h1>
        <p className="font-jakarta text-label font-medium text-white0/60">
          Here are some projects I've done!
        </p>
      </header>

      <div className="mt-50 grid grid-cols-1 gap-75 sm:grid-cols-2 lg:mt-75 lg:gap-100">
        {availableProjects.map((project) => (
          <ProjectListCard
            key={project.slug}
            to={`/projects/${project.slug}`}
            title={project.title}
            tags={project.tags}
            image={project.cardInfo.cardImgSrc}
            imageAlt={project.cardInfo.cardImgAlt}
          />
        ))}
      </div>

      <header className="mt-56 lg:mt-64">
        <h2 className="font-grotesque text-hero font-medium text-white0/70">
          COMING SOON...
        </h2>
        <p className="font-jakarta text-label font-medium text-white0/50">
          Come back later to see what I did with these projects!
        </p>
      </header>

      <div className="opacity-75 mt-50 grid grid-cols-1 gap-75 sm:grid-cols-2 lg:mt-75 lg:gap-100">
        {comingSoonProjects.map((project) => (
          <ProjectListCard
            key={project.slug}
            title={project.title}
            tags={project.tags}
            image={project.cardInfo.cardImgSrc}
            imageAlt={project.cardInfo.cardImgAlt}
            disabled
          />
        ))}
      </div>
    </PageLayout>
  );
}
