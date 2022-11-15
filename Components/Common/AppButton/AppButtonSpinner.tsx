import React from 'react'

interface ButtonSpinnerInterface {
    height?: number
}

const AppButtonSpinner: React.FC<ButtonSpinnerInterface> = ({ height }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        style={{
            margin: 'auto',
            display: 'block',
            shapeRendering: 'auto',
            maxHeight: '100%'
        }}
        width={100}
        height={height || 37}
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid"
    >
        <circle cx={84} cy={50} r={10} fill="#1d0e0b">
            <animate
                attributeName="r"
                repeatCount="indefinite"
                dur="0.4464285714285714s"
                calcMode="spline"
                keyTimes="0;1"
                values="10;0"
                keySplines="0 0.5 0.5 1"
                begin="0s"
            />
            <animate
                attributeName="fill"
                repeatCount="indefinite"
                dur="1.7857142857142856s"
                calcMode="discrete"
                keyTimes="0;0.25;0.5;0.75;1"
                values="#1d0e0b;#f3e7c9;#d88c51;#774023;#1d0e0b"
                begin="0s"
            />
        </circle>
        <circle cx={16} cy={50} r={10} fill="#1d0e0b">
            <animate
                attributeName="r"
                repeatCount="indefinite"
                dur="1.7857142857142856s"
                calcMode="spline"
                keyTimes="0;0.25;0.5;0.75;1"
                values="0;0;10;10;10"
                keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
                begin="0s"
            />
            <animate
                attributeName="cx"
                repeatCount="indefinite"
                dur="1.7857142857142856s"
                calcMode="spline"
                keyTimes="0;0.25;0.5;0.75;1"
                values="16;16;16;50;84"
                keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
                begin="0s"
            />
        </circle>
        <circle cx={50} cy={50} r={10} fill="#774023">
            <animate
                attributeName="r"
                repeatCount="indefinite"
                dur="1.7857142857142856s"
                calcMode="spline"
                keyTimes="0;0.25;0.5;0.75;1"
                values="0;0;10;10;10"
                keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
                begin="-0.4464285714285714s"
            />
            <animate
                attributeName="cx"
                repeatCount="indefinite"
                dur="1.7857142857142856s"
                calcMode="spline"
                keyTimes="0;0.25;0.5;0.75;1"
                values="16;16;16;50;84"
                keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
                begin="-0.4464285714285714s"
            />
        </circle>
        <circle cx={84} cy={50} r={10} fill="#d88c51">
            <animate
                attributeName="r"
                repeatCount="indefinite"
                dur="1.7857142857142856s"
                calcMode="spline"
                keyTimes="0;0.25;0.5;0.75;1"
                values="0;0;10;10;10"
                keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
                begin="-0.8928571428571428s"
            />
            <animate
                attributeName="cx"
                repeatCount="indefinite"
                dur="1.7857142857142856s"
                calcMode="spline"
                keyTimes="0;0.25;0.5;0.75;1"
                values="16;16;16;50;84"
                keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
                begin="-0.8928571428571428s"
            />
        </circle>
        <circle cx={16} cy={50} r={10} fill="#f3e7c9">
            <animate
                attributeName="r"
                repeatCount="indefinite"
                dur="1.7857142857142856s"
                calcMode="spline"
                keyTimes="0;0.25;0.5;0.75;1"
                values="0;0;10;10;10"
                keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
                begin="-1.3392857142857142s"
            />
            <animate
                attributeName="cx"
                repeatCount="indefinite"
                dur="1.7857142857142856s"
                calcMode="spline"
                keyTimes="0;0.25;0.5;0.75;1"
                values="16;16;16;50;84"
                keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
                begin="-1.3392857142857142s"
            />
        </circle>
    </svg>
)

export default AppButtonSpinner
