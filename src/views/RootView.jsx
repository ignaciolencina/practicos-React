import { Outlet } from "react-router-dom";

export const RootView = () => {
  return (
    <>
      <header className="text-center">HEADER</header>
      <main className="container my-3">
        <Outlet />
      </main>
      <footer className="text-center">FOOTER</footer>
    </>
  );
};
export default RootView;