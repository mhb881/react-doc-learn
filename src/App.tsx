import "./App.css";

import { RouterProvider, createBrowserRouter } from "react-router";
import { useEffect } from "react";
import { META_TITLE } from "./lib/data";
import MainContent from "./MainContent";
import RootLayout from "./RootLayout";

import DescribingUiPage from "./pages/describing-ui/page";
import AddingInteractivityPage from "./pages/adding-interactivity/page";
import YourFirstComponentPage from "./pages/describing-ui/your-first-component/page";
import ThinkingInReactPage from "./pages/thinking-in-react/page";
import Challenge1_yfc from "./pages/describing-ui/your-first-component/Challenge1_yfc";
import Challenge2_yfc from "./pages/describing-ui/your-first-component/Challenge2_yfc";
import Challenge3_yfc from "./pages/describing-ui/your-first-component/Challenge3_yfc";
import Challenge4_yfc from "./pages/describing-ui/your-first-component/Challenge4_yfc";
import ImportingAndExportingComponentPage from "./pages/describing-ui/importing-and-exporting-components/page";
import WritingMarkupWithJSXPage from "./pages/describing-ui/writing-markup-with-jsx/page";
import JavaScriptInJSXWithCurlyBracesPage from "./pages/describing-ui/javascript-in-jsx-with-curly-braces/page";
import Challenge1_jjcb from "./pages/describing-ui/javascript-in-jsx-with-curly-braces/Challenge1_jjcb";
import Challenge2_jjcb from "./pages/describing-ui/javascript-in-jsx-with-curly-braces/Challenge2_jjcb";
import Challenge3_jjcb from "./pages/describing-ui/javascript-in-jsx-with-curly-braces/Challenge3_jjcb";
import Challenge1_iaec from "./pages/describing-ui/importing-and-exporting-components/Challenge1_iaec";
import PassingPropsToComponentPage from "./pages/describing-ui/passing-props-to-component/page";
import Challenge1_pptc from "./pages/describing-ui/passing-props-to-component/Challenge1_pptc";
import Challenge2_pptc from "./pages/describing-ui/passing-props-to-component/Challenge2_pptc";
import Challenge3_pptc from "./pages/describing-ui/passing-props-to-component/Challenge3_pptc";
import ConditionalRenderingPage from "./pages/describing-ui/conditional-rendering/page";
import Challenge1_cr from "./pages/describing-ui/conditional-rendering/Challenge1_cr";
import Challenge2_cr from "./pages/describing-ui/conditional-rendering/Challenge2_cr";
import Challenge3_cr from "./pages/describing-ui/conditional-rendering/Challenge3_cr";
import RenderingListsPage from "./pages/describing-ui/rendering-lists/page";
import Challenge1_rl from "./pages/describing-ui/rendering-lists/Challenge1_rl";
import Challenge2_rl from "./pages/describing-ui/rendering-lists/Challenge2_rl";
import Challenge3_rl from "./pages/describing-ui/rendering-lists/Challenge3_rl";
import Challenge4_rl from "./pages/describing-ui/rendering-lists/Challenge4_rl";
import KeepingComponetsPurePage from "./pages/describing-ui/keeping-components-pure/page";
import Challenge1_kcp from "./pages/describing-ui/keeping-components-pure/Challenge1_kcp";
import Challenge2_kcp from "./pages/describing-ui/keeping-components-pure/Challenge2_kcp";
import Challenge3_kcp from "./pages/describing-ui/keeping-components-pure/Challenge3_kcp";
import ConsiderYourUIAsTreePage from "./pages/describing-ui/your-ui-as-a-tree/page";
import RespondingToEventsPage from "./pages/adding-interactivity/responding-to-events/page";
import StatePage from "./pages/adding-interactivity/state/page";
import Challenge1_state from "./pages/adding-interactivity/state/Challenge1_state";
import Challenge2_state from "./pages/adding-interactivity/state/Challenge2_state";
import Challenge3_state from "./pages/adding-interactivity/state/Challenge3_state";
import Challenge4_state from "./pages/adding-interactivity/state/Challenge4_state";
import RenderAndCommitPage from "./pages/adding-interactivity/render-and-commit/page";
import StateAsASnapShotPage from "./pages/adding-interactivity/state-as-a-snapshot/page";
import Challenge1_ssns from "./pages/adding-interactivity/state-as-a-snapshot/Challenge1_ssns";
import QueueingSeriesStateUpdatesPage from "./pages/adding-interactivity/queueing-series-state-updates/page";
import Challenge1_qssu from "./pages/adding-interactivity/queueing-series-state-updates/Challenge1_qssu";
import Challenge2_qssu from "./pages/adding-interactivity/queueing-series-state-updates/Challenge2_qssu";
import UpdatingObjectsInStatePage from "./pages/adding-interactivity/updating-objects-in-state/page";
import Challenge1_uois from "./pages/adding-interactivity/updating-objects-in-state/Challenge1_uois";
import Challenge2_uois from "./pages/adding-interactivity/updating-objects-in-state/Challenge2_uois";
import Challenge3_uois from "./pages/adding-interactivity/updating-objects-in-state/Challenge3_uois";
import UpdatingArraysInStatePage from "./pages/adding-interactivity/updating-arrays-in-state/page";
import Challenge1_uais from "./pages/adding-interactivity/updating-arrays-in-state/Challenge1_uais";
import Challenge2_uais from "./pages/adding-interactivity/updating-arrays-in-state/Challenge2_uais";
import Challenge3_uais from "./pages/adding-interactivity/updating-arrays-in-state/Challenge3_uais";
import Challenge4_uais from "./pages/adding-interactivity/updating-arrays-in-state/Challenge4_uais";
import ManagingStatePage from "./pages/managing-state/page";
import ReactingToInputWithStatePage from "./pages/managing-state/reacting-to-input-with-state/page";
import Challenge1_rtiws from "./pages/managing-state/reacting-to-input-with-state/Challenge1_rtiws";
import Challenge2_rtiws from "./pages/managing-state/reacting-to-input-with-state/Challenge2_rtiws";
import ChoosingTheStateStructurePage from "./pages/managing-state/choosing-the-state-structure/page";
import Challenge1_chtss from "./pages/managing-state/choosing-the-state-structure/Challenge1_chtss";
import Challenge2_chtss from "./pages/managing-state/choosing-the-state-structure/Challenge2_chtss";
import Challenge3_chtss from "./pages/managing-state/choosing-the-state-structure/Challenge3_chtss";
import Challenge4_chtss from "./pages/managing-state/choosing-the-state-structure/Challenge4_chtss";
import SharingStateBetweenComponentsPage from "./pages/managing-state/sharing-state-between-components/page";
import Challenge1_ssbc from "./pages/managing-state/sharing-state-between-components/Challenge1_ssbc";
import Challenge2_ssbc from "./pages/managing-state/sharing-state-between-components/Challenge2_ssbc";
import PreservingAndResettingStatePage from "./pages/managing-state/preserving-and-resetting-state/page";
import Challenge3_pars from "./pages/managing-state/preserving-and-resetting-state/Challenge3_pars";
import Challenge4_pars from "./pages/managing-state/preserving-and-resetting-state/Challenge4_pars";
import Challenge5_pars from "./pages/managing-state/preserving-and-resetting-state/Challenge5_pars";
import Challenge1_pars from "./pages/managing-state/preserving-and-resetting-state/Challenge1_pars";
import Challenge2_pars from "./pages/managing-state/preserving-and-resetting-state/Challenge2_pars";
import ExtractingStateLogicIntoReducerPage from "./pages/managing-state/extracting-state-logic-into-reducer/page";
import Challenge1_eslir from "./pages/managing-state/extracting-state-logic-into-reducer/Challenge1_eslir";
import Challenge2_eslir from "./pages/managing-state/extracting-state-logic-into-reducer/Challenge2_eslir";
import Challenge3_eslir from "./pages/managing-state/extracting-state-logic-into-reducer/Challenge3_eslir";
import Challenge4_eslir from "./pages/managing-state/extracting-state-logic-into-reducer/Challenge4_eslir";
import PassingDateDeeplyWithContextPage from "./pages/managing-state/passing-data-deeply-with-context/page";
import Challenge1_pddwc from "./pages/managing-state/passing-data-deeply-with-context/Challenge1_pddwc";
import ScalingUpWithReducerAndContextPage from "./pages/managing-state/scaling-up-with-reducer-and-context/page";

// 数据加载函数
async function loader() {
  // 在这里可以预加载数据
  return async () => ({
    data: new Promise((resolve) =>
      setTimeout(() => resolve({ loaded: true }), 1000),
    ),
  });
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    loader,
    children: [
      {
        index: true,
        element: <MainContent />,
        loader,
      },
      //
      {
        path: "thinking-in-react",
        children: [
          {
            index: true,
            element: <ThinkingInReactPage />,
            loader,
          },
        ],
      },
      //
      {
        path: "describing-ui",
        loader,
        children: [
          {
            index: true,
            element: <DescribingUiPage />,
            loader,
          },
          //
          {
            path: "your-first-component",
            children: [
              {
                element: <YourFirstComponentPage />,
                index: true,
                loader,
              },
              { path: "challenge-1", element: <Challenge1_yfc />, loader },
              { path: "challenge-2", element: <Challenge2_yfc />, loader },
              { path: "challenge-3", element: <Challenge3_yfc />, loader },
              { path: "challenge-4", element: <Challenge4_yfc />, loader },
            ],
          },
          //
          {
            path: "importing-and-exporting-components",
            loader,
            children: [
              {
                index: true,
                element: <ImportingAndExportingComponentPage />,
                loader,
              },
              { path: "challenge-1", element: <Challenge1_iaec />, loader },
            ],
          },
          //
          {
            path: "writing-markup-with-jsx",
            element: <WritingMarkupWithJSXPage />,
            loader,
          },
          //
          {
            path: "javascript-in-jsx-with-curly-braces",
            loader,
            children: [
              {
                index: true,
                element: <JavaScriptInJSXWithCurlyBracesPage />,
                loader,
              },
              { path: "challenge-1", element: <Challenge1_jjcb />, loader },
              { path: "challenge-2", element: <Challenge2_jjcb />, loader },
              { path: "challenge-3", element: <Challenge3_jjcb />, loader },
            ],
          },
          //
          {
            path: "passing-props-to-a-component",
            loader,
            children: [
              {
                index: true,
                element: <PassingPropsToComponentPage />,
                loader,
              },
              { path: "challenge-1", element: <Challenge1_pptc />, loader },
              { path: "challenge-2", element: <Challenge2_pptc />, loader },
              { path: "challenge-3", element: <Challenge3_pptc />, loader },
            ],
          },
          {
            path: "conditional-rendering",
            loader,
            children: [
              {
                index: true,
                element: <ConditionalRenderingPage />,
                loader,
              },
              { path: "challenge-1", element: <Challenge1_cr />, loader },
              { path: "challenge-2", element: <Challenge2_cr />, loader },
              { path: "challenge-3", element: <Challenge3_cr />, loader },
            ],
          },
          {
            path: "rendering-lists",
            loader,
            children: [
              {
                index: true,
                element: <RenderingListsPage />,
                loader,
              },
              { path: "challenge-1", element: <Challenge1_rl />, loader },
              { path: "challenge-2", element: <Challenge2_rl />, loader },
              { path: "challenge-3", element: <Challenge3_rl />, loader },
              { path: "challenge-4", element: <Challenge4_rl />, loader },
            ],
          },
          {
            path: "keeping-components-pure",
            loader,
            children: [
              {
                index: true,
                element: <KeepingComponetsPurePage />,
                loader,
              },
              { path: "challenge-1", element: <Challenge1_kcp />, loader },
              { path: "challenge-2", element: <Challenge2_kcp />, loader },
              { path: "challenge-3", element: <Challenge3_kcp />, loader },
            ],
          },
          {
            path: "your-ui-as-a-tree",
            loader,
            children: [
              {
                index: true,
                element: <ConsiderYourUIAsTreePage />,
                loader,
              },
            ],
          },
          //
        ],
      },
      {
        path: "adding-interactivity",
        loader,
        children: [
          {
            index: true,
            element: <AddingInteractivityPage />,
            loader,
          },
          {
            path: "responding-to-events",
            children: [
              {
                index: true,
                element: <RespondingToEventsPage />,
                loader,
              },
            ],
          },
          {
            path: "state",
            children: [
              {
                index: true,
                element: <StatePage />,
                loader,
              },
              { path: "challenge-1", element: <Challenge1_state />, loader },
              { path: "challenge-2", element: <Challenge2_state />, loader },
              { path: "challenge-3", element: <Challenge3_state />, loader },
              { path: "challenge-4", element: <Challenge4_state />, loader },
            ],
          },
          {
            path: "render-and-commit",
            loader,
            children: [
              {
                index: true,
                element: <RenderAndCommitPage />,
                loader,
              },
            ],
          },
          {
            path: "state-as-a-snapshot",
            loader,
            children: [
              {
                index: true,
                element: <StateAsASnapShotPage />,
                loader,
              },
              { path: "challenge-1", element: <Challenge1_ssns />, loader },
            ],
          },
          {
            path: "queueing-series-state-updates",
            loader,
            children: [
              {
                index: true,
                element: <QueueingSeriesStateUpdatesPage />,
                loader,
              },
              { path: "challenge-1", element: <Challenge1_qssu />, loader },
              { path: "challenge-2", element: <Challenge2_qssu />, loader },
            ],
          },
          {
            path: "updating-objects-in-state",
            loader,
            children: [
              {
                index: true,
                element: <UpdatingObjectsInStatePage />,
                loader,
              },
              { path: "challenge-1", element: <Challenge1_uois />, loader },
              { path: "challenge-2", element: <Challenge2_uois />, loader },
              { path: "challenge-3", element: <Challenge3_uois />, loader },
            ],
          },
          {
            path: "updating-arrays-in-state",
            loader,
            children: [
              {
                index: true,
                element: <UpdatingArraysInStatePage />,
                loader,
              },
              { path: "challenge-1", element: <Challenge1_uais />, loader },
              { path: "challenge-2", element: <Challenge2_uais />, loader },
              { path: "challenge-3", element: <Challenge3_uais />, loader },
              { path: "challenge-4", element: <Challenge4_uais />, loader },
            ],
          },
        ],
      },
      {
        path: "managing-state",
        loader,
        children: [
          {
            index: true,
            element: <ManagingStatePage />,
            loader,
          },
          {
            path: "reacting-to-input-with-state",
            loader,
            children: [
              {
                index: true,
                element: <ReactingToInputWithStatePage />,
                loader,
              },
              { path: "challenge-1", element: <Challenge1_rtiws />, loader },
              { path: "challenge-2", element: <Challenge2_rtiws />, loader },
            ],
          },
          {
            path: "choosing-the-state-structure",
            loader,
            children: [
              {
                index: true,
                element: <ChoosingTheStateStructurePage />,
                loader,
              },
              { path: "challenge-1", element: <Challenge1_chtss />, loader },
              { path: "challenge-2", element: <Challenge2_chtss />, loader },
              { path: "challenge-3", element: <Challenge3_chtss />, loader },
              { path: "challenge-4", element: <Challenge4_chtss />, loader },
            ],
          },
          {
            path: "sharing-state-between-components",
            loader,
            children: [
              {
                index: true,
                element: <SharingStateBetweenComponentsPage />,
                loader,
              },
              { path: "challenge-1", element: <Challenge1_ssbc />, loader },
              { path: "challenge-2", element: <Challenge2_ssbc />, loader },
            ],
          },
          {
            path: "preserving-and-resetting-state",
            loader,
            children: [
              {
                index: true,
                element: <PreservingAndResettingStatePage />,
                loader,
              },
              { path: "challenge-1", element: <Challenge1_pars />, loader },
              { path: "challenge-2", element: <Challenge2_pars />, loader },
              { path: "challenge-3", element: <Challenge3_pars />, loader },
              { path: "challenge-4", element: <Challenge4_pars />, loader },
              { path: "challenge-5", element: <Challenge5_pars />, loader },
            ],
          },
          {
            path: "extracting-state-logic-into-reducer",
            loader,
            children: [
              {
                index: true,
                element: <ExtractingStateLogicIntoReducerPage />,
                loader,
              },
              { path: "challenge-1", element: <Challenge1_eslir />, loader },
              { path: "challenge-2", element: <Challenge2_eslir />, loader },
              { path: "challenge-3", element: <Challenge3_eslir />, loader },
              { path: "challenge-4", element: <Challenge4_eslir />, loader },
            ],
          },
          {
            path: "passing-data-deeply-with-context",
            loader,
            children: [
              {
                index: true,
                element: <PassingDateDeeplyWithContextPage />,
                loader,
              },
              { path: "challenge-1", element: <Challenge1_pddwc />, loader },
            ],
          },
          {
            path: "scaling-up-with-reducer-and-context",
            loader,
            children: [
              {
                index: true,
                element: <ScalingUpWithReducerAndContextPage />,
                loader,
              },
            ],
          },
        ],
      },
    ],
  },
]);

function App() {
  useEffect(() => {
    document.title = `首页 | ${META_TITLE}`;
  }, []);

  return <RouterProvider router={router} />;
}

export default App;
