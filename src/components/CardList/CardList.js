import React, { useEffect, useState } from 'react'

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { getUsers, getStatusFilter } from "../../redux/users/selectors";
import Card from '../Card/card';
import { statusFilters } from '../../redux/users/constants';
import { fetchUsers } from '../../redux/users/operations';

import {Box, Button, Line, BackHome} from './CardList.styled'


const getVisibleUsers = (users, statusFilter) => {
    switch (statusFilter) {
      case statusFilters.follow:
        return users.filter(user => user.followers===100500);
      case statusFilters.followings:
        return users.filter(user => user.followers===100501);
      default:
        return users;
    }
  };



const CardList = () => {
    const users = useSelector(getUsers);
    const statusFilter = useSelector(getStatusFilter);
    const visibleUsers = getVisibleUsers(users, statusFilter);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [limit, setLimit]= useState(9)

    useEffect(() => {
      dispatch(fetchUsers(limit));
    }, [dispatch,limit]);

  
  return (
    <Box>
        <Line>
            <BackHome onClick={()=>navigate("/")}>Back Home</BackHome>
        </Line>
        {visibleUsers.map(user =>(
            <Card user={user} key={user.id}/>
        ))}
        <Button onClick={()=>setLimit(limit+9)} > Load More</Button>   
        
       
    </Box>
  )
}

export default CardList