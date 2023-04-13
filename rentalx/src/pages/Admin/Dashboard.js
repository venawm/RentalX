import React,{useState} from 'react';
import styled from 'styled-components';
import LineChart from './line';
import UsersTable from '../../components/Admin/Users';
import Requests from '../../components/Admin/Requests';
import Cars from '../../components/Admin/Cars';

const NavBarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #303841;
  color: #fff;
  padding: 10px;
  button{
        border: none;
        background-color: #EEEEEE;
        height: 3rem;
        width: 10vw;
        font-size: medium;
        font-weight: 700;
        color: #303841;
       
        border-radius: 10px;
        :hover{
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
  min-height: 100vh;
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
  flex: 1;
  padding: 10px;
  .boxs{
    margin-top: 3rem;
    display: flex;
    justify-content: space-evenly;
    .box{
        background-color: #FF5722;
        color: #EEEEEE;
        height: 15rem;
        width: 20rem;
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

const NavBar = () => {
  return (
    <NavBarContainer>
      <NavBrand>Admin Dashboard</NavBrand>
      <button>Logout</button>
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
              Rent Request
            </li>
          </ul>
        </SideBarContainer>
      );
    };

const MainContent = () => {
  const sales = 100;
  return (
    <MainContentContainer>
        <h1>Welcome Admin</h1>
        <div class="boxs">
            <div className='box sales'><p>Sales</p><p>{sales}</p></div>
            <div className='box users'>1000 Users</div>
            <div className='box requests'>932092 Requests</div>
        </div>
        <LineChart/>
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
        { activeIndex === 0 && <MainContent /> }
        { activeIndex === 1 && <UsersTable /> }
        { activeIndex === 2 && <Cars /> }
        { activeIndex === 3 && <Requests /> }
      </div>
    </div>
  );
}


export default AdminDashboard;
