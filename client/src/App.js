import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import Home from './Pages/Home/Home';
import NotFound from './Pages/NotFound/NotFound';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import AllTours from './Pages/AllTours/AllTours';
import About from './Pages/About/About';
import TourDetails from './Pages/TourDetails/TourDetails';
import MyBookings from './Pages/MyBookings/MyBookings';
import ManageBookings from './Pages/ManageBookings/ManageBookings';
import LogIn from './Pages/LogIn/LogIn';
import Registration from './Pages/Registration/Registration';
import PrivetRoute from './PrivetRoute/PrivetRoute';
import { Route, Switch } from 'react-router';
import useAuth from './Hooks/useAuth';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AddNewBooking from './Pages/AddNewBooking/AddNewBooking';
import HelmetApp from './Helmet/HelmetApp';
AOS.init();

function App() {
  const { user, loading } = useAuth()

  return (
    <div className="App">
      {loading
        ? <h1 className="text-2xl xs:mt-44 lg:mt-52 text-white w-max py-2 px-4 mx-auto font-semibol rounded-lg" style={{ backgroundColor: '#142046' }}>
          <FontAwesomeIcon icon={faSpinner} className="animate-spin" /> Loading...</h1>
        : <>
          <Header />
          <HelmetApp />
          <Switch>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/allTours">
              <AllTours />
            </Route>
            <PrivetRoute path="/tourDetails/:tourID">
              <TourDetails />
            </PrivetRoute>
            <PrivetRoute path="/myBookings">
              <MyBookings />
            </PrivetRoute>
            <PrivetRoute path="/manageBookings" >
              <ManageBookings />
            </PrivetRoute>
            <PrivetRoute path="/addNewBooking">
              <AddNewBooking />
            </PrivetRoute>
            <Route path="/about">
              <About />
            </Route>

            <Route path="/login">
              <LogIn />
            </Route>
            <Route path="/registration">
              <Registration />
            </Route>

            <Route exact path="/" >
              <Home />
            </Route>
            <Route exact path="*" >
              <NotFound />
            </Route>
          </Switch>
          <Footer />
        </>}
    </div>
  );
}

export default App;