import React from "react";
import AdminNavbar from "../Navbar/adminNavbar";
import Footer from "../Footer/footer";
import Commoncode from "../Others/commoncode";

const Admin = () => {
  return (
    <>
      <AdminNavbar />
      <section className="banner-part sub-main-banner float-start w-100">
        <div className="baner-imghi">
          <img src="images/sub-banner01.jpg" alt="sub-banner" />
        </div>
        <div className="sub-banner">
          <div className="container">
            <h1 className="text-center">Admin</h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb justify-content-center">
                {/* <li className="breadcrumb-item">
                  <Link to="/">HOME</Link>
                </li> */}
                <li className="breadcrumb-item active" aria-current="page">
                  Admin
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </section>
      <h1>ADMIN DASHBOARD</h1>
      <Commoncode />
      <Footer />
    </>
  );
};

export default Admin;
