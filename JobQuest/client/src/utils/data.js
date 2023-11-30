import {
    WhatsApp,
    X,
    Instagram,
    Spotify,
    Linkedin,
    Youtube,
    Google,
    Facebook,
    
  } from "../assets";
  
  export const jobTypes = ["Full-Time", "Part-Time", "ContracT", "Intern"];
  
  export const experience = [
    { title: "Under 1 Year", value: "0-1" },
    { title: "1 -2 Year", value: "1-2" },
    { title: "2 -6 Year", value: "2-6" },
    { title: "Over 6 Years", value: "6" },
  ];
  
  export const popularSearch = [
    "Software Engineer",
    "Developer",
    "Full-Stack Developer",
    "Data Scientist",
    "Remote",
    "Full-Time",
    "Sales",
    "Office Assistant",
  ];
  
  export const jobs = [
    {
      id: "1",
      company: {
        name: "Microsoft Corporation",
        location: "Califonia",
        email: "support@microsoft.com",
        contact: "support@microsoft",
        about:
          "Microsoft is a global technology leader dedicated to empowering every person and every organization on the planet to achieve more. Our mission is to enable people and businesses to realize their full potential through innovative software, services, and devices.",
          profileUrl: X,
      },
      jobTitle: "Software Engineer",
      location: "West US",
      jobType: "Full-Time",
      salary: "1200",
      detail: [
        {
          desc: "As a Software Engineer at X, you will play a crucial role in developing, testing, and maintaining high-quality software solutions. You will work collaboratively with cross-functional teams to deliver innovative products that meet the needs of our customers. This position offers an opportunity to contribute to cutting-edge projects in a dynamic and collaborative work environment.",
          
          requirement:
            "Software Development: Design, implement, and maintain scalable and high-performance software solutions. Collaborate with cross-functional teams to deliver features that meet customer needs. Programming Languages: Proficiency in C++, C#, or Java, with a strong understanding of object-oriented programming concepts.",
        },
      ],
      applicants: ["1", "2", "3", "4"],
      vacancies: 12,
      createdAt: new Date(),
    },
    {
      id: "2",
      company: {
        name: "Google Corporation",
        location: "Califonia",
        email: "support@google.com",
        contact: "support@google",
        about:
          "Google is a global technology leader focused on improving the ways people connect with information. Our mission is to organize the world's information and make it universally accessible and useful.",
          profileUrl: Google,
      },
      jobTitle: "System Analyst",
      location: "New York",
      jobType: "Full-Time",
      salary: "1100",
      detail: [
        {
          desc: "As a System Analyst at Google, you will be a key player in ensuring the efficiency and effectiveness of our systems. You will work closely with cross-functional teams to analyze, design, and implement solutions that enhance our technological infrastructure. This role offers an exciting opportunity to contribute to innovative projects in a fast-paced and collaborative environment.",  
          
          requirement: "System Analysis: Conduct in-depth analysis of existing systems and processes to identify areas for improvement, Collaborate with stakeholders to gather and document system requirements. Design and Implementation: Design and implement scalable and efficient system solutions. Collaborate with software engineers to ensure seamless integration of new systems. Data Management: Develop and implement data management strategies to ensure data accuracy, integrity, and security.",
        },
      ],
      applicants: ["1", "2", "3", "4"],
      vacancies: 78,
      createdAt: new Date(),
    },
    {
      id: "3",
      company: {
        name: "LinkedIn Corporation",
        location: "Germany",
        email: "support@microsoft.com",
        contact: "support@microsoft",
        about:
          "LinkedIn Solutions Inc. is a leading technology company dedicated to connecting professionals around the world. Our mission is to create economic opportunity for every member of the global workforce. We provide a platform for professionals to network, discover new opportunities, and share insights. As we continue to grow, we are seeking a dynamic Social Media Manager to join our marketing team.",       
        profileUrl: Linkedin,
      },
      jobTitle: "Social Media Manager",
      location: "India, Mumbai",
      jobType: "Full-Time",
      salary: "800",
      detail: [
        {
          desc: "As a Social Media Manager at LinkedIn Solutions Inc., you will be responsible for developing and executing our social media strategy across various platforms. You will play a key role in building and engaging our online community, enhancing brand awareness, and driving engagement with our target audience.",
 
          requirement:"Strategy Development: Develop and implement a comprehensive social media strategy aligned with company goals and objectives. Stay updated on industry trends and best practices to ensure the effectiveness of our social media presence. Content Creation: Create compelling and shareable content for LinkedIn and other relevant social media platforms. Collaborate with the content team to ensure consistency in messaging across all channels.",
        },
      ],
      applicants: ["1", "2", "3", "4"],
      vacancies: 25,
      createdAt: new Date(),
    },
    {
      id: "4",
      company: {
        name: "Spotify Corporation",
        location: "Germany",
        email: "support@microsoft.com",
        contact: "support@microsoft",
        about:
          "Spotify is a leading global music streaming service that provides users with access to a vast library of music, podcasts, and other audio content. With millions of active users worldwide, Spotify is committed to revolutionizing the music industry through innovative technology and a passion for connecting people with the music and content they love.",  
        profileUrl: Spotify,
      },
      jobTitle: "CFO",
      location: "Norway",
      jobType: "Full-Time",
      salary: "1800",
      detail: [
        {
          desc: "As the Chief Financial Officer at Spotify, you will be a key strategic leader responsible for overseeing and optimizing the financial performance of the company. You will work closely with executive leadership to drive financial strategies, ensure fiscal responsibility, and contribute to the overall success and growth of Spotify.",  
          requirement:
            "Financial Strategy:  Develop and implement comprehensive financial strategies aligned with Spotify's business goals and objectives.",       
        },
      ],
      applicants: ["1", "2", "3", "4"],
      vacancies: 35,
      createdAt: new Date(),
    },
    {
      id: "5",
      company: {
        name: "Facebook Corporation",
        location: "Germany",
        email: "support@microsoft.com",
        contact: "support@microsoft",
        about:
          "Facebook is a leading global technology company dedicated to connecting people and building communities. Our mission is to give people the power to share and make the world more open and connected. We are committed to creating innovative solutions that have a positive impact on billions of lives around the world.",        
          profileUrl: Facebook,
      },
      jobTitle: "CEO",
      location: "Sweden",
      jobType: "Full-Time",
      salary: "1500",
      detail: [
        {
          desc: "As the Chief Executive Officer at Facebook, you will be responsible for providing visionary leadership, driving business strategy, and fostering a culture of innovation. You will work closely with the executive team, employees, and external stakeholders to ensure Facebook's continued success as a global technology leader.",  
          requirement: "Strategic Leadership: Develop and execute a forward-looking strategy to drive Facebook's growth and market leadership. Lead the executive team in aligning business objectives with the company's mission and values.", 
        },
      ],
      applicants: ["1", "2", "3", "4"],
      vacancies: 25,
      createdAt: new Date(),
    },
    {
      id: "6",
      company: {
        name: "WhatsApp Corporation",
        location: "Germany",
        email: "support@microsoft.com",
        contact: "support@microsoft",
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        profileUrl: WhatsApp,
      },
      jobTitle: "Product Manager",
      location: "Norway",
      jobType: "Full-Time",
      salary: "1200",
      detail: [
        {
          desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  
          requirement:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        },
      ],
      applicants: ["1", "2", "3", "4"],
      vacancies: 25,
      createdAt: new Date(),
    },
    {
      id: "7",
      company: {
        name: "Instagram Corporation",
        location: "Germany",
        email: "support@microsoft.com",
        contact: "support@microsoft",
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        profileUrl: Instagram,
      },
      jobTitle: "Product Manager",
      location: "Germany",
      jobType: "Full-Time",
      salary: "1200",
      detail: [
        {
          desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  
          requirement:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        },
      ],
      applicants: ["1", "2", "3", "4"],
      vacancies: 25,
      createdAt: new Date(),
    },
    {
      id: "8",
      company: {
        name: "Youtube Corporation",
        location: "Germany",
        email: "support@microsoft.com",
        contact: "support@microsoft",
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        profileUrl: Youtube,
      },
      jobTitle: "Data Scientist",
      location: "Sydney",
      jobType: "Full-Time",
      salary: "800",
      detail: [
        {
          desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  
          requirement:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        },
      ],
      applicants: ["1", "2", "3", "4"],
      vacancies: 25,
      createdAt: new Date(),
    },
    {
      id: "9",
      company: {
        name: " GalaxE Solutions",
        location: "India",
        email: "support@microsoft.com",
        contact: "support@microsoft",
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        
      },
      jobTitle: "Subscribe Please",
      location: "Hyderabad",
      jobType: "Full-Time",
      salary: "1200",
      detail: [
        {
          desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  
          requirement:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        },
      ],
      applicants: ["1", "2", "3", "4"],
      vacancies: 25,
      createdAt: new Date(),
    },
  ];
  
  export const footerLinks = [
    {
      id: "01",
      title: "Company",
      links: ["Home", "About Us", "Services", "Our Team"],
    },
    {
      id: "02",
      title: "Policy",
      links: ["Policies", "Contact", "FAQ"],
    },
    {
      id: "03",
      title: "Support",
      links: ["Account", "Support Center", "Feedback", "Accessibility"],
    },
  ];
  
  export const companies = [
    {
      _id: 1,
      name: "Microsoft Corporation",
      location: "Califonia",
      email: "support@microsoft.com",
      contact: "support@microsoft",
      about:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      profileUrl: X,
      jobPosts: ["1", "2"],
    },
    {
      _id: 2,
      name: "Google Corporation",
      location: "Califonia",
      email: "support@google.com",
      contact: "support@google",
      about:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      profileUrl: Google,
      jobPosts: ["1", "2"],
    },
    {
      _id: 3,
      name: "LinkedIn Corporation",
      location: "Germany",
      email: "support@microsoft.com",
      contact: "support@microsoft",
      about:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      profileUrl: Linkedin,
      jobPosts: ["1", "2"],
    },
    {
      _id: 4,
      name: "Spotify Corporation",
      location: "Germany",
      email: "support@microsoft.com",
      contact: "support@microsoft",
      about:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      profileUrl: Spotify,
      jobPosts: ["1", "2"],
    },
    {
      _id: 5,
      name: "Facebook Corporation",
      location: "Germany",
      email: "support@microsoft.com",
      contact: "support@microsoft",
      about:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      profileUrl: Facebook,
      jobPosts: ["1", "2"],
    },
    {
      _id: 6,
      name: "WhatsApp Corporation",
      location: "Germany",
      email: "support@microsoft.com",
      contact: "support@microsoft",
      about:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      profileUrl: WhatsApp,
      jobPosts: ["1", "2"],
    },
    {
      _id: 7,
      name: "Instagram Corporation",
      location: "India",
      email: "support@microsoft.com",
      contact: "support@microsoft",
      about:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      profileUrl: Instagram,
      jobPosts: ["1", "2"],
    },
    {
      _id: 8,
      name: "Youtube Corporation",
      location: "Germany",
      email: "support@microsoft.com",
      contact: "support@microsoft",
      about:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      profileUrl: Youtube,
      jobPosts: ["1", "2"],
    },
    {
      _id: 9,
      name: "GalaxE Solutions",
      location: "Ghana",
      email: "support@microsoft.com",
      contact: "support@microsoft",
      about:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      
      jobPosts: ["1", "2"],
    },
  ];
  
  export const users = [
    {
      name: "Google Corporation",
      location: "Califonia",
      email: "support@google.com",
      contact: "support@google",
      about:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      profileUrl: Google,
      jobPosts: ["1", "2"],
      token: "gjhsdgsjgdjh",
    },
    {
      firstName: "JobQuest",
      lastName: "Queries",
      email: "support@code.com",
      contact: "support@google",
      about:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      accountType: "seeker",
      cvUrl: "",
      token: "gjhsdgsjgdjh",
    },
  ];