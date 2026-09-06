import { useParams } from 'react-router-dom'
import ButtonBack from '../components/ButtonBack'
import PageLayout from '../components/PageLayout'
import Sidebar from '../components/Sidebar'
import testImgSquare from '../data/proj_Testing/img-square.png'
import testImgHorzLong from "../data/proj_Testing/img-horizontallylong.png";
import testImgVertRectangle from "../data/proj_Testing/img-verticalrectangle.png";
import { projects } from '../data/projects'

const eyebrow = 'font-jakarta text-sm font-medium uppercase tracking-wide text-white0 opacity-60'



function ContentSectionTop(){
  return (
    <div>
      <div className="mb-7">
        <h2 className="font-jakarta text-[2.5rem] font-bold text-white0 leading-none">
          Section Heading
        </h2>
        <p className="font-jakarta text-label font-medium text-white0/60 leading-none">
          Section label
        </p>
      </div>
      <p className="font-jakarta text-body text-white0/90">
        (Section Desc) Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Praesent aliquam ligula non est tincidunt, ut vulputate magna
        pellentesque. Nullam nec quam cursus ligula fermentum faucibus. Nulla et
        nibh nec
      </p>
      <img
        src={testImgHorzLong}
        alt=""
        className="mt-25 w-full h-auto rounded-img object-cover"
      />
    </div>
  );
}   

function ContentBlock({type, imgPath}) {
  switch (type) {
    case "text-header+body":
      return (
        <div>
          <h3 className="font-jakarta text-[2rem] font-semibold text-white0 mb-3">
            Block header
          </h3>
          <p className="font-jakarta text-body text-white0/90">
            (Block body) Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Praesent aliquam ligula non est tincidunt, ut
            vulputate magna pellentesque. Nullam nec quam cursus ligula
            fermentum faucibus. Nulla et nibh nec Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Praesent aliquam ligula non est
            tincidunt, ut vulputate magna pellentesque. Nullam nec quam cursus
            ligula fermentum faucibus. Nulla et nibh nec
          </p>
        </div>
      );
    case "img-full":
      return (
        <img
          src={imgPath}
          alt=""
          className="mt-25 w-full h-auto rounded-img object-cover"
        />
      );
    case "img-col":
      return (
        <img
          src={imgPath}
          alt=""
          className="w-3/4 h-auto rounded-img object-cover"
        />
      );
    default:
      return null;
  }
}

function ContentInnerSection({type}) {
  switch (type) {
    case "1col-text1col":
      return (
        <section className="grid grid-cols-1">
          <ContentBlock type="text-header+body" />
          <ContentBlock type="img-full" imgPath={testImgHorzLong} />
        </section>
      );
    case "1col-text2col":
      return (
        <section className="grid grid-cols-1">
          <div className="grid grid-cols-2 gap-25">
            <ContentBlock type="text-header+body" />
            <ContentBlock type="text-header+body" />
          </div>
          <ContentBlock type="img-full" imgPath={testImgHorzLong} />
        </section>
      );
    case "2col-text+img":
      return (
        <section className="grid grid-cols-2 items-center">
          <div className="flex flex-col gap-16 self-start">
            <ContentBlock type="text-header+body" />
            <ContentBlock type="text-header+body" />
            <ContentBlock type="text-header+body" />
          </div>
          <div className="flex flex-col w-full items-center gap-10">
            <ContentBlock type="img-col" imgPath={testImgSquare} />
            <ContentBlock type="img-col" imgPath={testImgSquare} />
          </div>
        </section>
      );
    default:
      return null;
  }
}





export default function ProjectDetailExample() {

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
              title
            </h1>
            {/* NOTE: This should be an unordered list that is visually identical to how tags are currently displayed (one line, separated by " / ", same font, size, etc.) */}
            <p className="font-jakarta text-sm text-white0 opacity-60">tags</p>
          </div>

          <div className="flex flex-col gap-25">
            <p className={eyebrow}>About</p>
            <p className="font-jakarta text-body text-white0/80">
              desc.about
            </p>
          </div>

          <div className="grid grid-cols-2 gap-25">
            <div className="flex flex-col gap-25">
              <p className={eyebrow}>My Role</p>
              <p className="font-jakarta text-body text-white0/80">
                desc.role
              </p>
            </div>
            <div className="flex flex-col gap-25">
              <p className={eyebrow}>Tools</p>
              <p className="font-jakarta text-body text-white0/80">
                desc.tools
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-25">
          <img
            src={testImgSquare}
            alt=""
            className="aspect-[1112/1008] w-full rounded-img object-cover"
          />
          <img
            src={testImgSquare}
            alt=""
            className="aspect-[1112/1008] w-full rounded-img object-cover"
          />
        </div>
      </div>
      {/* /end PROJECT-TOP */}

      {/* PROJECT-BODY */}
      <div className="mt-75 grid grid-cols-1 gap-50 lg:mt-100 lg:grid-cols-[1fr_4fr] lg:gap-100">
        {/* NOTE: Sidebar links should be active when the page is at the corresponding section. Clicking on links jumps to that section.*/}
        <div className="text-white0">Sidebar here</div>

        <div className="flex min-w-0 flex-col gap-75 lg:gap-100 text-white0">
          {/* Sections */}
          {/* Section 1 */}
          <section id="section1" className="flex flex-col mb-72 gap-72 lg:gap-64">
            <ContentSectionTop />
            <ContentInnerSection type="1col-text1col" />
            <ContentInnerSection type="1col-text2col" />
          </section>
          {/* Section 2 */}
          <section id="section2" className="flex flex-col mb-72 gap-72 lg:gap-64">
            <ContentSectionTop />
            <ContentInnerSection type="1col-text1col" />
            <ContentInnerSection type="2col-text+img" />
          </section>
        </div>
      </div>
      {/* /END PROJECT-BODY */}
    </PageLayout>
  );
}
