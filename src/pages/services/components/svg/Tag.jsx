const Tag = ({color, width, height}) => {

    return (
        <svg width={width} height={height} viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M157.373 12.9574C157.111 7.36501 152.636 2.88989 147.044 2.62846L91.1214 0.0125993C88.0732 -0.134926 85.1026 1.0187 82.944 3.17789L3.17722 82.9452C1.14332 84.9796 0 87.7382 0 90.6154C0 93.4927 1.14278 96.2518 3.17722 98.2862L61.715 156.823C63.8324 158.941 66.6088 160 69.3852 160C72.1611 160 74.9375 158.941 77.056 156.823L156.822 77.0572C158.981 74.8986 160.131 71.9296 159.988 68.8799L157.373 12.9574ZM136.939 41.2676C131.912 46.2949 123.76 46.2949 118.733 41.2676C113.706 36.2404 113.706 28.0891 118.733 23.0618C123.76 18.0346 131.912 18.0346 136.939 23.0618C141.966 28.0891 141.967 36.2398 136.939 41.2676Z" 
            fill={color} />
        </svg>
    )
}

export default Tag;