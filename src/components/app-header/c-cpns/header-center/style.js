import styled from "styled-components";


export const CenterWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  height: 48px;

  .search-bar {
    position: absolute;
    width: 300px;
    height: 48px;
    border-radius: 24px;
    padding: 0 8px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid #ddd;
    box-sizing: border-box;
    cursor: pointer;

    ${props => props.theme.mixin.boxShadow}

    .text {
      padding: 0 16px;
      color: #222;
      font-weight: 600;
    }
    .icon {
      width: 32px;
      height: 32px;
      border-radius: 50%;
      display: flex;
      color: #fff;
      justify-content: center;
      align-items: center;
      background-color: ${props => props.theme.color.primaryColor};
    }
  }

  .search-detail {
    /* margin-top: 60px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .infos {
      margin-top: 10px;
    } */
    position: relative;

    .infos {
      position: absolute;
      top: 60px;
      left: 50%;
      transform: translateX(-50%);

    }
  }

  .detail-exit {
    transform: scale(1.0) translateY(0);
    opacity: 1;
  }

  .detail-exit-active {
    transition: all 250ms ease;
    transform:  scale(0.35, 0.727273) translateY(-58px);
    opacity: 0;
  }

  .detail-enter {
    transform:  scale(0.35, 0.727273) translateY(-58px);
    opacity: 0;
  }

  .detail-enter-active {
    transform: scale(1.0) translateY(0);
    opacity: 1;
    transition: all 250ms ease;
  }

  .bar-enter {
    transform: scale(2.85714, 1.375) translateY(58px);
    opacity: 0;
  }
  .bar-enter-active {
    transition: all 250ms ease;
    transform: scale(1.0) translateY(0);
    opacity: 1;
  }

  .bar-exit {
    opacity: 0;
  }
`
