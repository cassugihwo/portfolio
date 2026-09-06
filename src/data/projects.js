// TODO: replace placeholder description/image/section content with real project write-ups.
const PLACEHOLDER_DESCRIPTION =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent aliquam ligula non est tincidunt, ut vulputate magna pellentesque. Nullam nec quam cursus ligula fermentum faucibus. Nulla et nibh nec'



// Every image under a project's own src/data/<path>/ folder, keyed by
// "./<path>/<fileName>" so a project's raw data can reference an image by
// filename alone (see `path` and `img`/`imgPath` fields below).
const projectImages = import.meta.glob('./*/*.{png,jpg,jpeg,webp,gif,svg}', {
  eager: true,
  import: 'default',
})

function resolveImage(projectPath, fileName) {
  if (!projectPath || !fileName) return null
  return projectImages[`./${projectPath}/${fileName}`] ?? null
}

function resolveImageList(projectPath, images = []) {
  return images.map((image) => ({ ...image, src: resolveImage(projectPath, image.path) }))
}

// Expands a raw project entry (filename-based image references) into the
// shape consumed by the pages/components (resolved, importable image URLs).
function resolveProject(project) {
  return {
    ...project,
    img: resolveImageList(project.path, project.img),
    cardInfo: {
      ...project.cardInfo,
      cardImgSrc: resolveImage(project.path, project.cardInfo?.cardImgPath),
    },
    sections: (project.sections ?? []).map((section) => ({
      ...section,
      img: resolveImageList(project.path, section.img),
      innerSections: (section.innerSections ?? []).map((innerSection) => ({
        ...innerSection,
        blocks: innerSection.blocks.map((block) =>
          block.type === 'img'
            ? { ...block, src: resolveImage(project.path, block.imgPath) }
            : block,
        ),
      })),
    })),
  }
}




const PLACEHOLDER_SECTIONS = [
  {
    id: 'overview',
    sidebarText: 'Overview',
    header: 'Overview',
    sectionDesc: PLACEHOLDER_DESCRIPTION,
    img: [],
    innerSections: [],
  },
  {
    id: 'problem',
    sidebarText: 'Problem',
    header: 'The Problem',
    sectionDesc: PLACEHOLDER_DESCRIPTION,
    img: [],
    innerSections: [],
  },
  {
    id: 'process',
    sidebarText: 'Process',
    header: 'Design Process',
    sectionDesc: PLACEHOLDER_DESCRIPTION,
    img: [],
    innerSections: [],
  },
  {
    id: 'outcome',
    sidebarText: 'Outcome',
    header: 'Outcome',
    sectionDesc: PLACEHOLDER_DESCRIPTION,
    img: [],
    innerSections: [],
  },
]


/* 
INNER SECTION TYPES:
1col-text1col
  1 column, text 1 column
1col-text2col
  1 column, text 2 columns
2col-text+img
  2 columns, text block(s) then images
*/
const rawProjects = [
  /* REQUEST DASHBOARD */
  {
    path: "proj_requestdashboard",
    slug: "request-dashboard",
    title: "Request Dashboard",
    /* comingSoon: true, */
    featured: true,
    tags: [
      "UI Design",
      "UX Design",
      "Prototyping",
      "Frontend Web Dev",
      "Ethnographic Research",
      "Case Study",
    ],
    desc: {
      about:
        "The Request Dashboard is a shared system that helps escape room staff prioritize and delegate tasks with less mental overhead. It's the result of a 3-month, semester-long project I completed with 3 teammates for an interaction design course, working directly with a local escape room business. As a core team member, I led the visual and UI design and organized our co-design workshops with staff — culminating in a clear, shared system for reducing cognitive load and improving task coordination.",
      role: ["UI Designer", "UX Designer"],
      tools: ["Figma"],
    },
    img: [
      {
        path: "project_request-dashboard_mock-01_thumbnail.png",
        alt: "Mockup of the Request Dashboard prototype",
      },
    ],
    cardInfo: {
      cardImgPath: "project_request-dashboard_mock-01_thumbnail.png",
      cardImgAlt: "Mockup of the Request Dashboard prototype",
      cardDesc: `A 3-month long case study, working in a team of 4 to design a solution for a local business. 
      The project culminated in a prototype mobile application, a clear, shared system for reducing cognitive load and improving task coordination.`,
    },
    sections: [
      /* BACKGROUND */
      {
        id: "background",
        sidebarText: "Background",

        header: "Background",
        label: "A 3 month long case study",
        sectionDesc:
          "This project began as a case study for our interaction design course. We reached out to a local business, and they generously agreed to let us use their real operations as the basis for a design solution.",
        img: [
          {
            path: "long-hero0.png",
            alt: "Mockups of the Request Dashboard Prototype",
          },
        ],

        innerSections: [
          {
            type: "2col-text+img",
            blocks: [
              {
                type: "text",
                header: "About the Business",
                body: "Our partner was a local escape room business running multiple themed rooms, with customer groups ranging from 2 to 8 people. Staff who run each session are called Gamemasters — and it was their experience we'd ultimately focus on. Out of respect for the business's privacy, their names and personal information will not be shared.",
              },
              {
                type: "text",
                header: "My Role",
                body: "I was one of four core team members. My main responsibilities were leading visual design and UI design for the final prototype. I also planned, organized, and led the workshops involving escape room staff, including our key co-design session.",
              },
              {
                type: "text",
                header: "Process",
                body: `The project ran about three months. We began with ethnographic research and user empathy methods to extract insights and design opportunities.
                From there, we moved into co-design, working directly with the business's staff — including a participatory workshop I planned, organized, and led. Each week, we produced a new artifact (reports, journey maps, personas, presentations) and presented our progress to the class, before arriving at our final solution and prototype.`,
              },
              {
                type: "img",
                imgPath: "annotated-stuff-picture.png",
                imgAlt: "A collection of notes",
              },
              {
                type: "img",
                imgPath: "classroom-critique-picture.png",
                imgAlt: "A collection of whiteboard critique",
              },
            ],
          },
        ],
      },
      /* ETHNOGRAPHY */
      {
        id: "ethnographic-research",
        sidebarText: "Ethnographic Research",

        header: "Ethnographic Research",
        label: "Ethnography as the basis of our project",
        sectionDesc:
          "We wanted to understand the business inside and out, from both the customer and staff perspective. To do that, we began our project with an ethnographic approach, where we immersed ourselves in the environment and daily routine.",
        img: [
          {
            path: "klmau.png",
            alt: "gharussih",
          },
        ],

        innerSections: [
          {
            type: "2col-text+img",
            blocks: [
              {
                type: "text",
                header: "Immersing Ourselves",
                body: "We made multiple site visits, accompanying Gamemasters through their day-to-day tasks. We took notes, recorded video, and captured voice recordings to document what we observed firsthand.",
              },
              {
                type: "text",
                header: "Collecting Initial Insights",
                body: "We interviewed both staff and owners to understand their perspectives, and ran surveys with a limited number of customers to round out the picture.",
              },
              {
                type: "img",
                imgPath: "ethnography-research-poster.png",
                imgAlt:
                  "A poster summarizing our initial ethnographic findings.",
              },
            ],
          },
          {
            type: "1col-text1col",
            blocks: [
              {
                type: "text",
                header: "Our First Design Focus",
                body: "Based on our research, we decided to focus our attention on the Gamemasters rather than the customers. This became our first design focus statement:",
              },
              {
                type: "text-hero",
                body: `"We want to focus our attention on the p--staff--p. They find themselves overwhelmed, especially on busy days, so opportunities may arise in --optimizing their workflow-- so that they operate smoothly."`,
              },
            ],
          },
        ],
      },
      /* USER EMPATHY */
      {
        id: "user-empathy",
        sidebarText: "User Empathy",

        header: "User Empathy",
        label: "Understanding who we were designing for",
        sectionDesc:
          "With a general direction set, we turned to user empathy tools to build a deeper understanding of who we were designing for. I took the lead on producing and designing these tools.",
        img: [
          {
            path: "",
            alt: "",
          },
        ],

        innerSections: [
          {
            type: "2col-text+img",
            blocks: [
              {
                type: "text",
                header: "User Personas",
                body: "We created user personas to pinpoint the Gamemasters' goals, motivations, and pain points.",
              },
              {
                type: "text",
                header: "User Journey Maps",
                body: "To map out the full staff workflow, we built user journey maps tracing their tasks from start to finish.",
              },
              {
                type: "text",
                header: "Our Mistake...",
                body: "Despite committing to focus on the Gamemasters, we let the customer's perspective take up too much space in our research. It cost us time and energy, and blurred the focus we'd worked to establish.",
              },
              {
                type: "img",
                imgPath: "persona-thumbnails.png",
                imgAlt: "Collection of personas",
              },
              {
                type: "img",
                imgPath: "userjourneymap-thumbnails.png",
                imgAlt: "Collection of two user journey maps",
              },
            ],
          },
        ],
      },
      /* ITERATIVE DESIGN JOURNEY */
      {
        id: "iterative-design-journey",
        sidebarText: "Iterative Design Journey",

        header: "The Iterative Design Journey",
        label: "Trials and Tribulations...",
        sectionDesc:
          "Our initial research gave us a foundation to work with, so we began developing design solutions for our first design focus.",
        img: [
          {
            path: "",
            alt: "",
          },
        ],

        innerSections: [
          {
            type: "1col-text1col",
            blocks: [
              {
                type: "text",
                header: "First Solutions",
                body: "We explored several solution proposals and narrowed them down to three that felt most feasible.",
              },
            ],
          },
          /* ADD THREE CONCEPTS HERE */
          {
            type: "1col-slideshow-text1col",
            blocks: [
              {
                type: "text",
                header: "Iterating",
                body: "We presented these three solutions to the owners and staff for feedback, and gathered further critique from our professors and classmates.",
              },
              {
                type: "img",
                imgPath: "3concepts-slide1.png",
                imgAlt:
                  "Slide 1 of Slideshow: Critical Analysis on 3 initial concepts",
              },
              {
                type: "img",
                imgPath: "3concepts-slide2.png",
                imgAlt:
                  "Slide 2 of Slideshow: Critical Analysis on 3 initial concepts",
              },
              {
                type: "img",
                imgPath: "3concepts-slide3.png",
                imgAlt:
                  "Slide 3 of Slideshow: Critical Analysis on 3 initial concepts",
              },
              {
                type: "img",
                imgPath: "3concepts-slide4.png",
                imgAlt:
                  "Slide 4 of Slideshow: Critical Analysis on 3 initial concepts",
              },
              {
                type: "img",
                imgPath: "3concepts-slide5.png",
                imgAlt:
                  "Slide 5 of Slideshow: Critical Analysis on 3 initial concepts",
              },
            ],
          },
          {
            type: "1col-text1col",
            blocks: [
              {
                type: "text",
                header: "Reframing Our Design Focus",
                body: `Throughout this stage, our guiding phrase had been "optimize workflow" — and in the process, we'd lost sight of the fact that we were designing for people, not just processes. This led us to a revised design focus:`,
              },
              {
                type: "text-hero",
                body: `";;We want to focus our attention towards the staff. They find themselves easily overwhelmed on busy days;;, we should find ways of invoking --feelings of comfort and safety-- in their role responsibilities."`,
              },
            ],
          },
        ],
      },
      /* FINAL STRETCH */
      {
        id: "final-stretch",
        sidebarText: "The Final Stretch",

        header: "The Final Stretch",
        label: "",
        sectionDesc:
          "In the final weeks of the project, we carried our strengthened focus into the next round of work.",
        img: [
          {
            path: "long-hero1.png",
            alt: "Our 3 key insights",
          },
        ],

        innerSections: [
          {
            type: "1col-slideshow-text1col",
            blocks: [
              {
                type: "text",
                header: "Co-design Workshop with Staff",
                body: "I took the lead in planning, organizing, and facilitating a co-design workshop with staff. Our goal was twofold: gather their feedback and ideas, and surface deeper insights we might have missed.",
              },
              {
                type: "img",
                imgPath: "workshop-slide1.png",
                imgAlt: "Slide 1 of Slideshow: Co-design Workshop Summary",
              },
              {
                type: "img",
                imgPath: "workshop-slide2.png",
                imgAlt: "Slide 2 of Slideshow: Co-design Workshop Summary",
              },
              {
                type: "img",
                imgPath: "workshop-slide3.png",
                imgAlt: "Slide 3 of Slideshow: Co-design Workshop Summary",
              },
              {
                type: "img",
                imgPath: "workshop-slide4.png",
                imgAlt: "Slide 4 of Slideshow: Co-design Workshop Summary",
              },
              {
                type: "img",
                imgPath: "workshop-slide5.png",
                imgAlt: "Slide 5 of Slideshow: Co-design Workshop Summary",
              },
              {
                type: "img",
                imgPath: "workshop-slide6.png",
                imgAlt: "Slide 6 of Slideshow: Co-design Workshop Summary",
              },
              {
                type: "img",
                imgPath: "workshop-slide7.png",
                imgAlt: "Slide 7 of Slideshow: Co-design Workshop Summary",
              },
              {
                type: "img",
                imgPath: "workshop-slide8.png",
                imgAlt: "Slide 8 of Slideshow: Co-design Workshop Summary",
              },
              {
                type: "img",
                imgPath: "workshop-slide9.png",
                imgAlt: "Slide 9 of Slideshow: Co-design Workshop Summary",
              },
            ],
          },
          {
            type: "1col-text1col",
            blocks: [
              {
                type: "text",
                header: "Reframing Our Design Focus, Again",
                body: "Communication emerged as a recurring theme throughout the workshop, leading to another refinement:",
              },
              {
                type: "text-hero",
                body: `"We should find ways that help --declutter their spaces and tasks-- such that it facilitates better **communication**, promotes **ergonomics**, and invokes **comfort** in their environment."`,
              },
            ],
          },
          {
            type: "1col-text1col",
            blocks: [
              {
                type: "text",
                header: "No Really, This Is the Last Time...",
                body: "We revisited all our research notes and artifacts one more time to land on our final design focus:",
              },
              {
                type: "text-hero",
                body: `"To reduce --cognitive load-- and improve --task coordination-- by providing a --clear, shared system-- for prioritizing and delegating tasks."`,
              },
            ],
          },
          {
            type: "1col-text1col",
            blocks: [
              {
                type: "text",
                header: "Final Iterations",
                body: "With our focus locked in, we developed our last round of solutions.",
              },
            ],
          },
        ],
      },
      /* THE RESULT */
      {
        id: "the-result",
        sidebarText: "The Result + Prototyping",

        header: "The Result",
        label: "The Culmination",
        sectionDesc:
          "After a final round of discussions and iterations, we landed on our final solution: the Request Dashboard. All that was left was to polish it and bring it to life through an interactive prototype.",
        img: [
          {
            path: "",
            alt: "",
          },
        ],

        innerSections: [
          {
            type: "1col-slideshow-text1col",
            blocks: [
              {
                type: "text",
                header: "The Request Dashboard",
                body: "",
              },
              {
                type: "img",
                imgPath: "finalconcept-slide1.png",
                imgAlt: "Slide 1 of slideshow: Request Dashboard Concept",
              },
              {
                type: "img",
                imgPath: "finalconcept-slide2.png",
                imgAlt: "Slide 2 of slideshow: Request Dashboard Concept",
              },
              {
                type: "img",
                imgPath: "finalconcept-slide3.png",
                imgAlt: "Slide 3 of slideshow: Request Dashboard Concept",
              },
              {
                type: "img",
                imgPath: "finalconcept-slide4.png",
                imgAlt: "Slide 4 of slideshow: Request Dashboard Concept",
              },
            ],
          },
          {
            type: "1col-slideshow-text1col",
            blocks: [
              {
                type: "text",
                header: "Prototyping",
                body: "We built a web-based mobile prototype, splitting frontend and backend work between us. I led the UI design and built and styled the entire frontend, while my teammate handled the backend. Below is a slideshow describing the application's features.",
              },
              {
                type: "img",
                imgPath: "final-slide1.png",
                imgAlt: "Slide 1 of slideshow: Request Dashboard Final Concept",
              },
              {
                type: "img",
                imgPath: "final-slide2.png",
                imgAlt: "Slide 2 of slideshow: Request Dashboard Final Concept",
              },
              {
                type: "img",
                imgPath: "final-slide3.png",
                imgAlt: "Slide 3 of slideshow: Request Dashboard Final Concept",
              },
              {
                type: "img",
                imgPath: "final-slide4.png",
                imgAlt: "Slide 4 of slideshow: Request Dashboard Final Concept",
              },
              {
                type: "img",
                imgPath: "final-slide5.png",
                imgAlt: "Slide 5 of slideshow: Request Dashboard Final Concept",
              },
              {
                type: "img",
                imgPath: "final-slide6.png",
                imgAlt: "Slide 6 of slideshow: Request Dashboard Final Concept",
              },
              {
                type: "img",
                imgPath: "final-slide7.png",
                imgAlt: "Slide 7 of slideshow: Request Dashboard Final Concept",
              },
              {
                type: "img",
                imgPath: "final-slide8.png",
                imgAlt: "Slide 8 of slideshow: Request Dashboard Final Concept",
              },
              {
                type: "img",
                imgPath: "final-slide9.png",
                imgAlt: "Slide 9 of slideshow: Request Dashboard Final Concept",
              },
            ],
          },
          /* {
            type: "1col-text1col",
            blocks: [
              {
                type: "text",
                header: "Final Report & Rationale",
                body: "Our final report documents the design rationale behind the Request Dashboard, representing our journey from first site visit to final prototype.",
              },
            ],
          }, */
        ],
      },
    ],
  },
  /* YUMMEAL */
  {
    path: "proj_yummeal",
    slug: "yummeal",
    title: "YumMeal",
    comingSoon: true,
    tags: ["Frontend Web Dev", "Backend Web Dev", "UI Design"],
    desc: {
      about: PLACEHOLDER_DESCRIPTION,
      role: ["UI/UX Design", "Frontend Developer"],
      tools: ["Figma", "React", "HTML", "CSS & SCSS"],
    },
    img: [],
    cardInfo: {
      cardImgPath: null,
      cardImgAlt: "",
      cardDesc: PLACEHOLDER_DESCRIPTION,
    },
    sections: PLACEHOLDER_SECTIONS,
  },
  /* KINDERWORLD */
  {
    path: "proj_kinderworld",
    slug: "kinderworld-feature-concept-design",
    title: "A Kinder World: Feature Concept Design",
    featured: true,
    tags: ["UI Design", "UX Design", "User Research", "Prototyping"],
    desc: {
      about:
        "A 4-week project for an interface design class, completed with a team of 4. We were assigned to work with A Kinder World, a mobile game about houseplants, self-care, and emotional wellbeing developed by Lumi Interactive. After weeks of research and iteration, we designed The Journal: a private diary feature that lets users reflect daily, track their moods, and watch their emotional journey grow alongside their digital garden. The result was a medium-fidelity prototype of the concept.",
      role: ["UI/UX Designer", "User Researcher"],
      tools: ["Figma"],
    },
    img: [
      {
        path: "header-hero0.png",
        alt: "Mockups",
      },
      {
        path: "header-hero1.png",
        alt: "Mockups",
      },
    ],
    cardInfo: {
      cardImgPath: "project_kinderworld_thumbnail.png",
      cardImgAlt: "Kinder World Project Mockups",
      cardDesc:
        "Designing a feature concept for the nature-themed, mindfulness-based, self-care app, A Kinder World. We designed The Journal: a private diary feature that lets users reflect daily, track their moods, and watch their emotional journey grow alongside their digital garden.",
    },
    sections: [
      /* OVERVIEW */
      {
        id: "overview",
        sidebarText: "Overview",

        header: "Overview",
        label: "About the project",
        sectionDesc:
          "The goal of the project was to work with an existing application, assigned to us, research it extensively, then design a feature concept for it.",
        img: [
          {
            path: "long-hero0.png",
            alt: "Official Art from A Kinder World",
          },
        ],

        innerSections: [
          {
            type: "2col-text+img",
            blocks: [
              {
                type: "text",
                header: "Understanding Design Language",
                body: "First, we needed to become fully familiar with the application's existing design language.",
              },
              {
                type: "text",
                header: "Understanding Stakeholders",
                body: "Next, we researched to understand the stakeholders' intentions for the app.",
              },
              {
                type: "text",
                header: "Understanding Users",
                body: "We also researched to understand the needs of the app's actual users.",
              },
              {
                type: "text",
                header: "The End Goal",
                body: "With all three in place, our goal was to design a feature that stayed consistent with the app's existing design, aligned with the stakeholders' intentions, and met real user needs.",
              },
              {
                type: "img",
                imgPath: "vertical-hero1.png",
                imgAlt: "4 mockup screens",
              },
            ],
          },
          {
            type: "",
            blocks: [
              {
                type: "",
                header: "",
                body: "",
              },
            ],
          },
        ],
      },
      /* INTERFACE DEEP DIVE */
      {
        id: "interface-deep-dive",
        sidebarText: "Interface Deep Dive",

        header: "Interface Deep Dive",
        label: "",
        sectionDesc:
          "Our first goal was to fully understand the application itself — its functions, user flow, and design and interaction patterns.",
        img: [
          {
            path: "",
            alt: "",
          },
        ],

        innerSections: [
          {
            type: "2col-text+img",
            blocks: [
              {
                type: "text",
                header: "The Try Method",
                body: "We spent a full week using the application ourselves, both to become familiar with it and to put ourselves in our future users' shoes.",
              },
              {
                type: "text",
                header: "Documenting Our Experiences",
                body: "We documented our experiences extensively, then held discussions to compare and contrast what each of us noticed.",
              },
              {
                type: "img",
                imgPath: "trymethod-notes.png",
                imgAlt: "Collection of blurred screenshots of extensive notes",
              },
            ],
          },
          {
            type: "1col-text2col",
            blocks: [
              {
                type: "text",
                header: "Identifying Design Patterns…",
                body: "We picked apart the interface to find its components, design patterns, and repeated elements, mapping them all out.",
              },
              {
                type: "text",
                header: "…and Building a Design Dictionary",
                body: "From there, we built a rough design dictionary, giving us a shared reference to design consistently with the rest of the app.",
              },
              {
                type: "img",
                imgPath: "long-hero1.png",
                imgAlt: "Collection of Design Pattern notes",
              },
            ],
          },
        ],
      },
      /* USER RESEARCH */
      {
        id: "user-research",
        sidebarText: "User Research",

        header: "User Research",
        label: "Stakeholders + Audience",
        sectionDesc:
          "Once we fully understood the application, it was time to understand the people behind it, as well as the people using it.",
        img: [
          {
            path: "",
            alt: "",
          },
        ],

        innerSections: [
          {
            type: "1col-text2col",
            blocks: [
              {
                type: "text",
                header: "Understanding Stakeholders",
                body: "Using the app made it clear that the stakeholders wanted to create a calm, soothing space users could return to. The developer, Lumi Interactive, is a small team that also actively sustains a community for Kinder World users.",
              },
              {
                type: "text",
                header: "Identifying Their Philosophy",
                body: "We identified the app's core philosophy as kindness, nurturing, routine, and mindfulness. Routine and mindfulness in particular became the two ideas we designed around.",
              },
            ],
          },
          {
            type: "2col-text+img",
            blocks: [
              {
                type: "text",
                header: "Identifying Their Audience",
                body: `We concluded that the app's target audience were people seeking to build routine and practice mental health self-care, marketed specifically toward those drawn to a "chill," cozy aesthetic.`,
              },
              {
                type: "text",
                header: "Finding Users Online",
                body: "Because the developers actively encourage an online community, it was easy to find real user reviews, opinions, and experiences — through app store reviews, Reddit, and the official Kinder World Discord server. We collated these findings and extracted key insights.",
              },
              {
                type: "text",
                header: "Finding Users Around Us",
                body: "We also looked for people around us who matched our audience profile, and recruited several as testers.",
              },
              {
                type: "text",
                header: "Extracting Experiences",
                body: "Our testers used the application for a few days, after which we interviewed each of them about their experience.",
              },
              {
                type: "img",
                imgPath: "userresearch-notes.png",
                imgAlt: "Collection of extensive user research notes",
              },
            ],
          },
          {
            type: "2col-text+img",
            blocks: [
              {
                type: "text",
                header: "Visualizing Our Users",
                body: "We condensed our research — from both real users online and our own testers — into personas, giving our team a shared, deep understanding of who we were designing for.",
              },
              {
                type: "img",
                imgPath: "3personas.png",
                imgAlt: "Collection of 3 user personas",
              },
            ],
          },
        ],
      },
      /* DESIGN PROCESS */
      {
        id: "the-design-process",
        sidebarText: "The Design Process",

        header: "The Design Process",
        label: "Brainstorming, Sketching, Iterating...",
        sectionDesc:
          "Our research showed that users found the overall experience surface-level, which led us to initially conclude they weren't engaged enough to keep coming back. Thus, we honed in on the idea of **increasing personalization** and **social features** within the app.",
        img: [
          {
            path: "long-hero2.png",
            alt: "A slide describing our first design focus.",
          },
        ],

        innerSections: [
          {
            type: "1col-text1col",
            blocks: [
              {
                type: "text",
                header: "Our First Design Focus",
                body: "Our research showed that users found the overall experience surface-level, which led us to initially conclude they weren't engaged enough to keep coming back. Thus, we honed in on the idea of **increasing personalization** and **social features** within the app.",
              },
              {
                type: "text-hero",
                body: `"How do we allow users to have a more engaging and enriched experience?"`,
              },
            ],
          },
          {
            type: "2col-text+img",
            blocks: [
              {
                type: "text",
                header: "Brainstorming",
                body: "From there, we brainstormed heavily (mostly through FigJam) to generate a large volume of ideas, then narrowed them down to three.",
              },
              {
                type: "text",
                header: "Sketching",
                body: "We started with low-fidelity paper sketches to visualize our ideas and explore different interface arrangements.",
              },
              {
                type: "text",
                header: "Iterate",
                body: "We iterated on our ideas and research until we landed on a concept we were satisfied with.",
              },
            ],
          },
          {
            type: "1col-text1col",
            blocks: [
              {
                type: "text",
                header: "Losing Our Way...",
                body: "After days of work, we realized we'd lost sight of what Kinder World was actually about. We'd been designing for *engagement*—but Kinder World was built around routine mental health care, not capturing users' attention.",
              },
            ],
          },
          {
            type: "1col-text1col",
            blocks: [
              {
                type: "text",
                header: "Reworking Our Design Focus",
                body: "We revisited Kinder World's philosophy and refocused on its mindful reflection aspect, landing on a new design focus:",
              },
              {
                type: "text-hero",
                body: `"How might we help users reflect deeply and routinely?"`,
              },
            ],
          },
        ],
      },
      /* FINAL MOCKUP */
      {
        id: "final-concept",
        sidebarText: "The Final Concept",

        header: "The Final Concept",
        label: "Our final concept + mockup",
        sectionDesc:
          "With our new design focus, we returned to brainstorming, sketching, and iterating — until we landed on our final concept: The Journal.",
        img: [
          {
            path: "",
            alt: "",
          },
        ],

        innerSections: [
          {
            type: "2col-text+img",
            blocks: [
              {
                type: "text",
                header: "A Private Space to Reflect",
                body: "The Journal is a personal, private diary where users can write freely or respond to a guided prompt (like work, food & beverages, hobbies, or family & friends)",
              },
              {
                type: "text",
                header: "Personalization Through Decoration",
                body: "Users can decorate each entry with drag-and-drop stickers and washi tape. This builds a stronger, more personal connection between users, their entries, and their digital plants.",
              },
              {
                type: "text",
                header: "Reflection And Routine",
                body: "Each entry pairs with a daily mood check-in, which feeds into a monthly calendar view color-coded by how each day went. This ties a user's emotional journey directly to their terrarium, giving them a visual, growing record of their reflection habit over time, reinforcing the routine, mindful use that Kinder World is all about.",
              },
            ],
          },
          {
            type: "1col-slideshow-text1col",
            blocks: [
              {
                type: "text",
                header: "The Journal",
                body: "",
              },
              {
                type: "img",
                imgPath: "final-slide1.png",
                imgAlt: "Slide 1 of slideshow: The Journal Final Concept",
              },
              {
                type: "img",
                imgPath: "final-slide2.png",
                imgAlt: "Slide 2 of slideshow: The Journal Final Concept",
              },
              {
                type: "img",
                imgPath: "final-slide3.png",
                imgAlt: "Slide 3 of slideshow: The Journal Final Concept",
              },
              {
                type: "img",
                imgPath: "final-slide4.png",
                imgAlt: "Slide 4 of slideshow: The Journal Final Concept",
              },
              {
                type: "img",
                imgPath: "final-slide5.png",
                imgAlt: "Slide 5 of slideshow: The Journal Final Concept",
              },
              {
                type: "img",
                imgPath: "final-slide6.png",
                imgAlt: "Slide 6 of slideshow: The Journal Final Concept",
              },
              {
                type: "img",
                imgPath: "final-slide7.png",
                imgAlt: "Slide 7 of slideshow: The Journal Final Concept",
              },
              {
                type: "img",
                imgPath: "final-slide8.png",
                imgAlt: "Slide 8 of slideshow: The Journal Final Concept",
              },
            ],
          },
        ],
      },
    ],
  },
  /* SFU COURSE PLANNER */
  {
    path: null,
    slug: "sfu-course-planner",
    title: "SFU Course Planner App",
    comingSoon: true,
    tags: ["Mobile Development", "UI Design"],
    desc: {
      about: PLACEHOLDER_DESCRIPTION,
      role: [],
      tools: [],
    },
    img: [],
    cardInfo: {
      cardImgPath: null,
      cardImgAlt: "",
      cardDesc: PLACEHOLDER_DESCRIPTION,
    },
    sections: PLACEHOLDER_SECTIONS,
  },
  /* SFU LIB UX EVAL */
  {
    path: null,
    slug: "sfu-library-usability-evaluation",
    title: "SFU Library: UX Evaluation",
    comingSoon: true,
    tags: ["Usability Evaluation", "Case Study"],
    desc: {
      about: PLACEHOLDER_DESCRIPTION,
      role: [],
      tools: [],
    },
    img: [],
    cardInfo: {
      cardImgPath: null,
      cardImgAlt: "",
      cardDesc: PLACEHOLDER_DESCRIPTION,
    },
    sections: PLACEHOLDER_SECTIONS,
  },
  /* UBEREATS CONCEPT DESIGN */
  {
    path: null,
    slug: "ubereats-feature-concept-design",
    title: "UberEats: Feature Concept Design",
    comingSoon: true,
    tags: ["UI Design", "UX Design", "Prototyping"],
    desc: {
      about: PLACEHOLDER_DESCRIPTION,
      role: [],
      tools: [],
    },
    img: [],
    cardInfo: {
      cardImgPath: null,
      cardImgAlt: "",
      cardDesc: PLACEHOLDER_DESCRIPTION,
    },
    sections: PLACEHOLDER_SECTIONS,
  },
  /* SPOTIFY CONCEPT DESIGN */
  {
    path: null,
    slug: "spotify-feature-concept-design",
    title: "Spotify: Feature Concept Design",
    comingSoon: true,
    tags: ["UI Design", "UX Design", "Prototyping"],
    desc: {
      about: PLACEHOLDER_DESCRIPTION,
      role: [],
      tools: [],
    },
    img: [],
    cardInfo: {
      cardImgPath: null,
      cardImgAlt: "",
      cardDesc: PLACEHOLDER_DESCRIPTION,
    },
    sections: PLACEHOLDER_SECTIONS,
  },
  /* DOSTEMANA */
  {
    path: null,
    slug: "dostemana",
    title: "Dostemana",
    comingSoon: true,
    tags: ["Hackathon", "UI Design", "UX Design"],
    desc: {
      about: PLACEHOLDER_DESCRIPTION,
      role: [],
      tools: [],
    },
    img: [],
    cardInfo: {
      cardImgPath: null,
      cardImgAlt: "",
      cardDesc: PLACEHOLDER_DESCRIPTION,
    },
    sections: PLACEHOLDER_SECTIONS,
  },
  /* WRITEAI */
  {
    path: null,
    slug: "writeai",
    title: "WriteAI",
    comingSoon: true,
    tags: ["UI Design", "UX Design", "Prototyping", "Frontend Web Dev"],
    desc: {
      about: PLACEHOLDER_DESCRIPTION,
      role: [],
      tools: [],
    },
    img: [],
    cardInfo: {
      cardImgPath: null,
      cardImgAlt: "",
      cardDesc: PLACEHOLDER_DESCRIPTION,
    },
    sections: PLACEHOLDER_SECTIONS,
  },

  /* ---------------------------------------------------------------------------- */
  /* TESTING */
  /* {
    path: "proj_Testing",
    slug: "test-proj",
    title: "Request Dashboard",
    tags: [
      "UI Design",
      "UX Design",
      "Prototyping",
      "Frontend Web Dev",
      "Ethnographic Research",
      "Case Study",
    ],
    desc: {
      about:
        "The Request Dashboard is a shared system that helps escape room staff prioritize and delegate tasks with less mental overhead. It's the result of a 3-month, semester-long project I completed with 3 teammates for an interaction design course, working directly with a local escape room business. As a core team member, I led the visual and UI design and organized our co-design workshops with staff — culminating in a clear, shared system for reducing cognitive load and improving task coordination.",
      role: ["UI Designer", "Mobile Developer"],
      tools: ["Figma", "Swift"],
    },
    img: [
      { path: "img-square.png", alt: "test image" },
      { path: "img-square.png", alt: "test image" },
      { path: "img-square.png", alt: "test image" },
    ],
    cardInfo: {
      cardImgPath: "img-square.png",
      cardImgAlt: "testing image",
      cardDesc: PLACEHOLDER_DESCRIPTION,
    },
    sections: [],
  }, */
];

export const projects = rawProjects.map(resolveProject)




// -----------------------------------------------------------------------------
// personal reference
export const project_example = [
  {
    /* PERSONAL REFERENCE TESTING !!!!! */
    path: "proj_Testing",
    slug: "test-proj",
    title: "TESTING",
    /* comingSoon: true, */
    tags: ["Tag1", "Tag2", "Tag3"],
    desc: {
      about: PLACEHOLDER_DESCRIPTION,
      role: ["UI Designer", "Mobile Developer"],
      tools: ["Figma", "Swift"],
    },
    img: [
      { path: "img-square.png", alt: "test image" },
      { path: "img-square.png", alt: "test image" },
      { path: "img-square.png", alt: "test image" },
    ],
    cardInfo: {
      cardImgPath: "img-square.png",
      cardImgAlt: "testing image",
      cardDesc: PLACEHOLDER_DESCRIPTION,
    },
    /* KOPAS SECTION */
    sections: [
      {
        id: "",
        sidebarText: "",

        header: "",
        label: "",
        sectionDesc: "",
        img: [
          {
            path: "",
            alt: "",
          },
        ],

        innerSections: [
          {
            type: "",
            blocks: [
              {
                type: "",
                header: "",
                body: "",
              },
            ],
          },
        ],
      },
      {
        id: "section1",
        sidebarText: "Section 1",

        header: "This is Section 1",
        label: "Label for section 1",
        sectionDesc:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent aliquam ligula non est tincidunt, ut vulputate magna pellentesque. Nullam nec quam cursus ligula fermentum faucibus. Nulla et nibh nec",
        img: [
          {
            path: "img-square.png",
            alt: "alt text here",
          },
        ],

        innerSections: [
          {
            type: "1col-text1col",
            blocks: [
              {
                type: "text",
                header: "This is a subheader",
                body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent aliquam ligula non est tincidunt, ut vulputate magna pellentesque. Nullam nec quam cursus ligula fermentum faucibus. Nulla et nibh nec",
              },
              {
                type: "text-hero",
                body: `"We want to focus our attention on the --staff--. They find themselves overwhelmed, especially on busy days, so opportunities may arise in optimizing their workflow so that they operate smoothly."`,
              },
            ],
          },
          {
            type: "1col-text1col",
            blocks: [
              {
                type: "text",
                header: "This is a subheader",
                body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent aliquam ligula non est tincidunt, ut vulputate magna pellentesque. Nullam nec quam cursus ligula fermentum faucibus. Nulla et nibh nec",
              },
              {
                type: "img",
                imgPath: "img-horizontallylong.png",
                imgAlt: "Alt text here",
              },
            ],
          },
          {
            type: "1col-text2col",
            blocks: [
              {
                type: "text",
                header: "This is a subheader",
                body: "**Lorem ipsum dolor sit amet**, consectetur adipiscing elit. Praesent aliquam ligula non est tincidunt, ut vulputate magna pellentesque. Nullam nec quam cursus ligula fermentum faucibus. Nulla et nibh nec",
              },
              {
                type: "text",
                header: "This is a subheader",
                body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent aliquam ligula non est tincidunt, ut vulputate magna pellentesque. Nullam nec quam cursus ligula fermentum faucibus. Nulla et nibh nec",
              },
              {
                type: "img",
                imgPath: "img-horizontallylong.png",
                imgAlt: "Alt text here",
              },
            ],
          },
        ],
      },
      {
        id: "section2",
        sidebarText: "Section 2",
        header: "This is Section 2",
        label: "Label for section 2",
        sectionDesc:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent aliquam ligula non est tincidunt, ut vulputate magna pellentesque. Nullam nec quam cursus ligula fermentum faucibus. Nulla et nibh nec",
        img: [
          {
            path: "img-horizontallylong.png",
            alt: "Alt text here",
          },
        ],
        innerSections: [
          {
            type: "1col-text1col",
            blocks: [
              {
                type: "text",
                header: "This is a subheader",
                body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent aliquam ligula non est tincidunt, ut vulputate magna pellentesque. Nullam nec quam cursus ligula fermentum faucibus. Nulla et nibh nec",
              },
              {
                type: "img",
                imgPath: "img-horizontallylong.png",
                imgAlt: "Alt text here",
              },
            ],
          },
          {
            type: "2col-text+img",
            blocks: [
              {
                type: "text",
                header: "Subheader",
                body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent aliquam ligula non est tincidunt, ut vulputate magna pellentesque. Nullam nec quam cursus ligula fermentum faucibus. Nulla et nibh nec",
              },
              {
                type: "text",
                header: "Another subheader",
                body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent aliquam ligula non est tincidunt, ut vulputate magna pellentesque. Nullam nec quam cursus ligula fermentum faucibus. Nulla et nibh nec",
              },
              {
                type: "text",
                header: "And another",
                body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent aliquam ligula non est tincidunt, ut vulputate magna pellentesque. Nullam nec quam cursus ligula fermentum faucibus. Nulla et nibh nec",
              },
              {
                type: "img",
                imgPath: "img-square.png",
                imgAlt: "Alt text here",
              },
              {
                type: "img",
                imgPath: "img-square.png",
                imgAlt: "Alt text here",
              },
              {
                type: "img",
                imgPath: "img-square.png",
                imgAlt: "Alt text here",
              },
            ],
          },
          {
            type: "1col-slideshow-text1col",
            blocks: [
              {
                type: "text",
                header: "This is a subheader",
                body: "blah blah blah",
              },
              {
                type: "text",
                header: "This is a subheader",
                body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent aliquam ligula non est tincidunt, ut vulputate magna pellentesque. Nullam nec quam cursus ligula fermentum faucibus. Nulla et nibh nec",
              },
              {
                type: "img",
                imgPath: "img-slideshow.png",
                imgAlt: "Slide 1",
              },
              {
                type: "img",
                imgPath: "img-slideshow.png",
                imgAlt: "Slide 2",
              },
              {
                type: "img",
                imgPath: "img-slideshow.png",
                imgAlt: "Slide 3",
              },
            ],
          },
          {
            type: "1col-slideshow-text2col",
            blocks: [
              {
                type: "text",
                header: "This is a subheader",
                body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent aliquam ligula non est tincidunt, ut vulputate magna pellentesque. Nullam nec quam cursus ligula fermentum faucibus. Nulla et nibh nec",
              },
              {
                type: "text",
                header: "This is a subheader",
                body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent aliquam ligula non est tincidunt, ut vulputate magna pellentesque. Nullam nec quam cursus ligula fermentum faucibus. Nulla et nibh nec",
              },
              {
                type: "img",
                imgPath: "img-slideshow.png",
                imgAlt: "Slide 1",
              },
              {
                type: "img",
                imgPath: "img-slideshow.png",
                imgAlt: "Slide 2",
              },
              {
                type: "img",
                imgPath: "img-slideshow.png",
                imgAlt: "Slide 3",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    path: "proj_Testing",

    slug: "example-title",

    /* NOTE: title, tags, desc, img are for PROJECT-TOP*/
    title: "Example Title",
    tags: ["tag1", "tag2", "tag3"],
    desc: {
      about: "example long description",
      role: ["role1", "role2"],
      tools: ["tool1", "tool2"],
    },
    img: [
      {
        path: "img-square.png",
        alt: "alt text here",
      },
      {
        path: "img-square.png",
        alt: "alt text here",
      },
    ],
    /* /end PROJECT-TOP */

    /* NOTE: cardInfo contains information to be displayed in cards (eg. ProjectHighlightCard and ProjectListCard) */
    cardInfo: {
      cardImgPath: null,
      cardImgAlt: "alt text here",
      cardDesc: "example short description",
    },

    /* NOTE: sections used in PROJECT-BODY*/
    sections: [
      {
        /* NOTE: id determines that section's id, which will be used to jump to sections using the sidebar.*/
        id: "section1",
        /* NOTE: sidebarText determines the text content of the corresponding sidebar link */
        sidebarText: "Section 1",

        /* NOTE: header, label, sectionDesc, img for ContentSectionTop*/
        header: "This is Section 1",
        label: "Label for section 1",
        sectionDesc:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent aliquam ligula non est tincidunt, ut vulputate magna pellentesque. Nullam nec quam cursus ligula fermentum faucibus. Nulla et nibh nec",
        img: [
          {
            path: "img-square.png",
            alt: "alt text here",
          },
        ],

        /* innerSections contain content for ContentInnerSection */
        innerSections: [
          {
            type: "1col-text1col",
            blocks: [
              {
                type: "text",
                header: "This is a subheader",
                body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent aliquam ligula non est tincidunt, ut vulputate magna pellentesque. Nullam nec quam cursus ligula fermentum faucibus. Nulla et nibh nec",
              },
              {
                type: "img",
                imgPath: "img-horizontallylong.png",
                imgAlt: "Alt text here",
              },
            ],
          },
          {
            type: "1col-text2col",
            blocks: [
              {
                type: "text",
                header: "This is a subheader",
                body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent aliquam ligula non est tincidunt, ut vulputate magna pellentesque. Nullam nec quam cursus ligula fermentum faucibus. Nulla et nibh nec",
              },
              {
                type: "text",
                header: "This is a subheader",
                body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent aliquam ligula non est tincidunt, ut vulputate magna pellentesque. Nullam nec quam cursus ligula fermentum faucibus. Nulla et nibh nec",
              },
              {
                type: "img",
                imgPath: "img-horizontallylong.png",
                imgAlt: "Alt text here",
              },
            ],
          },
        ],
      },
      {
        id: "section2",
        sidebarText: "Section 2",
        header: "This is Section 2",
        label: "Label for section 2",
        sectionDesc:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent aliquam ligula non est tincidunt, ut vulputate magna pellentesque. Nullam nec quam cursus ligula fermentum faucibus. Nulla et nibh nec",
        img: [
          {
            path: "img-horizontallylong.png",
            alt: "Alt text here",
          },
        ],
        innerSections: [
          {
            type: "1col-text1col",
            blocks: [
              {
                type: "text",
                header: "This is a subheader",
                body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent aliquam ligula non est tincidunt, ut vulputate magna pellentesque. Nullam nec quam cursus ligula fermentum faucibus. Nulla et nibh nec",
              },
              {
                type: "img",
                imgPath: "img-horizontallylong.png",
                imgAlt: "Alt text here",
              },
            ],
          },
          {
            type: "2col-text+img",
            blocks: [
              {
                type: "text",
                header: "Subheader",
                body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent aliquam ligula non est tincidunt, ut vulputate magna pellentesque. Nullam nec quam cursus ligula fermentum faucibus. Nulla et nibh nec",
              },
              {
                type: "text",
                header: "Another subheader",
                body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent aliquam ligula non est tincidunt, ut vulputate magna pellentesque. Nullam nec quam cursus ligula fermentum faucibus. Nulla et nibh nec",
              },
              {
                type: "text",
                header: "And another",
                body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent aliquam ligula non est tincidunt, ut vulputate magna pellentesque. Nullam nec quam cursus ligula fermentum faucibus. Nulla et nibh nec",
              },
              {
                type: "img",
                imgPath: "img-square.png",
                imgAlt: "Alt text here",
              },
              {
                type: "img",
                imgPath: "img-square.png",
                imgAlt: "Alt text here",
              },
              {
                type: "img",
                imgPath: "img-square.png",
                imgAlt: "Alt text here",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    path: "proj_kinderworld",
    slug: "kinderworld-feature-concept-design",
    title: "A Kinder World: Feature Concept Design",
    featured: true,
    tags: ["UI Design", "UX Design", "User Research", "Prototyping"],
    desc: {
      about:
        "A 4-week project for an interface design class, completed with a team of 4. We were assigned to work with A Kinder World, a mobile game about houseplants, self-care, and emotional wellbeing developed by Lumi Interactive. After weeks of research and iteration, we designed The Journal: a private diary feature that lets users reflect daily, track their moods, and watch their emotional journey grow alongside their digital garden. The result was a medium-fidelity prototype of the concept.",
      role: [],
      tools: [],
    },
    img: [],
    cardInfo: {
      cardImgPath: "project_kinderworld_thumbnail.png",
      cardImgAlt: "Kinder World Project Mockups",
      cardDesc: PLACEHOLDER_DESCRIPTION,
    },
    sections: [
      /* OVERVIEW */
      {
        id: "overview",
        sidebarText: "Overview",

        header: "Overview",
        label: "About the project",
        sectionDesc:
          "The goal of the project was to work with an existing application, assigned to us, research it extensively, then design a feature concept for it.",
        img: [
          {
            path: "",
            alt: "",
          },
        ],

        innerSections: [
          {
            type: "2col-text+img",
            blocks: [
              {
                type: "text",
                header: "Understanding Design Language",
                body: "First, we needed to become fully familiar with the application's existing design language.",
              },
              {
                type: "text",
                header: "Understanding Stakeholders",
                body: "Next, we researched to understand the stakeholders' intentions for the app.",
              },
              {
                type: "text",
                header: "Understanding Users",
                body: "We also researched to understand the needs of the app's actual users.",
              },
              {
                type: "text",
                header: "The End Goal",
                body: "With all three in place, our goal was to design a feature that stayed consistent with the app's existing design, aligned with the stakeholders' intentions, and met real user needs.",
              },
            ],
          },
          {
            type: "",
            blocks: [
              {
                type: "",
                header: "",
                body: "",
              },
            ],
          },
        ],
      },
      /* INTERFACE DEEP DIVE */
      {
        id: "interface-deep-dive",
        sidebarText: "Interface Deep Dive",

        header: "Interface Deep Dive",
        label: "",
        sectionDesc:
          "Our first goal was to fully understand the application itself — its functions, user flow, and design and interaction patterns.",
        img: [
          {
            path: "",
            alt: "",
          },
        ],

        innerSections: [
          {
            type: "2col-text+img",
            blocks: [
              {
                type: "text",
                header: "The Try Method",
                body: "We spent a full week using the application ourselves, both to become familiar with it and to put ourselves in our future users' shoes.",
              },
              {
                type: "text",
                header: "Documenting Our Experiences",
                body: "We documented our experiences extensively, then held discussions to compare and contrast what each of us noticed.",
              },
            ],
          },
          {
            type: "1col-text2col",
            blocks: [
              {
                type: "text",
                header: "Identifying Design Patterns…",
                body: "We picked apart the interface to find its components, design patterns, and repeated elements, mapping them all out.",
              },
              {
                type: "text",
                header: "…and Building a Design Dictionary",
                body: "From there, we built a rough design dictionary, giving us a shared reference to design consistently with the rest of the app.",
              },
            ],
          },
        ],
      },
      /* USER RESEARCH */
      {
        id: "user-research",
        sidebarText: "User Research",

        header: "User Research",
        label: "Stakeholders + Audience",
        sectionDesc:
          "Once we fully understood the application, it was time to understand the people behind it, as well as the people using it.",
        img: [
          {
            path: "",
            alt: "",
          },
        ],

        innerSections: [
          {
            type: "1col-text2col",
            blocks: [
              {
                type: "text",
                header: "Understanding Stakeholders",
                body: "Using the app made it clear that the stakeholders wanted to create a calm, soothing space users could return to. The developer, Lumi Interactive, is a small team that also actively sustains a community for Kinder World users.",
              },
              {
                type: "text",
                header: "Identifying Their Philosophy",
                body: "We identified the app's core philosophy as kindness, nurturing, routine, and mindfulness. Routine and mindfulness in particular became the two ideas we designed around.",
              },
            ],
          },
          {
            type: "2col-text+img",
            blocks: [
              {
                type: "text",
                header: "Identifying Their Audience",
                body: `We concluded that the app's target audience were people seeking to build routine and practice mental health self-care, marketed specifically toward those drawn to a "chill," cozy aesthetic.`,
              },
              {
                type: "text",
                header: "Finding Users Online",
                body: "Because the developers actively encourage an online community, it was easy to find real user reviews, opinions, and experiences — through app store reviews, Reddit, and the official Kinder World Discord server. We collated these findings and extracted key insights.",
              },
              {
                type: "text",
                header: "Finding Users Around Us",
                body: "We also looked for people around us who matched our audience profile, and recruited several as testers.",
              },
              {
                type: "text",
                header: "Extracting Experiences",
                body: "Our testers used the application for a few days, after which we interviewed each of them about their experience.",
              },
            ],
          },
          {
            type: "2col-text+img",
            blocks: [
              {
                type: "text",
                header: "Visualizing Our Users",
                body: "We condensed our research — from both real users online and our own testers — into personas, giving our team a shared, deep understanding of who we were designing for.",
              },
            ],
          },
        ],
      },
      /* DESIGN PROCESS */
      {
        id: "the-design-process",
        sidebarText: "The Design Process",

        header: "The Design Process",
        label: "Brainstorming, Sketching, Iterating...",
        sectionDesc:
          "Our research showed that users found the overall experience surface-level, which led us to initially conclude they weren't engaged enough to keep coming back. Thus, we honed in on the idea of **increasing personalization** and **social features** within the app.",
        img: [
          {
            path: "",
            alt: "",
          },
        ],

        innerSections: [
          {
            type: "1col-text1col",
            blocks: [
              {
                type: "text",
                header: "Our First Design Focus",
                body: "Our research showed that users found the overall experience surface-level, which led us to initially conclude they weren't engaged enough to keep coming back. Thus, we honed in on the idea of **increasing personalization** and **social features** within the app.",
              },
              {
                type: "text-hero",
                body: `"How do we allow users to have a more engaging and enriched experience?"`,
              },
            ],
          },
          {
            type: "2col-text+img",
            blocks: [
              {
                type: "text",
                header: "Brainstorming",
                body: "From there, we brainstormed heavily (mostly through FigJam) to generate a large volume of ideas, then narrowed them down to three.",
              },
              {
                type: "text",
                header: "Sketching",
                body: "We started with low-fidelity paper sketches to visualize our ideas and explore different interface arrangements.",
              },
              {
                type: "text",
                header: "Iterate",
                body: "We iterated on our ideas and research until we landed on a concept we were satisfied with.",
              },
            ],
          },
          {
            type: "1col-text1col",
            blocks: [
              {
                type: "text",
                header: "Losing Our Way...",
                body: "After days of work, we realized we'd lost sight of what Kinder World was actually about. We'd been designing for *engagement*—but Kinder World was built around routine mental health care, not capturing users' attention.",
              },
            ],
          },
          {
            type: "1col-text1col",
            blocks: [
              {
                type: "text",
                header: "Reworking Our Design Focus",
                body: "We revisited Kinder World's philosophy and refocused on its mindful reflection aspect, landing on a new design focus:",
              },
              {
                type: "text-hero",
                body: `"How might we help users reflect deeply and routinely?"`,
              },
            ],
          },
        ],
      },
      /* FINAL MOCKUP */
      {
        id: "final-concept",
        sidebarText: "The Final Concept",

        header: "The Final Concept",
        label: "Our final concept + mockup",
        sectionDesc:
          "With our new design focus, we returned to brainstorming, sketching, and iterating — until we landed on our final concept: The Journal.",
        img: [
          {
            path: "",
            alt: "",
          },
        ],

        innerSections: [
          {
            type: "2col-text+img",
            blocks: [
              {
                type: "text",
                header: "A Private Space to Reflect",
                body: "The Journal is a personal, private diary where users can write freely or respond to a guided prompt (like work, food & beverages, hobbies, or family & friends)",
              },
              {
                type: "text",
                header: "Personalization Through Decoration",
                body: "Users can decorate each entry with drag-and-drop stickers and washi tape. This builds a stronger, more personal connection between users, their entries, and their digital plants.",
              },
              {
                type: "text",
                header: "Reflection And Routine",
                body: "Each entry pairs with a daily mood check-in, which feeds into a monthly calendar view color-coded by how each day went. This ties a user's emotional journey directly to their terrarium, giving them a visual, growing record of their reflection habit over time, reinforcing the routine, mindful use that Kinder World is all about.",
              },
            ],
          },
          {
            type: "1col-text1col",
            blocks: [
              {
                type: "",
                header: "",
                body: "",
              },
            ],
          },
        ],
      },
    ],
  },
];
