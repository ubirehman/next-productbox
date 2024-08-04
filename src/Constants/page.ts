export const Constants = {
  LOGO: {
    firstName: "Rapid",
    lastName: "Sales",
  },
  MENU_NAVBAR_LINKS: [
    {
      id: 0,
      title: "Home",
      link: "/",
    },
    {
      id: 1,
      title: "About",
      link: "/about",
    },
    {
      id: 2,
      title: "Blog",
      link: "/blog",
    },
    {
      id: 3,
      title: "Pages",
      link: "/pages",
    },
    {
      id: 4,
      title: "Pricing",
      link: "/pricing",
    },
  ],

  BUTTONS: {
    SIGN_IN: "Sign In",
    SIGN_UP: "Sign Up",
  },
  PAGES: {
    AUTH: {
      SIGNIN: "Sign In",
      TAGLINE: "Please login to your account.",
      NAME: "Full Name",
      EMAIL: "Email",
      PASSWORD: "Password",
      SIGNUP: "Sign Up",
      SIGNUP_TAGLINE: "Create your account",
    },
    HOME: {
      TITLE: "Transform Your Sales Strategy With RapidSales",
      TAGLINE:
        "Designed to streamline your banking operation, enhance customer experiences, and drive growth",
      CTA: {
        GET_STARTED: "Get Started",
        LEARN_MORE: "Learn More",
      },
    },
  },

  POPUP_MESSAGES: {
    USER_LOGEDIN_SUCCESS_MESSAGE: "Logged in successfully",
    USER_LOGEDIN_FAIL_MESSAGE: "User or email incorrect",
  },

  API_LINKS: {
    AUTHENTICATE: "/api/authenticate/signin",
    REGISTER: "/api/authenticate/signup"
  },
};
