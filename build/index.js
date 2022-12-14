var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.jsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_stream = require("stream"), import_node = require("@remix-run/node"), import_react = require("@remix-run/react"), import_isbot = __toESM(require("isbot")), import_server = require("react-dom/server"), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return (0, import_isbot.default)(request.headers.get("user-agent")) ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let didError = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react.RemixServer, {
        context: remixContext,
        url: request.url
      }, void 0, !1, {
        fileName: "app/entry.server.jsx",
        lineNumber: 41,
        columnNumber: 7
      }, this),
      {
        onAllReady() {
          let body = new import_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: didError ? 500 : responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          didError = !0, console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let didError = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react.RemixServer, {
        context: remixContext,
        url: request.url
      }, void 0, !1, {
        fileName: "app/entry.server.jsx",
        lineNumber: 82,
        columnNumber: 7
      }, this),
      {
        onShellReady() {
          let body = new import_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: didError ? 500 : responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(err) {
          reject(err);
        },
        onError(error) {
          didError = !0, console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.jsx
var root_exports = {};
__export(root_exports, {
  ErrorBoundary: () => ErrorBoundary,
  default: () => App,
  links: () => links,
  meta: () => meta
});
var import_react2 = require("@remix-run/react");

// app/styles/global.css
var global_default = "/build/_assets/global-K4C2GBKD.css";

// app/root.jsx
var import_antd = require("antd"), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), links = () => [{ rel: "stylesheet", href: global_default }], items1 = ["1", "2", "3"].map((key) => ({
  key,
  label: `menu ${key}`
})), meta = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1",
  description: "descript",
  keysword: "remix, react, javascript"
});
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Document, {
    title: "This is TITLE",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MyLayout, {
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.Outlet, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 30,
        columnNumber: 3
      }, this)
    }, void 0, !1, {
      fileName: "app/root.jsx",
      lineNumber: 29,
      columnNumber: 3
    }, this)
  }, void 0, !1, {
    fileName: "app/root.jsx",
    lineNumber: 28,
    columnNumber: 1
  }, this);
}
function Document({ children, title }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("html", {
    lang: "en",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("head", {
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("title", {
            children: title || "welcome to my remix blog"
          }, void 0, !1, {
            fileName: "app/root.jsx",
            lineNumber: 41,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.Meta, {}, void 0, !1, {
            fileName: "app/root.jsx",
            lineNumber: 42,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.Links, {}, void 0, !1, {
            fileName: "app/root.jsx",
            lineNumber: 43,
            columnNumber: 7
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/root.jsx",
        lineNumber: 39,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("body", {
        children: [
          children,
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.ScrollRestoration, {}, void 0, !1, {
            fileName: "app/root.jsx",
            lineNumber: 47,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.Scripts, {}, void 0, !1, {
            fileName: "app/root.jsx",
            lineNumber: 48,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.LiveReload, {}, void 0, !1, {
            fileName: "app/root.jsx",
            lineNumber: 49,
            columnNumber: 7
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/root.jsx",
        lineNumber: 45,
        columnNumber: 5
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/root.jsx",
    lineNumber: 38,
    columnNumber: 5
  }, this);
}
function MyLayout({ children }) {
  let { Header, Footer, Sider, Content } = import_antd.Layout;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_antd.Layout, {
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Sider, {
            children: "Sider"
          }, void 0, !1, {
            fileName: "app/root.jsx",
            lineNumber: 62,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_antd.Layout, {
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Header, {
                children: "Header"
              }, void 0, !1, {
                fileName: "app/root.jsx",
                lineNumber: 64,
                columnNumber: 9
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Content, {
                children: "Content"
              }, void 0, !1, {
                fileName: "app/root.jsx",
                lineNumber: 65,
                columnNumber: 9
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Footer, {
                children: "Footer"
              }, void 0, !1, {
                fileName: "app/root.jsx",
                lineNumber: 66,
                columnNumber: 9
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/root.jsx",
            lineNumber: 63,
            columnNumber: 7
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/root.jsx",
        lineNumber: 61,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", {
        className: "navbar",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.Link, {
            to: "/",
            className: "logo",
            children: "Remix"
          }, void 0, !1, {
            fileName: "app/root.jsx",
            lineNumber: 70,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", {
            className: "nav",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.Link, {
                  to: "posts",
                  children: " Posts fddfd"
                }, void 0, !1, {
                  fileName: "app/root.jsx",
                  lineNumber: 75,
                  columnNumber: 11
                }, this)
              }, void 0, !1, {
                fileName: "app/root.jsx",
                lineNumber: 74,
                columnNumber: 9
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.Link, {
                  to: "/auth/login",
                  children: " Login "
                }, void 0, !1, {
                  fileName: "app/root.jsx",
                  lineNumber: 78,
                  columnNumber: 11
                }, this)
              }, void 0, !1, {
                fileName: "app/root.jsx",
                lineNumber: 77,
                columnNumber: 9
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/root.jsx",
            lineNumber: 73,
            columnNumber: 7
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/root.jsx",
        lineNumber: 69,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "container",
        children: [
          " ",
          children,
          " "
        ]
      }, void 0, !0, {
        fileName: "app/root.jsx",
        lineNumber: 82,
        columnNumber: 5
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/root.jsx",
    lineNumber: 60,
    columnNumber: 5
  }, this);
}
function ErrorBoundary({ error }) {
  return console.log(error), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Document, {
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_antd.Layout, {
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
            children: "Error"
          }, void 0, !1, {
            fileName: "app/root.jsx",
            lineNumber: 93,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("pre", {
            children: error.message
          }, void 0, !1, {
            fileName: "app/root.jsx",
            lineNumber: 96,
            columnNumber: 7
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/root.jsx",
        lineNumber: 92,
        columnNumber: 5
      }, this)
    }, void 0, !1, {
      fileName: "app/root.jsx",
      lineNumber: 91,
      columnNumber: 7
    }, this)
  }, void 0, !1, {
    fileName: "app/root.jsx",
    lineNumber: 90,
    columnNumber: 5
  }, this);
}

// app/routes/auth/login.jsx
var login_exports = {};
__export(login_exports, {
  action: () => action,
  default: () => login_default
});
var import_react3 = require("@remix-run/react");

// app/utils/db.server.ts
var import_client = require("@prisma/client"), db;
global.__db || (global.__db = new import_client.PrismaClient(), global.__db.$connect()), db = global.__db;

// app/routes/auth/login.jsx
var import_node2 = require("@remix-run/node"), import_node3 = require("@remix-run/node"), import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function badRequestttt(data) {
  return (0, import_node3.json)(data, { status: 400 });
}
function validateUsername(username) {
  if (typeof username != "string" || username.length < 3)
    return "username must not be empty";
}
function validatePassword(password) {
  if (typeof password != "string" || password.length < 3)
    return "password must not be empty";
}
var action = async ({ request }) => {
  let form = await request.formData();
  console.log("form data = " + form);
  let loginType = form.get("loginType"), username = form.get("username"), password = form.get("password"), fields = { loginType, username, password }, fieldErrors = {
    username: validateUsername(username),
    password: validatePassword(password)
  };
  return console.log("fields error = " + JSON.stringify(fieldErrors)), Object.values(fieldErrors).some(Boolean) ? badRequestttt({ fieldErrors, fields }) : (0, import_node2.redirect)("/posts");
};
function Login() {
  var _a, _b, _c, _d, _e;
  let actionData = (0, import_react3.useActionData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "auth-container",
    children: [
      "login",
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
          children: "Login"
        }, void 0, !1, {
          fileName: "app/routes/auth/login.jsx",
          lineNumber: 45,
          columnNumber: 14
        }, this)
      }, void 0, !1, {
        fileName: "app/routes/auth/login.jsx",
        lineNumber: 45,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "page-content",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", {
          method: "post",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("fieldset", {
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("legend", {
                  children: "Login or register"
                }, void 0, !1, {
                  fileName: "app/routes/auth/login.jsx",
                  lineNumber: 49,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
                      type: "radio",
                      name: "loginType",
                      value: "login",
                      defaultChecked: !((_a = actionData == null ? void 0 : actionData.fields) != null && _a.loginType) || ((_b = actionData == null ? void 0 : actionData.fields) == null ? void 0 : _b.loginType) === "login"
                    }, void 0, !1, {
                      fileName: "app/routes/auth/login.jsx",
                      lineNumber: 54,
                      columnNumber: 29
                    }, this),
                    " Login"
                  ]
                }, void 0, !0, {
                  fileName: "app/routes/auth/login.jsx",
                  lineNumber: 53,
                  columnNumber: 25
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
                      type: "radio",
                      name: "loginType",
                      value: "register",
                      defaultChecked: ((_c = actionData == null ? void 0 : actionData.fields) == null ? void 0 : _c.loginType) === "register"
                    }, void 0, !1, {
                      fileName: "app/routes/auth/login.jsx",
                      lineNumber: 57,
                      columnNumber: 29
                    }, this),
                    " Register"
                  ]
                }, void 0, !0, {
                  fileName: "app/routes/auth/login.jsx",
                  lineNumber: 56,
                  columnNumber: 25
                }, this)
              ]
            }, void 0, !0, {
              fileName: "app/routes/auth/login.jsx",
              lineNumber: 48,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "form-control",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
                  htmlFor: "username",
                  children: "Username"
                }, void 0, !1, {
                  fileName: "app/routes/auth/login.jsx",
                  lineNumber: 62,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
                  type: "text",
                  name: "username",
                  id: "username"
                }, void 0, !1, {
                  fileName: "app/routes/auth/login.jsx",
                  lineNumber: 65,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: "error",
                  children: [
                    " ",
                    ((_d = actionData == null ? void 0 : actionData.fieldError) == null ? void 0 : _d.username) && ((_e = actionData == null ? void 0 : actionData.fieldError) == null ? void 0 : _e.username),
                    " "
                  ]
                }, void 0, !0, {
                  fileName: "app/routes/auth/login.jsx",
                  lineNumber: 66,
                  columnNumber: 17
                }, this)
              ]
            }, void 0, !0, {
              fileName: "app/routes/auth/login.jsx",
              lineNumber: 61,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "form-control",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
                  htmlFor: "password",
                  children: "Password"
                }, void 0, !1, {
                  fileName: "app/routes/auth/login.jsx",
                  lineNumber: 69,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
                  type: "password",
                  name: "password",
                  id: "password"
                }, void 0, !1, {
                  fileName: "app/routes/auth/login.jsx",
                  lineNumber: 72,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: "error"
                }, void 0, !1, {
                  fileName: "app/routes/auth/login.jsx",
                  lineNumber: 73,
                  columnNumber: 17
                }, this)
              ]
            }, void 0, !0, {
              fileName: "app/routes/auth/login.jsx",
              lineNumber: 68,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
              type: "submit",
              className: "btn btn-block",
              children: " submit "
            }, void 0, !1, {
              fileName: "app/routes/auth/login.jsx",
              lineNumber: 76,
              columnNumber: 17
            }, this)
          ]
        }, void 0, !0, {
          fileName: "app/routes/auth/login.jsx",
          lineNumber: 47,
          columnNumber: 13
        }, this)
      }, void 0, !1, {
        fileName: "app/routes/auth/login.jsx",
        lineNumber: 46,
        columnNumber: 9
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/routes/auth/login.jsx",
    lineNumber: 44,
    columnNumber: 5
  }, this);
}
var login_default = Login;

// app/routes/index.jsx
var routes_exports = {};
__export(routes_exports, {
  default: () => routes_default
});
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function Home() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
      children: "Welcome INDEX"
    }, void 0, !1, {
      fileName: "app/routes/index.jsx",
      lineNumber: 4,
      columnNumber: 7
    }, this)
  }, void 0, !1, {
    fileName: "app/routes/index.jsx",
    lineNumber: 3,
    columnNumber: 5
  }, this);
}
var routes_default = Home;

// app/routes/posts.jsx
var posts_exports = {};
__export(posts_exports, {
  default: () => posts_default
});
var import_react4 = require("@remix-run/react"), import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function Posts() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
      children: [
        "This is the posts route",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react4.Outlet, {}, void 0, !1, {
          fileName: "app/routes/posts.jsx",
          lineNumber: 8,
          columnNumber: 17
        }, this)
      ]
    }, void 0, !0, {
      fileName: "app/routes/posts.jsx",
      lineNumber: 6,
      columnNumber: 13
    }, this)
  }, void 0, !1, {
    fileName: "app/routes/posts.jsx",
    lineNumber: 5,
    columnNumber: 9
  }, this);
}
var posts_default = Posts;

// app/routes/posts/$postId.jsx
var postId_exports = {};
__export(postId_exports, {
  action: () => action2,
  default: () => postId_default,
  loader: () => loader
});
var import_react5 = require("@remix-run/react");
var import_react6 = require("@remix-run/react"), import_node4 = require("@remix-run/node"), import_antd2 = require("antd"), import_react7 = require("@remix-run/react"), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), loader = async ({ params }) => {
  let post = await db.post.findUnique({
    where: { id: params.postId }
  });
  if (!post)
    throw new Error("Post not found");
  return { post };
}, action2 = async ({ request, params }) => {
  if ((await request.formData()).get("_method") === "delete") {
    if (await db.post.findUnique({
      where: { id: params.postId }
    }))
      console.log("post to delete found");
    else
      throw new Error("Post not found");
    return await db.post.delete({ where: { id: params.postId } }), (0, import_node4.redirect)("/posts");
  }
};
function Post() {
  let { post } = (0, import_react5.useLoaderData)(), params = (0, import_react5.useParams)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
        children: [
          " Post ",
          post.title
        ]
      }, void 0, !0, {
        fileName: "app/routes/posts/$postId.jsx",
        lineNumber: 38,
        columnNumber: 10
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react6.Link, {
        to: "/posts",
        className: "btn btn-revers",
        children: " Back "
      }, void 0, !1, {
        fileName: "app/routes/posts/$postId.jsx",
        lineNumber: 39,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "page-content",
        children: post.body
      }, void 0, !1, {
        fileName: "app/routes/posts/$postId.jsx",
        lineNumber: 40,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "page-footer",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", {
          method: "POST",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
              type: "hidden",
              name: "_method",
              value: "delete"
            }, void 0, !1, {
              fileName: "app/routes/posts/$postId.jsx",
              lineNumber: 45,
              columnNumber: 9
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_antd2.Button, {
              type: "primary",
              htmlType: "primary",
              children: " delete "
            }, void 0, !1, {
              fileName: "app/routes/posts/$postId.jsx",
              lineNumber: 46,
              columnNumber: 9
            }, this)
          ]
        }, void 0, !0, {
          fileName: "app/routes/posts/$postId.jsx",
          lineNumber: 44,
          columnNumber: 7
        }, this)
      }, void 0, !1, {
        fileName: "app/routes/posts/$postId.jsx",
        lineNumber: 43,
        columnNumber: 5
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/routes/posts/$postId.jsx",
    lineNumber: 38,
    columnNumber: 5
  }, this);
}
var postId_default = Post;

// app/routes/posts/index.jsx
var posts_exports2 = {};
__export(posts_exports2, {
  default: () => posts_default2,
  loader: () => loader2
});
var import_react8 = require("@remix-run/react");
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), loader2 = async () => ({
  posts: await db.post.findMany({
    take: 20,
    select: { id: !0, title: !0, createdAt: !0 },
    orderBy: { createdAt: "desc" }
  })
});
function PostItems() {
  let { posts } = (0, import_react8.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "page-header",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
            children: "Posts"
          }, void 0, !1, {
            fileName: "app/routes/posts/index.jsx",
            lineNumber: 21,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react8.Link, {
            to: "/posts/new",
            className: "btn",
            children: "New post"
          }, void 0, !1, {
            fileName: "app/routes/posts/index.jsx",
            lineNumber: 22,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/routes/posts/index.jsx",
        lineNumber: 20,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", {
        className: "posts-list",
        children: posts.map((post) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react8.Link, {
            to: post.id,
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
                children: post.title
              }, void 0, !1, {
                fileName: "app/routes/posts/index.jsx",
                lineNumber: 31,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h6", {
                children: new Date(post.createdAt).toLocaleString()
              }, void 0, !1, {
                fileName: "app/routes/posts/index.jsx",
                lineNumber: 32,
                columnNumber: 15
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/routes/posts/index.jsx",
            lineNumber: 30,
            columnNumber: 13
          }, this)
        }, post.id, !1, {
          fileName: "app/routes/posts/index.jsx",
          lineNumber: 29,
          columnNumber: 11
        }, this))
      }, void 0, !1, {
        fileName: "app/routes/posts/index.jsx",
        lineNumber: 27,
        columnNumber: 1
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/routes/posts/index.jsx",
    lineNumber: 19,
    columnNumber: 5
  }, this);
}
var posts_default2 = PostItems;

// app/routes/posts/new.jsx
var new_exports = {};
__export(new_exports, {
  action: () => action3,
  default: () => new_default
});
var import_react9 = require("@remix-run/react"), import_node5 = require("@remix-run/node");
var import_node6 = require("@remix-run/node"), import_antd3 = require("antd"), import_react10 = require("@remix-run/react"), import_react11 = require("@remix-run/react"), import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function validateTitle(title) {
  if (title.length < 3)
    return "Title should be atleast 3 characters long";
}
function validateBody(body) {
  if (body.length < 10)
    return "Body should be atleast 10 characters long";
}
function badRequestttt2(data) {
  return (0, import_node6.json)(data, { status: 400 });
}
var action3 = async ({ request }) => {
  let form = await request.formData(), title = form.get("title"), body = form.get("body"), fields = { title, body }, fieldErrors = {
    title: validateTitle(title),
    body: validateBody(body)
  };
  if (console.log("title = ", title), console.log("body = ", body), Object.values(fieldErrors).some(Boolean))
    return console.log(fieldErrors), badRequestttt2({ fieldErrors, fields });
  let post = await db.post.create({ data: { ...fields } });
  return console.log("post = ", post), (0, import_node5.redirect)(`/posts/${post.id}`);
};
function NewPost() {
  var _a, _b, _c, _d, _e, _f;
  let actionData = (0, import_react9.useActionData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
      className: "page-header",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
          children: "new post"
        }, void 0, !1, {
          fileName: "app/routes/posts/new.jsx",
          lineNumber: 56,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react9.Link, {
          to: "/posts",
          className: "btn btn-reverse",
          children: "Back"
        }, void 0, !1, {
          fileName: "app/routes/posts/new.jsx",
          lineNumber: 58,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "page-content",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react11.Form, {
            method: "POST",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "form-control",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
                    htmlFor: "title",
                    children: "Title"
                  }, void 0, !1, {
                    fileName: "app/routes/posts/new.jsx",
                    lineNumber: 65,
                    columnNumber: 15
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
                    type: "text",
                    name: "title",
                    id: "title",
                    defaultValue: (_a = actionData == null ? void 0 : actionData.fields) == null ? void 0 : _a.title
                  }, void 0, !1, {
                    fileName: "app/routes/posts/new.jsx",
                    lineNumber: 66,
                    columnNumber: 15
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                    className: "error",
                    children: [
                      " ",
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                        children: [
                          ((_b = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _b.title) && ((_c = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _c.title),
                          " "
                        ]
                      }, void 0, !0, {
                        fileName: "app/routes/posts/new.jsx",
                        lineNumber: 67,
                        columnNumber: 39
                      }, this)
                    ]
                  }, void 0, !0, {
                    fileName: "app/routes/posts/new.jsx",
                    lineNumber: 67,
                    columnNumber: 15
                  }, this)
                ]
              }, void 0, !0, {
                fileName: "app/routes/posts/new.jsx",
                lineNumber: 64,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "form-control",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
                    htmlFor: "body",
                    children: "Post body"
                  }, void 0, !1, {
                    fileName: "app/routes/posts/new.jsx",
                    lineNumber: 70,
                    columnNumber: 15
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("textarea", {
                    name: "body",
                    id: "body",
                    defaultValue: (_d = actionData == null ? void 0 : actionData.fields) == null ? void 0 : _d.body
                  }, void 0, !1, {
                    fileName: "app/routes/posts/new.jsx",
                    lineNumber: 71,
                    columnNumber: 15
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                    className: "error",
                    children: [
                      " ",
                      ((_e = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _e.body) && ((_f = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _f.body),
                      " "
                    ]
                  }, void 0, !0, {
                    fileName: "app/routes/posts/new.jsx",
                    lineNumber: 72,
                    columnNumber: 15
                  }, this)
                ]
              }, void 0, !0, {
                fileName: "app/routes/posts/new.jsx",
                lineNumber: 69,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_antd3.Button, {
                type: "primary",
                htmlType: "submit",
                children: "Add Post"
              }, void 0, !1, {
                fileName: "app/routes/posts/new.jsx",
                lineNumber: 74,
                columnNumber: 13
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/routes/posts/new.jsx",
            lineNumber: 63,
            columnNumber: 11
          }, this)
        }, void 0, !1, {
          fileName: "app/routes/posts/new.jsx",
          lineNumber: 62,
          columnNumber: 9
        }, this)
      ]
    }, void 0, !0, {
      fileName: "app/routes/posts/new.jsx",
      lineNumber: 55,
      columnNumber: 7
    }, this)
  }, void 0, !1, {
    fileName: "app/routes/posts/new.jsx",
    lineNumber: 54,
    columnNumber: 5
  }, this);
}
var new_default = NewPost;

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { version: "077253fb", entry: { module: "/build/entry.client-Z64Z276V.js", imports: ["/build/_shared/chunk-WMFE6TZ5.js", "/build/_shared/chunk-O2UUIRBT.js", "/build/_shared/chunk-MLBUYSNZ.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-UKX45U27.js", imports: ["/build/_shared/chunk-FJ632V2F.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !0 }, "routes/auth/login": { id: "routes/auth/login", parentId: "root", path: "auth/login", index: void 0, caseSensitive: void 0, module: "/build/routes/auth/login-J2B2MH6U.js", imports: ["/build/_shared/chunk-DWVSHSKJ.js"], hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-OYGDAD7U.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/posts": { id: "routes/posts", parentId: "root", path: "posts", index: void 0, caseSensitive: void 0, module: "/build/routes/posts-IS7T7MH7.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/posts/$postId": { id: "routes/posts/$postId", parentId: "routes/posts", path: ":postId", index: void 0, caseSensitive: void 0, module: "/build/routes/posts/$postId-5FYCWDRL.js", imports: ["/build/_shared/chunk-DWVSHSKJ.js", "/build/_shared/chunk-FJ632V2F.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/posts/index": { id: "routes/posts/index", parentId: "routes/posts", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/posts/index-IKIS3EQJ.js", imports: ["/build/_shared/chunk-PYH33RPY.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/posts/new": { id: "routes/posts/new", parentId: "routes/posts", path: "new", index: void 0, caseSensitive: void 0, module: "/build/routes/posts/new-5BXUEUNV.js", imports: ["/build/_shared/chunk-FJ632V2F.js", "/build/_shared/chunk-PYH33RPY.js"], hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, url: "/build/manifest-077253FB.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public/build", publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/auth/login": {
    id: "routes/auth/login",
    parentId: "root",
    path: "auth/login",
    index: void 0,
    caseSensitive: void 0,
    module: login_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: routes_exports
  },
  "routes/posts": {
    id: "routes/posts",
    parentId: "root",
    path: "posts",
    index: void 0,
    caseSensitive: void 0,
    module: posts_exports
  },
  "routes/posts/$postId": {
    id: "routes/posts/$postId",
    parentId: "routes/posts",
    path: ":postId",
    index: void 0,
    caseSensitive: void 0,
    module: postId_exports
  },
  "routes/posts/index": {
    id: "routes/posts/index",
    parentId: "routes/posts",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: posts_exports2
  },
  "routes/posts/new": {
    id: "routes/posts/new",
    parentId: "routes/posts",
    path: "new",
    index: void 0,
    caseSensitive: void 0,
    module: new_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  publicPath,
  routes
});
//# sourceMappingURL=index.js.map
