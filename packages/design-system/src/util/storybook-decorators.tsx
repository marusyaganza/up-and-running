import { MemoryRouter, Route, Routes } from "react-router-dom";

export const routerDecorator = (Story: JSX.ElementType) => {
  return (
    <MemoryRouter>
      <Routes>
        <Route path="/*" element={<Story />} />
      </Routes>
    </MemoryRouter>
  );
};
