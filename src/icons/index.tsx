import { IconProps } from "@/types";

export const Icons = {
  burger: (props: IconProps) => (
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 50 50"
      width="24"
      height="18"
      {...props}
    >
      <path d="M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 Z M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 Z M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 Z" />
    </svg>
  ),
  arrow: (props: IconProps) => (
    <svg
      width="50"
      height="50"
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M15.9082 30.25L34.0947 19.75"
        stroke="white"
        strokeWidth="2.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M30.7988 32.0442L34.0931 19.75"
        stroke="white"
        strokeWidth="2.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21.7988 16.457L34.0931 19.7513"
        stroke="white"
        strokeWidth="2.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  swiperNext: (props: IconProps) => (
    <svg
      width="33"
      height="32"
      viewBox="0 0 33 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_1_2780)">
        <path
          d="M7.21094 16L25.5859 16"
          stroke="#1C1917"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M17.7109 23.875L25.5859 16"
          stroke="#1C1917"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M17.7109 8.125L25.5859 16"
          stroke="#1C1917"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_1_2780">
          <rect
            width="31.5"
            height="31.5"
            fill="white"
            transform="translate(0.648438 0.25)"
          />
        </clipPath>
      </defs>
    </svg>
  ),
  down: (props: IconProps) => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_3272_465)">
        <path
          d="M6 9L12 15L18 9"
          stroke="#555351"
          strokeWidth="1.25"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_3272_465">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  ),
  en: (props: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" {...props}>
      <path
        fill="#00247D"
        d="M0 9.059V13h5.628zM4.664 31H13v-5.837zM23 25.164V31h8.335zM0 23v3.941L5.63 23zM31.337 5H23v5.837zM36 26.942V23h-5.631zM36 13V9.059L30.371 13zM13 5H4.664L13 10.837z"
      />
      <path
        fill="#CF1B2B"
        d="M25.14 23l9.712 6.801c.471-.479.808-1.082.99-1.749L28.627 23H25.14zM13 23h-2.141l-9.711 6.8c.521.53 1.189.909 1.938 1.085L13 23.943V23zm10-10h2.141l9.711-6.8c-.521-.53-1.188-.909-1.937-1.085L23 12.057V13zm-12.141 0L1.148 6.2C.677 6.68.34 7.282.157 7.949L7.372 13h3.487z"
      />
      <path
        fill="#EEE"
        d="M36 21H21v10h2v-5.836L31.335 31H32c1.117 0 2.126-.461 2.852-1.199L25.14 23h3.487l7.215 5.052c.093-.337.158-.686.158-1.052v-.058L30.369 23H36v-2zM0 21v2h5.63L0 26.941V27c0 1.091.439 2.078 1.148 2.8l9.711-6.8H13v.943l-9.914 6.941c.294.07.598.116.914.116h.664L13 25.163V31h2V21H0zM36 9c0-1.091-.439-2.078-1.148-2.8L25.141 13H23v-.943l9.915-6.942C32.62 5.046 32.316 5 32 5h-.663L23 10.837V5h-2v10h15v-2h-5.629L36 9.059V9zM13 5v5.837L4.664 5H4c-1.118 0-2.126.461-2.852 1.2l9.711 6.8H7.372L.157 7.949C.065 8.286 0 8.634 0 9v.059L5.628 13H0v2h15V5h-2z"
      />
      <path fill="#CF1B2B" d="M21 15V5h-6v10H0v6h15v10h6V21h15v-6z" />
    </svg>
  ),
  ru: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 36 36"
      width="20"
      height="20"
      {...props}
    >
      <path
        fill="#CE2028"
        d="M36 27c0 2.209-1.791 4-4 4H4c-2.209 0-4-1.791-4-4v-4h36v4z"
      />
      <path fill="#22408C" d="M0 13h36v10H0z" />
      <path
        fill="#EEE"
        d="M32 5H4C1.791 5 0 6.791 0 9v4h36V9c0-2.209-1.791-4-4-4z"
      />
    </svg>
  ),
  uz: (props: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" {...props}>
      <path
        fill="#0099B5"
        d="M0 9v4h36V9c0-2.209-1.791-4-4-4H4C1.791 5 0 6.791 0 9z"
      />
      <path
        fill="#1EB53A"
        d="M36 27v-4H0v4c0 2.209 1.791 4 4 4h28c2.209 0 4-1.791 4-4z"
      />
      <path fill="#CE1126" d="M0 13h36v1.5H0zm0 8.5h36V23H0z" />
      <path fill="#EEE" d="M0 18v3.5h36v-7H0z" />
      <path
        fill="#FFF"
        d="M4.2 9.16c0-1.546 1.125-2.828 2.6-3.076-.169-.028-.343-.044-.52-.044-1.723 0-3.12 1.397-3.12 3.12s1.397 3.12 3.12 3.12c.177 0 .351-.016.52-.044-1.475-.248-2.6-1.53-2.6-3.076zm4.683 2.303l-.14-.431-.14.431h-.454l.367.267-.14.431.367-.267.366.267-.14-.431.367-.267zm2.702 0l-.14-.431-.14.431h-.453l.367.267-.14.431.366-.267.367.267-.14-.431.367-.267zm-.14-2.927l-.14.431h-.453l.367.267-.14.431.366-.267.367.267-.14-.431.367-.267h-.454zm2.843 2.927l-.14-.431-.14.431h-.453l.366.267-.14.431.367-.267.367.267-.14-.431.366-.267zm-.14-2.927l-.14.431h-.453l.366.267-.14.431.367-.267.367.267-.14-.431.366-.267h-.453zm0-2.496l-.14.431h-.453l.366.267-.14.431.367-.267.367.267-.14-.431.366-.267h-.453zm2.843 5.423l-.14-.431-.14.431h-.454l.367.267-.14.431.367-.267.366.267-.14-.431.367-.267zm-.14-2.927l-.14.431h-.454l.367.267-.14.431.367-.267.366.267-.14-.431.367-.267h-.453zm0-2.496l-.14.431h-.454l.367.267-.14.431.367-.267.366.267-.14-.431.367-.267h-.453zm2.842 5.423l-.14-.431-.14.431h-.453l.367.267-.14.431.366-.267.367.267-.14-.431.367-.267zm-.14-2.927l-.14.431h-.453l.367.267-.14.431.366-.267.367.267-.14-.431.367-.267h-.454zm0-2.496l-.14.431h-.453l.367.267-.14.431.366-.267.367.267-.14-.431.367-.267h-.454z"
      />
    </svg>
  ),
  location: (props: IconProps) => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_3297_1296)">
        <path
          d="M12 14C13.6569 14 15 12.6569 15 11C15 9.34315 13.6569 8 12 8C10.3431 8 9 9.34315 9 11C9 12.6569 10.3431 14 12 14Z"
          stroke="white"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M17.657 16.657L13.414 20.9C13.039 21.2746 12.5306 21.485 12.0005 21.485C11.4704 21.485 10.962 21.2746 10.587 20.9L6.343 16.657C5.22422 15.5381 4.46234 14.1127 4.15369 12.5608C3.84504 11.009 4.00349 9.40047 4.60901 7.93868C5.21452 6.4769 6.2399 5.22749 7.55548 4.34846C8.87107 3.46943 10.4178 3.00024 12 3.00024C13.5822 3.00024 15.1289 3.46943 16.4445 4.34846C17.7601 5.22749 18.7855 6.4769 19.391 7.93868C19.9965 9.40047 20.155 11.009 19.8463 12.5608C19.5377 14.1127 18.7758 15.5381 17.657 16.657V16.657Z"
          stroke="white"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_3297_1296">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  ),
};
