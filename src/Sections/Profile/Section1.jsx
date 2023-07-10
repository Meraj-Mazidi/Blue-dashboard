import React from "react";
import TextField from "@mui/material/TextField";
import { message } from "antd";

const Section1 = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const success = () => {
    messageApi.open({
      type: "success",
      content:
        "Your Profile is saved successfully, and will be updated soon. Thank you!",
      duration: 5,
    });
  };
  return (
    <>
      {contextHolder}
      <div className="w-full rounded-md bg-[#27293d] mb-5 shadow-md dark:shadow-lg p-4">
        {/* Top */}
        <div className="flex flex-col md:flex-row justify-between md:items-center">
          <div className="flex flex-col">
            <p className="text-xs font-light text-[#9a9a9a] pop">
              Personal Profile Setting
            </p>
            <p className="text-[30px] !font-thin text-white pop">
              My Account Information
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="mt-5">
          <p className="text-lg font-medium text-white">Edit Profile</p>

          {/* Form */}
          <div className="w-full grid grid-cols-1 md:grid-cols-8 gap-5 mt-5">
            <div className="md:col-span-4 text-base">
              <TextField
                fullWidth
                label="Company Name"
                id="fullWidth"
                defaultValue="Meraj Mazidi Co."
                focused
                type="text"
              />
            </div>
            <div className="md:col-span-2">
              <TextField
                fullWidth
                label="User Name"
                id="fullWidth"
                defaultValue="@meraj-Mazidi"
                variant="outlined"
                focused
                required
                type="email"
              />
            </div>
            <div className="md:col-span-2">
              <TextField
                fullWidth
                label="Password"
                id="fullWidth"
                defaultValue="1234567890"
                variant="outlined"
                focused
                type="password"
                required
              />
            </div>
          </div>

          <div className="mt-5 md:mt-10 grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="col-span-1">
              {" "}
              <TextField
                fullWidth
                label="First Name"
                id="fullWidth"
                defaultValue="Meraj"
                focused
                type="text"
              />
            </div>
            <div className="col-span-1">
              {" "}
              <TextField
                fullWidth
                label="Last Name"
                id="fullWidth"
                defaultValue="Mazidi"
                focused
                type="text"
              />
            </div>
            <div className="col-span-1">
              {" "}
              <TextField
                fullWidth
                label="Website"
                id="fullWidth"
                defaultValue="https://meraj.vercel.app/"
                focused
                type="text"
              />
            </div>
          </div>

          <div className="w-full mt-5 md:mt-10 grid grid-cols-1 md:grid-cols-5 gap-5">
            <div className="md:col-span-3">
              <TextField
                fullWidth
                label="Address"
                id="fullWidth"
                defaultValue="Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09"
                focused
                type="text"
              />
            </div>
            <div className="md:col-span-2">
              <TextField
                fullWidth
                label="Phone Number"
                id="fullWidth"
                defaultValue="(+98) 936-334-7522"
                focused
                type="text"
              />
            </div>
          </div>

          <div className="mt-5 md:mt-10 grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="col-span-1">
              {" "}
              <TextField
                fullWidth
                label="City"
                id="fullWidth"
                defaultValue="Los Angeles, California"
                focused
                type="text"
              />
            </div>
            <div className="col-span-1">
              {" "}
              <TextField
                fullWidth
                label="Country"
                id="fullWidth"
                defaultValue="United States of America"
                focused
                type="text"
              />
            </div>
            <div className="col-span-1">
              {" "}
              <TextField
                fullWidth
                label="Postal Code"
                id="fullWidth"
                defaultValue="123456789"
                focused
                type="number"
              />
            </div>
          </div>

          <div className="w-full mt-5 md:mt-10">
            <TextField
              fullWidth
              label="About Me..."
              id="fullWidth"
              defaultValue="I'm a 25 years old self-taught Fronted-developer who absolutely LOVES to Code, Create & Design websites and applications. I'm a JS guy, who happens to adore React/Next! I just love exploring new things and learn new technologies in the process. Energetic and a great team player who in every opportunity, looks to find some new friends. Please feel free to check out my portfolio page right here: https://meraj.vercel.app/"
              focused
              type="text"
              multiline
              rows={5}
            />
          </div>

          <button
            className="w-full md:w-[300px] border border-[#1d8cf8] py-2 rounded-md activeBtn text-white font-[600] mt-10 text-lg"
            onClick={success}
          >
            Save
          </button>
        </div>
      </div>
    </>
  );
};

export default Section1;
