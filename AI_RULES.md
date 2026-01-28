# AI Rules for CarMatch Pro

This document outlines the core technologies and best practices for developing the CarMatch Pro application.

## Tech Stack Overview

*   **React & TypeScript:** The application is built using React for the UI and TypeScript for type safety, ensuring robust and maintainable code.
*   **Vite:** A fast build tool that provides an excellent development experience with hot module replacement.
*   **Tailwind CSS:** A utility-first CSS framework used for all styling, enabling rapid UI development and consistent design.
*   **shadcn/ui:** A collection of re-usable components built with Radix UI and Tailwind CSS, providing accessible and customizable UI elements.
*   **Framer Motion:** Utilized for all animations and interactive transitions, enhancing the user experience with smooth and engaging visuals.
*   **React Router:** Manages client-side routing, defining navigation paths and rendering components based on the URL.
*   **TanStack Query:** Handles server state management, including data fetching, caching, synchronization, and error handling.
*   **React Hook Form & Zod:** Used together for efficient form management and schema-based validation, ensuring data integrity.
*   **Lucide React:** Provides a comprehensive set of customizable SVG icons for the application.

## Library Usage Rules

To maintain consistency and leverage the strengths of each library, please adhere to the following guidelines:

*   **Styling:**
    *   **Tailwind CSS:** Always use Tailwind CSS classes for all styling. Avoid writing custom CSS files or inline styles unless absolutely necessary for unique, non-Tailwindable properties (which should be rare).
*   **UI Components:**
    *   **shadcn/ui:** Prioritize using components from `src/components/ui` for common UI elements (e.g., Button, Input, Slider, Dialog, Card).
    *   **Customization:** Do not modify the files within `src/components/ui` directly. If a shadcn/ui component requires customization beyond its props, create a new component that wraps or extends the existing shadcn/ui component.
*   **Animations:**
    *   **Framer Motion:** Use Framer Motion for all animations, transitions, and interactive gestures.
*   **Routing:**
    *   **React Router:** Manage all client-side navigation using React Router. All primary routes should be defined in `src/App.tsx`.
*   **Data Fetching & State Management:**
    *   **TanStack Query:** Use TanStack Query for fetching, caching, and managing asynchronous data (server state).
*   **Forms & Validation:**
    *   **React Hook Form & Zod:** Use React Hook Form for building forms and managing form state. Pair it with Zod for robust schema validation.
*   **Icons:**
    *   **Lucide React:** Use icons from the `lucide-react` library.
*   **Date Manipulation:**
    *   **date-fns:** Use `date-fns` for all date parsing, formatting, and manipulation tasks.
*   **Toast Notifications:**
    *   **Sonner:** For new toast notifications, prefer using `sonner` for its modern design and features. The existing `Toaster` and `useToast` from `@radix-ui/react-toast` are present but `sonner` is recommended for new implementations.
*   **Carousels:**
    *   **Embla Carousel:** Use `embla-carousel-react` for implementing carousels.
*   **Theme Toggling:**
    *   **Next Themes:** The `next-themes` library is installed, but the current implementation uses a custom `ThemeToggle` component. Continue to use the existing `ThemeToggle` component for dark/light mode functionality.