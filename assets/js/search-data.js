// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "publications in reversed chronological order",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "dropdown-courses",
              title: "courses",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/courses/";
              },
            },{id: "dropdown-thesis-phd",
              title: "thesis-phd",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/thesis-phd/";
              },
            },{id: "nav-projects",
          title: "projects",
          description: "A showcase of research projects I have contributed to.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-activities",
          title: "activities",
          description: "Editorships, committees, talks, and more",
          section: "Navigation",
          handler: () => {
            window.location.href = "/activities/";
          },
        },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
