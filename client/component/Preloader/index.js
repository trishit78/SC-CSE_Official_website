'use client';
import styles from '../../styles/Preloader.module.css';
import '../../styles/Preloader.css';
import { useEffect, useState } from 'react';

const Preloader = ({ width, height, suspense }) => {
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsActive(true);
        }, 0);

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <div className={styles.spinnerContainer}>
                <div className={'wrapper'}>
                    {!suspense && (
                        <svg
                            version="1.0"
                            xmlns="http://www.w3.org/2000/svg"
                            width={width}
                            height={height}
                            viewBox="0 0 1080.000000 1080.000000"
                            preserveAspectRatio="xMidYMid meet"
                            className={`${isActive ? 'active' : ''}`}
                        >
                            <g
                                transform="translate(0.000000,1080.000000) scale(0.100000,-0.100000)"
                                stroke="none"
                            >
                                <path
                                    d="M2710 6694 c-408 -65 -778 -337 -963 -709 -180 -363 -181 -795 -2
    -1157 249 -504 802 -795 1354 -714 715 106 1211 767 1107 1475 -43 290 -163
    527 -371 736 -179 180 -393 298 -645 356 -117 27 -352 34 -480 13z m450 -489
    c69 -54 165 -130 213 -169 l89 -70 -24 -18 c-13 -9 -35 -23 -50 -29 l-28 -11
    0 -164 c0 -114 4 -170 12 -184 16 -24 0 -55 -27 -55 -27 0 -43 31 -27 55 8 13
    12 68 12 170 0 82 -2 150 -5 150 -2 0 -23 -12 -47 -26 l-43 -26 0 -81 c0 -69
    -5 -91 -28 -138 -71 -146 -242 -222 -388 -174 -148 49 -229 162 -229 319 l0
    74 -115 68 c-63 37 -114 68 -113 70 2 1 126 99 277 218 l274 215 61 -48 c34
    -26 117 -92 186 -146z m16 -977 l236 -133 -4 -175 c-3 -158 -6 -180 -27 -223
    -84 -173 -347 -98 -329 93 5 54 43 114 84 132 32 15 30 38 -9 89 -48 64 -122
    99 -206 99 -83 0 -132 -22 -187 -82 -50 -54 -68 -104 -68 -183 1 -125 88 -220
    227 -249 l27 -6 0 -100 c0 -55 -2 -100 -4 -100 -2 0 -102 57 -222 128 l-219
    127 0 225 0 225 220 133 c121 72 225 132 232 132 7 0 119 -60 249 -132z"
                                    className="svg-elem-1"
                                />
                                <path
                                    d="M2697 6148 c-120 -93 -217 -173 -217 -176 0 -4 30 -25 67 -46 l67
    -39 15 24 c34 54 109 117 167 139 80 30 186 25 260 -13 54 -28 129 -97 139
    -128 4 -11 10 -19 14 -19 9 0 120 65 133 78 4 4 -58 60 -139 124 -82 63 -180
    140 -219 171 l-71 56 -216 -171z"
                                    className="svg-elem-2"
                                />
                                <path
                                    d="M4920 6688 c0 -2 -128 -574 -284 -1273 -266 -1193 -282 -1271 -264
    -1279 10 -5 21 -7 23 -4 7 7 565 2516 565 2540 0 11 -7 18 -20 18 -11 0 -20
    -1 -20 -2z"
                                    className="svg-elem-3"
                                />
                                <path
                                    d="M5509 6668 c-1 -20 -1 -176 1 -305 0 -41 1 -43 30 -43 39 0 40 7 37
    205 l-2 160 -32 3 c-28 3 -33 0 -34 -20z"
                                    className="svg-elem-4"
                                />
                                <path
                                    d="M5717 6684 c-4 -4 -7 -88 -7 -186 l0 -178 135 0 135 0 0 30 0 29
    -102 3 -103 3 0 40 0 40 87 3 c92 3 109 13 88 53 -9 16 -22 19 -89 19 -77 0
    -79 1 -84 26 -11 60 -2 66 92 64 118 -3 113 -4 109 28 l-3 27 -126 3 c-69 1
    -128 -1 -132 -4z"
                                    className="svg-elem-5"
                                />
                                <path
                                    d="M6098 6678 c-3 -11 -3 -327 1 -350 1 -5 14 -8 30 -8 20 0 31 6 35 18
    6 23 6 312 0 335 -6 20 -60 24 -66 5z"
                                    className="svg-elem-6"
                                />
                                <path
                                    d="M5290 6078 c-52 -15 -86 -43 -103 -87 -18 -43 -17 -58 7 -114 18 -45
    67 -70 179 -93 108 -23 136 -62 74 -108 -37 -28 -107 -24 -170 9 -37 19 -53
    23 -68 15 -20 -11 -35 -52 -24 -70 14 -22 83 -48 148 -55 85 -9 143 6 194 50
    37 32 38 35 38 100 0 63 -3 69 -32 95 -17 16 -58 36 -90 45 -165 46 -168 48
    -168 80 0 56 91 73 173 33 l45 -21 24 29 c12 16 23 35 23 42 0 7 -25 24 -55
    38 -59 26 -131 30 -195 12z"
                                    className="svg-elem-7"
                                />
                                <path
                                    d="M5680 6072 c-22 -7 -28 -20 -22 -48 5 -28 36 -39 86 -31 18 3 38 2
    44 -2 8 -5 12 -70 14 -206 l3 -200 45 0 45 0 3 203 c2 151 6 202 15 203 6 1
    31 3 54 4 23 1 49 5 58 8 18 8 20 50 2 65 -13 11 -317 15 -347 4z"
                                    className="svg-elem-8"
                                />
                                <path
                                    d="M6177 6073 c-11 -11 -8 -325 4 -368 21 -76 106 -135 195 -135 53 0
    126 28 161 62 57 55 63 80 63 274 l0 174 -45 0 c-53 0 -48 19 -50 -190 -1 -99
    -6 -163 -14 -178 -40 -74 -172 -74 -213 0 -8 15 -14 84 -16 196 l-4 172 -37 0
    c-21 0 -41 -3 -44 -7z"
                                    className="svg-elem-9"
                                />
                                <path
                                    d="M6804 6080 c-19 -3 -30 -13 -34 -28 -3 -12 -3 -123 0 -245 l5 -222
    140 0 140 0 46 32 c25 17 58 50 74 74 25 35 30 54 33 115 6 116 -32 200 -111
    244 -35 20 -61 25 -153 30 -61 3 -124 3 -140 0z m241 -105 c59 -29 78 -72 71
    -162 -4 -65 -8 -76 -38 -108 -27 -28 -44 -36 -91 -43 -32 -5 -73 -6 -90 -3
    l-32 7 -3 153 c-2 110 1 157 10 168 17 21 121 13 173 -12z"
                                    className="svg-elem-10"
                                />
                                <path
                                    d="M7355 6068 c-3 -8 -4 -119 -3 -248 l3 -235 180 0 180 0 0 35 0 35
    -135 5 -135 5 -3 49 c-2 27 0 52 5 57 4 4 47 9 96 10 138 3 149 8 139 66 -4
    21 -9 23 -121 25 l-116 3 0 60 0 60 130 3 c79 2 132 7 136 13 4 6 3 23 0 38
    l-7 26 -172 3 c-134 2 -174 0 -177 -10z"
                                    className="svg-elem-11"
                                />
                                <path
                                    d="M7887 6079 c-16 -10 -18 -28 -17 -227 1 -119 4 -230 7 -245 5 -26 9
    -28 47 -25 l41 3 0 147 c0 80 3 150 7 154 11 10 180 -177 247 -273 18 -27 29
    -33 57 -33 l35 0 -2 228 c-1 125 -4 237 -6 250 -6 25 -40 38 -74 27 -21 -7
    -22 -9 -17 -156 3 -82 2 -149 -2 -149 -4 0 -36 35 -71 78 -193 234 -208 247
    -252 221z"
                                    className="svg-elem-12"
                                />
                                <path
                                    d="M8463 6073 c-19 -4 -23 -11 -23 -39 0 -28 4 -35 26 -40 14 -4 40 -4
    58 -1 61 10 58 28 65 -335 l1 -78 45 0 45 0 0 199 c0 149 3 202 13 208 10 6
    38 10 110 12 13 1 17 10 17 35 0 24 -5 36 -17 40 -21 6 -307 5 -340 -1z"
                                    className="svg-elem-13"
                                />
                                <path
                                    d="M9027 6076 c-95 -35 -134 -127 -87 -204 24 -39 77 -65 181 -88 80
    -19 111 -41 102 -74 -15 -58 -115 -70 -204 -24 -47 24 -52 24 -69 9 -31 -28
    -31 -53 1 -80 35 -29 80 -39 175 -40 61 0 77 4 119 30 40 25 52 39 63 76 13
    40 13 53 1 90 -12 37 -22 48 -64 71 -27 14 -77 32 -111 38 -119 23 -158 71
    -87 109 33 17 89 13 145 -11 l50 -21 19 24 c11 13 18 33 16 44 -6 48 -168 81
    -250 51z"
                                    className="svg-elem-14"
                                />
                                <path
                                    d="M9447 6073 c-2 -5 -1 -37 2 -73 6 -64 6 -65 36 -65 29 0 30 2 37 60
    5 33 6 66 3 73 -5 13 -71 17 -78 5z"
                                    className="svg-elem-15"
                                />
                                <path
                                    d="M5152 5371 c-65 -23 -115 -69 -149 -139 -22 -46 -25 -61 -20 -121 6
    -78 14 -96 65 -153 56 -62 104 -83 192 -83 88 0 141 23 184 80 22 28 25 39 16
    50 -24 29 -49 27 -92 -7 -38 -30 -48 -33 -109 -33 -81 0 -112 19 -146 85 -41
    80 -25 162 43 218 33 27 47 32 92 32 58 0 83 -9 124 -47 22 -21 31 -24 54 -16
    47 16 53 38 19 74 -63 67 -181 93 -273 60z"
                                    className="svg-elem-16"
                                />
                                <path
                                    d="M5595 5368 c-3 -7 -4 -119 -3 -248 l3 -235 43 -3 42 -3 0 95 c0 84 2
    96 18 97 31 1 166 2 199 0 l32 -1 3 -92 3 -93 43 -3 c29 -2 42 1 44 10 4 37 5
    456 1 471 -4 14 -13 17 -46 15 l-42 -3 -5 -105 -5 -105 -117 -3 c-137 -3 -126
    -13 -130 128 l-3 85 -38 3 c-24 2 -39 -1 -42 -10z"
                                    className="svg-elem-17"
                                />
                                <path
                                    d="M6378 5379 c-10 -5 -18 -14 -18 -20 0 -5 -9 -28 -19 -52 -81 -177
    -183 -418 -179 -422 5 -6 36 -9 66 -7 17 2 28 14 42 47 l19 45 121 0 121 0 20
    -45 c19 -42 23 -45 58 -45 21 0 40 3 44 6 6 6 -9 44 -56 145 -14 30 -51 115
    -83 189 -31 74 -62 140 -68 146 -17 18 -49 24 -68 13z m60 -207 c13 -31 26
    -70 29 -85 l5 -28 -63 3 c-62 3 -64 4 -61 28 1 14 11 43 21 65 10 22 21 48 24
    58 10 29 21 19 45 -41z"
                                    className="svg-elem-18"
                                />
                                <path
                                    d="M6793 5368 c-5 -8 -9 -104 -8 -223 3 -294 -2 -265 44 -265 46 0 51 9
    51 91 l0 59 69 0 c147 0 221 52 229 159 5 77 -27 137 -88 169 -39 19 -59 22
    -166 22 -86 0 -124 -4 -131 -12z m242 -78 c30 -11 59 -72 51 -105 -12 -49 -37
    -65 -106 -70 -101 -7 -100 -8 -100 96 l0 89 64 0 c36 0 76 -4 91 -10z"
                                    className="svg-elem-19"
                                />
                                <path
                                    d="M7283 5373 c-7 -2 -13 -20 -13 -38 0 -38 14 -45 85 -40 34 2 48 -1
    52 -12 3 -8 7 -63 8 -121 1 -59 2 -146 3 -194 l2 -88 45 0 45 0 0 198 c0 141
    3 201 12 210 7 7 38 12 71 12 l58 0 -3 38 -3 37 -175 2 c-96 1 -181 -1 -187
    -4z"
                                    className="svg-elem-20"
                                />
                                <path
                                    d="M7788 5158 c-2 -123 -2 -235 0 -250 l3 -28 179 0 c193 0 198 1 184
    56 -6 23 -8 23 -138 26 l-131 3 -3 58 -3 57 38 1 c34 0 102 3 176 7 25 2 27 5
    27 42 l0 39 -117 3 -118 3 0 60 0 60 133 3 133 3 -3 37 -3 37 -177 3 -177 2
    -3 -222z"
                                    className="svg-elem-21"
                                />
                                <path
                                    d="M8325 5369 c-10 -15 -6 -472 4 -482 5 -5 24 -7 42 -5 l34 3 3 73 3
    72 49 0 49 0 56 -75 57 -75 49 0 c48 0 49 1 38 23 -6 12 -31 48 -55 79 l-45
    57 37 33 c65 58 81 135 45 213 -22 47 -44 68 -90 84 -43 14 -267 15 -276 0z
    m266 -98 c31 -31 36 -64 18 -104 -16 -35 -49 -47 -129 -47 l-70 0 0 83 c0 46
    3 87 7 90 3 4 37 7 75 7 63 0 72 -3 99 -29z"
                                    className="svg-elem-22"
                                />
                                <path
                                    d="M4995 4644 c-86 -32 -155 -136 -155 -235 0 -177 160 -295 332 -245
    62 18 142 85 136 114 -2 9 -20 26 -41 37 l-38 20 -25 -29 c-55 -63 -165 -66
    -216 -5 -46 54 -50 144 -10 199 60 81 145 91 213 24 l39 -38 35 17 c20 9 38
    23 41 31 9 22 -46 84 -93 106 -51 24 -158 26 -218 4z"
                                    className="svg-elem-23"
                                />
                                <path
                                    d="M5545 4661 c-76 -19 -116 -62 -123 -129 -8 -91 37 -143 142 -163 87
    -16 136 -39 136 -63 0 -40 -16 -51 -70 -50 -35 1 -68 10 -106 30 l-56 29 -24
    -28 c-59 -69 2 -122 154 -134 68 -5 83 -3 126 18 62 30 90 74 90 140 0 27 -6
    60 -14 74 -16 29 -99 71 -167 85 -108 20 -133 50 -70 83 36 19 87 12 132 -17
    13 -9 30 -16 37 -16 18 0 62 66 55 83 -16 41 -167 78 -242 58z"
                                    className="svg-elem-24"
                                />
                                <path
                                    d="M5974 4649 c-8 -13 -15 -415 -7 -457 l5 -32 182 2 181 3 3 43 c4 49
    16 45 -140 42 -121 -2 -129 4 -121 73 l5 37 109 0 c108 0 109 0 115 25 3 14 3
    36 0 50 -6 25 -7 25 -116 25 l-110 0 0 50 0 50 63 1 c34 0 89 0 121 -1 62 -2
    76 7 76 47 0 48 -19 53 -196 52 -97 0 -166 -4 -170 -10z"
                                    className="svg-elem-25"
                                />
                                <path
                                    d="M3282 3298 c-18 -51 -32 -96 -32 -100 0 -17 29 -7 35 12 5 16 15 20
    50 20 35 0 45 -4 50 -20 6 -19 35 -29 35 -12 0 4 -15 49 -32 99 -27 76 -37 93
    -53 93 -17 0 -26 -17 -53 -92z m78 -25 c0 -8 -12 -13 -30 -13 l-30 0 15 36 c8
    20 15 39 16 43 1 10 28 -53 29 -66z"
                                    className="svg-elem-26"
                                />
                                <path
                                    d="M3519 3361 c-55 -55 -30 -148 45 -167 35 -8 66 1 96 28 22 20 22 23
    6 26 -9 2 -25 -3 -35 -12 -41 -37 -111 -4 -111 52 0 62 67 96 111 56 11 -10
    25 -14 36 -9 16 6 15 9 -10 31 -41 35 -99 33 -138 -5z"
                                    className="svg-elem-27"
                                />
                                <path
                                    d="M3815 3378 c-2 -7 -18 -50 -35 -96 -35 -98 -34 -92 -14 -92 9 0 18 9
    21 20 4 16 14 20 49 20 33 0 46 -5 54 -20 12 -23 30 -27 30 -6 0 8 -14 53 -31
    100 -25 67 -36 86 -51 86 -10 0 -21 -6 -23 -12z m41 -73 c19 -45 19 -45 -16
    -45 -16 0 -30 3 -30 7 0 10 24 73 28 73 1 0 10 -16 18 -35z"
                                    className="svg-elem-28"
                                />
                                <path
                                    d="M4002 3293 c3 -95 4 -98 27 -101 41 -6 92 8 117 33 36 36 33 97 -5
    136 -26 25 -37 29 -86 29 l-56 0 3 -97z m122 45 c38 -53 5 -118 -59 -118 l-35
    0 0 70 0 70 39 0 c30 0 44 -6 55 -22z"
                                    className="svg-elem-29"
                                />
                                <path
                                    d="M4250 3289 l0 -100 50 3 c59 4 71 22 18 26 -35 3 -38 6 -38 33 0 27
    3 29 36 29 45 0 42 24 -4 28 -26 3 -32 8 -32 27 0 20 6 24 37 27 62 5 53 28
    -11 28 l-56 0 0 -101z"
                                    className="svg-elem-30"
                                />
                                <path
                                    d="M4440 3290 c0 -81 3 -100 15 -100 10 0 15 16 17 63 l3 62 29 -62 c16
    -35 33 -63 38 -63 5 0 22 28 38 61 l29 62 3 -59 c2 -44 7 -59 18 -59 12 0 16
    19 18 98 3 96 2 98 -19 95 -15 -2 -29 -22 -52 -75 -17 -40 -34 -69 -38 -65 -3
    4 -19 37 -35 75 -20 47 -34 67 -46 67 -16 0 -18 -11 -18 -100z"
                                    className="svg-elem-31"
                                />
                                <path
                                    d="M4720 3383 c0 -3 14 -30 30 -60 20 -34 30 -67 30 -93 0 -29 4 -40 15
    -40 11 0 15 11 15 38 0 23 11 56 30 87 32 55 37 75 17 75 -7 0 -23 -21 -36
    -47 l-23 -48 -24 48 c-14 26 -31 47 -39 47 -8 0 -15 -3 -15 -7z"
                                    className="svg-elem-32"
                                />
                                <path
                                    d="M5093 3375 c-27 -19 -46 -75 -37 -109 3 -14 20 -38 37 -52 25 -21 38
    -25 69 -21 46 6 67 22 84 63 17 41 3 96 -31 118 -31 20 -94 21 -122 1z m110
    -33 c40 -35 7 -122 -46 -122 -80 0 -94 117 -17 142 19 6 40 -1 63 -20z"
                                    className="svg-elem-33"
                                />
                                <path
                                    d="M5330 3290 c0 -82 3 -100 15 -100 11 0 15 12 15 45 0 45 0 45 36 45
    45 0 42 24 -4 28 -26 3 -32 8 -32 27 0 21 5 24 42 27 23 2 43 9 46 16 3 9 -13
    12 -57 12 l-61 0 0 -100z"
                                    className="svg-elem-34"
                                />
                                <path
                                    d="M5630 3375 c0 -9 9 -15 25 -15 25 0 25 -1 25 -85 0 -69 3 -85 15 -85
    12 0 15 16 15 85 0 84 0 85 25 85 16 0 25 6 25 15 0 12 -14 15 -65 15 -51 0
    -65 -3 -65 -15z"
                                    className="svg-elem-35"
                                />
                                <path
                                    d="M5840 3290 l0 -100 55 0 c42 0 55 3 55 15 0 11 -11 15 -40 15 -38 0
    -40 2 -40 30 0 28 3 30 35 30 24 0 35 5 35 15 0 10 -11 15 -35 15 -30 0 -35 3
    -35 24 0 21 5 25 37 28 62 5 53 28 -11 28 l-56 0 0 -100z"
                                    className="svg-elem-36"
                                />
                                <path
                                    d="M6055 3367 c-18 -15 -28 -36 -32 -64 -5 -39 -2 -46 30 -78 24 -24 44
    -35 64 -35 30 0 93 33 93 50 0 15 -36 12 -50 -5 -18 -21 -64 -19 -85 5 -22 24
    -25 81 -6 104 17 20 84 21 101 1 13 -16 40 -20 40 -7 0 5 -10 18 -23 30 -32
    30 -97 30 -132 -1z"
                                    className="svg-elem-37"
                                />
                                <path
                                    d="M6292 3293 c2 -79 6 -98 18 -98 10 0 16 13 18 43 l3 42 45 0 44 0 0
    -45 c0 -33 4 -45 15 -45 12 0 15 18 15 100 0 82 -3 100 -15 100 -11 0 -15 -11
    -15 -40 l0 -40 -45 0 -45 0 0 40 c0 34 -3 40 -20 40 -20 0 -21 -5 -18 -97z"
                                    className="svg-elem-38"
                                />
                                <path
                                    d="M6540 3290 c0 -81 3 -100 15 -100 11 0 15 17 17 72 l3 71 48 -71 c66
    -101 77 -97 77 28 0 82 -3 100 -15 100 -12 0 -15 -14 -15 -65 0 -36 -3 -65 -7
    -65 -5 0 -27 30 -51 65 -61 94 -72 88 -72 -35z"
                                    className="svg-elem-39"
                                />
                                <path
                                    d="M6813 3372 c-33 -25 -46 -68 -33 -107 16 -49 45 -70 95 -70 50 0 90
    30 100 75 8 35 -16 95 -43 109 -31 16 -94 13 -119 -7z m110 -30 c41 -36 7
    -122 -48 -122 -76 0 -89 118 -15 142 19 6 40 -1 63 -20z"
                                    className="svg-elem-40"
                                />
                                <path
                                    d="M7050 3290 l0 -100 50 0 c38 0 50 4 50 15 0 10 -11 15 -35 15 l-35 0
    0 85 c0 69 -3 85 -15 85 -12 0 -15 -18 -15 -100z"
                                    className="svg-elem-41"
                                />
                                <path
                                    d="M7239 3361 c-78 -78 16 -210 114 -160 96 49 64 189 -43 189 -33 0
    -48 -6 -71 -29z m125 -23 c22 -31 20 -60 -5 -92 -28 -35 -70 -35 -99 1 -22 29
    -22 72 1 100 19 22 85 16 103 -9z"
                                    className="svg-elem-42"
                                />
                                <path
                                    d="M7506 3364 c-35 -36 -36 -101 -2 -141 20 -23 32 -28 71 -28 39 0 51
    5 71 28 13 15 24 39 24 53 0 22 -4 24 -50 24 -27 0 -50 -4 -50 -10 0 -5 16
    -10 35 -10 40 0 44 -11 15 -40 -60 -60 -144 27 -94 98 18 26 75 30 94 7 16
    -19 40 -19 40 -1 0 24 -41 46 -86 46 -31 0 -48 -6 -68 -26z"
                                    className="svg-elem-43"
                                />
                                <path
                                    d="M7740 3385 c0 -3 14 -32 30 -65 17 -33 30 -75 30 -95 0 -24 5 -35 15
    -35 11 0 15 11 15 38 0 24 11 59 30 93 34 62 36 69 15 69 -8 0 -26 -21 -39
    -47 l-24 -48 -21 48 c-11 27 -27 47 -36 47 -8 0 -15 -2 -15 -5z"
                                    className="svg-elem-44"
                                />
                            </g>
                        </svg>
                    )}
                    {suspense && (
                        <svg
                            version="1.0"
                            xmlns="http://www.w3.org/2000/svg"
                            width={width}
                            height={height}
                            viewBox="0 0 1080.000000 1080.000000"
                            preserveAspectRatio="xMidYMid meet"
                        >
                            <g
                                transform="translate(0.000000,1080.000000) scale(0.100000,-0.100000)"
                                stroke="none"
                            >
                                <path
                                    d="M2710 6694 c-408 -65 -778 -337 -963 -709 -180 -363 -181 -795 -2
                    -1157 249 -504 802 -795 1354 -714 715 106 1211 767 1107 1475 -43 290 -163
                    527 -371 736 -179 180 -393 298 -645 356 -117 27 -352 34 -480 13z m450 -489
                    c69 -54 165 -130 213 -169 l89 -70 -24 -18 c-13 -9 -35 -23 -50 -29 l-28 -11
                    0 -164 c0 -114 4 -170 12 -184 16 -24 0 -55 -27 -55 -27 0 -43 31 -27 55 8 13
                    12 68 12 170 0 82 -2 150 -5 150 -2 0 -23 -12 -47 -26 l-43 -26 0 -81 c0 -69
                    -5 -91 -28 -138 -71 -146 -242 -222 -388 -174 -148 49 -229 162 -229 319 l0
                    74 -115 68 c-63 37 -114 68 -113 70 2 1 126 99 277 218 l274 215 61 -48 c34
                    -26 117 -92 186 -146z m16 -977 l236 -133 -4 -175 c-3 -158 -6 -180 -27 -223
                    -84 -173 -347 -98 -329 93 5 54 43 114 84 132 32 15 30 38 -9 89 -48 64 -122
                    99 -206 99 -83 0 -132 -22 -187 -82 -50 -54 -68 -104 -68 -183 1 -125 88 -220
                    227 -249 l27 -6 0 -100 c0 -55 -2 -100 -4 -100 -2 0 -102 57 -222 128 l-219
                    127 0 225 0 225 220 133 c121 72 225 132 232 132 7 0 119 -60 249 -132z"
                                />
                                <path
                                    d="M2697 6148 c-120 -93 -217 -173 -217 -176 0 -4 30 -25 67 -46 l67
                    -39 15 24 c34 54 109 117 167 139 80 30 186 25 260 -13 54 -28 129 -97 139
                    -128 4 -11 10 -19 14 -19 9 0 120 65 133 78 4 4 -58 60 -139 124 -82 63 -180
                    140 -219 171 l-71 56 -216 -171z"
                                />
                                <path
                                    d="M4920 6688 c0 -2 -128 -574 -284 -1273 -266 -1193 -282 -1271 -264
                    -1279 10 -5 21 -7 23 -4 7 7 565 2516 565 2540 0 11 -7 18 -20 18 -11 0 -20
                    -1 -20 -2z"
                                />
                                <path
                                    d="M5509 6668 c-1 -20 -1 -176 1 -305 0 -41 1 -43 30 -43 39 0 40 7 37
                    205 l-2 160 -32 3 c-28 3 -33 0 -34 -20z"
                                />
                                <path
                                    d="M5717 6684 c-4 -4 -7 -88 -7 -186 l0 -178 135 0 135 0 0 30 0 29
                    -102 3 -103 3 0 40 0 40 87 3 c92 3 109 13 88 53 -9 16 -22 19 -89 19 -77 0
                    -79 1 -84 26 -11 60 -2 66 92 64 118 -3 113 -4 109 28 l-3 27 -126 3 c-69 1
                    -128 -1 -132 -4z"
                                />
                                <path
                                    d="M6098 6678 c-3 -11 -3 -327 1 -350 1 -5 14 -8 30 -8 20 0 31 6 35 18
                    6 23 6 312 0 335 -6 20 -60 24 -66 5z"
                                />
                                <path
                                    d="M5290 6078 c-52 -15 -86 -43 -103 -87 -18 -43 -17 -58 7 -114 18 -45
                    67 -70 179 -93 108 -23 136 -62 74 -108 -37 -28 -107 -24 -170 9 -37 19 -53
                    23 -68 15 -20 -11 -35 -52 -24 -70 14 -22 83 -48 148 -55 85 -9 143 6 194 50
                    37 32 38 35 38 100 0 63 -3 69 -32 95 -17 16 -58 36 -90 45 -165 46 -168 48
                    -168 80 0 56 91 73 173 33 l45 -21 24 29 c12 16 23 35 23 42 0 7 -25 24 -55
                    38 -59 26 -131 30 -195 12z"
                                />
                                <path
                                    d="M6804 6080 c-19 -3 -30 -13 -34 -28 -3 -12 -3 -123 0 -245 l5 -222
                    140 0 140 0 46 32 c25 17 58 50 74 74 25 35 30 54 33 115 6 116 -32 200 -111
                    244 -35 20 -61 25 -153 30 -61 3 -124 3 -140 0z m241 -105 c59 -29 78 -72 71
                    -162 -4 -65 -8 -76 -38 -108 -27 -28 -44 -36 -91 -43 -32 -5 -73 -6 -90 -3
                    l-32 7 -3 153 c-2 110 1 157 10 168 17 21 121 13 173 -12z"
                                />
                                <path
                                    d="M7887 6079 c-16 -10 -18 -28 -17 -227 1 -119 4 -230 7 -245 5 -26 9
                    -28 47 -25 l41 3 0 147 c0 80 3 150 7 154 11 10 180 -177 247 -273 18 -27 29
                    -33 57 -33 l35 0 -2 228 c-1 125 -4 237 -6 250 -6 25 -40 38 -74 27 -21 -7
                    -22 -9 -17 -156 3 -82 2 -149 -2 -149 -4 0 -36 35 -71 78 -193 234 -208 247
                    -252 221z"
                                />
                                <path
                                    d="M9027 6076 c-95 -35 -134 -127 -87 -204 24 -39 77 -65 181 -88 80
                    -19 111 -41 102 -74 -15 -58 -115 -70 -204 -24 -47 24 -52 24 -69 9 -31 -28
                    -31 -53 1 -80 35 -29 80 -39 175 -40 61 0 77 4 119 30 40 25 52 39 63 76 13
                    40 13 53 1 90 -12 37 -22 48 -64 71 -27 14 -77 32 -111 38 -119 23 -158 71
                    -87 109 33 17 89 13 145 -11 l50 -21 19 24 c11 13 18 33 16 44 -6 48 -168 81
                    -250 51z"
                                />
                                <path
                                    d="M5680 6072 c-22 -7 -28 -20 -22 -48 5 -28 36 -39 86 -31 18 3 38 2
                    44 -2 8 -5 12 -70 14 -206 l3 -200 45 0 45 0 3 203 c2 151 6 202 15 203 6 1
                    31 3 54 4 23 1 49 5 58 8 18 8 20 50 2 65 -13 11 -317 15 -347 4z"
                                />
                                <path
                                    d="M6177 6073 c-11 -11 -8 -325 4 -368 21 -76 106 -135 195 -135 53 0
                    126 28 161 62 57 55 63 80 63 274 l0 174 -45 0 c-53 0 -48 19 -50 -190 -1 -99
                    -6 -163 -14 -178 -40 -74 -172 -74 -213 0 -8 15 -14 84 -16 196 l-4 172 -37 0
                    c-21 0 -41 -3 -44 -7z"
                                />
                                <path
                                    d="M7355 6068 c-3 -8 -4 -119 -3 -248 l3 -235 180 0 180 0 0 35 0 35
                    -135 5 -135 5 -3 49 c-2 27 0 52 5 57 4 4 47 9 96 10 138 3 149 8 139 66 -4
                    21 -9 23 -121 25 l-116 3 0 60 0 60 130 3 c79 2 132 7 136 13 4 6 3 23 0 38
                    l-7 26 -172 3 c-134 2 -174 0 -177 -10z"
                                />
                                <path
                                    d="M8463 6073 c-19 -4 -23 -11 -23 -39 0 -28 4 -35 26 -40 14 -4 40 -4
                    58 -1 61 10 58 28 65 -335 l1 -78 45 0 45 0 0 199 c0 149 3 202 13 208 10 6
                    38 10 110 12 13 1 17 10 17 35 0 24 -5 36 -17 40 -21 6 -307 5 -340 -1z"
                                />
                                <path
                                    d="M9447 6073 c-2 -5 -1 -37 2 -73 6 -64 6 -65 36 -65 29 0 30 2 37 60
                    5 33 6 66 3 73 -5 13 -71 17 -78 5z"
                                />
                                <path
                                    d="M5152 5371 c-65 -23 -115 -69 -149 -139 -22 -46 -25 -61 -20 -121 6
                    -78 14 -96 65 -153 56 -62 104 -83 192 -83 88 0 141 23 184 80 22 28 25 39 16
                    50 -24 29 -49 27 -92 -7 -38 -30 -48 -33 -109 -33 -81 0 -112 19 -146 85 -41
                    80 -25 162 43 218 33 27 47 32 92 32 58 0 83 -9 124 -47 22 -21 31 -24 54 -16
                    47 16 53 38 19 74 -63 67 -181 93 -273 60z"
                                />
                                <path
                                    d="M6378 5379 c-10 -5 -18 -14 -18 -20 0 -5 -9 -28 -19 -52 -81 -177
                    -183 -418 -179 -422 5 -6 36 -9 66 -7 17 2 28 14 42 47 l19 45 121 0 121 0 20
                    -45 c19 -42 23 -45 58 -45 21 0 40 3 44 6 6 6 -9 44 -56 145 -14 30 -51 115
                    -83 189 -31 74 -62 140 -68 146 -17 18 -49 24 -68 13z m60 -207 c13 -31 26
                    -70 29 -85 l5 -28 -63 3 c-62 3 -64 4 -61 28 1 14 11 43 21 65 10 22 21 48 24
                    58 10 29 21 19 45 -41z"
                                />
                                <path
                                    d="M5595 5368 c-3 -7 -4 -119 -3 -248 l3 -235 43 -3 42 -3 0 95 c0 84 2
                    96 18 97 31 1 166 2 199 0 l32 -1 3 -92 3 -93 43 -3 c29 -2 42 1 44 10 4 37 5
                    456 1 471 -4 14 -13 17 -46 15 l-42 -3 -5 -105 -5 -105 -117 -3 c-137 -3 -126
                    -13 -130 128 l-3 85 -38 3 c-24 2 -39 -1 -42 -10z"
                                />
                                <path
                                    d="M6793 5368 c-5 -8 -9 -104 -8 -223 3 -294 -2 -265 44 -265 46 0 51 9
                    51 91 l0 59 69 0 c147 0 221 52 229 159 5 77 -27 137 -88 169 -39 19 -59 22
                    -166 22 -86 0 -124 -4 -131 -12z m242 -78 c30 -11 59 -72 51 -105 -12 -49 -37
                    -65 -106 -70 -101 -7 -100 -8 -100 96 l0 89 64 0 c36 0 76 -4 91 -10z"
                                />
                                <path
                                    d="M7283 5373 c-7 -2 -13 -20 -13 -38 0 -38 14 -45 85 -40 34 2 48 -1
                    52 -12 3 -8 7 -63 8 -121 1 -59 2 -146 3 -194 l2 -88 45 0 45 0 0 198 c0 141
                    3 201 12 210 7 7 38 12 71 12 l58 0 -3 38 -3 37 -175 2 c-96 1 -181 -1 -187
                    -4z"
                                />
                                <path
                                    d="M7788 5158 c-2 -123 -2 -235 0 -250 l3 -28 179 0 c193 0 198 1 184
                    56 -6 23 -8 23 -138 26 l-131 3 -3 58 -3 57 38 1 c34 0 102 3 176 7 25 2 27 5
                    27 42 l0 39 -117 3 -118 3 0 60 0 60 133 3 133 3 -3 37 -3 37 -177 3 -177 2
                    -3 -222z"
                                />
                                <path
                                    d="M8325 5369 c-10 -15 -6 -472 4 -482 5 -5 24 -7 42 -5 l34 3 3 73 3
                    72 49 0 49 0 56 -75 57 -75 49 0 c48 0 49 1 38 23 -6 12 -31 48 -55 79 l-45
                    57 37 33 c65 58 81 135 45 213 -22 47 -44 68 -90 84 -43 14 -267 15 -276 0z
                    m266 -98 c31 -31 36 -64 18 -104 -16 -35 -49 -47 -129 -47 l-70 0 0 83 c0 46
                    3 87 7 90 3 4 37 7 75 7 63 0 72 -3 99 -29z"
                                />
                                <path
                                    d="M5545 4661 c-76 -19 -116 -62 -123 -129 -8 -91 37 -143 142 -163 87
                    -16 136 -39 136 -63 0 -40 -16 -51 -70 -50 -35 1 -68 10 -106 30 l-56 29 -24
                    -28 c-59 -69 2 -122 154 -134 68 -5 83 -3 126 18 62 30 90 74 90 140 0 27 -6
                    60 -14 74 -16 29 -99 71 -167 85 -108 20 -133 50 -70 83 36 19 87 12 132 -17
                    13 -9 30 -16 37 -16 18 0 62 66 55 83 -16 41 -167 78 -242 58z"
                                />
                                <path
                                    d="M4995 4644 c-86 -32 -155 -136 -155 -235 0 -177 160 -295 332 -245
                    62 18 142 85 136 114 -2 9 -20 26 -41 37 l-38 20 -25 -29 c-55 -63 -165 -66
                    -216 -5 -46 54 -50 144 -10 199 60 81 145 91 213 24 l39 -38 35 17 c20 9 38
                    23 41 31 9 22 -46 84 -93 106 -51 24 -158 26 -218 4z"
                                />
                                <path
                                    d="M5974 4649 c-8 -13 -15 -415 -7 -457 l5 -32 182 2 181 3 3 43 c4 49
                    16 45 -140 42 -121 -2 -129 4 -121 73 l5 37 109 0 c108 0 109 0 115 25 3 14 3
                    36 0 50 -6 25 -7 25 -116 25 l-110 0 0 50 0 50 63 1 c34 0 89 0 121 -1 62 -2
                    76 7 76 47 0 48 -19 53 -196 52 -97 0 -166 -4 -170 -10z"
                                />
                                <path
                                    d="M3282 3298 c-18 -51 -32 -96 -32 -100 0 -17 29 -7 35 12 5 16 15 20
                    50 20 35 0 45 -4 50 -20 6 -19 35 -29 35 -12 0 4 -15 49 -32 99 -27 76 -37 93
                    -53 93 -17 0 -26 -17 -53 -92z m78 -25 c0 -8 -12 -13 -30 -13 l-30 0 15 36 c8
                    20 15 39 16 43 1 10 28 -53 29 -66z"
                                />
                                <path
                                    d="M3519 3361 c-55 -55 -30 -148 45 -167 35 -8 66 1 96 28 22 20 22 23
                    6 26 -9 2 -25 -3 -35 -12 -41 -37 -111 -4 -111 52 0 62 67 96 111 56 11 -10
                    25 -14 36 -9 16 6 15 9 -10 31 -41 35 -99 33 -138 -5z"
                                />
                                <path
                                    d="M3815 3378 c-2 -7 -18 -50 -35 -96 -35 -98 -34 -92 -14 -92 9 0 18 9
                    21 20 4 16 14 20 49 20 33 0 46 -5 54 -20 12 -23 30 -27 30 -6 0 8 -14 53 -31
                    100 -25 67 -36 86 -51 86 -10 0 -21 -6 -23 -12z m41 -73 c19 -45 19 -45 -16
                    -45 -16 0 -30 3 -30 7 0 10 24 73 28 73 1 0 10 -16 18 -35z"
                                />
                                <path
                                    d="M4002 3293 c3 -95 4 -98 27 -101 41 -6 92 8 117 33 36 36 33 97 -5
                    136 -26 25 -37 29 -86 29 l-56 0 3 -97z m122 45 c38 -53 5 -118 -59 -118 l-35
                    0 0 70 0 70 39 0 c30 0 44 -6 55 -22z"
                                />
                                <path
                                    d="M4250 3289 l0 -100 50 3 c59 4 71 22 18 26 -35 3 -38 6 -38 33 0 27
                    3 29 36 29 45 0 42 24 -4 28 -26 3 -32 8 -32 27 0 20 6 24 37 27 62 5 53 28
                    -11 28 l-56 0 0 -101z"
                                />
                                <path
                                    d="M4440 3290 c0 -81 3 -100 15 -100 10 0 15 16 17 63 l3 62 29 -62 c16
                    -35 33 -63 38 -63 5 0 22 28 38 61 l29 62 3 -59 c2 -44 7 -59 18 -59 12 0 16
                    19 18 98 3 96 2 98 -19 95 -15 -2 -29 -22 -52 -75 -17 -40 -34 -69 -38 -65 -3
                    4 -19 37 -35 75 -20 47 -34 67 -46 67 -16 0 -18 -11 -18 -100z"
                                />
                                <path
                                    d="M4720 3383 c0 -3 14 -30 30 -60 20 -34 30 -67 30 -93 0 -29 4 -40 15
                    -40 11 0 15 11 15 38 0 23 11 56 30 87 32 55 37 75 17 75 -7 0 -23 -21 -36
                    -47 l-23 -48 -24 48 c-14 26 -31 47 -39 47 -8 0 -15 -3 -15 -7z"
                                />
                                <path
                                    d="M5093 3375 c-27 -19 -46 -75 -37 -109 3 -14 20 -38 37 -52 25 -21 38
                    -25 69 -21 46 6 67 22 84 63 17 41 3 96 -31 118 -31 20 -94 21 -122 1z m110
                    -33 c40 -35 7 -122 -46 -122 -80 0 -94 117 -17 142 19 6 40 -1 63 -20z"
                                />
                                <path
                                    d="M5330 3290 c0 -82 3 -100 15 -100 11 0 15 12 15 45 0 45 0 45 36 45
                    45 0 42 24 -4 28 -26 3 -32 8 -32 27 0 21 5 24 42 27 23 2 43 9 46 16 3 9 -13
                    12 -57 12 l-61 0 0 -100z"
                                />
                                <path
                                    d="M5630 3375 c0 -9 9 -15 25 -15 25 0 25 -1 25 -85 0 -69 3 -85 15 -85
                    12 0 15 16 15 85 0 84 0 85 25 85 16 0 25 6 25 15 0 12 -14 15 -65 15 -51 0
                    -65 -3 -65 -15z"
                                />
                                <path
                                    d="M5840 3290 l0 -100 55 0 c42 0 55 3 55 15 0 11 -11 15 -40 15 -38 0
                    -40 2 -40 30 0 28 3 30 35 30 24 0 35 5 35 15 0 10 -11 15 -35 15 -30 0 -35 3
                    -35 24 0 21 5 25 37 28 62 5 53 28 -11 28 l-56 0 0 -100z"
                                />
                                <path
                                    d="M6055 3367 c-18 -15 -28 -36 -32 -64 -5 -39 -2 -46 30 -78 24 -24 44
                    -35 64 -35 30 0 93 33 93 50 0 15 -36 12 -50 -5 -18 -21 -64 -19 -85 5 -22 24
                    -25 81 -6 104 17 20 84 21 101 1 13 -16 40 -20 40 -7 0 5 -10 18 -23 30 -32
                    30 -97 30 -132 -1z"
                                />
                                <path
                                    d="M6292 3293 c2 -79 6 -98 18 -98 10 0 16 13 18 43 l3 42 45 0 44 0 0
                    -45 c0 -33 4 -45 15 -45 12 0 15 18 15 100 0 82 -3 100 -15 100 -11 0 -15 -11
                    -15 -40 l0 -40 -45 0 -45 0 0 40 c0 34 -3 40 -20 40 -20 0 -21 -5 -18 -97z"
                                />
                                <path
                                    d="M6540 3290 c0 -81 3 -100 15 -100 11 0 15 17 17 72 l3 71 48 -71 c66
                    -101 77 -97 77 28 0 82 -3 100 -15 100 -12 0 -15 -14 -15 -65 0 -36 -3 -65 -7
                    -65 -5 0 -27 30 -51 65 -61 94 -72 88 -72 -35z"
                                />
                                <path
                                    d="M6813 3372 c-33 -25 -46 -68 -33 -107 16 -49 45 -70 95 -70 50 0 90
                    30 100 75 8 35 -16 95 -43 109 -31 16 -94 13 -119 -7z m110 -30 c41 -36 7
                    -122 -48 -122 -76 0 -89 118 -15 142 19 6 40 -1 63 -20z"
                                />
                                <path
                                    d="M7050 3290 l0 -100 50 0 c38 0 50 4 50 15 0 10 -11 15 -35 15 l-35 0
                    0 85 c0 69 -3 85 -15 85 -12 0 -15 -18 -15 -100z"
                                />
                                <path
                                    d="M7239 3361 c-78 -78 16 -210 114 -160 96 49 64 189 -43 189 -33 0
                    -48 -6 -71 -29z m125 -23 c22 -31 20 -60 -5 -92 -28 -35 -70 -35 -99 1 -22 29
                    -22 72 1 100 19 22 85 16 103 -9z"
                                />
                                <path
                                    d="M7506 3364 c-35 -36 -36 -101 -2 -141 20 -23 32 -28 71 -28 39 0 51
                    5 71 28 13 15 24 39 24 53 0 22 -4 24 -50 24 -27 0 -50 -4 -50 -10 0 -5 16
                    -10 35 -10 40 0 44 -11 15 -40 -60 -60 -144 27 -94 98 18 26 75 30 94 7 16
                    -19 40 -19 40 -1 0 24 -41 46 -86 46 -31 0 -48 -6 -68 -26z"
                                />
                                <path
                                    d="M7740 3385 c0 -3 14 -32 30 -65 17 -33 30 -75 30 -95 0 -24 5 -35 15
                    -35 11 0 15 11 15 38 0 24 11 59 30 93 34 62 36 69 15 69 -8 0 -26 -21 -39
                    -47 l-24 -48 -21 48 c-11 27 -27 47 -36 47 -8 0 -15 -2 -15 -5z"
                                />
                            </g>
                        </svg>
                    )}
                </div>
            </div>
        </>
    );
};
export default Preloader;
