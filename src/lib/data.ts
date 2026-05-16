import type { MenuItemType } from "../types/types";

const describingUIParentTo = "/describing-ui";

export const menuItems: MenuItemType[] = [
    {
        title: "React 哲学",
        to: "/thinking-in-react",
        parentTo: "/",
        childrens: [], // 父级菜单不需要childrens，子菜单会自动查找
    },
    {
        title: "描述 UI",
        to: "/describing-ui",
        parentTo: "/",
        childrens: [], // 父级菜单不需要childrens，子菜单会自动查找
    },
    {
        title: "你的第一个组件",
        to: `${describingUIParentTo}/your-first-component`,
        parentTo: describingUIParentTo,
        childrens: [],
        challenges: ["challenge-1", "challenge-2", "challenge-3", "challenge-4"],
    },
    {
        title: "组件的导入与导出",
        to: "/describing-ui/importing-and-exporting-components",
        parentTo: "/describing-ui",
        childrens: [],
        challenges: ["challenge-1"],
    },
    {
        title: "使用 JSX 书写标签语言",
        to: "/describing-ui/writing-markup-with-jsx",
        parentTo: "/describing-ui",
        childrens: [],
    },
    {
        title: "在 JSX 中通过大括号使用 JavaScript",
        to: "/describing-ui/javascript-in-jsx-with-curly-braces",
        parentTo: "/describing-ui",
        childrens: [],
        challenges: ["challenge-1", "challenge-2", "challenge-3"],
    },
    {
        title: "将 Props 传递给组件",
        to: "/describing-ui/passing-props-to-a-component",
        parentTo: "/describing-ui",
        childrens: [],
        challenges: ["challenge-1", "challenge-2", "challenge-3"],
    },
    {
        title: "条件渲染",
        to: "/describing-ui/conditional-rendering",
        parentTo: "/describing-ui",
        childrens: [],
        challenges: ["challenge-1", "challenge-2", "challenge-3"],
    },
    {
        title: "渲染列表",
        to: "/describing-ui/rendering-lists",
        parentTo: "/describing-ui",
        childrens: [],
        challenges: ["challenge-1", "challenge-2", "challenge-3", "challenge-4"],
    },
    {
        title: "保持组件纯粹",
        to: "/describing-ui/keeping-components-pure",
        parentTo: "/describing-ui",
        childrens: [],
        challenges: ["challenge-1", "challenge-2", "challenge-3"],
    },
    {
        title: "将 UI 视为树",
        to: "/describing-ui/your-ui-as-a-tree",
        parentTo: "/describing-ui",
        childrens: [],
    },
    {
        title: "添加交互",
        to: "/adding-interactivity",
        parentTo: "/",
        childrens: [], // 父级菜单不需要childrens，子菜单会自动查找
    },
    {
        title: "响应事件",
        to: "/adding-interactivity/responding-to-events",
        parentTo: "/adding-interactivity",
        childrens: [],
    },
    {
        title: "State：组件的记忆",
        to: "/adding-interactivity/state",
        parentTo: "/adding-interactivity",
        childrens: [],
        challenges: ["challenge-1", "challenge-2", "challenge-3", "challenge-4"],
    },
    {
        title: "渲染和提交",
        to: "/adding-interactivity/render-and-commit",
        parentTo: "/adding-interactivity",
        childrens: [],
    },
    {
        title: "state 如同一张快照",
        to: "/adding-interactivity/state-as-a-snapshot",
        parentTo: "/adding-interactivity",
        childrens: [],
        challenges: ["challenge-1"],
    },
    {
        title: "把一系列 state 更新加入队列",
        to: "/adding-interactivity/queueing-series-state-updates",
        parentTo: "/adding-interactivity",
        childrens: [],
        challenges: ["challenge-1", "challenge-2"],
    },
    {
        title: "更新 state 中的对象",
        to: "/adding-interactivity/updating-objects-in-state",
        parentTo: "/adding-interactivity",
        childrens: [],
        challenges: ["challenge-1", "challenge-2", "challenge-3"],
    },
    {
        title: "更新 state 中的数组",
        to: "/adding-interactivity/updating-arrays-in-state",
        parentTo: "/adding-interactivity",
        childrens: [],
        challenges: ["challenge-1", "challenge-2", "challenge-3", "challenge-4"],
    },
    {
        title: "状态管理",
        to: "/managing-state",
        parentTo: "/",
        childrens: [], // 父级菜单不需要childrens，子菜单会自动查找
    },
    {
        title: "用 State 响应输入",
        to: "/managing-state/reacting-to-input-with-state",
        parentTo: "/managing-state",
        childrens: [],
        challenges: ["challenge-1", "challenge-2"],
    },
    {
        title: "选择 State 结构",
        to: "/managing-state/choosing-the-state-structure",
        parentTo: "/managing-state",
        childrens: [],
        challenges: ["challenge-1", "challenge-2", "challenge-3", "challenge-4"],
    },
    {
        title: "在组件间共享状态",
        to: "/managing-state/sharing-state-between-components",
        parentTo: "/managing-state",
        childrens: [],
        challenges: ["challenge-1", "challenge-2"],
    },
    {
        title: "对 state 进行保留和重置",
        to: "/managing-state/preserving-and-resetting-state",
        parentTo: "/managing-state",
        childrens: [],
        challenges: ["challenge-1", "challenge-2", "challenge-3", "challenge-4", "challenge-5"],
    },
    {
        title: "迁移状态逻辑至 Reducer 中",
        to: "/managing-state/extracting-state-logic-into-reducer",
        parentTo: "/managing-state",
        childrens: [],
        challenges: ["challenge-1", "challenge-2", "challenge-3", "challenge-4"],
    },
    {
        title: "使用 Context 深层传递参数",
        to: "/managing-state/passing-data-deeply-with-context",
        parentTo: "/managing-state",
        childrens: [],
        challenges: ["challenge-1"],
    },
    {
        title: "使用 Reducer 和 Context 拓展你的应用",
        to: "/managing-state/scaling-up-with-reducer-and-context",
        parentTo: "/managing-state",
        childrens: [],
    },
    {
        title: "脱围机制",
        to: "/escape-hatches",
        parentTo: "/",
        childrens: [],
    },
    {
        title: "使用 ref 引用值",
        to: "/escape-hatches/referencing-values-with-refs",
        parentTo: "/escape-hatches",
        childrens: [],
        challenges: ["challenge-1", "challenge-2", "challenge-3", "challenge-4"],
    },
    {
        title: "使用 ref 操作 DOM",
        to: "/escape-hatches/manipulating-the-dom-with-refs",
        parentTo: "/escape-hatches",
        childrens: [],
        challenges: ["challenge-1", "challenge-2", "challenge-3", "challenge-4"],
    },
    {
        title: "使用 Effect 进行同步",
        to: "/escape-hatches/synchronizing-with-effects",
        parentTo: "/escape-hatches",
        childrens: [],
        challenges: ["challenge-1", "challenge-2", "challenge-3", "challenge-4"],
    }
];

export const META_TITLE = "React官网学习";