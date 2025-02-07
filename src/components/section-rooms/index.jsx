import React, { memo } from 'react'
import PropTypes from 'prop-types'
import RoomItem from '../room-item'
import { RoomsWrapper } from './style'

const SectionRooms = memo(function index(props) {
  const { roomList = [], itemWidth} = props
  return (
      <RoomsWrapper className='room-list'>
          {
            roomList?.slice(0, 8)?.map(item => {
              return <RoomItem key={item.id} itemWidth={itemWidth} itemData={item}/>
            })
          }
        </RoomsWrapper>
  )
})

SectionRooms.propTypes = {
  roomList: PropTypes.array
}

export default SectionRooms
