import ReactDOM from "react-dom/client"
import { RouterProvider } from "react-router-dom"
import { App, appRouter } from "./App"

const root = ReactDOM.createRoot(document.querySelector("#root"))
root.render(<RouterProvider router={appRouter} />)