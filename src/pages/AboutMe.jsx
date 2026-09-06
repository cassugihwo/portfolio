import ButtonBack from '../components/ButtonBack'
import PageLayout from '../components/PageLayout'

// TODO: replace with real bio and photos.
const PLACEHOLDER_BIO =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent aliquam ligula non est tincidunt, ut vulputate magna pellentesque. Nullam nec quam cursus ligula fermentum faucibus. Nulla et nibh nec metus fermentum varius eget nec orci. Nunc sit amet pellentesque neque. Sed ipsum mauris, molestie id rhoncus id, condimentum quis mi. Aliquam accumsan eros purus, a vestibulum nisl condimentum id. Integer cursus imperdiet risus.'

export default function AboutMe() {
  return (
    <PageLayout>
      <div className="mt-50 lg:mt-75">
        <ButtonBack to="/" />
      </div>

      <div className="mt-50 grid grid-cols-1 gap-50 lg:mt-75 lg:grid-cols-2 lg:gap-75">
        <div className="flex min-w-0 flex-col gap-50">
          <h1 className="font-grotesque text-hero font-medium text-white0">
            Who am I?
          </h1>

          <div className="flex flex-col gap-25">
            <p className="font-jakarta text-sm font-medium tracking-wide text-white0 uppercase opacity-60">
              About Cas Sugihwo
            </p>
            <p className="font-jakarta text-body text-white0/80">
              Hi! I'm Cas! I'm a Simon Fraser University student, majoring in
              Interactive Arts & Technology (Bsc) and minoring in Computing
              Science.
            </p>
            <p className="font-jakarta text-body text-white0/80">
              My philosophy is that designing digital products should always be
              user-centered. In a world where technology is constantly evolving,
              user needs are transforming alongside them too. To travserse this
              world, design and tech fluency are powerful assets.
            </p>
            <p className="font-jakarta text-body text-white0/80">
              When I'm not knee-deep in a design project, I'm spending my time drinking coffee, reading<p className="font-jakarta text-body text-white0/80">
              My philosophy is that designing digital products should always be user-centered. In a world where technology is constantly evolving, user needs are transforming alongside them too. To travserse this world, design and tech fluency are powerful assets.
            </p> manga, or grinding out my current favourite games :)
            </p>
          </div>
        </div>

        {/* <div className="flex flex-col gap-25">
          <div className="aspect-[1112/1008] w-full rounded-img bg-[#d4d4d4]" />
          <div className="aspect-[1112/1008] w-full rounded-img bg-[#d4d4d4]" />
        </div> */}
      </div>
    </PageLayout>
  );
}
