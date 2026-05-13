import { NavLink, useLocation } from "react-router";
import { useEffect, useState } from "react";
import MenuItem from "./MenuItem";
import { menuItems } from "../lib/data";

const SideBar = () => {
  // 1. 状态管理：记录当前「展开的菜单路径」
  const [activePath, setActivePath] = useState<string>("");
  // 2. 获取当前 URL 路径（React Router 钩子）
  const location = useLocation();

  // 3. 判断当前路径是否属于某个「父分类」（用于父级高亮）
  // 用于当前路径是否“等于该分类”或者“属于该分类的子路径”
  const isActiveCategory = (basePath: string) => {
    const pathname = location.pathname;

    if (basePath === "/") return pathname === "/";

    return pathname === basePath || pathname.startsWith(basePath + "/");
  };

  // 4. 切换菜单展开/收起
  const toggleMenu = (to: string) => {
    // 如果点击的是当前已展开的菜单，则收起（设为空）；否则展开新菜单
    console.log(to);
    setActivePath(activePath === to ? "" : to);
  };

  // 5. 只保留「顶级菜单项」（parentTo 为 "/" 的项）
  const topLevelMenuItems = menuItems.filter((item) => {
    return item.parentTo === "/";
  });

  useEffect(() => {
    // 当 URL 发生变化时，收起所有菜单
    setActivePath("");
  }, [location.pathname]);

  return (
    <div className="w-64 min-h-screen border-r border-[#e5e4e7]">
      {/* 顶部标题（点击跳转到首页） */}
      <h2 className="p-4">
        <NavLink to={"/"}>React Learning Path</NavLink>
      </h2>
      <nav>
        {/* 遍历渲染顶级菜单项 */}
        {topLevelMenuItems.map((item) => {
          return (
            <MenuItem
              activePath={activePath}
              key={item.to} // 用唯一路径作为 key
              item={item} // 当前菜单项数据
              isActive={activePath === item.to || isActiveCategory(item.to)} // 是否激活/展开
              toggleMenu={toggleMenu} // 切换展开/收起的函数
              menuItems={menuItems} // 完整菜单数据（供子组件查找子菜单）
            />
          );
        })}
      </nav>
    </div>
  );
};

export default SideBar;
