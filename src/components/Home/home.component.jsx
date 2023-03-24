import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SidebarComponent } from "../SideBar/SidebarComponent";
import { Table } from "../Table/Table";
import { getMovies } from "../pages/services/movie.service";
import "./style.css";
import { AboutComponent } from "../pages/AboutMe/about.component";
import { DashboardComponent } from "../pages/Dashboard/dashboard.component";
import { CommentComponent } from "../pages/CommentPage/comment.component";
import { AnalyticsComponent } from "../pages/AnalyticsPage/Analytics.component";
import { ProductComponent } from "../pages/Product/product.component";
import { GamesTableComponent } from "../pages/Games/games.component";

// getMovies From Server
let moviesPointer = getMovies;

export const HomeComponent = () => {
  return (
    // Route between the pages
    <BrowserRouter>
      <SidebarComponent>
        <Routes>
          <Route path="/" element={<DashboardComponent />} />
          <Route path="/aboutMe" element={<AboutComponent />} />
          <Route path="/dashboard" element={<DashboardComponent />} />
          <Route path="/comment" element={<CommentComponent />} />
          <Route path="/analytics" element={<AnalyticsComponent />} />
          <Route path="/product" element={<ProductComponent />} />
          <Route path="/games" element={<GamesTableComponent />} />
          <Route
            path="/movies"
            element={<Table key="movies" dataInit={moviesPointer} />}
          />
        </Routes>
      </SidebarComponent>
    </BrowserRouter>
  );
};
