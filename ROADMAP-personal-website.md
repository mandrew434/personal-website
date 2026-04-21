### Project: Personal Website (`mandrew434/personal-website`)

**Overall Objective:** Enhance the website's performance, maintainability, accessibility, and feature set to create a professional and engaging online presence, focusing on IT Strategy/Leadership and project showcasing, with a strong emphasis on $0-cost solutions where possible.

---

#### **Phase 1: Foundational Enhancements & Automation (Current Priority)**

*   **Objective:** Establish robust development practices and improve core website quality.
*   **Tasks:**
    1.  **Integrate Codex Agent (Prerequisite):**
        *   Confirm full OpenClaw application restart (awaiting your action).
        *   Verify `sessions_spawn` functionality with Codex.
    2.  **Code Quality & Consistency:**
        *   Implement code linting (e.g., ESLint for JS, Stylelint for CSS).
        *   Introduce code formatting (e.g., Prettier) for consistent style.
        *   *Tooling Suggestion:* Identify optimal configurations for these tools within the project, prioritizing free/open-source.
    3.  **Asset Optimization Pipeline:**
        *   Set up automated image compression for `assets/img/`.
        *   Configure CSS/JS minification.
        *   *Tooling Suggestion:* Research and integrate a suitable build tool (e.g., Gulp, Webpack, or a simpler npm script-based approach), prioritizing free/open-source.
    4.  **Semantic HTML Review:**
        *   Conduct an initial pass on HTML files for semantic tag usage.
        *   Suggest improvements for structure and readability.

---

#### **Phase 2: Performance, Accessibility & SEO**

*   **Objective:** Optimize website speed, ensure accessibility standards, and improve search engine visibility.
*   **Tasks:**
    1.  **Performance Auditing:**
        *   Integrate Lighthouse or similar tools for automated performance checks.
        *   Identify and address critical performance bottlenecks.
    2.  **Accessibility Audit:**
        *   Run automated accessibility checks (e.g., Axe-core).
        *   Suggest manual review points for complex interactions.
    3.  **Basic SEO Best Practices:**
        *   Ensure appropriate meta tags, `<h1>` structure, and descriptive link text.
        *   Generate a `sitemap.xml` and `robots.txt`.

---

#### **Phase 3: Deployment & Continuous Integration/Delivery (CI/CD)**

*   **Objective:** Automate the build, test, and deployment process.
*   **Tasks:**
    1.  **GitHub Actions Setup:**
        *   Configure a CI workflow for linting, testing (if applicable), and building the site on push/pull request.
        *   Implement a CD workflow for automated deployment to your chosen hosting platform (e.g., GitHub Pages, Netlify, Vercel), prioritizing free tiers.
    2.  **Environment Configuration:**
        *   Manage environment-specific variables for deployment.

---

#### **Phase 4: Feature Enhancements & Refinements (Cost-Conscious)**

*   **Objective:** Introduce new features, refine existing elements, and respond to feedback, all while adhering to the $0-cost constraint.
*   **Tasks:**
    1.  **Services/Consulting Page:**
        *   Design and develop a dedicated page outlining your IT strategy/leadership services.
        *   Showcase your unique value proposition.
    2.  **Project Portfolio Page:**
        *   Create a dynamic section to highlight your key projects, linking to GitHub repositories or live demos.
        *   Focus on communicating the *strategy* and *leadership* aspects of your project involvement.
    3.  **Service Inquiry Form:**
        *   Develop a contact form for potential clients to submit inquiries.
        *   *Zero-Cost Solution:* Investigate and integrate free form submission services (e.g., Formspree, Netlify Forms) or a basic serverless function setup if feasible within a free tier.

---

**Current Status & Next Immediate Action:**

My priority remains awaiting your restart of the OpenClaw application. Once that's complete, I will immediately attempt to verify the Codex agent integration. Afterward, I will proceed with the first available task from "Phase 1: Foundational Enhancements & Automation."