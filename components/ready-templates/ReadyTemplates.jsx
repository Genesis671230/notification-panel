import React from "react";

const ReadyTemplates = () => {
  return (
    <div className="">
      <div
        // x-data="{ mobileSidebarOpen: false, desktopSidebarOpen: true, darkMode: false, userDropdownOpen: false }"
        // x-bind:class="{ 'dark': darkMode }"
      >
        <div
          id="page-container"
          class="mx-auto relative flex h-screen overflow-scroll w-full min-w-[320px] flex-col bg-gray-100 transition-all duration-300 ease-out dark:bg-gray-800 dark:text-gray-200 lg:pl-64"
        //   x-bind:class="{ 'lg:pl-64': desktopSidebarOpen }"
        >
          <nav
            id="page-sidebar"
            class="absolute top-0 bottom-0 left-0 z-50 flex h-full w-full flex-col border-r border-gray-200 bg-white transition-transform duration-300 ease-out dark:border-gray-700/75 dark:bg-gray-900 lg:w-64"
    //         x-bind:class="{
    //   '-translate-x-full': !mobileSidebarOpen,
    //   'translate-x-0': mobileSidebarOpen,
    //   'lg:-translate-x-full': !desktopSidebarOpen,
    //   'lg:translate-x-0': desktopSidebarOpen,
    // }"
            aria-label="Main Sidebar Navigation"
          >
            <div class="flex h-16 w-full flex-none items-center justify-between px-5 shadow-sm">
              <a
                href="javascript:void(0)"
                class="group inline-flex items-center space-x-2 font-semibold text-gray-800 hover:text-gray-600 dark:text-gray-200 dark:hover:text-gray-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="hi-outline hi-video-camera inline-block h-6 w-6 text-rose-500 transition group-hover:scale-110"
                >
                  <path
                    stroke-linecap="round"
                    d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z"
                  />
                </svg>
                <span>TailTube</span>
              </a>

              <div class="flex items-center">
                <button
                  type="button"
                  class="inline-flex items-center justify-center leading-5 text-gray-800 hover:text-gray-600 focus:outline-none active:text-gray-800 dark:text-gray-200 dark:hover:text-gray-300 dark:active:text-gray-200"
                //   x-on:click="darkMode = !darkMode"
                >
                  <svg
                    x-show="!darkMode"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="hi-outline hi-moon inline-block h-5 w-5"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
                    />
                  </svg>
                  <svg
                    x-cloak
                    x-show="darkMode"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="hi-outline hi-sun inline-block h-5 w-5"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                    />
                  </svg>
                </button>

                <button
                  type="button"
                  class="ml-3 inline-flex items-center justify-center leading-5 text-gray-800 hover:text-rose-600 focus:outline-none active:text-rose-800 dark:text-gray-200 dark:hover:text-rose-300 dark:active:text-rose-200 lg:hidden"
                //   x-on:click="mobileSidebarOpen = false"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="hi-solid hi-x-mark inline-block h-5 w-5"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <div class="overflow-y-auto">
              <div class="w-full py-4">
                <nav class="space-y-1">
                  <a
                    href="javascript:void(0)"
                    class="group flex items-center space-x-2 border-r-4 border-rose-400 bg-rose-50 px-5 py-0.5 text-sm font-medium text-rose-900 dark:bg-rose-800 dark:text-rose-200"
                  >
                    <span class="flex flex-none items-center opacity-75">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="hi-outline hi-home inline-block h-6 w-6 text-rose-600 dark:text-rose-300"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                        />
                      </svg>
                    </span>
                    <span class="grow py-2">Home</span>
                  </a>
                  <a
                    href="javascript:void(0)"
                    class="group flex items-center space-x-2 px-5 py-0.5 text-sm font-medium text-gray-700 hover:bg-rose-50 hover:text-rose-900 active:bg-gray-50 dark:text-gray-200 dark:hover:bg-rose-800 dark:hover:text-rose-200"
                  >
                    <span class="flex flex-none items-center opacity-75">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="hi-outline hi-globe-americas inline-block h-6 w-6 text-gray-400 group-hover:text-rose-600 dark:group-hover:text-rose-300"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M6.115 5.19l.319 1.913A6 6 0 008.11 10.36L9.75 12l-.387.775c-.217.433-.132.956.21 1.298l1.348 1.348c.21.21.329.497.329.795v1.089c0 .426.24.815.622 1.006l.153.076c.433.217.956.132 1.298-.21l.723-.723a8.7 8.7 0 002.288-4.042 1.087 1.087 0 00-.358-1.099l-1.33-1.108c-.251-.21-.582-.299-.905-.245l-1.17.195a1.125 1.125 0 01-.98-.314l-.295-.295a1.125 1.125 0 010-1.591l.13-.132a1.125 1.125 0 011.3-.21l.603.302a.809.809 0 001.086-1.086L14.25 7.5l1.256-.837a4.5 4.5 0 001.528-1.732l.146-.292M6.115 5.19A9 9 0 1017.18 4.64M6.115 5.19A8.965 8.965 0 0112 3c1.929 0 3.716.607 5.18 1.64"
                        />
                      </svg>
                    </span>
                    <span class="grow py-2">Explore</span>
                  </a>
                  <a
                    href="javascript:void(0)"
                    class="group flex items-center space-x-2 px-5 py-0.5 text-sm font-medium text-gray-700 hover:bg-rose-50 hover:text-rose-900 active:bg-gray-50 dark:text-gray-200 dark:hover:bg-rose-800 dark:hover:text-rose-200"
                  >
                    <span class="flex flex-none items-center opacity-75">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="hi-outline hi-clipboard-list inline-block h-6 w-6 text-gray-400 group-hover:text-rose-600 dark:group-hover:text-rose-300"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                        />
                      </svg>
                    </span>
                    <span class="grow py-2">Subscriptions</span>
                  </a>
                  <div class="px-5 pt-6 pb-2 text-xs font-medium uppercase tracking-wider text-gray-400">
                    Personal
                  </div>
                  <a
                    href="javascript:void(0)"
                    class="group flex items-center space-x-2 px-5 py-0.5 text-sm font-medium text-gray-700 hover:bg-rose-50 hover:text-rose-900 active:bg-gray-50 dark:text-gray-200 dark:hover:bg-rose-800 dark:hover:text-rose-200"
                  >
                    <span class="flex flex-none items-center opacity-75">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="hi-outline hi-square-2x2 inline-block h-6 w-6 text-gray-400 group-hover:text-rose-600 dark:group-hover:text-rose-300"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
                        />
                      </svg>
                    </span>
                    <span class="grow py-2">Library</span>
                  </a>
                  <a
                    href="javascript:void(0)"
                    class="group flex items-center space-x-2 px-5 py-0.5 text-sm font-medium text-gray-700 hover:bg-rose-50 hover:text-rose-900 active:bg-gray-50 dark:text-gray-200 dark:hover:bg-rose-800 dark:hover:text-rose-200"
                  >
                    <span class="flex flex-none items-center opacity-75">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="hi-outline hi-queue-list inline-block h-6 w-6 text-gray-400 group-hover:text-rose-600 dark:group-hover:text-rose-300"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z"
                        />
                      </svg>
                    </span>
                    <span class="grow py-2">History</span>
                  </a>
                  <a
                    href="javascript:void(0)"
                    class="group flex items-center space-x-2 px-5 py-0.5 text-sm font-medium text-gray-700 hover:bg-rose-50 hover:text-rose-900 active:bg-gray-50 dark:text-gray-200 dark:hover:bg-rose-800 dark:hover:text-rose-200"
                  >
                    <span class="flex flex-none items-center opacity-75">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="hi-outline hi-play-circle inline-block h-6 w-6 text-gray-400 group-hover:text-rose-600 dark:group-hover:text-rose-300"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z"
                        />
                      </svg>
                    </span>
                    <span class="grow py-2">Your Videos</span>
                    <span class="rounded-full bg-rose-400/10 px-2 py-1 text-xs font-medium leading-4 text-rose-700 transition dark:bg-rose-400/20 dark:text-rose-200 dark:group-hover:bg-rose-400/30">
                      26
                    </span>
                  </a>
                  <a
                    href="javascript:void(0)"
                    class="group flex items-center space-x-2 px-5 py-0.5 text-sm font-medium text-gray-700 hover:bg-rose-50 hover:text-rose-900 active:bg-gray-50 dark:text-gray-200 dark:hover:bg-rose-800 dark:hover:text-rose-200"
                  >
                    <span class="flex flex-none items-center opacity-75">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="hi-outline hi-clock inline-block h-6 w-6 text-gray-400 group-hover:text-rose-600 dark:group-hover:text-rose-300"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </span>
                    <span class="grow py-2">Watch Later</span>
                    <span class="rounded-full bg-rose-400/10 px-2 py-1 text-xs font-medium leading-4 text-rose-700 transition dark:bg-rose-400/20 dark:text-rose-200 dark:group-hover:bg-rose-400/30">
                      12
                    </span>
                  </a>
                  <a
                    href="javascript:void(0)"
                    class="group flex items-center space-x-2 px-5 py-0.5 text-sm font-medium text-gray-700 hover:bg-rose-50 hover:text-rose-900 active:bg-gray-50 dark:text-gray-200 dark:hover:bg-rose-800 dark:hover:text-rose-200"
                  >
                    <span class="flex flex-none items-center opacity-75">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="hi-outline hi-heart inline-block h-6 w-6 text-gray-400 group-hover:text-rose-600 dark:group-hover:text-rose-300"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                        />
                      </svg>
                    </span>
                    <span class="grow py-2">Liked Videos</span>
                    <span class="rounded-full bg-rose-400/10 px-2 py-1 text-xs font-medium leading-4 text-rose-700 transition dark:bg-rose-400/20 dark:text-rose-200 dark:group-hover:bg-rose-400/30">
                      39
                    </span>
                  </a>
                  <div class="px-5 pt-6 pb-2 text-xs font-medium uppercase tracking-wider text-gray-400">
                    Subscriptions
                  </div>
                  <a
                    href="javascript:void(0)"
                    class="group flex items-center space-x-2 px-5 py-0.5 text-sm font-medium text-gray-700 hover:bg-rose-50 hover:text-rose-900 active:bg-gray-50 dark:text-gray-200 dark:hover:bg-rose-800 dark:hover:text-rose-200"
                  >
                    <span class="flex flex-none items-center opacity-75">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="hi-outline hi-at-symbol inline-block h-6 w-6 text-gray-400 group-hover:text-rose-600 dark:group-hover:text-rose-300"
                      >
                        <path
                          stroke-linecap="round"
                          d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25"
                        />
                      </svg>
                    </span>
                    <span class="grow py-2">Nature Moments</span>
                  </a>
                  <a
                    href="javascript:void(0)"
                    class="group flex items-center space-x-2 px-5 py-0.5 text-sm font-medium text-gray-700 hover:bg-rose-50 hover:text-rose-900 active:bg-gray-50 dark:text-gray-200 dark:hover:bg-rose-800 dark:hover:text-rose-200"
                  >
                    <span class="flex flex-none items-center opacity-75">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="hi-outline hi-at-symbol inline-block h-6 w-6 text-gray-400 group-hover:text-rose-600 dark:group-hover:text-rose-300"
                      >
                        <path
                          stroke-linecap="round"
                          d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25"
                        />
                      </svg>
                    </span>
                    <span class="grow py-2">Animals Kingdom</span>
                  </a>
                  <a
                    href="javascript:void(0)"
                    class="group flex items-center space-x-2 px-5 py-0.5 text-sm font-medium text-gray-700 hover:bg-rose-50 hover:text-rose-900 active:bg-gray-50 dark:text-gray-200 dark:hover:bg-rose-800 dark:hover:text-rose-200"
                  >
                    <span class="flex flex-none items-center opacity-75">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="hi-outline hi-at-symbol inline-block h-6 w-6 text-gray-400 group-hover:text-rose-600 dark:group-hover:text-rose-300"
                      >
                        <path
                          stroke-linecap="round"
                          d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25"
                        />
                      </svg>
                    </span>
                    <span class="grow py-2">Inspiration Strike</span>
                  </a>
                  <a
                    href="javascript:void(0)"
                    class="group flex items-center space-x-2 px-5 py-0.5 text-sm font-medium text-gray-700 hover:bg-rose-50 hover:text-rose-900 active:bg-gray-50 dark:text-gray-200 dark:hover:bg-rose-800 dark:hover:text-rose-200"
                  >
                    <span class="flex flex-none items-center opacity-75">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="hi-outline hi-at-symbol inline-block h-6 w-6 text-gray-400 group-hover:text-rose-600 dark:group-hover:text-rose-300"
                      >
                        <path
                          stroke-linecap="round"
                          d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25"
                        />
                      </svg>
                    </span>
                    <span class="grow py-2">Into The Wild</span>
                  </a>
                </nav>
              </div>
            </div>
          </nav>

          <header
            id="page-header"
            class="fixed top-0 left-0 right-0 z-30 flex h-16 flex-none items-center bg-white shadow-sm transition-all duration-300 ease-out dark:bg-gray-900 lg:pl-64"
            // x-bind:class="{ 'lg:pl-64': desktopSidebarOpen }"
          >
            <div class="mx-auto flex w-full max-w-7xl justify-between px-4 lg:px-8">
              <div class="flex items-center">
                <div class="mr-2 lg:hidden">
                  <button
                    type="button"
                    class="inline-flex items-center justify-center space-x-2 rounded border border-gray-300 bg-white px-3 py-2 font-semibold leading-6 text-gray-800 shadow-sm hover:border-gray-300 hover:bg-gray-100 hover:text-gray-800 hover:shadow focus:outline-none focus:ring focus:ring-gray-500 focus:ring-opacity-25 active:border-white active:bg-white active:shadow-none dark:border-gray-700/75 dark:bg-gray-900 dark:text-gray-200 dark:hover:border-gray-700 dark:hover:bg-gray-800 dark:hover:text-gray-200 dark:focus:ring-gray-700 dark:active:border-gray-900 dark:active:bg-gray-900"
                    // x-on:click="mobileSidebarOpen = true"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      class="hi-solid hi-menu-alt-1 inline-block h-5 w-5"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </button>
                </div>

                <div class="hidden lg:block">
                  <button
                    type="button"
                    class="inline-flex items-center justify-center space-x-2 rounded border border-gray-300 bg-white px-3 py-2 font-semibold leading-6 text-gray-800 shadow-sm hover:border-gray-300 hover:bg-gray-100 hover:text-gray-800 hover:shadow focus:outline-none focus:ring focus:ring-gray-500 focus:ring-opacity-25 active:border-white active:bg-white active:shadow-none dark:border-gray-700/75 dark:bg-gray-900 dark:text-gray-200 dark:hover:border-gray-700 dark:hover:bg-gray-800 dark:hover:text-gray-200 dark:focus:ring-gray-700 dark:active:border-gray-900 dark:active:bg-gray-900"
                    // x-on:click="desktopSidebarOpen = !desktopSidebarOpen"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      class="hi-solid hi-menu-alt-1 inline-block h-5 w-5"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              <div class="flex items-center">
                <div class="hidden sm:block">
                  <form onsubmit="return false;">
                    <div class="relative">
                      <input
                        class="block w-96 rounded border border-gray-300 py-2 pr-10 text-sm leading-5 focus:border-rose-500 focus:ring focus:ring-rose-500 focus:ring-opacity-50 dark:border-gray-700 dark:bg-gray-800 dark:placeholder:text-gray-400 dark:focus:border-rose-400 dark:focus:ring-rose-400"
                        type="text"
                        id="search"
                        name="search"
                        placeholder="Search.."
                      />
                      <div class="pointer-events-none absolute inset-y-0 right-0 my-px mr-px flex w-10 items-center justify-center rounded-r text-gray-300">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          class="hi-solid hi-magnifying-glass h-5 w-5"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </div>
                    </div>
                  </form>
                </div>

                <a
                  href="javascript:void(0)"
                  class="group inline-flex items-center space-x-2 font-semibold text-gray-800 hover:text-gray-600 sm:hidden"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="hi-outline hi-video-camera inline-block h-6 w-6 text-rose-500 transition group-hover:scale-110"
                  >
                    <path
                      stroke-linecap="round"
                      d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z"
                    />
                  </svg>
                </a>
              </div>

              <div class="flex items-center space-x-2">
                <div class="relative inline-block">
                  <button
                    type="button"
                    class="inline-flex items-center justify-center rounded border border-gray-300 bg-white px-3 py-2 text-sm font-semibold leading-5 text-gray-800 shadow-sm hover:border-gray-300 hover:bg-gray-100 hover:text-gray-800 hover:shadow focus:outline-none focus:ring focus:ring-gray-500 focus:ring-opacity-25 active:border-white active:bg-white active:shadow-none dark:border-gray-700/75 dark:bg-gray-900 dark:text-gray-200 dark:hover:border-gray-700 dark:hover:bg-gray-800 dark:hover:text-gray-200 dark:focus:ring-gray-700 dark:active:border-gray-900 dark:active:bg-gray-900"
                    id="tk-dropdown-layouts-user"
                    aria-haspopup="true"
                    // x-bind:aria-expanded="userDropdownOpen"
                    // x-on:click="userDropdownOpen = true"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      class="hi-solid hi-user-circle inline-block h-5 w-5 sm:hidden"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-5.5-2.5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zM10 12a5.99 5.99 0 00-4.793 2.39A6.483 6.483 0 0010 16.5a6.483 6.483 0 004.793-2.11A5.99 5.99 0 0010 12z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <span class="hidden sm:inline">John</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      class="hi-solid hi-chevron-down ml-1 hidden h-5 w-5 opacity-50 sm:inline-block"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </button>

                  <div
                    // x-cloak
                    // x-show="userDropdownOpen"
                    // x-transition:enter="transition ease-out duration-150"
                    // x-transition:enter-start="transform opacity-0 scale-75"
                    // x-transition:enter-end="transform opacity-100 scale-100"
                    // x-transition:leave="transition ease-in duration-100"
                    // x-transition:leave-start="transform opacity-100 scale-100"
                    // x-transition:leave-end="transform opacity-0 scale-75"
                    //   x-on:click.outside="userDropdownOpen = false"
                    role="menu"
                    aria-labelledby="tk-dropdown-layouts-user"
                    class="z-1 absolute right-0 mt-2 w-48 origin-top-right rounded shadow-xl"
                  >
                    <div class="divide-y divide-gray-100 rounded bg-white ring-1 ring-black ring-opacity-5 dark:divide-gray-700 dark:bg-gray-900 dark:ring-gray-700">
                      <div class="space-y-1 p-2">
                        <a
                          role="menuitem"
                          href="javascript:void(0)"
                          class="flex items-center space-x-2 rounded px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-700 focus:bg-gray-100 focus:text-gray-700 focus:outline-none dark:text-gray-200 dark:hover:bg-gray-800 dark:hover:text-gray-100 dark:focus:bg-gray-800 dark:focus:text-gray-100"
                        >
                          <span>Your Channel</span>
                        </a>
                        <a
                          role="menuitem"
                          href="javascript:void(0)"
                          class="flex items-center space-x-2 rounded px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-700 focus:bg-gray-100 focus:text-gray-700 focus:outline-none dark:text-gray-200 dark:hover:bg-gray-800 dark:hover:text-gray-100 dark:focus:bg-gray-800 dark:focus:text-gray-100"
                        >
                          <span>Video Studio</span>
                        </a>
                      </div>
                      <div class="space-y-1 p-2">
                        <a
                          role="menuitem"
                          href="javascript:void(0)"
                          class="flex items-center space-x-2 rounded px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-700 focus:bg-gray-100 focus:text-gray-700 focus:outline-none dark:text-gray-200 dark:hover:bg-gray-800 dark:hover:text-gray-100 dark:focus:bg-gray-800 dark:focus:text-gray-100"
                        >
                          <span>Settings</span>
                        </a>
                      </div>
                      <div class="space-y-1 p-2">
                        <form onsubmit="return false;">
                          <button
                            type="submit"
                            role="menuitem"
                            class="flex w-full items-center space-x-2 rounded px-3 py-2 text-left text-sm font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-700 focus:bg-gray-100 focus:text-gray-700 focus:outline-none dark:text-gray-200 dark:hover:bg-gray-800 dark:hover:text-gray-100 dark:focus:bg-gray-800 dark:focus:text-gray-100"
                          >
                            <span>Sign out</span>
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </header>

          <main
            id="page-content"
            class="flex max-w-full flex-auto flex-col pt-16"
          >
            <div class="bg-gray-50 shadow-sm dark:bg-gray-900/50">
              <div class="mx-auto w-full max-w-7xl px-4 py-2 lg:px-8 lg:py-5">
                <nav class="-m-0.5">
                  <a
                    href="javascript:void(0)"
                    class="m-0.5 inline-flex rounded border bg-white px-2 py-1.5 text-xs font-medium leading-4 text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-rose-600 active:border-gray-400 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-300 dark:hover:border-gray-700 dark:hover:bg-gray-900/75 dark:hover:text-rose-300 dark:active:border-gray-600"
                  >
                    All
                  </a>
                  <a
                    href="javascript:void(0)"
                    class="m-0.5 inline-flex rounded border border-gray-300 bg-gray-50 px-2 py-1.5 text-xs font-medium leading-4 text-rose-600 dark:border-gray-700 dark:bg-gray-800 dark:text-rose-300"
                  >
                    Nature
                  </a>
                  <a
                    href="javascript:void(0)"
                    class="m-0.5 inline-flex rounded border bg-white px-2 py-1.5 text-xs font-medium leading-4 text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-rose-600 active:border-gray-400 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-300 dark:hover:border-gray-700 dark:hover:bg-gray-900/75 dark:hover:text-rose-300 dark:active:border-gray-600"
                  >
                    Gaming
                  </a>
                  <a
                    href="javascript:void(0)"
                    class="m-0.5 inline-flex rounded border bg-white px-2 py-1.5 text-xs font-medium leading-4 text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-rose-600 active:border-gray-400 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-300 dark:hover:border-gray-700 dark:hover:bg-gray-900/75 dark:hover:text-rose-300 dark:active:border-gray-600"
                  >
                    Music
                  </a>
                  <a
                    href="javascript:void(0)"
                    class="m-0.5 inline-flex rounded border border-gray-300 bg-gray-50 px-2 py-1.5 text-xs font-medium leading-4 text-rose-600 dark:border-gray-700 dark:bg-gray-800 dark:text-rose-300"
                  >
                    Animals
                  </a>
                  <a
                    href="javascript:void(0)"
                    class="m-0.5 inline-flex rounded border bg-white px-2 py-1.5 text-xs font-medium leading-4 text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-rose-600 active:border-gray-400 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-300 dark:hover:border-gray-700 dark:hover:bg-gray-900/75 dark:hover:text-rose-300 dark:active:border-gray-600"
                  >
                    Live
                  </a>
                  <a
                    href="javascript:void(0)"
                    class="m-0.5 inline-flex rounded border bg-white px-2 py-1.5 text-xs font-medium leading-4 text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-rose-600 active:border-gray-400 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-300 dark:hover:border-gray-700 dark:hover:bg-gray-900/75 dark:hover:text-rose-300 dark:active:border-gray-600"
                  >
                    Web Development
                  </a>
                  <a
                    href="javascript:void(0)"
                    class="m-0.5 inline-flex rounded border bg-white px-2 py-1.5 text-xs font-medium leading-4 text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-rose-600 active:border-gray-400 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-300 dark:hover:border-gray-700 dark:hover:bg-gray-900/75 dark:hover:text-rose-300 dark:active:border-gray-600"
                  >
                    Web Design
                  </a>
                  <a
                    href="javascript:void(0)"
                    class="m-0.5 inline-flex rounded border bg-white px-2 py-1.5 text-xs font-medium leading-4 text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-rose-600 active:border-gray-400 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-300 dark:hover:border-gray-700 dark:hover:bg-gray-900/75 dark:hover:text-rose-300 dark:active:border-gray-600"
                  >
                    Business
                  </a>
                  <a
                    href="javascript:void(0)"
                    class="m-0.5 inline-flex rounded border bg-white px-2 py-1.5 text-xs font-medium leading-4 text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-rose-600 active:border-gray-400 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-300 dark:hover:border-gray-700 dark:hover:bg-gray-900/75 dark:hover:text-rose-300 dark:active:border-gray-600"
                  >
                    Hiking
                  </a>
                  <a
                    href="javascript:void(0)"
                    class="m-0.5 inline-flex rounded border bg-white px-2 py-1.5 text-xs font-medium leading-4 text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-rose-600 active:border-gray-400 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-300 dark:hover:border-gray-700 dark:hover:bg-gray-900/75 dark:hover:text-rose-300 dark:active:border-gray-600"
                  >
                    Inspiration
                  </a>
                  <a
                    href="javascript:void(0)"
                    class="m-0.5 inline-flex rounded border bg-white px-2 py-1.5 text-xs font-medium leading-4 text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-rose-600 active:border-gray-400 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-300 dark:hover:border-gray-700 dark:hover:bg-gray-900/75 dark:hover:text-rose-300 dark:active:border-gray-600"
                  >
                    Motivation
                  </a>
                  <a
                    href="javascript:void(0)"
                    class="m-0.5 inline-flex rounded border bg-white px-2 py-1.5 text-xs font-medium leading-4 text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-rose-600 active:border-gray-400 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-300 dark:hover:border-gray-700 dark:hover:bg-gray-900/75 dark:hover:text-rose-300 dark:active:border-gray-600"
                  >
                    Productivity
                  </a>
                </nav>
              </div>
            </div>

            <div class="mx-auto w-full max-w-7xl p-4 lg:p-8">
              <div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:gap-8 xl:grid-cols-4">
                <div>
                  <a href="javascript:void(0)" class="group relative block">
                    <div class="absolute inset-0 z-10 flex items-center justify-center rounded bg-gray-800/75 opacity-0 transition group-hover:opacity-100">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="hi-outline hi-play-circle inline-block h-6 w-6 text-white transition group-hover:scale-150 group-active:scale-125"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z"
                        />
                      </svg>
                    </div>
                    <div class="aspect-w-16 aspect-h-10">
                      <img
                        src="https://images.unsplash.com/photo-1465056836041-7f43ac27dcb5?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=350&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY2NTA1MDQ4Ng&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=560"
                        alt="Video Preview"
                        class="rounded"
                      />
                    </div>
                  </a>
                  <div class="py-3">
                    <h4 class="font-semibold">
                      <a
                        href="javascript:void(0)"
                        class="font-semibold transition hover:text-gray-700 dark:hover:text-gray-300"
                      >
                        The best roadtrip of our lives
                      </a>
                    </h4>
                    <h5 class="mb-2">
                      <a
                        href="javascript:void(0)"
                        class="text-sm font-medium text-gray-500 transition hover:text-rose-500 hover:underline hover:underline-offset-2 dark:text-gray-400 dark:hover:text-rose-300"
                      >
                        Into The Wild
                      </a>
                    </h5>
                    <p class="text-xs font-medium text-gray-500 dark:text-gray-400/75">
                      3,2k • 2 days ago
                    </p>
                  </div>
                </div>
                <div>
                  <a href="javascript:void(0)" class="group relative block">
                    <div class="absolute inset-0 z-10 flex items-center justify-center rounded bg-gray-800/75 opacity-0 transition group-hover:opacity-100">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="hi-outline hi-play-circle inline-block h-6 w-6 text-white transition group-hover:scale-150 group-active:scale-125"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z"
                        />
                      </svg>
                    </div>
                    <div class="aspect-w-16 aspect-h-10">
                      <img
                        src="https://images.unsplash.com/photo-1547314283-befb6cc5cf29?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=350&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY2NTA1MDQ4Ng&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=560"
                        alt="Video Preview"
                        class="rounded"
                      />
                    </div>
                  </a>
                  <div class="py-3">
                    <h4 class="font-semibold">
                      <a
                        href="javascript:void(0)"
                        class="font-semibold transition hover:text-gray-700 dark:hover:text-gray-300"
                      >
                        By the water
                      </a>
                    </h4>
                    <h5 class="mb-2">
                      <a
                        href="javascript:void(0)"
                        class="text-sm font-medium text-gray-500 transition hover:text-rose-500 hover:underline hover:underline-offset-2 dark:text-gray-400 dark:hover:text-rose-300"
                      >
                        Nature Moments
                      </a>
                    </h5>
                    <p class="text-xs font-medium text-gray-500 dark:text-gray-400/75">
                      17,2k • 2 days ago
                    </p>
                  </div>
                </div>
                <div>
                  <a href="javascript:void(0)" class="group relative block">
                    <div class="absolute inset-0 z-10 flex items-center justify-center rounded bg-gray-800/75 opacity-0 transition group-hover:opacity-100">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="hi-outline hi-play-circle inline-block h-6 w-6 text-white transition group-hover:scale-150 group-active:scale-125"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z"
                        />
                      </svg>
                    </div>
                    <div class="aspect-w-16 aspect-h-10">
                      <img
                        src="https://images.unsplash.com/photo-1519874950331-12655cb7ae70?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=350&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY2NTA1MDY3NQ&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=560"
                        alt="Video Preview"
                        class="rounded"
                      />
                    </div>
                  </a>
                  <div class="py-3">
                    <h4 class="font-semibold">
                      <a
                        href="javascript:void(0)"
                        class="font-semibold transition hover:text-gray-700 dark:hover:text-gray-300"
                      >
                        Tropical animals and their life
                      </a>
                    </h4>
                    <h5 class="mb-2">
                      <a
                        href="javascript:void(0)"
                        class="text-sm font-medium text-gray-500 transition hover:text-rose-500 hover:underline hover:underline-offset-2 dark:text-gray-400 dark:hover:text-rose-300"
                      >
                        Into The Wild
                      </a>
                    </h5>
                    <p class="text-xs font-medium text-gray-500 dark:text-gray-400/75">
                      2,7k • 3 days ago
                    </p>
                  </div>
                </div>
                <div>
                  <a href="javascript:void(0)" class="group relative block">
                    <div class="absolute inset-0 z-10 flex items-center justify-center rounded bg-gray-800/75 opacity-0 transition group-hover:opacity-100">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="hi-outline hi-play-circle inline-block h-6 w-6 text-white transition group-hover:scale-150 group-active:scale-125"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z"
                        />
                      </svg>
                    </div>
                    <div class="aspect-w-16 aspect-h-10">
                      <img
                        src="https://images.unsplash.com/photo-1584216514638-929205f5dd5e?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=350&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY2NTA1MDY3NQ&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=560"
                        alt="Video Preview"
                        class="rounded"
                      />
                    </div>
                  </a>
                  <div class="py-3">
                    <h4 class="font-semibold">
                      <a
                        href="javascript:void(0)"
                        class="font-semibold transition hover:text-gray-700 dark:hover:text-gray-300"
                      >
                        The sharks are real
                      </a>
                    </h4>
                    <h5 class="mb-2">
                      <a
                        href="javascript:void(0)"
                        class="text-sm font-medium text-gray-500 transition hover:text-rose-500 hover:underline hover:underline-offset-2 dark:text-gray-400 dark:hover:text-rose-300"
                      >
                        Nature Moments
                      </a>
                    </h5>
                    <p class="text-xs font-medium text-gray-500 dark:text-gray-400/75">
                      6,8k • 3 days ago
                    </p>
                  </div>
                </div>
                <div>
                  <a href="javascript:void(0)" class="group relative block">
                    <div class="absolute inset-0 z-10 flex items-center justify-center rounded bg-gray-800/75 opacity-0 transition group-hover:opacity-100">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="hi-outline hi-play-circle inline-block h-6 w-6 text-white transition group-hover:scale-150 group-active:scale-125"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z"
                        />
                      </svg>
                    </div>
                    <div class="aspect-w-16 aspect-h-10">
                      <img
                        src="https://images.unsplash.com/photo-1531804226530-70f8004aa44e?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=350&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY2NTA1MDQ4Nw&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=560"
                        alt="Video Preview"
                        class="rounded"
                      />
                    </div>
                  </a>
                  <div class="py-3">
                    <h4 class="font-semibold">
                      <a
                        href="javascript:void(0)"
                        class="font-semibold transition hover:text-gray-700 dark:hover:text-gray-300"
                      >
                        How to mountain hiking
                      </a>
                    </h4>
                    <h5 class="mb-2">
                      <a
                        href="javascript:void(0)"
                        class="text-sm font-medium text-gray-500 transition hover:text-rose-500 hover:underline hover:underline-offset-2 dark:text-gray-400 dark:hover:text-rose-300"
                      >
                        Nature Moments
                      </a>
                    </h5>
                    <p class="text-xs font-medium text-gray-500 dark:text-gray-400/75">
                      8,2k • 3 days ago
                    </p>
                  </div>
                </div>
                <div>
                  <a href="javascript:void(0)" class="group relative block">
                    <div class="absolute inset-0 z-10 flex items-center justify-center rounded bg-gray-800/75 opacity-0 transition group-hover:opacity-100">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="hi-outline hi-play-circle inline-block h-6 w-6 text-white transition group-hover:scale-150 group-active:scale-125"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z"
                        />
                      </svg>
                    </div>
                    <div class="aspect-w-16 aspect-h-10">
                      <img
                        src="https://images.unsplash.com/flagged/photo-1552035791-b3cc1632e933?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=350&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY2NTA1MDUzMQ&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=560"
                        alt="Video Preview"
                        class="rounded"
                      />
                    </div>
                  </a>
                  <div class="py-3">
                    <h4 class="font-semibold">
                      <a
                        href="javascript:void(0)"
                        class="font-semibold transition hover:text-gray-700 dark:hover:text-gray-300"
                      >
                        The great challenge
                      </a>
                    </h4>
                    <h5 class="mb-2">
                      <a
                        href="javascript:void(0)"
                        class="text-sm font-medium text-gray-500 transition hover:text-rose-500 hover:underline hover:underline-offset-2 dark:text-gray-400 dark:hover:text-rose-300"
                      >
                        Nature Moments
                      </a>
                    </h5>
                    <p class="text-xs font-medium text-gray-500 dark:text-gray-400/75">
                      7,3k • 2 days ago
                    </p>
                  </div>
                </div>
                <div>
                  <a href="javascript:void(0)" class="group relative block">
                    <div class="absolute inset-0 z-10 flex items-center justify-center rounded bg-gray-800/75 opacity-0 transition group-hover:opacity-100">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="hi-outline hi-play-circle inline-block h-6 w-6 text-white transition group-hover:scale-150 group-active:scale-125"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z"
                        />
                      </svg>
                    </div>
                    <div class="aspect-w-16 aspect-h-10">
                      <img
                        src="https://images.unsplash.com/photo-1571503929253-cc2ca9c4f27c?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=350&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY2NTA1MDUzNw&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=560"
                        alt="Video Preview"
                        class="rounded"
                      />
                    </div>
                  </a>
                  <div class="py-3">
                    <h4 class="font-semibold">
                      <a
                        href="javascript:void(0)"
                        class="font-semibold transition hover:text-gray-700 dark:hover:text-gray-300"
                      >
                        Around the lake
                      </a>
                    </h4>
                    <h5 class="mb-2">
                      <a
                        href="javascript:void(0)"
                        class="text-sm font-medium text-gray-500 transition hover:text-rose-500 hover:underline hover:underline-offset-2 dark:text-gray-400 dark:hover:text-rose-300"
                      >
                        Nature Moments
                      </a>
                    </h5>
                    <p class="text-xs font-medium text-gray-500 dark:text-gray-400/75">
                      12,1k • 2 days ago
                    </p>
                  </div>
                </div>
                <div>
                  <a href="javascript:void(0)" class="group relative block">
                    <div class="absolute inset-0 z-10 flex items-center justify-center rounded bg-gray-800/75 opacity-0 transition group-hover:opacity-100">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="hi-outline hi-play-circle inline-block h-6 w-6 text-white transition group-hover:scale-150 group-active:scale-125"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z"
                        />
                      </svg>
                    </div>
                    <div class="aspect-w-16 aspect-h-10">
                      <img
                        src="https://images.unsplash.com/photo-1494500764479-0c8f2919a3d8?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=350&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY2NTA1MDU1MQ&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=560"
                        alt="Video Preview"
                        class="rounded"
                      />
                    </div>
                  </a>
                  <div class="py-3">
                    <h4 class="font-semibold">
                      <a
                        href="javascript:void(0)"
                        class="font-semibold transition hover:text-gray-700 dark:hover:text-gray-300"
                      >
                        The lonely tree
                      </a>
                    </h4>
                    <h5 class="mb-2">
                      <a
                        href="javascript:void(0)"
                        class="text-sm font-medium text-gray-500 transition hover:text-rose-500 hover:underline hover:underline-offset-2 dark:text-gray-400 dark:hover:text-rose-300"
                      >
                        Nature Moments
                      </a>
                    </h5>
                    <p class="text-xs font-medium text-gray-500 dark:text-gray-400/75">
                      11,3k • 2 days ago
                    </p>
                  </div>
                </div>
                <div>
                  <a href="javascript:void(0)" class="group relative block">
                    <div class="absolute inset-0 z-10 flex items-center justify-center rounded bg-gray-800/75 opacity-0 transition group-hover:opacity-100">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="hi-outline hi-play-circle inline-block h-6 w-6 text-white transition group-hover:scale-150 group-active:scale-125"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z"
                        />
                      </svg>
                    </div>
                    <div class="aspect-w-16 aspect-h-10">
                      <img
                        src="https://images.unsplash.com/photo-1558469070-b0bb906830a2?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=350&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY2NTA1MDU3Mg&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=560"
                        alt="Video Preview"
                        class="rounded"
                      />
                    </div>
                  </a>
                  <div class="py-3">
                    <h4 class="font-semibold">
                      <a
                        href="javascript:void(0)"
                        class="font-semibold transition hover:text-gray-700 dark:hover:text-gray-300"
                      >
                        Chasing the peaks
                      </a>
                    </h4>
                    <h5 class="mb-2">
                      <a
                        href="javascript:void(0)"
                        class="text-sm font-medium text-gray-500 transition hover:text-rose-500 hover:underline hover:underline-offset-2 dark:text-gray-400 dark:hover:text-rose-300"
                      >
                        Into The Wild
                      </a>
                    </h5>
                    <p class="text-xs font-medium text-gray-500 dark:text-gray-400/75">
                      3,5k • 2 days ago
                    </p>
                  </div>
                </div>
                <div>
                  <a href="javascript:void(0)" class="group relative block">
                    <div class="absolute inset-0 z-10 flex items-center justify-center rounded bg-gray-800/75 opacity-0 transition group-hover:opacity-100">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="hi-outline hi-play-circle inline-block h-6 w-6 text-white transition group-hover:scale-150 group-active:scale-125"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z"
                        />
                      </svg>
                    </div>
                    <div class="aspect-w-16 aspect-h-10">
                      <img
                        src="https://images.unsplash.com/photo-1589883661923-6476cb0ae9f2?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=350&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY2NTA1MDYwNg&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=560"
                        alt="Video Preview"
                        class="rounded"
                      />
                    </div>
                  </a>
                  <div class="py-3">
                    <h4 class="font-semibold">
                      <a
                        href="javascript:void(0)"
                        class="font-semibold transition hover:text-gray-700 dark:hover:text-gray-300"
                      >
                        Cats are evil
                      </a>
                    </h4>
                    <h5 class="mb-2">
                      <a
                        href="javascript:void(0)"
                        class="text-sm font-medium text-gray-500 transition hover:text-rose-500 hover:underline hover:underline-offset-2 dark:text-gray-400 dark:hover:text-rose-300"
                      >
                        Animals Kingdom
                      </a>
                    </h5>
                    <p class="text-xs font-medium text-gray-500 dark:text-gray-400/75">
                      2,8k • 4 days ago
                    </p>
                  </div>
                </div>
                <div>
                  <a href="javascript:void(0)" class="group relative block">
                    <div class="absolute inset-0 z-10 flex items-center justify-center rounded bg-gray-800/75 opacity-0 transition group-hover:opacity-100">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="hi-outline hi-play-circle inline-block h-6 w-6 text-white transition group-hover:scale-150 group-active:scale-125"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z"
                        />
                      </svg>
                    </div>
                    <div class="aspect-w-16 aspect-h-10">
                      <img
                        src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=350&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY2NTA1MDYwNg&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=560"
                        alt="Video Preview"
                        class="rounded"
                      />
                    </div>
                  </a>
                  <div class="py-3">
                    <h4 class="font-semibold">
                      <a
                        href="javascript:void(0)"
                        class="font-semibold transition hover:text-gray-700 dark:hover:text-gray-300"
                      >
                        Best dogs ever
                      </a>
                    </h4>
                    <h5 class="mb-2">
                      <a
                        href="javascript:void(0)"
                        class="text-sm font-medium text-gray-500 transition hover:text-rose-500 hover:underline hover:underline-offset-2 dark:text-gray-400 dark:hover:text-rose-300"
                      >
                        Animals Kingdom
                      </a>
                    </h5>
                    <p class="text-xs font-medium text-gray-500 dark:text-gray-400/75">
                      3,9k • 4 days ago
                    </p>
                  </div>
                </div>
                <div>
                  <a href="javascript:void(0)" class="group relative block">
                    <div class="absolute inset-0 z-10 flex items-center justify-center rounded bg-gray-800/75 opacity-0 transition group-hover:opacity-100">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="hi-outline hi-play-circle inline-block h-6 w-6 text-white transition group-hover:scale-150 group-active:scale-125"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z"
                        />
                      </svg>
                    </div>
                    <div class="aspect-w-16 aspect-h-10">
                      <img
                        src="https://images.unsplash.com/photo-1527073620320-77635188c627?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=350&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY2NTA1MDY1MA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=560"
                        alt="Video Preview"
                        class="rounded"
                      />
                    </div>
                  </a>
                  <div class="py-3">
                    <h4 class="font-semibold">
                      <a
                        href="javascript:void(0)"
                        class="font-semibold transition hover:text-gray-700 dark:hover:text-gray-300"
                      >
                        Lions and their life
                      </a>
                    </h4>
                    <h5 class="mb-2">
                      <a
                        href="javascript:void(0)"
                        class="text-sm font-medium text-gray-500 transition hover:text-rose-500 hover:underline hover:underline-offset-2 dark:text-gray-400 dark:hover:text-rose-300"
                      >
                        Animals Kingdom
                      </a>
                    </h5>
                    <p class="text-xs font-medium text-gray-500 dark:text-gray-400/75">
                      4,1k • 5 days ago
                    </p>
                  </div>
                </div>
                <div>
                  <a href="javascript:void(0)" class="group relative block">
                    <div class="absolute inset-0 z-10 flex items-center justify-center rounded bg-gray-800/75 opacity-0 transition group-hover:opacity-100">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="hi-outline hi-play-circle inline-block h-6 w-6 text-white transition group-hover:scale-150 group-active:scale-125"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z"
                        />
                      </svg>
                    </div>
                    <div class="aspect-w-16 aspect-h-10">
                      <img
                        src="https://images.unsplash.com/photo-1528652899333-492965af4854?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=350&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY2NTA1MDY1MA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=560"
                        alt="Video Preview"
                        class="rounded"
                      />
                    </div>
                  </a>
                  <div class="py-3">
                    <h4 class="font-semibold">
                      <a
                        href="javascript:void(0)"
                        class="font-semibold transition hover:text-gray-700 dark:hover:text-gray-300"
                      >
                        The fox is here
                      </a>
                    </h4>
                    <h5 class="mb-2">
                      <a
                        href="javascript:void(0)"
                        class="text-sm font-medium text-gray-500 transition hover:text-rose-500 hover:underline hover:underline-offset-2 dark:text-gray-400 dark:hover:text-rose-300"
                      >
                        Animals Kingdom
                      </a>
                    </h5>
                    <p class="text-xs font-medium text-gray-500 dark:text-gray-400/75">
                      9,6k • 5 days ago
                    </p>
                  </div>
                </div>
                <div>
                  <a href="javascript:void(0)" class="group relative block">
                    <div class="absolute inset-0 z-10 flex items-center justify-center rounded bg-gray-800/75 opacity-0 transition group-hover:opacity-100">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="hi-outline hi-play-circle inline-block h-6 w-6 text-white transition group-hover:scale-150 group-active:scale-125"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z"
                        />
                      </svg>
                    </div>
                    <div class="aspect-w-16 aspect-h-10">
                      <img
                        src="https://images.unsplash.com/photo-1503308823166-13ce184e3007?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=350&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY2NTA1MDY1MA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=560"
                        alt="Video Preview"
                        class="rounded"
                      />
                    </div>
                  </a>
                  <div class="py-3">
                    <h4 class="font-semibold">
                      <a
                        href="javascript:void(0)"
                        class="font-semibold transition hover:text-gray-700 dark:hover:text-gray-300"
                      >
                        The deer is near
                      </a>
                    </h4>
                    <h5 class="mb-2">
                      <a
                        href="javascript:void(0)"
                        class="text-sm font-medium text-gray-500 transition hover:text-rose-500 hover:underline hover:underline-offset-2 dark:text-gray-400 dark:hover:text-rose-300"
                      >
                        Animals Kingdom
                      </a>
                    </h5>
                    <p class="text-xs font-medium text-gray-500 dark:text-gray-400/75">
                      26,5k • 5 days ago
                    </p>
                  </div>
                </div>
                <div>
                  <a href="javascript:void(0)" class="group relative block">
                    <div class="absolute inset-0 z-10 flex items-center justify-center rounded bg-gray-800/75 opacity-0 transition group-hover:opacity-100">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="hi-outline hi-play-circle inline-block h-6 w-6 text-white transition group-hover:scale-150 group-active:scale-125"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z"
                        />
                      </svg>
                    </div>
                    <div class="aspect-w-16 aspect-h-10">
                      <img
                        src="https://images.unsplash.com/photo-1524261399568-56d8c862aaf8?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=350&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY2NTA1MDY1OA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=560"
                        alt="Video Preview"
                        class="rounded"
                      />
                    </div>
                  </a>
                  <div class="py-3">
                    <h4 class="font-semibold">
                      <a
                        href="javascript:void(0)"
                        class="font-semibold transition hover:text-gray-700 dark:hover:text-gray-300"
                      >
                        Into the woods
                      </a>
                    </h4>
                    <h5 class="mb-2">
                      <a
                        href="javascript:void(0)"
                        class="text-sm font-medium text-gray-500 transition hover:text-rose-500 hover:underline hover:underline-offset-2 dark:text-gray-400 dark:hover:text-rose-300"
                      >
                        Into The Wild
                      </a>
                    </h5>
                    <p class="text-xs font-medium text-gray-500 dark:text-gray-400/75">
                      2,3k • 5 days ago
                    </p>
                  </div>
                </div>
                <div>
                  <a href="javascript:void(0)" class="group relative block">
                    <div class="absolute inset-0 z-10 flex items-center justify-center rounded bg-gray-800/75 opacity-0 transition group-hover:opacity-100">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="hi-outline hi-play-circle inline-block h-6 w-6 text-white transition group-hover:scale-150 group-active:scale-125"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z"
                        />
                      </svg>
                    </div>
                    <div class="aspect-w-16 aspect-h-10">
                      <img
                        src="https://images.unsplash.com/photo-1554281559-0d21d1f5073e?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=350&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY2NTA1MDY4Mg&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=560"
                        alt="Video Preview"
                        class="rounded"
                      />
                    </div>
                  </a>
                  <div class="py-3">
                    <h4 class="font-semibold">
                      <a
                        href="javascript:void(0)"
                        class="font-semibold transition hover:text-gray-700 dark:hover:text-gray-300"
                      >
                        Most amazing animals
                      </a>
                    </h4>
                    <h5 class="mb-2">
                      <a
                        href="javascript:void(0)"
                        class="text-sm font-medium text-gray-500 transition hover:text-rose-500 hover:underline hover:underline-offset-2 dark:text-gray-400 dark:hover:text-rose-300"
                      >
                        Animals Kingdom
                      </a>
                    </h5>
                    <p class="text-xs font-medium text-gray-500 dark:text-gray-400/75">
                      8,4k • 6 days ago
                    </p>
                  </div>
                </div>
              </div>

              <div class="mt-8 text-center">
                <button
                  type="button"
                  class="inline-flex items-center justify-center space-x-2 rounded border border-gray-300 bg-white px-3 py-2 text-sm font-semibold leading-6 text-gray-800 shadow-sm hover:border-gray-300 hover:bg-gray-100 hover:text-gray-800 hover:shadow focus:outline-none focus:ring focus:ring-gray-500 focus:ring-opacity-25 active:border-white active:bg-white active:shadow-none dark:border-gray-700/75 dark:bg-gray-900 dark:text-gray-200 dark:hover:border-gray-700 dark:hover:bg-gray-800 dark:hover:text-gray-200 dark:focus:ring-gray-700 dark:active:border-gray-900 dark:active:bg-gray-900"
                >
                  <span>Load more..</span>
                </button>
              </div>
            </div>
          </main>

          <footer
            id="page-footer"
            class="flex grow-0 items-center border-t border-slate-200 dark:border-slate-700"
          >
            <div class="container mx-auto flex flex-col space-y-2 px-4 py-6 text-center text-sm font-medium text-gray-500 md:flex-row md:justify-between md:space-y-0 md:text-left lg:px-8 xl:max-w-7xl">
              <div>
                © <span class="font-semibold">TailTube</span>
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
                    class="font-medium text-rose-600 transition hover:text-rose-700 dark:text-rose-400 dark:hover:text-rose-300"
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
    </div>
  );
};

export default ReadyTemplates;
