import { NavLink, useLocation } from "react-router";
import type { MenuItemType } from "../types/types";
import { ChevronDown, ChevronRight } from "lucide-react";

const MenuItem = ({
  item,
  isActive,
  toggleMenu,
  menuItems,
}: {
  activePath: string;
  item: MenuItemType;
  isActive: boolean;
  toggleMenu: (to: string) => void;
  menuItems: MenuItemType[];
}) => {
  const location = useLocation();

  // 1. 判断当前路径是否属于某个父分类（和 SideBar 逻辑一致）
  // 用于当前路径是否“等于该分类”或者“属于该分类的子路径”
  const isActiveCategory = (basePath: string) => {
    const pathname = location.pathname;

    if (basePath === "/") return pathname === "/";

    return pathname === basePath || pathname.startsWith(basePath + "/");
  };

  // 2. 两个关键状态判断
  const isCurentAcitve = item.to === location.pathname; // 当前项路径和 URL 完全匹配

  // 3. 查找当前菜单项的「子菜单项」（根据 parentTo 匹配）
  const getChildMenuItems = (parentPath: string): MenuItemType[] => {
    return menuItems.filter((childItem) => childItem.parentTo === parentPath);
  };
  const childMenuItems = getChildMenuItems(item.to);

  return (
    <div className="">
      {/* 菜单项按钮（点击展开/收起，同时包含导航链接） */}
      <button
        className={`${
          isCurentAcitve
            ? "bg-cyan-300/10 text-cyan-700"
            : "hover:bg-gray-200/50"
        } w-full`}
        onClick={(e) => {
          e.preventDefault();
          return toggleMenu(isActive ? "" : item.to);
        }}
      >
        {/* 导航链接（NavLink 自带路径高亮能力） */}
        <NavLink
          to={item.to}
          className={`text-left px-4 py-2 flex justify-between items-center ${item.parentTo === "/" ? "font-bold text-black" : ""}`}
        >
          {/* 菜单项标题 */}
          <span className="text-xs">{item.title}</span>

          {/* 如果有子菜单或 challenges，显示展开/收起图标 */}
          {(childMenuItems.length > 0 ||
            (item.challenges && item.challenges.length > 0)) && (
            <span className={isActive ? "text-cyan-700" : ""}>
              {/* 激活时显示向下箭头，否则显示向右箭头 */}
              {isActive ? <ChevronDown /> : <ChevronRight />}
            </span>
          )}
        </NavLink>
      </button>

      {/* 如果当前项激活/展开，渲染子菜单区域 */}
      {isActive && (
        <div className="border-l-2 border-gray-300 ml-3">
          {/* 1. 递归渲染「子菜单项」（核心：自己调用自己） */}
          {childMenuItems.length > 0 &&
            childMenuItems.map((childItem) => {
              return (
                <MenuItem
                  activePath=""
                  key={childItem.to}
                  item={childItem}
                  isActive={isActiveCategory(childItem.to)}
                  toggleMenu={toggleMenu}
                  menuItems={menuItems}
                />
              );
            })}

          {/* 2. 渲染「子挑战项」（challenges） */}
          {item.challenges &&
            item.challenges.length > 0 &&
            item.challenges.map((challenge) => {
              const fullPath = `${item.to}/${challenge}`; // 拼接完整路径
              const isActive = location.pathname === fullPath; // 判断是否激活

              return (
                <NavLink
                  key={`${item.to}-${challenge}`}
                  to={fullPath}
                  className={`block px-4 py-1 my-1 rounded w-full ${
                    isActive
                      ? "bg-cyan-300/10 text-cyan-700"
                      : "hover:bg-gray-200/50"
                  }`}
                >
                  {/* 把 challenge 字符串的 "-" 替换为空格，并首字母大写 */}
                  <span className="text-xs capitalize">
                    {challenge.replace(/-/g, " ")}
                  </span>
                </NavLink>
              );
            })}
        </div>
      )}
    </div>
  );
};

export default MenuItem;
