# Testing React with Jest and React Testing Library (RTL)

<div align="center">
    <a href="https://testing-library.com/docs/react-testing-library/intro/"><img src="./assets/1.png" width="100" height="100"></a>
    <a href="https://jestjs.io/docs/getting-started"><img src="./assets/2.png" width="100" height="100"></a>
</div>

- Not only is **React Testing Library (RTL)** a library, but it also embodies a specific approach or viewpoint. This approach emphasizes testing your software in a manner that closely mirrors how users interact with it, focusing on its external behavior rather than its internal implementation details.

- Instead of relying on internal implementation aspects, **RTL** encourages the use of accessibility markers to locate elements in your tests. By ensuring that your tests can find elements using these markers, you also ensure that screen readers can access your software, indicating its accessibility.

- **RTL** provides a virtual DOM (Document Object Model) specifically designed for testing purposes. When running tests outside of a browser environment, having a virtual DOM enables actions like clicking elements and verifying the behavior of the virtual DOM.

- **Jest**, on the other hand, is a test runner responsible for discovering tests, executing them, and determining their success or failure.

## color-button project notes

```
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

```

- **render()** method creates a virtual DOM for whatever JSX you give it as the argument here

  - Create virtual DOM for argument JSX
  - Access virtual DOM via _screen_ global

- **screen.getByText()** method find an element in the DOM based on whatever text it's displaying.

  - Find element by display text

- **/learn react/i**

  - regular expression
  - case insensitive(i)
  - could be string 'Learn React'

- **expect.toBeInDocument()** this assertion is what causes the test to succeed or fail

**Assertions**

```
  expect(linkElement).toBeInTheDocument();

```

- **expect** Jest global, starts the assertion
- **expect argument** subject of the assertion
- **matcher** type of assertion, this matcher comes from Jest-DOM
- **matcher argument** refines matcher

**More assertion examples**

```
expect(element.textContent).toBe('hello');
expect(elementsArray).toHaveLength(7);

```

**jest-dom**

- comes with create-react-app
- src/setupTests.js imports it before each test, makes matchers avaliable
- DOM-based matchers
  - examples: toBeVisible() or toBeChecked()

**Jest**

- RTL helps with
  - rendering components into virtual DOM
  - searching virtual DOM
  - interacting with virtual DOM
- Needs a test runner
  - Find tests, run them, make assertions
- Jest
  - is recommended by Testing Library
  - comes with cra
- _npm test_ runs an npm script that runs Jest in watch mode

**Jest Watch Mode**

- Watch for changes in files since last commit
- Only run tests related to these files
- No changes? No tests.
  - Type _a_ to run all tests

**How does Jest work?**

- global _test_ method has two arguments:
  - string description
  - test function
- Test fails if error is thrown when running function
  - assetions throw errors when expectation fails
- No error -> tests pass
  - Empty test passes!

**TDD(Test-Driven Development)**

- Write tests before writing code
  - then write code according to "spec" set by tests
- "red-green" testing

  - Tests fail before code is written

    1.Write "shell" function
    2.Write tests
    3.Tests fail
    4.Write code
    5.Tests pass

**Why TDD?**

- Makes a huge difference in how it feels to write tests
  part of the coding process, not a "chore" to do at the end
- More efficient
  - Re-run tests "for free" after changes

**What does React Testing Library Do?**

- Creates virtual DOM for testing and utilities for interacting with DOM
- Allows testing without a browser

**Types of Tests**

- Unit tests
  - Tests one unit of code in isolation
- Integration tests
  - How multiple units work together
- Functional Tests
  - Tests a particular function of software
  - Functional tests is that you're not testing your code, you're testing behavior
- Acceptance / End-to-end(E2E) Tests
  - Use actual browser and server(Cypress,Selenium)

**Functional Testing**

- different mindset from unit testing
- In Unit test

  - Isolated: mock dependencies, test internals
  - ⭐️ Very easy to pinpoint failures
  - 👎 Further from how users itneract with software
  - 👎 More likely to break with refactoring

- In Functional test
  - Include all relevant units, test, behavior
  - ⭐️ Close to how users interact with software
  - ⭐️ Robust tests
  - 👎 More difficult to debug failing tests

**TDD vs BDD**

- Testing Library encourages testing _behavior_ over implementation
- BDD is very explicitly defined
  - involves collaboration between lots of roles
    - developer, QA, business partners, etc
  - defines process for different grous to interact
- Only developers? so TDD

**Accessibility and Finding Elements**

- Testing Library recommends finding elements by accessibility handles
  - https://testing-library.com/docs/queries/about/#priority
- cra's example test uses _getByText_
  - ok for non-interactive elements
  - better: _getByRole_
- Roles documentation: https://www.w3.org/TR/wai-aria/#role_definitions
  - some elements have built-in roles: _button_, _a_
- Can't find an element like a screen reader would?
  - Then your app isn't friendly to screen readers
