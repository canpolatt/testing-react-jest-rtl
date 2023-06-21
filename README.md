# Testing React with Jest and React Testing Library (RTL)

<div>
    <a href="https://testing-library.com/docs/react-testing-library/intro/"><img src="./assets/1.png" width="100" height="100"></a>
    <a href="https://jestjs.io/docs/getting-started"><img src="./assets/2.png" width="100" height="100"></a>
</div>

- Not only is **React Testing Library (RTL)** a library, but it also embodies a specific approach or viewpoint. This approach emphasizes testing your software in a manner that closely mirrors how users interact with it, focusing on its external behavior rather than its internal implementation details.

- Instead of relying on internal implementation aspects, **RTL** encourages the use of accessibility markers to locate elements in your tests. By ensuring that your tests can find elements using these markers, you also ensure that screen readers can access your software, indicating its accessibility.

- **RTL** provides a virtual DOM (Document Object Model) specifically designed for testing purposes. When running tests outside of a browser environment, having a virtual DOM enables actions like clicking elements and verifying the behavior of the virtual DOM.

- **Jest**, on the other hand, is a test runner responsible for discovering tests, executing them, and determining their success or failure.
