import React, { memo, useState } from 'react'
import PropTypes from 'prop-types'
import { TabsWrapper } from './style'
import classNames from 'classnames'
import ScrollView from '@/base-ui/scroll-view'
const SectionTabs = memo(function SectionTabs(props) {
  const {tabNames=[], tabClick} = props


  const [currentIndex, setCurrentIndex] = useState(0)
  function itemClickHandle(index, item) {
    setCurrentIndex(index)
    tabClick(index, item)
  }
  return (
    <TabsWrapper>
      <ScrollView>
        {
        tabNames.map((item, index) => {
          return (
            <div 
              key={index} 
              className={classNames('item', {active : index === currentIndex})}
              onClick={() => itemClickHandle(index, item)}
              >{item}</div>
              )
            })
          }
      </ScrollView>
      
    </TabsWrapper>
  )
})

SectionTabs.propTypes = {
  tabNames: PropTypes.array
}

export default SectionTabs
