"use client";

import { adminNavOptions, navOptions, styles } from "@/utils";

const isAdminView = false;
const isAuthUser = false;
const user = {
  role: "admin",
};

function NavItems() {
  return (
    <div
      className="items-center justify-between w-full md:flex md:w-auto"
      id="nav-items"
    >
      <ul
        className={`flex flex-col p-4 md:p-0 mt-4 font-medium  rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 bg-white ${"border border-gray-100"}`}
      >
        {isAdminView
          ? adminNavOptions.map((item) => (
              <li
                className="cursor-pointer block py-2 pl-3 pr-4 text-gray-900 rounded md:p-0"
                key={item.id}
              >
                {item.label}
              </li>
            ))
          : navOptions.map((item) => (
              <li
                className="cursor-pointer block py-2 pl-3 pr-4 text-gray-900 rounded md:p-0"
                key={item.id}
              >
                {item.label}
              </li>
            ))}
      </ul>
    </div>
  );
}

const Navbar = () => {
  return (
    <>
      <nav className="bg-white fixed w-full z-20 top-0 border-b border-gray-200">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <div className="flex items-center cursor-pointer">
            <span className="text-2xl font-semibold whitespace-nowrap self-center">
              E-Commerce
            </span>
          </div>
          <div className="flex md:order-2 gap-2">
            {!isAdminView && isAuthUser ? (
              <>
                <button className={styles.button}>Account</button>
                <button className={styles.button}>Cart</button>
              </>
            ) : null}
            {user?.role === "admin" ? (
              isAdminView ? (
                <button className={styles.button}>Client View</button>
              ) : (
                <button className={styles.button}>Admin View</button>
              )
            ) : null}
            {isAuthUser ? (
              <button className={styles.button}>Logout</button>
            ) : (
              <button className={styles.button}>Login</button>
            )}
          </div>
          <NavItems />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
