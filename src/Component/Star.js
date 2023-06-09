import React from "react";

const Star = () => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 16 15"
      fill="yellow"
      xmlns="http://www.w3.org/2000/svg"
    >
      <filter
        id="fillpartial13"
        primitiveUnits="objectBoundingBox"
        x="0%"
        y="0%"
        width="100%"
        height="100%"
      >
        <feFlood width="100%" height="100%" flood-color="#2B69A9"></feFlood>
        <feComposite operator="in" in2="SourceGraphic"></feComposite>
        <feComposite operator="over" in2="SourceGraphic"></feComposite>
      </filter>
      <path
        d="M7.08203 1.24219C7.24609 0.914062 7.51042 0.75 7.875 0.75C8.23958 0.75 8.50391 0.914062 8.66797 1.24219L10.4453 4.85156L14.4375 5.45312C14.8021 5.48958 15.0391 5.68099 15.1484 6.02734C15.2578 6.3737 15.1849 6.67448 14.9297 6.92969L12.0312 9.74609L12.7148 13.7383C12.7695 14.0846 12.651 14.3581 12.3594 14.5586C12.0677 14.7773 11.7669 14.8047 11.457 14.6406L7.875 12.7812L4.29297 14.6406C3.98307 14.8229 3.68229 14.8047 3.39062 14.5859C3.09896 14.3672 2.98047 14.0846 3.03516 13.7383L3.71875 9.74609L0.820312 6.92969C0.565104 6.67448 0.492188 6.3737 0.601562 6.02734C0.710938 5.68099 0.947917 5.48958 1.3125 5.45312L5.30469 4.85156L7.08203 1.24219Z"
        filter="url(#fillpartial13)"
      ></path>
    </svg>
  );
};

export default Star;
