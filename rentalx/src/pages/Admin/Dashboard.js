import React,{useState,useEffect} from 'react';
import axios from 'axios';
import styled from 'styled-components';
import LineChart from './line';
import UsersTable from '../../components/Admin/Users';
import Requests from '../../components/Admin/AddCars';
import Cars from '../../components/Admin/Cars';
import RentRequests from '../../components/Admin/RentRequests';
import Sales from '../../components/Admin/Sales';
import { useNavigate } from 'react-router-dom';

const NavBarContainer = styled.nav`

  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #303841;
  color: #fff;
  padding: 10px;
  button {
    border: none;
    background-color: #eeeeee;
    height: 3rem;
    width: 10vw;
    font-size: medium;
    font-weight: 700;
    color: #303841;

    border-radius: 10px;
    :hover {
      cursor: pointer;
      background-color: #ffb39b;
    }
  }
`;
const NavBrand = styled.h1`
  background-color: #303841;
  color: #EEEEEE;
  margin: 0;
`;


const SideBarContainer = styled.aside`
  background-color: #f8f9fa;
  width: 200px;
  max-height: 90vh;
  border-right: 1px solid #dee2e6;
  padding: 5px;
  ul{
    list-style: none;
    li{
        display: flex;
        /* justify-content: center; */
        align-items: center;
        background-color: #f8f9fa;
        height: 60px;
        &.active {
        background-color: #dedcdc;
      }
        :hover{
            background-color: #dedcdc;
        }
    }
    background-color: #f8f9fa;
  }
`;

const SideBarTitle = styled.h2`
  background-color: #f8f9fa;
`;

const MainContentContainer = styled.main`
overflow: hidden;
  flex: 1;
  padding: 10px;
  .boxs{
    margin-top: 3rem;
    display: flex;
    justify-content: space-evenly;
    .box{
        background-color: #FF5722;
        color: #EEEEEE;
        height: 10rem;
        width: 15rem;
        border-radius: 20px;
        font-weight: 600;
        font-size: xx-large;
        display: flex;
        text-align: center;
        justify-content: center;
        align-items: center;
        p{
          background-color: #FF5722;
        }
    }
    .users{
        background-color: #00ADB5;
    }
    .requests{
        background-color: #303841;
    }
  }
`;
const Main = styled.div`
  width: 100%;
  display: flex;
  overflow: scroll;
  height: 90vh;
`

const NavBar = () => {
  const navigate = useNavigate()
  const logout =()=>{
    navigate('/login')

  }
  return (
    <NavBarContainer>
      <NavBrand>Admin Dashboard</NavBrand>
      <button onClick={logout}>Logout</button>
    </NavBarContainer>
  );
};

const SideBar = ({activeIndex,setActiveIndex}) => {


    const handleClick = (index) => {
      setActiveIndex(index);
    };
    return (
        <SideBarContainer>
          <ul>
            <li
              className={activeIndex === 0 ? 'active' : ''}
              onClick={() => handleClick(0)}
            >
              Dashboard
            </li>
            <li
              className={activeIndex === 1 ? 'active' : ''}
              onClick={() => handleClick(1)}
            >
              Users
            </li>
            <li
              className={activeIndex === 2 ? 'active' : ''}
              onClick={() => handleClick(2)}
            >
              Products
            </li>
            <li
              className={activeIndex === 3 ? 'active' : ''}
              onClick={() => handleClick(3)}
            >
              Add Cars
            </li>
            <li
              className={activeIndex === 4 ? 'active' : ''}
              onClick={() => handleClick(4)}
            >
              Rental Requests
            </li>
            <li
              className={activeIndex === 5 ? 'active' : ''}
              onClick={() => handleClick(5)}
            >
              Sales History
            </li>
          </ul>
        </SideBarContainer>
      );
    };

    const MainContent = () => {
      const [dashboardData, setDashboardData] = useState([]);
    
      useEffect(() => {
        axios.get('http://localhost:5000/dashboard')
          .then((response) => {
            setDashboardData(response.data);
          })
          .catch((error) => {
            console.log(error);
          });
      }, []);
    
      return (
        <MainContentContainer>
          <h1>Welcome Admin</h1>
          {dashboardData.length > 0 && (
            <div class="boxs">
              <div className="box sales">
                <p>Sales {dashboardData[2].count}</p>
              </div>
              <div className="box users">{dashboardData[0].count} Users</div>
              <div className="box requests">
                {dashboardData[1].count} Requests
              </div>
            </div>
          )}
          <LineChart />
        </MainContentContainer>
      );
    };
    

function AdminDashboard() {
  
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div>
      <NavBar />
      <div style={{ display: 'flex' }}>
      <SideBar setActiveIndex={setActiveIndex} activeIndex={activeIndex} />
      <Main>
        { activeIndex === 0 && <MainContent /> }
        { activeIndex === 1 && <UsersTable /> }
        { activeIndex === 2 && <Cars /> }
        { activeIndex === 3 && <Requests /> }
        { activeIndex === 4 && <RentRequests /> }
        { activeIndex === 5 && <Sales /> }

      </Main>
      </div>
    </div>
  );
}


export default AdminDashboard;
