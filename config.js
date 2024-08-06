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
    Profile: "I am an adult educator who transitioned into the world of startups. " +
             "I build web applications for personal projects." +
             "I am an expert in online learning, with a particular passion for Learning Analytics, though I also have a keen interest in Data Analytics, especially when enhanced by AI." +
             "I am fascinated by the intersection of humans and technology.",
    Technologies: [
        {
            "name": "HTML5",
            "level": "Intermediate",
            "icon": "./HTML5.svg"
        },
        {
            "name": "CSS3",
            "level": "Intermediate",
            "icon": "./CSS3.svg"
        },
        {
            "name": "Tailwind CSS",
            "level": "Intermediate",
            "icon": "./Tailwind CSS.svg"
        },
        {
            "name": "JavaScript",
            "level": "Beginner",
            "icon": "./JavaScript.svg"
        },
        {
            "name": "React",
            "level": "Beginner",
            "icon": "./React.svg"
        },
        {
            "name": "Next.js",
            "level": "Fundamentals, my go-to framework for web development.",
            "icon": "./Next.js.svg"
        },
        {
            "name": "PostgresSQL",
            "level": "Basic Setup, Data Retrieval with SQL",
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
            "level": "Beginner",
            "icon": "./Azure.svg"
        },
        {
            "name": "Git",
            "level": "Intermediate",
            "icon": "./Git.svg"
        },
        {
            "name": "Docker",
            "level": "Beginner",
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
        "description": "Customer projects in Online Learning."
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
        "description": "AI development using Python, OpenAI for small projects."
        },
    ],
    // Define Job exprience here
    jobExperience:
    [
        {
          "company": "Claned Group Oy Ab",
          "positions": [
            {
              "title": "CEO",
              "description": "n/a",
              "startDate": "2023",
              "endDate": "Present"
            },
            {
              "title": "Chief Product Officer",
              "description": "Building the platform and related services. Managing the customer success team.",
              "startDate": "2022",
              "endDate": "2023"
            },
            {
              "title": "Head Of Learning Design",
              "description": "Building Learning Design as a service. Onboarding customers and setting up online learning during covid all over the world.",
              "startDate": "2020",
              "endDate": "2022"
            },
            {
              "title": "Customer Success Manager",
              "description": "Managing customer support and building customer support processes. Client onboarding and training.",
              "startDate": "2019",
              "endDate": "2020"
            }
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
            "title": "Oisko.app",
            "description": "Oisko is a simple social calendar tool built with NextJS, Supabase and Tailwind CSS.",
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
        }
      ]
    

}

export default config