import React from 'react'

const Chats = () => {
  return (
    <>
<div
  id="page-container"
//   x-data="{ mobileSidebarOpen: false }"
  class="relative   h-screen min-w-[320px] bg-white lg:ml-80"
>
  <nav
    id="page-sidebar"
    class="fixed bottom-0 left-0 top-0 z-50 flex h-full w-80 transform flex-col overflow-auto bg-slate-200 transition-transform duration-500 ease-out lg:translate-x-0 lg:shadow-none"
    // x-bind:class="{
    //   '-translate-x-full': !mobileSidebarOpen,
    //   'translate-x-0 shadow-lg': mobileSidebarOpen,
    // }"
    aria-label="Main Sidebar Navigation"
    x-cloak
  >
    <div
      class="flex h-20 w-full flex-none items-center justify-between pl-8 pr-2"
    >
      <a
        href="javascript:void(0)"
        class="group inline-flex items-center space-x-2 text-lg font-bold tracking-wide text-slate-800 transition hover:opacity-75 active:opacity-100 lg:justify-center"
      >
        <svg
          class="hi-mini hi-chat-bubble-left-right inline-block h-5 w-5 text-indigo-500 transition ease-out group-hover:-rotate-6"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            d="M3.505 2.365A41.369 41.369 0 019 2c1.863 0 3.697.124 5.495.365 1.247.167 2.18 1.108 2.435 2.268a4.45 4.45 0 00-.577-.069 43.141 43.141 0 00-4.706 0C9.229 4.696 7.5 6.727 7.5 8.998v2.24c0 1.413.67 2.735 1.76 3.562l-2.98 2.98A.75.75 0 015 17.25v-3.443c-.501-.048-1-.106-1.495-.172C2.033 13.438 1 12.162 1 10.72V5.28c0-1.441 1.033-2.717 2.505-2.914z"
          />
          <path
            d="M14 6c-.762 0-1.52.02-2.271.062C10.157 6.148 9 7.472 9 8.998v2.24c0 1.519 1.147 2.839 2.71 2.935.214.013.428.024.642.034.2.009.385.09.518.224l2.35 2.35a.75.75 0 001.28-.531v-2.07c1.453-.195 2.5-1.463 2.5-2.915V8.998c0-1.526-1.157-2.85-2.729-2.936A41.645 41.645 0 0014 6z"
          />
        </svg>
        <span
          >Tail<span class="font-medium text-indigo-600">Chat</span></span>
      </a>

      <div class="lg:hidden">
        <button
          type="button"
          class="flex h-10 w-10 items-center justify-center text-slate-400 hover:text-slate-600 active:text-slate-400"
        //   x-on:click="mobileSidebarOpen = false"
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

    <div class="grow space-y-2 pl-4 pt-2">
      <a
        href="javascript:void(0)"
        class="flex items-center space-x-3 rounded-l border-l-4 border-indigo-500 bg-white px-3 py-4 shadow-sm"
      >
        <div class="relative flex-none">
          <img
            src="https://images.unsplash.com/photo-1567186937675-a5131c8a89ea?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=160&ixid=MXwxfDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=160"
            alt="User Avatar"
            class="h-11 w-11 rounded-full border-2 border-white/50"
          />
          <span
            class="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white bg-emerald-500 shadow-sm"
          ></span>
        </div>
        <div class="grow">
          <p class="mb-0.5 line-clamp-1 text-sm font-bold">John Smith</p>
          <p class="line-clamp-1 text-xs font-medium text-slate-500">
            j.smith@example.com
          </p>
        </div>
        <div class="flex-none self-start">
          <p class="text-xs font-medium text-slate-400">Now</p>
        </div>
      </a>
      <a
        href="javascript:void(0)"
        class="flex items-center space-x-3 rounded-l border-l-4 border-transparent px-3 py-4 hover:border-indigo-300 hover:bg-white/50 active:border-indigo-500 active:bg-white active:shadow-sm"
      >
        <div class="relative flex-none">
          <img
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=160&ixid=MXwxfDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=160"
            alt="User Avatar"
            class="h-11 w-11 rounded-full border-2 border-white/50"
          />
          <span
            class="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white bg-amber-500 shadow-sm"
          ></span>
        </div>
        <div class="grow">
          <p class="mb-0.5 line-clamp-1 text-sm font-bold">Gus Taylor</p>
          <p class="line-clamp-1 text-xs font-medium text-slate-500">
            g.taylor@example.com
          </p>
        </div>
        <div class="flex-none self-start">
          <p class="text-xs font-medium text-slate-400">16:25</p>
        </div>
      </a>
      <a
        href="javascript:void(0)"
        class="flex items-center space-x-3 rounded-l border-l-4 border-transparent px-3 py-4 hover:border-indigo-300 hover:bg-white/50 active:border-indigo-500 active:bg-white active:shadow-sm"
      >
        <div class="relative flex-none">
          <img
            src="https://images.unsplash.com/photo-1514846326710-096e4a8035e0?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=160&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY2MjYzODYzMg&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=160"
            alt="User Avatar"
            class="h-11 w-11 rounded-full border-2 border-white/50"
          />
          <span
            class="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white bg-rose-500 shadow-sm"
          ></span>
        </div>
        <div class="grow">
          <p class="mb-0.5 line-clamp-1 text-sm font-bold">Sue Keller</p>
          <p class="line-clamp-1 text-xs font-medium text-slate-500">
            s.keller@example.com
          </p>
        </div>
        <div class="flex-none self-start">
          <p class="text-xs font-medium text-slate-400">March 15</p>
        </div>
      </a>
    </div>

    <div class="flex-none space-y-2 px-4 pb-2">
      <a
        href="javascript:void(0)"
        class="flex items-center space-x-3 rounded border-l-4 border-transparent px-3 py-4 hover:border-indigo-300 hover:bg-white/50 active:border-indigo-500 active:bg-white active:shadow-sm"
      >
        <div class="relative flex-none">
          <img
            src="https://images.unsplash.com/photo-1528892952291-009c663ce843?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=160&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY2ODc1OTQ0OQ&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=160"
            alt="User Avatar"
            class="h-11 w-11 rounded-full border-2 border-white/50"
          />
        </div>
        <div class="grow">
          <p class="mb-0.5 line-clamp-1 text-sm font-bold">My Account</p>
          <p class="line-clamp-1 text-xs font-medium text-slate-500">
            @john.doe
          </p>
        </div>
      </a>
    </div>
  </nav>

  <header
    id="page-header"
    class="fixed left-0 right-0 top-0 z-30 flex h-20 flex-none items-center border-b border-slate-200/75 bg-white/80 backdrop-blur-sm lg:left-80 lg:hidden"
  >
    <div
      class="container mx-auto flex justify-between px-4 lg:px-8 xl:max-w-7xl"
    >
      <div class="flex items-center space-x-2">
        <button
          type="button"
          class="inline-flex items-center justify-center space-x-2 rounded-lg border border-slate-300 bg-white px-2.5 py-2 font-semibold leading-6 text-slate-800 shadow-sm hover:border-slate-300 hover:bg-slate-100 hover:text-slate-800 hover:shadow focus:outline-none focus:ring focus:ring-slate-500 focus:ring-opacity-25 active:border-white active:bg-white active:shadow-none"
        //   x-on:click="mobileSidebarOpen = true"
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
          class="group inline-flex items-center space-x-2 text-lg font-bold tracking-wide text-slate-800 transition hover:opacity-75 active:opacity-100"
        >
          <svg
            class="hi-mini hi-chat-bubble-left-right inline-block h-5 w-5 text-indigo-500 transition ease-out group-hover:-rotate-6"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              d="M3.505 2.365A41.369 41.369 0 019 2c1.863 0 3.697.124 5.495.365 1.247.167 2.18 1.108 2.435 2.268a4.45 4.45 0 00-.577-.069 43.141 43.141 0 00-4.706 0C9.229 4.696 7.5 6.727 7.5 8.998v2.24c0 1.413.67 2.735 1.76 3.562l-2.98 2.98A.75.75 0 015 17.25v-3.443c-.501-.048-1-.106-1.495-.172C2.033 13.438 1 12.162 1 10.72V5.28c0-1.441 1.033-2.717 2.505-2.914z"
            />
            <path
              d="M14 6c-.762 0-1.52.02-2.271.062C10.157 6.148 9 7.472 9 8.998v2.24c0 1.519 1.147 2.839 2.71 2.935.214.013.428.024.642.034.2.009.385.09.518.224l2.35 2.35a.75.75 0 001.28-.531v-2.07c1.453-.195 2.5-1.463 2.5-2.915V8.998c0-1.526-1.157-2.85-2.729-2.936A41.645 41.645 0 0014 6z"
            />
          </svg>
          <span
            >Tail<span class="font-medium text-indigo-600">Chat</span></span>
        </a>
      </div>

      <div class="flex items-center space-x-2">
        <a
          href="javascript:void(0)"
          class="inline-flex items-center justify-center space-x-2 rounded-lg border border-slate-300 bg-white px-2.5 py-2 font-semibold leading-6 text-slate-800 shadow-sm hover:border-slate-300 hover:bg-slate-100 hover:text-slate-800 hover:shadow focus:outline-none focus:ring focus:ring-slate-500 focus:ring-opacity-25 active:border-white active:bg-white active:shadow-none"
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

  <main id="page-content" class="absolute inset-0">
    <div
      class="container mx-auto space-y-6 px-4 py-24 lg:p-8 lg:pb-28 xl:max-w-7xl"
    >
      <div class="my-3 flex items-center">
        <span
          aria-hidden="true"
          class="h-0.5 grow rounded bg-slate-50"
        ></span>
        <span
          class="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-500"
          >Monday 14:26</span
        >
        <span
          aria-hidden="true"
          class="h-0.5 grow rounded bg-slate-50"
        ></span>
      </div>
     
      <div
        class="flex w-5/6 flex-col items-start space-y-2 lg:w-2/3 xl:w-1/3"
      >
        <p
          class="relative rounded-xl bg-indigo-50 px-4 py-2 font-medium text-indigo-900"
        >
          <span
            class="absolute right-0 top-0 -mr-2 -mt-2 flex h-6 w-6 items-center justify-center rounded-full bg-indigo-500 text-white"
          >
            <svg
              class="hi-mini hi-heart inline-block h-3.5 w-3.5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                d="M9.653 16.915l-.005-.003-.019-.01a20.759 20.759 0 01-1.162-.682 22.045 22.045 0 01-2.582-1.9C4.045 12.733 2 10.352 2 7.5a4.5 4.5 0 018-2.828A4.5 4.5 0 0118 7.5c0 2.852-2.044 5.233-3.885 6.82a22.049 22.049 0 01-3.744 2.582l-.019.01-.005.003h-.002a.739.739 0 01-.69.001l-.002-.001z"
              />
            </svg>
          </span>
          Hey there
        </p>
        <p
          class="relative rounded-xl bg-indigo-50 px-4 py-2 font-medium text-indigo-900"
        >
          <span
            class="absolute right-0 top-0 -mr-2 -mt-2 flex h-6 w-6 items-center justify-center rounded-full bg-indigo-500 text-white"
          >
            <svg
              class="hi-mini hi-heart inline-block h-3.5 w-3.5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                d="M9.653 16.915l-.005-.003-.019-.01a20.759 20.759 0 01-1.162-.682 22.045 22.045 0 01-2.582-1.9C4.045 12.733 2 10.352 2 7.5a4.5 4.5 0 018-2.828A4.5 4.5 0 0118 7.5c0 2.852-2.044 5.233-3.885 6.82a22.049 22.049 0 01-3.744 2.582l-.019.01-.005.003h-.002a.739.739 0 01-.69.001l-.002-.001z"
              />
            </svg>
          </span>
          I hope you are doing great! 💪
        </p>
        <p
          class="relative rounded-xl bg-indigo-50 px-4 py-2 font-medium text-indigo-900"
        >
          <span
            class="absolute right-0 top-0 -mr-2 -mt-2 flex h-6 w-6 items-center justify-center rounded-full bg-indigo-500 text-white"
          >
            <svg
              class="hi-mini hi-hand-thumb-up inline-block h-3.5 w-3.5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                d="M1 8.25a1.25 1.25 0 112.5 0v7.5a1.25 1.25 0 11-2.5 0v-7.5zM11 3V1.7c0-.268.14-.526.395-.607A2 2 0 0114 3c0 .995-.182 1.948-.514 2.826-.204.54.166 1.174.744 1.174h2.52c1.243 0 2.261 1.01 2.146 2.247a23.864 23.864 0 01-1.341 5.974C17.153 16.323 16.072 17 14.9 17h-3.192a3 3 0 01-1.341-.317l-2.734-1.366A3 3 0 006.292 15H5V8h.963c.685 0 1.258-.483 1.612-1.068a4.011 4.011 0 012.166-1.73c.432-.143.853-.386 1.011-.814.16-.432.248-.9.248-1.388z"
              />
            </svg>
          </span>
          Do you have the design ready? I would love to check it out! 😍
        </p>
      </div>
     
      <div class="my-3 flex items-center">
        <span
          aria-hidden="true"
          class="h-0.5 grow rounded bg-slate-50"
        ></span>
        <span
          class="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-500"
          >Monday 15:10</span>
        <span
          aria-hidden="true"
          class="h-0.5 grow rounded bg-slate-50"
        ></span>
      </div>
   
      <div
        class="ml-auto flex w-5/6 flex-col items-end space-y-2 lg:w-2/3 xl:w-1/3"
      >
        <p
          class="rounded-xl bg-indigo-600 px-4 py-2 font-medium text-indigo-50"
        >
          Hey John!
        </p>
        <p
          class="rounded-xl bg-indigo-600 px-4 py-2 font-medium text-indigo-50"
        >
          I have everything ready! Please stay tuned, I will forward it to
          you really soon 😉
        </p>
        <p
          class="rounded-xl bg-indigo-600 px-4 py-2 font-medium text-indigo-50"
        >
          Here you go! 👇
        </p>
        <p
          class="rounded-xl bg-indigo-600 px-4 py-2 font-medium text-indigo-50"
        >
          <a
            href="javascript:void(0)"
            class="flex items-center space-x-2 text-white underline hover:opacity-80 active:opacity-100"
          >
            <svg
              class="hi-mini hi-archive-box-arrow-down inline-block h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M2 3a1 1 0 00-1 1v1a1 1 0 001 1h16a1 1 0 001-1V4a1 1 0 00-1-1H2zm0 4.5h16l-.811 7.71a2 2 0 01-1.99 1.79H4.802a2 2 0 01-1.99-1.79L2 7.5zM10 9a.75.75 0 01.75.75v2.546l.943-1.048a.75.75 0 111.114 1.004l-2.25 2.5a.75.75 0 01-1.114 0l-2.25-2.5a.75.75 0 111.114-1.004l.943 1.048V9.75A.75.75 0 0110 9z"
                clip-rule="evenodd"
              />
            </svg>
            <span>custom-design-final.zip</span>
          </a>
        </p>
      </div>
   
      <div class="my-3 flex items-center">
        <span
          aria-hidden="true"
          class="h-0.5 grow rounded bg-slate-50"
        ></span>
        <span
          class="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-500"
          >Just now</span>
        <span
          aria-hidden="true"
          class="h-0.5 grow rounded bg-slate-50"
        ></span>
      </div>
     
      <div
        class="flex w-5/6 flex-col items-start space-y-2 lg:w-2/3 xl:w-1/3"
      >
        <p
          class="relative rounded-xl bg-indigo-50 px-4 py-2 font-medium text-indigo-900"
        >
          Thanks so much, I will check it out right away!
        </p>
        <p
          class="relative rounded-xl bg-indigo-50 px-4 py-2 font-medium text-indigo-900"
        >
          🙏👍😀
        </p>
      </div>
    </div>
  </main>

  <footer
    id="page-footer"
    class="fixed bottom-0 left-0 right-0 items-center border-t border-slate-200/75 bg-white lg:left-80"
  >
    <form
      class="container mx-auto flex h-20 items-center space-x-2 px-4 lg:px-8 xl:max-w-7xl"
      onsubmit="return false;"
    >
      <input
        type="text"
        class="-mx-5 block w-full rounded-lg border-0 px-5 py-4 leading-6 focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-75"
        placeholder="Type a new message and hit enter.."
      />
    </form>
  </footer>

    </div>
    </>

  )
}

export default Chats