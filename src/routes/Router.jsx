import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import MainLayout from "../layouts/MainLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AddPlant from "../pages/plants/AddPlant";
import AllPlants from "../pages/plants/AllPlants";
import PlantDetails from "../pages/plants/PlantDetails";
import NewPlantsSection from "../components/NewPlantsSection";
import MyPlants from "../pages/plants/MyPlants";
import UpdatePlant from "../pages/plants/UpdatePlant";
import ErrorPage from "../pages/ErrorPage";
import PrivateRoute from "./PrivateRoute";
//import PrivateRoute from "../routes/PrivateRoute";


const Router = createBrowserRouter([

    {
        path:'/',
        element:<MainLayout></MainLayout>,
        children:[
            {
               path:'/',
               element:<Home></Home>,
                loader: () => fetch('http://localhost:3000/plants')
            },
{
  path:'/login',
  element: <Login></Login>
},
{
  path:'/register',
element: <Register></Register>
},
{
    path:'/addPlants',
    element:<PrivateRoute><AddPlant></AddPlant></PrivateRoute>
},
{
  path: '/allPlants',
  element: <AllPlants />,
  loader: ({ request }) => {
    const url = new URL(request.url);
    const sort = url.searchParams.get('sort') || 'none';
    return fetch(`http://localhost:3000/plants?sort=${sort}`);
  }
}
,
{
    path:'/plantDetails/:id',
    element: <PrivateRoute><PlantDetails></PlantDetails></PrivateRoute>,
    loader: ({params})=>fetch(`http://localhost:3000/plants/${params.id}`)
},
{
    path:'/myPlants',
    element: <PrivateRoute><MyPlants></MyPlants></PrivateRoute>
},
{
    path: '/updatePlant/:id',
    element:<PrivateRoute><UpdatePlant></UpdatePlant></PrivateRoute>,
    loader: ({params})=> fetch(`http://localhost:3000/plants/${params.id}`)
},
{
    path: '/*',
    element: <ErrorPage></ErrorPage>
}

// {
//   path:'/myprofile',
//   element:<MyProfile></MyProfile>
// },
// {
//   path:'/*',
//   element: <ErrorPage></ErrorPage>
// }

        ]
    }
])



export default Router