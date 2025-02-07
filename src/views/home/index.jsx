import React, { memo,  useEffect } from 'react'
import { HomeWrapper } from './style'
import HomeBanner from './c-cpns/home-banner'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { fetchHomeDataAction } from '@/store/modules/home'
import HomeSectionV1 from './c-cpns/home-section-v1'
import HomeSectionV2 from './c-cpns/home-section-v2'
import { isEmptyO } from '@/utils'
import HomeLongfor from './c-cpns/home-longfor'
import HomeSectionV3 from './c-cpns/home-section-v3'
import { changeHeaderConfigAction } from '@/store/modules/main'


const Home = memo(() => {


  // 从redux中获取数据
  const { goodPriceInfo, highScoreInfo, discountInfo, recommendInfo, longforInfo, plusInfo} = useSelector((state) =>({
    goodPriceInfo: state.home.goodPriceInfo,
    highScoreInfo: state.home.highScoreInfo,
    discountInfo: state.home.discountInfo,
    recommendInfo: state.home.recommendInfo,
    longforInfo : state.home.longforInfo,
    plusInfo : state.home.plusInfo
  }), shallowEqual)
  // const goodPriceInfo = useSelector(state => state.home.goodPriceInfo)


 

  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(fetchHomeDataAction())
    dispatch(changeHeaderConfigAction({isFixed: true, topAlpha: true}))
  }, [dispatch])

  
 
  return (
    <HomeWrapper>
      <HomeBanner/>
      <div className='content'>
        { isEmptyO(discountInfo) && <HomeSectionV2 infoData={discountInfo}/>}
        { isEmptyO(recommendInfo) && <HomeSectionV2 infoData={recommendInfo}/>}
        { isEmptyO(longforInfo) && <HomeLongfor infoData={longforInfo}/>}
        { isEmptyO(goodPriceInfo) && <HomeSectionV1 infoData={goodPriceInfo}/>}
        { isEmptyO(highScoreInfo) && <HomeSectionV1 infoData={highScoreInfo}/>}

        { isEmptyO(plusInfo) && <HomeSectionV3 infoData={plusInfo}/>}
        



        
        
      </div>
    </HomeWrapper>
  )
})

export default Home

