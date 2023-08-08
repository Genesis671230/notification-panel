import React from "react";

const page = () => {
  return (
    <div className="good">
      <div
        id="page-container"
        // x-data="{ mobileSidebarOpen: false }"
        class="mx-auto  relative flex min-h-screen w-full min-w-[320px] flex-col bg-white lg:pl-64"
      >
        <nav
          id="page-sidebar"
          class="absolute top-0 left-0 bottom-0 z-50 flex h-full w-80 transform flex-col overflow-auto bg-slate-100 transition-transform duration-500 ease-out lg:w-64 lg:translate-x-0"
  //         x-bind:class="{
  //   '-translate-x-full': !mobileSidebarOpen,
  //   'translate-x-0': mobileSidebarOpen,
  // }"
          aria-label="Main Sidebar Navigation"
          x-cloak
        >
          <div class="flex h-20 w-full flex-none items-center justify-between px-8">
            <a
              href="javascript:void(0)"
              class="inline-flex items-center space-x-2 text-lg font-bold tracking-wide text-slate-800 transition hover:opacity-75 active:opacity-100"
            >
              <svg
                class="bi bi-window-sidebar inline-block h-4 w-4 text-blue-600"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M2.5 4a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zm2-.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm1 .5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z" />
                <path d="M2 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H2zm12 1a1 1 0 0 1 1 1v2H1V3a1 1 0 0 1 1-1h12zM1 13V6h4v8H2a1 1 0 0 1-1-1zm5 1V6h9v7a1 1 0 0 1-1 1H6z" />
              </svg>
              <span>
                tail<span class="font-medium text-blue-600">app</span>
              </span>
            </a>

            <div class="lg:hidden">
              <button
                type="button"
                class="flex h-10 w-10 items-center justify-center text-slate-400 hover:text-slate-600 active:text-slate-400"
                // x-on:click="mobileSidebarOpen = false"
              >
                <svg
                  class="hi-solid hi-x -mx-1 inline-block h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div class="w-full grow space-y-3 p-4">
            <a
              href="javascript:void(0)"
              class="flex items-center space-x-3 rounded-lg bg-white px-4 py-2.5 font-semibold text-slate-600 shadow-sm shadow-slate-300/50"
            >
              <svg
                class="bi bi-house-heart-fill inline-block h-4 w-4 text-slate-400"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M7.293 1.5a1 1 0 0 1 1.414 0L11 3.793V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v3.293l2.354 2.353a.5.5 0 0 1-.708.707L8 2.207 1.354 8.853a.5.5 0 1 1-.708-.707L7.293 1.5Z" />
                <path d="m14 9.293-6-6-6 6V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V9.293Zm-6-.811c1.664-1.673 5.825 1.254 0 5.018-5.825-3.764-1.664-6.691 0-5.018Z" />
              </svg>
              <span>Dashboard</span>
            </a>
            <a
              href="javascript:void(0)"
              class="flex items-center space-x-3 rounded-lg px-4 py-2.5 font-semibold text-slate-600 hover:bg-white hover:shadow-sm hover:shadow-slate-300/50 active:bg-white/75 active:text-slate-800 active:shadow-slate-300/10"
            >
              <svg
                class="bi bi-briefcase-fill inline-block h-4 w-4 text-slate-400"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v1.384l7.614 2.03a1.5 1.5 0 0 0 .772 0L16 5.884V4.5A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5z" />
                <path d="M0 12.5A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5V6.85L8.129 8.947a.5.5 0 0 1-.258 0L0 6.85v5.65z" />
              </svg>
              <span>Projects</span>
            </a>
            <a
              href="javascript:void(0)"
              class="flex items-center space-x-3 rounded-lg px-4 py-2.5 font-semibold text-slate-600 hover:bg-white hover:shadow-sm hover:shadow-slate-300/50 active:bg-white/75 active:text-slate-800 active:shadow-slate-300/10"
            >
              <svg
                class="bi bi-people-fill inline-block h-4 w-4 text-slate-400"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                <path
                  fill-rule="evenodd"
                  d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z"
                />
                <path d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" />
              </svg>
              <span>Customers</span>
            </a>
            <a
              href="javascript:void(0)"
              class="flex items-center space-x-3 rounded-lg px-4 py-2.5 font-semibold text-slate-600 hover:bg-white hover:shadow-sm hover:shadow-slate-300/50 active:bg-white/75 active:text-slate-800 active:shadow-slate-300/10"
            >
              <svg
                class="bi bi-file-earmark-text-fill inline-block h-4 w-4 text-slate-400"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0zM9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1zM4.5 9a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1h-7zM4 10.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 1 0-1h4a.5.5 0 0 1 0 1h-4z" />
              </svg>
              <span>Invoices</span>
            </a>
            <a
              href="javascript:void(0)"
              class="flex items-center space-x-3 rounded-lg px-4 py-2.5 font-semibold text-slate-600 hover:bg-white hover:shadow-sm hover:shadow-slate-300/50 active:bg-white/75 active:text-slate-800 active:shadow-slate-300/10"
            >
              <svg
                class="bi bi-life-preserver inline-block h-4 w-4 text-slate-400"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm6.43-5.228a7.025 7.025 0 0 1-3.658 3.658l-1.115-2.788a4.015 4.015 0 0 0 1.985-1.985l2.788 1.115zM5.228 14.43a7.025 7.025 0 0 1-3.658-3.658l2.788-1.115a4.015 4.015 0 0 0 1.985 1.985L5.228 14.43zm9.202-9.202-2.788 1.115a4.015 4.015 0 0 0-1.985-1.985l1.115-2.788a7.025 7.025 0 0 1 3.658 3.658zm-8.087-.87a4.015 4.015 0 0 0-1.985 1.985L1.57 5.228A7.025 7.025 0 0 1 5.228 1.57l1.115 2.788zM8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
              </svg>
              <span>Support</span>
            </a>
          </div>

          <div class="w-full flex-none space-y-3 p-4">
            <a
              href="javascript:void(0)"
              class="flex items-center space-x-3 rounded-lg px-4 py-2.5 font-semibold text-slate-600 hover:bg-white hover:shadow-sm hover:shadow-slate-300/50 active:bg-white/75 active:text-slate-800 active:shadow-slate-300/10"
            >
              <svg
                class="bi bi-gear-fill inline-block h-4 w-4 text-slate-400"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z" />
              </svg>
              <span>Settings</span>
            </a>
            <a
              href="javascript:void(0)"
              class="flex items-center space-x-3 rounded-lg px-4 py-2.5 font-semibold text-slate-600 hover:bg-white hover:shadow-sm hover:shadow-slate-300/50 active:bg-white/75 active:text-slate-800 active:shadow-slate-300/10"
            >
              <svg
                class="bi bi-lock-fill inline-block h-4 w-4 text-slate-400"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z" />
              </svg>
              <span>Logout</span>
            </a>
          </div>
        </nav>

        <header
          id="page-header"
          class="fixed top-0 right-0 left-0 z-30 flex h-20 flex-none items-center bg-white shadow-sm lg:hidden"
        >
          <div class="container mx-auto flex justify-between px-4 lg:px-8 xl:max-w-7xl">
            <div class="flex items-center space-x-2">
              <button
                type="button"
                class="inline-flex items-center justify-center space-x-2 rounded border border-slate-300 bg-white px-2 py-1.5 font-semibold leading-6 text-slate-800 shadow-sm hover:border-slate-300 hover:bg-slate-100 hover:text-slate-800 hover:shadow focus:outline-none focus:ring focus:ring-slate-500 focus:ring-opacity-25 active:border-white active:bg-white active:shadow-none"
                // x-on:click="mobileSidebarOpen = true"
              >
                <svg
                  class="hi-solid hi-menu-alt-1 inline-block h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>
            </div>

            <div class="flex items-center space-x-2">
              <a
                href="javascript:void(0)"
                class="inline-flex items-center space-x-2 text-lg font-bold tracking-wide text-slate-800 transition hover:opacity-75 active:opacity-100"
              >
                <svg
                  class="bi bi-window-sidebar inline-block h-4 w-4 text-blue-600"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M2.5 4a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zm2-.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm1 .5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z" />
                  <path d="M2 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H2zm12 1a1 1 0 0 1 1 1v2H1V3a1 1 0 0 1 1-1h12zM1 13V6h4v8H2a1 1 0 0 1-1-1zm5 1V6h9v7a1 1 0 0 1-1 1H6z" />
                </svg>
                <span>
                  tail<span class="font-medium text-blue-600">app</span>
                </span>
              </a>
            </div>

            <div class="flex items-center space-x-2">
              <a
                href="javascript:void(0)"
                class="inline-flex items-center justify-center space-x-2 rounded border border-slate-300 bg-white px-2 py-1.5 font-semibold leading-6 text-slate-800 shadow-sm hover:border-slate-300 hover:bg-slate-100 hover:text-slate-800 hover:shadow focus:outline-none focus:ring focus:ring-slate-500 focus:ring-opacity-25 active:border-white active:bg-white active:shadow-none"
              >
                <svg
                  class="hi-solid hi-user-circle inline-block h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                    clip-rule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
        </header>

        <main
          id="page-content"
          class="flex max-w-full flex-auto flex-col pt-20 lg:pt-0"
        >
          <div class="container mx-auto space-y-10 px-4 py-8 lg:space-y-16 lg:px-8 lg:py-12 xl:max-w-7xl">
            <div>
              <h2 class="mb-2 text-3xl font-semibold">Overview</h2>
              <h3 class="mb-8 text-sm font-medium text-slate-500">
                Welcome John, everything looks great!
              </h3>
              <div class="grid grid-cols-1 gap-4 md:grid-cols-3 lg:gap-8">
                <a
                  href="javascript:void(0)"
                  class="flex flex-col rounded-2xl border bg-white hover:border-slate-300 active:border-slate-200"
                >
                  <div class="flex w-full grow items-center justify-between p-5 lg:p-6">
                    <dl>
                      <dt class="text-2xl font-bold">4</dt>
                      <dd class="text-slate-600">Projects</dd>
                    </dl>
                    <div class="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                      <svg
                        class="bi bi-briefcase-fill inline-block h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v1.384l7.614 2.03a1.5 1.5 0 0 0 .772 0L16 5.884V4.5A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5z" />
                        <path d="M0 12.5A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5V6.85L8.129 8.947a.5.5 0 0 1-.258 0L0 6.85v5.65z" />
                      </svg>
                    </div>
                  </div>
                  <div class="w-full border-t border-slate-100 py-3 px-5 text-xs font-medium text-slate-500 lg:px-6">
                    <p>Currently active</p>
                  </div>
                </a>

                <a
                  href="javascript:void(0)"
                  class="flex flex-col rounded-2xl border bg-white hover:border-slate-300 active:border-slate-200"
                >
                  <div class="flex w-full grow items-center justify-between p-5 lg:p-6">
                    <dl>
                      <dt class="text-2xl font-bold">20</dt>
                      <dd class="text-slate-600">Tickets</dd>
                    </dl>
                    <div class="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                      <svg
                        class="bi bi-life-preserver inline-block h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm6.43-5.228a7.025 7.025 0 0 1-3.658 3.658l-1.115-2.788a4.015 4.015 0 0 0 1.985-1.985l2.788 1.115zM5.228 14.43a7.025 7.025 0 0 1-3.658-3.658l2.788-1.115a4.015 4.015 0 0 0 1.985 1.985L5.228 14.43zm9.202-9.202-2.788 1.115a4.015 4.015 0 0 0-1.985-1.985l1.115-2.788a7.025 7.025 0 0 1 3.658 3.658zm-8.087-.87a4.015 4.015 0 0 0-1.985 1.985L1.57 5.228A7.025 7.025 0 0 1 5.228 1.57l1.115 2.788zM8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                      </svg>
                    </div>
                  </div>
                  <div class="w-full border-t border-slate-100 py-3 px-5 text-xs font-medium text-slate-500 lg:px-6">
                    <p>Currently open and pending</p>
                  </div>
                </a>

                <a
                  href="javascript:void(0)"
                  class="flex flex-col rounded-2xl border bg-white hover:border-slate-300 active:border-slate-200"
                >
                  <div class="flex w-full grow items-center justify-between p-5 lg:p-6">
                    <dl>
                      <dt class="text-2xl font-bold">782</dt>
                      <dd class="text-slate-600">Customers</dd>
                    </dl>
                    <div class="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                      <svg
                        class="bi bi-people-fill inline-block h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                        <path
                          fill-rule="evenodd"
                          d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z"
                        />
                        <path d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" />
                      </svg>
                    </div>
                  </div>
                  <div class="w-full border-t border-slate-100 py-3 px-5 text-xs font-medium text-slate-500 lg:px-6">
                    <p>All active accounts</p>
                  </div>
                </a>
              </div>
            </div>

            <div>
              <h2 class="mb-2 text-3xl font-semibold">Projects</h2>
              <h3 class="mb-8 text-sm font-medium text-slate-500">
                You've completed over
                <span class="font-semibold">200 projects</span> till now, keep
                it up!
              </h3>
              <div class="grid grid-cols-1 items-start gap-4 md:grid-cols-2 xl:grid-cols-4">
                <div class="space-y-4 rounded-xl border p-5">
                  <div>
                    <h4 class="mb-1 flex items-center justify-between space-x-2 font-semibold">
                      <span>Dashboard Design</span>
                      <a
                        href="javascript:void(0)"
                        class="text-sm font-medium text-blue-600 transition hover:text-blue-700"
                      >
                        <svg
                          class="hi-solid hi-external-link inline-block h-5 w-5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                          <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                        </svg>
                      </a>
                    </h4>
                    <h5 class="text-sm text-slate-600">
                      Project for
                      <a
                        href="javascript:void(0)"
                        class="font-medium text-blue-600 transition hover:text-blue-700"
                      >
                        Jeremy Smith
                      </a>
                    </h5>
                  </div>
                  <div class="space-y-3">
                    <a
                      href="javascript:void(0)"
                      class="flex flex-col rounded bg-slate-50 hover:bg-slate-100 active:bg-slate-50"
                    >
                      <div class="space-y-2 p-3 text-sm">
                        <div class="h-1.5 w-8 rounded bg-orange-400"></div>
                        <p>Main Layout</p>
                      </div>
                    </a>
                    <a
                      href="javascript:void(0)"
                      class="flex flex-col rounded bg-slate-50 hover:bg-slate-100 active:bg-slate-50"
                    >
                      <div class="space-y-2 p-3 text-sm">
                        <div class="h-1.5 w-8 rounded bg-emerald-400"></div>
                        <p>Dashboard Icons</p>
                      </div>
                    </a>
                    <a
                      href="javascript:void(0)"
                      class="flex flex-col rounded bg-slate-50 hover:bg-slate-100 active:bg-slate-50"
                    >
                      <div class="space-y-2 p-3 text-sm">
                        <div class="h-1.5 w-8 rounded bg-orange-400"></div>
                        <p>Auth Pages</p>
                        <div class="space-x-2 text-slate-400">
                          <svg
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                            class="hi-solid hi-eye inline-block h-5 w-5"
                          >
                            <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
                            <path
                              fill-rule="evenodd"
                              d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                          <span>
                            <svg
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                              class="hi-solid hi-annotation inline-block h-5 w-5"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z"
                                clip-rule="evenodd"
                              ></path>
                            </svg>
                            4
                          </span>
                        </div>
                      </div>
                    </a>
                    <a
                      href="javascript:void(0)"
                      class="flex flex-col rounded bg-slate-50 hover:bg-slate-100 active:bg-slate-50"
                    >
                      <div class="space-y-2 p-3 text-sm">
                        <div class="h-1.5 w-8 rounded bg-emerald-400"></div>
                        <p>Logo Design</p>
                      </div>
                    </a>
                  </div>
                </div>

                <div class="space-y-4 rounded-xl border p-5">
                  <div>
                    <h4 class="mb-1 flex items-center justify-between space-x-2 font-semibold">
                      <span>5 Clean Logos</span>
                      <a
                        href="javascript:void(0)"
                        class="text-sm font-medium text-blue-600 transition hover:text-blue-700"
                      >
                        <svg
                          class="hi-solid hi-external-link inline-block h-5 w-5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                          <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                        </svg>
                      </a>
                    </h4>
                    <h5 class="text-sm text-slate-600">
                      Project for
                      <a
                        href="javascript:void(0)"
                        class="font-medium text-blue-600 transition hover:text-blue-700"
                      >
                        Alex Saunders
                      </a>
                    </h5>
                  </div>
                  <div class="space-y-3">
                    <a
                      href="javascript:void(0)"
                      class="flex flex-col rounded bg-slate-50 hover:bg-slate-100 active:bg-slate-50"
                    >
                      <div class="space-y-2 p-3 text-sm">
                        <div class="h-1.5 w-8 rounded bg-emerald-400"></div>
                        <p>Exploring concepts</p>
                      </div>
                    </a>
                    <a
                      href="javascript:void(0)"
                      class="flex flex-col rounded bg-slate-50 hover:bg-slate-100 active:bg-slate-50"
                    >
                      <div class="space-y-2 p-3 text-sm">
                        <div class="h-1.5 w-8 rounded bg-orange-400"></div>
                        <p>Main Layout</p>
                      </div>
                    </a>
                    <a
                      href="javascript:void(0)"
                      class="flex flex-col rounded bg-slate-50 hover:bg-slate-100 active:bg-slate-50"
                    >
                      <div class="space-y-2 p-3 text-sm">
                        <div class="h-1.5 w-8 rounded bg-orange-400"></div>
                        <p>Implement designs</p>
                        <div class="space-x-2 text-slate-400">
                          <span>
                            <svg
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                              class="hi-solid hi-annotation inline-block h-5 w-5"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z"
                                clip-rule="evenodd"
                              ></path>
                            </svg>
                            2
                          </span>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>

                <div class="space-y-4 rounded-xl border p-5">
                  <div>
                    <h4 class="mb-1 flex items-center justify-between space-x-2 font-semibold">
                      <span>SEO Marketing</span>
                      <a
                        href="javascript:void(0)"
                        class="text-sm font-medium text-blue-600 transition hover:text-blue-700"
                      >
                        <svg
                          class="hi-solid hi-external-link inline-block h-5 w-5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                          <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                        </svg>
                      </a>
                    </h4>
                    <h5 class="text-sm text-slate-600">
                      Project for
                      <a
                        href="javascript:void(0)"
                        class="font-medium text-blue-600 transition hover:text-blue-700"
                      >
                        Anna Doe
                      </a>
                    </h5>
                  </div>
                  <div class="space-y-3">
                    <a
                      href="javascript:void(0)"
                      class="flex flex-col rounded bg-slate-50 hover:bg-slate-100 active:bg-slate-50"
                    >
                      <div class="space-y-2 p-3 text-sm">
                        <div class="h-1.5 w-8 rounded bg-orange-400"></div>
                        <p>Writing posts</p>
                        <div class="space-x-2 text-slate-400">
                          <span>
                            <svg
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                              class="hi-solid hi-annotation inline-block h-5 w-5"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z"
                                clip-rule="evenodd"
                              ></path>
                            </svg>
                            2
                          </span>
                        </div>
                      </div>
                    </a>
                    <a
                      href="javascript:void(0)"
                      class="flex flex-col rounded bg-slate-50 hover:bg-slate-100 active:bg-slate-50"
                    >
                      <div class="space-y-2 p-3 text-sm">
                        <div class="h-1.5 w-8 rounded bg-emerald-400"></div>
                        <p>Improving website markup</p>
                        <div class="space-x-2 text-slate-400">
                          <span>
                            <svg
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                              class="hi-solid hi-annotation inline-block h-5 w-5"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z"
                                clip-rule="evenodd"
                              ></path>
                            </svg>
                            6
                          </span>
                        </div>
                      </div>
                    </a>
                    <a
                      href="javascript:void(0)"
                      class="flex flex-col rounded bg-slate-50 hover:bg-slate-100 active:bg-slate-50"
                    >
                      <div class="space-y-2 p-3 text-sm">
                        <div class="h-1.5 w-8 rounded bg-purple-400"></div>
                        <p>Best Practices</p>
                        <div class="space-x-2 text-slate-400">
                          <svg
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                            class="hi-solid hi-eye inline-block h-5 w-5"
                          >
                            <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
                            <path
                              fill-rule="evenodd"
                              d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                          <span>
                            <svg
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                              class="hi-solid hi-annotation inline-block h-5 w-5"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z"
                                clip-rule="evenodd"
                              ></path>
                            </svg>
                            7
                          </span>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>

                <div class="space-y-4 rounded-xl border p-5">
                  <div>
                    <h4 class="mb-1 flex items-center justify-between space-x-2 font-semibold">
                      <span>Mobile App</span>
                      <a
                        href="javascript:void(0)"
                        class="text-sm font-medium text-blue-600 transition hover:text-blue-700"
                      >
                        <svg
                          class="hi-solid hi-external-link inline-block h-5 w-5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                          <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                        </svg>
                      </a>
                    </h4>
                    <h5 class="text-sm text-slate-600">
                      Project for
                      <a
                        href="javascript:void(0)"
                        class="font-medium text-blue-600 transition hover:text-blue-700"
                      >
                        John Smith
                      </a>
                    </h5>
                  </div>
                  <div class="space-y-3">
                    <a
                      href="javascript:void(0)"
                      class="flex flex-col rounded bg-slate-50 hover:bg-slate-100 active:bg-slate-50"
                    >
                      <div class="space-y-2 p-3 text-sm">
                        <div class="h-1.5 w-8 rounded bg-orange-400"></div>
                        <p>Prototype</p>
                      </div>
                    </a>
                    <a
                      href="javascript:void(0)"
                      class="flex flex-col rounded bg-slate-50 hover:bg-slate-100 active:bg-slate-50"
                    >
                      <div class="space-y-2 p-3 text-sm">
                        <div class="h-1.5 w-8 rounded bg-pink-400"></div>
                        <p>Platforms</p>
                        <div class="space-x-2 text-slate-400">
                          <svg
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                            class="hi-solid hi-eye inline-block h-5 w-5"
                          >
                            <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
                            <path
                              fill-rule="evenodd"
                              d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                          <span>
                            <svg
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                              class="hi-solid hi-annotation inline-block h-5 w-5"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z"
                                clip-rule="evenodd"
                              ></path>
                            </svg>
                            6
                          </span>
                        </div>
                      </div>
                    </a>
                    <a
                      href="javascript:void(0)"
                      class="flex flex-col rounded bg-slate-50 hover:bg-slate-100 active:bg-slate-50"
                    >
                      <div class="space-y-2 p-3 text-sm">
                        <div class="h-1.5 w-8 rounded bg-pink-400"></div>
                        <p>Logo Design</p>
                        <div class="space-x-2 text-slate-400">
                          <svg
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                            class="hi-solid hi-eye inline-block h-5 w-5"
                          >
                            <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
                            <path
                              fill-rule="evenodd"
                              d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                          <span>
                            <svg
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                              class="hi-solid hi-annotation inline-block h-5 w-5"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z"
                                clip-rule="evenodd"
                              ></path>
                            </svg>
                            4
                          </span>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 class="mb-2 text-3xl font-semibold">Customers</h2>
              <h3 class="mb-8 text-sm font-medium text-slate-500">
                You've gained
                <span class="font-semibold">3 new customers</span> today,
                amazing!
              </h3>
              <div class="grid grid-cols-1 gap-4 md:grid-cols-3 lg:gap-8">
                <a
                  href="javascript:void(0)"
                  class="flex flex-col overflow-hidden rounded-2xl border bg-white hover:border-slate-300 active:border-slate-200"
                >
                  <div class="w-full grow p-5 text-center lg:p-6">
                    <img
                      src="https://images.unsplash.com/photo-1567186937675-a5131c8a89ea?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=160&ixid=MXwxfDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=160"
                      alt="User Avatar"
                      class="mb-4 inline-block h-16 w-16 rounded-full"
                    />
                    <h4 class="font-semibold">Jeremy Theodore</h4>
                    <p class="text-sm font-medium text-slate-500">
                      j.theodore@example.com
                    </p>
                  </div>
                  <div class="flex w-full items-center justify-between space-x-2 border-t border-slate-100 py-4 px-5 text-sm font-medium lg:px-6">
                    <span>
                      Invited you to start
                      <span class="font-semibold">Landing Illustrations</span>
                    </span>
                    <svg
                      class="hi-solid hi-arrow-right inline-block h-5 w-5 text-blue-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                </a>

                <a
                  href="javascript:void(0)"
                  class="flex flex-col overflow-hidden rounded-2xl border bg-white hover:border-slate-300 active:border-slate-200"
                >
                  <div class="w-full grow p-5 text-center lg:p-6">
                    <img
                      src="https://images.unsplash.com/photo-1514846326710-096e4a8035e0?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=160&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY2MjYzODYzMg&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=160"
                      alt="User Avatar"
                      class="mb-4 inline-block h-16 w-16 rounded-full"
                    />
                    <h4 class="font-semibold">Sue Keller</h4>
                    <p class="text-sm font-medium text-slate-500">
                      s.keller@example.com
                    </p>
                  </div>
                  <div class="flex w-full items-center justify-between space-x-2 border-t border-slate-100 py-4 px-5 text-sm font-medium lg:px-6">
                    <span>
                      Invited you to start
                      <span class="font-semibold">Dashboard Design</span>
                    </span>
                    <svg
                      class="hi-solid hi-arrow-right inline-block h-5 w-5 text-blue-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                </a>

                <a
                  href="javascript:void(0)"
                  class="flex flex-col overflow-hidden rounded-2xl border bg-white hover:border-slate-300 active:border-slate-200"
                >
                  <div class="w-full grow p-5 text-center lg:p-6">
                    <img
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=160&ixid=MXwxfDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=160"
                      alt="User Avatar"
                      class="mb-4 inline-block h-16 w-16 rounded-full"
                    />
                    <h4 class="font-semibold">Alex Saunders</h4>
                    <p class="text-sm font-medium text-slate-500">
                      a.sanders@example.com
                    </p>
                  </div>
                  <div class="flex w-full items-center justify-between space-x-2 border-t border-slate-100 py-4 px-5 text-sm font-medium lg:px-6">
                    <span>
                      Invited you to start
                      <span class="font-semibold">5 Clean Logos</span>
                    </span>
                    <svg
                      class="hi-solid hi-arrow-right inline-block h-5 w-5 text-blue-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </main>

        <footer
          id="page-footer"
          class="flex grow-0 items-center border-t border-slate-100"
        >
          <div class="container mx-auto flex flex-col space-y-2 px-4 py-6 text-center text-sm font-medium text-slate-600 md:flex-row md:justify-between md:space-y-0 md:text-left lg:px-8 xl:max-w-7xl">
            <div>
              © <span class="font-semibold">tailapp</span>
            </div>
            <div class="inline-flex items-center justify-center">
              <span>Crafted with</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                class="mx-1 h-4 w-4 text-red-600"
              >
                <path d="M9.653 16.915l-.005-.003-.019-.01a20.759 20.759 0 01-1.162-.682 22.045 22.045 0 01-2.582-1.9C4.045 12.733 2 10.352 2 7.5a4.5 4.5 0 018-2.828A4.5 4.5 0 0118 7.5c0 2.852-2.044 5.233-3.885 6.82a22.049 22.049 0 01-3.744 2.582l-.019.01-.005.003h-.002a.739.739 0 01-.69.001l-.002-.001z"></path>
              </svg>
              <span>
                by
                <a
                  class="font-medium text-blue-600 transition hover:text-blue-700"
                  href="https://pixelcave.com"
                  target="_blank"
                >
                  pixelcave
                </a>
              </span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default page;
