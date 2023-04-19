import React, { useEffect } from 'react'

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getUsers, getStatusFilter } from "../../redux/users/selectors";
import Card from '../Card/card';
import { statusFilters } from '../../redux/users/constants';
import { fetchUsers } from '../../redux/users/operations';

import {Box} from './CardList.styled'


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
    useEffect(() => {
      dispatch(fetchUsers());
    }, [dispatch]);

  
  return (
    <Box>
        {visibleUsers.map(user =>(
            <Card user={user} key={user.id}/>
        ))}
           
        
       
    </Box>
  )
}

export default CardList