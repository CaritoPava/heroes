import { Route, Routes } from "react-router-dom"
import { Navbar } from "../componenets/ui/Navbar"
import { DcScreen } from "../componenets/dc/DcScreen"
import { MarvelScreen } from "../componenets/marvel/MarvelScreen"
import { SearchScreen } from "../componenets/serch/SerchScreen"
import { HeroScreen } from "../componenets/hero/HeroScreen"


export const DashboardRoutes = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="marvel" element={<MarvelScreen />} />
          <Route path="dc" element={<DcScreen />} />
          <Route path="search" element={<SearchScreen />} />
          <Route path="hero/:heroeId" element={<HeroScreen />} />
          <Route path="/" element={<MarvelScreen />} />
        </Routes>
      </div>
    </>
  )
}
