// import Footer from "../partials/Footer";
// import Header from "../partials/header";
import UserDashboardSidebar from "./../partials/dashboard/UserDashboardSidebar";

export default function UserDashboardLayout({ children }) {
  const activeTab = "profile";
  const user = { avatar: { url: "", name: "" } };
  return (
    <main className="w-full mt-12 sm:mt-0">
      {/* <!-- row --> */}
      <div className="flex gap-3.5 sm:w-11/12 sm:mt-4 m-auto mb-7">
        {/* <Header /> */}
        <UserDashboardSidebar activeTab={activeTab} user={user} />
        <main>{children}</main>
        {/* <Footer /> */}
      </div>
    </main>
  );
}
