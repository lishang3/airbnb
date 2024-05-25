import React, { memo } from 'react'
import Pagination from '@mui/material/Pagination';
import { PaginationWrapper } from './style'
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import {  fetchRoomListAction } from '@/store/modules/entire/actionCreators';

const EntirePagination = memo(() => {

  const { currentPage, totalCount, roomList } = useSelector(state => ({
    currentPage : state.entire.currentPage,
    totalCount: state.entire.totalCount,
    roomList : state.entire.roomList
  }), shallowEqual)

  const dispatch = useDispatch()

  function pageChangeHandle(event, pageCount) {
    // dispatch(changeCurrentPageAction(pageCount - 1))
    window.scrollTo(0, 0)
    dispatch(fetchRoomListAction(pageCount - 1))
  } 
  
  const totalPage = Math.ceil(totalCount / 20)
  const startCount =  1+20*currentPage
  const endCount = 20+20*currentPage
  return (
    <PaginationWrapper>
      {
        !!roomList.length && <div className="info">
        <Pagination count={totalPage} color='primary' onChange={pageChangeHandle}/>
        <div className="desc">
          第 {startCount} - {endCount} 个房源，共超过 {totalCount} 个
        </div>
      </div>
      }
      
    </PaginationWrapper>
  )
})

export default EntirePagination