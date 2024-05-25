import React, { memo, useCallback, useState } from 'react'
import PropTypes from 'prop-types'
import { SectionV2Wrapper } from './style'
import SectionHeader from '@/components/section-header'
import SectionTabs from '@/components/section-tabs'
import SectionRooms from '@/components/section-rooms'
import SectionFooter from '@/components/section-footer'
const HomeSectionV2 = memo(function HomeSectionV2(props) {
  const {infoData} = props

  const initialName = Object.keys(infoData.dest_list)[0]
   // 数据转换
  const [name, setName] = useState(initialName)
  const tabNames = infoData.dest_address?.map(item => item.name)
  const tabClickHandle = useCallback(function (index, name) {
    setName(name)
  }, [])

  return (
    <SectionV2Wrapper>
      <SectionHeader title={infoData.title} subtitle={infoData.subtitle}/>
        <SectionTabs tabNames={tabNames} tabClick={tabClickHandle}/>
        <SectionRooms roomList={infoData.dest_list?.[name]}  itemWidth='33.333%'/>
        <SectionFooter name={name}/>
    </SectionV2Wrapper>
  )
})

HomeSectionV2.propTypes = {
  infoData: PropTypes.object
}

export default HomeSectionV2
