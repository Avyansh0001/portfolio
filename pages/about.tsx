import { Meta } from "../layout/Meta";
import { Main } from "../templates/Main";
import Contact from "../components/Contact";
import React from "react";
const About = () => (
  <Main meta={<Meta title="About" description="About me" />}>
    <h1 className="pb-2 text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-t from-coolGray-900 to-warmGray-600 dark:bg-gradient-to-l dark:from-coolGray-100 dark:to-coolGray-300">
      About Me
    </h1>
    <div className="mb-8">
      <p className="mb-4 text-transparent bg-clip-text bg-gradient-to-tl from-gray-700 via-gray-900 to-black dark:from-gray-50 dark:via-gray-100 dark:to-white">
        Heyo, I am Avyansh Ralph and I love to write beautiful codes for websites and design press kit for start ups... I own 3 different companies and the best part is that they all start with <b>Air</b>
      </p>
      <h1 className="pb-2 text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-t from-coolGray-900 to-warmGray-600 dark:bg-gradient-to-l dark:from-coolGray-100 dark:to-coolGray-300">
        # What technology i use?
      </h1>
      <p className="pb-4 bg-clip-text bg-gradient-to-tl from-gray-700 via-gray-900 to-black dark:bg-gradient-to-tl dark:from-gray-50 dark:via-gray-100 dark:to-white space-x-2">
        <span>
          <svg
            className="inline mb-1 mr-1 "
            width="62"
            height="30"
            viewBox="0 0 148 90"
            version="1.1"
          >
            <path
              d="M34.992 23.495h27.855v2.219H37.546v16.699h23.792v2.219H37.546v18.334h25.591v2.219H34.992v-41.69zm30.35 0h2.96l13.115 18.334 13.405-18.334L113.055.207 83.1 43.756l15.436 21.429H95.46L81.417 45.683 67.316 65.185h-3.018L79.85 43.756 65.343 23.495zm34.297 2.219v-2.219h31.742v2.219h-14.623v39.47h-2.554v-39.47H99.64zM.145 23.495h3.192l44.011 66.003L29.16 65.185 2.814 26.648l-.116 38.537H.145v-41.69zm130.98 38.801c-.523 0-.914-.405-.914-.928 0-.524.391-.929.913-.929.528 0 .913.405.913.929 0 .523-.385.928-.913.928zm2.508-2.443H135c.019.742.56 1.24 1.354 1.24.888 0 1.391-.535 1.391-1.539v-6.356h1.391v6.362c0 1.808-1.043 2.849-2.77 2.849-1.62 0-2.732-1.01-2.732-2.556zm7.322-.08h1.379c.118.853.95 1.395 2.149 1.395 1.117 0 1.937-.58 1.937-1.377 0-.685-.521-1.097-1.708-1.377l-1.155-.28c-1.62-.38-2.36-1.166-2.36-2.487 0-1.602 1.304-2.668 3.26-2.668 1.82 0 3.15 1.066 3.23 2.58h-1.354c-.13-.828-.85-1.346-1.894-1.346-1.1 0-1.832.53-1.832 1.34 0 .642.472 1.01 1.64 1.284l.987.243c1.838.43 2.596 1.178 2.596 2.53 0 1.72-1.33 2.799-3.453 2.799-1.987 0-3.323-1.029-3.422-2.637z"
              fill="currentColor"
              fillRule="nonzero"
              className="text-black fill-current dark:text-white"
            ></path>
          </svg>
          NextJS
        </span>
        <span>
          <svg
            width="20"
            height="20"
            className="inline mb-1 mr-1"
            viewBox="0 0 80 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M46.6972 39.9398C46.6972 36.3537 43.699 33.4463 40 33.4463C36.3014 33.4463 33.3028 36.3537 33.3028 39.9398C33.3028 43.5262 36.3014 46.4335 40 46.4335C43.699 46.4335 46.6972 43.5262 46.6972 39.9398Z"
              fill="#53C1DE"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M61.7509 27.8843C63.1653 22.312 64.9431 11.9787 58.676 8.4754C52.4383 4.98737 44.3211 11.6711 40.0349 15.683C35.7611 11.711 27.4159 5.05592 21.1541 8.57034C14.9188 12.0701 16.8416 22.232 18.2873 27.8392C12.4708 29.441 2.5 32.891 2.5 39.9398C2.5 46.9685 12.4604 50.722 18.2424 52.3222C16.7914 57.9605 14.9649 67.9773 21.2082 71.4691C27.4932 74.9829 35.8126 68.4863 40.1384 64.4305C44.4522 68.466 52.4915 75.0052 58.7304 71.5036C64.9891 67.9908 63.3589 57.796 61.9132 52.1562C67.5182 50.5525 77.5 46.8808 77.5 39.9398C77.5 32.9587 67.4758 29.4807 61.7509 27.8843ZM61.0406 49.1674C60.0913 46.2539 58.8101 43.1557 57.2427 39.9552C58.7387 36.8303 59.9701 33.772 60.8929 30.8772C65.0897 32.0569 74.2963 34.7532 74.2963 39.9398C74.2963 45.1749 65.4616 47.8968 61.0406 49.1674ZM57.1249 68.8151C52.4701 71.4275 45.5554 65.1741 42.3696 62.2022C44.483 59.961 46.595 57.3556 48.6562 54.4624C52.2821 54.1505 55.7076 53.6404 58.8141 52.9443C59.8316 56.9335 61.8006 66.1907 57.1249 68.8151ZM22.809 68.7777C18.1536 66.1751 20.2814 57.2366 21.3489 53.0834C24.4209 53.7421 27.8214 54.2162 31.456 54.502C33.5308 57.333 35.7039 59.9353 37.894 62.2141C35.1881 64.7519 27.4863 71.3925 22.809 68.7777ZM5.70372 39.9398C5.70372 34.6849 14.8552 32.0083 19.1476 30.8315C20.0863 33.7913 21.3174 36.886 22.8031 40.0154C21.2981 43.1915 20.0494 46.3354 19.1021 49.3299C15.0092 48.1941 5.70372 45.1979 5.70372 39.9398ZM22.7593 11.2589C27.4338 8.63541 34.6868 15.0246 37.7897 17.9003C35.611 20.1689 33.4578 22.7515 31.4009 25.5662C27.8735 25.8832 24.4969 26.3923 21.3927 27.0742C20.2281 22.5518 18.0898 13.8795 22.7593 11.2589ZM50.9481 28.9427C53.3413 29.2356 55.6339 29.625 57.7868 30.1016C57.1405 32.1101 56.3349 34.2103 55.3863 36.3633C54.011 33.8332 52.5347 31.354 50.9481 28.9427ZM40.0358 20.1203C41.5136 21.6724 42.9936 23.4058 44.4494 25.2862C41.4963 25.1509 38.5383 25.1502 35.5851 25.2842C37.0422 23.4212 38.5349 21.6904 40.0358 20.1203ZM24.6413 36.3611C23.7082 34.2155 22.9099 32.1059 22.2581 30.0688C24.398 29.6044 26.6799 29.225 29.0575 28.9369C27.4665 31.3429 25.9927 33.8212 24.6413 36.3611ZM29.1259 51.1643C26.6696 50.8985 24.3531 50.5384 22.2139 50.0869C22.8761 48.0137 23.692 45.8587 24.6449 43.6671C26.0151 46.2332 27.5112 48.7356 29.1259 51.1643ZM40.1245 59.9787C38.6059 58.3899 37.0914 56.6327 35.612 54.7427C38.5821 54.8558 41.5579 54.8561 44.5274 54.7276C43.067 56.6521 41.5922 58.4118 40.1245 59.9787ZM55.4168 43.5555C56.4192 45.7709 57.2643 47.9142 57.9355 49.9523C55.7607 50.4335 53.413 50.8209 50.9392 51.1086C52.5376 48.6518 54.0371 46.134 55.4168 43.5555ZM46.8681 51.4852C42.3253 51.7999 37.7539 51.7966 33.2095 51.5109C30.6272 47.8536 28.3286 44.0074 26.3444 40.0144C28.3189 36.0297 30.6009 32.1911 33.171 28.5395C37.7189 28.2062 42.2946 28.2054 46.8423 28.5414C49.3902 32.1928 51.6688 36.0215 53.6892 39.9703C51.6927 43.9531 49.3988 47.7995 46.8681 51.4852ZM57.0758 11.1665C61.7515 13.7813 59.6702 23.0682 58.6488 27.1064C55.5373 26.4103 52.1583 25.8922 48.6207 25.5703C46.5598 22.7251 44.4245 20.138 42.281 17.8987C45.4238 14.961 52.4452 8.57722 57.0758 11.1665Z"
              fill="#53C1DE"
            />
          </svg>
          React
        </span>
        <span className="space-x-1">
          <svg
            className="inline mb-1 mr-1 rounded-sm fill-current bg-ts"
            width="20"
            height="20"
            fill="currentColor"
            version="1.1"
            viewBox="0 0 512 512"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="20" height="20" rx="50" fill="#3178c6" />
            <path
              d="m317 407v50c8.1 4.2 18 7.3 29 9.4s23 3.1 35 3.1c12 0 23-1.1 34-3.4 11-2.3 20-6.1 28-11 8.1-5.3 15-12 19-21s7.1-19 7.1-32c0-9.1-1.4-17-4.1-24s-6.6-13-12-18c-5.1-5.3-11-10-18-14s-15-8.2-24-12c-6.6-2.7-12-5.3-18-7.9-5.2-2.6-9.7-5.2-13-7.8-3.7-2.7-6.5-5.5-8.5-8.4-2-3-3-6.3-3-10 0-3.4 0.89-6.5 2.7-9.3s4.3-5.1 7.5-7.1c3.2-2 7.2-3.5 12-4.6 4.7-1.1 9.9-1.6 16-1.6 4.2 0 8.6 0.31 13 0.94 4.6 0.63 9.3 1.6 14 2.9 4.7 1.3 9.3 2.9 14 4.9 4.4 2 8.5 4.3 12 6.9v-47c-7.6-2.9-16-5.1-25-6.5s-19-2.1-31-2.1c-12 0-23 1.3-34 3.8s-20 6.5-28 12c-8.1 5.4-14 12-19 21-4.7 8.4-7 18-7 30 0 15 4.3 28 13 38 8.6 11 22 19 39 27 6.9 2.8 13 5.6 19 8.3s11 5.5 15 8.4c4.3 2.9 7.7 6.1 10 9.5 2.5 3.4 3.8 7.4 3.8 12 0 3.2-0.78 6.2-2.3 9s-3.9 5.2-7.1 7.2-7.1 3.6-12 4.8c-4.7 1.1-10 1.7-17 1.7-11 0-22-1.9-32-5.7-11-3.8-21-9.5-30-17zm-84-123h64v-41h-179v41h64v183h51z"
              clipRule="evenodd"
              fill="currentColor"
              fillRule="evenodd"
              className="text-white fill-current"
            />
          </svg>
          TypeScript
        </span>
        <span>
          <svg
            className="inline mb-1"
            width="25"
            height="25"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
          >
            <path
              d="M9,13.7q1.4-5.6,7-5.6c5.6,0,6.3,4.2,9.1,4.9q2.8.7,4.9-2.1-1.4,5.6-7,5.6c-5.6,0-6.3-4.2-9.1-4.9Q11.1,10.9,9,13.7ZM2,22.1q1.4-5.6,7-5.6c5.6,0,6.3,4.2,9.1,4.9q2.8.7,4.9-2.1-1.4,5.6-7,5.6c-5.6,0-6.3-4.2-9.1-4.9Q4.1,19.3,2,22.1Z"
              className="current-color text-tailwind"
              fill="currentColor"
            />
          </svg>
          Tailwind
        </span>
        <span>
          <svg
            width="20"
            height="20"
            className="inline mb-1 mr-1"
            viewBox="0 0 80 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M39.9998 74.4531C39.0726 74.4531 38.1315 74.207 37.315 73.7422L28.7761 68.752C27.5029 68.041 28.1257 67.7949 28.5409 67.6582C30.2431 67.0703 30.5891 66.9473 32.402 65.9219C32.5958 65.8125 32.8449 65.8535 33.0386 65.9766L39.5985 69.8184C39.8337 69.9551 40.1659 69.9551 40.3873 69.8184L65.9485 55.2441C66.1837 55.1074 66.336 54.834 66.336 54.5605V25.4121C66.336 25.125 66.1837 24.8652 65.9346 24.7148L40.3873 10.1543C40.152 10.0176 39.8337 10.0176 39.5985 10.1543L14.065 24.7285C13.8159 24.8652 13.6636 25.1387 13.6636 25.4258V54.5605C13.6636 54.834 13.8159 55.1074 14.065 55.2305L21.0677 59.2227C24.8735 61.0957 27.1985 58.8945 27.1985 56.666V27.9004C27.1985 27.4902 27.5306 27.1758 27.9458 27.1758H31.1842C31.5855 27.1758 31.9315 27.4902 31.9315 27.9004V56.6797C31.9315 61.6836 29.1636 64.5547 24.3614 64.5547C22.8806 64.5547 21.7181 64.5547 18.4797 62.9688L11.7815 59.1543C10.1208 58.2109 9.09668 56.4473 9.09668 54.5469V25.4121C9.09668 23.5254 10.1208 21.748 11.7815 20.8047L37.315 6.23047C38.9342 5.32812 41.0793 5.32812 42.6846 6.23047L68.2458 20.8184C69.9065 21.7617 70.9306 23.5254 70.9306 25.4258V54.5605C70.9306 56.4473 69.9065 58.2109 68.2458 59.168L42.6846 73.7422C41.8681 74.207 40.9409 74.4531 39.9998 74.4531ZM60.6342 45.7285C60.6342 40.2734 56.8976 38.8242 49.0507 37.7988C41.1069 36.7598 40.3043 36.2266 40.3043 34.3945C40.3043 32.877 40.9824 30.8535 46.8641 30.8535C52.1092 30.8535 54.0467 31.9746 54.8494 35.4746C54.9185 35.8027 55.223 36.0488 55.569 36.0488H58.8904C59.098 36.0488 59.2918 35.9668 59.4302 35.8164C59.5686 35.666 59.6377 35.4609 59.6239 35.2559C59.1119 29.2266 55.0569 26.4238 46.8641 26.4238C39.5708 26.4238 35.2253 29.459 35.2253 34.5586C35.2253 40.082 39.5569 41.6133 46.5458 42.2969C54.9185 43.1035 55.569 44.3203 55.569 45.9473C55.569 48.7637 53.2717 49.9668 47.8882 49.9668C41.1208 49.9668 39.64 48.2852 39.1418 44.9629C39.0864 44.6074 38.7819 44.3477 38.4083 44.3477H35.1007C34.6855 44.3477 34.3672 44.6758 34.3672 45.0723C34.3672 49.3242 36.7061 54.3965 47.902 54.3965C55.9842 54.3828 60.6342 51.2246 60.6342 45.7285Z"
              fill="#8CC84B"
            />
          </svg>
          Node
        </span>
        <span>&#128516;</span>
      </p>
      <h1 className="pb-1 text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-t from-coolGray-900 to-warmGray-600 dark:bg-gradient-to-l dark:from-coolGray-100 dark:to-coolGray-300">
        Setup
      </h1>
      <div className="mb-8">
        <article className="max-w-none w-full prose prose-lg dark:prose-dark">
          <div>
            <ul>
              <li className="p-2">
                <span className="font-medium">Case</span>
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="far"
                  data-icon="caret-right"
                  className="svg-inline--fa fa-caret-right fa-w-7 mx-2"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 224 512"
                >
                  <path
                    fill="currentColor"
                    d="M0 144.048v223.895c0 42.638 51.731 64.151 81.941 33.941l112-111.943c18.745-18.745 18.746-49.137 0-67.882l-112-111.952C51.792 79.958 0 101.325 0 144.048zM160 256L48 368V144l112 112z"
                  ></path>
                </svg>
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://infomaxparis.com/fr/boitier-pc-gamer/31637-corsair-icue-5000x-rgb-tempered-glass-white-0840006627531.html"
                >
                  Corsair iCUE 5000X RGB Tempered Glass White
                </a>
              </li>
              <li className="p-2">
                <span className="font-medium">Motherboard</span>
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="far"
                  data-icon="caret-right"
                  className="svg-inline--fa fa-caret-right fa-w-7 mx-2"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 224 512"
                >
                  <path
                    fill="currentColor"
                    d="M0 144.048v223.895c0 42.638 51.731 64.151 81.941 33.941l112-111.943c18.745-18.745 18.746-49.137 0-67.882l-112-111.952C51.792 79.958 0 101.325 0 144.048zM160 256L48 368V144l112 112z"
                  ></path>
                </svg>
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://www.amazon.fr/ASUS-Gaming-ROG-stages-802-11ax/dp/B07TQVK1HJ/"
                  className="p-2 "
                >
                  ASUS ROG X570-E
                </a>
              </li>
              <li className="p-2">
                <span className="font-medium">PSU</span>
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="far"
                  data-icon="caret-right"
                  className="svg-inline--fa fa-caret-right fa-w-7 mx-2"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 224 512"
                >
                  <path
                    fill="currentColor"
                    d="M0 144.048v223.895c0 42.638 51.731 64.151 81.941 33.941l112-111.943c18.745-18.745 18.746-49.137 0-67.882l-112-111.952C51.792 79.958 0 101.325 0 144.048zM160 256L48 368V144l112 112z"
                  ></path>
                </svg>
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://www.corsair.com/uk/en/Categories/Products/Power-Supply-Units/Power-Supply-Units-Advanced/RMx-Series/p/CP-9020180-UK"
                  className="p-2 "
                >
                  Corsair RMx Series??? RM850x
                </a>
              </li>
              <li className="p-2">
                <span className="font-medium">GPU</span>
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="far"
                  data-icon="caret-right"
                  className="svg-inline--fa fa-caret-right fa-w-7 mx-2"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 224 512"
                >
                  <path
                    fill="currentColor"
                    d="M0 144.048v223.895c0 42.638 51.731 64.151 81.941 33.941l112-111.943c18.745-18.745 18.746-49.137 0-67.882l-112-111.952C51.792 79.958 0 101.325 0 144.048zM160 256L48 368V144l112 112z"
                  ></path>
                </svg>
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://www.nvidia.com/en-gb/geforce/graphics-cards/30-series/rtx-3080/"
                  className="p-2 "
                >
                  NVIDIA Geforce RTX 3080 Founder Edition
                </a>
              </li>
              <li className="p-2">
                <span className="font-medium">CPU</span>
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="far"
                  data-icon="caret-right"
                  className="svg-inline--fa fa-caret-right fa-w-7 mx-2"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 224 512"
                >
                  <path
                    fill="currentColor"
                    d="M0 144.048v223.895c0 42.638 51.731 64.151 81.941 33.941l112-111.943c18.745-18.745 18.746-49.137 0-67.882l-112-111.952C51.792 79.958 0 101.325 0 144.048zM160 256L48 368V144l112 112z"
                  ></path>
                </svg>
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://www.amazon.fr/AMD-Ryzen-7-5800X-RyzenTM/dp/B0815XFSGK/"
                  className="p-2 "
                >
                  AMD Ryzen 7 5800x
                </a>
              </li>
              <li className="p-2">
                <span className="font-medium">CPU Cooler</span>
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="far"
                  data-icon="caret-right"
                  className="svg-inline--fa fa-caret-right fa-w-7 mx-2"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 224 512"
                >
                  <path
                    fill="currentColor"
                    d="M0 144.048v223.895c0 42.638 51.731 64.151 81.941 33.941l112-111.943c18.745-18.745 18.746-49.137 0-67.882l-112-111.952C51.792 79.958 0 101.325 0 144.048zM160 256L48 368V144l112 112z"
                  ></path>
                </svg>
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://www.amazon.fr/Corsair-Watercooling-processeur-Lumineuses-Ventilateurs/dp/B08G1NSG7F/"
                  className="p-2 "
                >
                  Corsair iCUE H100i ELITE CAPELLIX
                </a>
              </li>
              <li className="p-2">
                <span className="font-medium">Memory</span>
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="far"
                  data-icon="caret-right"
                  className="svg-inline--fa fa-caret-right fa-w-7 mx-2"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 224 512"
                >
                  <path
                    fill="currentColor"
                    d="M0 144.048v223.895c0 42.638 51.731 64.151 81.941 33.941l112-111.943c18.745-18.745 18.746-49.137 0-67.882l-112-111.952C51.792 79.958 0 101.325 0 144.048zM160 256L48 368V144l112 112z"
                  ></path>
                </svg>
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://www.amazon.fr/dp/B08B6FBFM9/"
                  className="p-2 "
                >
                  PNY 2x16GB DDR4-3600
                </a>
              </li>
              <li className="p-2">
                <span className="font-medium">Storage</span>
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="far"
                  data-icon="caret-right"
                  className="svg-inline--fa fa-caret-right fa-w-7 mx-2"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 224 512"
                >
                  <path
                    fill="currentColor"
                    d="M0 144.048v223.895c0 42.638 51.731 64.151 81.941 33.941l112-111.943c18.745-18.745 18.746-49.137 0-67.882l-112-111.952C51.792 79.958 0 101.325 0 144.048zM160 256L48 368V144l112 112z"
                  ></path>
                </svg>
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://www.samsung.com/uk/memory-storage/nvme-ssd/970-evo-plus-nvme-m-2-ssd-1tb-mz-v7s1t0bw/"
                  className="p-2 "
                >
                  Samsung 970 EVO Plus NVMe M.2 SSD 1TB
                </a>
              </li>
              <li className="p-2">
                <span className="font-medium">Laptop</span>
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="far"
                  data-icon="caret-right"
                  className="svg-inline--fa fa-caret-right fa-w-7 mx-2"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 224 512"
                >
                  <path
                    fill="currentColor"
                    d="M0 144.048v223.895c0 42.638 51.731 64.151 81.941 33.941l112-111.943c18.745-18.745 18.746-49.137 0-67.882l-112-111.952C51.792 79.958 0 101.325 0 144.048zM160 256L48 368V144l112 112z"
                  ></path>
                </svg>
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://www.dell.com/fr-fr/work/shop/ordinateurs-portables-professionnels/xps-13/spd/xps-13-9310-laptop/bn93209sb"
                  className="p-2"
                >
                  DELL XPS 13
                </a>
              </li>
            </ul>
          </div>
        </article>
        <h1 className="pb-4 text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-t from-coolGray-900 to-warmGray-600 dark:bg-gradient-to-l dark:from-coolGray-100 dark:to-coolGray-300">
          Contact
        </h1>
        <Contact />
      </div>
    </div>
  </Main>
);

export default About;
