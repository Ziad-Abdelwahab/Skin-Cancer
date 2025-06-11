import {createBrowserRouter, RouterProvider} from "react-router-dom";
import RootLayout from "./pages/home/RootLayout.jsx";
import Home from "./pages/home/Home.jsx";
import Login from "./pages/Login.jsx";
import SignUp from "./pages/SignUp.jsx";
import TakeATest from "./pages/home/TakeATest.jsx";
import TestResults from "./pages/home/TestResults.jsx";
import {authUserHomeLoader, sharedResultsLoader, testResultsLoader} from "./utils.js";
import EmptyState from "./pages/home/EmptyState.jsx";
import notFoundImg from "./assets/404_error.svg";


const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        loader: authUserHomeLoader,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/take-a-test",
                loader: authUserHomeLoader,
                element: <TakeATest />
            },
            {
                path: "/test-results",
                loader: testResultsLoader,
                element: <TestResults />
            },
            {
                path: "/test-results/:key",
                loader: sharedResultsLoader,
                element: <TestResults />
            },
            {
  path: "*",
  element: (
    <div className="min-h-screen flex flex-col items-center justify-center gap-10 p-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        {/* Doctor 1 */}
        <div className="bg-white rounded-xl shadow-lg p-4 flex flex-col items-center">
          <img
            src="https://media.istockphoto.com/id/507954725/photo/never-fear-the-doctor-is-here.jpg?s=612x612&w=0&k=20&c=fPGU8TcaU-88cAwZvALWghx6fJ4j3zj4C79TKI-WRP4="
            alt="Doctor"
            className="w-40 h-40 rounded-full object-cover"
          />
          <h2 className="mt-4 text-xl font-semibold">Dr. Karim Mohsen</h2>
          <p className="text-sm text-gray-500">Specialist: Dermatology</p>
          <p className="text-sm text-gray-500">📞 01234567890</p>
          <p className="text-sm text-gray-500 text-center">🏥 Clinic: 123 Street, Cairo</p>
        </div>

        {/* Doctor 2 */}
        <div className="bg-white rounded-xl shadow-lg p-4 flex flex-col items-center">
          <img
            src="https://img.freepik.com/free-photo/female-doctor-hospital-with-stethoscope_23-2148827776.jpg?semt=ais_items_boosted&w=740"
            alt="Doctor"
            className="w-40 h-40 rounded-full object-cover"
          />
          <h2 className="mt-4 text-xl font-semibold">Dr. Sarah Ahmed</h2>
          <p className="text-sm text-gray-500">Specialist: Oncology</p>
          <p className="text-sm text-gray-500">📞 01111222333</p>
          <p className="text-sm text-gray-500 text-center">🏥 Clinic: 45 Zamalek, Cairo</p>
        </div>

        {/* Doctor 3 */}
        <div className="bg-white rounded-xl shadow-lg p-4 flex flex-col items-center">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp3z-_hagcpeaoBpsGA4SVZZz4qlkFjDKwug&s"
            alt="Doctor"
            className="w-40 h-40 rounded-full object-cover"
          />
          <h2 className="mt-4 text-xl font-semibold">Dr. Youssef Samir</h2>
          <p className="text-sm text-gray-500">Specialist: General Medicine</p>
          <p className="text-sm text-gray-500">📞 01098765432</p>
          <p className="text-sm text-gray-500 text-center">🏥 Clinic: Beni Suef Center</p>
        </div>
      </div>
    </div>
  )
}

            
        ]
    },
    {
        path: "/login",
        loader: authUserHomeLoader,
        element: <Login />
    },
    {
        path: "/signup",
        loader: authUserHomeLoader,
        element: <SignUp />
    }
])

function App() {


    return (
        <RouterProvider router={router} />
    );
}

export default App;
