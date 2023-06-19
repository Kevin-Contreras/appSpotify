import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/main.jsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=f923aceb"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
import RefreshRuntime from "/@react-refresh";
let prevRefreshReg;
let prevRefreshSig;
if (import.meta.hot) {
  if (!window.__vite_plugin_react_preamble_installed__) {
    throw new Error("@vitejs/plugin-react can't detect preamble. Something is wrong. See https://github.com/vitejs/vite-plugin-react/pull/11#discussion_r430879201");
  }
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    RefreshRuntime.register(type, "/Users/kevin/Desktop/storeFront/store/src/main.jsx " + id);
  };
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
import __vite__cjsImport3_react from "/node_modules/.vite/deps/react.js?v=f923aceb"; const React = __vite__cjsImport3_react.__esModule ? __vite__cjsImport3_react.default : __vite__cjsImport3_react;
import __vite__cjsImport4_reactDom_client from "/node_modules/.vite/deps/react-dom_client.js?v=f923aceb"; const ReactDOM = __vite__cjsImport4_reactDom_client.__esModule ? __vite__cjsImport4_reactDom_client.default : __vite__cjsImport4_reactDom_client;
import Principal from "/src/principal.jsx";
import Login from "/src/components/login.jsx";
import Nav from "/src/components/nav.jsx";
import "/src/index.css";
import { BrowserRouter, Routes, Route, useNavigate, Router } from "/node_modules/.vite/deps/react-router-dom.js?v=f923aceb";
import About from "/src/components/about.jsx";
import CartVista from "/src/components/carritoVista.jsx";
import Spotify from "/src/components/spotify.jsx?t=1687153237816";
import Usuario from "/src/components/user.jsx?t=1687153237816";
import Apps from "/src/components/products.jsx";
function App() {
  return /* @__PURE__ */ jsxDEV(BrowserRouter, { children: /* @__PURE__ */ jsxDEV(Routes, { children: [
    /* @__PURE__ */ jsxDEV(Route, { path: "/", element: /* @__PURE__ */ jsxDEV(Spotify, {}, void 0, false, {
      fileName: "/Users/kevin/Desktop/storeFront/store/src/main.jsx",
      lineNumber: 16,
      columnNumber: 34
    }, this) }, void 0, false, {
      fileName: "/Users/kevin/Desktop/storeFront/store/src/main.jsx",
      lineNumber: 16,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV(Route, { path: "/spotify", element: /* @__PURE__ */ jsxDEV(Principal, {}, void 0, false, {
      fileName: "/Users/kevin/Desktop/storeFront/store/src/main.jsx",
      lineNumber: 17,
      columnNumber: 41
    }, this) }, void 0, false, {
      fileName: "/Users/kevin/Desktop/storeFront/store/src/main.jsx",
      lineNumber: 17,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV(Route, { path: "/user", element: /* @__PURE__ */ jsxDEV(Usuario, {}, void 0, false, {
      fileName: "/Users/kevin/Desktop/storeFront/store/src/main.jsx",
      lineNumber: 18,
      columnNumber: 38
    }, this) }, void 0, false, {
      fileName: "/Users/kevin/Desktop/storeFront/store/src/main.jsx",
      lineNumber: 18,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV(Route, { path: "*", element: /* @__PURE__ */ jsxDEV(Spotify, {}, void 0, false, {
      fileName: "/Users/kevin/Desktop/storeFront/store/src/main.jsx",
      lineNumber: 19,
      columnNumber: 34
    }, this) }, void 0, false, {
      fileName: "/Users/kevin/Desktop/storeFront/store/src/main.jsx",
      lineNumber: 19,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "/Users/kevin/Desktop/storeFront/store/src/main.jsx",
    lineNumber: 15,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "/Users/kevin/Desktop/storeFront/store/src/main.jsx",
    lineNumber: 14,
    columnNumber: 10
  }, this);
}
_c = App;
ReactDOM.createRoot(document.getElementById("root")).render(/* @__PURE__ */ jsxDEV(App, {}, void 0, false, {
  fileName: "/Users/kevin/Desktop/storeFront/store/src/main.jsx",
  lineNumber: 24,
  columnNumber: 61
}, this));
var _c;
$RefreshReg$(_c, "App");
if (import.meta.hot) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/Users/kevin/Desktop/storeFront/store/src/main.jsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports)
        return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate(currentExports, nextExports);
      if (invalidateMessage)
        import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IkFBbUJpQztBQW5CakMsT0FBT0Esb0JBQWtCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUN6QixPQUFPQyxjQUFjO0FBQ3JCLE9BQU9DLGVBQWU7QUFDdEIsT0FBT0MsV0FBVztBQUNsQixPQUFPQyxTQUFTO0FBQ2hCLE9BQU87QUFDUCxTQUFTQyxlQUFlQyxRQUFRQyxPQUFPQyxhQUFhQyxjQUFjO0FBQ2xFLE9BQU9DLFdBQVc7QUFDbEIsT0FBT0MsZUFBZTtBQUN0QixPQUFPQyxhQUFhO0FBQ3BCLE9BQU9DLGFBQWE7QUFDcEIsT0FBT0MsVUFBVTtBQUNqQixTQUFTQyxNQUFNO0FBSWIsU0FDRSx1QkFBQyxpQkFDQyxpQ0FBQyxVQUNDO0FBQUEsMkJBQUMsU0FBTSxNQUFLLEtBQUksU0FBUyx1QkFBQyxhQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBUSxLQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQXFDO0FBQUEsSUFDckMsdUJBQUMsU0FBTSxNQUFLLFlBQVcsU0FBUyx1QkFBQyxlQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBVSxLQUExQztBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQThDO0FBQUEsSUFDOUMsdUJBQUMsU0FBTSxNQUFLLFNBQVEsU0FBUyx1QkFBQyxhQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBUSxLQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQXlDO0FBQUEsSUFDekMsdUJBQUMsU0FBTSxNQUFLLEtBQUksU0FBUyx1QkFBQyxhQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBUSxLQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQXFDO0FBQUEsT0FKdkM7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUtBLEtBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQU9BO0FBRUo7QUFBQ0MsS0FkUUQ7QUFnQlRkLFNBQVNnQixXQUFXQyxTQUFTQyxlQUFlLE1BQU0sQ0FBQyxFQUFFQyxPQUNqRCx1QkFBQyxTQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBSSxDQUNSO0FBQUMsSUFBQUo7QUFBQUssYUFBQUwsSUFBQSIsIm5hbWVzIjpbIlJlYWN0IiwiUmVhY3RET00iLCJQcmluY2lwYWwiLCJMb2dpbiIsIk5hdiIsIkJyb3dzZXJSb3V0ZXIiLCJSb3V0ZXMiLCJSb3V0ZSIsInVzZU5hdmlnYXRlIiwiUm91dGVyIiwiQWJvdXQiLCJDYXJ0VmlzdGEiLCJTcG90aWZ5IiwiVXN1YXJpbyIsIkFwcHMiLCJBcHAiLCJfYyIsImNyZWF0ZVJvb3QiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwicmVuZGVyIiwiJFJlZnJlc2hSZWckIl0sInNvdXJjZXMiOlsibWFpbi5qc3giXSwiZmlsZSI6Ii9Vc2Vycy9rZXZpbi9EZXNrdG9wL3N0b3JlRnJvbnQvc3RvcmUvc3JjL21haW4uanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbS9jbGllbnQnXG5pbXBvcnQgUHJpbmNpcGFsIGZyb20gJy4vcHJpbmNpcGFsJ1xuaW1wb3J0IExvZ2luIGZyb20gJy4vY29tcG9uZW50cy9sb2dpbidcbmltcG9ydCBOYXYgZnJvbSAnLi9jb21wb25lbnRzL25hdidcbmltcG9ydCAnLi9pbmRleC5jc3MnXG5pbXBvcnQgeyBCcm93c2VyUm91dGVyLCBSb3V0ZXMsIFJvdXRlLCB1c2VOYXZpZ2F0ZSwgUm91dGVyIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCBBYm91dCBmcm9tICcuL2NvbXBvbmVudHMvYWJvdXQnXG5pbXBvcnQgQ2FydFZpc3RhIGZyb20gJy4vY29tcG9uZW50cy9jYXJyaXRvVmlzdGEnXG5pbXBvcnQgU3BvdGlmeSBmcm9tICcuL2NvbXBvbmVudHMvc3BvdGlmeSdcbmltcG9ydCBVc3VhcmlvIGZyb20gJy4vY29tcG9uZW50cy91c2VyJ1xuaW1wb3J0IEFwcHMgZnJvbSAnLi9jb21wb25lbnRzL3Byb2R1Y3RzJ1xuZnVuY3Rpb24gQXBwICgpe1xuXG5cblxuICByZXR1cm4gKFxuICAgIDxCcm93c2VyUm91dGVyPlxuICAgICAgPFJvdXRlcz5cbiAgICAgICAgPFJvdXRlIHBhdGg9XCIvXCIgZWxlbWVudD17PFNwb3RpZnkgLz59IC8+XG4gICAgICAgIDxSb3V0ZSBwYXRoPVwiL3Nwb3RpZnlcIiBlbGVtZW50PXs8UHJpbmNpcGFsIC8+fSAvPlxuICAgICAgICA8Um91dGUgcGF0aD1cIi91c2VyXCIgZWxlbWVudD17PFVzdWFyaW8gLz59IC8+XG4gICAgICAgIDxSb3V0ZSBwYXRoPVwiKlwiIGVsZW1lbnQ9ezxTcG90aWZ5IC8+fSAvPlxuICAgICAgPC9Sb3V0ZXM+XG4gICAgPC9Ccm93c2VyUm91dGVyPlxuICApO1xufVxuXG5SZWFjdERPTS5jcmVhdGVSb290KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290JykpLnJlbmRlcihcbiAgICA8QXBwLz5cbilcbiJdfQ==