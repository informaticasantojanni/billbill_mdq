import "../../../../src/styles.css";

const ArrowUp = ({ rotate }) => {

    const svgStyle = {
        transform: `rotate(${rotate}deg)`,
        transition: 'transform 0.3s ease-in-out', // Adjust the duration and easing function as needed
        background: 'none', // Remove the background
        border: 'none', // Remove the border
        color: '#f8f8f8',
    };

    const pathStyle = {
        fill: 'var(--colorPri2)', // Set the fill color, default to #f8f8f8 if not provided
    };

    return (
        <svg xmlns="http://www.w3.org/2000/svg" height="36" viewBox="0 -960 960 960" width="36"
            style={svgStyle}>
            <path d="M480-528 296-344l-56-56 240-240 240 240-56 56-184-184Z"
                style={pathStyle} />
        </svg>
    )
}

export default ArrowUp;