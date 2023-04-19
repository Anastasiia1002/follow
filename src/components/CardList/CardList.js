import React, { useEffect, useState } from "react";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { getUsers, getStatusFilter } from "../../redux/users/selectors";
import Card from "../Card/card";
import { statusFilters } from "../../redux/users/constants";
import { fetchUsers } from "../../redux/users/operations";

import { Box, Button, Line, BackHome, Filters , Btn} from "./CardList.styled";
import { setStatusFilter } from "../../redux/users/filtersSlice";

const getVisibleUsers = (users, statusFilter) => {
  switch (statusFilter) {
    case statusFilters.follow:
      return users.filter((user) => user.followers === 100500);
    case statusFilters.followings:
      return users.filter((user) => user.followers === 100501);
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
  const [limit, setLimit] = useState(9);
  const handleFilterChange = filter => dispatch(setStatusFilter(filter));

  useEffect(() => {
    dispatch(fetchUsers(limit));
  }, [dispatch, limit]);

  return (
    <Box>
      <Line>
        <BackHome onClick={() => navigate("/")}>Back Home</BackHome>
       <Filters> <Btn
        selected={statusFilter === statusFilters.all}
        onClick={() => handleFilterChange(statusFilters.all)}
      >
        all
      </Btn>
        <Btn
        selected={statusFilter === statusFilters.followings}
        onClick={() => handleFilterChange(statusFilters.followings)}
      >
        followings
      </Btn>
      <Btn
        selected={statusFilter === statusFilters.follow}
        onClick={() => handleFilterChange(statusFilters.follow)}
      >    follow
      </Btn>
      </Filters>
      </Line>
      {visibleUsers.map((user) => (
        <Card user={user} key={user.id} />
      ))}
      <Button onClick={() => setLimit(limit + 9)}> Load More</Button>
    </Box>
  );
};

export default CardList;
