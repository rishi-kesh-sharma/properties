import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
// import { Link, useNavigate } from "react-router-dom";
import Link from "next/link";
import Modal from "@/components/utils/Modal";
import ChangePasswordModal from "./ChangePasswordModal";
const Profile = () => {
  //   const navigate = useNavigate();

  // const { user, loading, isAuthenticated } = useSelector(state => state.user)

  // useEffect(() => {
  //     if (isAuthenticated === false) {
  //         navigate("/login")
  //     }

  // }, [isAuthenticated, navigate]);u
  const [openModal, setOpenModal] = useState(false);
  const toggleModal = (e) => {
    setOpenModal(!openModal);
  };

  const getLastName = () => {
    const nameArray = user.name.split(" ");
    return nameArray[nameArray.length - 1];
  };
  const user = { name: "rishi", avatar: { url: "" } };

  const loading = false;

  return (
    <>
      {/* <MetaData title="My Profile" /> */}

      {loading ? (
        <Loader />
      ) : (
        <>
          {/* <!-- details column --> */}
          <div className=" overflow-hidden shadow bg-white flex-1">
            {/* <!-- edit info container --> */}
            <div className="flex flex-col gap-12 m-4 sm:mx-8 sm:my-6">
              {/* <!-- personal info --> */}
              <div className="flex flex-col gap-5 items-start">
                <span className="font-medium text-lg">
                  Personal Information{" "}
                  <Link
                    href="profile/update"
                    className="text-sm text-primary-blue font-medium ml-8 cursor-pointer"
                  >
                    Edit
                  </Link>
                </span>

                <div
                  className="flex flex-col sm:flex-row items-center gap-3"
                  id="personalInputs"
                >
                  <div className="flex flex-col gap-0.5 w-64 px-3 py-1.5 rounded-sm border inputs cursor-not-allowed bg-gray-100 focus-within:border-primary-blue">
                    <label className="text-xs text-gray-500">First Name</label>
                    <input
                      type="text"
                      value={user.name.split(" ", 1)}
                      className="text-sm outline-none border-none cursor-not-allowed text-gray-500"
                      disabled
                    />
                  </div>
                  <div className="flex flex-col gap-0.5 w-64 px-3 py-1.5 rounded-sm border inputs cursor-not-allowed bg-gray-100 focus-within:border-primary-blue">
                    <label className="text-xs text-gray-500">Last Name</label>
                    <input
                      type="text"
                      value={getLastName()}
                      className="text-sm outline-none border-none cursor-not-allowed text-gray-500"
                      disabled
                    />
                  </div>
                </div>

                {/* <!-- gender --> */}
                <div className="flex flex-col gap-2">
                  <h2 className="text-sm">Your Gender</h2>
                  <div className="flex items-center gap-8" id="radioInput">
                    <div className="flex items-center gap-4 inputs text-gray-500 cursor-not-allowed">
                      <input
                        type="radio"
                        name="gender"
                        checked={user.gender === "male"}
                        id="male"
                        className="h-4 w-4 cursor-not-allowed"
                        disabled
                      />
                      <label htmlFor="male" className="cursor-not-allowed">
                        Male
                      </label>
                    </div>
                    <div className="flex items-center gap-4 inputs text-gray-500 cursor-not-allowed">
                      <input
                        type="radio"
                        name="gender"
                        checked={user.gender === "female"}
                        id="female"
                        className="h-4 w-4 cursor-not-allowed"
                        disabled
                      />
                      <label htmlFor="female" className="cursor-not-allowed">
                        Female
                      </label>
                    </div>
                  </div>
                </div>
                {/* <!-- gender --> */}
                <div className="flex flex-col gap-5 items-start">
                  <span className="font-medium text-sm">Mobile Number</span>

                  <div className="flex items-center gap-3">
                    <div className="flex flex-col gap-0.5 sm:w-64 px-3 py-1.5 rounded-sm border bg-gray-100 cursor-not-allowed focus-within:border-primary-blue">
                      <label className="text-xs text-gray-500">
                        Mobile Number
                      </label>
                      <input
                        type="tel"
                        value="+919876543210"
                        className="text-sm outline-none border-none text-gray-500 cursor-not-allowed"
                        disabled
                      />
                    </div>
                  </div>
                </div>
                <span className="font-medium text-sm">Email Address</span>

                <div className="flex items-center gap-3">
                  <div className="flex flex-col gap-0.5 sm:w-64 px-3 py-1.5 rounded-sm border bg-gray-100 cursor-not-allowed focus-within:border-primary-blue">
                    <label className="text-xs text-gray-500">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={user.email}
                      className="text-sm outline-none border-none cursor-not-allowed text-gray-500"
                      disabled
                    />
                  </div>
                </div>
                <button
                  onClick={toggleModal}
                  className="text-sm text-gray-50 font-medium rounded   bg-green-700 max-w-[150px] px-[1rem] py-[0.5rem]"
                >
                  Change Password
                </button>
              </div>
            </div>
            <div className="flex flex-col gap-5 items-start ml-[2rem] mt-[4rem]">
              <div className="flex flex-col gap-[1rem] ">
                <span className="font-medium text-lg">FAQS</span>
                <div>
                  <h4 className=" text-gray-600 text-lg  font-medium">
                    What happens when I update my email address (or mobile
                    number)?
                  </h4>
                  <p className="text-sm text-gray-400">
                    Your login email id (or mobile number) changes, likewise.
                    You'll receive all your Profile related communication on
                    your updated email address (or mobile number).
                  </p>
                </div>

                <div>
                  <h4 className=" text-gray-600 text-lg  font-medium">
                    When will my Flipkart Profile be updated with the new email
                    address (or mobile number)?
                  </h4>
                  <p className="text-sm text-gray-400">
                    It happens as soon as you confirm the verification code sent
                    to your email (or mobile) and save the changes.
                  </p>
                </div>

                <div>
                  <h4 className=" text-gray-600 text-lg  font-medium">
                    What happens to my existing Flipkart Profile when I update
                    my email address (or mobile number)?
                  </h4>
                  <p className="text-sm text-gray-400">
                    Updating your email address (or mobile number) doesn't
                    invalidate your Profile. Your Profile remains fully
                    functional. You'll continue seeing your Order history, saved
                    information and personal details.
                  </p>
                </div>

                <div>
                  <h4 className=" text-gray-600 text-lg  font-medium">
                    Does my Seller Profile get affected when I update my email
                    address?
                  </h4>
                  <p className="text-sm text-gray-400">
                    Flipkart has a 'single sign-on' policy. Any changes will
                    reflect in your Seller Profile also.
                  </p>
                </div>
              </div>
              {/* <!-- faqs --> */}

              {/* <!-- deactivate Profile --> */}
              <Link
                className="text-sm text-primary-blue font-medium bg-red-500 rounded text-gray-200 px-[1rem] py-[0.5rem]"
                href="/"
              >
                Deactivate Profile
              </Link>
              {/* <!-- deactivate Profile --> */}
            </div>
            {/* <!-- edit info container --> */}
          </div>
          {/* <!-- details column --> */}
        </>
      )}
      {openModal && <ChangePasswordModal toggleModal={toggleModal} />}
    </>
  );
};

export default Profile;
