import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
// import styles from "@/styles/Home.module.css";
import UserDashboardLayout from "@/components/layouts/UserDashboardLayout";
import UpdateUser from "@/components/page/dashboard/Profile/Update";
const inter = Inter({ subsets: ["latin"] });

export default function UpdateProfile() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={""}>
        <UserDashboardLayout>
          {/* <Header /> */}
          <UpdateUser />
        </UserDashboardLayout>
        {/* <Footer /> */}
      </main>
    </>
  );
}
