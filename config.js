const config = {
    // Basic information
    siteName: "Teemu's Portfolio",
    siteDescription: "Teemu's Portfolio",
    siteUrl: "https://www.teemu.work",
    siteType: "website",
    siteLanguage: "en_US",
    // Specify technologies
    // Place .svg to public
    Photo: "/notion-avatar.png",
    Name: "Teemu Vaalasmaa",
    Email: "teemu.vaalasmaa@gmail.com",
    Location: "Helsinki, Finland",
    LinkedIn: "https://www.linkedin.com/in/teemuvaalasmaa/",
    GitHub: "https://github.com/teemuvaal",
    Instagram: "https://www.instagram.com/flipsku/",
    Twitter: "https://twitter.com/flipsku",
    Profile: "Product manager, software developer, data analyst, AI enthusiast. " +
             "I like building things for work and for fun. "+
             "Outside of tech I enjoy reading, hiking and rewatching sitcoms.",
    Technologies: [
        {
            "name": "HTML5",
            "level": "Good",
            "icon": "./HTML5.svg"
        },
        {
            "name": "CSS3",
            "level": "Good",
            "icon": "./CSS3.svg"
        },
        {
            "name": "Tailwind CSS",
            "level": "Good",
            "icon": "./Tailwind CSS.svg"
        },
        {
            "name": "JavaScript",
            "level": "Intermediate",
            "icon": "./JavaScript.svg"
        },
        {
            "name": "React",
            "level": "Fundamentals",
            "icon": "./React.svg"
        },
        {
            "name": "Next.js",
            "level": "My go-to framework for web development.",
            "icon": "./Next.js.svg"
        },
        {
            "name": "PostgresSQL",
            "level": "Setup, build and manage.",
            "icon": "./PostgresSQL.svg"
        },
        {
            "name": "Python",
            "level": "Fundamentals, used for data analysis and visualization.",
            "icon": "./Python.svg"
        },
        {
            "name": "Jupyter",
            "level": "Fundamentals, used for data analysis and visualization.",
            "icon": "./Jupyter.svg"
        },
        {
            "name": "Pandas",
            "level": "Fundamentals, data manipulation and analysis.",
            "icon": "./Pandas.svg"
        },
        
        {
            "name": "Azure",
            "level": "Cloud setup, services and management.",
            "icon": "./Azure.svg"
        },
        {
            "name": "Git",
            "level": "git push --force",
            "icon": "./Git.svg"
        },
        {
            "name": "Docker",
            "level": "Fundamentals",
            "icon": "./Docker.svg"
        },
        {
            "name": "Linux",
            "level": "Fundamentals",
            "icon": "./Linux.svg"
        }
    
    ],
    // Other skills to be displayed
    OtherSkills:
    [
        {"name": "English",
        "description": "Full professional proficiency"
        }, 
        {"name": "Finnish",
        "description": "Native"
        },
        {"name": "Project Management",
        "description": "Consultation, integration and implementation of learning management systems."
        },
        {"name": "Pedagogy",
        "description": "M.A. in Adult Education, 10+ years"
        },
        {"name": "Adult Education",
        "description": "M.A. in Adult Education, 10+ years"
        },
        {"name": "Leadership",
        "description": "Running, managing day to day operations and customer success team."
        },
        {"name": "Learning Analytics",
        "description": "Customer cases, internal dashboards."
        },
        {"name": "Data Visualization",
        "description": "Python, PowerPoint, Excel"
        },
        {"name": "Data Analysis",
        "description": "Intermediate"
        },
        {"name": "AI",
        "description": "AI applications for web and analytics."
        },
    ],
    // Define Job exprience here
    jobExperience:
    [
        {
          "company": "Claned Group Oy Ab",
          "positions": [
            {
              "title": "CEO, COO, CPO, Head Of Learning Design, Customer Success Manager",
              "description": "Claned is a smart, analytics and AI based learning platform. I've been in different roles since the company grew from 20 000 users to 100 000+ users. Currently I'm leading the product team and CEO.",
              "startDate": "2019",
              "endDate": "Present",
              "website": "https://www.claned.com"
            },
          ]
        },
        {
          "company": "Edupoli Oy",
          "positions": [
            {
              "title": "Career Coach",
              "description": "Adult educator, coaching and online learning facilitation and management.",
              "startDate": "2013",
              "endDate": "2019"
            }
          ]
        }
      ],
      // Place projects here, each will be displayed as a card
      Projects:
      [        
        {
            "title": "Claned",
            "description": "Claned is a smart, analytics and AI based learning platform. Front end development, AI and data.",
            "href": "https://www.claned.com",
            "cover": "",
            "alt": "Picture of Claned"
        },
        {
            "title": "AdventureHub",
            "description": "AI enchanced app to run your own RP campaigns for Dungeons and Dragons etc.",
            "href": "https://github.com/teemuvaal/rp-dashboard",
            "cover": "",
            "alt": "Picture of AdventureHub"
        },
        {
            "title": "Oisko.app",
            "description": "Oisko is a simple social calendar tool built with NextJS, Supabase and Tailwind CSS. (not in active development for now)",
            "href":"https://oisko.app",
            "cover":"/Oisko.png",
            "alt":"Picture of Oisko.app"
        },
        {
            "title": "GameGains",
            "description": "Ultrahack 2019 #3 place. Fighting against exclusion by promoting skills gained by gaming.",
            "href":"https://ultrahack.org/files/Ultrahack%20Sprint%20I%202019%20press%20release.pdf",
            "cover":"/GameGains.png",
            "alt":"Picture of GameGains"
        },
        {
            "title":"Drone Hackathon",
            "description":"Ultrahack Drone Olympics 2019 #1 place.",
            "href":"",
            "cover":"",
            "alt":"Picture of Drone Hackathon"
        },
        {
            "title": "Reitit -app",
            "description": "Simple web app for planning routes from one location (e.g. home, office) to multiple destinations with public transport information.",
            "href": "https://reitit.teemu.work",
            "cover": "",
            "alt": "Picture of Reitit app"
        }
      ]
}

export default config