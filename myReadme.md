# vibium-agentkit

**Agent-powered browser automation and testing toolkit built on top of Vibium.**

`vibium-agentkit` extends the core capabilities of [Vibium](https://github.com/VibiumDev/vibium) by adding structured test automation, agent-driven workflows, and experimentation support for browser-based QA and E2E testing.

---

## ✨ Features

- 🤖 **Agent-driven automation** for browser workflows
- 🧪 **Test-first extensions** on top of Vibium
- 🌐 **E2E and integration testing** for web applications
- 🧩 Modular design for adding custom agents and test runners
- 🛠️ Built for experimentation, learning, and extensibility

---

## 📦 Project Structure

```text
vibium-agentkit/
├─ agents/            # Custom AI / rule-based agents
├─ tests/             # Automated tests (E2E, integration, QA)
├─ workflows/         # Reusable browser automation flows
├─ examples/          # Example use cases and demos
├─ configs/           # Test and agent configuration
└─ README.md

This is an independent fork/extension and is not officially affiliated with the Vibium maintainers.

```markup
vibium-agentkit/
├─ src/
│  ├─ core/
│  │  ├─ browser.ts        # Vibium browser wrapper
│  │  ├─ page.ts           # Page-level helpers
│  │  └─ selectors.ts      # Common selector helpers
│  │
│  ├─ assertions/
│  │  ├─ expect.ts         # expect() entry point
│  │  ├─ visibility.ts     # toBeVisible, toBeHidden
│  │  ├─ text.ts           # toHaveText, toContainText
│  │  └─ url.ts            # toHaveURL
│  │
│  ├─ utils/
│  │  ├─ wait.ts           # waitFor, retry helpers
│  │  ├─ logger.ts         # basic logging
│  │  └─ errors.ts         # custom errors
│  │
│  └─ index.ts             # public API exports
│
├─ tests/
│  ├─ e2e/
│  │  ├─ login.spec.ts
│  │  ├─ signup.spec.ts
│  │  └─ navigation.spec.ts
│  │
│  ├─ smoke/
│  │  └─ homepage.spec.ts
│  │
│  └─ test.setup.ts        # global test setup/teardown
│
├─ examples/
│  ├─ basic-flow.ts        # minimal example
│  └─ e2e-example.ts
│
├─ configs/
│  ├─ agentkit.config.ts   # timeouts, baseURL, headless
│  └─ environments.ts      # dev / staging / prod
│
├─ scripts/
│  └─ run-tests.ts         # simple test runner script
│
├─ README.md
├─ package.json
├─ tsconfig.json
└─ LICENSE

