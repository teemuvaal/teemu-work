const config = {
    // Basic information
    siteName: "Teemu's Portfolio",
    siteDescription: "Teemu's Portfolio",
    siteUrl: "https://www.teemu.work",
    siteType: "website",
    siteLanguage: "en_US",
    // Specify technologies
    // Place .svg to public
    Name: "Teemu Vaalasmaa",
    Email: "teemu.vaalasmaa@gmail.com",
    Socials: [
        {
            "name": "LinkedIn",
            "href": "https://www.linkedin.com/in/teemuvaalasmaa/",
        }
    ],
    Profile: "I'm an adult educator who leaped to the dark side - startups. " +
             "I build things for the web for myself, but also fiddle with the front-end of CLANED. " +
             "Expert in anything that comes to online learning. Learning Analytics is my jam but I'm into " +
             "Data Analytics in general and especially if you can enhance it with AI. " +
             "I like the stuff between humans and technology.",
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
            "level": "Beginner",
            "icon": "./Next.js.svg"
        },
        {
            "name": "PostgresSQL",
            "level": "Intermediate",
            "icon": "./PostgresSQL.svg"
        },
        {
            "name": "Python",
            "level": "Beginner",
            "icon": "./Python.svg"
        },
        {
            "name": "Jupyter",
            "level": "Beginner",
            "icon": "./Jupyter.svg"
        },
        {
            "name": "Pandas",
            "level": "Beginner",
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
        }
    
    ],
    // Other skills to be displayed
    OtherSkills:
    [
        "English",
        "Finnish",
        "Project Management",
        "Pedagogy",
        "Adult Education",
        "Leadership",
        "Learning Analytics",
        "Data Visualization",
        "Data Analysis",
        "AI"
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
              "description": "Building the platform and related services.",
              "startDate": "2022",
              "endDate": "2023"
            },
            {
              "title": "Head Of Learning Design",
              "description": "n/a",
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
      Projects:
      [
        {
            "title": "Oisko.app",
            "description": "Oisko is a simple social calendar tool built with NextJS, Supabase and Tailwind CSS.",
            "href":"https://oisko.app",
            "cover":"/Oisko.png"
        },
        {
            "title": "GameGains",
            "description": "Ultrahack 2019 #3 place. Fighting against exclusion by promoting skills gained by gaming.",
            "href":"https://ultrahack.org/files/Ultrahack%20Sprint%20I%202019%20press%20release.pdf",
            "cover":"/GameGains.png"
        },
        {
            "title":"Drone Hackathon",
            "description":"Ultrahack Drone Olympics 2019 #1 place.",
            "href":"",
            "cover":"",
        }
      ]
    

}

export default config