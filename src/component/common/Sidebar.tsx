// components/Sidebar.js
import { useAppSelector } from "@/store/store";
import Link from "next/link";
import React, { useState } from "react";

type SidebarType = {
  isOpen: boolean;
  toggleSidebar: any;
};

interface CategoryItem {
  id: number;
  icon: string;
  path: string;
  text: string;
  custom: boolean;
  parent: number;
  megaMenu: boolean;
  url_type: string;
  droppable: boolean;
  children?: CategoryItem[];
}

export const Sidebar = ({ isOpen, toggleSidebar }: SidebarType) => {
  const { header } = useAppSelector(
    (state) => state.themeReducer.value.storeInfo
  );

  const createMultiDimensionalMenus = (arr: CategoryItem[]): CategoryItem[] => {
    const idToChildren = new Map<number, CategoryItem[]>();

    arr.forEach((item) => {
      const parentId = item.parent;
      const children = idToChildren.get(parentId) || [];
      children.push(item);
      idToChildren.set(parentId, children);
    });

    const buildHierarchy = (parentId: number): CategoryItem => ({
      ...arr.find((item) => item.id === parentId)!,
      children: (idToChildren.get(parentId) || []).map((childId) =>
        buildHierarchy(childId.id)
      ),
    });

    return arr
      .filter((item) => item.parent === 0)
      .map((item) => buildHierarchy(item.id));
  };

  return (
    <nav className={`${isOpen ? "sidebar open" : "sidebar"}`}>
      <div className="sidebar-back" onClick={toggleSidebar}>
        <i className="fas fa-angle-left pr-2" aria-hidden="true"></i>
        Back
      </div>
      <ul className="menu d-none d-md-block">
        {createMultiDimensionalMenus(header?.body?.category_menu)?.map(
          (parentMenu, index) => (
            <li key={index}>
              <Link className="has-submenu" href="/">
                {parentMenu?.text}
                {parentMenu?.children?.length ? (
                  <i className="fas fa-chevron-right"></i>
                ) : null}
              </Link>
              {parentMenu?.children?.length ? (
                <ul className="submenu">
                  {parentMenu?.children?.map((childrenMenu, idx) => (
                    <li key={idx}>
                      <Link className="has-submenu" href="/">
                        {childrenMenu?.text}
                        {childrenMenu?.children?.length ? (
                          <i className="fas fa-chevron-right"></i>
                        ) : null}
                      </Link>
                      {childrenMenu?.children?.length ? (
                        <ul className="submenu">
                          {childrenMenu?.children?.map(
                            (childrenMenuX, idxx) => (
                              <li key={idxx}>
                                <Link className="has-submenu" href="/">
                                  {childrenMenuX?.text}
                                </Link>
                              </li>
                            )
                          )}
                        </ul>
                      ) : null}
                    </li>
                  ))}
                </ul>
              ) : null}
            </li>
          )
        )}
      </ul>

      <ul className="menu d-block d-md-none">
        {header?.body?.primary_menu?.map((menu, index) => (
          <li key={index}>
            <Link href="/">{menu?.text}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
