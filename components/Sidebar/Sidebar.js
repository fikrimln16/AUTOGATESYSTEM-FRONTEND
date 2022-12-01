import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { AiOutlineTable } from "react-icons/ai";
import {CgLogOut} from "react-icons/cg"

export default function Sidebar({ role }) {
  const [collapseShow, setCollapseShow] = React.useState("hidden");
  const router = useRouter();

  if (role === "admin") {
    return (
      <>
        <nav className="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6  bg-[rgb(240, 255, 255)/0.56] backdrop-blur-[80px] ">
          <div className="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto">
            {/* Toggler */}
            <button
              className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
              type="button"
              onClick={() => setCollapseShow("bg-white m-2 py-3 px-6")}
            >
              menu
            </button>
            {/* Brand */}
            <Link href="/">
              <a className="md:block text-left md:pb-2 text-black mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0">Mask Detection</a>
            </Link>
            {/* Collapse */}
            <div
              className={
                "md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded " + collapseShow
              }
            >
              {/* Collapse header */}
              <div className="md:min-w-full md:hidden block pb-4 mb-4 border-b border-solid border-black">
                <div className="flex flex-wrap">
                  <div className="w-6/12">
                    <Link href="/">
                      <a className="md:block text-left md:pb-2 text-black mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0">Mask Detection</a>
                    </Link>
                  </div>
                  <div className="w-6/12 flex justify-end">
                    <button type="button" className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent" onClick={() => setCollapseShow("hidden")}>
                      menu
                    </button>
                  </div>
                </div>
              </div>

              {/* Divider */}
              <hr className="my-4 md:min-w-full" />
              {/* Heading */}
              <h6 className="md:min-w-full text-black text-xs uppercase font-bold block pt-1 pb-4 no-underline">Admin Layout Pages</h6>
              {/* Navigation */}

              <ul className="md:flex-col md:min-w-full flex flex-col list-none">
                {/* Tables */}
                <li className="items-center">
                  <Link href="/admin/tables">
                    <a className={"text-xs uppercase py-3 font-bold flex items-center gap-2  " + (router.pathname.indexOf("/admin/tables") !== -1 ? "text-scDark hover:text-black" : "text-black hover:text-black")}>
                      <AiOutlineTable size={"20"} />
                      Tables
                    </a>
                  </Link>
                </li>
                {/* Tables by Month */}
                <li className="items-center">
                  <Link href="/admin/tableMonth">
                    <a className={"text-xs uppercase py-3 font-bold flex items-center gap-2  " + (router.pathname.indexOf("/admin/tableMonth") !== -1 ? "text-scDark hover:text-black" : "text-black hover:text-black")}>
                      <AiOutlineTable size={"20"} />
                      Tables By Month
                    </a>
                  </Link>
                </li>
              </ul>

              {/* Divider */}
              <hr className="my-4 md:min-w-full" />
              {/* Heading */}
              {/* Navigation */}

              <ul className="md:flex-col md:min-w-full flex flex-col list-none md:mb-4">
                <li className="items-center">
                  <Link href="/login">
                    <a className="text-black hover:text-black text-xs uppercase py-3 font-bold block flex items-center">
                      <CgLogOut size={20} /> Logout
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </>
    );
  }
  return (
    <>
      <nav className="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6  bg-[rgb(240, 255, 255)/0.56] backdrop-blur-[80px] ">
        <div className="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto">
          {/* Toggler */}
          <button
            className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
            type="button"
            onClick={() => setCollapseShow("bg-white m-2 py-3 px-6")}
          >
            menu
          </button>
          {/* Brand */}
          <Link href="/">
            <a className="md:block text-left md:pb-2 text-black mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0">Mask Detection</a>
          </Link>
          <div
            className={
              "md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded " + collapseShow
            }
          >
            {/* Collapse header */}
            <div className="md:min-w-full md:hidden block pb-4 mb-4 border-b border-solid border-black">
              <div className="flex flex-wrap">
                <div className="w-6/12">
                  <Link href="/">
                    <a className="md:block text-left md:pb-2 text-black mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0">Mask Detection</a>
                  </Link>
                </div>
                <div className="w-6/12 flex justify-end">
                  <button type="button" className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent" onClick={() => setCollapseShow("hidden")}>
                    menu
                  </button>
                </div>
              </div>
            </div>
            {/* Form */}
            <form className="mt-6 mb-4 md:hidden">
              <div className="mb-3 pt-0">
                <input
                  type="text"
                  placeholder="Search"
                  className=" px-3 py-2 h-12 border border-solid  border-black placeholder-black text-black bg-white rounded text-base leading-snug shadow-none outline-none focus:outline-none w-full font-normal"
                />
              </div>
            </form>

            {/* Divider */}
            <hr className="my-4 md:min-w-full" />
            {/* Heading */}
            <h6 className="md:min-w-full text-black text-xs uppercase font-bold block pt-1 pb-4 no-underline">Security Layout Pages</h6>
            {/* Navigation */}

            <ul className="md:flex-col md:min-w-full flex flex-col list-none">

              <li className="items-center">
                <Link href="/security/mask">
                  <a className={"text-xs uppercase py-3 font-bold flex items-center gap-2  " + (router.pathname.indexOf("/security/mask") !== -1 ? "text-scDark hover:text-black" : "text-black hover:text-black")}>
                    <AiOutlineTable size={"20"} />
                    Tables Mask
                  </a>
                </Link>
              </li>
              <li className="items-center">
                <Link href="/security/nomask">
                  <a className={"text-xs uppercase py-3 font-bold flex items-center gap-2  " + (router.pathname.indexOf("/security/nomask") !== -1 ? "text-scDark hover:text-black" : "text-black hover:text-black")}>
                    <AiOutlineTable size={"20"} />
                    Tables No Mask
                  </a>
                </Link>
              </li>
            </ul>

            {/* Divider */}
            <hr className="my-4 md:min-w-full" />
            {/* Navigation */}

            <ul className="md:flex-col md:min-w-full flex flex-col list-none md:mb-4">
              <li className="items-center">
                <Link href="/login">
                  <a className="text-black hover:text-black text-xs uppercase py-3 font-bold block flex items-center">
                    <CgLogOut size={20
                    
                    } /> Logout
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
