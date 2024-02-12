export default function Footer() {
  return (
    <footer
      className="px-4 divide-y dark:bg-gray-800 dark:text-gray-100"
      style={{ backgroundColor: "#FFFFFF" }}
    >
      <div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:space-y-0 lg:space-x-4 lg:flex-row lg:items-center">
        {/* Left side divs */}
        <div className="flex-1 flex flex-col lg:flex-row justify-end lg:space-x-8 space-y-8 lg:space-y-0">
          <div className="space-y-3">
            <h3 className="tracking-widest uppercase dark:text-gray-50">
              Product
            </h3>
            <ul className="space-y-1">
              <li>
                <a rel="noopener noreferrer" href="#products">
                  Gallery
                </a>
              </li>
              <li>
                <a rel="noopener noreferrer" href="#about">
                  About
                </a>
              </li>
              <li>
                <a rel="noopener noreferrer" href="#team">
                  Team
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="tracking-widest uppercase dark:text-gray-50">
              Company
            </h3>
            <ul className="space-y-1">
              <li>
                <a rel="noopener noreferrer" href="#">
                  Privacy
                </a>
              </li>
              <li>
                <a rel="noopener noreferrer" href="#">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Center Logo */}
        <div
          id="footer-logo"
          className="flex-1 flex justify-center lg:w-1/3 my-6 lg:my-0"
        >
          <a
            rel="noopener noreferrer"
            href="#"
            className="flex justify-center space-x-3"
          >
            <div className="flex items-center justify-center w-12 h-12 rounded-full dark:bg-violet-400">
              <img src="/logo.png" alt="Logo" className="h-8 mr-2" />
            </div>
            <span
              className="self-center text-2xl font-semibold"
              style={{ fontFamily: "'Pacifico', cursive" }}
            >
              Tamara Bakery
            </span>
          </a>
        </div>

        {/* Right side divs including Social Media Icons */}
        <div className="flex-1 flex flex-col lg:flex-row justify-start lg:space-x-8 space-y-8 lg:space-y-0">
          <div className="space-y-3">
            <h3 className="uppercase dark:text-gray-50">Community</h3>
            <ul className="space-y-1">
              <li>
                <a rel="noopener noreferrer" href="#">
                  Vacancies
                </a>
              </li>
              <li>
                <a rel="noopener noreferrer" href="#">
                  Documentation
                </a>
              </li>
              <li>
                <a rel="noopener noreferrer" href="#">
                  Guides
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <div className="uppercase dark:text-gray-50">Social media</div>
            <div className="flex space-x-3">
              {/* Social media icons */}
              {/* Example with placeholder links */}
              <a href="#" className="flex items-center p-1">
                {/* Facebook Icon */}
                {/* Replace href with your actual Facebook page link */}

                <a href="#" className="flex items-center p-1">
                  <svg
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    aria-hidden="true"
                  >
                    <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073c0 5.995 4.388 10.982 10.125 11.85v-8.385H7.078V12.073h3.047V9.412c0-3.026 1.792-4.687 4.533-4.687 1.312 0 2.686.235 2.686.235v2.953h-1.513c-1.494 0-1.953.928-1.953 1.874v2.286h3.328l-.532 3.465h-2.796v8.385C19.612 23.055 24 18.068 24 12.073z" />
                  </svg>
                </a>
              </a>

              <a href="#" className="flex items-center p-1">
                {/* Twitter Icon */}
                {/* Replace href with your actual Twitter profile link */}

                <a href="#" className="flex items-center p-1">
                  <svg
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    aria-hidden="true"
                  >
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-2.719 0-4.924 2.205-4.924 4.924 0 .386.044.763.128 1.124C7.728 8.087 4.1 6.127 1.671 3.148c-.424.728-.666 1.574-.666 2.476 0 1.71.869 3.213 2.188 4.096-.806-.026-1.566-.247-2.228-.616v.062c0 2.386 1.698 4.374 3.946 4.827-.413.112-.849.171-1.296.171-.316 0-.623-.03-.924-.088.624 1.953 2.444 3.377 4.6 3.415-1.685 1.32-3.808 2.105-6.115 2.105-.398 0-.79-.023-1.175-.069 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.143-7.721 14.143-14.417 0-.22-.005-.439-.014-.656.975-.703 1.821-1.579 2.491-2.578l-.047-.02z" />
                  </svg>
                </a>
              </a>

              <a href="#" className="flex items-center p-1">
                {/* Instagram Icon */}
                {/* Replace href with your actual Instagram profile link */}

                <a href="#" className="flex items-center p-1">
                  <svg
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    aria-hidden="true"
                  >
                    <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm6.5 1.5h-5a4.25 4.25 0 00-4.25 4.25v5a4.25 4.25 0 004.25 4.25h5a4.25 4.25 0 004.25-4.25v-5A4.25 4.25 0 0014.25 3.5zm0 1.5a2.75 2.75 0 012.75 2.75v5a2.75 2.75 0 01-2.75 2.75h-5a2.75 2.75 0 01-2.75-2.75v-5a2.75 2.75 0 012.75-2.75h5zm-2.5 1.75a3.25 3.25 0 10-6.5 0 3.25 3.25 0 006.5 0zm1.5 0a4.75 4.75 0 11-9.5 0 4.75 4.75 0 019.5 0zM14.25 7a1 1 0 100 2 1 1 0 000-2z" />
                  </svg>
                </a>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="py-6 text-sm text-center dark:text-gray-400">
        © {new Date().getFullYear()} Tamara Bakery | Designed by{" "}
        <span style={{ fontFamily: "'Pacifico', cursive" }}>
          <a
            href="https://github.com/bujo-eayn"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "blue" }}
          >
            Job Ian
          </a>
        </span>
        . All rights reserved.
      </div>
    </footer>
  );
}
