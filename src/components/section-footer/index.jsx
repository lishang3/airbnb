import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { FooterWrapper } from './style'
import IconMoreArrow from '@/assets/svg/icon-more-arrow'
import { useNavigate } from 'react-router-dom'
const SectionFooter = memo(function SectionFooter(props) {
  const {name} = props
  let showMessage = name ? `显示更多${name}房源` : '显示全部'

  const  navigate = useNavigate()
  function moreClickHandle() {
    navigate('/entire')
  }
  return (
    <FooterWrapper color={name ? '#00848A' : '#000'}>
      <div className='info' onClick={moreClickHandle}>
        <span className='text'>{showMessage}</span>   
        <IconMoreArrow/>
      </div>
      
    </FooterWrapper>
  )
})

SectionFooter.propTypes = {
  name: PropTypes.string
}

export default SectionFooter
