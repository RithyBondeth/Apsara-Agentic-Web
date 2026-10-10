import { cn } from "@/lib/utils";

type KhmerOrnamentProps = {
  variant?: "arch" | "divider" | "corner" | "lotus";
  className?: string;
};

// Original linework inspired by Khmer floral carving and lotus forms.
// Decorative interpretations, rather than reproductions of historical carvings.
const lotusPaths = [
  "M40 61C25 44 29 25 40 8C51 25 55 44 40 61Z",
  "M40 61C20 58 11 43 10 26C29 29 40 43 40 61Z",
  "M40 61C60 58 69 43 70 26C51 29 40 43 40 61Z",
  "M40 65C18 68 5 58 3 45C21 43 32 52 40 65Z",
  "M40 65C62 68 75 58 77 45C59 43 48 52 40 65Z",
  "M23 73H57M30 78H50M40 17V55",
];

const archOutline =
  "M28 538V272C28 177 98 162 141 118C163 95 167 73 162 53C204 65 224 100 248 80C270 62 280 30 300 9C320 30 330 62 352 80C376 100 396 65 438 53C433 73 437 95 459 118C502 162 572 177 572 272V538";

export default function KhmerOrnament({
  variant = "lotus",
  className,
}: KhmerOrnamentProps) {
  if (variant === "arch") {
    return (
      <svg
        aria-hidden="true"
        focusable="false"
        viewBox="0 0 600 570"
        fill="none"
        className={cn("heritage-ornament heritage-arch", className)}
      >
        <g
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path
            data-ornament-stroke
            pathLength="1"
            d={archOutline}
            fill="var(--heritage-soft)"
          />
          <path
            data-ornament-stroke
            pathLength="1"
            d="M42 538V278C42 187 114 174 156 130C177 108 182 91 180 78C208 86 230 117 258 95C278 80 286 55 300 37C314 55 322 80 342 95C370 117 392 86 420 78C418 91 423 108 444 130C486 174 558 187 558 278V538"
          />
          <path
            data-ornament-stroke
            pathLength="1"
            d="M300 130C279 107 282 87 300 62C318 87 321 107 300 130ZM300 130C276 133 263 115 262 97C283 99 298 112 300 130ZM300 130C324 133 337 115 338 97C317 99 302 112 300 130ZM278 143H322"
          />
          <path
            data-ornament-stroke
            pathLength="1"
            d="M78 220C66 184 94 160 118 163C145 167 142 196 128 194C115 191 126 177 132 182M78 220C106 215 116 195 105 179C98 194 86 206 78 220"
          />
          <path
            data-ornament-stroke
            pathLength="1"
            d="M522 220C534 184 506 160 482 163C455 167 458 196 472 194C485 191 474 177 468 182M522 220C494 215 484 195 495 179C502 194 514 206 522 220"
          />
          <path
            data-ornament-stroke
            pathLength="1"
            d="M16 552H584M28 538H572M86 560H514"
          />
          <path
            data-ornament-highlight
            className="heritage-arch-trace"
            pathLength="1"
            strokeWidth="2.4"
            d={archOutline}
          />
        </g>
        <g fill="currentColor">
          <path d="M300 0L304 7L300 14L296 7Z" />
          <path d="M28 314L32 320L28 326L24 320ZM572 314L576 320L572 326L568 320Z" />
        </g>
      </svg>
    );
  }

  if (variant === "divider") {
    return (
      <div
        aria-hidden="true"
        className={cn("heritage-divider", className)}
        data-ornament-divider
      >
        <span className="heritage-divider-line" />
        <svg
          focusable="false"
          viewBox="0 0 160 80"
          fill="none"
          className="heritage-divider-flower"
        >
          <g
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <g transform="translate(40 -2)">
              {lotusPaths.map((d) => (
                <path key={d} data-ornament-stroke pathLength="1" d={d} />
              ))}
            </g>
            <path
              data-ornament-stroke
              pathLength="1"
              d="M41 60C23 57 16 41 7 44C-2 48 5 60 12 57C17 54 11 48 8 51M119 60C137 57 144 41 153 44C162 48 155 60 148 57C143 54 149 48 152 51"
            />
          </g>
        </svg>
        <span className="heritage-divider-line" />
      </div>
    );
  }

  if (variant === "corner") {
    return (
      <svg
        aria-hidden="true"
        focusable="false"
        viewBox="0 0 80 80"
        fill="none"
        className={cn("heritage-ornament heritage-corner", className)}
      >
        <g
          stroke="currentColor"
          strokeWidth="1.1"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path
            data-ornament-stroke
            pathLength="1"
            d="M5 5H61V61M11 11H55V55"
          />
          <path
            data-ornament-stroke
            pathLength="1"
            d="M53 45C27 51 16 33 25 23C34 14 47 23 43 31C39 39 31 32 35 28M53 45C57 30 53 22 45 18C43 30 46 39 53 45ZM53 45C37 48 28 56 28 67C43 65 53 58 53 45Z"
          />
          <path
            d="M15 5L11 9L7 5L11 1ZM61 51L65 55L61 59L57 55Z"
            fill="currentColor"
          />
        </g>
      </svg>
    );
  }

  return (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox="0 0 80 84"
      fill="none"
      className={cn("heritage-ornament heritage-lotus", className)}
    >
      <g
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {lotusPaths.map((d) => (
          <path key={d} data-ornament-stroke pathLength="1" d={d} />
        ))}
      </g>
    </svg>
  );
}
