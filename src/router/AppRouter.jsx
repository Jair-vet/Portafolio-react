import { Navigate, Route, Routes } from "react-router-dom"
import { CssPage } from "../pages/CssPage"

import { Inicio } from "../pages/Inicio"
import { JavaScript } from "../pages/JavaScriptPage"
import { NodePage } from "../pages/NodePage"
import { React } from "../pages/ReactPage"
import { TailwindPage } from "../pages/TailwindPage"
import { VuePage } from "../pages/VuePage"
import { CertificatesPage } from "../pages/CertificatesPage"


export const AppRouter = () => {
  return (
    <>
        <Routes>
            <Route path="inicio" element={ <Inicio /> } />
            <Route path="javascript" element={ <JavaScript /> } />
            <Route path="vue" element={ <VuePage /> } />
            <Route path="react" element={ <React/> } />
            <Route path="tailwind" element={ <TailwindPage /> } />
            <Route path="css" element={ <CssPage /> } />
            <Route path="node" element={ <NodePage /> } />
            <Route path="certificates" element={ <CertificatesPage /> } />

            <Route path="/" element={ <Navigate  to="/inicio" /> } />

        </Routes>
    </>
  )
}
