import { Container } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import Link from "next/link"; // Import the Link component from Next.js
import Image from "next/image";
import { useAppSelector } from "@/store/store";

// File Import
import { Sidebar } from "@/component";
import { AuthApi } from "@/api";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [sticky, setSticky] = useState<string | null>(null);
  const carts = useAppSelector(
    (state: any) => state.productReducer.value.carts
  );
  const { hotline, header, logo } = useAppSelector(
    (state) => state.themeReducer.value.storeInfo
  );

  useEffect(() => {
    getAuthToken();
    window.addEventListener("scroll", isSticky);

    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  }, []);

  useEffect(() => {
    const handleOutsideClick = (e: any) => {
      const sidebarSelect = document.querySelector(`.sidebar`);
      if (isOpen && !sidebarSelect?.contains(e.target)) {
        setIsOpen(false);
      }
    };

    // Add the event listener when the component mounts
    document.addEventListener("mousedown", handleOutsideClick);

    // Remove the event listener when the component unmounts
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen]);

  const isSticky = () => {
    const scrollTop = window.scrollY;
    const screenWidth = window.screen.width > 500 ? 450 : 200;
    const stickyClass: string | null =
      scrollTop >= screenWidth ? "is-sticky" : null;
    setSticky(stickyClass);
  };

  const getAuthToken = async () => {
    try {
      const response = await AuthApi.getToken();
      console.log("Response: ", response);
    } catch (error) {
      console.log(error);
    }
  };

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      {/* Header Top Start */}
      <div className="header_top d-none d-md-block">
        <Container className="d-flex justify-content-between align-items-center">
          <ul className="header_support d-md-flex justify-content-between align-items-center">
            <li className="me-3">{hotline?.text}</li>
            <li>
              <i className="fas fa-phone"></i> Call Us:
              <a className="ms-2" href={hotline?.mobile}>
                {hotline?.mobile}
              </a>
            </li>
          </ul>
          <ul className="header_dropdown d-md-flex justify-content-between align-items-center">
            <li className="dropdown_menu">
              {/* Use Next.js Link for client-side routing */}
              <Link href="/account/profile">
                <i className="fas fa-user" aria-hidden="true"></i>My Account
                <i
                  className="down_carret fas fa-chevron-down"
                  aria-hidden="true"
                ></i>
              </Link>
              <div className="custom_dropdown">
                <ul>
                  <li>
                    <Link href="/auth/login">Login</Link>
                  </li>
                  <li>
                    <Link href="/auth/register">Register</Link>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </Container>
      </div>
      {/* Header Top End */}

      {/* Header Nav Start */}
      <div className={`header_nav d-none d-md-block ${sticky}`}>
        <Container className="d-flex justify-content-between align-items-center">
          <ul className="left_nav d-flex justify-content-between align-items-center">
            <li>
              <span onClick={toggleSidebar}>
                <i className="fas fa-bars"></i>
              </span>
            </li>
            <li>
              <Link href="/">
                <Image
                  src={logo?.light_logo}
                  width={220}
                  height={56}
                  alt="Site Logo"
                />
              </Link>
            </li>
          </ul>

          <ul className="right_nav d-flex justify-content-between align-items-center">
            {header?.body?.primary_menu?.map((menu, index) => (
              <li key={index}>
                <Link href="/">{menu?.text}</Link>
              </li>
            ))}
            <li>
              <Link href="/">
                <i className="fas fa-search"></i>
              </Link>
            </li>
            <li>
              <Link href="/products/carts">
                <i className="fas fa-shopping-cart"></i>
              </Link>

              <div className="cart_number">{carts?.length}</div>
            </li>
          </ul>
        </Container>
      </div>
      {/* Header Nav End */}

      {/* Mobile Header Start */}
      <div className={`header_mobile d-block d-md-none ${sticky}`}>
        <Container className="d-flex align-items-center justify-content-between">
          <div className="menubar">
            <i onClick={toggleSidebar} className="fas fa-bars"></i>
          </div>
          <div className="logo">
            <Link href="/">
              <Image
                src={logo?.light_logo}
                width={220}
                height={56}
                alt="Site Logo"
              />
            </Link>
          </div>
          <div className="cart_action position-relative">
            <Link href="/products/carts">
              <i className="fas fa-shopping-cart"></i>
            </Link>

            <div className="cart_number">{carts?.length}</div>
          </div>
        </Container>
      </div>
      {/* Mobile Header End */}

      {isOpen && <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />}
    </header>
  );
};
