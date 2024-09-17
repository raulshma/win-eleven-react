export default function WeatherSunny() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_2108_6979)">
        <g filter="url(#filter0_d_2108_6979)">
          <path
            d="M10 19C14.9706 19 19 14.9706 19 10C19 5.02944 14.9706 1 10 1C5.02944 1 1 5.02944 1 10C1 14.9706 5.02944 19 10 19Z"
            fill="url(#paint0_linear_2108_6979)"
          />
        </g>
      </g>
      <defs>
        <filter
          id="filter0_d_2108_6979"
          x="-1.5"
          y="-0.5"
          width="23"
          height="23"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="1" />
          <feGaussianBlur stdDeviation="1.25" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_2108_6979"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_2108_6979"
            result="shape"
          />
        </filter>
        <linearGradient
          id="paint0_linear_2108_6979"
          x1="3.53127"
          y1="3.53123"
          x2="18.999"
          y2="17.48"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.162966" stopColor="#FFE975" />
          <stop offset="0.53915" stopColor="#FFB729" />
          <stop offset="0.742056" stopColor="#FF9900" />
        </linearGradient>
        <clipPath id="clip0_2108_6979">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
