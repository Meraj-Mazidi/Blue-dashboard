import React from "react";
import GoogleMapReact from "google-map-react";

const TestComponent = ({ text }) => <div>{text}</div>;

const Section1 = () => {
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 0,
  };
  return (
    <div className="w-full h-full rounded-md bg-[#fff] dark:bg-[#27293d] mb-5 shadow-md dark:shadow-lg p-4">
      {/* Top */}
      <div className="flex flex-col md:flex-row justify-between md:items-center">
        <div className="flex flex-col">
          <p className="text-xs font-light text-[#9a9a9a] pop">
            Location Tracking
          </p>
          <p className="text-[30px] !font-thin text-black dark:text-white pop">
            Google Map Service
          </p>
        </div>
      </div>

      {/* Content */}
      <div
        className="mt-5 min-h-[75vh] w-full !rounded-md overflow-hidden"
        style={{ height: "75vh", width: "100%", borderRadius: "10px" }}
      >
        <GoogleMapReact
          bootstrapURLKeys={{ key: "" }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        >
          <TestComponent lat={59.955413} lng={30.337844} text="" />
        </GoogleMapReact>
      </div>
    </div>
  );
};

export default Section1;
